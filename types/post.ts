export interface Post {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  postType: "full" | "external";
  author?: {
    name: string;
    image?: {
      asset: {
        _ref: string;
        _type: string;
      };
    };
  };
  categories?: string[];
  publishedAt: string;
  mainImage?: string;
  redirectUrl?: string;
}
