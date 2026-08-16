"use client";

import { motion } from "framer-motion";
import BlogList from "@/components/BlogList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const BlogClient = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="pt-24 pb-20">
        <div className="container px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Blogs by Dipnarayan
            </h1>
            <p className="text-muted-foreground">
              Expert insights, analysis and guidance on the latest trends and
              best practices in cybersecurity, threat intelligence, and digital
              defense.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <BlogList />
          </motion.div>
        </div>
      </main>
    </QueryClientProvider>
  );
};

export default BlogClient;