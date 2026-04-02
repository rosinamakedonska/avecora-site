import { Link } from "wouter";

export default function ProductsAndPackages() {
  return (
    <div className="min-h-screen bg-background text-foreground px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-block mb-8 text-sm opacity-70 hover:opacity-100">
          ← Back
        </Link>

        <div className="text-sm uppercase tracking-wide opacity-60 mb-3">
          Decision Systems for AI
        </div>

        <h1 className="text-4xl font-semibold mb-4">
          Products and Packages
        </h1>

        <p className="text-lg opacity-80 mb-10">
          Choose a single product or a package, depending on how much support you need right now.
        </p>

        <div className="space-y-6">
          <div className="border rounded-2xl p-6">
            <div className="flex items-center justify-between gap-4 mb-3">
              <h2 className="text-xl font-medium">AI Clarity Funnel</h2>
              <div className="text-lg font-semibold">€27</div>
            </div>
            <p className="opacity-80 mb-4">
              Helps make the situation clearer before asking AI for direction.
            </p>
            <Link
              href="/product-ai-clarity-funnel"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-medium border hover:opacity-90"
            >
              View Product
            </Link>
          </div>

          <div className="border rounded-2xl p-6">
            <div className="flex items-center justify-between gap-4 mb-3">
              <h2 className="text-xl font-medium">Mental Priority System</h2>
              <div className="text-lg font-semibold">€37</div>
            </div>
            <p className="opacity-80 mb-4">
              Helps identify what matters most now when everything feels equally important.
            </p>
            <Link
              href="/product-mental-priority-system"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-medium border hover:opacity-90"
            >
              View Product
            </Link>
          </div>

          <div className="border rounded-2xl p-6">
            <div className="flex items-center justify-between gap-4 mb-3">
              <h2 className="text-xl font-medium">AI Tool Navigator</h2>
              <div className="text-lg font-semibold">€29</div>
            </div>
            <p className="opacity-80 mb-4">
              Helps decide which AI tools belong in which role for your work.
            </p>
            <Link
              href="/product-ai-tool-navigator"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-medium border hover:opacity-90"
            >
              View Product
            </Link>
          </div>

          <div className="border rounded-2xl p-6">
            <div className="flex items-center justify-between gap-4 mb-3">
              <h2 className="text-xl font-medium">3–70–24 Decision Frame</h2>
              <div className="text-lg font-semibold">€27</div>
            </div>
            <p className="opacity-80 mb-4">
              Helps turn multiple possible moves into one clearer next step.
            </p>
            <Link
              href="/product-3-70-24"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-medium border hover:opacity-90"
            >
              View Product
            </Link>
          </div>

          <div className="border rounded-2xl p-6">
            <div className="flex items-center justify-between gap-4 mb-3">
              <h2 className="text-xl font-medium">Clarity + Priority Package</h2>
              <div className="text-lg font-semibold">€54</div>
            </div>
            <p className="opacity-80 mb-2">Includes:</p>
            <ul className="opacity-80 mb-4 space-y-1">
              <li>• AI Clarity Funnel</li>
              <li>• Mental Priority System</li>
            </ul>
            <Link
              href="/clarity-priority-bundle"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-medium border hover:opacity-90"
            >
              View Package
            </Link>
          </div>

          <div className="border rounded-2xl p-6">
            <div className="flex items-center justify-between gap-4 mb-3">
              <h2 className="text-xl font-medium">Clarity + Decision Package</h2>
              <div className="text-lg font-semibold">€47</div>
            </div>
            <p className="opacity-80 mb-2">Includes:</p>
            <ul className="opacity-80 mb-4 space-y-1">
              <li>• AI Clarity Funnel</li>
              <li>• 3–70–24 Decision Frame</li>
            </ul>
            <Link
              href="/clarity-decision-bundle"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-medium border hover:opacity-90"
            >
              View Package
            </Link>
          </div>

          <div className="border rounded-2xl p-6">
            <div className="flex items-center justify-between gap-4 mb-3">
              <h2 className="text-xl font-medium">Full Decision Package</h2>
              <div className="text-lg font-semibold">€99</div>
            </div>
            <p className="opacity-80 mb-2">Includes:</p>
            <ul className="opacity-80 mb-4 space-y-1">
              <li>• AI Clarity Funnel</li>
              <li>• Mental Priority System</li>
              <li>• AI Tool Navigator</li>
              <li>• 3–70–24 Decision Frame</li>
            </ul>
            <Link
              href="/full-decision-bundle"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-medium border hover:opacity-90"
            >
              View Package
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}