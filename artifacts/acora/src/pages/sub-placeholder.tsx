import { useLocation, useParams } from "wouter";

const labels: Record<string, string> = {
  "1": "The goal becomes more specific",
  "2": "The context becomes clearer",
  "3": "The limits become visible",
  "next": "Continue",
};

export default function SubPlaceholder() {
  const { parentId, id } = useParams<{ parentId: string; id: string }>();
  const [, navigate] = useLocation();
  const label = labels[id] ?? "Unknown option";

  return (
    <div className="landing-root">
      <div className="landing-container">
        <header className="landing-header">
          <span className="landing-wordmark">ACORA</span>
        </header>

        <main className="placeholder-main">
          <div className="placeholder-card">
            <p className="placeholder-tag">You selected</p>
            <p className="placeholder-label">"{label}"</p>
            <p className="placeholder-body">
              This screen is a placeholder. The next step in this diagnostic
              path will be built here.
            </p>
            <button
              className="back-btn"
              onClick={() => navigate(`/placeholder/${parentId}`)}
            >
              ← Back
            </button>
          </div>
        </main>

        <footer className="landing-footer">
          <span>Diagnostic Entry · Screen 1.{id}</span>
        </footer>
      </div>
    </div>
  );
}
