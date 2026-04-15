import { Link } from "wouter";
import { motion } from "framer-motion";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

const functions = [
  {
    id: "clarity",
    number: "01",
    title: "Clarity Function",
    hookLine1: "AI answered.",
    hookLine2: "It still did not help.",
    body: "When output arrives but nothing becomes clearer, the situation was likely misread before the prompt was written.",
    product: "AI Clarity Funnel",
    result: "It surfaces the real decision so any further thinking starts in the right place.",
    slug: "/placeholder/1",
  },
  {
    id: "priority",
    number: "02",
    title: "Priority Function",
    hookLine1: "Too many directions.",
    hookLine2: "No stable ground.",
    body: "Ideas accumulate. Options multiply. At a certain point, the list itself becomes the obstacle.",
    product: "Mental Priority System",
    result: "It applies a structured ranking to competing directions so attention can settle and movement can begin.",
    slug: "/placeholder/2",
  },
  {
    id: "tool",
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
    id: "execution",
    number: "04",
    title: "Execution Function",
    hookLine1: "Enough thinking.",
    hookLine2: "Still no next move.",
    body: "The context is there. The direction may even exist. What is still missing is one defined, time-bound action.",
    product: "3–70–24 Decision Frame",
    result: "It turns what is already known into one committed move so the thinking phase ends and the work begins.",
    slug: "/placeholder/4",
  },
];

const sequenceStyles = [
  "max-w-2xl",
  "max-w-[42rem] md:ml-12",
  "max-w-[39rem] md:ml-4",
  "max-w-[43rem] md:ml-20",
];

const accentStyles = [
  "bg-[#faf7f2] border-[#e2d9cc]",
  "bg-[#f4ede2] border-[#d8cfc2]",
  "bg-[#f7f4ef] border-[#dfd6c9]",
  "bg-[#f4ede2] border-[#d8cfc2]",
];

const heroContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const sectionContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.04,
    },
  },
};

const cardContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.06,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const softRise = {
  hidden: { opacity: 0, y: 18, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Landing() {
  return (
    <><SiteHeader /><main className="min-h-screen overflow-hidden bg-[linear-gradient(to_bottom,_#fcfbf8_0%,_#f7f2e9_38%,_#ffffff_100%)] text-neutral-900">
      <section className="relative">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[-8rem] top-[-7rem] h-[19rem] w-[19rem] rounded-full bg-[#efe6d8] blur-3xl opacity-80" />
          <div className="absolute right-[-6rem] top-[7rem] h-[18rem] w-[18rem] rounded-full bg-[#f3ece0] blur-3xl opacity-75" />
          <div className="absolute bottom-[-8rem] left-[26%] h-[16rem] w-[16rem] rounded-full bg-[#ece7df] blur-3xl opacity-65" />
        </div>

        <motion.div
          className="relative mx-auto max-w-7xl px-6 pb-16 pt-10 md:px-8 md:pb-20 md:pt-14"
          variants={heroContainer}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-4xl">
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center rounded-full border border-black/10 bg-white/75 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-neutral-600 backdrop-blur"
            >
              Avecore
              <span className="mx-2 opacity-30">•</span>
              <span className="normal-case tracking-normal text-neutral-500">
                Decision Systems for AI
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-10 max-w-4xl leading-none text-[#111512]"
            >
              <span className="block text-[clamp(2.4rem,5.1vw,4.25rem)] font-semibold uppercase tracking-[-0.045em]">
                The Decision Layer
              </span>
              <span className="mt-4 block text-[clamp(1.38rem,2.45vw,1.95rem)] font-medium leading-[1.38] tracking-[-0.012em] text-[#4d5751]">
                That Makes AI Output Useful
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-xl text-lg leading-8 text-neutral-600"
            >
              AI gives you answers. Avecore gives you decisions.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 max-w-xl space-y-5 text-base leading-8 text-neutral-500"
            >
              <p>
                AI can give you more output than ever. What still takes structure is
                knowing what to do with it — which direction matters, which tool fits,
                what comes first, and when it is time to stop thinking and move.
              </p>

              <p>
                <span className="font-semibold text-[#111512]">Avecore</span> handles that layer.
              </p>
            </motion.div>
          </div>

          <motion.div variants={softRise} className="mt-8 w-full md:mt-10">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-center gap-5 rounded-full border border-[#c4b8a4] bg-[#f4ede2] px-6 py-3 text-center shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
              <p className="shrink-0 text-[10px] font-bold uppercase tracking-[0.26em] text-[#5c4a38]">
                Decision quality
              </p>
              <div className="h-3.5 w-px bg-[#b8a898]" />
              <p className="text-sm font-semibold text-[#1e140c]">
                Relief, control, precision
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <motion.section
        className="relative pb-16 md:pb-20"
        variants={sectionContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.16 }}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <motion.div variants={fadeUp} className="mx-auto max-w-2xl text-center">
            <p className="text-[2rem] font-semibold leading-[1.12] tracking-[-0.03em] text-[#0e1210] md:text-[2.5rem]">
              One decision system
            </p>

            <div className="mt-9">
              <p className="text-[12px] font-bold uppercase tracking-[0.32em] text-[#1a2820]">
                Four functions
              </p>

              <div className="mt-4 flex flex-wrap justify-center gap-3">
                {[
                  { label: "Clarity", anchor: "clarity" },
                  { label: "Priority", anchor: "priority" },
                  { label: "Tool", anchor: "tool" },
                  { label: "Execution", anchor: "execution" },
                ].map(({ label, anchor }) => (
                  <a
                    key={anchor}
                    href={`#${anchor}`}
                    className="rounded-full border border-[#cdc3b4] bg-[#f4ede2] px-4 py-2 text-[13px] font-semibold tracking-[-0.005em] text-[#2e2418] transition-colors hover:border-[#b8ad9e] hover:bg-[#ede2d0]"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <p className="mt-7 text-base leading-7 text-neutral-500">
              One of these is where movement is currently breaking.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
          >
            <Link
              href="/diagnostic"
              className="inline-flex items-center justify-center rounded-2xl bg-[#1a2820] px-6 py-3 text-sm font-medium text-[#f4f1ea] transition duration-300 hover:bg-[#24342c]"
            >
              Start Diagnostic
            </Link>

            <Link
              href="/products-and-packages"
              className="inline-flex items-center justify-center rounded-2xl border border-[#cdc3b4] bg-white/80 px-6 py-3 text-sm font-medium text-[#1f241f] transition duration-300 hover:bg-white"
            >
              See Products and Packages
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-6 text-center">
            <Link
              href="/clarity-for-beginners"
              className="inline-flex items-center justify-center rounded-full border border-[#d8cec2] bg-white/80 px-6 py-3 text-sm font-medium text-[#2a2a26] shadow-[0_10px_26px_rgba(60,52,46,0.08)] transition-colors hover:bg-white"
            >
              New to AI? Start with Clarity for Beginners
            </Link>
          </motion.div>

          <motion.div
            variants={cardContainer}
            className="mt-16 space-y-6 md:mt-20"
          >
            {functions.map((item, index) => (
              <motion.article
                key={item.id}
                id={item.id}
                variants={softRise}
                className={`rounded-[2rem] border px-6 py-7 shadow-[0_18px_40px_rgba(48,38,28,0.06)] md:px-8 md:py-8 ${sequenceStyles[index]} ${accentStyles[index]}`}
              >
                <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                  <div className="max-w-xl">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#75624f]">
                      {item.number}
                    </p>

                    <p className="mt-3 text-[12px] font-medium uppercase tracking-[0.18em] text-[#6d655b]">
                      {item.title}
                    </p>

                    <h2 className="mt-4 text-[1.55rem] font-semibold leading-[1.08] tracking-[-0.03em] text-[#111512] md:text-[1.9rem]">
                      <span className="block">{item.hookLine1}</span>
                      <span className="mt-1 block">{item.hookLine2}</span>
                    </h2>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-neutral-500">
                      {item.body}
                    </p>

                    <p className="mt-5 max-w-xl text-sm leading-7 text-[#2d342e]">
                      {item.result}
                    </p>
                  </div>

                  <div className="md:w-[15rem] md:shrink-0">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#75624f]">
                      System product
                    </p>

                    <p className="mt-2 text-base font-medium leading-7 text-[#111512]">
                      {item.product}
                    </p>

                    <Link
                      href={item.slug}
                      className="mt-6 inline-flex items-center justify-center rounded-2xl border border-[#cfc5b7] bg-white/80 px-5 py-3 text-sm font-medium text-[#1f241f] transition duration-300 hover:-translate-y-0.5 hover:bg-white"
                    >
                      Explore this function
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="relative pb-16 md:pb-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.22 }}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <motion.div
            variants={softRise}
            className="max-w-3xl rounded-[2rem] border border-[#2e3f38] bg-[#1a2820] px-8 py-10 text-[#f4f1ea] shadow-[0_22px_60px_rgba(0,0,0,0.10)] md:px-10 md:py-12"
          >
            <p className="text-sm uppercase tracking-[0.18em] text-[#b9c4be]">
              Next step
            </p>

            <h2 className="mt-3 max-w-xl text-xl font-medium leading-[1.35] tracking-[-0.015em] md:text-[1.45rem]">
              Choose the clearest way in.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#d5ddd8]">
              Start with the Diagnostic for guided entry, or go directly to Products
              and Packages if you already know which function you need.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/diagnostic"
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
          </motion.div>
        </div>
      </motion.section>

      <SiteFooter />
    </main>
    </>
  );
}
