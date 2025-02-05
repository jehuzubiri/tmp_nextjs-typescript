import cookie from 'js-cookie';
import { TheAnyConst } from '@/models/General.model';
import { IsServerSide } from '@/constant/App.const';

const getCookieFromBrowser = (key: string) => {
  return cookie.get(key);
};

const getCookieFromServer = (key: string, headers?: TheAnyConst) => {
  if (!headers || !headers.cookie) return undefined;
  const rawCookie = headers.cookie.split(';').find((c: string) => c.trim().startsWith(`${key}=`));
  if (!rawCookie) return undefined;
  return rawCookie.split('=')[1];
};

//@DESC exported functions starts here...
export const setCookie = (
  key: string,
  value: TheAnyConst,
  domain?: string,
  expires: number = 10,
  path: string = '/'
): void => {
  if (!IsServerSide) cookie.set(key, value, {
    expires,
    path: path,
    ...(domain
      ? {
        domain,
        sameSite: 'None',
        secure: true,
      }
      : {}),
  });
};

export const removeCookie = (key: string): void => {
  if (!IsServerSide) cookie.remove(key, {
    expires: 1
  });
};

export const getCookie = (key: string, headers?: TheAnyConst) => {
  return !IsServerSide ? getCookieFromBrowser(key) : getCookieFromServer(key, headers);
};

export const checkCookie = (key: string) => {
  return cookie.get(key) !== undefined;
};

