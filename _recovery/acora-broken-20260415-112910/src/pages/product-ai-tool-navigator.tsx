import PurchaseCTABlock from "@/components/purchase-cta-block";
import { Link } from "wouter";
import SiteFooter from "@/components/site-footer";

export default function ProductAIToolNavigator() {
  return (
    <>
      <div className="min-h-screen bg-[#f8f5ef] text-[#1e1e1e] px-6 py-10 md:px-10">
        <div className="max-w-2xl mx-auto">
          <div className="mb-10">
            <Link
              href="/placeholder/3"
              className="text-sm text-[#8a7d6e] hover:text-[#3a3530] transition-colors"
            >
              ← Back
            </Link>
          </div>

          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8a7d6e] mb-1">
            Avecore
          </p>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8a7d6e] mb-8">
            Decision Systems for AI
          </p>

          <h1 className="text-[clamp(1.75rem,4vw,2.5rem)] font-semibold leading-tight tracking-tight text-[#1a1814] mb-6">
            Too many AI tools. No clear setup.
          </h1>

          <p className="text-base leading-8 text-[#4a4540] mb-4">
            People do not struggle to find an AI tool. They struggle to combine the right tools.
          </p>

          <p className="text-base leading-8 text-[#4a4540] mb-12">
            AI Tool Navigator helps define who does what, which tool belongs in which role, when one tool is enough, when another tool should take over, and which bundle will actually do the job.
          </p>

          <div className="mb-14">
            <div className="flex justify-center mb-3">
              <p className="w-[320px] max-w-full rounded-full border border-[#ddd4c8] bg-[#f3eee5] px-5 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.24em] text-[#6a6258]">
                FROM TOOL NOISE
              </p>
            </div>

            <div className="bg-[#ede8df] rounded-2xl border border-[#ddd4c8] px-6 py-8">
              <div className="space-y-3 text-center">
                <p className="text-base leading-7 text-[#3a3530]">Tool roles</p>
                <p className="text-base leading-7 text-[#3a3530]">Tool fit</p>
                <p className="text-base leading-7 text-[#3a3530]">When to stay / when to switch</p>
              </div>
            </div>

            <div className="flex justify-center mt-3">
              <p className="w-[320px] max-w-full rounded-full border border-[#445846] bg-[#445846] px-5 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.24em] text-[#f8f5ef]">
                TO ONE CLEAR TOOL SETUP
              </p>
            </div>
          </div>

          <p className="text-base leading-8 text-[#4a4540] mb-12">
            Turn too many AI options into one clearer tool setup.
            <br />
            This is where AI Tool Navigator begins.
          </p>

          <div className="border-t border-[#d8d0c5] pt-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8a7d6e] mb-3">
              AI Tool Navigator
            </p>
            <div className="text-3xl font-semibold text-[#1a1814] mb-1">€29</div>
            <p className="text-sm text-[#8a7d6e] mb-7">
              One payment. Direct access after checkout.
            </p>

            <PurchaseCTABlock
              href="https://buy.stripe.com/8x2eVeeej4ek854aaP0Fi04"
              label="Buy Now"
            />

            <div className="mt-5">
              <Link
                href="/products-and-packages"
                className="text-sm text-[#8a7d6e] hover:text-[#3a3530] underline underline-offset-4 transition-colors"
              >
                See other products and packages
              </Link>
            </div>
          </div>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
