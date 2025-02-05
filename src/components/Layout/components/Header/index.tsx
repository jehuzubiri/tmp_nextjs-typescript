import { FC, useRef, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AppBar } from "@mui/material";
import { IsServerSide } from "@/constant/App.const";

import useHeaderHeightHook from "../../hooks/HeaderHeight.hook";
import useAuthListenerHook from "../../hooks/AuthListener.hook";
import useStyle from "../../style/Header.style";
import { routerPush } from "@/utils/General.helpers";

const LayoutHeader: FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const style = useStyle();

  const [positionType, setPositionType] = useState<"sticky" | "fixed">(
    "sticky"
  );

  useHeaderHeightHook(headerRef);
  useAuthListenerHook();

  useEffect(() => {
    setPositionType(IsServerSide ? "sticky" : "fixed");
  }, [IsServerSide]);

  return (
    <AppBar ref={headerRef} position={positionType} sx={style.root}>
      <p>Main Layout Header</p>
      <button
        onClick={() =>
          routerPush(pathname === "samplepage" ? "/" : "samplepage", {
            id: "12",
            name: "Jehu",
          })
        }
      ></button>
    </AppBar>
  );
};

export default LayoutHeader;
