export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <h2 className="font-mono text-[11px] font-medium tracking-[0.12em] uppercase text-accent whitespace-nowrap">
        {children}
      </h2>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}
