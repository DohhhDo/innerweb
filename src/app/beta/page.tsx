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

const IOS_URL = "https://testflight.apple.com/join/VHvnAXQx";
const ANDROID_URL =
  "https://media.circlave.com/circlave/%E8%93%9D%E5%8D%A1-v1.0.0%2B16-production-20260820.apk";
const HARMONY_INVITE_URL =
  "https://appgallery.huawei.com/link/invite-test-wap?taskId=6e0de69739477ea4f0610bcea7c34dac&invitationCode=7NVaCryQjg0";

export default function BetaPage() {
  return (
    <BetaClient
      iosInviteUrl={IOS_URL}
      androidDownloadUrl={ANDROID_URL}
      harmonyInviteUrl={HARMONY_INVITE_URL}
    />
  );
}
