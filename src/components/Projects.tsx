'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, ExternalLink, Shield, ShieldAlert } from "lucide-react";
import { useProjects } from "@/hooks/useProjects";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const { data: projects, isLoading, error } = useProjects()
  
  

  return (
    <section id="projects" className="py-20">
      <div className="container px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground">
            A showcase of security projects, implementations, and assessments across various industries
            and technical domains.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects?.map((project, index) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full cyber-border hover:border-cyber-accent/50 transition-all duration-300 bg-cyber-secondary/50">
                <div className="h-48 bg-cyber-dark/50 cyber-grid border-b border-border flex items-center justify-center p-4">
                   <Image
                    className="rounded w-full h-full"
                    src={urlFor(project.image).url()}
                    alt={project.title}
                    width={350}
                    height={190}
                  />
                </div>
                
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4">{project.description}</CardDescription>
                  
                  <div className="flex flex-wrap gap-2">
                    {project?.tags?.map(tag => (
                      <Badge key={tag} variant="outline" className="bg-cyber-accent/10 border-cyber-accent/30 text-cyber-accent">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter>
                  <Button variant="ghost" className="text-cyber-accent hover:bg-cyber-accent/10" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <span>View Details</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
