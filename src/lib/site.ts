const DEFAULT_SITE_URL = "https://www.circlave.com";

export const siteConfig = {
  name: "蓝卡",
  slogan: "大学生的生活社区",
  description: "蓝卡 — 大学生的生活社区",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL,
  apiBaseUrl:
    process.env.NEXT_PUBLIC_API_BASE_URL ?? "https://auv.circlave.com/api/v1",
  defaultOgImage:
    process.env.NEXT_PUBLIC_DEFAULT_OG_IMAGE ?? "/og-default.svg",
  analyticsId: process.env.NEXT_PUBLIC_ANALYTICS_ID,
};

export const downloadConfig = {
  iosUrl:
    process.env.NEXT_PUBLIC_IOS_DOWNLOAD_URL ??
    "https://apps.apple.com/app/id0000000000",
  apkUrl:
    process.env.NEXT_PUBLIC_APK_DOWNLOAD_URL ??
    "https://download.example.com/lanka.apk",
};

export function getCanonicalUrl(path = "/") {
  return new URL(path, siteConfig.siteUrl).toString();
}
