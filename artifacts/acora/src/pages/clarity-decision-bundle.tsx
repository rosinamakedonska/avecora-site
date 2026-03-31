import { Link } from "wouter";

export default function ClarityDecisionBundle() {
  return (
    <div className="min-h-screen bg-background text-foreground px-6 py-12">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="inline-block mb-8 text-sm opacity-70 hover:opacity-100">
          ← Back
        </Link>

        <div className="text-sm uppercase tracking-wide opacity-60 mb-3">
          Decision Systems for AI
        </div>

        <h1 className="text-4xl font-semibold mb-4">
          Clarity + Decision Bundle
        </h1>

        <p className="text-lg opacity-80 mb-8">
          When AI gives you output but the next move is still not clear enough to act on, better structure is needed before action.
        </p>

        <div className="border rounded-2xl p-6 mb-4">
          <h2 className="text-lg font-medium mb-4">This bundle includes:</h2>
          <ul className="space-y-2 opacity-90">
            <li>• AI Clarity Funnel</li>
            <li>• 3–70–24 Decision Frame</li>
          </ul>
        </div>

        <p className="text-sm opacity-60 mb-8">
          Two systems for clearer input and a clearer next move.
        </p>

        <div className="text-3xl font-semibold mb-2">€47</div>

        <p className="text-sm opacity-60 mb-8">
          One payment. Direct access after checkout.
        </p>

        <a
          href="https://buy.stripe.com/dRm3cw5HNfX23OOciX0Fi07"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-medium border mb-12 hover:opacity-90"
        >
          Buy Bundle
        </a>

        <div className="border rounded-2xl p-6">
          <h2 className="text-lg font-medium mb-4">This bundle is for you if:</h2>
          <ul className="space-y-3 opacity-90">
            <li>• AI gives you answers, but you still do not know what to do next</li>
            <li>• the output sounds useful, but not usable enough yet</li>
            <li>• you need to define the decision more clearly before moving</li>
            <li>• you want a clearer next step, not more information</li>
          </ul>
        </div>

        <p className="mt-8 text-base opacity-80">
          First narrow the situation. Then define the next move.
        </p>
      </div>
    </div>
  );
}