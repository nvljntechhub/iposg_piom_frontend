import { createSlice } from "@reduxjs/toolkit";

export type ThemeMode = "light" | "dark";

export interface ThemeState {
  mode: ThemeMode;
}

export const INITIAL_THEME_STATE: ThemeState = {
  mode: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState: INITIAL_THEME_STATE,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setTheme: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;

export default themeSlice.reducer;
