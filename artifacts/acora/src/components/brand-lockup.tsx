type BrandLockupProps = {
  className?: string;
};

export default function BrandLockup({ className = "" }: BrandLockupProps) {
  return (
    <div className={className}>
      <div className="text-[11px] tracking-[0.28em] uppercase text-[#8f8273] font-medium mb-1">
        Avecore
      </div>
      <div className="text-[11px] tracking-[0.28em] uppercase text-[#8f8273] font-medium">
        Decision Systems for AI
      </div>
    </div>
  );
}
