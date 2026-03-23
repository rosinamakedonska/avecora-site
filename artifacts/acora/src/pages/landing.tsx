import { useLocation } from "wouter";

const diagnostics = [
  {
    id: 1,
    text: "AI doesn't understand my situation well enough.",
  },
  {
    id: 2,
    text: "Too much information is coming in. I can't see what matters.",
  },
  {
    id: 3,
    text: "Too many AI promises. I need the right combination for my work.",
  },
  {
    id: 4,
    text: "I have several possible next moves, but I can't choose one.",
  },
];

export default function Landing() {
  const [, navigate] = useLocation();

  function handleSelect(id: number) {
    navigate(`/placeholder/${id}`);
  }

  return (
    <div className="landing-root">
      <div className="landing-container">
        <header className="landing-header">
          <span className="landing-wordmark">ACORA</span>
        </header>

        <main className="landing-main">
          <p className="landing-intro">
            Most people think the problem is the AI. Often, the real issue
            starts earlier — something in the situation is still unclear.
            Without that clarity, even the best AI response may leave you
            without a real answer or clear direction.
          </p>

          <p className="landing-prompt">What feels most true right now?</p>

          <div className="landing-cards">
            {diagnostics.map((d) => (
              <button
                key={d.id}
                className="landing-card"
                onClick={() => handleSelect(d.id)}
              >
                <span className="card-number">{d.id}</span>
                <span className="card-text">{d.text}</span>
                <span className="card-arrow">→</span>
              </button>
            ))}
          </div>
        </main>

        <footer className="landing-footer">
          <span>Diagnostic Entry · Screen 1</span>
        </footer>
      </div>
    </div>
  );
}
