import type { Metadata } from "next";
import { BetaClient } from "@/components/beta/beta-client";
import { siteConfig, getCanonicalUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "内测安装指南",
  description: `${siteConfig.name}内测安装向导，支持 Android、iPhone 与 HarmonyOS。`,
  alternates: { canonical: getCanonicalUrl("/beta") },
  openGraph: {
    title: `${siteConfig.name} · 内测安装指南`,
    description: "选择设备，一步一步完成蓝卡内测版安装。",
    url: getCanonicalUrl("/beta"),
    images: [siteConfig.defaultOgImage],
  },
};

const IOS_URL = "https://testflight.apple.com/join/39TDzfY9";
const ANDROID_URL =
  "https://img.vindo.cn/nex-go/apks/cirvlave-v1.0.0-build1-20260414-2686de12.apk";
const HARMONY_INVITE_URL = process.env.NEXT_PUBLIC_HARMONY_BETA_URL;

export default function BetaPage() {
  return (
    <BetaClient
      iosInviteUrl={IOS_URL}
      androidDownloadUrl={ANDROID_URL}
      harmonyInviteUrl={HARMONY_INVITE_URL}
    />
  );
}
