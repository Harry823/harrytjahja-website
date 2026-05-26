'use client';

export default function NameBlock() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll back to top"
      className="group cursor-pointer select-none text-left bg-transparent border-0 p-0 block"
    >
      <div className="text-[17px] xl:text-[30px] font-semibold text-primary tracking-[-0.02em] mb-1">
        Harry Tjahja
      </div>
      <div className="font-mono text-[11px] xl:text-[18px] text-accent tracking-[0.06em]">
        SOFTWARE ENGINEER
      </div>
      <div className="font-mono text-[9px] xl:text-[14px] text-muted tracking-[0.1em] mt-1.5 transition-all duration-200 pointer-events-none opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0">
        BACK TO TOP ↑
      </div>
    </button>
  );
}
