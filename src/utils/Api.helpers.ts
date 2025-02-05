import { ApiMainType } from "@/models/Api.model";
import { TheAnyConst } from "@/models/General.model";
import { CookieTypes } from "@/constant/CookieTypes.const";
import { ErrorAccountTypes } from "@/constant/ErrorTypes.const";
import { AppConfig, IsServerSide } from "@/constant/App.const";
import { getCookie } from "./Serssion.helpers";

export const getCustomHeaders = (
  apiType: ApiMainType,
  defaultToken?: null | string,
  nextHeaders?: TheAnyConst
): TheAnyConst => {
  let customHeader = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "X-Timezone-Offset": String(new Date().getTimezoneOffset() * -1),
    "x-env-type": IsServerSide ? "server" : "client",
    "x-api-type": apiType,
    "x-env": process.env.NEXT_PUBLIC_ENV,
    "x-next-public-app-name": AppConfig.appName,
    "x-next-public-app-version": AppConfig.appVersion,
  };

  if (IsServerSide) {
    customHeader["Access-Control-Allow-Origin"] = "*";

    if (nextHeaders) {
      try {
        const acceptLanguage = nextHeaders.get("accept-language");
        const cookie = nextHeaders.get("cookie");
        const custom_host = nextHeaders.get("x-host");

        if (cookie) customHeader["cookie"] = cookie;
        if (custom_host) customHeader["x-host"] = custom_host;
        if (acceptLanguage) {
          customHeader["Accept-Language"] = acceptLanguage;
          customHeader["x-locale"] = acceptLanguage;
        }
      } catch (error) {}
    }
  }

  if (!IsServerSide) {
    // @DESC: set token from cookie
    const token = getCookie(CookieTypes.JWT_AUTH);
    if (token && !defaultToken)
      customHeader["Authorization"] = `Bearer ${token}`;

    // @DESC: set currency from cookie
    const currency = getCookie(CookieTypes.CURRENCY);
    if (currency) customHeader["x-currency"] = currency;

    // @DESC: set next locale from cookie
    const next_locale = getCookie(CookieTypes.NEXT_LOCALE);
    if (next_locale) {
      customHeader["Accept-Language"] = next_locale;
      customHeader["x-locale"] = next_locale;
    }
  }

  return customHeader;
};

//@TODO: handler api error when outside countries
export const handleApiError = (res: TheAnyConst) => {
  const isLoggedIn = false;
  switch (res?.status) {
    case 401:
      if (isLoggedIn) {
        //@TODO: call SIGNOUT function here...
        switch (res?.data?.error) {
          case ErrorAccountTypes.EXCLUDED_ACCOUNT:
          case ErrorAccountTypes.DEACTIVATED_ACCOUNT:
          case ErrorAccountTypes.BANNED_ACCOUNT:
          case ErrorAccountTypes.KICKED_ACCOUNT:
            const message: string = res?.data?.message;
            //@TODO: create a global error message handler
            if (message) alert(`Handle API error: ${message}`);
            break;
        }
      }
      break;
  }
};
