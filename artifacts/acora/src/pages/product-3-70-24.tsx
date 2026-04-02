import { useLocation, Link } from "wouter";

export default function Product3_70_24() {
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
            <p className="diag-title">3–70–24</p>
            <p className="diag-body">
              3–70–24 turns several possible moves into one clearer direction.
            </p>
          </div>

          <div className="product-section">
            <p className="product-section-title">What this helps you do</p>
            <ul className="product-list">
              <li>see what matters most</li>
              <li>identify what the decision needs to protect</li>
              <li>separate what matters now from what can wait</li>
              <li>reduce noise between several possible moves</li>
              <li>make the next move clearer</li>
            </ul>
          </div>

          <div className="product-section">
            <p className="product-section-title">Who this is for</p>
            <p className="diag-body">
              For people who feel that several next moves are possible, but
              choosing one still feels unclear.
            </p>
          </div>

          <div className="product-section">
            <p className="product-section-title">What you get</p>
            <ul className="product-list">
              <li>a structured way to narrow the decision</li>
              <li>a clearer direction for the next move</li>
              <li>a more usable starting point for action</li>
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
            <a
              className="continue-btn"
              href="https://buy.stripe.com/5kQ4gA4DJ8uA0CCdn10Fi09"
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
