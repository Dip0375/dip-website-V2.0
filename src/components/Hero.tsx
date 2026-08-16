"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink, Shield, Lock, Eye, Terminal, Fingerprint, Bug, Download, ArrowDown, Check, Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import TypingText from "./TypingText";
import { useEffect, useState, useMemo } from "react";

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [downloadState, setDownloadState] = useState<"idle" | "loading" | "done">("idle");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      setMousePos({
        x: (clientX / innerWidth - 0.5) * 20,
        y: (clientY / innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const securityIcons = useMemo(
    () => [
      { Icon: Shield, x: -160, y: -80 },
      { Icon: Lock, x: 160, y: -60 },
      { Icon: Eye, x: -140, y: 100 },
      { Icon: Bug, x: 150, y: 110 },
      { Icon: Terminal, x: -60, y: -140 },
      { Icon: Fingerprint, x: 80, y: 140 },
    ],
    []
  );

  const particles = useMemo(
    () =>
      Array.from({ length: 10 }, (_, i) => ({
        id: i,
        left: `${(i * 37 + 13) % 100}%`,
        top: `${(i * 53 + 7) % 100}%`,
        duration: 4 + (i % 4),
        delay: (i % 5) * 0.5,
      })),
    []
  );

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden hero-hex-grid">
      {/* Background particles */}
      <div className="absolute inset-0 z-0">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute w-1 h-1 bg-cyber-accent/20 rounded-full"
            style={{ left: p.left, top: p.top }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
            }}
          />
        ))}
        <div className="absolute top-20 right-20 w-72 h-72 bg-cyber-accent/4 rounded-full filter blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyber-accent/3 rounded-full filter blur-[120px] animate-pulse-slow animation-delay-500" />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-cyber-accent/3 rounded-full filter blur-[80px] animate-pulse-slow animation-delay-300" />
      </div>

      <div className="absolute inset-0 z-0 hero-circuit-lines opacity-20" />

      <div className="container px-6 md:px-10 pt-28 md:pt-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
              >
                <span className="text-foreground">I&apos;m </span>
                <span className="text-cyber-accent cyber-text-glow">Infinite</span>
                <br />
                <span className="bg-gradient-to-r from-foreground via-foreground to-cyber-accent/60 bg-clip-text text-transparent">
                  AKA DIPNARAYAN NANDI
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
              >
                <TypingText />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="text-base md:text-lg text-white max-w-lg border-l-2 border-cyber-accent/30 pl-5 py-2 leading-relaxed"
              >
                Cybersecurity professional with expertise in Cloud Security, DevSecOps, Automation, Incident Response and threat intelligence. Helping
                organizations protect their most valuable digital assets.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 pt-2"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-cyber-accent hover:bg-cyber-accent/90 text-cyber-dark font-semibold group relative overflow-hidden transition-all duration-300 shadow-lg shadow-cyber-accent/20"
                >
                  <Link
                    href="https://dipnarayan.bio.link/"
                    target="_blank"
                    className="flex items-center"
                  >
                    <span className="z-10 relative">Visit My Bio Links</span>
                    <ExternalLink
                      size={16}
                      className="ml-2 z-10 relative group-hover:translate-x-1 transition-transform"
                    />
                    <div className="absolute inset-0 w-0 bg-foreground/10 group-hover:w-full transition-all duration-300" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-cyber-accent/40 text-cyber-accent hover:bg-cyber-accent/10 group"
                >
                  <Link href="/blog" className="flex items-center">
                    Read Blog
                    <ExternalLink
                      size={16}
                      className="ml-2 opacity-70 group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </Button>
              </motion.div>

              {/* Animated Download Resume Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.65 }}
              >
                <motion.button
                  onClick={() => {
                    if (downloadState === "idle") {
                      setDownloadState("loading");
                      const link = document.createElement("a");
                      link.href = "/Dipnarayan_Nandi_Resume.pdf";
                      link.download = "Dipnarayan_Nandi_Resume.pdf";
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                      setTimeout(() => setDownloadState("done"), 2000);
                      setTimeout(() => setDownloadState("idle"), 4000);
                    }
                  }}
                  whileHover={{ scale: downloadState === "idle" ? 1.05 : 1 }}
                  whileTap={{ scale: downloadState === "idle" ? 0.95 : 1 }}
                  animate={{
                    width: downloadState === "idle" ? 220 : downloadState === "loading" ? 64 : 180,
                    borderColor:
                      downloadState === "done"
                        ? "rgba(34, 197, 94, 0.8)"
                        : "rgba(100, 255, 218, 0.4)",
                    backgroundColor:
                      downloadState === "done"
                        ? "rgba(34, 197, 94, 0.1)"
                        : "rgba(100, 255, 218, 0.05)",
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="flex items-center justify-center gap-3 py-2 px-2 pr-6 rounded-full border backdrop-blur-sm cursor-pointer overflow-hidden"
                  style={{ minWidth: downloadState === "loading" ? 64 : undefined }}
                >
                  {/* Circular icon area */}
                  <motion.div
                    className="relative flex items-center justify-center w-10 h-10 shrink-0"
                    animate={{
                      rotate: downloadState === "loading" ? 360 : 0,
                    }}
                    transition={{
                      duration: downloadState === "loading" ? 1 : 0,
                      repeat: downloadState === "loading" ? Infinity : 0,
                      ease: "linear",
                    }}
                  >
                    {/* Outer animated ring - only in idle */}
                    {downloadState === "idle" && (
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-cyber-accent/30"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      />
                    )}

                    {/* Loading spinner ring */}
                    {downloadState === "loading" && (
                      <svg className="absolute inset-0 w-10 h-10" viewBox="0 0 40 40">
                        <motion.circle
                          cx="20"
                          cy="20"
                          r="17"
                          fill="none"
                          stroke="rgba(100, 255, 218, 0.2)"
                          strokeWidth="3"
                        />
                        <motion.circle
                          cx="20"
                          cy="20"
                          r="17"
                          fill="none"
                          stroke="#64ffda"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeDasharray="107"
                          strokeDashoffset="80"
                          animate={{ strokeDashoffset: [80, 20, 80] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        />
                      </svg>
                    )}

                    {/* Inner circle */}
                    <motion.div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      animate={{
                        backgroundColor:
                          downloadState === "done"
                            ? "rgba(34, 197, 94, 1)"
                            : "rgba(100, 255, 218, 1)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Idle: bouncing arrow */}
                      {downloadState === "idle" && (
                        <motion.div
                          animate={{ y: [0, 3, 0] }}
                          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <ArrowDown className="w-5 h-5 text-cyber-dark" strokeWidth={2.5} />
                        </motion.div>
                      )}

                      {/* Loading: spinning loader */}
                      {downloadState === "loading" && (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <Loader2 className="w-5 h-5 text-cyber-dark" strokeWidth={2.5} />
                        </motion.div>
                      )}

                      {/* Done: checkmark */}
                      {downloadState === "done" && (
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ type: "spring", stiffness: 200, damping: 10 }}
                        >
                          <Check className="w-5 h-5 text-white" strokeWidth={3} />
                        </motion.div>
                      )}
                    </motion.div>
                  </motion.div>

                  {/* Text label */}
                  <motion.span
                    className="text-sm font-semibold whitespace-nowrap"
                    animate={{
                      color:
                        downloadState === "done"
                          ? "rgba(34, 197, 94, 1)"
                          : "rgba(100, 255, 218, 1)",
                      opacity: downloadState === "loading" ? 0 : 1,
                      width: downloadState === "loading" ? 0 : "auto",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {downloadState === "done" ? "Done!" : "Download Resume"}
                  </motion.span>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT column - 3D Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:flex justify-center items-center"
          >
            <div
              className="relative hero-3d-scene"
              style={{
                transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              <div className="hero-3d-card relative">
                <div className="relative z-10 flex flex-col items-center">
                  {securityIcons.map(({ Icon, x, y }, i) => (
                    <motion.div
                      key={i}
                      className="absolute"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                      }}
                      animate={{
                        y: [0, -8, 0, 8, 0],
                        x: [0, 5, 0, -5, 0],
                      }}
                      transition={{
                        duration: 8 + i * 2,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="p-2.5 rounded-xl bg-cyber-secondary/80 border border-cyber-accent/20 backdrop-blur-sm">
                        <Icon className="w-5 h-5 text-cyber-accent/70" />
                      </div>
                    </motion.div>
                  ))}

                  {/* Profile image */}
                  <div className="relative">
                    {/* Circle layer 1 - outer, slow rotate */}
                    <div className="absolute -inset-7 rounded-full border border-cyber-accent/20" style={{ animation: "orbit 20s linear infinite" }} />
                    {/* Circle layer 2 - middle, reverse rotate */}
                    <div className="absolute -inset-5 rounded-full border border-cyber-accent/15" style={{ animation: "orbit 15s linear infinite reverse" }} />
                    {/* Circle layer 3 - inner, glow pulse */}
                    <div className="absolute -inset-3 rounded-full border border-cyber-accent/25 animate-glow-pulse" />

                    {/* Profile image */}
                    <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-cyber-accent/40 shadow-2xl shadow-cyber-accent/20 group cursor-pointer">
                      <Image
                        src="/profile.png"
                        alt="Dipnarayan Nandi"
                        fill
                        className="object-cover blur-md group-hover:blur-0 transition-all duration-500"
                        priority
                      />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-accent/15 to-transparent group-hover:opacity-0 transition-opacity duration-500"
                        animate={{ y: ["-100%", "200%"] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                          repeatDelay: 2,
                        }}
                      />
                    </div>
                  </div>

                  {/* Info below */}
                  <motion.div
                    className="mt-8 text-center"
                  >
                    <h3 className="text-xl font-bold text-cyber-accent cyber-text-glow">
                      Security First Approach
                    </h3>
                    <div className="text-sm font-mono text-cyber-accent/70 mt-3 flex flex-wrap justify-center gap-2">
                      {["Network Security", "Threat Detection", "Cloud Security"].map(
                        (tag) => (
                          <span
                            key={tag}
                            className="bg-cyber-dark/60 px-3 py-1 rounded-full border border-cyber-accent/15 backdrop-blur-sm"
                          >
                            {tag}
                          </span>
                        )
                      )}
                    </div>
                  </motion.div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
