export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-2xl">
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          Decision Systems for AI
        </p>

        <h1 className="mb-4 text-4xl font-semibold tracking-tight text-slate-900">
          Thank you
        </h1>

        <p className="mb-3 text-lg text-slate-700">
          Your purchase is confirmed.
        </p>

        <p className="mb-8 text-base text-slate-600">
          Your product is ready below.
        </p>

        <a
          href="/access/ai-clarity-funnel"
          className="inline-flex rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:opacity-90"
        >
          Access your product
        </a>

        <p className="mt-8 text-sm text-slate-500">
          Contact support for access help.
        </p>
      </div>
    </main>
  );
}
