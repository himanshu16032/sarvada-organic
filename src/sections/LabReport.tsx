import { FileText, ExternalLink, FlaskConical } from "lucide-react";
import SectionBg from "../components/SectionBg";
import { LAB_REPORT } from "../data/labReport";
import { track, useTrackVisible } from "../lib/analytics";

export default function LabReport() {
  const ref = useTrackVisible<HTMLElement>("lab_report_section_viewed");

  return (
    <section
      ref={ref}
      id="lab-report"
      className="relative overflow-hidden bg-cream-100 py-12 md:py-20"
    >
      <SectionBg variant="sage" />
      <div className="container-wide relative">
        <div className="grid items-end gap-6 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7">
            <span className="eyebrow">Lab tested</span>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-forest-800 md:text-5xl">
              Certified nutrients.{" "}
              <span className="italic text-peach-500">Not guesswork.</span>
            </h2>
          </div>
          <p className="text-base leading-relaxed text-muted md:col-span-5 md:text-lg">
            Sarvada vermicompost was tested by{" "}
            <a
              href={LAB_REPORT.lab.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-forest-700 underline decoration-peach-300 underline-offset-4"
            >
              {LAB_REPORT.lab.shortName}
            </a>
            , a {LAB_REPORT.lab.credentials} lab in {LAB_REPORT.lab.location}.
            Report {LAB_REPORT.reportNo} · {LAB_REPORT.reportingDate}.
          </p>
        </div>

        <div className="mt-8 grid gap-3 md:mt-12 md:grid-cols-4 md:gap-5">
          {LAB_REPORT.highlights.map((h) => (
            <div
              key={h.label}
              className="rounded-3xl border border-cream-200 bg-cream-50 p-5 md:p-6"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-peach-500">
                {h.label}
              </p>
              <p className="mt-2 font-display text-3xl font-semibold text-forest-800 md:text-4xl">
                {h.value}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted md:text-sm">
                {h.note}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-[2rem] border border-cream-200 bg-cream-50 md:mt-12 md:rounded-[2.5rem]">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-cream-200 px-5 py-4 md:px-8 md:py-5">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-sage-100 text-forest-700">
                <FlaskConical className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-forest-800 md:text-base">
                  Full lab parameters
                </p>
                <p className="text-xs text-muted">
                  Sample: {LAB_REPORT.sampleDescription} · {LAB_REPORT.sampleQty}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
                <a
                href={LAB_REPORT.pdfPath}
                target="_blank"
                rel="noopener noreferrer"
                download={`sarvada-vermicompost-lab-report-${LAB_REPORT.reportNo}.pdf`}
                onClick={() =>
                  track("lab_report_pdf_clicked", {
                    report: LAB_REPORT.reportNo,
                  })
                }
                className="inline-flex items-center gap-2 rounded-full bg-forest-700 px-4 py-2.5 text-xs font-semibold text-cream-50 hover:bg-forest-800 md:text-sm"
              >
                <FileText className="h-4 w-4" /> Download PDF report
              </a>
              <a
                href={LAB_REPORT.lab.fertilizerTestingUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  track("lab_report_lab_link_clicked", {
                    lab: LAB_REPORT.lab.shortName,
                  })
                }
                className="inline-flex items-center gap-2 rounded-full border border-forest-700/20 bg-cream-100 px-4 py-2.5 text-xs font-semibold text-forest-700 hover:border-forest-700/40 md:text-sm"
              >
                About the lab <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[36rem] text-left text-sm">
              <thead>
                <tr className="border-b border-cream-200 text-[11px] uppercase tracking-[0.14em] text-muted">
                  <th className="px-5 py-3 font-semibold md:px-8">Parameter</th>
                  <th className="px-3 py-3 font-semibold">Result</th>
                  <th className="px-3 py-3 font-semibold">Unit</th>
                  <th className="px-5 py-3 font-semibold md:px-8">Method</th>
                </tr>
              </thead>
              <tbody>
                {LAB_REPORT.results.map((row) => (
                  <tr
                    key={row.parameter}
                    className="border-b border-cream-200/70 last:border-0"
                  >
                    <td className="px-5 py-3 font-medium text-forest-800 md:px-8">
                      {row.parameter}
                    </td>
                    <td className="px-3 py-3 font-semibold text-forest-800">
                      {row.value}
                    </td>
                    <td className="px-3 py-3 text-muted">{row.unit || "—"}</td>
                    <td className="px-5 py-3 text-xs text-muted md:px-8">
                      {row.method}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="mt-5 max-w-3xl text-xs leading-relaxed text-muted md:text-sm">
          Results apply to the sample tested under report{" "}
          {LAB_REPORT.reportNo}. Tested by{" "}
          <a
            href={LAB_REPORT.lab.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-forest-700 underline decoration-peach-300 underline-offset-4"
          >
            {LAB_REPORT.lab.name}
          </a>{" "}
          (
          <a
            href={LAB_REPORT.lab.fertilizerTestingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-forest-700 underline decoration-peach-300 underline-offset-4"
          >
            fertilizer testing lab, Delhi NCR
          </a>
          ). Nitrogen at 3.16% is above the ~1.5–2.2% range often cited for
          typical vermicompost in industry literature.
        </p>
      </div>
    </section>
  );
}
