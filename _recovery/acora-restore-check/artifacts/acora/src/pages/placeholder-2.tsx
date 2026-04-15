import { Link } from "wouter";
import BrandLockup from "@/components/brand-lockup";

export default function Placeholder2() {
  return (
    <div className="min-h-screen bg-[#f8f5ef] text-[#1e1e1e] px-6 py-10 md:px-10">
      <div className="max-w-2xl mx-auto">
        <div className="mb-10">
          <Link
            href="/diagnostic"
            className="text-sm text-[#8a7d6e] hover:text-[#3a3530] transition-colors"
          >
            ← Back
          </Link>
        </div>

        <BrandLockup className="mb-7" />

        <h1 className="text-[clamp(1.75rem,4vw,2.5rem)] font-semibold leading-tight tracking-tight text-[#1a1814] mb-8">
          Too much information is coming in. I can’t see what matters.
        </h1>

        <p className="text-base leading-8 text-[#3a3530] mb-12">
          When too much is coming in — inputs, tasks, thoughts, options, AI outputs — it becomes hard to see what matters right now. Progress becomes possible only after the right priorities are set.
        </p>

        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8a7d6e] mb-5">
          Which of these matters most right now?
        </p>

        <div className="space-y-4">
          <Link
            href="/mini-mental-priority-matters-now"
            className="group block rounded-2xl border border-[#e2d9cc] bg-[#faf7f2] px-6 py-5 shadow-[0_4px_16px_rgba(0,0,0,0.05)] transition-all duration-200 hover:border-[#c8bfb0] hover:bg-[#f4ede2] hover:shadow-[0_6px_20px_rgba(0,0,0,0.07)]"
          >
            <p className="text-base font-medium leading-[1.4] text-[#1a1f1c]">
              what matters now
            </p>
          </Link>

          <Link
            href="/mini-mental-priority-can-wait"
            className="group block rounded-2xl border border-[#e2d9cc] bg-[#faf7f2] px-6 py-5 shadow-[0_4px_16px_rgba(0,0,0,0.05)] transition-all duration-200 hover:border-[#c8bfb0] hover:bg-[#f4ede2] hover:shadow-[0_6px_20px_rgba(0,0,0,0.07)]"
          >
            <p className="text-base font-medium leading-[1.4] text-[#1a1f1c]">
              what can wait
            </p>
          </Link>

          <Link
            href="/mini-mental-priority-pressure"
            className="group block rounded-2xl border border-[#e2d9cc] bg-[#faf7f2] px-6 py-5 shadow-[0_4px_16px_rgba(0,0,0,0.05)] transition-all duration-200 hover:border-[#c8bfb0] hover:bg-[#f4ede2] hover:shadow-[0_6px_20px_rgba(0,0,0,0.07)]"
          >
            <p className="text-base font-medium leading-[1.4] text-[#1a1f1c]">
              what is creating the most pressure
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
