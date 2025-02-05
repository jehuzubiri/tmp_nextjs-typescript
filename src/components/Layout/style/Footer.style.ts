import { useTheme } from "@mui/material";
import { MergedThemeOptions } from "@/models/Theme.model";
import { TheAnyTheme } from "@/models/General.model";
import mediaQuery from "@/theme/MediaQuery";

const useStyle = (): TheAnyTheme => {
  const theme: MergedThemeOptions = useTheme();
  const { TABLET: TABLET_above } = mediaQuery("up");

  return {
    root: {
      ...theme?.cxFlexBox?.rowCenterBetween,
      border: "1px solid green",
      padding: "0.75rem 0",
      [TABLET_above]: {
        padding: "1.5rem 0",
      },
    },
  };
};

export default useStyle;
