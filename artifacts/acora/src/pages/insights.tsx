import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export default function Insights() {
  return (
    <div className="min-h-screen bg-[#f6f1e8] text-[#1f1a17]">
      <SiteHeader />

      <main className="mx-auto max-w-4xl px-6 py-10 md:px-8 md:py-12">
        <section className="max-w-3xl">
          <div className="mb-10 rounded-[2rem] border border-[#2e3f38] bg-[#1a2820] px-8 py-8 shadow-[0_18px_50px_rgba(26,48,41,0.22)] md:px-10 md:py-10">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#b9c4be]">
              Insights
            </p>

            <h1 className="mb-6 text-4xl font-semibold tracking-tight text-[#f4f1ea] md:text-5xl">
              AI changes fast.
              <br />
              Decision clarity should not.
            </h1>

            <p className="text-lg leading-8 text-[#d7ddd8]">
              This section will hold AI news, decision guides, and tool breakdowns
              translated into practical decision usefulness.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-[28px] border border-[#ddd2c2] bg-[#fbf7f0] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6f665f]">
                AI News
              </p>
              <p className="text-base leading-7 text-[#4a4540]">
                What changed, what matters, and what is still mostly noise.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#ddd2c2] bg-[#fbf7f0] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6f665f]">
                Decision Guides
              </p>
              <p className="text-base leading-7 text-[#4a4540]">
                How to choose more clearly when tools, options, and outputs compete.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#ddd2c2] bg-[#fbf7f0] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6f665f]">
                Tool Breakdowns
              </p>
              <p className="text-base leading-7 text-[#4a4540]">
                Which AI tools fit which role, and when a switch actually helps.
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
