import { useLocation } from "wouter";

export default function Diagnostic2_1() {
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
            <p className="diag-title">What matters now</p>
            <p className="diag-body">
              The next step becomes easier to see once the priority is clear.
            </p>
          </div>

          <div className="diag-bridge">
            <p className="diag-bridge-text">
              This is where Mental Priority System begins. It brings the right
              priority into focus, so the right next step becomes visible.
            </p>
          </div>

          <div className="diag-action-row">
            <button className="back-btn" onClick={() => navigate("/placeholder/2")}>
              ← Back
            </button>
            <button
              className="continue-btn"
              onClick={() => navigate("/sub-placeholder/2/next")}
            >
              Enter Mental Priority System
            </button>
          </div>
        </main>

        <footer className="landing-footer">
          <span>Diagnostic Entry · Screen 1.2.1</span>
        </footer>
      </div>
    </div>
  );
}
