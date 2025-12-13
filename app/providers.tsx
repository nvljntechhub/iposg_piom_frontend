"use client";

import { ThemeProvider } from "@mui/material";
import { ReactNode } from "react";
import muiTheme from "@/config/theme.config";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/lib/store";

const providers = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default providers;
