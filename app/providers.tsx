"use client";

import { ReactNode } from "react";
import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { persistor, store } from "@/lib/store";
import { darkTheme, lightTheme } from "@/lib/theme";
import { SnackbarProvider } from "notistack";

function MUIThemeProvider({ children }: { children: ReactNode }) {
  const mode = useSelector((state: any) => state.theme.mode);

  return (
    <ThemeProvider theme={mode === "dark" ? darkTheme : lightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

const providers = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MUIThemeProvider>
          <SnackbarProvider>{children}</SnackbarProvider>
        </MUIThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default providers;
