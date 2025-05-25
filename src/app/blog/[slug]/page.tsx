'use client'

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ChevronLeft } from "lucide-react";
import { blogData, BlogPost } from "@/lib/blogData";
import ReactMarkdown from 'react-markdown';

const BlogPostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    window.scrollTo(0, 0);
    
    const foundPost = blogData.find(post => post.slug === slug);
    if (foundPost) {
      setPost(foundPost);
      // Update title for SEO
      document.title = `${foundPost.title} - CyberPortfolio`;
    }
  }, [slug]);
  
  if (!mounted) {
    return null;
  }
  
  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        
        <main className="pt-32 pb-20">
          <div className="container px-6 md:px-10 text-center">
            <h1 className="text-3xl font-bold mb-6">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The blog post you're looking for doesn't exist or has been removed.
            </p>
            <Button asChild>
              <Link to="/blog">Return to Blog</Link>
            </Button>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <article className="container px-6 md:px-10 max-w-4xl mx-auto">
          <Button
            variant="ghost"
            asChild
            className="mb-8 text-muted-foreground hover:text-cyber-accent"
          >
            <Link to="/blog" className="flex items-center">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to all posts
            </Link>
          </Button>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <header className="mb-10">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.categories.map((category) => (
                  <Badge 
                    key={category} 
                    variant="outline" 
                    className="bg-cyber-accent/10 border-cyber-accent/30 text-cyber-accent"
                  >
                    {category}
                  </Badge>
                ))}
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
              
              <div className="flex items-center gap-6 text-muted-foreground">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  <span>{post.author}</span>
                </div>
                
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{post.date}</span>
                </div>
              </div>
            </header>
            
            <div className="prose prose-invert max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-cyber-accent prose-strong:text-foreground prose-code:text-cyber-accent prose-blockquote:border-cyber-accent/30 prose-blockquote:text-muted-foreground">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </motion.div>
          
          <div className="mt-16 pt-8 border-t border-border">
            <h2 className="text-2xl font-bold mb-6">More Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogData
                .filter(p => p.id !== post.id)
                .slice(0, 2)
                .map((relatedPost, index) => (
                  <motion.div
                    key={relatedPost.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link to={`/blog/${relatedPost.slug}`} className="block p-6 border border-border rounded-lg bg-cyber-secondary/30 hover:border-cyber-accent/50 transition-all duration-300">
                      <div className="flex flex-wrap gap-2 mb-2">
                        {relatedPost.categories.slice(0, 1).map((category) => (
                          <Badge 
                            key={category} 
                            variant="outline" 
                            className="bg-cyber-accent/10 border-cyber-accent/30 text-cyber-accent text-xs"
                          >
                            {category}
                          </Badge>
                        ))}
                      </div>
                      
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-cyber-accent transition-colors duration-200">
                        {relatedPost.title}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </Link>
                  </motion.div>
                ))}
            </div>
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPostPage;
