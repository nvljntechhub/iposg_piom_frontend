import { styled, Typography } from "@mui/material";

export const Title1 = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins",
  fontWeight: 600,
  [theme.breakpoints.up("xs")]: {
    fontSize: "16px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "16px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "20px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "32px",
  },
}));

export const Title2 = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins",
  fontWeight: 500,
  color: "#4040404",
  [theme.breakpoints.up("sm")]: {
    fontSize: "12px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "16px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "20px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "20px",
  },
}));

export const PriceTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins",
  fontWeight: 500,
  color: "red",
  [theme.breakpoints.up("sm")]: {
    fontSize: "12px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "16px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "20px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "20px",
  },
}));

export const Text1 = styled(Typography)(({}) => ({
  fontFamily: "Poppins",
  color: "#343434",
  fontWeight: 400,
  fontSize: "14px",
  textAlign: "justify",
}));
