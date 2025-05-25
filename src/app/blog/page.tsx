import BlogClient from "@/components/BlogClient";

export const metadata = {
  title: "Blogs by Dipnarayan | Cybersecurity Insights & Analysis",
  description:
    "Expert insights, analysis, and guidance on the latest trends and best practices in cybersecurity, threat intelligence, and digital defense.",
  openGraph: {
    title: "Blogs by Dipnarayan | Cybersecurity Insights & Analysis",
    description:
      "Explore expert blogs on cybersecurity, threat intelligence, and digital defense. Stay ahead with practical guidance and trend analysis.",
    url: "https://yourdomain.com/blog",
    siteName: "Dipnarayan's Blog",
    images: [
      {
        url: "https://yourdomain.com/images/blog-og.jpg", // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "Blogs by Dipnarayan",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs by Dipnarayan | Cybersecurity Insights",
    description:
      "Insights and guidance on cybersecurity, threat intelligence, and digital defense.",
    images: ["https://yourdomain.com/images/blog-og.jpg"],
  },
};

const BlogPage = () => {
  return <BlogClient />;
};

export default BlogPage;
