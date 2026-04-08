import PurchaseCTABlock from "@/components/purchase-cta-block";
import { Link } from "wouter";
import SiteFooter from "@/components/site-footer";

export default function ProductAIClarityFunnel() {
  return (
    <>
    <div className="min-h-screen bg-[#f8f5ef] text-[#1e1e1e] px-6 py-10 md:px-10">
      <div className="max-w-2xl mx-auto">

        <div className="mb-10">
          <Link
            href="/products-and-packages"
            className="text-sm text-[#8a7d6e] hover:text-[#3a3530] transition-colors"
          >
            ← Back to Products and Packages
          </Link>
        </div>

        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8a7d6e] mb-4">
          Clarity Function · Avecore
        </p>

        <h1 className="text-[clamp(1.75rem,4vw,2.5rem)] font-semibold leading-tight tracking-tight text-[#1a1814] mb-12">
          AI Clarity Funnel
        </h1>

        <div className="space-y-6 mb-10">
          <p className="text-base leading-8 text-[#3a3530]">
            Useful output depends on a clearly defined situation. Without that, the answer remains too general.
          </p>

          <div>
            <p className="text-base leading-8 text-[#3a3530] mb-4">
              Clarity usually improves when the situation is narrowed in one of three directions:
            </p>
            <ul className="space-y-2 pl-1">
              <li className="flex gap-3 items-start text-base leading-7 text-[#4a4540]">
                <span className="mt-2.5 w-1 h-1 rounded-full bg-[#b0a090] shrink-0" />
                the goal becomes more specific
              </li>
              <li className="flex gap-3 items-start text-base leading-7 text-[#4a4540]">
                <span className="mt-2.5 w-1 h-1 rounded-full bg-[#b0a090] shrink-0" />
                the context becomes clearer
              </li>
              <li className="flex gap-3 items-start text-base leading-7 text-[#4a4540]">
                <span className="mt-2.5 w-1 h-1 rounded-full bg-[#b0a090] shrink-0" />
                the constraints become more visible
              </li>
            </ul>
          </div>

          <p className="text-base leading-8 text-[#6b6058] italic">
            Which of these feels closest to your situation?
          </p>

          <p className="text-base leading-8 text-[#3a3530]">
            That is the beginning of AI Clarity Funnel. It helps turn a broad situation into a clearer working frame, so the output becomes more specific and more useful.
          </p>
        </div>

        <div className="border-t border-[#d8d0c5] pt-10 mt-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8a7d6e] mb-3">
            AI Clarity Funnel
          </p>
          <div className="text-3xl font-semibold text-[#1a1814] mb-1">€27</div>
          <p className="text-sm text-[#8a7d6e] mb-7">
            One payment. Direct access after checkout.
          </p>
          <PurchaseCTABlock href="https://buy.stripe.com/28E00keej9yE8542In0Fi02" label="Buy Now" />
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
