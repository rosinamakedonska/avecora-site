import SiteFooter from "@/components/site-footer";

export default function LegalTerms() {
  return (
    <main className="min-h-screen px-6 py-10 md:px-10 bg-[#f7f4ed] text-[#1f1f1f]">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10">
          <span className="flex flex-col leading-none">
            <span className="landing-wordmark">Avecore</span>
            <span className="text-[11px] uppercase tracking-[0.22em] opacity-70 mt-1">
              Decision Systems for AI
            </span>
          </span>
        </div>

        <h1 className="text-3xl font-semibold mb-3">Terms &amp; Conditions</h1>
        <p className="text-sm opacity-70 mb-8">Effective date: April 2, 2026</p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">1. Intellectual Property &amp; License</h2>
          <p className="mb-4">
            All content, systems, frameworks, methodologies, templates, prompts, models,
            documents, and materials provided by us are proprietary intellectual property.
          </p>
          <p className="mb-4">
            Your purchase grants a limited, non-exclusive, non-transferable license for
            personal use or internal business use only. No ownership rights are transferred.
          </p>
          <p>
            You may not copy, reproduce, publish, distribute, share, sublicense, resell,
            reverse engineer, translate for redistribution, or create derivative commercial
            products using any part of these materials, including their structure, logic,
            or methodology. Unauthorized use constitutes intellectual property infringement
            and may result in formal enforcement action.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">2. Payment Terms</h2>
          <p className="mb-4">
            By completing a purchase, you agree to pay the full amount associated with your order.
          </p>
          <p className="mb-4">
            If a payment plan is selected, all scheduled payments remain due regardless of usage,
            participation, or completion.
          </p>
          <p>
            Failure to complete payment does not remove your financial obligation. Access may be
            suspended if payments fail, are reversed, or are disputed.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">3. Results Disclaimer</h2>
          <p className="mb-4">
            We do not guarantee any specific financial, business, or personal results from the use
            of our products, services, or materials.
          </p>
          <p className="mb-4">
            Any examples, demonstrations, or references are provided for illustrative purposes only
            and are not promises or guarantees of performance.
          </p>
          <p>
            Outcomes depend on individual effort, decisions, experience, timing, market conditions,
            and external factors.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">4. Digital Access</h2>
          <p>
            Where a product includes digital content, access may be granted immediately after
            purchase or after successful payment confirmation.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">5. Refund Policy</h2>
          <p className="mb-4">All digital product purchases are final.</p>
          <p className="mb-4">
            Refunds are not provided once access to digital materials has been granted.
          </p>
          <p>
            This policy does not affect mandatory rights under applicable consumer protection law.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">6. Contact</h2>
          <p>MacTerra Ltd</p>
          <p>71–75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom</p>
          <p>Company Registration Number: 12050922</p>
          <p>Email: sales@macterra.co.uk</p>
        </section>

        <a
          href="/products-and-packages"
          className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-medium border hover:opacity-90"
        >
          Back to products and packages
        </a>
      </div>
      <SiteFooter />
    </main>
  );
}
