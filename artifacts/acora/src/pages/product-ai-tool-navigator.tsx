import { useLocation, Link } from "wouter";

export default function ProductAIToolNavigator() {
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
            <p className="diag-title">AI Tool Navigator</p>
            <p className="diag-body">
              AI Tool Navigator shows how the right tools work together, so the
              bundle fits the real work more closely.
            </p>
          </div>

          <div className="product-section">
            <p className="product-section-title">What this helps you do</p>
            <ul className="product-list">
              <li>see which tool should do what</li>
              <li>understand which tool should be primary</li>
              <li>identify which tools work better as support layers</li>
              <li>choose a more practical tool combination</li>
              <li>build a bundle that fits the real work</li>
            </ul>
          </div>

          <div className="product-section">
            <p className="product-section-title">Who this is for</p>
            <p className="diag-body">
              For people who feel that there are too many AI tools, too many
              promises, and not enough clarity about which combination actually
              fits their work.
            </p>
          </div>

          <div className="product-section">
            <p className="product-section-title">What you get</p>
            <ul className="product-list">
              <li>a clearer view of tool roles</li>
              <li>a more practical tool combination</li>
              <li>a better starting point for real work</li>
            </ul>
          </div>

          <div className="diag-action-row">
            <button className="back-btn" onClick={() => window.history.back()}>
              ← Back
            </button>

            <div className="text-3xl font-semibold mb-2">€29</div>
            <p className="text-sm opacity-60 mb-8">
              One payment. Direct access after checkout.
            </p>
            <a
              className="continue-btn"
              href="ТУК_Е_STRIPE_LINK_ЗА_AI_TOOL_NAVIGATOR"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy Now
            </a>
            <div>
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
