import { useLocation } from "wouter";

const options = [
  { id: 1, text: "The goal becomes more specific" },
  { id: 2, text: "The context becomes clearer" },
  { id: 3, text: "The limits become visible" },
];

export default function Diagnostic1() {
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
              AI doesn't understand my situation well enough.
            </p>
            <p className="diag-body">
              Useful output depends on a clearly defined situation. Without
              that, the answer remains too general.
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
                onClick={() => navigate(`/sub-placeholder/1/${o.id}`)}
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
          <span>Diagnostic Entry · Screen 1.1</span>
        </footer>
      </div>
    </div>
  );
}
