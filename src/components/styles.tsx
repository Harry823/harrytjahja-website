'use client';
import { Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MainContainer = styled(Stack)({
  backgroundColor: "#ebfefe",
  minHeight: '100vh',
  padding: '40px 32px',
  gap: '24px',
});

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
