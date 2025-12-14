import { createTheme, darken, lighten } from "@mui/material/styles";

const themeColors = {
  primary: "#3F7CAC", // deep blue
  secondary: "#A9A9A9", // greyish
  success: "#3FA34D", // dark green
  warning: "#E68A00", // dark orange
  error: "#C70039", // dark red
  info: "#1E90FF", // vivid blue
  black: "#121212", // near black
  white: "#EAEAEA", // light grey
};

const colors = {
  layout: {
    general: {
      bodyBg: "#2c3e50",
    },
    sidebar: {
      background: themeColors.black,
      textColor: "#343434",
      dividerBg: "#f2f5f9",
      menuItemColor: "#242E6F",
      menuItemColorActive: themeColors.primary,
      menuItemBg: themeColors.white,
      menuItemBgActive: "#f2f5f9",
      menuItemIconColor: lighten(themeColors.secondary, 0.3),
      menuItemIconColorActive: themeColors.primary,
      menuItemHeadingColor: darken(themeColors.secondary, 0.3),
    },
  },
};

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    background: {
      default: "#2c3e50",
      paper: "#34495e",
    },
  },
  sidebar: {
    background: colors.layout.sidebar.background,
    textColor: colors.layout.sidebar.textColor,
    dividerBg: colors.layout.sidebar.dividerBg,
    menuItemColor: colors.layout.sidebar.menuItemColor,
    menuItemColorActive: colors.layout.sidebar.menuItemColorActive,
    menuItemBg: colors.layout.sidebar.menuItemBg,
    menuItemBgActive: colors.layout.sidebar.menuItemBgActive,
    menuItemIconColor: colors.layout.sidebar.menuItemIconColor,
    menuItemIconColorActive: colors.layout.sidebar.menuItemIconColorActive,
    menuItemHeadingColor: colors.layout.sidebar.menuItemHeadingColor,
    boxShadow: "2px 0 2px rgba(0, 0, 0, 0.08)",
    width: "320px",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1840,
    },
  },
});

export default darkTheme;
