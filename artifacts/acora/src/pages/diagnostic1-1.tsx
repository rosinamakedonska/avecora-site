import { useLocation } from "wouter";

export default function Diagnostic1_1() {
  const [, navigate] = useLocation();

  return (
    <div className="landing-root">
      <div className="landing-container">
        <header className="landing-header">
          <span className="landing-wordmark">ACORA</span>
        </header>

        <main className="landing-main">
          <div className="diag-heading-block">
            <p className="diag-title">The goal becomes more specific</p>
            <p className="diag-body">
              The output changes when the goal becomes precise. That is when the
              answer starts moving in the right direction.
            </p>
          </div>

          <div className="diag-action-row">
            <button className="back-btn" onClick={() => navigate("/placeholder/1")}>
              ← Back
            </button>
            <button
              className="continue-btn"
              onClick={() => navigate("/sub-placeholder/1/next")}
            >
              Continue →
            </button>
          </div>
        </main>

        <footer className="landing-footer">
          <span>Diagnostic Entry · Screen 1.1.1</span>
        </footer>
      </div>
    </div>
  );
}
