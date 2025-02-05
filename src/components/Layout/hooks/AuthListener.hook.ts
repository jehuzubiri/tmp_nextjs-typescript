import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from 'next/navigation';

const useAuthListenerHook = (): null => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastPathnameRef = useRef(pathname);
  const lastSearchParamsRef = useRef(searchParams?.toString());
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const onRouteChange = (): void => {
      console.log('App has navigated to:', pathname, searchParams?.get("name"));
      //@TODO: auth listener happens here
      //--- 1. checkPendingDeposit
      //--- 2. checkSystemStatus
    };

    //@DESC: check if pathname or searchParams have changed
    const currentSearchParams = searchParams?.toString();

    if (lastPathnameRef.current !== pathname || lastSearchParamsRef.current !== currentSearchParams) {
      onRouteChange();
      //@DESC: update refs
      lastPathnameRef.current = pathname;
      lastSearchParamsRef.current = currentSearchParams;
    };

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    };

    intervalRef.current = setInterval(() => {
      onRouteChange();
    }, 6000000); //@TODO: temprary set to not load with set time interval

    //@DESC: cleanup function to clear the interval and reset refs on unmount or updates
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };

  }, [pathname, searchParams]);

  return null;
};

export default useAuthListenerHook;