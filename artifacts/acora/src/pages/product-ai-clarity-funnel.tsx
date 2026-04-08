import PurchaseCTABlock from "@/components/purchase-cta-block";
import { Link, useSearch } from "wouter";
import SiteFooter from "@/components/site-footer";

const fromMap: Record<string, { label: string; route: string }> = {
  "1": { label: "The goal becomes more specific", route: "/sub-placeholder/1/1" },
  "2": { label: "The context becomes clearer",    route: "/sub-placeholder/1/2" },
  "3": { label: "The limits become visible",      route: "/sub-placeholder/1/3" },
};

export default function ProductAIClarityFunnel() {
  const search = useSearch();
  const params = new URLSearchParams(search);
  const from = params.get("from");
  const context = from ? fromMap[from] : null;

  const backHref  = context ? context.route : "/products-and-packages";
  const backLabel = context ? "← Back" : "← Back to Products and Packages";

  return (
    <>
    <div className="min-h-screen bg-[#f8f5ef] text-[#1e1e1e] px-6 py-10 md:px-10">
      <div className="max-w-2xl mx-auto">

        <div className="mb-6">
          <Link
            href={backHref}
            className="text-sm text-[#8a7d6e] hover:text-[#3a3530] transition-colors"
          >
            {backLabel}
          </Link>
        </div>

        {context && (
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#b0a090] mb-4">
            You selected: {context.label}
          </p>
        )}

        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8a7d6e] mb-4">
          Clarity Function · Avecore
        </p>

        {/* HERO */}
        <h1 className="text-[clamp(1.75rem,4vw,2.5rem)] font-semibold leading-tight tracking-tight text-[#1a1814] mb-5">
          Stop getting generic AI answers.
        </h1>

        <p className="text-base leading-8 text-[#3a3530] mb-5">
          Use a 6-step instruction framework that makes AI respond the way you want.
        </p>

        {/* CTA label */}
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8a7d6e] mb-12">
          Get AI Clarity Funnel™ — €19
        </p>

        {/* PROBLEM */}
        <div className="space-y-2 mb-12">
          <p className="text-base leading-8 text-[#3a3530]">You use AI every day.</p>
          <p className="text-base leading-8 text-[#3a3530]">But the results feel inconsistent.</p>
          <p className="text-base leading-8 text-[#3a3530]">Rarely exactly what you expect.</p>
          <p className="text-base leading-8 text-[#4a4540] mt-4">Give AI structured instructions.</p>
          <p className="text-base leading-8 text-[#4a4540]">Use the tool.</p>
        </div>

        {/* SHIFT */}
        <div className="border-l-2 border-[#c4b8a4] pl-5 mb-10">
          <p className="text-sm leading-7 text-[#6b6058]">
            Fill in the 6 steps.
          </p>
          <p className="text-sm leading-7 text-[#6b6058]">
            Your AI will start responding the way you want — for your exact goal.
          </p>
          <p className="text-sm leading-7 text-[#6b6058]">
            AI Clarity Funnel™ gives you the structure.
          </p>
        </div>

        {/* Funnel preview graphic */}
        <div className="mb-14 max-w-[300px] mx-auto">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#b0a090] text-center mb-5">
            From vague input
          </p>

          {[
            { label: "Situation",        indent: 0 },
            { label: "Goal",             indent: 1 },
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
                  <path d="M4 0v7M1 5.5l3 4 3-4" stroke="#c4b8a4" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}

          <div
            className="border border-[#b0a090] bg-[#ede8df] rounded-md py-[10px] flex items-center justify-center"
            style={{ marginLeft: `${3 * 16}px`, marginRight: `${3 * 16}px` }}
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#3a3530] whitespace-nowrap">
              One clear instruction
            </span>
          </div>
        </div>

        {/* Supporting product language */}
        <div className="space-y-6 mb-14">
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
                the limits become visible
              </li>
            </ul>
          </div>

          <p className="text-base leading-8 text-[#3a3530]">
            This is where AI Clarity Funnel begins. It helps define the situation more clearly, so the output becomes more relevant and easier to use.
          </p>
        </div>

        {/* Purchase block — unchanged */}
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
