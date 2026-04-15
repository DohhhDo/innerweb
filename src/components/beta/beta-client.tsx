"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

type OS = "ios" | "android" | "harmony";

interface Props {
  iosUrl: string;
  androidUrl: string;
  iosQr: string;
  androidQr: string;
  pageQr: string;
}

function BetaInner({ iosUrl, androidUrl, iosQr, androidQr, pageQr }: Props) {
  const router = useRouter();
  const search = useSearchParams();
  const urlOs = search.get("os");
  const [os, setOs] = useState<OS>(
    urlOs === "android" ? "android" : urlOs === "harmony" ? "harmony" : "ios",
  );
  const [wechat, setWechat] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent;
    setWechat(/MicroMessenger/i.test(ua));
    if (!urlOs) {
      if (/Android/i.test(ua)) setOs("android");
      else if (/iPhone|iPad|iPod/i.test(ua)) setOs("ios");
    }
  }, [urlOs]);

  const switchTo = (next: OS) => {
    if (next === os) return;
    setOs(next);
    const params = new URLSearchParams(Array.from(search.entries()));
    params.set("os", next);
    router.replace(`/beta?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="min-h-screen bg-white text-[#0A0F1E]" style={{ fontFamily: "var(--font-sans)" }}>
      {wechat && (
        <div className="sticky top-20 z-40 border-y border-[#E6E8EC] bg-[#0A0F1E] text-white">
          <div className="mx-auto flex max-w-[720px] items-center gap-4 px-6 py-4 md:px-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={pageQr}
              alt="本页二维码"
              className="h-20 w-20 flex-none rounded-sm bg-white p-1.5"
            />
            <div className="flex-1 text-[13.5px] leading-[1.55]">
              <div className="font-semibold text-[15px]">在微信里装不了应用</div>
              <div className="mt-1 text-white/70">
                点右上角 <b className="text-white">⋯ → 在浏览器打开</b>，或长按左侧二维码识别。
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Column container — magazine width */}
      <div className="mx-auto max-w-[720px] px-6 md:px-8">

        {/* Kicker */}
        <div className="pt-36 md:pt-40">
          <div className="flex items-center gap-2 text-[13px] text-[#8A909B]">
            <span className="h-1 w-1 rounded-full bg-[#29B6DA]" />
            <span>蓝卡</span>
            <span className="text-[#CFD3DA]">/</span>
            <span>内测指南</span>
          </div>

          <h1
            className="mt-6 text-[44px] md:text-[56px] font-semibold leading-[1.08] tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            两分钟装好
          </h1>
          <p className="mt-4 max-w-[520px] text-[17px] leading-[1.65] text-[#5B6472]">
            选你的设备，按三步走 — 遇到问题在页尾的反馈群找我们。
          </p>
        </div>

        {/* Segment / tabs */}
        <div className="mt-14 flex items-center">
          <div className="relative flex border-b border-[#E6E8EC]">
            <TabBtn active={os === "ios"} onClick={() => switchTo("ios")} label="iPhone · iPad" />
            <TabBtn active={os === "android"} onClick={() => switchTo("android")} label="Android" />
            <TabBtn active={os === "harmony"} onClick={() => switchTo("harmony")} label="HarmonyOS" />
          </div>
          <span className="ml-auto hidden text-[13px] text-[#8A909B] md:inline">
            {os === "ios" ? "通过 TestFlight 安装" : os === "android" ? "下载 APK" : "鸿蒙说明"}
          </span>
        </div>

        {/* Tutorial */}
        <div key={os} className="pt-12 animate-[betaFade_220ms_ease-out]">
          {os === "ios" && <IosGuide url={iosUrl} qr={iosQr} />}
          {os === "android" && <AndroidGuide url={androidUrl} qr={androidQr} />}
          {os === "harmony" && <HarmonyGuide />}
        </div>

        {/* Rule */}
        <hr className="mt-20 border-t border-[#E6E8EC]" />

        {/* Feedback — quiet strip */}
        <section className="py-12">
          <div className="flex items-center gap-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/feedback-qr.png"
              alt="蓝卡内部测试群二维码"
              className="h-32 w-32 flex-none rounded-md object-contain bg-white"
            />
            <div className="flex-1">
              <div className="text-[13px] text-[#8A909B]">反馈群</div>
              <div className="mt-1 text-[17px] font-medium text-[#0A0F1E]">加入蓝卡内部测试群</div>
              <div className="mt-1 text-[14px] text-[#5B6472]">遇到问题、想吐槽、新功能建议，都在群里。</div>
              <div className="mt-2 text-[12px] text-[#A8AEB7]">二维码 7 天内有效，过期重新进入本页即可。</div>
            </div>
          </div>
        </section>

        <p className="pb-16 text-center text-[12px] text-[#A8AEB7]">
          感谢你成为蓝卡最早的一批体验者。
        </p>
      </div>

      <style jsx global>{`
        @keyframes betaFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

function TabBtn({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      className={`relative px-5 pb-3 pt-1 text-[15px] font-medium transition-colors ${
        active ? "text-[#0A0F1E]" : "text-[#8A909B] hover:text-[#5B6472]"
      }`}
    >
      {label}
      <span
        className={`absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[#29B6DA] transition-transform duration-200 ${
          active ? "scale-x-100" : "scale-x-0"
        }`}
        style={{ transformOrigin: "center" }}
      />
    </button>
  );
}

/* Step row: big serif-weight numeral left, content right */
function Step({ n, title, children }: { n: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[64px_1fr] gap-x-6 gap-y-0 md:grid-cols-[96px_1fr]">
      <div
        className="text-[48px] md:text-[64px] font-medium leading-none tracking-tight text-[#0A0F1E] tabular-nums"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {n}
      </div>
      <div>
        <div className="text-[22px] font-semibold leading-snug text-[#0A0F1E]">{title}</div>
        {children && <div className="mt-3 text-[15.5px] leading-[1.7] text-[#323844]">{children}</div>}
      </div>
    </div>
  );
}

function InlineCTA({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group mt-4 inline-flex items-center gap-2 border-b border-[#29B6DA] pb-0.5 text-[15.5px] font-semibold text-[#0A0F1E] transition-colors hover:text-[#29B6DA]"
    >
      {label}
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        <path d="M7 17L17 7M8 7h9v9" />
      </svg>
    </a>
  );
}

function QrAside({ qr, label }: { qr: string; label: string }) {
  return (
    <div className="mt-5 flex items-center gap-4 border-t border-[#E6E8EC] pt-5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={qr} alt="二维码" className="h-24 w-24 flex-none" />
      <div className="text-[13px] leading-[1.6] text-[#5B6472]">
        <div className="text-[#323844]">手机相机扫码 · 或浏览器打开</div>
        <div className="mt-1 font-mono text-[12.5px] text-[#8A909B]">{label}</div>
      </div>
    </div>
  );
}

function TestFlightCallout() {
  return (
    <a
      href="https://apps.apple.com/us/app/testflight/id899247664"
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl border border-[#D6E7FF] bg-gradient-to-br from-[#F4F9FF] to-[#EAF2FF] p-6 transition hover:border-[#9CC4FF] hover:from-[#EEF5FF] hover:to-[#E0EBFF]"
    >
      {/* Top row: icon + title aligned */}
      <div className="flex items-center gap-5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/testflight-icon.jpeg"
          alt="TestFlight"
          className="h-[88px] w-[88px] flex-none rounded-[20px] shadow-[0_6px_18px_rgba(31,87,184,0.22)]"
        />
        <div className="flex-1">
          <div className="text-[15px] text-[#3B5374]">iOS 用户需要先安装：</div>
          <div
            className="mt-1 text-[36px] font-bold leading-none tracking-[-0.01em] text-[#0A2A52]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            TestFlight
          </div>
        </div>
        <span className="hidden flex-none text-[#3B82C4] transition-transform group-hover:translate-x-1 md:inline">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </span>
      </div>

      <p className="mt-5 text-[17px] leading-[1.65] text-[#3B5374]">
        Apple 官方测试工具，安全合规。装好后再打开下方邀请链接。
      </p>

      <div className="mt-4 inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#0A2A52]">
        去 App Store 安装
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 17L17 7M8 7h9v9" />
        </svg>
      </div>
    </a>
  );
}

function IosGuide({ url, qr }: { url: string; qr: string }) {
  return (
    <div className="flex flex-col gap-12">
      <TestFlightCallout />

      <Step n="01" title="先装 TestFlight">
        打开 <b className="text-[#0A0F1E]">App Store</b> 搜索 <b className="text-[#0A0F1E]">TestFlight</b>，或直接点上方的「去 App Store 安装」。Apple 官方 App，免费。
      </Step>

      <Step n="02" title="打开邀请链接">
        点下方按钮直接前往，或用 Safari 打开，也可以用 iPhone 相机扫码。
        <InlineCTA href={url} label="前往 TestFlight" />
        <QrAside qr={qr} label="testflight.apple.com/join/39TDzfY9" />
      </Step>

      <Step n="03" title="接受 → 安装">
        跳到 TestFlight 后点 <b className="text-[#0A0F1E]">Accept</b>，再点 <b className="text-[#0A0F1E]">Install</b>，回桌面打开蓝卡。
      </Step>

      <Footnote items={[
        <>提示「<b>不接受新的测试人员</b>」 — 名额满了，到反馈群找我们扩容。</>,
        <>提示「<b>此 Beta 已过期</b>」 — TF 每版 90 天有效期，等新版即可。</>,
        <><b>不需要</b>去「设置 → VPN 与设备管理」信任开发者（那是企业签的流程）。</>,
        <>系统要求 iOS 14.5 及以上。</>,
      ]} />
    </div>
  );
}

function AndroidGuide({ url, qr }: { url: string; qr: string }) {
  return (
    <div className="flex flex-col gap-12">
      <Step n="01" title="浏览器下载安装包">
        点下方按钮直接下载，或用 <b className="text-[#0A0F1E]">系统浏览器</b>（Chrome / 夸克 / 自带）扫码。微信里下不了。
        <InlineCTA href={url} label="下载 APK" />
        <QrAside qr={qr} label="cirvlave-v1.0.0-build1.apk" />
      </Step>

      <Step n="02" title="允许「未知来源」">
        点安装时系统会提示，跳到设置 <b className="text-[#0A0F1E]">允许当前浏览器安装应用</b>，返回继续。
      </Step>

      <Step n="03" title="安装 → 打开">
        若提示「安全扫描 / 风险」，选 <b className="text-[#0A0F1E]">仍要安装</b>。按钮是灰的？等 5–10 秒。
      </Step>

      <Footnote items={[
        <>小米 / OPPO / vivo / 荣耀 可能再弹一次风险提示 — 继续安装即可。</>,
        <>装过旧版冲突？先卸载旧版再装；要保留数据在群里找我们。</>,
        <><b>HarmonyOS 纯血鸿蒙</b>暂不兼容 APK，见下方说明。</>,
      ]} />
    </div>
  );
}

function HarmonyGuide() {
  return (
    <div className="flex flex-col gap-10">
      <div className="rounded-2xl border border-[#CFEAF1] bg-gradient-to-br from-[#F2FAFC] to-[#E6F4F8] p-6">
        <div className="text-[15px] text-[#3F6770]">鸿蒙原生版本</div>
        <div
          className="mt-1 text-[36px] font-bold leading-none tracking-[-0.01em] text-[#0E3F4D]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          正在加速开发中
        </div>
        <p className="mt-5 text-[17px] leading-[1.65] text-[#3F6770]">
          预计 <b className="text-[#0E3F4D]">2026 年 5 月中旬</b> 开放内测，发布时会在反馈群第一时间通知。
        </p>
      </div>

      <Step n="01" title="纯血鸿蒙（HarmonyOS NEXT）">
        系统不兼容 Android APK，请等待我们发布鸿蒙原生版本，会在反馈群同步通知。
      </Step>

      <Step n="02" title="老版本鸿蒙（HarmonyOS 4 及以下）">
        兼容 Android 应用，可直接切到 <b className="text-[#0A0F1E]">Android</b> 标签页按流程下载 APK 安装。
      </Step>

      <Step n="03" title="不确定自己是哪种鸿蒙？">
        加入下方反馈群，把设备型号 + 系统版本发出来，我们帮你判断。
      </Step>

      <Footnote items={[
        <>纯血鸿蒙的判断方法：<b>设置 → 关于本机</b>，看到 HarmonyOS NEXT 即为纯血。</>,
        <>鸿蒙原生包发布后会在反馈群第一时间通知，无需另行安装 TestFlight 之类。</>,
      ]} />
    </div>
  );
}

function Footnote({ items }: { items: React.ReactNode[] }) {
  return (
    <div className="border-t border-[#E6E8EC] pt-6">
      <div className="text-[13px] text-[#8A909B]">可能遇到</div>
      <ul className="mt-4 space-y-2.5">
        {items.map((it, i) => (
          <li key={i} className="flex gap-3 text-[13.5px] leading-[1.7] text-[#5B6472]">
            <span className="flex-none text-[#A8AEB7] tabular-nums" style={{ fontFamily: "var(--font-display)" }}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function BetaClient(props: Props) {
  return (
    <Suspense fallback={null}>
      <BetaInner {...props} />
    </Suspense>
  );
}
