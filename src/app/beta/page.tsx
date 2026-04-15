import type { Metadata } from "next";
import QRCode from "qrcode";
import { BetaClient } from "@/components/beta/beta-client";
import { siteConfig, getCanonicalUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "内测安装指南",
  description: `${siteConfig.name}内测 — iOS 通过 TestFlight 安装，Android 下载 APK。`,
  alternates: { canonical: getCanonicalUrl("/beta") },
  openGraph: {
    title: `${siteConfig.name} · 内测安装指南`,
    description: "两步装好 — iOS / Android 内测版。",
    url: getCanonicalUrl("/beta"),
    images: [siteConfig.defaultOgImage],
  },
};

const IOS_URL = "https://testflight.apple.com/join/39TDzfY9";
const ANDROID_URL =
  "https://img.vindo.cn/nex-go/apks/cirvlave-v1.0.0-build1-20260414-2686de12.apk";

async function makeQr(url: string) {
  return QRCode.toDataURL(url, {
    width: 640,
    margin: 1,
    color: { dark: "#0B1020", light: "#FFFFFF" },
    errorCorrectionLevel: "M",
  });
}

export default async function BetaPage() {
  const pageUrl = getCanonicalUrl("/beta");
  const [iosQr, andQr, pageQr] = await Promise.all([
    makeQr(IOS_URL),
    makeQr(ANDROID_URL),
    makeQr(pageUrl),
  ]);

  return (
    <BetaClient
      iosUrl={IOS_URL}
      androidUrl={ANDROID_URL}
      iosQr={iosQr}
      androidQr={andQr}
      pageQr={pageQr}
    />
  );
}
