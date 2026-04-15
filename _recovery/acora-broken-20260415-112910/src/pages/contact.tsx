import { Link } from "wouter";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

export default function Contact() {
  return (
    <>
      <div className="min-h-screen bg-[#f7f4ed] text-[#1f1f1f]">
        <SiteHeader />

        <main className="px-6 py-10 md:px-10">
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

            <h1 className="text-3xl font-semibold mb-8">Contact</h1>

            <div className="space-y-5 text-base leading-8 text-[#3a3530]">
              <p>
                For questions about products, orders, or access, reach out directly:
              </p>

              <p className="font-medium text-[#1f1f1f]">
                hello@patternos.online
              </p>

              <p className="text-sm text-[#6b6058] pt-2">
                Published and operated by MacTerra Ltd.
              </p>

              <div className="pt-4">
                <Link
                  href="/products-and-packages"
                  className="text-sm text-[#6b6058] underline underline-offset-4 hover:text-[#1f1f1f] transition-colors"
                >
                  Explore Products &amp; Packages
                </Link>
              </div>
            </div>
          </div>
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
