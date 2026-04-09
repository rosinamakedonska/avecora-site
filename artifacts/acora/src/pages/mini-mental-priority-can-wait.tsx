import { Link } from "wouter";

export default function MiniMentalPriorityCanWait() {
  return (
    <div className="min-h-screen bg-[#f7f3ee] text-[#1f1f1b] px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <Link href="/placeholder/2">
          <a className="text-sm opacity-70 hover:opacity-100 transition">← Back</a>
        </Link>

        <div className="mt-10 bg-white/80 border border-black/5 rounded-3xl p-8 shadow-sm">
          <div className="text-xs tracking-[0.2em] uppercase opacity-50 mb-4">
            Mental Priority System
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-6">
            what can wait
          </h1>

          <p className="text-xl leading-8 opacity-85 mb-10">
            Once it is clear what can wait, the right priority becomes easier to see.
          </p>

          <div className="bg-[#efe7dc] rounded-3xl p-6 mb-8">
            <p className="text-lg leading-8">
              This is where Mental Priority System begins. It brings the right priority
              into focus, so the right next step becomes visible.
            </p>
          </div>

          <Link href="/mental-priority-system">
            <a className="inline-block rounded-2xl bg-[#1f3128] text-white px-6 py-4 text-lg hover:opacity-95 transition">
              Go to Mental Priority System
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
