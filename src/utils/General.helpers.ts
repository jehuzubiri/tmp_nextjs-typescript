import RouterCLient from "next/router";
import { useRouter } from "next/navigation";
import { IsServerSide } from "@/constant/App.const";

export const routerPush = (
  pathname: string,
  query: Record<string, string | string[]> = {},
  shallow: boolean = true,
  scroll: boolean = true
) => {
  const RouterSSR = useRouter();

  if (IsServerSide) RouterSSR.push(pathname);
  if (!IsServerSide) {
    RouterCLient.push(
      {
        pathname,
        query,
      },
      undefined,
      {
        //@DESC shallow - true: avoids re-fetching data
        //@DESC shallow - false: re-fetch destination SSR functions
        shallow,
        scroll,
      }
    );
  }
};

export const groupDataBySameKeyVal = (arr = [], key: string): Object => {
  const _ = require("lodash");
  let finalData = {};
  try {
    _.mapValues((finalData = _.groupBy(arr, key)), (listArr = []) =>
      listArr.map((categ) => _.omit(categ, key))
    );
  } catch (error) {}
  return finalData;
};

export const limitParagraphByCount = (
  phrase: string,
  count: number
): string => {
  if (!count) return phrase;
  return phrase?.slice(0, count) + (phrase?.length > count ? "..." : "") || "-";
};
