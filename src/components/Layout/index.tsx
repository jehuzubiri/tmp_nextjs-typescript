//@DESC: this line is required to enable this file run SSR
"use client";

import { Box } from "@mui/material";
import { StrictMode, FC, ReactNode, useEffect, useState } from "react";

import { CookieTypes } from "@/constant/CookieTypes.const";
import { getCookie } from "@/utils/Serssion.helpers";

import { LayoutFooter, LayoutHeader } from "./components";
import useStyle from "./style/Layout.style";

const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  const style = useStyle({ headerHeight });

  useEffect(() => {
    const updateHeight = () =>
      setHeaderHeight(parseFloat(getCookie(CookieTypes.APP_HEADER_HEIGHT)));

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <StrictMode>
      <LayoutHeader />
      <Box component="main" sx={style.root}>
        {children}
      </Box>
      <LayoutFooter />
    </StrictMode>
  );
};

export default MainLayout;
