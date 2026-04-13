import type { Metadata } from "next";
import { downloadConfig } from "@/lib/site";

export const metadata: Metadata = { title: "下载" };

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="mx-auto max-w-4xl px-6 pb-20 pt-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900" style={{ fontFamily: "var(--font-display)" }}>
          下载蓝卡
        </h1>
        <p className="mt-3 text-gray-400">
          选择你的平台，开始校园社区生活
        </p>

        <div className="mx-auto mt-12 flex max-w-md flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href={downloadConfig.iosUrl}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gray-900 px-8 py-3.5 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            App Store
          </a>
          <a
            href={downloadConfig.apkUrl}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 px-8 py-3.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
          >
            <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.523 15.34l1.552 2.687a.5.5 0 1 1-.867.5l-1.57-2.72A8.46 8.46 0 0 1 12 16.69a8.46 8.46 0 0 1-4.638-.883l-1.57 2.72a.5.5 0 1 1-.866-.5l1.551-2.687C3.75 13.873 2.13 11.245 2 8.31h20c-.13 2.935-1.75 5.563-4.477 7.03zM7.5 11.31a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm9 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg>
            Android APK
          </a>
        </div>
      </div>
    </div>
  );
}
