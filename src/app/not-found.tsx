import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-6 text-center">
      <div>
        <h1 className="text-6xl font-bold text-gray-200" style={{ fontFamily: "var(--font-display)" }}>404</h1>
        <p className="mt-4 text-gray-500">页面不存在</p>
        <Link href="/" className="mt-6 inline-flex rounded-full bg-gray-900 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800">
          返回首页
        </Link>
      </div>
    </div>
  );
}
