import { useLocation, Link } from "wouter";

export default function ProductMentalPrioritySystem() {
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
            <p className="diag-title">Mental Priority System</p>
            <p className="diag-body">
              Mental Priority System brings the right priority into focus, so
              the right next step becomes visible.
            </p>
          </div>

          <div className="product-section">
            <p className="product-section-title">What this helps you do</p>
            <ul className="product-list">
              <li>see what matters now</li>
              <li>separate priority from noise</li>
              <li>reduce overload from too many inputs</li>
              <li>identify what can wait</li>
              <li>make the next step easier to see</li>
            </ul>
          </div>

          <div className="product-section">
            <p className="product-section-title">Who this is for</p>
            <p className="diag-body">
              For people who feel that too much is coming in at once and it has
              become difficult to see what matters right now.
            </p>
          </div>

          <div className="product-section">
            <p className="product-section-title">What you get</p>
            <ul className="product-list">
              <li>a structured way to identify the real priority</li>
              <li>a clearer view of what matters now</li>
              <li>a more visible next step</li>
            </ul>
          </div>

          <div className="diag-action-row">
            <button className="back-btn" onClick={() => window.history.back()}>
              ← Back
            </button>

            <div className="text-3xl font-semibold mb-2">€37</div>
            <p className="text-sm opacity-60 mb-8">
              One payment. Direct access after checkout.
            </p>
            <a
              className="continue-btn"
              href="https://buy.stripe.com/6oUaEYc6beSYets96L0Fi03"
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
