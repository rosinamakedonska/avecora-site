import { useLocation, useParams } from "wouter";

const labels: Record<string, string> = {
  "1": "AI doesn't understand my situation well enough.",
  "2": "Too much information is coming in. I can't see what matters.",
  "3": "Too many AI promises. I need the right combination for my work.",
  "4": "I have several possible next moves, but I can't choose one.",
};

export default function Placeholder() {
  const { id } = useParams<{ id: string }>();
  const [, navigate] = useLocation();
  const label = labels[id] ?? "Unknown diagnostic";

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

        <main className="placeholder-main">
          <div className="placeholder-card">
            <p className="placeholder-tag">You selected</p>
            <p className="placeholder-label">"{label}"</p>
            <p className="placeholder-body">
              This screen is a placeholder. The next step in this diagnostic
              path will be built here.
            </p>
            <button className="back-btn" onClick={() => navigate("/")}>
              ← Back to start
            </button>
          </div>
        </main>

        <footer className="landing-footer">
          <span>Diagnostic Entry · Screen {id}</span>
        </footer>
      </div>
    </div>
  );
}
