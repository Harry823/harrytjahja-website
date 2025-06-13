import { ExperienceContainer, HeadingCopy, MainContainer, PageCopy, ResumeButton, SubheaderCopy, SubTitleContainer, YearLabel } from "@/components/styles";
import { ABOUT_ME, EXPERIENCE_LIST } from '@/shared/constants';
import { Link, List, ListItem, Stack } from "@mui/material";

const Home = () => {
  return (
    <MainContainer spacing="72px">
      <Stack>
        <HeadingCopy variant="h1" mb="14px">Harry Tjahja</HeadingCopy>
        <SubTitleContainer>
          <SubheaderCopy variant="h3" mb="20px">Software Developer</SubheaderCopy>
          <PageCopy variant="h5">
            I build seamless, user-friendly app solutions for both web and mobile platforms
          </PageCopy>
        </SubTitleContainer>
      </Stack>
      <Stack spacing="36px" id="about-me">
        <SubheaderCopy variant="h3">
          About Me
        </SubheaderCopy>
        <Stack gap="14px">
          {ABOUT_ME.map((paragraph, id) => (
            <PageCopy variant="body1" key={id}>
              {paragraph}
            </PageCopy>
          ))}
        </Stack>
      </Stack>
      <Stack spacing="24px" id="experience">
        <SubheaderCopy variant="h3" mb="12px">
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
            <List dense disablePadding>
              {work.positionDescription.map((point, i) => (
                  <ListItem key={i}>
                    <PageCopy variant="body1">
                      {point}
                    </PageCopy>
                  </ListItem>
              ))}
            </List>
          </ExperienceContainer>
        ))}
      </Stack>
      <Stack spacing="24px" id="contact-me">
        <SubheaderCopy variant="h3">
          Get in Touch
        </SubheaderCopy>
        <PageCopy variant="h5">
          I&apos;m currently open for new opportunities!
          Feel free to reach out to me through{' '}
          <Link href="https://www.linkedin.com/in/harrytjahja" target="_blank" color="#025f5f">
            LinkedIn
          </Link>
          {' '}or{' '}
          <Link href="mailto:hdtjahja@gmail.com" color="#025f5f">
            email.
          </Link>
        </PageCopy>
        <ResumeButton
          underline="none"
          href="https://drive.google.com/file/d/1QA7Qe8Ym_btNkhf602gmjAEGaxkChkPb/view?usp=drive_link"
          target="_blank"
        >
          View Full Resume
        </ResumeButton>
      </Stack>
    </MainContainer>
  );
}

export default Home;
