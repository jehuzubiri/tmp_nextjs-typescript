import { useTheme, useMediaQuery } from "@mui/material";
import { MergedThemeOptions } from "@/models/Theme.model";
import { TheAnyTheme } from "@/models/General.model";
import mediaQuery from "@/theme/MediaQuery";
import useHeaderScrollHook from "../hooks/HeaderScroll.hook";

const useStyle = (): TheAnyTheme => {
  const { scrolled } = useHeaderScrollHook();
  const theme: MergedThemeOptions = useTheme();

  const { TABLET: TABLET_above } = mediaQuery("up");
  const { MOBILE: MOBILE_below } = mediaQuery("down");
  const hideMenus = useMediaQuery(MOBILE_below);

  return {
    hideMenus,
    root: {
      ...theme?.cxFlexBox?.rowCenterBetween,
      border: `1px solid ${scrolled ? "green" : "red"}`,
      padding: "0.75rem 0",
      width: "100%",
      left: 0,
      paddingRight: "unset !important",
      "--Paper-shadow": "unset !important",
      "--Paper-overlay": "unset !important",
      [TABLET_above]: {
        padding: "1.5rem 0",
      },
    },
  };
};

export default useStyle;
