import { Link } from "wouter";

const functions = [
  {
    number: "01",
    title: "Clarity Function",
    hookLine1: "AI answered.",
    hookLine2: "It still did not help.",
    body: "When output arrives but nothing becomes clearer, the situation was likely misread before the prompt was written.",
    product: "AI Clarity Funnel",
    result: "It surfaces the real decision so any further thinking starts in the right place.",
    slug: "/ai-clarity-funnel",
  },
  {
    number: "02",
    title: "Priority Function",
    hookLine1: "Too many directions.",
    hookLine2: "No stable ground.",
    body: "Ideas accumulate. Options multiply. At a certain point, the list itself becomes the obstacle.",
    product: "Mental Priority System",
    result: "It applies a structured ranking to competing directions so attention can settle and movement can begin.",
    slug: "/mental-priority-system",
  },
  {
    number: "03",
    title: "Tool Function",
    hookLine1: "Tools available.",
    hookLine2: "No logic for how to use them.",
    body: "The tools are there. What is missing is a clear role for each one.",
    product: "AI Tool Navigator",
    result: "It maps specific tools to specific roles so your workflow has structure, not just options.",
    slug: "/ai-tool-navigator",
  },
  {
    number: "04",
    title: "Execution Function",
    hookLine1: "Enough thinking.",
    hookLine2: "Still no next move.",
    body: "The context is there. The direction may even exist. What is still missing is one defined, time-bound action.",
    product: "3–70–24 Decision Frame",
    result: "It turns what is already known into one committed move so the thinking phase ends and the work begins.",
    slug: "/3-70-24-decision-frame",
  },
];

const sequenceStyles = [
  "max-w-2xl",
  "max-w-[42rem] md:ml-12",
  "max-w-[39rem] md:ml-4",
  "max-w-[43rem] md:ml-20",
];

const accentStyles = [
  "bg-transparent border-transparent",
  "bg-[#f4efe6] border-[#e6ddd0]",
  "bg-transparent border-transparent",
  "bg-[#eef0eb] border-[#d9dfd8]",
];

export default function Landing() {
  return (
    <main className="min-h-screen overflow-hidden bg-[linear-gradient(to_bottom,_#fcfbf8_0%,_#f7f2e9_38%,_#ffffff_100%)] text-neutral-900">
      <section className="relative">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[-8rem] top-[-7rem] h-[19rem] w-[19rem] rounded-full bg-[#efe6d8] blur-3xl opacity-80" />
          <div className="absolute right-[-6rem] top-[7rem] h-[18rem] w-[18rem] rounded-full bg-[#f3ece0] blur-3xl opacity-75" />
          <div className="absolute bottom-[-8rem] left-[26%] h-[16rem] w-[16rem] rounded-full bg-[#ece7df] blur-3xl opacity-65" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-10 md:px-8 md:pb-20 md:pt-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-black/10 bg-white/75 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-neutral-600 backdrop-blur">
              Avecore
              <span className="mx-2 opacity-30">•</span>
              <span className="normal-case tracking-normal text-neutral-500">
                Decision Systems for AI
              </span>
            </div>

            <h1 className="mt-10 max-w-2xl text-[clamp(1.9rem,3.4vw,3rem)] font-medium leading-[1.18] tracking-[-0.025em] text-[#111512]">
              Avecore Adds the Decision Layer That Makes AI Output Useful
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-neutral-600">
              AI gives you answers. Avecore gives you decisions.
            </p>

            <div className="mt-8 max-w-xl space-y-5 text-base leading-8 text-neutral-500">
              <p>
                AI can give you more output than ever. What still takes structure is
                knowing what to do with it — which direction matters, which tool fits,
                what comes first, and when it is time to stop thinking and move.
              </p>

              <p>Avecore handles that layer.</p>
            </div>
          </div>

          <div className="mt-12 md:mt-14">
            <div className="inline-block rounded-2xl border border-[#d8cfc2] bg-[#f4ede2] px-5 py-4 shadow-[0_8px_24px_rgba(0,0,0,0.05)]">
              <p className="text-[10px] uppercase tracking-[0.22em] text-neutral-400">
                Decision quality
              </p>
              <p className="mt-2 text-sm font-medium text-neutral-700">
                Relief, control, precision
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 pb-18 md:px-8 md:pb-24">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">
              One system / four functions
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#141915] md:text-[2.7rem]">
              One of these is where movement is currently breaking.
            </h2>
          </div>

          <div className="mt-14 space-y-8 md:space-y-10">
            {functions.map((item, index) => (
              <article
                key={item.number}
                className={
                  "rounded-[2rem] border px-7 py-7 md:px-9 md:py-8 " +
                  sequenceStyles[index] +
                  " " +
                  accentStyles[index]
                }
              >
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">
                  {item.number} — {item.title}
                </p>

                <h3 className="mt-4 max-w-xl text-xl font-semibold leading-[1.35] tracking-[-0.015em] text-[#161b17] md:text-[1.65rem]">
                  {item.hookLine1}
                  <br />
                  {item.hookLine2}
                </h3>

                <p className="mt-5 max-w-xl text-base leading-8 text-neutral-600">
                  {item.body}
                </p>

                <p className="mt-4 max-w-xl text-base leading-8 text-neutral-800">
                  <span className="font-semibold">{item.product}</span> runs this function.{" "}
                  {item.result}
                </p>

                <Link
                  href={item.slug}
                  className="mt-5 inline-flex items-center text-sm font-medium text-[#2d5a45] hover:text-[#1d3d2f] transition-colors"
                >
                  Explore this function
                  <span className="ml-1.5 opacity-60">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="max-w-3xl rounded-[2rem] border border-[#2e3f38] bg-[#1a2820] px-8 py-10 text-[#f4f1ea] shadow-[0_22px_60px_rgba(0,0,0,0.10)] md:px-10 md:py-12">
            <p className="text-sm uppercase tracking-[0.18em] text-[#b9c4be]">
              Start where it fits
            </p>

            <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-[2.4rem]">
              Start with the function that fits where you are now.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#d5ddd8]">
              Each function addresses a different point in the same process. They are
              not interchangeable, and they are not meant to be used all at once.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/clarity-for-beginners"
                className="inline-flex items-center justify-center rounded-2xl bg-[#efe7da] px-6 py-3.5 text-sm font-medium text-[#17211d] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f5eee3]"
              >
                Start with the Diagnostic
              </Link>

              <Link
                href="/products-and-packages"
                className="inline-flex items-center justify-center rounded-2xl border border-[#42534c] px-6 py-3.5 text-sm font-medium text-[#f4f1ea] transition duration-300 hover:-translate-y-0.5 hover:bg-[#1d2a25]"
              >
                See Products and Packages
              </Link>
            </div>
          </div>

        </div>
      </section>

      <footer className="border-t border-neutral-200 bg-[#fcfbf8] px-6 py-12 md:px-8">
        <div className="mx-auto max-w-7xl flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-[-0.01em] text-neutral-900">
              Avecore™
            </p>
            <p className="mt-1 text-sm text-neutral-500">
              Decision Systems for AI
            </p>
            <p className="mt-1 text-xs text-neutral-400">
              Built and published by MacTerra Ltd
            </p>
          </div>
          <div className="flex gap-6 text-sm text-neutral-500">
            <Link href="/legal/terms" className="hover:text-neutral-800 transition-colors">Terms</Link>
            <Link href="/legal/refund" className="hover:text-neutral-800 transition-colors">Refund</Link>
            <Link href="/legal/privacy" className="hover:text-neutral-800 transition-colors">Privacy</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
