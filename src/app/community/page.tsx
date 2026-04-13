"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { WallPost } from "@/lib/types";
import { fetchWallPage } from "@/lib/api-client";

function timeAgo(iso: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "刚刚";
  if (mins < 60) return `${mins} 分钟前`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs} 小时前`;
  const days = Math.floor(hrs / 24);
  if (days < 30) return `${days} 天前`;
  const d = new Date(iso);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function PostCard({ post }: { post: WallPost }) {
  const authorName = post.isAnonymous ? "匿名用户" : post.author?.nickname ?? "用户";

  return (
    <article className="border-b border-gray-100 px-6 py-5">
      {/* Author row */}
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-sm font-medium text-gray-500">
          {post.author?.avatar_url ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={post.author.avatar_url} alt="" className="h-full w-full rounded-full object-cover" />
          ) : (
            authorName[0]
          )}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-gray-900">{authorName}</p>
          <p className="text-xs text-gray-400">{timeAgo(post.createdAt)}{post.ipLocation ? ` · ${post.ipLocation}` : ""}</p>
        </div>
        {post.primaryCategory && (
          <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-500">
            {post.primaryCategory}
          </span>
        )}
      </div>

      {/* Content */}
      <p className="mt-3 text-[15px] leading-relaxed text-gray-800 whitespace-pre-line">
        {post.content}
      </p>

      {/* Images */}
      {post.images.length > 0 && (
        <div className={`mt-3 grid gap-2 ${
          post.images.length === 1 ? "grid-cols-1" : post.images.length === 2 ? "grid-cols-2" : "grid-cols-3"
        }`}>
          {post.images.slice(0, 9).map((url, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              src={url}
              alt=""
              className={`w-full rounded-lg object-cover ${
                post.images.length === 1 ? "max-h-80" : "aspect-square"
              }`}
            />
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="mt-3 flex items-center gap-6 text-xs text-gray-400">
        <span className="flex items-center gap-1">
          <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          {post.likeCount}
        </span>
        <span className="flex items-center gap-1">
          <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          {post.commentCount}
        </span>
      </div>
    </article>
  );
}

export default function CommunityPage() {
  const [posts, setPosts] = useState<WallPost[]>([]);
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const loadPage = useCallback(async (p: number) => {
    const isFirst = p === 1;
    if (isFirst) setLoading(true);
    else setLoadingMore(true);
    try {
      const result = await fetchWallPage(p);
      setPosts((prev) => (isFirst ? result.posts : [...prev, ...result.posts]));
      setHasNext(result.hasNext);
      setPage(p);
    } catch {
      // silent
    } finally {
      if (isFirst) setLoading(false);
      else setLoadingMore(false);
    }
  }, []);

  useEffect(() => { loadPage(1); }, [loadPage]);

  // Infinite scroll
  useEffect(() => {
    if (!hasNext || loadingMore) return;
    const el = sentinelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) loadPage(page + 1); },
      { rootMargin: "200px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [hasNext, loadingMore, page, loadPage]);

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="mx-auto max-w-2xl">
        {/* Page header */}
        <div className="border-b border-gray-100 px-6 py-8">
          <h1 className="text-2xl font-bold text-gray-900">社区</h1>
          <p className="mt-1 text-sm text-gray-400">来自全国高校的真实校园动态</p>
        </div>

        {/* Posts */}
        {loading ? (
          <div className="py-20 text-center text-sm text-gray-400">加载中…</div>
        ) : posts.length === 0 ? (
          <div className="py-20 text-center text-sm text-gray-400">暂无内容</div>
        ) : (
          <>
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
            <div ref={sentinelRef} />
            {loadingMore && (
              <div className="py-6 text-center text-sm text-gray-400">加载中…</div>
            )}
            {!hasNext && posts.length > 0 && (
              <div className="py-8 text-center text-xs text-gray-300">没有更多了</div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
