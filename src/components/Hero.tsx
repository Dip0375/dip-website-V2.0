"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ExternalLink } from "lucide-react"; // Keep this for your button icon
import Image from "next/image"; // Add this line for your logo image
import Link from "next/link";
import TypingText from "./TypingText";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center cyber-grid overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-10 w-60 h-60 bg-cyber-accent/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-cyber-accent/10 rounded-full filter blur-3xl animate-pulse-slow animation-delay-500"></div>
        <div className="absolute top-40 left-1/4 w-40 h-40 bg-cyber-accent/5 rounded-full filter blur-2xl animate-pulse-slow animation-delay-300"></div>
        <div className="absolute bottom-40 right-1/4 w-48 h-48 bg-cyber-accent/8 rounded-full filter blur-2xl animate-pulse-slow animation-delay-200"></div>
      </div>

      <div className="container px-6 md:px-10 pt-32 md:pt-0 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-7">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="inline-block"
              >

              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-foreground via-foreground to-cyber-accent/90 bg-clip-text text-transparent pb-2"
              >
                I'm <span className="text-cyber-accent"> Infinite</span> AKA Dipnarayan Nandi
              </motion.h1>

              <TypingText />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-lg md:text-xl text-muted-foreground max-w-lg border-l-4 border-cyber-accent/30 pl-5 py-1"
              >
                Cybersecurity professional with expertise in penetration
                testing, network security, and threat intelligence. Helping
                organizations protect their most valuable digital assets.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-cyber-accent hover:bg-cyber-accent/90 text-cyber-dark group relative overflow-hidden transition-all duration-300"
                >
                  <Link
                    href="https://dipnarayan.bio.link/"
                    target="_blank"
                    className="flex items-center"
                  >
                    <span className="z-10 relative"> Visit My Bio Links </span>
                    <div className="absolute inset-0 w-0 bg-foreground/10 group-hover:w-full transition-all duration-300"></div>
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-cyber-accent/50 text-cyber-accent hover:bg-cyber-accent/10 group"
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

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="pt-8 flex items-center gap-6 border-t border-border/30 mt-6"
              >
                <div className="text-sm text-muted-foreground font-medium">
                  Certified by:
                </div>
                <div className="flex gap-6">
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="h-8 text-muted-foreground hover:text-foreground hover:text-cyber-accent transition-colors"
                  >
                    <span className="font-mono text-sm font-bold bg-cyber-secondary/80 py-1 px-3 rounded-md border border-cyber-accent/20">
                      AWS
                    </span>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="h-8 text-muted-foreground hover:text-foreground hover:text-cyber-accent transition-colors"
                  >
                    <span className="font-mono text-sm font-bold bg-cyber-secondary/80 py-1 px-3 rounded-md border border-cyber-accent/20">
                      Fortinet
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Enhanced Cyber Security visualization */}
              <div className="absolute inset-0 cyber-grid border border-cyber-accent/30 rounded-lg overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyber-accent/20 to-transparent"></div>

                {/* Animated elements */}
                <motion.div
                  className="absolute top-1/4 left-1/4 w-3 h-3 bg-cyber-accent rounded-full shadow-lg shadow-cyber-accent/30"
                  animate={{
                    x: [0, 100, 50, 0],
                    y: [0, 50, 100, 0],
                    opacity: [1, 0.7, 1],
                  }}
                  transition={{ duration: 15, repeat: Infinity }}
                />
                <motion.div
                  className="absolute top-3/4 left-1/2 w-3 h-3 bg-cyber-accent rounded-full shadow-lg shadow-cyber-accent/30"
                  animate={{
                    x: [0, -80, -40, 0],
                    y: [0, -30, -90, 0],
                    opacity: [1, 0.7, 1],
                  }}
                  transition={{ duration: 12, repeat: Infinity }}
                />
                <motion.div
                  className="absolute top-1/2 left-3/4 w-3 h-3 bg-cyber-accent rounded-full shadow-lg shadow-cyber-accent/30"
                  animate={{
                    x: [0, -50, -100, 0],
                    y: [0, 80, 30, 0],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{ duration: 18, repeat: Infinity }}
                />

                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full">
                  <motion.path
                    d="M100,100 C150,150 200,50 250,150"
                    stroke="rgba(100, 255, 218, 0.2)"
                    strokeWidth="1"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "loop",
                      repeatDelay: 1,
                    }}
                  />
                  <motion.path
                    d="M300,300 C250,250 200,350 150,250"
                    stroke="rgba(100, 255, 218, 0.15)"
                    strokeWidth="1"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      repeatType: "loop",
                      repeatDelay: 0.5,
                    }}
                  />
                </svg>
              </div>

              <div className="relative w-full aspect-square md:aspect-[4/3] rounded-lg bg-cyber-secondary/80 border border-border overflow-hidden backdrop-blur-sm">
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center">
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.05 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                      className="inline-block"
                    >
                      <div className="p-5 rounded-full bg-cyber-dark/80 border border-cyber-accent/30 shadow-lg shadow-cyber-accent/10">
                        <Image
                          src="/logo.png"
                          alt="My Logo"
                          width={96}
                          height={96}
                          className="animate-float rounded-full"
                        />
                      </div>
                    </motion.div>
                    <div className="mt-6 space-y-1">
                      <h3 className="text-xl font-bold text-cyber-accent">
                        Security First Approach
                      </h3>
                      <div className="text-sm font-mono text-cyber-accent/70 mt-2 flex flex-wrap justify-center gap-2">
                        <span className="bg-cyber-dark/50 px-3 py-1 rounded-full border border-cyber-accent/10">
                          Network Security
                        </span>
                        <span className="bg-cyber-dark/50 px-3 py-1 rounded-full border border-cyber-accent/10">
                          Threat Detection
                        </span>
                        <span className="bg-cyber-dark/50 px-3 py-1 rounded-full border border-cyber-accent/10">
                          Cloud Security
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Code-like text overlay with enhanced opacity and positioning */}
                <div className="absolute inset-0 overflow-hidden opacity-20">
                  <pre className="text-[0.5rem] text-cyber-accent font-mono leading-tight p-4">
                    {`
function analyzeSecurityThreats(network) {
  const vulnerabilities = scanForVulnerabilities(network);
  const threats = identifyPotentialThreats(vulnerabilities);
  const mitigationPlan = developMitigationPlan(threats);
  
  implementSecurityMeasures(mitigationPlan);
  monitorNetworkActivity();
  
  return {
    securityStatus: "Enhanced",
    vulnerabilitiesPatched: vulnerabilities.length,
    threatsNeutralized: threats.length
  };
}
                    `}
                  </pre>
                </div>

                {/* Animated scanner effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-accent/10 to-transparent h-full w-full"
                  initial={{ y: -500 }}
                  animate={{ y: 500 }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "loop",
                    repeatDelay: 1,
                  }}
                ></motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
