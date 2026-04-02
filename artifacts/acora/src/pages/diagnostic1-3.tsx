import { useLocation } from "wouter";

export default function Diagnostic1_3() {
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
            <p className="diag-title">The limits become visible</p>
            <p className="diag-body">
              The output changes when the limits become visible. That is when
              the answer becomes more accurate.
            </p>
          </div>

          <div className="diag-bridge">
            <p className="diag-bridge-text">
              This is where AI Clarity Funnel begins. It helps define the
              situation more clearly, so the output becomes more relevant and
              easier to use.
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
              Enter AI Clarity Funnel
            </button>
          </div>
        </main>

        <footer className="landing-footer">
          <span>Diagnostic Entry · Screen 1.1.3</span>
        </footer>
      </div>
    </div>
  );
}
