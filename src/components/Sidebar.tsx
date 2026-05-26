'use client';
import NameBlock from './NameBlock';
import { useTheme } from './ThemeProvider';
import { NAV_LINKS } from '@/shared/constants';
import { useActiveSection } from '@/hooks/useActiveSection';

export default function Sidebar() {
  const activeId = useActiveSection(NAV_LINKS.map(({ href }) => href));
  const { dark, toggle } = useTheme();

  return (
    <>
    <aside className="hidden md:flex fixed left-0 top-0 w-[220px] xl:w-[320px] h-screen overflow-y-auto z-50 bg-surface border-r border-border flex-col px-7 py-10 xl:px-10 xl:py-14">
      <NameBlock />

      <nav className="flex-1 mt-10 flex flex-col gap-1 xl:gap-2">
        {NAV_LINKS.map(({ label, href }) => {
          const id = href.slice(1);
          const isActive = activeId === id;
          return (
            <a
              key={href}
              href={href}
              className={
                isActive
                  ? 'flex items-center px-2.5 py-2 xl:px-3 xl:py-2.5 rounded-md text-[13px] xl:text-[18px] font-medium text-accent bg-accent-subtle'
                  : 'flex items-center px-2.5 py-2 xl:px-3 xl:py-2.5 rounded-md text-[13px] xl:text-[18px] text-secondary hover:text-primary transition-colors'
              }
            >
              {label}
            </a>
          );
        })}
      </nav>

      <div className="flex flex-col gap-3 xl:gap-4">
        <div className="flex gap-3 xl:gap-4">
          <a
            href="https://www.linkedin.com/in/harrytjahja"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] xl:text-[14px] text-muted tracking-[0.06em] hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:hdtjahja@gmail.com"
            className="font-mono text-[11px] xl:text-[14px] text-muted tracking-[0.06em] hover:text-accent transition-colors"
          >
            Email
          </a>
        </div>
        <button
          type="button"
          onClick={toggle}
          className="font-mono text-[11px] xl:text-[14px] text-muted tracking-[0.06em] flex items-center gap-1.5 hover:text-accent transition-colors"
        >
          <span className="text-[13px] xl:text-[16px]">{dark ? '☀' : '◑'}</span>
          {dark ? 'LIGHT' : 'DARK'}
        </button>
      </div>
    </aside>

    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="md:hidden fixed bottom-5 right-5 z-50 flex items-center gap-1.5 px-3 py-2 rounded-md bg-surface border border-border font-mono text-[11px] text-muted tracking-[0.06em] hover:text-accent transition-colors"
    >
      <span className="text-[13px]">{dark ? '☀' : '◑'}</span>
      {dark ? 'LIGHT' : 'DARK'}
    </button>
    </>
  );
}
