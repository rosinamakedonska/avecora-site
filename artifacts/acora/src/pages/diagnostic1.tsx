import { Link } from "wouter";
import { useLocation } from "wouter";
import SiteFooter from "@/components/site-footer";

const options = [
  { id: 1, text: "The goal becomes more specific" },
  { id: 2, text: "The context becomes clearer" },
  { id: 3, text: "The limits become visible" },
];

export default function Diagnostic1() {
  const [, navigate] = useLocation();

  return (
    <>
    <div className="min-h-screen bg-[#f8f5ef] text-[#1e1e1e] px-6 py-10 md:px-10">
      <div className="max-w-2xl mx-auto">

        <div className="mb-10">
          <Link
            href="/"
            className="text-sm text-[#8a7d6e] hover:text-[#3a3530] transition-colors"
          >
            ← Back
          </Link>
        </div>

        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8a7d6e] mb-4">
          Clarity Function · Avecore
        </p>

        <h1 className="text-[clamp(1.5rem,3.5vw,2.25rem)] font-semibold leading-tight tracking-tight text-[#1a1814] mb-5">
          AI doesn't understand my situation well enough.
        </h1>

        <p className="text-base leading-8 text-[#4a4540] mb-12">
          Useful output depends on a clearly defined situation. Without that, the answer remains too general.
        </p>

        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8a7d6e] mb-5">
          Which of these feels closest to your situation?
        </p>

        <div className="space-y-3">
          {options.map((o) => (
            <button
              key={o.id}
              onClick={() => navigate(`/sub-placeholder/1/${o.id}`)}
              className="w-full flex items-center gap-5 px-5 py-4 bg-white border border-[#ddd5c8] rounded-xl text-left hover:border-[#b0a090] hover:bg-[#faf8f4] transition-all group"
            >
              <span className="text-[11px] font-semibold w-5 text-center text-[#a09080] shrink-0">
                {o.id}
              </span>
              <span className="text-base text-[#3a3530] group-hover:text-[#1a1814] transition-colors leading-6 flex-1">
                {o.text}
              </span>
              <span className="text-[#c4b8a4] group-hover:text-[#8a7d6e] transition-colors text-sm">→</span>
            </button>
          ))}
        </div>

      </div>
    </div>
    <SiteFooter />
    </>
  );
}
