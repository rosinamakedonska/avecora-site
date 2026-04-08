import BonusCalibrationBlock from "@/components/bonus-calibration-block";
import SiteFooter from "@/components/site-footer";
export default function AccessMentalPrioritySystem() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10">
          <div className="text-sm uppercase tracking-[0.18em] opacity-60 mb-4">
            Access
          </div>
          <h1 className="text-4xl font-semibold mb-3">
            Mental Priority System™
          </h1>
          <p className="text-base opacity-75 max-w-2xl">
            Your PDF is ready to download.
          </p>
        </div>

        <div className="rounded-2xl border p-8">
          <div className="text-2xl font-semibold mb-2">
            Download your product
          </div>
          <p className="text-sm opacity-60 mb-8">
            Direct access to the current PDF version.
          </p>

          <a
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-medium border hover:opacity-90 mb-6"
            href="/pdfs/Mental_Priority_System_v3.1.pdf"
            download
          >
            Download PDF
          </a>

          <div>
            <a
              href="/products-and-packages"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-medium border hover:opacity-90"
            >
              See other products and packages
            </a>
          </div>
        </div>
      </div>
      <BonusCalibrationBlock />
      <SiteFooter />
    </main>
  );
}
