import { Link } from "wouter";

export default function SiteFooter() {
  return (
    <footer className="mt-16 md:mt-24 border-t border-neutral-200 bg-[#fcfbf8] px-6 py-12 md:px-8">
      <div className="mx-auto max-w-7xl flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-semibold tracking-[-0.01em] text-neutral-900">
            Avecore™
          </p>
          <p className="mt-1 text-sm text-neutral-500">
            Decision Systems for AI
          </p>
          <p className="mt-1 text-xs text-neutral-400">
            Built and published by MacTerra Ltd
          </p>
        </div>
        <div className="flex flex-wrap gap-6 text-sm text-neutral-500">
          <Link href="/legal/terms" className="hover:text-neutral-800 transition-colors">Terms</Link>
          <Link href="/legal/refund" className="hover:text-neutral-800 transition-colors">Refund</Link>
          <Link href="/legal/privacy" className="hover:text-neutral-800 transition-colors">Privacy</Link>
          <Link href="/contact" className="hover:text-neutral-800 transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
