import PurchaseCTABlock from "@/components/purchase-cta-block";
import { Link } from "wouter";

export default function FullDecisionBundle() {
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
          Full Decision Bundle
        </h1>

        <p className="text-lg opacity-80 mb-8">
          A complete bundle for turning AI output into clearer priorities, better tool choices, and more usable next steps.
        </p>

        <div className="border rounded-2xl p-6 mb-4">
          <h2 className="text-lg font-medium mb-4">This bundle includes:</h2>
          <ul className="space-y-2 opacity-90">
            <li>• AI Clarity Funnel</li>
            <li>• Mental Priority System</li>
            <li>• AI Tool Navigator</li>
            <li>• 3–70–24 Decision Frame</li>
          </ul>
        </div>

        <p className="text-sm opacity-60 mb-8">
          Four systems for turning AI output into more usable decisions.
        </p>

        <div className="text-3xl font-semibold mb-2">€99</div>

        <p className="text-sm opacity-60 mb-8">
          One payment. Direct access after checkout.
        </p>

        <PurchaseCTABlock href="https://buy.stripe.com/aFaeVe8TZ9yEfxwbeT0Fi08" label="Buy Bundle" />
            <div className="border rounded-2xl p-6">
          <h2 className="text-lg font-medium mb-4">This bundle is for you if:</h2>
          <ul className="space-y-3 opacity-90">
            <li>• AI gives you output, but it still feels too generic</li>
            <li>• too many possible directions make it hard to choose</li>
            <li>• you are not sure which tools belong in which role</li>
            <li>• you need a more structured way to turn output into decisions</li>
          </ul>
        </div>

        <p className="mt-8 text-base opacity-80">
          Clarity, prioritization, tool selection, and next-step definition — in one bundle.
        </p>
      </div>
    </div>
  );
}