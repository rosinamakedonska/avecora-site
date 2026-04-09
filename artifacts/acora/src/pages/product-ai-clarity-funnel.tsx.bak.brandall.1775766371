import PurchaseCTABlock from "@/components/purchase-cta-block";
import { Link, useSearch } from "wouter";
import SiteFooter from "@/components/site-footer";
import BrandLockup from "@/components/brand-lockup";

const fromMap: Record<string, { label: string; route: string }> = {
  "1": { label: "The goal becomes more specific", route: "/sub-placeholder/1/1" },
  "2": { label: "The context becomes clearer", route: "/sub-placeholder/1/2" },
  "3": { label: "The limits become visible", route: "/sub-placeholder/1/3" },
};

export default function ProductAIClarityFunnel() {
  const search = useSearch();
  const params = new URLSearchParams(search);
  const from = params.get("from");
  const context = from ? fromMap[from] : null;

  const backHref = "/placeholder/1";
  const backLabel = "← Back";

  return (
    <>
      <div className="min-h-screen bg-[#f8f5ef] text-[#1e1e1e] px-6 py-10 md:px-10">
        <div className="max-w-2xl mx-auto">
          <div className="mb-10">
            <Link
              href={backHref}
              className="text-sm text-[#8a7d6e] hover:text-[#3a3530] transition-colors"
            >
              {backLabel}
            </Link>
          </div>

          <BrandLockup className="mb-7" />

          {context && (
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#b0a090] mb-3">
              You selected: {context.label}
            </p>
          )}

          <h1 className="text-[clamp(1.75rem,4vw,2.5rem)] font-semibold leading-tight tracking-tight text-[#1a1814] mb-8">
            Stop getting generic AI answers.
          </h1>

          <div className="space-y-2 mb-10">
            <p className="text-base leading-8 text-[#3a3530]">You use AI every day.</p>
            <p className="text-base leading-8 text-[#3a3530]">But the results feel inconsistent.</p>
            <p className="text-base leading-8 text-[#3a3530]">Rarely exactly what you expect.</p>
          </div>

          <div className="mb-12 max-w-[340px] mx-auto">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#1a2820] text-center mb-5">
              From vague input
            </p>

            {[
              { label: "Situation", indent: 0 },
              { label: "Goal", indent: 1 },
              { label: "Context + Limits", indent: 2 },
            ].map(({ label, indent }) => (
              <div key={label}>
                <div
                  className="border border-[#d8d0c5] bg-[#faf8f4] rounded-md py-[10px] flex items-center justify-center"
                  style={{ marginLeft: `${indent * 16}px`, marginRight: `${indent * 16}px` }}
                >
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7a6e64]">
                    {label}
                  </span>
                </div>
                <div className="flex justify-center my-[5px]">
                  <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 0v7M1 5.5l3 4 3-4" stroke="#c4b8a4" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            ))}

            <div
              className="bg-[#1a2820] rounded-md py-[10px] flex items-center justify-center"
              style={{ marginLeft: `${3 * 16}px`, marginRight: `${3 * 16}px` }}
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#a8c4a8] whitespace-nowrap">
                One clear instruction / decision
              </span>
            </div>
          </div>

          <div className="mb-12">
            <p className="text-base leading-8 text-[#3a3530]">Turn a vague request into one clear instruction.</p>
            <p className="text-base leading-8 text-[#3a3530]">This is where AI Clarity Funnel begins.</p>
          </div>

          <div className="border-t border-[#d8d0c5] pt-10">
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
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-lg font-medium border hover:opacity-90"
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
