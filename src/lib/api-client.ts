import type { WallPost } from "./types";

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "https://auv.circlave.com/api/v1";

function parseWallPost(r: Record<string, unknown>): WallPost {
  const author = r.author as Record<string, unknown> | null | undefined;
  const profile = author
    ? (author.profile as Record<string, unknown> | null | undefined)
    : null;
  return {
    id: Number(r.id),
    content: String(r.content ?? r.text ?? ""),
    images: Array.isArray(r.images)
      ? (r.images as unknown[])
          .map((img) =>
            typeof img === "string"
              ? img
              : String((img as Record<string, unknown>)?.url ?? ""),
          )
          .filter(Boolean)
      : [],
    author: r.is_anonymous
      ? null
      : author
        ? {
            nickname: String(
              profile?.nickname ?? author.nickname ?? author.username ?? "用户",
            ),
            avatar_url: (profile?.avatar ?? author.avatar ?? profile?.avatar_url ?? author.avatar_url)
              ? String(profile?.avatar ?? author.avatar ?? profile?.avatar_url ?? author.avatar_url)
              : undefined,
          }
        : null,
    isAnonymous: Boolean(r.is_anonymous),
    createdAt: String(r.created_at ?? r.createdAt ?? new Date().toISOString()),
    likeCount: Number(r.like_count ?? r.likeCount ?? 0),
    commentCount: Number(r.comment_count ?? r.commentCount ?? 0),
    categories: Array.isArray(r.categories)
      ? (r.categories as unknown[])
          .map((c) =>
            typeof c === "string"
              ? c
              : String((c as Record<string, unknown>)?.name ?? ""),
          )
          .filter(Boolean)
      : [],
    primaryCategory: r.primary_category
      ? String(r.primary_category)
      : undefined,
    ipLocation: r.ip_location ? String(r.ip_location) : undefined,
  };
}

export type WallPageResult = {
  posts: WallPost[];
  hasNext: boolean;
};

export async function fetchWallPage(page: number, pageSize = 20): Promise<WallPageResult> {
  const res = await fetch(
    `${API_BASE}/wall/public/?page=${page}&page_size=${pageSize}`,
    { headers: { Accept: "application/json" } },
  );

  if (!res.ok) throw new Error(`API ${res.status}`);

  const payload = await res.json();

  let records: Record<string, unknown>[];
  let hasNext = false;

  if (Array.isArray(payload)) {
    records = payload;
  } else if (payload.results && Array.isArray(payload.results)) {
    records = payload.results;
    hasNext = Boolean(payload.next);
  } else if (payload.data && Array.isArray(payload.data)) {
    records = payload.data;
    hasNext = records.length >= pageSize;
  } else {
    records = [];
  }

  return {
    posts: records.map(parseWallPost),
    hasNext,
  };
}
