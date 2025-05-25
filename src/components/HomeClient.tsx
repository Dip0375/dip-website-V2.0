"use client";

import React from "react";
import Hero from "./Hero";
import Skills from "./Skills";
import Certifications from "./Certifications";
import Projects from "./Projects";
import Achievements from "./Achievements";
import CTA from "./CTA";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const HomeClient = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <Hero />
        <Skills />
        <Certifications />
        <Projects />
        <Achievements />
        <CTA />
      </main>
    </QueryClientProvider>
  );
};

export default HomeClient;
