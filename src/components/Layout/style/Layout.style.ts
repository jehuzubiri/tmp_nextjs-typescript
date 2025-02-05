import { useTheme } from "@mui/material";
import { TheAnyTheme } from "@/models/General.model";
import { MergedThemeOptions } from "@/models/Theme.model";

const useStyle = ({ headerHeight }): TheAnyTheme => {
  const theme: MergedThemeOptions = useTheme();

  return {
    root: {
      border: `1px solid ${theme.cxColors.primary}`,
      marginTop: `${headerHeight}px`,
    },
  };
};

export default useStyle;
