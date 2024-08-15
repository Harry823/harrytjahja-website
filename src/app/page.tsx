import { HeadingCopy, MainContainer, PageCopy, SubheaderCopy } from "@/components/styles";

const Home = () => {
  return (
    <MainContainer>
      <HeadingCopy variant="h1" mb="8px">Harry Tjahja</HeadingCopy>
      <SubheaderCopy variant="h3" mb="24px">Frontend Software Engineer</SubheaderCopy>
      <PageCopy variant="body1">
        I build responsive web apps and cross-platform mobile applications
        with engaging user experience.
      </PageCopy>
    </MainContainer>
  );
}

export default Home;
