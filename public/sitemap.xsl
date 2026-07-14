<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet
  version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
>
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes" />

  <xsl:template match="/">
    <html lang="en-IN">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sarvada Organic — XML Sitemap</title>
        <meta name="robots" content="noindex, follow" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&amp;family=Plus+Jakarta+Sans:wght@400;500;600;700&amp;display=swap"
          rel="stylesheet"
        />
        <style>
          *{box-sizing:border-box}
          body{margin:0;font-family:'Plus Jakarta Sans',system-ui,sans-serif;background:#FBF6EE;color:#1F2A1B;-webkit-font-smoothing:antialiased}
          a{color:inherit}
          .wrap{max-width:1180px;margin:0 auto;padding:32px 20px 80px}
          header{display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;margin-bottom:28px}
          .brand{display:flex;align-items:center;gap:10px;text-decoration:none}
          .brand .badge{width:42px;height:42px;border-radius:12px;background:#2F4A26;display:grid;place-items:center;color:#FBF6EE}
          .brand .badge svg{width:22px;height:22px}
          .brand h1{font-family:'Fraunces',serif;font-size:22px;margin:0;letter-spacing:-.01em;line-height:1}
          .brand h1 span{color:#D77858}
          .pill{display:inline-flex;align-items:center;gap:8px;background:#F5EBDA;color:#2F4A26;padding:6px 12px;border-radius:999px;font-size:12px;font-weight:700;letter-spacing:.05em;text-transform:uppercase}
          .intro{font-size:15px;color:#6B6557;line-height:1.6;max-width:780px;margin:0 0 24px}
          .intro a{color:#3A5A2E;font-weight:600;text-decoration:none}
          .intro a:hover{color:#D77858;text-decoration:underline}
          .stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px;margin-bottom:28px}
          .stat{border:1px solid #EEDDC1;background:#FDFAF4;border-radius:18px;padding:18px}
          .stat .k{font-family:'Fraunces',serif;font-size:30px;font-weight:600;color:#2F4A26;line-height:1}
          .stat .v{font-size:11px;color:#6B6557;margin-top:6px;text-transform:uppercase;letter-spacing:.08em;font-weight:700}
          .card{background:#FDFAF4;border:1px solid #EEDDC1;border-radius:24px;overflow:hidden;margin-bottom:18px}
          .card-head{padding:14px 20px;background:#2F4A26;color:#FBF6EE;font-family:'Fraunces',serif;font-size:16px;font-weight:600;display:flex;align-items:center;justify-content:space-between}
          .card-head .count{background:rgba(251,246,238,.15);padding:3px 10px;border-radius:999px;font-size:12px;font-family:'Plus Jakarta Sans',sans-serif;font-weight:600}
          table{width:100%;border-collapse:collapse;font-size:14px}
          th{text-align:left;padding:12px 20px;background:#F5EBDA;color:#3A5A2E;font-weight:700;font-size:11px;text-transform:uppercase;letter-spacing:.08em;border-bottom:1px solid #EEDDC1}
          td{padding:12px 20px;border-bottom:1px solid #F5EBDA;vertical-align:top}
          tr:last-child td{border-bottom:none}
          tr:hover td{background:#FBF6EE}
          td a{color:#2F4A26;text-decoration:none;font-weight:600;word-break:break-word}
          td a:hover{color:#D77858;text-decoration:underline}
          .meta{color:#6B6557;font-size:12px;white-space:nowrap}
          .priority{display:inline-block;min-width:42px;text-align:center;padding:3px 8px;border-radius:999px;background:#E2EAD8;color:#2F4A26;font-size:12px;font-weight:700}
          .child{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:14px 20px;border-bottom:1px solid #F5EBDA;text-decoration:none}
          .child:last-child{border-bottom:none}
          .child:hover{background:#FBF6EE}
          .child-name{font-family:'Fraunces',serif;font-size:16px;font-weight:600;color:#2F4A26}
          .child-desc{color:#6B6557;font-size:12px;margin-top:3px}
          .child-arrow{color:#D77858;font-weight:700}
          footer{margin-top:40px;color:#6B6557;font-size:13px;text-align:center;line-height:1.6}
          footer a{color:#2F4A26;font-weight:600;text-decoration:none}
          footer a:hover{color:#D77858;text-decoration:underline}
          @media(max-width:640px){
            th:nth-child(3),td:nth-child(3),th:nth-child(4),td:nth-child(4){display:none}
          }
        </style>
      </head>
      <body>
        <div class="wrap">
          <header>
            <a class="brand" href="/">
              <div class="badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="#FBF6EE" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19.2 2.96a1 1 0 0 1 1.8.5c.5 9-1.9 16.93-12 19.5" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6" />
                </svg>
              </div>
              <h1>Sarvada<span>Organic</span></h1>
            </a>
            <span class="pill">XML Sitemap</span>
          </header>

          <xsl:apply-templates select="s:sitemapindex" />
          <xsl:apply-templates select="s:urlset" />

          <footer>
            Need help? Email <a href="mailto:sarvadaorganic@gmail.com">sarvadaorganic@gmail.com</a><br />
            <a href="/">← Back to Sarvada Organic</a> ·
            <a href="/sitemap.xml">Sitemap Index</a> ·
            <a href="/llms.txt">llms.txt</a>
          </footer>
        </div>
      </body>
    </html>
  </xsl:template>

  <xsl:template name="child-name">
    <xsl:param name="loc" />
    <xsl:choose>
      <xsl:when test="contains($loc, 'sitemap-pages')">Pages</xsl:when>
      <xsl:when test="contains($loc, 'sitemap-products')">Products</xsl:when>
      <xsl:when test="contains($loc, 'sitemap-collections')">Collections</xsl:when>
      <xsl:when test="contains($loc, 'sitemap-blog')">Blog Articles</xsl:when>
      <xsl:when test="contains($loc, 'sitemap-images')">Images</xsl:when>
      <xsl:when test="contains($loc, 'sitemap-agentic')">Agentic Discovery</xsl:when>
      <xsl:otherwise>Sitemap</xsl:otherwise>
    </xsl:choose>
  </xsl:template>

  <xsl:template name="child-desc">
    <xsl:param name="loc" />
    <xsl:choose>
      <xsl:when test="contains($loc, 'sitemap-pages')">Landing page, about, FAQ, process, testimonials</xsl:when>
      <xsl:when test="contains($loc, 'sitemap-products')">All product SKUs with image entries</xsl:when>
      <xsl:when test="contains($loc, 'sitemap-collections')">Category &amp; collection landing pages</xsl:when>
      <xsl:when test="contains($loc, 'sitemap-blog')">Every blog post with image &amp; news metadata</xsl:when>
      <xsl:when test="contains($loc, 'sitemap-images')">Dedicated image sitemap for Google Images</xsl:when>
      <xsl:when test="contains($loc, 'sitemap-agentic')">AI / LLM agent discovery feed (GPTBot, ClaudeBot, Perplexity)</xsl:when>
      <xsl:otherwise>Child sitemap</xsl:otherwise>
    </xsl:choose>
  </xsl:template>

  <xsl:template match="s:sitemapindex">
    <p class="intro">
      This is the <strong>root sitemap index</strong> for sarvadaorganic.com. It points to specialised
      child sitemaps below — products, collections, pages, blog articles, images and an
      AI/LLM agent discovery feed. Search engines and AI crawlers should fetch only the
      child sitemaps relevant to them. You're seeing a styled view because your browser
      supports XSL; bots receive the raw XML.
    </p>

    <div class="stats">
      <div class="stat">
        <div class="k"><xsl:value-of select="count(s:sitemap)" /></div>
        <div class="v">Child Sitemaps</div>
      </div>
      <div class="stat">
        <div class="k">6</div>
        <div class="v">Content Buckets</div>
      </div>
      <div class="stat">
        <div class="k">100%</div>
        <div class="v">Crawler Ready</div>
      </div>
    </div>

    <div class="card">
      <div class="card-head">
        Child Sitemaps
        <span class="count"><xsl:value-of select="count(s:sitemap)" /></span>
      </div>
      <xsl:for-each select="s:sitemap">
        <a class="child" href="{s:loc}">
          <div>
            <div class="child-name">
              <xsl:call-template name="child-name">
                <xsl:with-param name="loc" select="s:loc" />
              </xsl:call-template>
            </div>
            <div class="child-desc">
              <xsl:call-template name="child-desc">
                <xsl:with-param name="loc" select="s:loc" />
              </xsl:call-template>
              <xsl:if test="s:lastmod"> · Last updated <xsl:value-of select="s:lastmod" /></xsl:if>
            </div>
          </div>
          <span class="child-arrow">→</span>
        </a>
      </xsl:for-each>
    </div>
  </xsl:template>

  <xsl:template match="s:urlset">
    <p class="intro">
      A child sitemap of <a href="/sitemap.xml">the Sarvada Organic root index</a>. Listed below are
      every URL this bucket exposes, with priority, change frequency and image entries (when present).
    </p>

    <div class="stats">
      <div class="stat">
        <div class="k"><xsl:value-of select="count(s:url)" /></div>
        <div class="v">Total URLs</div>
      </div>
      <div class="stat">
        <div class="k"><xsl:value-of select="count(s:url/image:image)" /></div>
        <div class="v">Image Entries</div>
      </div>
      <div class="stat">
        <div class="k"><xsl:value-of select="count(s:url/news:news)" /></div>
        <div class="v">News Entries</div>
      </div>
    </div>

    <div class="card">
      <div class="card-head">
        URLs in this bucket
        <span class="count"><xsl:value-of select="count(s:url)" /></span>
      </div>
      <table>
        <thead>
          <tr>
            <th>URL</th>
            <th>Priority</th>
            <th>Change Freq</th>
            <th>Last Modified</th>
          </tr>
        </thead>
        <tbody>
          <xsl:for-each select="s:url">
            <xsl:sort select="s:priority" order="descending" data-type="number" />
            <tr>
              <td>
                <a href="{s:loc}" target="_blank" rel="noopener">
                  <xsl:value-of select="s:loc" />
                </a>
              </td>
              <td>
                <xsl:if test="s:priority">
                  <span class="priority"><xsl:value-of select="s:priority" /></span>
                </xsl:if>
              </td>
              <td class="meta"><xsl:value-of select="s:changefreq" /></td>
              <td class="meta"><xsl:value-of select="s:lastmod" /></td>
            </tr>
          </xsl:for-each>
        </tbody>
      </table>
    </div>
  </xsl:template>
</xsl:stylesheet>
