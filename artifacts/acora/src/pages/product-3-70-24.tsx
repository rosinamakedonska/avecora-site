import { useLocation } from "wouter";

export default function Product3_70_24() {
  const [, navigate] = useLocation();

  return (
    <div className="landing-root">
      <div className="landing-container">
        <header className="landing-header">
          <span className="landing-wordmark">ACORA</span>
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
            <button
              className="continue-btn"
              onClick={() => navigate("/checkout/3-70-24")}
            >
              Buy 3–70–24
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
