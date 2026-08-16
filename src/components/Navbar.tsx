"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Home, Zap, Award, Briefcase, FolderGit2, BookOpen, FileText } from "lucide-react";

const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "Skills", path: "/#skills", icon: Zap },
  { name: "Certifications", path: "/#certifications", icon: Award },
  { name: "Projects", path: "/#projects", icon: FolderGit2 },
  { name: "Experiences", path: "/#experiences", icon: Briefcase },
  { name: "Resume", path: "/#resume", icon: FileText },
  { name: "Blog", path: "/blog", icon: BookOpen },
];

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 200 && currentScrollY > lastScrollY) {
        setShowNav(true);
      } else {
        setShowNav(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems
        .filter((item) => item.path.startsWith("/#"))
        .map((item) => ({
          id: item.path.replace("/#", ""),
          name: item.name,
        }));

      let current = "Home";
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            current = section.name;
          }
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top bar - logo only */}
      <nav className="fixed top-4 left-0 z-50 px-4 sm:px-6 md:px-10 py-2">
        <Link href="/" className="flex items-center gap-2">
          <Image
            width={36}
            height={36}
            src="/logo.png"
            alt="Dipnarayan Nandi"
            className="rounded-full w-8 h-8 sm:w-10 sm:h-10"
          />
          <span className="font-bold text-lg text-foreground hidden sm:block">
            Infinite
          </span>
        </Link>
      </nav>

      {/* Magic Navigation - floating dock */}
      <div
        className={`magic-nav transition-all duration-500 ${
          showNav ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        {navItems.slice(0, 3).map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className={`magic-nav-item ${active === item.name ? "active" : ""}`}
            onClick={() => setActive(item.name)}
          >
            <item.icon size={18} strokeWidth={active === item.name ? 2.5 : 1.5} />
            <span className="nav-label">{item.name}</span>
          </Link>
        ))}

        {navItems.slice(3).map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className={`magic-nav-item ${active === item.name ? "active" : ""}`}
            onClick={() => setActive(item.name)}
          >
            <item.icon size={18} strokeWidth={active === item.name ? 2.5 : 1.5} />
            <span className="nav-label">{item.name}</span>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
