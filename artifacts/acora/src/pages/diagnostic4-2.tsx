import { useLocation } from "wouter";

export default function Diagnostic4_2() {
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
            <p className="diag-title">What the decision needs to protect</p>
            <p className="diag-body">
              Once what the decision needs to protect is clear, the next move
              becomes visible.
            </p>
          </div>

          <div className="diag-bridge">
            <p className="diag-bridge-text">
              This is where 3–70–24 begins. It turns several possible moves
              into one clearer direction.
            </p>
          </div>

          <div className="diag-action-row">
            <button className="back-btn" onClick={() => navigate("/placeholder/4")}>
              ← Back
            </button>
            <button
              className="continue-btn"
              onClick={() => navigate("/sub-placeholder/4/next")}
            >
              Enter 3–70–24
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
