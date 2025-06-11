import { ExperienceContainer, HeadingCopy, MainContainer, PageCopy, SubheaderCopy, YearLabel } from "@/components/styles";
import { EXPERIENCE_LIST } from '@/shared/constants';
import { Stack } from "@mui/material";

const Home = () => {
  return (
    <MainContainer>
      <HeadingCopy variant="h1">Harry Tjahja</HeadingCopy>
      <SubheaderCopy variant="h3">Software Developer</SubheaderCopy>
      <PageCopy variant="h5">
        I build responsive web apps and cross-platform mobile applications
        with engaging user experience.
      </PageCopy>
      <SubheaderCopy variant="h3">
        About Me
      </SubheaderCopy>
      <PageCopy variant="body1">
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
      <SubheaderCopy variant="h3">
        Experience
      </SubheaderCopy>
      {EXPERIENCE_LIST.map((work, i) => (
        <ExperienceContainer key={i}>
          <YearLabel variant="h6">
            {work.experienceTime}
          </YearLabel>
          <SubheaderCopy variant="h3">
            {work.companyPosition}
          </SubheaderCopy>
          <PageCopy variant="body1">
            {work.positionDescription}
          </PageCopy>
        </ExperienceContainer>
      ))}
    </MainContainer>
  );
}

export default Home;
