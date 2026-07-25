import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import path from "path";
import { preview } from "vite";
import puppeteer from "puppeteer";

const DIST = path.resolve(process.cwd(), "dist");
const PORT = 4173;
const HOST = "127.0.0.1";

const SITEMAPS = [
  "sitemap-pages.xml",
  "sitemap-products.xml",
  "sitemap-collections.xml",
  "sitemap-blog.xml",
];

function routesFromSitemaps() {
  const urls = SITEMAPS.flatMap((file) => {
    const file_path = path.join(DIST, file);
    if (!existsSync(file_path)) return [];
    const xml = readFileSync(file_path, "utf8");
    return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
  });
  const routes = urls.map((u) => new URL(u).pathname);
  return [...new Set(routes)];
}

async function main() {
  const routes = routesFromSitemaps();
  if (routes.length === 0) {
    console.warn("[prerender] No routes found in sitemaps, skipping.");
    return;
  }

  const server = await preview({
    preview: { port: PORT, host: HOST },
    logLevel: "warn",
  });
  const base = `http://${HOST}:${PORT}`;

  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const rendered = [];
  for (const route of routes) {
    const page = await browser.newPage();
    try {
      await page.goto(`${base}${route}`, {
        waitUntil: "domcontentloaded",
        timeout: 30000,
      });
      await page.waitForFunction(
        () => (document.getElementById("root")?.childElementCount ?? 0) > 0,
        { timeout: 15000 }
      );
      await new Promise((resolve) => setTimeout(resolve, 300));
      const html = await page.content();
      rendered.push({ route, html });
      console.log(`[prerender] ok   ${route}`);
    } catch (err) {
      console.warn(`[prerender] skip ${route}: ${err.message}`);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  await new Promise((resolve) => server.httpServer.close(resolve));

  for (const { route, html } of rendered) {
    const outPath =
      route === "/"
        ? path.join(DIST, "index.html")
        : path.join(DIST, route, "index.html");
    mkdirSync(path.dirname(outPath), { recursive: true });
    writeFileSync(outPath, html);
  }

  console.log(`[prerender] wrote ${rendered.length}/${routes.length} routes`);
}

main().catch((err) => {
  console.error("[prerender] failed:", err);
  process.exit(1);
});
