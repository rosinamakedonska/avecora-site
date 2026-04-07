export default function BonusCalibrationBlock() {
  return (
    <section className="mt-10 rounded-2xl border p-6">
      <div className="text-xs uppercase tracking-[0.18em] opacity-60 mb-3">
        Bonus
      </div>

      <h2 className="text-2xl font-semibold mb-3">
        Personal Decision Calibration for ChatGPT
      </h2>

      <p className="text-base opacity-80 mb-3">
        The setup layer that makes AI work with your decisions — not against them.
      </p>

      <p className="text-sm opacity-70 mb-6">
        A practical post-purchase bonus to help you set ChatGPT up in a way that
        supports clearer decisions, better context handling, and more usable output.
      </p>

      <a
        className="continue-btn"
        href="/pdfs/Personal_Decision_Calibration_for_ChatGPT.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Bonus PDF
      </a>
    </section>
  );
}