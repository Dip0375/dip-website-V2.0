"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User } from "lucide-react";
import { BlogPost } from "@/lib/blogData";
import Link from "next/link";
import { Post } from "../../types/post";
import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import { formatDateToDDMMYYYY } from "@/lib/utils";

interface BlogCardProps {
  post: Post;
  index?: number;
}

const BlogCard = ({ post, index = 0 }: BlogCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full flex flex-col group justify-between cyber-border bg-cyber-secondary/50 hover:border-cyber-accent/50 transition-all duration-300">
        <CardHeader className="pb-4">
          <Link
            href={
              post.postType === "external"
                ? post.redirectUrl || ""
                : `/blog/${post.slug}`
            }
            target={post.postType === "external" ? "_blank" : ""}
            className="w-full h-[220px] overflow-hidden rounded-md"
          >
            <Image
              src={urlFor(post.mainImage).width(400).url()}
              alt={post.title}
              width={400}
              height={220}
              className="w-full h-full rounded-md object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          <Link
            href={
              post.postType === "external"
                ? post.redirectUrl || ""
                : `/blog/${post.slug}`
            }
            target={post.postType === "external" ? "_blank" : ""}
            className="group"
          >
            <h3 className="text-xl font-semibold group-hover:text-cyber-accent transition-colors duration-200">
              {post.title}
            </h3>
          </Link>
          <div className="flex flex-wrap gap-2 mt-2">
            {post?.categories?.map((category) => (
              <Badge
                key={category}
                variant="outline"
                className="bg-cyber-accent/10 border-cyber-accent/30 text-cyber-accent text-xs"
              >
                {category}
              </Badge>
            ))}
          </div>
        </CardHeader>

        <CardContent>
          <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
        </CardContent>

        <CardFooter className="flex justify-between text-sm text-muted-foreground border-t border-border pt-4">
          <div className="flex items-center">
            {/* <User className="h-3.5 w-3.5 mr-1.5" /> */}
            <Image
              className="rounded-full mr-2"
              src={urlFor(post.author?.image).width(30).url()}
              alt={post.author?.name || ""}
              width={30}
              height={30}
            />
            <span>{post.author?.name}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-3.5 w-3.5 mr-1.5" />
            <span>{formatDateToDDMMYYYY(post.publishedAt)}</span>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default BlogCard;
