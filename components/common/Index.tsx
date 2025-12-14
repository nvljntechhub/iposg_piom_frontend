"use client";

import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import { Button, Container, Grid, styled } from "@mui/material";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";
import { ChildrenProps } from "@/interfaces/common";
import { ReactNode } from "react";

export const StyledLoader = () => {
  return (
    <Stack spacing={2} direction="row" alignItems="center">
      <CircularProgress size={40} />
    </Stack>
  );
};

export const OutletContainer = ({ children }: ChildrenProps) => {
  const sidebarOpen = useSelector((state: RootState) => state.sidebar.open);

  return (
    <Container
      maxWidth={sidebarOpen ? "lg" : "xl"}
      sx={{
        marginTop: "100px",
        marginLeft: sidebarOpen ? "400px" : "0px",
        ...(!sidebarOpen && { padding: "0px 60px" }),
      }}
    >
      {children}
    </Container>
  );
};

export const StyledTableContainer = styled("div")(() => ({
  height: 600,
  width: "100%",
}));

export const AlignCenteredGridContainer = (props: {
  children: ReactNode;
  spacing?: number;
}) => <Grid container alignItems="center" {...props} />;

export const SpaceBetweenGridContainer = (props: { children: ReactNode }) => (
  <Grid container justifyContent="space-between" {...props} />
);

export const FlexEndGridContainer = (props: {
  children: ReactNode;
  spacing?: number;
}) => <Grid container justifyContent="flex-end" {...props} />;

export const StyledButton = (props: {
  children: ReactNode;
  onClick: () => void;
}) => <Button variant="contained" {...props} />;
