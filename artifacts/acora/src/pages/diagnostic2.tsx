import { useLocation } from "wouter";

const options = [
  { id: 1, text: "What matters now" },
  { id: 2, text: "What can wait" },
  { id: 3, text: "What is creating the most pressure" },
];

export default function Diagnostic2() {
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
            <p className="diag-title">
              Too much information is coming in. I can't see what matters.
            </p>
            <p className="diag-body">
              When too much is coming in — inputs, tasks, thoughts, options, AI
              outputs — it becomes hard to see what matters right now. Progress
              becomes possible only after the right priorities are set.
            </p>
          </div>

          <p className="landing-prompt">Which of these matters most right now?</p>

          <div className="landing-cards">
            {options.map((o) => (
              <button
                key={o.id}
                className="landing-card"
                onClick={() => navigate(`/sub-placeholder/2/${o.id}`)}
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
          <span>Diagnostic Entry · Screen 1.2</span>
        </footer>
      </div>
    </div>
  );
}
