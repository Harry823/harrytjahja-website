import { HeadingCopy, MainContainer, PageCopy, SubheaderCopy, YearLabel } from "@/components/styles";
import { EXPERIENCE_LIST } from '@/shared/constants';
import { Stack } from "@mui/material";

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
      {EXPERIENCE_LIST.map((work, i) => (
        <Stack key={i}>
          <YearLabel variant="h6">
            {work.experienceTime}
          </YearLabel>
          <SubheaderCopy variant="h3" margin="0 0 16px">
            {work.companyPosition}
          </SubheaderCopy>
          <PageCopy variant="body1" mb="24px">
            {work.positionDescription}
          </PageCopy>
        </Stack>
      ))}
    </MainContainer>
  );
}

export default Home;
