'use client';
import { Box, Link, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MainContainer = styled(Stack)({
  backgroundColor: "#ebfefe",
  minHeight: '100vh',
  padding: '64px 48px',
});

export const SubTitleContainer = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.between('sm', 'md')]: {
    maxWidth: '40%',
  },
}));

export const ExperienceContainer = styled(Stack)(({ theme }) => ({
  gap: '10px',
  [theme.breakpoints.down('md')]: {
    gap: '6px',
  },
}));

export const HeadingCopy = styled(Typography)(({ theme }) => ({
  color: '#025f5f',
  [theme.breakpoints.down('md')]: {
    fontSize: 52,
  },
}));

export const SubheaderCopy = styled(Typography)(({ theme }) => ({
  color: '#025f5f',
  [theme.breakpoints.down('md')]: {
    fontSize: 24,
  },
}));

export const PageCopy = styled(Typography)(({ theme }) => ({
  color: '#027f7f',
  [theme.breakpoints.down('md')]: {
    fontSize: '1rem',
  },
}));

export const YearLabel = styled(Typography)(({ theme }) => ({
  color: '#03b7b7',
  fontWeight: 'bold',
  [theme.breakpoints.down('md')]: {
    fontSize: 16,
  },
}));

export const ResumeButton = styled(Link)({
  color: '#025f5f',
  fontWeight: 'bold',
  float: 'left',
  width: 'fit-content',
  padding: 0,
})
