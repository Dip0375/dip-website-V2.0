import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import DigitalClock from "@/components/DigitalClock";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Dipnarayan Nandi | Cloud Security Engineer",
  description: "Portfolio of Dipnarayan Nandi - Cloud Security Engineer specializing in AWS, DevSecOps, and threat detection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="min-h-screen bg-background text-foreground">
          <Navbar />
          <DigitalClock />
          {children}
          <Footer />
          <ChatBot />
        </div>
      </body>
    </html>
  );
}
