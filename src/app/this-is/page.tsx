"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function ThisIsPage() {
  const rootRef = useScrollReveal();

  return (
    <div ref={rootRef} className="thisis-root">
      <style>{styles}</style>

      {/* ── tiny in-page header ── */}
      <header className="ti-nav">
        <Link href="/" className="ti-nav-back" aria-label="返回首页">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M11 18l-6-6 6-6" />
          </svg>
          <span>返回</span>
        </Link>
        <span className="ti-nav-title">这是 · 蓝卡</span>
        <Link href="/download" className="ti-nav-cta">下载</Link>
      </header>

      {/* ═════════ ACT 0 · OPEN ═════════ */}
      <section className="ti-hero">
        <div className="ti-hero-inner">
          <div className="ti-hero-text">
            <p className="ti-eyebrow rev">CIRCLAVE · 蓝卡</p>
            <h1 className="ti-h1 rev d1">
              让一个念头，<br />
              <span className="ti-cyan-bg">真的发生。</span>
            </h1>
            <p className="ti-lead rev d2">
              有想法就发出来，<br className="hide-sm" />
              会有人回应。
            </p>
            <div className="ti-hero-cta rev d3">
              <a href="#act1" className="ti-btn-primary">往下看 ↓</a>
              <Link href="/download" className="ti-btn-ghost">下载 App</Link>
            </div>
          </div>
          <div className="ti-hero-img rev d2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/showcase/act0-bubble-tall.webp" alt="一个人朝着巨大空白对话框喊话" />
          </div>
        </div>
        <div className="ti-scroll-cue">SCROLL</div>
      </section>

      {/* ═════════ ACT 1 · 有想法就能发起 ═════════ */}
      <Act
        id="act1"
        n="01"
        eyebrow="ACT ONE"
        title={<>别让想法，<br /><em>停在想想。</em></>}
        body={
          <>
            <p>
              你说「想去看那个展」——
              发出来就好。
            </p>
            <p className="dim">
              没成型也没关系，时间地点以后也能补。
              先看看有没有人响应。
            </p>
          </>
        }
        images={[
          { src: "/showcase/act1-airplane.webp", alt: "坐在半折好的纸飞机上" },
          { src: "/showcase/act1-house.webp", alt: "搬着一张半画完的房子草图" },
        ]}
        bg="#F5EFE2"
      />

      {/* ═════════ ACT 2 · 有人回应才会发生 ═════════ */}
      <Act
        id="act2"
        n="02"
        eyebrow="ACT TWO"
        title={<>有人回应，<br /><em>活动才会发生。</em></>}
        body={
          <>
            <p>
              发出来，是开始。<br className="hide-sm" />
              有人接住，才是发生。
            </p>
            <p className="dim">
              一句「我也想去」，
              就够让一件事真的开始走起来。
            </p>
          </>
        }
        images={[{ src: "/showcase/act0-megaphone.webp", alt: "对着喇叭喊出去" }]}
        bg="#29B6DA"
        invert
      />

      {/* ═════════ ACT 3 · 看的不是点赞，是有人想来 ═════════ */}
      <Act
        id="act3"
        n="03"
        eyebrow="ACT THREE"
        title={<>不是看<em>多少人点赞</em>，<br />是看<em>多少人想来</em>。</>}
        body={
          <>
            <p>
              一个想法值不值得做，
              不看路人觉得不错。
            </p>
            <p className="dim">
              看的是 ——<br />
              有人想参加、有人愿意围观、有人想搭把手，
              有人想帮你把它再想清楚一点。
            </p>
          </>
        }
        images={[
          { src: "/showcase/act3-stool.webp", alt: "一人站在凳子上向人群说话" },
          { src: "/showcase/act3-lemonade.webp", alt: "在小摊前排起的队伍" },
        ]}
        bg="#F5EFE2"
      />

      {/* ═════════ ACT 4 · 去不了现场，也能一起 ═════════ */}
      <section id="act4" className="ti-act ti-act-three" style={{ background: "#0e0e10", color: "#F5EFE2" }}>
        <div className="ti-act-head rev">
          <p className="ti-eyebrow ti-eyebrow-light">ACT FOUR</p>
          <h2 className="ti-h2">
            去不了现场，<br />
            <em>也能一起热闹。</em>
          </h2>
          <p className="ti-act-three-sub">
            好活动，不只属于到场的人。
          </p>
        </div>
        <div className="ti-three-grid">
          <ThreeCard
            label="到场"
            sub="约一约，去一趟，把它完成。"
            src="/showcase/act4-stage.webp"
            alt="跳起来站到聚光灯下"
          />
          <ThreeCard
            label="云围观"
            sub="远远看着，跟上节奏，也算同行。"
            src="/showcase/act4-couch.webp"
            alt="窝在沙发里看着发光的屏幕"
          />
          <ThreeCard
            label="聊一句"
            sub="一句回应，活动就有了温度。"
            src="/showcase/closing-bench.webp"
            alt="两人坐在长椅上聊"
          />
        </div>
      </section>

      {/* ═════════ ACT 5 · 活动会长出内容 ═════════ */}
      <Act
        id="act5"
        n="05"
        eyebrow="ACT FIVE"
        title={<>活动不是<em>一张卡片</em>。<br />它会慢慢<em>长出来。</em></>}
        body={
          <>
            <p>
              开始之前，会有人聊它。
              进行之中，会有人记。
              结束之后，会有人复盘。
            </p>
            <p className="dim">
              别人的分享，会帮你更快看懂一个活动。
              你也可能因为某句话，决定加入。
            </p>
          </>
        }
        images={[{ src: "/showcase/act5-grow.webp", alt: "从几个人到一大圈人" }]}
        bg="#F5EFE2"
        portrait
      />

      {/* ═════════ ACT 6 · 营地是遇见，不是加入 ═════════ */}
      <section className="ti-act ti-act-text" style={{ background: "#D9573A", color: "#F5EFE2" }}>
        <div className="ti-act-text-inner rev">
          <p className="ti-eyebrow ti-eyebrow-light">ACT SIX</p>
          <h2 className="ti-h2 ti-h2-big">
            在喜欢的地方，<br />
            <em>遇见 同路人。</em>
          </h2>
          <p className="ti-act-text-body">
            不用先加入谁，也没有等级。<br />
            常来这里、常发起这一类事 ——<br />
            慢慢就会发现，有些人正想做和你一样的事。
          </p>
        </div>
      </section>

      {/* ═════════ INTERACT ═════════ */}
      <ThingInput />

      {/* ═════════ CLOSING ═════════ */}
      <section className="ti-closing" style={{ background: "#F5EFE2" }}>
        <div className="ti-closing-inner">
          <div className="ti-closing-img rev">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/showcase/closing-listen.webp" alt="一个巨人弯腰倾听一个小孩说话" />
          </div>
          <div className="ti-closing-text">
            <p className="ti-eyebrow rev">CURTAIN</p>
            <h2 className="ti-h1 rev d1">
              你想做的事，<br />
              <span className="ti-cyan-bg">这里有人接你。</span>
            </h2>
            <p className="ti-lead rev d2" style={{ color: "#4a463d" }}>
              别让想法停在想想 —— 发出来试试。
            </p>
            <div className="ti-closing-cta rev d3">
              <Link href="/download" className="ti-btn-primary big">下载 App</Link>
              <Link href="/about" className="ti-btn-ghost dark">认识我们 →</Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="ti-footer">
        <span>蓝卡 Circlave</span>
        <span>© 2026 宁波拓扑森林科技</span>
      </footer>
    </div>
  );
}

/* ─────────── pieces ─────────── */

function Act({
  id,
  n,
  eyebrow,
  title,
  body,
  images,
  bg,
  invert,
  portrait,
}: {
  id?: string;
  n: string;
  eyebrow: string;
  title: React.ReactNode;
  body: React.ReactNode;
  images: { src: string; alt: string }[];
  bg: string;
  invert?: boolean;
  portrait?: boolean;
}) {
  return (
    <section
      id={id}
      className={`ti-act ${invert ? "ti-act-invert" : ""} ${
        portrait ? "ti-act-portrait" : ""
      }`}
      style={{ background: bg, color: invert ? "#F5EFE2" : "#1a1a1a" }}
    >
      <div className="ti-act-grid">
        <div className="ti-act-text-side">
          <p className={`ti-eyebrow ${invert ? "ti-eyebrow-light" : ""}`}>
            <span className="ti-act-num">{n}</span>
            {eyebrow}
          </p>
          <h2 className="ti-h2 rev">{title}</h2>
          <div className="ti-act-body rev d1">{body}</div>
        </div>
        <div
          className={`ti-act-img-side ${
            images.length === 2 ? "ti-act-img-side-two" : ""
          }`}
        >
          {images.map((img, i) => (
            <div key={i} className={`ti-img-frame rev d${i + 1}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img.src} alt={img.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ThreeCard({
  label,
  sub,
  src,
  alt,
}: {
  label: string;
  sub: string;
  src: string;
  alt: string;
}) {
  return (
    <div className="ti-three-card rev">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="ti-three-img" />
      <p className="ti-three-label">{label}</p>
      <p className="ti-three-sub">{sub}</p>
    </div>
  );
}

function NowBanner() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const t = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(t);
  }, []);
  if (!now) {
    return (
      <div className="ti-launch rev d2" suppressHydrationWarning>
        <p className="ti-launch-tag">RIGHT NOW</p>
        <p className="ti-launch-line">
          <span className="ti-launch-date">— 月 — 日 —:—</span>
          <span className="ti-launch-sep">·</span>
          <span className="ti-launch-action">访问蓝卡社区的网页</span>
        </p>
      </div>
    );
  }
  const m = now.getMonth() + 1;
  const d = now.getDate();
  const hh = String(now.getHours()).padStart(2, "0");
  const mm = String(now.getMinutes()).padStart(2, "0");
  return (
    <div className="ti-launch rev d2" suppressHydrationWarning>
      <p className="ti-launch-tag">RIGHT NOW · 此时此刻</p>
      <p className="ti-launch-line">
        <span className="ti-launch-date">{m} 月 {d} 日 {hh}:{mm}</span>
        <span className="ti-launch-sep">·</span>
        <span className="ti-launch-action">你正在访问蓝卡社区的网页</span>
      </p>
      <p className="ti-launch-foot">—— 没错，发布的就是这一刻。</p>
    </div>
  );
}

function ThingInput() {
  const [text, setText] = useState("");
  const [items, setItems] = useState<string[]>([]);
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
  }, []);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const t = text.trim();
    if (!t) return;
    setItems((p) => [t, ...p].slice(0, 8));
    setText("");
  }

  const m = now ? now.getMonth() + 1 : null;
  const d = now ? now.getDate() : null;

  return (
    <section className="ti-input-section">
      <div className="ti-input-inner">
        <p className="ti-eyebrow">RIGHT NOW · 此时此刻</p>
        <h2 className="ti-h2 ti-h2-big" suppressHydrationWarning>
          那，<span className="ti-cyan-bg-dark">
            {m ?? "—"} 月 {d ?? "—"} 号
          </span>
          <br />
          访问蓝卡的人
        </h2>
        <p className="ti-signature">—— 你</p>
        <form onSubmit={submit} className="ti-fill-form">
          <span className="ti-fill-prefix">我想</span>
          <span className="ti-fill-input-wrap">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="去那个展 / 约人爬山 / 拍一组照片"
              maxLength={36}
              className="ti-fill-input"
              aria-label="我想……"
            />
            <span className="ti-fill-underline" aria-hidden />
          </span>
          <button
            type="submit"
            className="ti-fill-btn"
            aria-label="说出来"
            disabled={!text.trim()}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </form>
        <p className="ti-input-hint">
          {items.length === 0
            ? "敲一句，回车 —— 蓝卡先记下"
            : `已经有 ${items.length} 件事在等被发起`}
        </p>
        {items.length > 0 && (
          <ul className="ti-input-list">
            {items.map((it, i) => (
              <li key={i} style={{ animationDelay: `${i * 60}ms` }}>
                <span>·</span>
                {it}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

/* scroll reveal hook */
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll(".rev");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("on");
        }),
      { threshold: 0.18 },
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);
  return ref;
}

/* ─────────── styles (scoped via class root) ─────────── */

const styles = `
.thisis-root {
  /* Type scale — 3:4 ratio (Bringhurst varied scale) */
  --fs-display: clamp(2.5rem, 7vw, 4.5rem);  /* hero h1 */
  --fs-h1:      clamp(2rem,   5.2vw, 3.4rem); /* section h2 */
  --fs-h2:      clamp(1.5rem, 3.6vw, 2.55rem);
  --fs-lead:    clamp(1.05rem, 1.6vw, 1.25rem);
  --fs-body:    clamp(0.95rem, 1.3vw, 1.05rem);
  --fs-small:   0.78rem;

  /* Mixed-script font stacks */
  --font-cjk-display: "Noto Sans SC", "DM Sans", ui-sans-serif, system-ui, "PingFang SC", "Microsoft YaHei", sans-serif;
  --font-cjk-body:    "Noto Sans SC", "DM Sans", ui-sans-serif, system-ui, "PingFang SC", "Microsoft YaHei", sans-serif;
  --font-latin-label: "DM Sans", ui-sans-serif, system-ui, sans-serif;

  font-family: var(--font-cjk-body);
  font-size: var(--fs-body);
  font-feature-settings: "halt" 1, "palt" 1;
  text-spacing-trim: trim-start;
  background: #F5EFE2;
  color: #1a1a1a;
  overflow-x: hidden;
}
.thisis-root em { font-style: normal; color: #29B6DA; }
.thisis-root .ti-act-invert em,
.thisis-root .ti-act-text em,
.thisis-root .ti-closing em { color: #F5EFE2; text-decoration: underline; text-decoration-thickness: 4px; text-underline-offset: 6px; }

.hide-sm { display: inline; }
@media (max-width: 640px) { .hide-sm { display: none; } }

/* nav */
.ti-nav {
  position: fixed; top: 0; inset-inline: 0; z-index: 50;
  display: flex; align-items: center; justify-content: space-between;
  padding: 14px 20px;
  background: rgba(245,239,226,0.86);
  backdrop-filter: blur(14px) saturate(1.1);
  border-bottom: 1px solid rgba(0,0,0,0.06);
}
.ti-nav-back { display: inline-flex; align-items: center; gap: 6px; font-size: 13px; color: #555; }
.ti-nav-back:hover { color: #000; }
.ti-nav-title { font-family: var(--font-display); font-weight: 700; font-size: 14px; letter-spacing: -0.01em; }
.ti-nav-cta {
  background: #29B6DA; color: #fff;
  padding: 6px 14px; border-radius: 999px;
  font-size: 12px; font-weight: 600;
}
.ti-nav-cta:hover { opacity: 0.9; }

/* shared text bits */
.ti-eyebrow {
  font-family: var(--font-latin-label);
  font-size: 11px; letter-spacing: 0.3em;
  text-transform: uppercase; font-weight: 600;
  color: #b08c5e;
  font-feature-settings: normal;
}
.ti-eyebrow-light { color: rgba(245,239,226,0.55); }
.ti-act-num { color: #29B6DA; margin-right: 14px; font-weight: 700; }
.ti-act-invert .ti-act-num { color: #F5EFE2; }

.ti-h1 {
  font-family: var(--font-cjk-display);
  font-weight: 700;
  font-size: var(--fs-display);
  line-height: 1.5;
  letter-spacing: 0;
  margin-top: 22px;
  text-wrap: balance;
}
.ti-h2 {
  font-family: var(--font-cjk-display);
  font-weight: 600;
  font-size: var(--fs-h1);
  line-height: 1.55;
  letter-spacing: 0;
  margin-top: 18px;
  text-wrap: balance;
}
.ti-h2-big {
  font-weight: 700;
  font-size: var(--fs-display);
  line-height: 1.5;
}
.ti-lead {
  margin-top: 28px;
  font-size: var(--fs-lead);
  line-height: 1.95;
  letter-spacing: 0.015em;
  color: #4a463d;
  max-width: 32rem;
}
.ti-cyan-bg {
  background: linear-gradient(transparent 60%, rgba(41,182,218,0.45) 60%);
  padding: 0 4px;
}
.ti-cyan-bg-dark {
  color: #29B6DA;
  display: inline-block;
}
.ti-signature {
  margin-top: 22px;
  font-family: var(--font-display);
  font-size: clamp(1.1rem, 2.4vw, 1.6rem);
  font-style: italic;
  font-weight: 500;
  color: rgba(245,239,226,0.7);
  letter-spacing: 0.04em;
  transform: rotate(-2deg);
  display: inline-block;
}

/* HERO */
.ti-hero {
  min-height: 100svh;
  display: flex; align-items: center;
  padding: 120px 24px 80px;
  background:
    radial-gradient(ellipse 70% 50% at 80% 30%, rgba(41,182,218,0.18) 0%, transparent 60%),
    #F5EFE2;
  position: relative;
}
.ti-hero-inner {
  width: 100%; max-width: 1200px; margin: 0 auto;
  display: grid; gap: 48px;
  grid-template-columns: 1fr;
  align-items: center;
}
@media (min-width: 880px) {
  .ti-hero-inner { grid-template-columns: 1.1fr 0.9fr; gap: 80px; }
}
.ti-hero-img img {
  width: 100%; height: auto;
  max-height: 70vh; object-fit: contain;
  display: block; margin: 0 auto;
  filter: drop-shadow(0 30px 60px rgba(0,0,0,0.08));
}
.ti-hero-cta {
  margin-top: 36px; display: flex; flex-wrap: wrap; gap: 12px;
}
.ti-btn-primary {
  background: #1a1a1a; color: #F5EFE2;
  padding: 14px 26px; border-radius: 999px;
  font-size: 14px; font-weight: 600;
  transition: transform 0.2s, background 0.2s;
}
.ti-btn-primary.big { padding: 16px 32px; font-size: 15px; }
.ti-btn-primary:hover { background: #29B6DA; transform: translateY(-2px); }
.ti-btn-ghost {
  border: 1.5px solid #1a1a1a; color: #1a1a1a;
  padding: 13px 26px; border-radius: 999px;
  font-size: 14px; font-weight: 600;
}
.ti-btn-ghost.dark { border-color: rgba(0,0,0,0.18); color: #555; }
.ti-btn-ghost:hover { background: #1a1a1a; color: #F5EFE2; }
.ti-scroll-cue {
  position: absolute; bottom: 24px; left: 50%; transform: translateX(-50%);
  font-family: var(--font-display); font-size: 10px; letter-spacing: 0.4em;
  color: #b08c5e;
  animation: bob 1.6s ease-in-out infinite;
}
@keyframes bob { 0%,100% { transform: translate(-50%,0); } 50% { transform: translate(-50%,6px); } }

/* ACT */
.ti-act {
  padding: clamp(80px, 12vh, 160px) 24px;
  position: relative;
}
.ti-act-grid {
  max-width: 1200px; margin: 0 auto;
  display: grid; gap: 56px;
  grid-template-columns: 1fr;
  align-items: center;
}
@media (min-width: 880px) {
  .ti-act-grid { grid-template-columns: 1fr 1.1fr; gap: 80px; }
  .ti-act:nth-of-type(odd) .ti-act-grid {
    grid-template-columns: 1.1fr 1fr;
  }
  .ti-act:nth-of-type(odd) .ti-act-text-side { order: 2; }
  .ti-act:nth-of-type(odd) .ti-act-img-side { order: 1; }
}
.ti-act-portrait .ti-act-grid {
  grid-template-columns: 1fr;
  max-width: 760px;
  text-align: center;
}
.ti-act-portrait .ti-act-img-side { max-width: 380px; margin: 0 auto; }
.ti-act-body {
  margin-top: 28px;
  font-size: var(--fs-lead);
  line-height: 2.15;
  letter-spacing: 0.015em;
  max-width: 30rem;
}
.ti-act-body p + p { margin-top: 22px; }
.ti-act-portrait .ti-act-body { margin-left: auto; margin-right: auto; }
.ti-act-body p + p { margin-top: 18px; }
.ti-act-body .dim { color: rgba(0,0,0,0.45); font-size: 0.9em; }
.ti-act-invert .ti-act-body .dim { color: rgba(245,239,226,0.6); }
.big-quote { font-family: var(--font-display); font-size: 1.4em; font-weight: 700; line-height: 1.4; color: #29B6DA; }
.ti-act-invert .big-quote { color: #F5EFE2; text-shadow: 0 2px 0 rgba(0,0,0,0.1); }

.ti-act-img-side { position: relative; }
.ti-act-img-side-two {
  display: grid; grid-template-columns: 1fr 1fr; gap: 16px;
}
@media (max-width: 640px) {
  .ti-act-img-side-two { grid-template-columns: 1fr; }
}
.ti-img-frame img {
  width: 100%; height: auto; display: block;
  border-radius: 10px;
  filter: drop-shadow(0 20px 40px rgba(0,0,0,0.08));
}
.ti-act-invert .ti-img-frame img { filter: drop-shadow(0 20px 40px rgba(0,0,0,0.25)); }

/* ACT 4 三联 */
.ti-act-three { padding: clamp(80px, 12vh, 160px) 24px; }
.ti-act-three .ti-act-head { max-width: 1200px; margin: 0 auto; text-align: center; }
.ti-act-three .ti-act-head .ti-h2 { margin-top: 16px; }
.ti-act-three-sub {
  margin-top: 18px;
  font-size: clamp(0.95rem, 1.5vw, 1.05rem);
  color: rgba(245,239,226,0.55);
  letter-spacing: 0.02em;
}
.ti-three-grid {
  margin: 64px auto 0;
  max-width: 1100px;
  display: grid; gap: 24px;
  grid-template-columns: 1fr;
}
@media (min-width: 720px) {
  .ti-three-grid { grid-template-columns: 1fr 1fr 1fr; gap: 32px; }
}
.ti-three-card {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.4s ease;
}
.ti-three-card:hover { transform: translateY(-6px); }
.ti-three-img {
  display: block;
  width: auto;
  height: 320px;
  max-width: 100%;
  object-fit: contain;
  margin: 0 auto 22px;
}
@media (max-width: 720px) {
  .ti-three-img { height: 260px; }
}
.ti-three-label {
  font-family: var(--font-cjk-display);
  font-weight: 600;
  font-size: 1.05rem;
  line-height: 1.4;
  letter-spacing: 0.01em;
  color: #29B6DA;
}
.ti-three-sub {
  margin-top: 10px;
  font-size: 0.86rem;
  line-height: 2.05;
  letter-spacing: 0.015em;
  color: rgba(245,239,226,0.55);
  max-width: 18rem;
  margin-left: auto; margin-right: auto;
}

/* ACT TEXT-ONLY (Act 6) */
.ti-act-text { padding: clamp(100px, 16vh, 200px) 24px; }
.ti-act-text-inner {
  max-width: 880px; margin: 0 auto; text-align: center;
}
.ti-act-text-inner .ti-h2 { margin-top: 18px; }
.ti-act-text-body {
  margin-top: 36px;
  font-size: var(--fs-lead);
  line-height: 2.15;
  letter-spacing: 0.015em;
  color: rgba(245,239,226,0.78);
}

/* INTERACT */
.ti-input-section {
  background: #1a1a1c; color: #F5EFE2;
  padding: clamp(80px, 12vh, 160px) 24px;
}
.ti-input-inner { max-width: 720px; margin: 0 auto; text-align: center; }
.ti-input-inner .ti-eyebrow { color: #29B6DA; }
/* fill-in-the-blank style */
.ti-fill-form {
  margin: 56px auto 0;
  display: flex; align-items: baseline; flex-wrap: nowrap;
  gap: clamp(10px, 2vw, 22px);
  max-width: 640px;
  justify-content: center;
  font-family: var(--font-display);
}
.ti-fill-prefix {
  font-size: clamp(1.4rem, 3.6vw, 2.2rem);
  font-weight: 700;
  color: #F5EFE2;
  letter-spacing: -0.01em;
  flex-shrink: 0;
}
.ti-fill-input-wrap {
  position: relative;
  flex: 1 1 auto;
  min-width: 0;
  display: inline-block;
}
.ti-fill-input {
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  color: #F5EFE2;
  font-family: var(--font-display);
  font-size: clamp(1.4rem, 3.6vw, 2.2rem);
  font-weight: 700;
  letter-spacing: -0.01em;
  padding: 4px 0 8px;
  caret-color: #29B6DA;
  text-align: left;
}
.ti-fill-input::placeholder {
  color: rgba(245,239,226,0.22);
  font-weight: 500;
  font-style: italic;
}
.ti-fill-underline {
  position: absolute;
  left: 0; right: 0; bottom: 0;
  height: 2px;
  background: rgba(245,239,226,0.22);
  transition: background 0.3s, height 0.3s;
}
.ti-fill-input:focus + .ti-fill-underline,
.ti-fill-input:not(:placeholder-shown) + .ti-fill-underline {
  background: #29B6DA;
  height: 3px;
}
.ti-fill-btn {
  flex-shrink: 0;
  width: clamp(46px, 6vw, 56px);
  height: clamp(46px, 6vw, 56px);
  border-radius: 50%;
  background: #29B6DA;
  color: #fff;
  border: none;
  cursor: pointer;
  display: inline-flex; align-items: center; justify-content: center;
  transition: transform 0.25s cubic-bezier(.2,.8,.2,1), background 0.2s, opacity 0.2s;
  align-self: center;
}
.ti-fill-btn:hover:not(:disabled) {
  transform: translateX(4px) scale(1.06);
  background: #1A8FB0;
}
.ti-fill-btn:disabled {
  opacity: 0.28;
  cursor: not-allowed;
  background: rgba(245,239,226,0.18);
}
.ti-input-hint {
  margin-top: 22px;
  font-size: 12px;
  color: rgba(245,239,226,0.4);
  letter-spacing: 0.04em;
}
.ti-input-list {
  margin: 28px auto 0; padding: 0; list-style: none;
  max-width: 480px; text-align: left;
}
.ti-input-list li {
  font-size: 15px; color: #F5EFE2;
  padding: 10px 0;
  border-bottom: 1px dashed rgba(245,239,226,0.15);
  display: flex; gap: 10px; align-items: baseline;
  animation: slip 0.4s cubic-bezier(.2,.8,.2,1) both;
}
.ti-input-list li span { color: #29B6DA; font-weight: 700; }
@keyframes slip { from { opacity: 0; transform: translateX(-12px); } to { opacity: 1; transform: translateX(0); } }

/* CLOSING */
.ti-closing {
  padding: clamp(80px, 14vh, 180px) 24px;
}
.ti-closing-inner {
  max-width: 1200px; margin: 0 auto;
  display: grid; gap: 56px;
  grid-template-columns: 1fr;
  align-items: center;
}
@media (min-width: 880px) {
  .ti-closing-inner { grid-template-columns: 0.9fr 1.1fr; gap: 80px; }
}
.ti-closing-img img {
  width: 100%; height: auto;
  filter: drop-shadow(0 30px 60px rgba(0,0,0,0.08));
}
.ti-closing-cta { margin-top: 24px; display: flex; flex-wrap: wrap; gap: 12px; }
.ti-launch {
  margin: 32px auto 0;
  padding: 22px 26px;
  border: 1.5px dashed rgba(245,239,226,0.28);
  border-radius: 14px;
  display: inline-block;
  background: rgba(41,182,218,0.10);
  text-align: center;
}
.ti-launch-tag {
  font-family: var(--font-display);
  font-size: 10px; letter-spacing: 0.36em;
  color: #29B6DA; font-weight: 700;
}
.ti-launch-line {
  margin-top: 10px;
  font-family: var(--font-display);
  font-size: clamp(1.05rem, 2.2vw, 1.4rem);
  font-weight: 700;
  color: #F5EFE2;
  letter-spacing: -0.01em;
  display: flex; gap: 12px; align-items: baseline; flex-wrap: wrap;
  justify-content: center;
}
.ti-launch-date { color: #29B6DA; }
.ti-launch-sep { color: rgba(245,239,226,0.3); }
.ti-launch-action { color: #F5EFE2; }
.ti-launch-foot {
  margin-top: 10px;
  font-size: 12.5px;
  color: rgba(245,239,226,0.5);
  letter-spacing: 0.02em;
}

/* footer */
.ti-footer {
  padding: 28px 24px;
  background: #1a1a1c; color: rgba(245,239,226,0.5);
  display: flex; justify-content: space-between; flex-wrap: wrap; gap: 12px;
  font-size: 12px;
}

/* reveal */
.rev { opacity: 0; transform: translateY(28px); transition: opacity 0.7s cubic-bezier(.2,.8,.2,1), transform 0.7s cubic-bezier(.2,.8,.2,1); }
.rev.on { opacity: 1; transform: translateY(0); }
.rev.d1 { transition-delay: 0.08s; }
.rev.d2 { transition-delay: 0.16s; }
.rev.d3 { transition-delay: 0.24s; }
`;
