'use client';

import { createTheme } from "@mui/material";
import { MergedThemeOptions } from "@/models/Theme.model"
import { customTheme } from "./Custom";

const themeOptions: MergedThemeOptions = {
  palette: {
    mode: 'dark',
  },
  breakpoints: {
    values: {
      xs: 360, // MOBILE_S
      sm: 600, // MOBILE
      md: 800, // TABLET
      lg: 1025, // LAPTOP
      xl: 1280, // DESKTOP
    },
  },
  ...customTheme,
}
const muiTheme = createTheme(themeOptions);

export default muiTheme;