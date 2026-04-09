import { Link } from "wouter";

export default function Placeholder2() {
  return (
    <div className="min-h-screen bg-[#f7f3ee] text-[#1f1f1b] px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <Link href="/diagnostic">
          <a className="text-sm opacity-70 hover:opacity-100 transition">← Back</a>
        </Link>

        <div className="mt-10 bg-white/80 border border-black/5 rounded-3xl p-8 shadow-sm">
          <div className="text-xs tracking-[0.2em] uppercase opacity-50 mb-4">
            Mental Priority System
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-6">
            Too much information is coming in. <br />
            I can’t see what matters.
          </h1>

          <p className="text-lg leading-8 opacity-80 mb-8">
            When too much is coming in — inputs, tasks, thoughts, options, AI outputs —
            it becomes hard to see what matters right now. Progress becomes possible
            only after the right priorities are set.
          </p>

          <div className="bg-[#efe7dc] rounded-3xl p-6 mb-8">
            <div className="text-xs tracking-[0.18em] uppercase opacity-50 mb-4">
              Mini product glimpse
            </div>

            <p className="text-lg leading-8 mb-4">
              Priorities usually become clearer when one of these is identified first:
            </p>

            <ul className="space-y-3 text-lg">
              <li>• what matters now</li>
              <li>• what can wait</li>
              <li>• what is creating the most pressure</li>
            </ul>
          </div>

          <div className="mb-6 text-sm tracking-[0.18em] uppercase opacity-50">
            Which of these matters most right now?
          </div>

          <div className="grid gap-4">
            <Link href="/mini-mental-priority-matters-now">
              <a className="block rounded-2xl bg-[#1f3128] text-white px-6 py-5 text-lg hover:opacity-95 transition">
                what matters now
              </a>
            </Link>

            <Link href="/mini-mental-priority-can-wait">
              <a className="block rounded-2xl bg-[#1f3128] text-white px-6 py-5 text-lg hover:opacity-95 transition">
                what can wait
              </a>
            </Link>

            <Link href="/mini-mental-priority-pressure">
              <a className="block rounded-2xl bg-[#1f3128] text-white px-6 py-5 text-lg hover:opacity-95 transition">
                what is creating the most pressure
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
