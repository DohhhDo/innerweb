export type NavItem = {
  label: string;
  href: string;
};

export type WallPost = {
  id: number;
  content: string;
  images: string[];
  author: { nickname: string; avatar_url?: string } | null;
  isAnonymous: boolean;
  createdAt: string;
  likeCount: number;
  commentCount: number;
  categories: string[];
  primaryCategory?: string;
  ipLocation?: string;
};

export type MerchProduct = {
  id: string;
  name: string;
  description: string;
  price: number;
  coverImage: string;
  images: string[];
  stock: number;
  category?: string;
  deliveryType: "download" | "code";
  sortOrder: number;
};

export type PaymentMethod = "alipay" | "wechat";

export type PaymentIntent = {
  orderId: string;
  method: PaymentMethod;
  payUrl: string;
};
