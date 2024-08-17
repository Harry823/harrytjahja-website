import { HeadingCopy, MainContainer, PageCopy, SubheaderCopy, YearLabel } from "@/components/styles";

const Home = () => {
  return (
    <MainContainer>
      <HeadingCopy variant="h1" margin="26px 0 8px">Harry Tjahja</HeadingCopy>
      <SubheaderCopy variant="h3" mb="16px">Frontend Software Engineer</SubheaderCopy>
      <PageCopy variant="h5" mb="54px">
        I build responsive web apps and cross-platform mobile applications
        with engaging user experience.
      </PageCopy>
      <SubheaderCopy variant="h3" margin="24px 0">
        About Me
      </SubheaderCopy>
      <PageCopy variant="body1" mb="24px">
        I&apos;m a software engineer with years of experience in front-end development.
        I&apos;ve worked with product designers and other developers to deliver quality apps used by thousands of users.
        <br/>
        <br/>
        My skills lie in building responsive and user-friendly web applications using React.js.
        I also have extensive experience building cross-platform mobile application with React Native.
        <br/>
        <br/>
        I&apos;m also open to explore other opportunities when given.
        I&apos;m a quick learner, and I believe my educational background can help me branch out to new
        technology tools in a timely manner.
      </PageCopy>
      <SubheaderCopy variant="h3" margin="24px 0">
        Experience
      </SubheaderCopy>
      <YearLabel variant="h6">
        2022 - 2024
      </YearLabel>
      <SubheaderCopy variant="h3" margin="0 0 16px">
        Software Developer - Yeti LLC
      </SubheaderCopy>
      <PageCopy variant="body1" mb="24px">
        - Collaborated with other developers using Agile and Scrum techniques to deliver quality software.
        - Built user-friendly, responsive web application through integrated QA process and designer feedback.
        - Deployed and maintained production level apps with thousands of users using React.js.
        - Improved project management by building an automated progress tracking app using Jira’s API.
        - Implemented admin portal that processes hundreds of user-submitted data with Hygraph CMS.
      </PageCopy>
      <YearLabel variant="h6">
        2020 - 2021
      </YearLabel>
      <SubheaderCopy variant="h3" margin="0 0 16px">
        Junior Software Engineer - Speckle
      </SubheaderCopy>
      <PageCopy variant="body1" mb="24px">
        - Collaborated in a fast paced startup using Agile methods to develop a mobile app for public speaking.
        - Built UX components with client-server API integration using Typescript and React Native.
        - Translated design prototypes into a functional cross-platform mobile app.
        - Deployed biweekly staging updates and conducted user testing focusing on bugs and feature feedback.
      </PageCopy>
    </MainContainer>
  );
}

export default Home;
