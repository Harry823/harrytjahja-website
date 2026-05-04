'use client';
import { useEffect, useState } from 'react';
import { NAV_LINKS } from '@/shared/constants';

export default function MobileNav() {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const winner = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (winner) setActiveId(winner.target.id);
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    NAV_LINKS.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="md:hidden sticky top-0 z-40 bg-surface border-b border-border px-6 py-3">
      <div className="flex items-center justify-center mb-2">
        <button
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
