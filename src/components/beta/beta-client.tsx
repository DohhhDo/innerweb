"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  AndroidLogo,
  AppleLogo,
  AppStoreLogo,
  ArrowLeft,
  ArrowUpRight,
  CaretRight,
  CheckCircle,
  Cpu,
  DeviceMobile,
  DownloadSimple,
  LinkSimple,
  Question,
  X,
} from "@phosphor-icons/react";

type Platform = "android" | "ios" | "harmony-legacy" | "harmony-native";

interface Props {
  iosInviteUrl: string;
  androidDownloadUrl: string;
  harmonyInviteUrl?: string;
}

interface PlatformOption {
  id: Platform;
  label: string;
  note: string;
  icon: React.ElementType;
}

const PLATFORM_OPTIONS: PlatformOption[] = [
  { id: "android", label: "Android", note: "下载 APK", icon: AndroidLogo },
  { id: "ios", label: "iPhone", note: "通过 TestFlight 安装", icon: AppleLogo },
  { id: "harmony-legacy", label: "鸿蒙 5 及以前", note: "安装 Android 版", icon: DeviceMobile },
  { id: "harmony-native", label: "鸿蒙 6 及以后", note: "加入原生内测", icon: Cpu },
];

const PLATFORM_IDS = new Set<Platform>(PLATFORM_OPTIONS.map((item) => item.id));
const TESTFLIGHT_APP_URL = "https://apps.apple.com/cn/app/testflight/id899247664";
function parsePlatform(value: string | null): Platform | null {
  return value && PLATFORM_IDS.has(value as Platform) ? (value as Platform) : null;
}

function BetaInner({ iosInviteUrl, androidDownloadUrl, harmonyInviteUrl }: Props) {
  const router = useRouter();
  const search = useSearchParams();
  const initialPlatform = parsePlatform(search.get("platform"));
  const [platform, setPlatform] = useState<Platform | null>(initialPlatform);
  const [step, setStep] = useState(0);
  const [isWechat, setIsWechat] = useState(false);
  const [showBrowserHelp, setShowBrowserHelp] = useState(false);
  const [showSupport, setShowSupport] = useState(false);

  useEffect(() => {
    const detected = /MicroMessenger/i.test(navigator.userAgent);
    setIsWechat(detected);
    setShowBrowserHelp(detected);
  }, []);

  const updateUrl = (nextPlatform: Platform | null) => {
    const params = new URLSearchParams(Array.from(search.entries()));
    if (nextPlatform) params.set("platform", nextPlatform);
    else params.delete("platform");
    const query = params.toString();
    router.replace(query ? `/beta?${query}` : "/beta", { scroll: false });
  };

  const choosePlatform = (nextPlatform: Platform) => {
    setPlatform(nextPlatform);
    setStep(0);
    updateUrl(nextPlatform);
  };

  const goBack = () => {
    if (step > 0) {
      setStep((current) => current - 1);
      return;
    }
    setPlatform(null);
    updateUrl(null);
  };

  const beforeExternalAction = (nextStep?: number) => {
    if (isWechat) {
      setShowBrowserHelp(true);
      return false;
    }
    if (typeof nextStep === "number") setStep(nextStep);
    return true;
  };

  const activeOption = PLATFORM_OPTIONS.find((item) => item.id === platform);

  return (
    <div className="min-h-[100dvh] bg-[#F6F7F8] text-[#161823]">
      <main className="mx-auto flex min-h-[100dvh] w-full max-w-[560px] flex-col bg-white px-5 pb-6 sm:my-8 sm:min-h-[calc(100dvh-4rem)] sm:border sm:border-[#E8E8EA] sm:px-8">
        <header className="flex h-16 items-center justify-between border-b border-[#ECEDEF]">
          <button
            type="button"
            onClick={platform ? goBack : undefined}
            className={`flex h-10 min-w-10 items-center gap-2 text-[14px] font-medium ${
              platform ? "text-[#161823]" : "pointer-events-none text-transparent"
            }`}
            aria-hidden={!platform}
            tabIndex={platform ? 0 : -1}
          >
            <ArrowLeft size={17} weight="regular" aria-hidden="true" />
            返回
          </button>
          <div className="text-[13px] font-medium tracking-[0.08em] text-[#686B73]">蓝卡内测</div>
          <button
            type="button"
            onClick={() => setShowSupport(true)}
            className="flex h-10 min-w-10 items-center justify-end gap-1.5 text-right text-[14px] text-[#686B73]"
          >
            <Question size={17} weight="regular" aria-hidden="true" />
            帮助
          </button>
        </header>

        <div className="flex flex-1 flex-col py-8 sm:py-10">
          {platform && activeOption ? (
            <Guide
              key={platform}
              platform={platform}
              platformLabel={activeOption.label}
              step={step}
              setStep={setStep}
              iosInviteUrl={iosInviteUrl}
              androidDownloadUrl={androidDownloadUrl}
              harmonyInviteUrl={harmonyInviteUrl}
              beforeExternalAction={beforeExternalAction}
            />
          ) : (
            <PlatformPicker onChoose={choosePlatform} />
          )}
        </div>

        <div className="border-t border-[#ECEDEF] pt-4 text-center text-[12px] text-[#9B9DA4]">
          CIRCLAVE · 蓝卡
        </div>
      </main>

      {showBrowserHelp && <BrowserHelp onClose={() => setShowBrowserHelp(false)} />}
      {showSupport && <SupportPanel onClose={() => setShowSupport(false)} />}
    </div>
  );
}

function PlatformPicker({ onChoose }: { onChoose: (platform: Platform) => void }) {
  return (
    <section className="animate-[betaIn_180ms_ease-out]">
      <p className="text-[13px] font-medium text-[#00A9A6]">安装向导</p>
      <h1 className="mt-3 text-[26px] font-medium leading-tight tracking-[-0.02em]">选择你的设备</h1>
      <p className="mt-2 whitespace-nowrap text-[15px] leading-6 text-[#686B73]">选择设备，我们一步一步带你安装。</p>

      <div className="mt-8 space-y-3">
        {PLATFORM_OPTIONS.map((item) => {
          const PlatformIcon = item.icon;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onChoose(item.id)}
              className="group flex w-full items-center border border-[#E3E4E7] bg-white px-4 py-3.5 text-left transition hover:border-[#B9BCBF] hover:bg-[#FAFAFB] active:bg-[#F2F3F4]"
            >
              <span className="flex h-12 w-12 flex-none items-center justify-center bg-[#F1F2F3] text-[#30333A]">
                <PlatformIcon size={29} weight="duotone" aria-hidden="true" />
              </span>
              <span className="ml-4 min-w-0 flex-1">
                <span className="flex items-center whitespace-nowrap">
                  <span className="text-[16px] font-medium text-[#161823]">{item.label}</span>
                </span>
                <span className="mt-0.5 block whitespace-nowrap text-[13px] text-[#8A8D94]">{item.note}</span>
              </span>
              <CaretRight size={18} weight="regular" aria-hidden="true" className="text-[#A0A2A8] transition-transform group-hover:translate-x-0.5" />
            </button>
          );
        })}
      </div>

      <p className="mt-5 text-[12px] leading-5 text-[#9B9DA4]">鸿蒙版本可在“设置 → 关于本机”中查看。</p>
    </section>
  );
}

interface GuideProps {
  platform: Platform;
  platformLabel: string;
  step: number;
  setStep: (step: number) => void;
  iosInviteUrl: string;
  androidDownloadUrl: string;
  harmonyInviteUrl?: string;
  beforeExternalAction: (nextStep?: number) => boolean;
}

function Guide(props: GuideProps) {
  if (props.platform === "ios") return <IosGuide {...props} />;
  if (props.platform === "harmony-native") return <HarmonyNativeGuide {...props} />;
  return <ApkGuide {...props} legacyHarmony={props.platform === "harmony-legacy"} />;
}

function GuideFrame({
  platform,
  step,
  total,
  title,
  description,
  icon,
  children,
}: {
  platform: string;
  step: number;
  total: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-1 flex-col animate-[betaIn_180ms_ease-out]">
      <div className="flex items-center justify-between text-[12px] font-medium">
        <span className="text-[#00A9A6]">{platform}</span>
        <span className="text-[#9B9DA4]">{step + 1} / {total}</span>
      </div>
      <div className="mt-3 h-1 bg-[#EFF0F1]" aria-hidden="true">
        <div
          className="h-full bg-[#00B8B4] transition-[width] duration-200"
          style={{ width: `${((step + 1) / total) * 100}%` }}
        />
      </div>

      <div className="flex flex-1 flex-col justify-center py-8 sm:py-12">
        <div className="flex h-20 w-20 items-center justify-center bg-[#F1F2F3] text-[#24272D]" aria-hidden="true">
          {icon}
        </div>
        <h1 className="mt-7 whitespace-nowrap text-[24px] font-medium leading-tight tracking-[-0.02em]">{title}</h1>
        <p className="mt-3 whitespace-nowrap text-[12px] leading-6 text-[#686B73] min-[360px]:text-[14px]">{description}</p>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

function IosGuide({ iosInviteUrl, beforeExternalAction }: GuideProps) {
  const [showTestFlightHelp, setShowTestFlightHelp] = useState(false);

  return (
    <>
      <GuideFrame platform="iPhone" step={0} total={1} title="加入蓝卡内测" description="打开链接，接受邀请并安装。" icon={<LinkSimple size={52} weight="duotone" />}>
        <PrimaryButton onClick={() => setShowTestFlightHelp(true)} label="加入内测链接" icon={<LinkSimple size={19} weight="regular" />} />
        <p className="mt-4 text-center text-[12px] text-[#9B9DA4]">在 TestFlight 点“接受”，再点“安装”。</p>
      </GuideFrame>

      {showTestFlightHelp && (
        <Modal
          title="加入内测链接"
          description={
            <>
              加入内测链接需通过<strong className="font-medium text-[#161823]">苹果官方内测工具</strong>下载安装。
              如果这是您<strong className="font-medium text-[#161823]">第一次参加内测</strong>，
              <strong className="font-medium text-[#161823]">请先安装苹果官方内测工具</strong>。
            </>
          }
          onClose={() => setShowTestFlightHelp(false)}
        >
          <PrimaryLink
            href={TESTFLIGHT_APP_URL}
            onClick={() => beforeExternalAction()}
            label="下载苹果官方内测工具 TF"
            icon={<AppStoreLogo size={19} weight="regular" />}
          />
          <AccentLink
            href={iosInviteUrl}
            onClick={() => beforeExternalAction()}
            label="已经下载，直接加入内测"
            icon={<LinkSimple size={19} weight="regular" />}
          />
        </Modal>
      )}
    </>
  );
}

function ApkGuide({
  androidDownloadUrl,
  beforeExternalAction,
  legacyHarmony,
}: GuideProps & { legacyHarmony: boolean }) {
  const platform = legacyHarmony ? "鸿蒙 5 及以前" : "Android";

  return (
    <GuideFrame
      platform={platform}
      step={0}
      total={1}
      title={legacyHarmony ? "下载 Android 版" : "下载蓝卡"}
      description="下载后打开 APK，按提示安装。"
      icon={<DownloadSimple size={52} weight="duotone" />}
    >
      <PrimaryLink href={androidDownloadUrl} onClick={() => beforeExternalAction()} label="下载 APK" icon={<DownloadSimple size={19} weight="regular" />} />
      <p className="mt-4 text-center text-[12px] leading-5 text-[#9B9DA4]">系统询问时，允许当前浏览器安装应用。</p>
    </GuideFrame>
  );
}

function HarmonyNativeGuide({ step, setStep, harmonyInviteUrl, beforeExternalAction }: GuideProps) {
  if (step === 0) {
    return (
      <GuideFrame platform="鸿蒙 6 及以后" step={0} total={2} title="加入鸿蒙内测" description="打开邀请，加入蓝卡内测。" icon={<LinkSimple size={52} weight="duotone" />}>
        {harmonyInviteUrl ? (
          <PrimaryLink href={harmonyInviteUrl} onClick={() => beforeExternalAction(1)} label="打开内测邀请" icon={<LinkSimple size={19} weight="regular" />} />
        ) : (
          <>
            <DisabledButton label="内测链接待配置" />
            <p className="mt-4 text-center text-[12px] text-[#9B9DA4]">请点右上角“帮助”联系我们。</p>
          </>
        )}
      </GuideFrame>
    );
  }

  return (
    <GuideFrame platform="鸿蒙 6 及以后" step={1} total={2} title="完成安装" description="按页面提示下载并安装。" icon={<CheckCircle size={52} weight="duotone" />}>
      {harmonyInviteUrl && <PrimaryLink href={harmonyInviteUrl} onClick={() => beforeExternalAction()} label="返回内测页面" icon={<LinkSimple size={19} weight="regular" />} />}
      <SecondaryButton onClick={() => setStep(0)} label="上一步" />
    </GuideFrame>
  );
}

function PrimaryButton({ onClick, label, icon }: { onClick: () => void; label: string; icon?: React.ReactNode }) {
  return (
    <button type="button" onClick={onClick} className="flex min-h-[52px] w-full items-center justify-center gap-2 bg-[#161823] px-5 text-[15px] font-medium text-white transition hover:bg-[#2B2D33] active:bg-black">
      {icon}
      {label}
    </button>
  );
}

function PrimaryLink({ href, onClick, label, icon }: { href: string; onClick: () => boolean; label: string; icon?: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(event) => {
        if (!onClick()) event.preventDefault();
      }}
      className="flex min-h-[52px] w-full items-center justify-center gap-2 bg-[#161823] px-5 text-[15px] font-medium text-white transition hover:bg-[#2B2D33] active:bg-black"
    >
      {icon}
      {label}
    </a>
  );
}

function AccentLink({ href, onClick, label, icon }: { href: string; onClick: () => boolean; label: string; icon?: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(event) => {
        if (!onClick()) event.preventDefault();
      }}
      className="mt-3 flex min-h-[52px] w-full items-center justify-center gap-2 bg-[#00A9A6] px-5 text-[15px] font-medium text-white transition hover:bg-[#008F8C] active:bg-[#007D7A]"
    >
      {icon}
      {label}
    </a>
  );
}

function SecondaryButton({ onClick, label, icon }: { onClick: () => void; label: string; icon?: React.ReactNode }) {
  return (
    <button type="button" onClick={onClick} className="mt-3 flex min-h-[48px] w-full items-center justify-center gap-2 border border-[#E0E1E3] bg-white px-5 text-[14px] font-medium text-[#4E5158] transition hover:bg-[#F7F7F8]">
      {icon}
      {label}
    </button>
  );
}

function DisabledButton({ label }: { label: string }) {
  return (
    <button type="button" disabled className="flex min-h-[52px] w-full cursor-not-allowed items-center justify-center bg-[#E8E9EB] px-5 text-[15px] font-medium text-[#9B9DA4]">
      {label}
    </button>
  );
}

function BrowserHelp({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[120] bg-[#161823]/85 text-white" role="dialog" aria-modal="true" aria-labelledby="browser-help-title">
      <div className="absolute right-4 top-3 flex items-start gap-2 pt-[env(safe-area-inset-top)]">
        <div className="mt-8 border border-white/20 bg-white px-4 py-3 text-right text-[#161823] shadow-[0_8px_24px_rgba(0,0,0,0.18)]">
          <p className="text-[12px] font-normal text-[#686B73]">点击右上角菜单</p>
          <p className="mt-0.5 whitespace-nowrap text-[15px] font-medium">在浏览器打开</p>
        </div>
        <ArrowUpRight size={34} weight="regular" aria-hidden="true" className="mt-1 flex-none" />
      </div>

      <div className="flex h-full flex-col items-center justify-center px-8 text-center">
        <div className="flex h-16 w-16 items-center justify-center border border-white/15 bg-white/10">
          <DeviceMobile size={34} weight="duotone" aria-hidden="true" />
        </div>
        <h2 id="browser-help-title" className="mt-6 text-[20px] font-medium">请在浏览器打开</h2>
        <p className="mt-2 text-[13px] leading-6 text-white/65">微信内无法完成下载或加入内测</p>
      </div>

      <button
        type="button"
        onClick={onClose}
        className="absolute bottom-[max(24px,env(safe-area-inset-bottom))] left-1/2 min-h-11 -translate-x-1/2 border border-white/20 px-5 text-[13px] font-normal text-white/75 active:bg-white/10"
      >
        暂时留在微信
      </button>
    </div>
  );
}

function SupportPanel({ onClose }: { onClose: () => void }) {
  return (
    <Modal title="遇到问题？" description="加入蓝卡内测群，我们会帮你完成安装。" onClose={onClose}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/feedback-qr.png" alt="蓝卡内测群二维码" className="mx-auto h-44 w-44 border border-[#ECEDEF] bg-white p-2" />
      <p className="mt-3 text-center text-[12px] text-[#9B9DA4]">长按保存，或使用另一台设备扫码。</p>
    </Modal>
  );
}

function Modal({
  title,
  description,
  onClose,
  children,
}: {
  title: string;
  description: React.ReactNode;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/45 p-0 sm:items-center sm:p-5" role="dialog" aria-modal="true">
      <div className="w-full max-w-[420px] bg-white p-5 sm:border sm:border-[#E0E1E3]">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-[19px] font-medium text-[#161823]">{title}</h2>
            <p className="mt-2 text-[14px] leading-6 text-[#686B73]">{description}</p>
          </div>
          <button type="button" onClick={onClose} aria-label="关闭" className="flex h-9 w-9 flex-none items-center justify-center bg-[#F2F3F4] text-[#686B73]">
            <X size={17} weight="regular" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
}

export function BetaClient(props: Props) {
  return (
    <Suspense fallback={null}>
      <BetaInner {...props} />
      <style jsx global>{`
        @keyframes betaIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </Suspense>
  );
}
