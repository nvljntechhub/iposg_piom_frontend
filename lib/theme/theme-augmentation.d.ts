import {
  Theme as MuiTheme,
  ThemeOptions as MuiThemeOptions,
  Palette as MuiPalette,
  PaletteOptions as MuiPaletteOptions,
} from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Sidebar {
    background: string;
    textColor: string;
    dividerBg: string;
    menuItemColor: string;
    menuItemColorActive: string;
    menuItemBg: string;
    menuItemBgActive: string;
    menuItemIconColor: string;
    menuItemIconColorActive: string;
    menuItemHeadingColor: string;
    boxShadow: string;
    width: string;
  }

  interface Header {
    height: string;
    background: string;
    boxShadow: string;
    textColor: string;
  }

  interface Theme extends MuiTheme {
    sidebar: Sidebar;
    header: Header;
  }

  interface ThemeOptions extends MuiThemeOptions {
    sidebar?: Sidebar;
    header?: Header;
  }
}
