import PurchaseCTABlock from "@/components/purchase-cta-block";
import { Link } from "wouter";
import SiteFooter from "@/components/site-footer";
import BrandLockup from "@/components/brand-lockup";

export default function ProductMentalPrioritySystem() {
  return (
    <>
      <div className="min-h-screen bg-[#f8f5ef] text-[#1e1e1e] px-6 py-10 md:px-10">
        <div className="max-w-2xl mx-auto">
          <div className="mb-10">
            <Link
              href="/placeholder/2"
              className="text-sm text-[#8a7d6e] hover:text-[#3a3530] transition-colors"
            >
              ← Back
            </Link>
          </div>

          <BrandLockup className="mb-7" />

          <h1 className="text-[clamp(1.75rem,4vw,2.5rem)] font-semibold leading-tight tracking-tight text-[#1a1814] mb-8">
            Mental Priority System™
          </h1>

          <div className="space-y-2 mb-10">
            <p className="text-base leading-8 text-[#3a3530]">
              Too many revenue directions compete for your energy.
            </p>
            <p className="text-base leading-8 text-[#3a3530]">
              Progress slows down.
            </p>
            <p className="text-base leading-8 text-[#3a3530]">
              The next move becomes harder to trust.
            </p>
          </div>

          <div className="mb-12 max-w-[360px] mx-auto">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#1a2820] text-center mb-5">
              From competing directions
            </p>

            {[
              { label: "What matters now", indent: 0 },
              { label: "What can wait", indent: 1 },
              { label: "Source of pressure", indent: 2 },
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
                One clear priority / next step
              </span>
            </div>
          </div>

          <div className="mb-12">
            <p className="text-base leading-8 text-[#3a3530]">
              Turn competing directions into one clear priority.
            </p>
            <p className="text-base leading-8 text-[#3a3530]">
              This is where Mental Priority System begins.
            </p>
          </div>

          <div className="border-t border-[#d8d0c5] pt-10">
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
