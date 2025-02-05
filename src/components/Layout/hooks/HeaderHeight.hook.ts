import { CookieTypes } from "@/constant/CookieTypes.const";
import { setCookie } from "@/utils/Serssion.helpers";
import { useEffect, RefObject } from "react";

const useHeaderHeightHook = (headerRef: RefObject<HTMLDivElement>): null => {
  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight - 0.5;
        setCookie(CookieTypes.APP_HEADER_HEIGHT, height);
      }
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(() => {
      updateHeight();
    });

    if (headerRef.current) resizeObserver.observe(headerRef.current);

    //@DESC: cleanup
    return () => {
      if (headerRef.current) resizeObserver.unobserve(headerRef.current);
    };
  }, []);

  return null;
};

export default useHeaderHeightHook;
