"use client";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import FormControlLabel from "@mui/material/FormControlLabel";
import {
  HeaderTitle,
  HeaderWrapper,
  SidenavButton,
  StyledThemeToggle,
} from "../Header.style";

export default function Header() {
  return (
    <HeaderWrapper>
      <AppBar position="static">
        <Toolbar>
          <SidenavButton />
          <HeaderTitle>IPOSG</HeaderTitle>
          <FormControlLabel
            control={<StyledThemeToggle defaultChecked />}
            label="Light"
          />
        </Toolbar>
      </AppBar>
    </HeaderWrapper>
  );
}
