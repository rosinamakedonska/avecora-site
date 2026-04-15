import { Link } from "wouter";
import BrandLockup from "@/components/brand-lockup";
import SiteFooter from "@/components/site-footer";

const entries = [
  {
    href: "/placeholder/1",
    text: "AI doesn't understand my situation well enough.",
  },
  {
    href: "/placeholder/2",
    text: "Too much information is coming in. I can't see what matters.",
  },
  {
    href: "/placeholder/3",
    text: "Too many AI promises. I need the right combination for my work.",
  },
  {
    href: "/placeholder/4",
    text: "I have several possible next moves, but I can't choose one.",
  },
];

export default function Placeholder() {
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

          <BrandLockup className="mb-7" />

          <h1 className="text-[clamp(1.75rem,4vw,2.5rem)] font-semibold leading-tight tracking-tight text-[#1a1814] mb-6">
            Start where it fits.
          </h1>

          <p className="text-base leading-8 text-[#4a4540] mb-8">
            Most people think the problem is the AI. Often, the real issue starts earlier — something in the situation is still unclear. Without that clarity, even the best AI response may leave you without a real answer or clear direction.
          </p>

          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8a7d6e] mb-5">
            Which of these feels closest to your situation?
          </p>

          <div className="space-y-3">
            {entries.map((entry, index) => (
              <Link key={entry.href} href={entry.href}>
                <a className="w-full flex items-center gap-5 px-5 py-4 bg-white border border-[#ddd5c8] rounded-xl text-left hover:border-[#b0a090] hover:bg-[#faf8f4] transition-all group">
                  <span className="text-[11px] font-semibold w-5 text-center text-[#a09080] shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-base text-[#3a3530] group-hover:text-[#1a1814] transition-colors leading-6 flex-1">
                    {entry.text}
                  </span>
                  <span className="text-[#c4b8a4] group-hover:text-[#8a7d6e] transition-colors text-sm">→</span>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
