const siteUrl: string = process.env.NEXT_PUBLIC_SITE_URL || "";
const siteName: string | undefined = process.env.NEXT_PUBLIC_SITE_NAME;
const appName: string =
  process.env.NEXT_PUBLIC_APP_NAME || "tmp-nextjs-typescript";
const appVersion: string = process.env.NEXT_PUBLIC_APP_VERSION || "1.0.0";
const runningLocal = process.env.NODE_ENV !== "production";

export const IsServerSide = typeof window === "undefined";

export const AppConfig = {
  host: siteUrl?.replace(/https:\/\//, ""),
  siteUrl,
  siteName,
  appVersion,
  appName,
  metaAlt: siteName,
  metaTitle: runningLocal
    ? `Local | Version ${appVersion}`
    : `${siteName} | Lorem ipsum dolor here.`,
  metaDescription: `${siteName} is the lorem ipsum dolor amet sample description here.`,
  keywords: "",
  themeColor: "#fac50f",
  backgroundColor: "#0a0a0a",
};
