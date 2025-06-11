import { WorkExperience } from "./types";

export const EXPERIENCE_LIST: WorkExperience[] = [
  {
    companyPosition: 'Software Developer - Yeti LLC',
    experienceTime: '2022 - 2024',
    positionDescription: '-Integrated an internal sprint point tracking system for the company’s app,\
     integrating JIRA’s API to fetch and store project sprint data in a Render Postgres database.\
     Automated daily data retrieval with a CRON job and optimized access using Prisma ORM,\
      ensuring seamless and up-to-date project tracking.\
      -Translated responsive designed prototypes into a fully functional web app using React\
      and Material UI, leveraging Zustand for state management to process and store over 20,000\
      user-submitted images in Hygraph CMS.\
      -Developed an Express backend router to batch process user picture submissions and\
      update statuses via a REST API endpoint. This feature was integrated with an internal\
      admin portal, enabling client moderators to approve image submissions 5x faster,\
      significantly improving moderation efficiency.\
      -Integrated multilingual support to a non-profit donation website using Hygraph and Redux,\
      enabling seamless language rendering. Improved shareability and user experience by\
      streamlining navigation and centralizing previously dispersed content.'
  },
  {
    companyPosition: 'Junior Software Engineer - Speckle',
    experienceTime: '2020 - 2021',
    positionDescription: 'Worked closely with the designer team and the company founder in an\
    early-stage startup to develop a cross-platform mobile application for teaching public\
    speaking skills. Delivered biweekly staging updates to Google Play Store and Apple App\
    Store with a focus on bug fixes and feature enhancements.\
    Managed a team of 4 internal testers to track user feedback, validate feature functionality,\
    and ensure alignment with product requirements and the owner’s quality expectations.'
  },
];