import { useLocation } from "wouter";

const options = [
  { id: 1, text: "What matters most" },
  { id: 2, text: "What the decision needs to protect" },
  { id: 3, text: "What can wait" },
];

export default function Diagnostic4() {
  const [, navigate] = useLocation();

  return (
    <div className="landing-root">
      <div className="landing-container">
        <header className="landing-header">
          <span className="landing-wordmark">ACORA</span>
        </header>

        <main className="landing-main">
          <div className="diag-heading-block">
            <p className="diag-title">
              I have several possible next moves, but I can't choose one.
            </p>
            <p className="diag-body">
              When several next moves seem possible, it becomes difficult to
              choose one. Progress becomes possible only after the next move is
              defined clearly enough to act.
            </p>
          </div>

          <p className="landing-prompt">
            Which of these feels closest to your situation?
          </p>

          <div className="landing-cards">
            {options.map((o) => (
              <button
                key={o.id}
                className="landing-card"
                onClick={() => navigate(`/sub-placeholder/4/${o.id}`)}
              >
                <span className="card-number">{o.id}</span>
                <span className="card-text">{o.text}</span>
                <span className="card-arrow">→</span>
              </button>
            ))}
          </div>

          <button className="back-btn" onClick={() => navigate("/")}>
            ← Back
          </button>
        </main>

        <footer className="landing-footer">
          <span>Diagnostic Entry · Screen 1.4</span>
        </footer>
      </div>
    </div>
  );
}
