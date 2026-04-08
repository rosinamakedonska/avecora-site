import PurchaseCTABlock from "@/components/purchase-cta-block";
import { Link } from "wouter";
import SiteFooter from "@/components/site-footer";

export default function ProductMentalPrioritySystem() {
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
          Priority Function
        </p>

        <h1 className="text-[clamp(1.75rem,4vw,2.5rem)] font-semibold leading-tight tracking-tight text-[#1a1814] mb-2">
          Mental Priority System™
        </h1>

        <p className="text-base font-medium text-[#5a5048] mb-6 leading-7">
          Choose the revenue direction that deserves your energy now.
        </p>

        <p className="text-base leading-8 text-[#4a4540] mb-12">
          When too many ideas compete for attention, progress slows down.
          Mental Priority System helps narrow the field, compare what actually matters,
          and identify the direction that is strongest enough to move forward.
        </p>

        <div className="border-l-2 border-[#c4b8a4] pl-5 mb-14">
          <p className="text-sm leading-7 text-[#6b6058]">
            Mental Priority System runs the Priority function inside Avecore.
          </p>
          <p className="text-sm leading-7 text-[#6b6058]">
            It is designed for moments when multiple options feel possible, but the next move is still not clear enough to commit to.
          </p>
        </div>

        <div className="mb-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8a7d6e] mb-7">
            What this function helps prioritize
          </p>
          <div className="space-y-6">
            <div className="flex gap-5 items-start">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#a09080] mt-1 w-24 shrink-0">
                Signal
              </span>
              <p className="text-base text-[#3a3530] leading-7">
                Separate what feels urgent from what is actually worth pursuing.
              </p>
            </div>
            <div className="flex gap-5 items-start">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#a09080] mt-1 w-24 shrink-0">
                Direction
              </span>
              <p className="text-base text-[#3a3530] leading-7">
                Identify the revenue path with the strongest real potential.
              </p>
            </div>
            <div className="flex gap-5 items-start">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#a09080] mt-1 w-24 shrink-0">
                Next move
              </span>
              <p className="text-base text-[#3a3530] leading-7">
                Turn the chosen direction into a concrete immediate step.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#ede8df] rounded-xl px-6 py-5 mb-14">
          <p className="text-sm leading-7 text-[#4a4540]">
            Once the right direction becomes visible, decision pressure drops and execution becomes easier to sustain.
          </p>
        </div>

        <div className="border-t border-[#d8d0c5] pt-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8a7d6e] mb-3">
            Mental Priority System™
          </p>
          <div className="text-3xl font-semibold text-[#1a1814] mb-1">€37</div>
          <p className="text-sm text-[#8a7d6e] mb-7">
            One payment. Direct access after checkout.
          </p>
          <PurchaseCTABlock href="https://buy.stripe.com/6oUaEYc6beSYets96L0Fi03" label="Buy Now" />
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
