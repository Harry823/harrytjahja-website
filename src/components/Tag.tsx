export default function Tag({ label }: { label: string }) {
  return (
    <span className="font-mono text-[11px] xl:text-[14px] font-medium tracking-[0.04em] px-2 xl:px-3 py-0.5 xl:py-1 rounded bg-tag text-tag-text whitespace-nowrap">
      {label}
    </span>
  );
}
