"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BlogPost } from "@/lib/blogData";
import BlogCard from "./BlogCard";
import { sanityClient } from "@/lib/sanity";
import { getAllCategoriesQuery } from "@/lib/queries";
import { useQuery } from "@tanstack/react-query";
import { Category } from "../../types/category";
import { usePosts } from "@/hooks/usePosts";


async function fetchCategories(): Promise<Category[]> {
  return sanityClient.fetch(getAllCategoriesQuery);
}

const BlogList = () => {
  const { data: categories = [], isLoading: categoriesLoading } = useQuery<
    Category[]
  >({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    staleTime: 5 * 60 * 1000,
  });

  const { data: posts = [], isLoading } = usePosts()


  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === null || post?.categories?.includes(selectedCategory);

    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4">
        <div className="relative">
          <Input
            type="search"
            placeholder="Search articles..."
            className="bg-cyber-secondary/50 border-border"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg
            className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            className={
              selectedCategory === null
                ? "bg-cyber-accent text-cyber-dark hover:bg-cyber-accent/90"
                : "border-cyber-accent/50 text-cyber-accent hover:bg-cyber-accent/10"
            }
            onClick={() => setSelectedCategory(null)}
          >
            All Categories
          </Button>

          {categories.map((category) => (
            <Button
              key={category._id}
              variant={
                selectedCategory === category.title ? "default" : "outline"
              }
              className={
                selectedCategory === category.title
                  ? "bg-cyber-accent text-cyber-dark hover:bg-cyber-accent/90"
                  : "border-cyber-accent/50 text-cyber-accent hover:bg-cyber-accent/10"
              }
              onClick={() => setSelectedCategory(category.title)}
            >
              {category.title}
            </Button>
          ))}
        </div>
      </div>

      {filteredPosts.length === 0 ? (
        <div className="text-center py-16">
          <h3 className="text-xl font-medium mb-2">No articles found</h3>
          <p className="text-muted-foreground">
            Try adjusting your search or filter criteria
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, index) => (
            <BlogCard key={post?.slug} post={post} index={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogList;
