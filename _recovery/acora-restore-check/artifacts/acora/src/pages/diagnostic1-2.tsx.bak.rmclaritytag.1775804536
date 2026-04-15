import BrandLockup from "@/components/brand-lockup";
import { Link } from "wouter";
import { useLocation } from "wouter";
import SiteFooter from "@/components/site-footer";

export default function Diagnostic1_2() {
  const [, navigate] = useLocation();

  return (
    <>
    <div className="min-h-screen bg-[#f8f5ef] text-[#1e1e1e] px-6 py-10 md:px-10">
      <div className="max-w-2xl mx-auto">

        <div className="mb-10">
          <Link
            href="/placeholder/1"
            className="text-sm text-[#8a7d6e] hover:text-[#3a3530] transition-colors"
          >
            ← Back
          </Link>
        </div>

          <BrandLockup className="mb-7" />
<h1 className="text-[clamp(1.5rem,3.5vw,2.25rem)] font-semibold leading-tight tracking-tight text-[#1a1814] mb-5">
          The context becomes clearer
        </h1>

        <p className="text-base leading-8 text-[#4a4540] mb-12">
          The output changes when the context becomes clear. That is when the answer becomes closer to the real situation.
        </p>

        <div className="border-l-2 border-[#c4b8a4] pl-5 mb-14">
          <p className="text-sm leading-7 text-[#6b6058]">
            This is where AI Clarity Funnel begins. It helps define the situation more clearly, so the output becomes more relevant and easier to use.
          </p>
        </div>

        <button
          onClick={() => navigate("/sub-placeholder/1/next?from=2")}
          className="inline-block bg-[#1a2820] text-white text-sm font-medium px-7 py-3.5 rounded-full hover:bg-[#243830] transition-colors"
        >
          Enter AI Clarity Funnel
        </button>

      </div>
    </div>
    <SiteFooter />
    </>
  );
}
