export default function Tag({ label }: { label: string }) {
  return (
    <span className="font-mono text-[11px] font-medium tracking-[0.04em] px-2 py-0.5 rounded bg-tag text-tag-text whitespace-nowrap">
      {label}
    </span>
  );
}
