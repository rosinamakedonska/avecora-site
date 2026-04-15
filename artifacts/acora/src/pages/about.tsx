import { Link } from "wouter";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export default function About() {
  return (
    <div className="min-h-screen bg-[#f6f1e8] text-[#1f1a17]">
      <SiteHeader />

      <main className="mx-auto max-w-4xl px-6 py-10 md:px-8 md:py-12">
        <section className="max-w-3xl">
          <div className="mb-10 rounded-[2rem] border border-[#2e3f38] bg-[#1a2820] px-8 py-8 text-[#f4f1ea] shadow-[0_18px_50px_rgba(26,48,41,0.22)] md:px-10 md:py-10">
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              About
            </h1>
          </div>

          <div className="space-y-6 text-lg leading-8 text-[#3a3530]">
            <p>
              Today, AI is everywhere. More tools, more answers, more output than ever before. But more output isn't the same as more clarity — and more answers isn't the same as the right next step.
            </p>

            <p>
              Avecore started with a simple observation: AI had become incredibly powerful, and incredibly hard to act on.
            </p>

            <p>
              Not because the technology was broken. But because the layer between output and outcome didn't exist yet — the step that takes what AI generates and turns it into a clear, confident decision.
            </p>

            <p>
              That's why we built The Intelligence Filter — the layer between what AI produces and what you actually need. Structured, prioritized, ready to act on.
            </p>

            <p>
              That's exactly what our products do.
            </p>

            <p>
              One system, four functions — Clarity, Priority, Tool, Execution. Each one targets a different point where progress stops.
            </p>

            <p>
              Find that place. Close that gap. Move forward.
            </p>
          </div>

          <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <Link
              href="/diagnostic"
              className="inline-flex items-center justify-center rounded-2xl bg-[#1a2820] px-6 py-3 text-sm font-medium text-[#f4f1ea] transition duration-300 hover:bg-[#314b41]"
            >
              Start Diagnostic
            </Link>

            <Link
              href="/products-and-packages"
              className="inline-flex items-center justify-center rounded-2xl border border-[#cdc3b4] bg-white/80 px-6 py-3 text-sm font-medium text-[#1f241f] transition duration-300 hover:bg-white"
            >
              See Products and Packages
            </Link>
          </div>

          <div className="mt-4">
            <Link
              href="/clarity-for-beginners"
              className="inline-flex items-center justify-center rounded-full border border-[#d8cec2] bg-white/80 px-6 py-3 text-sm font-medium text-[#2a2a26] shadow-[0_10px_26px_rgba(60,52,46,0.08)] transition-colors hover:bg-white"
            >
              New to AI? Start with Clarity for Beginners
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
