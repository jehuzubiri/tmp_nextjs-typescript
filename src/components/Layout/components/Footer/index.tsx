import React from "react";
import { Box } from "@mui/material";
import useStyle from "../../style/Footer.style";

const LayoutFooter: React.FC = () => {
  const style = useStyle();

  return (
    <Box component="footer" sx={style.root}>
      <p>Main Layout Footer</p>
    </Box>
  );
};

export default LayoutFooter;
