'use client';
import { useEffect, useState } from 'react';
import NameBlock from './NameBlock';
import { useTheme } from './ThemeProvider';

const NAV_LINKS = [
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Contact',    href: '#contact' },
];

export default function Sidebar() {
  const [activeId, setActiveId] = useState('');
  const { dark, toggle } = useTheme();

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
    <aside className="fixed left-0 top-0 w-[220px] h-screen overflow-y-auto z-50 bg-surface border-r border-border flex flex-col px-7 py-10">
      <NameBlock />

      <nav className="flex-1 mt-10 flex flex-col gap-1">
        {NAV_LINKS.map(({ label, href }) => {
          const id = href.slice(1);
          const isActive = activeId === id;
          return (
            <a
              key={href}
              href={href}
              className={
                isActive
                  ? 'flex items-center gap-2.5 px-2.5 py-2 rounded-md text-[13px] font-medium text-accent bg-accent-subtle'
                  : 'flex items-center gap-2.5 px-2.5 py-2 rounded-md text-[13px] text-secondary hover:text-primary transition-colors'
              }
            >
              <span
                className={
                  isActive
                    ? 'w-1 h-1 rounded-full bg-dot shrink-0'
                    : 'w-1 h-1 rounded-full border border-border shrink-0'
                }
              />
              {label}
            </a>
          );
        })}
      </nav>

      <div className="flex flex-col gap-3">
        <div className="flex gap-3">
          <a
            href="https://www.linkedin.com/in/harrytjahja"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] text-muted tracking-[0.06em] hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:hdtjahja@gmail.com"
            className="font-mono text-[11px] text-muted tracking-[0.06em] hover:text-accent transition-colors"
          >
            Email
          </a>
        </div>
        <button
          type="button"
          onClick={toggle}
          className="font-mono text-[11px] text-muted tracking-[0.06em] flex items-center gap-1.5 hover:text-accent transition-colors"
        >
          <span className="text-[13px]">{dark ? '☀' : '◑'}</span>
          {dark ? 'LIGHT' : 'DARK'}
        </button>
      </div>
    </aside>
  );
}
