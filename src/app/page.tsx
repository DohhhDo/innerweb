import Link from "next/link";
import { downloadConfig } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* ===== HERO: fullscreen video background ===== */}
      <section className="video-placeholder relative flex min-h-screen items-end">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[var(--background)]" />

        {/* Video placeholder indicator */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/5">
            <svg width={32} height={32} viewBox="0 0 24 24" fill="white" fillOpacity={0.3}>
              <polygon points="5,3 19,12 5,21" />
            </svg>
          </div>
        </div>

        {/* Hero content — left aligned */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-8 pb-28">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero-title.png"
            alt="属于你的活动频道"
            className="animate-fade-up h-12 object-contain md:h-16"
          />
          <p className="animate-fade-up delay-200 mt-4 text-xl text-text-secondary md:text-2xl">
            大学生的生活社区
          </p>
          <p className="animate-fade-up delay-300 mt-6 max-w-md text-sm leading-relaxed text-text-tertiary md:text-base">
            校园墙、表白墙、搭子广场 — 在蓝卡找到属于你的校园圈子
          </p>
          <div className="animate-fade-up delay-400 mt-10 flex items-center gap-4">
            <a
              href={downloadConfig.iosUrl}
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition hover:bg-white/90"
            >
              <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              App Store
            </a>
            <a
              href={downloadConfig.apkUrl}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.523 15.34l1.552 2.687a.5.5 0 1 1-.867.5l-1.57-2.72A8.46 8.46 0 0 1 12 16.69a8.46 8.46 0 0 1-4.638-.883l-1.57 2.72a.5.5 0 1 1-.866-.5l1.551-2.687C3.75 13.873 2.13 11.245 2 8.31h20c-.13 2.935-1.75 5.563-4.477 7.03zM7.5 11.31a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm9 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
              </svg>
              Android
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-up delay-500">
          <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 pt-2">
            <div className="h-2 w-0.5 animate-bounce rounded-full bg-white/40" />
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <h2
            className="text-3xl font-bold tracking-tight md:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            加入蓝卡
          </h2>
          <p className="mt-3 text-text-tertiary">
            下载 App，开启你的校园社区生活
          </p>
          <div className="mt-8">
            <Link
              href="/download"
              className="inline-flex rounded-full border border-white/20 px-8 py-3.5 text-sm font-medium text-text-secondary transition hover:border-white/40 hover:text-text-primary"
            >
              立即下载
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
