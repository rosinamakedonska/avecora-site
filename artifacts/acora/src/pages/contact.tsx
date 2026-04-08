import { Link } from "wouter";
import SiteFooter from "@/components/site-footer";

export default function Contact() {
  return (
    <>
    <main className="min-h-screen px-6 py-10 md:px-10 bg-[#f7f4ed] text-[#1f1f1f]">
      <div className="max-w-2xl mx-auto">
        <button
          onClick={() => {
            if (window.history.length > 1) {
              window.history.back();
            } else {
              window.location.href = "/";
            }
          }}
          className="mb-8 text-sm text-[#6b6058] hover:text-[#1f1f1f] transition-colors"
        >
          ← Back
        </button>

        <div className="mb-10">
          <Link href="/" className="flex flex-col leading-none w-fit">
            <span className="text-base font-semibold tracking-[-0.01em]">Avecore</span>
            <span className="text-[11px] uppercase tracking-[0.22em] opacity-70 mt-1">
              Decision Systems for AI
            </span>
          </Link>
        </div>

        <h1 className="text-3xl font-semibold mb-8">Contact</h1>

        <div className="space-y-5 text-base leading-8 text-[#3a3530]">
          <p>
            For questions about products, orders, or access, reach out directly:
          </p>
          <p className="font-medium text-[#1f1f1f]">
            hello@avecore.com
          </p>
          <p className="text-sm text-[#6b6058] pt-2">
            Published and operated by MacTerra Ltd.
          </p>
        </div>
      </div>
    </main>
    <SiteFooter />
    </>
  );
}
