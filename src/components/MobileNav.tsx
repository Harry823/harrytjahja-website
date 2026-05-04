'use client';
import { NAV_LINKS } from '@/shared/constants';
import { useActiveSection } from '@/hooks/useActiveSection';

export default function MobileNav() {
  const activeId = useActiveSection(NAV_LINKS.map(({ href }) => href));

  return (
    <header className="md:hidden sticky top-0 z-40 bg-surface border-b border-border px-6 py-3">
      <div className="flex items-center justify-center mb-2">
        <button
          aria-label="Scroll to top"
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-[15px] font-semibold text-primary tracking-[-0.02em]"
        >
          Harry Tjahja
        </button>
      </div>
      <nav className="flex gap-1 overflow-x-auto no-scrollbar">
        {NAV_LINKS.map(({ label, href }) => {
          const id = href.slice(1);
          const isActive = activeId === id;
          return (
            <a
              key={href}
              href={href}
              className={
                isActive
                  ? 'shrink-0 px-2.5 py-1 rounded-md font-mono text-[11px] font-medium text-accent bg-accent-subtle whitespace-nowrap'
                  : 'shrink-0 px-2.5 py-1 rounded-md font-mono text-[11px] text-secondary hover:text-primary transition-colors whitespace-nowrap'
              }
            >
              {label}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
