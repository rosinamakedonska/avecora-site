import { Link } from "wouter";

export default function ClarityForBeginners() {
  return (
    <main className="min-h-screen bg-[#f8f6f2] text-[#2f2f2f] px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <div className="mb-6">
            <div className="text-sm tracking-[0.2em] uppercase opacity-60">Avecore</div>
            <div className="text-sm opacity-70">Decision Systems for AI</div>
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            Clarity for Beginners
          </h1>
          <p className="text-lg md:text-xl italic opacity-80">
            Before the tool, the situation.
          </p>
        </div>

        <div className="space-y-10 text-[17px] leading-8">
          <section>
            <p>
              When you are new to working with AI tools, frameworks, or decision
              systems, it is easy to end up with too many options and too little
              direction. Many things seem helpful. Fewer things make the next
              step clear.
            </p>
            <p className="mt-6">
              The shift usually begins there: not with choosing a tool, but with
              understanding what the situation actually needs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Start with the problem in front of you
            </h2>
            <p>
              Some situations need more clarity. Some need stronger priority.
              Some need a decision tested before action. Others need structure,
              especially when several tools are already in play without a clear
              role.
            </p>
            <p className="mt-6">
              When the problem becomes clearer, the next step usually does too.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Work with one thing at a time
            </h2>
            <p>
              The clearest first results usually come from focused use.
            </p>
            <p className="mt-6">
              Take one real situation. Use one tool or one framework. Move
              through it slowly enough to stay specific, and let that process
              show you what becomes clearer, what still feels unresolved, and
              what needs attention next.
            </p>
            <p className="mt-6">
              Trying to solve everything at once usually creates more noise than
              progress.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Let clarity carry more of the work
            </h2>
            <p>
              Useful output rarely depends on complexity alone. It depends on
              understanding what is happening and what kind of result would
              actually help.
            </p>
            <p className="mt-6">
              Simple language is often enough. A well-defined situation will
              take you further than polished phrasing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              What a good first result looks like
            </h2>
            <p>
              A good first pass does not need to solve everything.
            </p>
            <p className="mt-6">
              It only needs to do one thing well: make the situation clearer,
              narrow the next step, or show you the right question to ask next.
              That is often enough to move forward.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              If you are using the Avecore tools
            </h2>

            <div className="space-y-4">
              <p>
                <Link href="/ai-clarity-funnel">
                  <span className="underline underline-offset-4 cursor-pointer">
                    AI Clarity Funnel™
                  </span>
                </Link>{" "}
                — helps when the situation still feels too broad or difficult to
                explain.
              </p>

              <p>
                <Link href="/mental-priority-system">
                  <span className="underline underline-offset-4 cursor-pointer">
                    Mental Priority System™
                  </span>
                </Link>{" "}
                — helps when several directions are competing for your attention.
              </p>

              <p>
                <Link href="/3-70-24-decision-frame">
                  <span className="underline underline-offset-4 cursor-pointer">
                    3–70–24 Decision Frame™
                  </span>
                </Link>{" "}
                — helps when a decision needs to be tested before action.
              </p>

              <p>
                <Link href="/ai-tool-navigator">
                  <span className="underline underline-offset-4 cursor-pointer">
                    AI Tool Navigator™
                  </span>
                </Link>{" "}
                — helps when the question is no longer only what to ask, but
                what to use, when, and why.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}