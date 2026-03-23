import { useLocation } from "wouter";

const bundle = [
  { role: "Primary", tool: "ChatGPT" },
  { role: "Secondary", tool: "Perplexity" },
  { role: "Secondary", tool: "Claude" },
];

export default function Diagnostic3_2() {
  const [, navigate] = useLocation();

  return (
    <div className="landing-root">
      <div className="landing-container">
        <header className="landing-header">
          <span className="landing-wordmark">ACORA</span>
        </header>

        <main className="landing-main">
          <div className="diag-heading-block">
            <p className="diag-title">Research and finding sources</p>
          </div>

          <div className="bundle-block">
            <p className="bundle-label">Suggested bundle</p>
            <ul className="bundle-list">
              {bundle.map((item, i) => (
                <li key={i} className="bundle-item">
                  <span className={`bundle-role bundle-role--${item.role.toLowerCase()}`}>
                    {item.role}
                  </span>
                  <span className="bundle-tool">{item.tool}</span>
                </li>
              ))}
            </ul>
            <p className="bundle-why-label">Why this works</p>
            <p className="diag-body">
              This combination supports the main thinking process, source
              discovery, and stronger written synthesis in one clearer flow.
            </p>
          </div>

          <div className="diag-bridge">
            <p className="diag-bridge-text">
              This is where AI Tool Navigator begins. It shows how the right
              tools work together, so the bundle fits the real work more
              closely.
            </p>
          </div>

          <div className="diag-action-row">
            <button className="back-btn" onClick={() => navigate("/placeholder/3")}>
              ← Back
            </button>
            <button
              className="continue-btn"
              onClick={() => navigate("/sub-placeholder/3/next")}
            >
              Enter AI Tool Navigator
            </button>
          </div>
        </main>

        <footer className="landing-footer">
          <span>Diagnostic Entry · Screen 1.3.2</span>
        </footer>
      </div>
    </div>
  );
}
