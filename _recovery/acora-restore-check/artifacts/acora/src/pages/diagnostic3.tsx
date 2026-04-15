import { useLocation } from "wouter";

const options = [
  { id: 1, text: "Writing and content" },
  { id: 2, text: "Research and finding sources" },
  { id: 3, text: "Presentations and visual documents" },
];

export default function Diagnostic3() {
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
              Too many AI promises. I need the right combination for my work.
            </p>
            <p className="diag-body">
              The next step is to identify which tools belong together for your
              kind of work, so the process becomes more practical, more focused,
              and easier to continue.
            </p>
          </div>

          <p className="landing-prompt">
            What kind of work do you need this bundle to support?
          </p>

          <div className="landing-cards">
            {options.map((o) => (
              <button
                key={o.id}
                className="landing-card"
                onClick={() => navigate(`/sub-placeholder/3/${o.id}`)}
              >
                <span className="card-number">{o.id}</span>
                <span className="card-text">{o.text}</span>
                <span className="card-arrow">→</span>
              </button>
            ))}
          </div>

          <button className="back-btn" onClick={() => navigate("/diagnostic")}>
            ← Back
          </button>
        </main>

        <footer className="landing-footer">
          <span>Diagnostic Entry · Screen 1.3</span>
        </footer>
      </div>
    </div>
  );
}
