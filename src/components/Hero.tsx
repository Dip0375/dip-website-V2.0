"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
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
          
          {/* ===== Left Column ===== */}
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
              />
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-foreground via-foreground to-cyber-accent/90 bg-clip-text text-transparent pb-2"
              >
                I'm <span className="text-cyber-accent">Infinite</span> AKA Dipnarayan Nandi
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

              {/* Buttons */}
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

              {/* Certifications */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="pt-8 flex items-center gap-6 border-t border-border/30 mt-6"
              >
                <div className="text-sm text-muted-foreground font-medium">Certified by:</div>
                <div className="flex gap-6">
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="h-8 text-muted-foreground hover:text-cyber-accent transition-colors"
                  >
                    <span className="font-mono text-sm font-bold bg-cyber-secondary/80 py-1 px-3 rounded-md border border-cyber-accent/20">
                      AWS
                    </span>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="h-8 text-muted-foreground hover:text-cyber-accent transition-colors"
                  >
                    <span className="font-mono text-sm font-bold bg-cyber-secondary/80 py-1 px-3 rounded-md border border-cyber-accent/20">
                      Fortinet
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>   {/* ✅ <-- this was missing! closes left col */}
          
          {/* ===== Right Column (Visualization) ===== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            {/* (rest of your visualization content unchanged) */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
