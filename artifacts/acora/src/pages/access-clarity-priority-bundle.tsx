export default function AccessClarityPriorityBundle() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-2xl">
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          Decision Systems for AI
        </p>

        <h1 className="mb-4 text-4xl font-semibold tracking-tight text-slate-900">
          Clarity + Priority Bundle
        </h1>

        <p className="mb-3 text-lg text-slate-700">
          Your bundle is ready.
        </p>

        <p className="mb-8 text-base text-slate-600">
          Open each product below and save the files for future use.
        </p>

        <div className="flex flex-col gap-3">
          <a
            href="/access/ai-clarity-funnel"
            className="inline-flex w-fit rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:opacity-90"
          >
            DOWNLOAD AI Clarity Funnel PDF
          </a>

          <a
            href="/access/mental-priority-system"
            className="inline-flex w-fit rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:opacity-90"
          >
            DOWNLOAD Mental Priority System PDF
          </a>

          <a
            href="/pdfs/Mental_Priority_System_v3.1.pdf"
            download="Mental_Priority_System_v3.1.pdf"
            className="inline-flex w-fit rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:opacity-90"
          >
            Download PDF — Mental Priority System
          </a>
        </div>

        <p className="mt-8 text-sm text-slate-500">
          Contact support for access help.
        </p>
      </div>
    </main>
  );
}
