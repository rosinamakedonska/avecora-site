import { useLocation } from "wouter";

export default function ProductAIClarityFunnel() {
  const [, navigate] = useLocation();

  return (
    <div className="landing-root">
      <div className="landing-container">
        <header className="landing-header">
          <span className="landing-wordmark">ACORA</span>
        </header>

        <main className="landing-main">
          <div className="diag-heading-block">
            <p className="diag-title">AI Clarity Funnel</p>
            <p className="diag-body">
              This is where AI Clarity Funnel begins. It helps define the
              situation more clearly, so the output becomes more relevant and
              easier to use.
            </p>
          </div>

          <div className="product-section">
            <p className="product-section-title">What this helps you do</p>
            <ul className="product-list">
              <li>make the situation clearer</li>
              <li>make the goal more precise</li>
              <li>make the context clearer</li>
              <li>make the limits visible</li>
              <li>make the output more relevant</li>
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
            <button
              className="continue-btn"
              onClick={() => navigate("/checkout/ai-clarity-funnel")}
            >
              Buy AI Clarity Funnel
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
