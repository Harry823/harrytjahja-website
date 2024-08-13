import Image from "next/image";
import styles from "./page.module.css";
import { Typography } from "@mui/material";
import MainContainer from "@/components/MainContainer";

const Home = () => {
  return (
    <MainContainer>
      <Typography variant="h1">Testing MUI</Typography>
    </MainContainer>
  );
}

export default Home;
