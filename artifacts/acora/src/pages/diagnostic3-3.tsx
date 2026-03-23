import { useLocation } from "wouter";

const options = [
  { id: 1, text: "Research and source support" },
  { id: 2, text: "Structure and message shaping" },
];

export default function Diagnostic3_3() {
  const [, navigate] = useLocation();

  return (
    <div className="landing-root">
      <div className="landing-container">
        <header className="landing-header">
          <span className="landing-wordmark">ACORA</span>
        </header>

        <main className="landing-main">
          <div className="diag-heading-block">
            <p className="diag-title">Presentations and visual documents</p>
          </div>

          <p className="landing-prompt">What does this work need more of?</p>

          <div className="landing-cards">
            {options.map((o) => (
              <button
                key={o.id}
                className="landing-card"
                onClick={() => navigate(`/sub-placeholder/3/3-${o.id}`)}
              >
                <span className="card-number">{o.id}</span>
                <span className="card-text">{o.text}</span>
                <span className="card-arrow">→</span>
              </button>
            ))}
          </div>

          <button className="back-btn" onClick={() => navigate("/placeholder/3")}>
            ← Back
          </button>
        </main>

        <footer className="landing-footer">
          <span>Diagnostic Entry · Screen 1.3.3</span>
        </footer>
      </div>
    </div>
  );
}
