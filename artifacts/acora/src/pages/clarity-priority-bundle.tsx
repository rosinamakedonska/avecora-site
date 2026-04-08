import PurchaseCTABlock from "@/components/purchase-cta-block";
import { Link } from "wouter";
import SiteFooter from "@/components/site-footer";

export default function ClarityPriorityBundle() {
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
          Clarity + Priority Bundle
        </h1>

        <p className="text-lg opacity-80 mb-8">
          When AI output is still too generic and too many things feel equally important, it becomes hard to move forward with confidence.
        </p>

        <div className="border rounded-2xl p-6 mb-4">
          <h2 className="text-lg font-medium mb-4">This bundle includes:</h2>
          <ul className="space-y-2 opacity-90">
            <li>• AI Clarity Funnel</li>
            <li>• Mental Priority System</li>
          </ul>
        </div>

        <p className="text-sm opacity-60 mb-8">
          Two systems for clearer input and clearer prioritization.
        </p>

        <div className="text-3xl font-semibold mb-2">€54</div>

        <p className="text-sm opacity-60 mb-8">
          One payment. Direct access after checkout.
        </p>

        <PurchaseCTABlock href="https://buy.stripe.com/9B628s2vB7qwgBAfv90Fi06" label="Buy Bundle" />
            <div className="border rounded-2xl p-6">
          <h2 className="text-lg font-medium mb-4">This bundle is for you if:</h2>
          <ul className="space-y-3 opacity-90">
            <li>• AI gives you output, but it still feels too broad</li>
            <li>• your situation has not been defined clearly enough yet</li>
            <li>• several things feel important, but the right priority is still unclear</li>
            <li>• you need better structure before taking the next step</li>
          </ul>
        </div>

        <p className="mt-8 text-base opacity-80">
          First make the situation clearer. Then make the priority clearer.
        </p>
      </div>
      <SiteFooter />
    </div>
  );
}