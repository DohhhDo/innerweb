"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "首页", href: "/" },
  { label: "社区", href: "/community" },
  { label: "关于我们", href: "/about" },
  { label: "企业服务", href: "/business" },
];

const DARK_PAGES: string[] = ["/", "/about"];
// /beta renders a white page; navbar already defaults to white here.
const HIDDEN_PAGES: string[] = ["/this-is"];

export function Navbar() {
  const pathname = usePathname();
  const cleanPath = pathname.replace(/\/$/, "") || "/";
  if (HIDDEN_PAGES.includes(cleanPath)) return null;
  const isDark = DARK_PAGES.includes(cleanPath);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 ${
        isDark ? "" : "border-b border-black/5 bg-white"
      }`}
    >
      <nav className="flex h-20 items-center px-16">
        {/* Logo — flush left */}
        <Link href="/" className="mr-auto flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/app-icon.png" alt="" className="h-8 w-8 rounded-lg" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-text.png"
            alt="蓝卡校园社区"
            className={`h-5 object-contain ${isDark ? "" : "invert"}`}
          />
        </Link>

        {/* Nav links + download — flush right */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-5 py-2 text-[15px] font-semibold transition-colors ${
                  isDark
                    ? isActive
                      ? "text-text-primary"
                      : "text-text-tertiary hover:text-text-secondary"
                    : isActive
                      ? "text-gray-900"
                      : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/this-is"
            className={`ml-5 rounded-full px-5 py-2 text-[15px] font-semibold transition ${
              isDark
                ? "bg-brand text-white hover:bg-[var(--brand-strong)]"
                : "bg-[#29B6DA] text-white hover:opacity-90"
            }`}
          >
            这是蓝卡
          </Link>
          <Link
            href="/download"
            className={`ml-3 rounded-full border px-6 py-2 text-[15px] font-semibold transition ${
              isDark
                ? "border-white/20 text-text-secondary hover:border-white/40 hover:text-text-primary"
                : "border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-700"
            }`}
          >
            下载 App
          </Link>
        </div>
      </nav>
    </header>
  );
}
