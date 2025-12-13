import {
  Theme as MuiTheme,
  ThemeOptions as MuiThemeOptions,
  Palette as MuiPalette,
  PaletteOptions as MuiPaletteOptions,
} from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface ColorScale {
    5: string;
    10: string;
    30: string;
    50: string;
    70: string;
    100: string;
  }

  interface MainColor {
    lighter: string;
    light: string;
    main: string;
    dark: string;
  }

  // --- 2. Define Custom Top-Level Interfaces ---

  interface CustomColors {
    gradients: {
      blue1: string;
      blue2: string;
      blue3: string;
      blue4: string;
      blue5: string;
      purple1: string;
      purple3: string;
      pink1: string;
      pink2: string;
      green1: string;
      green2: string;
      black1: string;
      black2: string;
    };
    shadows: {
      success: string;
      error: string;
      primary: string;
      info: string;
      warning: string;
    };
    alpha: {
      white: ColorScale;
      trueWhite: ColorScale;
      black: ColorScale;
    };
    secondary: MainColor;
    primary: MainColor;
    success: MainColor;
    warning: MainColor;
    error: MainColor;
    info: MainColor;
  }
  // 1. Define the interfaces for your custom objects
  interface General {
    reactFrameworkColor: string;
    borderRadiusSm: string;
    borderRadius: string;
    borderRadiusLg: string;
    borderRadiusXl: string;
  }

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

  // 2. Augment the Theme interface (for usage inside components)
  interface Theme extends MuiTheme {
    colors: CustomColors;
    general: General;
    sidebar: Sidebar;
    header: Header;
  }

  // 3. Augment the ThemeOptions interface (for usage in createTheme)
  interface ThemeOptions extends MuiThemeOptions {
    colors?: CustomColors;
    general?: General;
    sidebar?: Sidebar;
    header?: Header;
  }
}

// Optional: If you need to add custom colors/variants to the palette, use this:
// declare module '@mui/material/Button' {
//   interface ButtonPropsColorOverrides {
//     myCustomColor: true; // Example
//   }
// }
