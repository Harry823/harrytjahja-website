import { Project, WorkExperience } from "./types";

export const ABOUT_ME = [
  "Software Engineer with 3+ years of experience building web and mobile platforms from system design to production release. Shipped React/TypeScript products used by thousands of users, integrated RESTful APIs into production codebases, and built automated testing pipelines that reduced QA overhead by 30%.",
  "I approach engineering problems by deeply understanding customer needs, weighing technical tradeoffs, and pushing for the right solution at the right time. I collaborate closely with Product, Design, and Support to resolve ambiguity and ship reliable, maintainable software."
];

export const EXPERIENCE_LIST: WorkExperience[] = [
  {
    company: 'SF Bay Area Builders',
    role: 'Hackathon Conference Volunteer',
    experienceTime: 'Jul 2025 – Jan 2026',
    positionDescription: [
      'Facilitated check-in for 110+ attendees at a tech-focused monthly conference, ensuring registration and dev environment setup for each hackathon participant.',
      'Built an LLM-powered Next.js web app with 2 developers, integrating market-analysis APIs to generate investment recommendations from voice input with confidence scores and cited sources.',
      'Optimized the code review workflow with CodeRabbit AI, streamlining collaboration and earning an award for best use of the platform.',
    ],
  },
  {
    company: 'Yeti LLC',
    role: 'Junior Software Developer',
    experienceTime: 'Mar 2022 – May 2024',
    positionDescription: [
      'Owned end-to-end development of an admin portal that optimized user image moderation by 5× for a non-profit online photo album, driving the platform to 21,274 unique photos and a Guinness World Record.',
      'Designed an automated sprint point tracking system improving project managers\' workflow efficiency by 50%, connecting JIRA\'s API to a Postgres database via Prisma ORM with daily CRON-based ingestion.',
      'Developed a React sweepstakes web app for a wine company, attracting 2,000+ new users with customized Material UI components built for reuse across future campaigns.',
      'Reduced QA overhead by 30% by architecting automated testing pipelines using GitHub Actions, refactoring unit and integration tests in Jest to enforce continuous delivery standards.',
    ],
  },
  {
    company: 'Speckle Corp',
    role: 'Associate Front End Software Engineer',
    experienceTime: 'Aug 2020 – Sep 2021',
    positionDescription: [
      'Led requirements gathering and product direction with stakeholders to deliver a cross-platform mobile app for teaching public speaking skills using React Native, shipping biweekly updates to the Google Play Store and Apple App Store.',
      'Managed a team of 4 internal testers to track user feedback, validate feature functionality, and ensure alignment with product requirements and quality expectations.',
    ],
  },
];

export const PROJECT_LIST: Project[] = [
  {
    projectName: 'AI News Curator',
    experienceTime: 'Aug – Oct 2025',
    projectDescription: 'A React Native app powered by Google Gemini AI to generate personalized news feeds. Integrated and validated API endpoints via Postman, using the Gemini LLM to rank and surface articles by user preference.',
    tags: ['React Native', 'Google Gemini', 'Postman', 'REST API'],
  },
  {
    projectName: 'FinPal – Stock Portfolio Financial Advisor',
    experienceTime: 'Jul 2025',
    projectDescription: 'LLM-powered Next.js web app built at a hackathon that delivers investment advice from voice-inputted prompts. Integrated market-analysis APIs to generate clear recommendations with confidence scores, rationale, and cited sources. Awarded best use of CodeRabbit AI.',
    tags: ['Next.js', 'TypeScript', 'LLM', 'Voice API', 'CodeRabbit AI'],
  },
];

export const SKILLS_LIST = [
  { category: 'Languages',    items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'C++'] },
  { category: 'Frontend',     items: ['React', 'React Native', 'Next.js', 'Tailwind CSS', 'Redux', 'HTML', 'CSS', 'Material UI'] },
  { category: 'Backend',      items: ['Node.js', 'Express', 'REST APIs', 'CRON Jobs'] },
  { category: 'Testing & CI', items: ['Jest', 'GitHub Actions', 'CodeRabbit AI'] },
  { category: 'Tools',        items: ['Git', 'Postman', 'Vercel'] },
];
