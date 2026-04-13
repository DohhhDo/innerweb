"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const HIDDEN_PAGES: string[] = ["/this-is"];

export function Footer() {
  const pathname = usePathname();
  const cleanPath = pathname.replace(/\/$/, "") || "/";
  if (HIDDEN_PAGES.includes(cleanPath)) return null;
  const isDark = cleanPath === "/" || cleanPath === "/about";

  return (
    <footer className={`border-t ${isDark ? "border-line" : "border-gray-100 bg-white"}`}>
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <span className={`text-lg font-bold tracking-tight ${isDark ? "" : "text-gray-900"}`} style={{ fontFamily: "var(--font-display)" }}>
              蓝卡
            </span>
            <p className={`mt-1 text-sm ${isDark ? "text-text-tertiary" : "text-gray-400"}`}>大学生的生活社区</p>
          </div>
          <div className={`flex flex-wrap gap-x-8 gap-y-2 text-sm ${isDark ? "text-text-tertiary" : "text-gray-400"}`}>
            <Link href="/community" className={`transition ${isDark ? "hover:text-text-secondary" : "hover:text-gray-600"}`}>社区</Link>
            <Link href="/about" className={`transition ${isDark ? "hover:text-text-secondary" : "hover:text-gray-600"}`}>关于我们</Link>
            <Link href="/business" className={`transition ${isDark ? "hover:text-text-secondary" : "hover:text-gray-600"}`}>企业服务</Link>
            <Link href="/download" className={`transition ${isDark ? "hover:text-text-secondary" : "hover:text-gray-600"}`}>下载</Link>
          </div>
        </div>

        <div className={`my-6 h-px ${isDark ? "bg-line" : "bg-gray-100"}`} />

        <div className={`flex flex-col items-center justify-between gap-4 text-xs md:flex-row ${isDark ? "text-text-tertiary" : "text-gray-400"}`}>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
            <span>&copy; 2026 宁波拓扑森林科技有限公司</span>
            <Link href="/privacy" className={`transition ${isDark ? "hover:text-text-secondary" : "hover:text-gray-600"}`}>隐私政策</Link>
            <Link href="/terms" className={`transition ${isDark ? "hover:text-text-secondary" : "hover:text-gray-600"}`}>用户协议</Link>
            <Link href="/minors" className={`transition ${isDark ? "hover:text-text-secondary" : "hover:text-gray-600"}`}>未成年人保护</Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
            <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" className={`transition ${isDark ? "hover:text-text-secondary" : "hover:text-gray-600"}`}>
              浙ICP备2026017983号-1
            </a>
            <a href="https://beian.mps.gov.cn/#/query/webSearch" target="_blank" rel="noopener noreferrer" className={`transition ${isDark ? "hover:text-text-secondary" : "hover:text-gray-600"}`}>
              浙公网安备33021202004201号
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
