"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, BookOpen, ExternalLink, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Tilt } from "@/components/ui/tilt-card";
import ResumeButton from "./ResumeButton";
import HeroTerminal from "./HeroTerminal";

const focusAreas = [
  "Cloud Security & CSPM",
  "Threat Detection & SIEM",
  "Incident Response",
  "WAF & Network Firewall",
  "DevSecOps Automation",
];

const certifications = [
  "AWS Security – Specialty",
  "AWS Solutions Architect",
  "Barracuda WaaS (WAS200)",
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const Hero = () => {
  const [focusIndex, setFocusIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setFocusIndex((i) => (i + 1) % focusAreas.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Calm background: faint grid + two soft glows */}
      <div className="absolute inset-0 z-0 hero-hex-grid opacity-40" />
      <div className="absolute -top-32 right-[-10%] w-[520px] h-[520px] rounded-full bg-sky-400/10 blur-[140px]" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[560px] h-[560px] rounded-full bg-emerald-400/10 blur-[150px]" />

      <div className="container px-4 sm:px-6 md:px-10 pt-28 pb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
          {/* LEFT: identity + message */}
          <div className="space-y-7">
            <motion.span {...fadeUp(0.05)} className="section-eyebrow !mb-0">
              <ShieldCheck className="h-4 w-4" /> Security Engineer · AWS Certified
            </motion.span>

            <motion.div {...fadeUp(0.15)}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight">
                <span className="neon-title">Dipnarayan Nandi</span>
              </h1>
              <p className="mt-3 font-mono text-sm sm:text-base text-muted-foreground">
                aka <span className="text-foreground">Infinite</span> ♾️
              </p>
            </motion.div>

            <motion.div
              {...fadeUp(0.25)}
              className="text-xl sm:text-2xl md:text-3xl font-semibold leading-[1.3] text-foreground/90 flex flex-col sm:flex-row sm:items-center gap-x-3 gap-y-1"
            >
              <span className="h-[1.3em]">Focused on</span>
              <span className="relative block h-[1.3em] w-full sm:w-auto sm:min-w-[24ch] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={focusAreas[focusIndex]}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-0 top-0 whitespace-nowrap text-sky-300"
                  >
                    {focusAreas[focusIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.div>

            <motion.p
              {...fadeUp(0.35)}
              className="max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground"
            >
              I design, automate and defend cloud environments — from WAF tuning and SIEM detections
              to incident response — so organizations can grow without leaving the door open.
            </motion.p>

            <motion.div {...fadeUp(0.45)} className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                href="/#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_10px_30px_-12px_rgba(56,189,248,0.6)] transition-transform hover:-translate-y-0.5"
              >
                View my work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <ResumeButton />
              <div className="flex items-center gap-5 pl-1 text-sm">
                <Link href="/blog" className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors">
                  <BookOpen className="h-4 w-4" /> Blog
                </Link>
                <Link
                  href="https://dipnarayan.bio.link/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ExternalLink className="h-4 w-4" /> Links
                </Link>
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.55)} className="pt-4 border-t border-white/5">
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground/70">
                Certified
              </p>
              <div className="flex flex-wrap gap-2">
                {certifications.map((c) => (
                  <span
                    key={c}
                    className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-foreground/80"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT: single 3D identity card */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotateX: 10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <Tilt className="mx-auto w-full max-w-md" max={9}>
              <HeroTerminal />
            </Tilt>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
