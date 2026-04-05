export default function AccessClarityDecisionBundle() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-2xl">
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          Decision Systems for AI
        </p>

        <h1 className="mb-4 text-4xl font-semibold tracking-tight text-slate-900">
          Clarity + Decision Bundle
        </h1>

        <p className="mb-3 text-lg text-slate-700">
          Your bundle is ready.
        </p>

        <p className="mb-8 text-base text-slate-600">
          Download each product below and save the files for future use.
        </p>

        <div className="flex flex-col gap-3">
          <a
            href="/pdfs/AI_Clarity_Funnel_v1.0.pdf"
            download="AI_Clarity_Funnel_v1.0.pdf"
            className="inline-flex w-fit rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:opacity-90"
          >
            Download AI Clarity Funnel PDF
          </a>

          <a
            href="/access/3-70-24-decision-frame"
            className="inline-flex w-fit rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:opacity-90"
          >
            Download 3–70–24 Decision Frame PDF
          </a>
        </div>

        <p className="mt-8 text-sm text-slate-500">
          Contact support for access help.
        </p>
      </div>
    </main>
  );
}
