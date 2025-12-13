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
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { toggleTheme } from "@/lib/features/ui/themeSlice";

export default function Header() {
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.theme.mode);
  return (
    <HeaderWrapper>
      <AppBar position="static">
        <Toolbar>
          <SidenavButton />
          <HeaderTitle>IPOSG</HeaderTitle>
          <FormControlLabel
            control={
              <StyledThemeToggle
                checked={mode === "dark"}
                onClick={() => dispatch(toggleTheme())}
              />
            }
            label={mode === "dark" ? "Dark" : "Light"}
          />
        </Toolbar>
      </AppBar>
    </HeaderWrapper>
  );
}
