import { useState } from "react";

type PurchaseCTABlockProps = {
  href: string;
  label: string;
};

export default function PurchaseCTABlock({
  href,
  label,
}: PurchaseCTABlockProps) {
  const [refundAccepted, setRefundAccepted] = useState(false);

  return (
    <>
      <a
        className={`continue-btn${
          !refundAccepted ? " opacity-50 cursor-not-allowed pointer-events-none" : ""
        }`}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-disabled={!refundAccepted}
      >
        {label}
      </a>

      <label className="flex items-start gap-3 mt-5 mb-8 max-w-2xl text-sm md:text-base leading-6 text-black/80 cursor-pointer">
        <input
          type="checkbox"
          className="mt-1 h-4 w-4 shrink-0"
          checked={refundAccepted}
          onChange={(e) => setRefundAccepted(e.target.checked)}
        />
        <span>
          I understand that this is a digital product and the purchase is non-refundable.{" "}
          <a href="/legal/refund" className="underline underline-offset-4">
            Refund policy
          </a>
        </span>
      </label>

      <div className="mb-14 max-w-3xl">
        <p className="text-base md:text-lg leading-8 text-black/80 mb-1">
          Includes a post-purchase bonus
        </p>
        <p className="text-lg md:text-xl leading-8 font-semibold text-black">
          Personal Decision Calibration for ChatGPT
        </p>
      </div>
    </>
  );
}
