"use client";

import { useEffect, useRef } from "react";

const TIMELINE = [
  { date: "03.28", title: "象山团建", desc: "全员赴象山开展团队建设，户外协作中磨合默契" },
  { date: "03.21", title: "安全培训", desc: "外部专家授课，强化数据安全与用户隐私保护意识" },
  { date: "03.14", title: "App 试运行", desc: "蓝卡在浙江多所高校开启内测，收集首批真实用户反馈" },
  { date: "03.07", title: "产品战略会", desc: "确立校园墙、表白墙、搭子广场三大核心模块" },
  { date: "03.05", title: "公司成立", desc: "宁波拓扑森林科技有限公司完成工商注册" },
];

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.15 },
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function AboutPage() {
  const containerRef = useScrollReveal();

  return (
    <div ref={containerRef}>
      {/* ── HERO: Dark immersive ── */}
      <section className="about-hero flex min-h-screen items-end">
        <div className="relative z-10 mx-auto w-full max-w-6xl px-8 pb-24 pt-40">
          <div className="animate-fade-up flex items-end gap-4 mb-14">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/company-logo.png" alt="拓扑森林" className="h-12 w-12 invert" />
            <span className="text-2xl font-bold leading-none tracking-tight text-white/70" style={{ fontFamily: "var(--font-display)" }}>宁波拓扑森林科技有限公司</span>
          </div>
          <h1
            className="animate-fade-up delay-100 max-w-3xl text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            让大学生活<br /><span className="text-gradient">多一种可能</span>
          </h1>
          <p className="animate-fade-up delay-200 mt-8 max-w-lg text-base leading-[1.9] text-white/50">
            宁波拓扑森林科技有限公司成立于 2026 年 3 月，专注大学生校园生活领域。我们相信真实的连接来自真实的人。
          </p>
        </div>
      </section>

      {/* ── KEY FACTS: Full-width counters ── */}
      <section className="bg-[#08090c] py-20">
        <div className="reveal mx-auto grid max-w-6xl grid-cols-2 gap-y-12 px-8 md:grid-cols-4">
          {[
            { value: "2026", label: "成立年份" },
            { value: "宁波", label: "公司位置" },
            { value: "校园社区", label: "核心领域" },
            { value: "蓝卡", label: "旗下产品" },
          ].map((d) => (
            <div key={d.label}>
              <p
                className="text-3xl font-bold text-white md:text-4xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {d.value}
              </p>
              <p className="mt-2 text-sm text-white/30">{d.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── MISSION: White section with breathing room ── */}
      <section className="bg-white py-28">
        <div className="reveal mx-auto max-w-6xl px-8">
          <div className="md:flex md:gap-20">
            <div className="shrink-0">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-gray-400">我们的使命</p>
              <h2
                className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                我们在做<br />什么
              </h2>
            </div>
            <p className="mt-8 max-w-xl text-base leading-[2] text-gray-500 md:mt-3">
              蓝卡通过校园认证体系，为大学生构建一个安全、有温度的生活社区。校园墙记录日常，表白墙传递心意，搭子广场让兴趣相投的人相遇。我们不追求无意义的规模扩张，只想把每一个功能做到大学生真正需要。
            </p>
          </div>
        </div>
      </section>

      {/* ── VALUES: Dark section ── */}
      <section className="bg-[#08090c] py-28">
        <div className="mx-auto max-w-6xl px-8">
          <div className="reveal">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/30">核心价值观</p>
            <h2
              className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              我们在意的事
            </h2>
          </div>
          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-white/[0.06] md:grid-cols-2">
            {[
              ["用户至上", "倾听每一位用户的真实声音，以需求驱动产品演进。"],
              ["真实可信", "校园认证保障内容来源。匿名表达也要有底线。"],
              ["安全合规", "用户数据安全是不可协商的底线。对每一份数据负责。"],
              ["保持克制", "不做过度设计，不追逐无意义的增长指标。"],
            ].map(([title, desc], i) => (
              <div
                key={title}
                className="reveal bg-[#0d0e13] p-10 md:p-12"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <p
                  className="text-5xl font-bold text-white/[0.04]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="-mt-4 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-[1.8] text-white/40">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE: White section ── */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-6xl px-8">
          <div className="reveal">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-gray-400">企业动态 · 2026</p>
            <h2
              className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              企业动态
            </h2>
          </div>

          <div className="mt-16 space-y-0">
            {TIMELINE.map((item, i) => (
              <div
                key={i}
                className="reveal group grid items-baseline border-t border-gray-100 py-8 md:grid-cols-[100px_1fr_1fr] md:gap-8"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <p
                  className="text-2xl font-bold text-gray-200 md:text-3xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.date}
                </p>
                <p className="mt-2 text-base font-semibold text-gray-900 md:mt-0">{item.title}</p>
                <p className="mt-1 text-sm leading-[1.8] text-gray-500 md:mt-0">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT: Dark closing ── */}
      <section className="bg-[#08090c] py-24">
        <div className="reveal mx-auto max-w-6xl px-8 text-center">
          <h2
            className="text-2xl font-bold tracking-tight text-white md:text-3xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            联系我们
          </h2>
          <a
            href="mailto:support@topoforest.com"
            className="mt-4 inline-block text-lg text-white/50 transition hover:text-cyan-400"
          >
            support@topoforest.com
          </a>
          <p className="mt-6 text-sm text-white/25">
            宁波市鄞州区首南街道天高巷 255 号 819
          </p>
        </div>
      </section>
    </div>
  );
}
