import BonusCalibrationBlock from "@/components/bonus-calibration-block";
import SiteFooter from "@/components/site-footer";
export default function AccessAIClarityFunnel() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-2xl">
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          Decision Systems for AI
        </p>

        <h1 className="mb-4 text-4xl font-semibold tracking-tight text-slate-900">
          AI Clarity Funnel
        </h1>

        <p className="mb-8 text-lg text-slate-700">
          Your PDF is ready to download.
        </p>

        <a
          href="/pdfs/AI_Clarity_Funnel_v1.0.pdf"
          download="AI_Clarity_Funnel_v1.0.pdf"
          className="inline-flex rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:opacity-90"
        >
          Download AI Clarity Funnel PDF
        </a>

        <p className="mt-8 text-sm text-slate-500">
          If you have trouble accessing your file, contact support for access help.
        </p>
      </div>
      <BonusCalibrationBlock />
      <SiteFooter />
    </main>
  );
}