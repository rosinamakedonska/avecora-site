import PurchaseCTABlock from "@/components/purchase-cta-block";
import { useLocation, Link } from "wouter";

export default function ProductAIClarityFunnel() {
  const [, navigate] = useLocation();

  return (
    <div className="landing-root">
      <div className="landing-container">
        <header className="landing-header">
          <span className="flex flex-col leading-none">
  <span className="landing-wordmark">Avecore</span>
  <span className="text-[11px] uppercase tracking-[0.22em] opacity-70 mt-1">
    Decision Systems for AI
  </span>
</span>
        </header>

        <main className="landing-main">
          <div className="diag-heading-block">
            <p className="diag-title">AI Clarity Funnel</p>
            <p className="diag-body">
              AI Clarity Funnel helps define the situation more clearly, so the
              output becomes more relevant, more specific, and easier to use.
            </p>
          </div>

          <div className="product-section">
            <p className="product-section-title">What this helps you do</p>
            <ul className="product-list">
              <li>make the situation clearer</li>
              <li>make the goal more precise</li>
              <li>make the context clearer</li>
              <li>make the limits visible</li>
              <li>get more relevant AI output</li>
            </ul>
          </div>

          <div className="product-section">
            <p className="product-section-title">Who this is for</p>
            <p className="diag-body">
              For people who feel that AI output is still too general and not
              close enough to the real situation.
            </p>
          </div>

          <div className="product-section">
            <p className="product-section-title">What you get</p>
            <ul className="product-list">
              <li>a structured way to define the situation</li>
              <li>a clearer starting point for better AI output</li>
              <li>a more relevant and easier-to-use result</li>
            </ul>
          </div>

          <div className="diag-action-row">
            <button className="back-btn" onClick={() => window.history.back()}>
              ← Back
            </button>

            <div className="text-3xl font-semibold mb-2">€27</div>
            <p className="text-sm opacity-60 mb-8">
              One payment. Direct access after checkout.
            </p>
            <PurchaseCTABlock href="https://buy.stripe.com/28E00keej9yE8542In0Fi02" label="Buy Now" /><div>
              <Link
                href="/products-and-packages"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-medium border hover:opacity-90"
              >
                See other products and packages
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
