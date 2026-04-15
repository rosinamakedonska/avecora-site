import { useLocation } from "wouter";

const bundle = [
  { role: "Primary", tool: "ChatGPT" },
  { role: "Secondary", tool: "Perplexity" },
  { role: "Secondary", tool: "Gamma" },
];

export default function Diagnostic3_3_1() {
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
            <p className="diag-title">Research and source support</p>
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
              This combination supports idea development, source-backed
              research, and presentation building in one clearer flow.
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
            <button className="back-btn" onClick={() => navigate("/sub-placeholder/3/3")}>
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
      </div>
    </div>
  );
}
