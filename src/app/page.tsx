import { ABOUT_ME, EXPERIENCE_LIST, PROJECT_LIST, SKILLS_LIST } from '@/shared/constants';
import SectionHeading from '@/components/SectionHeading';
import Tag from '@/components/Tag';

const RESUME_URL = 'https://drive.google.com/file/d/1QA7Qe8Ym_btNkhf602gmjAEGaxkChkPb/view?usp=drive_link';

const Home = () => {
  return (
    <>
      {/* Intro */}
      <section id="intro" className="pb-20 border-b border-border">
        <p className="font-mono text-[11px] text-muted tracking-[0.1em] uppercase mb-5">
          Available for new opportunities
        </p>
        <h1
          className="font-semibold text-primary tracking-[-0.03em] leading-[1.1] mb-5"
          style={{ fontSize: 'clamp(40px, 5vw, 60px)' }}
        >
          Harry Tjahja
        </h1>
        <p className="text-[18px] text-secondary leading-relaxed max-w-[520px] mb-8">
          Product · Fullstack · Frontend Engineer — building seamless digital experiences
          at the intersection of design and engineering.
        </p>
        <div className="flex gap-3 flex-wrap">
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-md bg-cta text-white text-[13px] font-medium transition-opacity hover:opacity-90"
          >
            View Resume
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-md border border-border text-secondary text-[13px] transition-colors hover:border-accent hover:text-accent-text"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="pb-[72px] border-b border-border">
        <SectionHeading>About</SectionHeading>
        <div className="flex flex-col gap-4 max-w-[620px]">
          {ABOUT_ME.map((p, i) => (
            <p key={i} className="text-[15px] leading-[1.75] text-secondary">{p}</p>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="pb-[72px] border-b border-border">
        <SectionHeading>Experience</SectionHeading>
        <div className="flex flex-col gap-10">
          {EXPERIENCE_LIST.map((work, i) => (
            <div key={i} className="grid gap-x-7" style={{ gridTemplateColumns: '100px 1fr' }}>
              <span className="font-mono text-[11px] text-muted tracking-[0.04em] pt-0.5">
                {work.experienceTime}
              </span>
              <div>
                <p className="text-[15px] font-semibold text-primary">{work.role}</p>
                <p className="text-[13px] font-medium text-accent mb-3">@ {work.company}</p>
                <ul className="flex flex-col gap-2">
                  {work.positionDescription.map((point, j) => (
                    <li key={j} className="flex gap-2.5">
                      <span className="text-[10px] text-accent mt-1 shrink-0">▸</span>
                      <span className="text-[14px] leading-[1.7] text-secondary">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="pb-[72px] border-b border-border">
        <SectionHeading>Projects</SectionHeading>
        <div className="flex flex-col gap-4">
          {PROJECT_LIST.map((project, i) => (
            <div
              key={i}
              className="px-7 py-6 rounded-lg border border-border bg-surface transition-colors hover:border-accent hover:bg-surface-hover"
            >
              <div className="flex items-start justify-between mb-3">
                <p className="text-[15px] font-semibold text-primary">{project.projectName}</p>
                <span className="font-mono text-[10px] text-muted tracking-[0.04em] shrink-0 ml-4">
                  {project.experienceTime}
                </span>
              </div>
              <p className="text-[13px] leading-[1.7] text-secondary mb-4">
                {project.projectDescription}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="pb-[72px] border-b border-border">
        <SectionHeading>Skills</SectionHeading>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-5">
          {SKILLS_LIST.map((group) => (
            <div key={group.category}>
              <p className="font-mono text-[10px] tracking-[0.1em] uppercase text-accent mb-2.5">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <Tag key={item} label={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="pb-20">
        <SectionHeading>Get in Touch</SectionHeading>
        <div className="flex gap-3 flex-wrap">
          <a
            href="https://www.linkedin.com/in/harrytjahja"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-md border border-border text-secondary text-[13px] transition-colors hover:border-accent hover:text-accent-text"
          >
            LinkedIn
          </a>
          <a
            href="mailto:hdtjahja@gmail.com"
            className="px-5 py-2.5 rounded-md border border-border text-secondary text-[13px] transition-colors hover:border-accent hover:text-accent-text"
          >
            Email
          </a>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-md bg-cta text-white text-[13px] font-medium transition-opacity hover:opacity-90"
          >
            View Resume
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
