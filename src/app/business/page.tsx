import type { Metadata } from "next";

export const metadata: Metadata = { title: "企业服务" };

export default function BusinessPage() {
  return (
    <div className="min-h-screen bg-white pt-20">

      {/* ── Hero ── */}
      <section className="mx-auto max-w-5xl px-6 pb-20 pt-16 md:pt-24">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">Business</p>
        <h1 className="mt-4 max-w-2xl text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-gray-900" style={{ fontFamily: "var(--font-display)" }}>
          连接品牌<br />与校园生活
        </h1>
        <p className="mt-8 max-w-xl text-base leading-[1.8] text-gray-500">
          蓝卡聚集真实的大学生用户群体。我们为品牌方提供自然融入校园社区的合作方式 —— 不是硬广投放，而是成为大学生活的一部分。
        </p>
      </section>

      {/* ── Divider ── */}
      <div className="mx-auto max-w-5xl px-6"><div className="h-px bg-gray-100" /></div>

      {/* ── Services ── */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">What We Offer</p>
        <h2 className="mt-4 text-2xl font-bold tracking-tight text-gray-900" style={{ fontFamily: "var(--font-display)" }}>
          合作形式
        </h2>

        <div className="mt-14 space-y-0">
          {[
            {
              num: "01",
              title: "社区内容合作",
              desc: "品牌内容以原生帖子的形式出现在校园社区信息流中，自然触达目标受众。不打断用户体验，而是成为社区内容的一部分。",
            },
            {
              num: "02",
              title: "校园活动联合",
              desc: "与品牌方共同策划线上线下校园活动。社团联动、主题挑战、校园赛事 —— 让品牌在真实互动中建立认知。",
            },
            {
              num: "03",
              title: "定制化方案",
              desc: "根据品牌目标和预算，量身设计合作方案。从策划到执行全程对接，确保每一步都可衡量、可复盘。",
            },
          ].map((s) => (
            <div key={s.num} className="grid border-t border-gray-100 py-10 md:grid-cols-[80px_200px_1fr] md:gap-8 md:py-12">
              <p className="text-3xl font-bold text-gray-200" style={{ fontFamily: "var(--font-display)" }}>{s.num}</p>
              <h3 className="mt-3 text-lg font-semibold text-gray-900 md:mt-2">{s.title}</h3>
              <p className="mt-3 max-w-lg text-sm leading-[1.8] text-gray-500 md:mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="mx-auto max-w-5xl px-6"><div className="h-px bg-gray-100" /></div>

      {/* ── Process ── */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">Process</p>
        <h2 className="mt-4 text-2xl font-bold tracking-tight text-gray-900" style={{ fontFamily: "var(--font-display)" }}>
          合作流程
        </h2>
        <div className="mt-14 grid gap-y-8 md:grid-cols-4 md:gap-x-12">
          {[
            ["沟通需求", "了解品牌目标、预算范围与期望时间节点"],
            ["输出方案", "匹配校园资源，制定详细执行计划"],
            ["落地执行", "专人对接，全程跟进每个环节"],
            ["复盘迭代", "数据回顾与效果分析，优化下一次合作"],
          ].map(([title, desc], i) => (
            <div key={i}>
              <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-gray-400">Step {String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 text-[15px] font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm leading-[1.7] text-gray-500">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="mx-auto max-w-5xl px-6"><div className="h-px bg-gray-100" /></div>

      {/* ── Contact ── */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="md:flex md:items-start md:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">Get in Touch</p>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-gray-900" style={{ fontFamily: "var(--font-display)" }}>
              开始对话
            </h2>
            <p className="mt-4 max-w-md text-sm leading-[1.8] text-gray-500">
              如果你的品牌正在寻找触达大学生群体的方式，我们很乐意聊聊。
            </p>
          </div>
          <div className="mt-8 space-y-4 md:mt-0 md:text-right">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-gray-400">邮箱</p>
              <a href="mailto:support@topoforest.com" className="mt-1 block text-[15px] font-medium text-gray-900 transition hover:text-blue-500">
                support@topoforest.com
              </a>
            </div>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-gray-400">地址</p>
              <p className="mt-1 text-[15px] text-gray-900">
                宁波市鄞州区首南街道<br />天高巷 255 号 819
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
