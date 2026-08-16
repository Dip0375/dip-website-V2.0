"use client";

import React from "react";
import Hero from "./Hero";
import Skills from "./Skills";
import Certifications from "./Certifications";
import Projects from "./Projects";
import Achievements from "./Achievements";
import FlipbookResume from "./FlipbookResume";
import CTA from "./CTA";
import CyberBackground from "./CyberBackground";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const HomeClient = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <CyberBackground />
        <Hero />
        <Skills />
        <Certifications />
        <Projects />
        <Achievements />
        <FlipbookResume />
        <CTA />
      </main>
    </QueryClientProvider>
  );
};

export default HomeClient;
