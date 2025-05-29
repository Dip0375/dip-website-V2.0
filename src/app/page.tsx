import HomeClient from "@/components/HomeClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dipnarayan Nandi | Cybersecurity Expert & Ethical Hacker",
  description:
    "Portfolio of Dipnarayan Nandi, a certified cybersecurity professional skilled in penetration testing, threat intelligence, and network security. Explore projects, blogs, and certifications.",
  keywords: [
    "Dipnarayan Nandi",
    "Cybersecurity Expert",
    "Ethical Hacker",
    "Penetration Testing",
    "Network Security",
    "Threat Intelligence",
    "AWS Certified",
    "Fortinet Certified",
    "Cybersecurity Portfolio",
  ],
  authors: [{ name: "Dipnarayan Nandi", url: "https://dipnarayan.bio.link" }],
  creator: "Dipnarayan Nandi",
  metadataBase: new URL("https://www.dipnarayan.in"),
  openGraph: {
    title: "Dipnarayan Nandi | Cybersecurity Portfolio",
    description:
      "Certified Cybersecurity Expert with skills in ethical hacking, pentesting, and threat mitigation. Visit my portfolio to learn more.",
    url: "https://www.dipnarayan.in",
    siteName: "Dipnarayan's Cybersecurity Portfolio",

    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dipnarayan Nandi | Cybersecurity Expert",
    description:
      "Cybersecurity portfolio showcasing projects, certifications, and blog posts by Dipnarayan Nandi.",
    creator: "@yourtwitterhandle",
    images: ["https://your-portfolio-domain.com/twitter-card.jpg"],
  },
};

export default function Home() {
  return <HomeClient />;
}
