'use client'

import { motion } from "framer-motion";
import { Award, BriefcaseBusiness, Star } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useWorkExperience } from "@/hooks/useWorkExperience";

const Achievements = () => {

   const { data: experiences, isLoading, error } = useWorkExperience()


  return (
    <section id="experiences" className="py-20 bg-cyber-dark/30">
      <div className="container px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Achievements</h2>
          <p className="text-muted-foreground">
            Recognition from industry leaders for contributions to cybersecurity innovation, leadership, and excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences?.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-cyber-secondary/50 border-border h-full cyber-border">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="p-2 rounded-full bg-cyber-accent/10 border border-cyber-accent/20">
                   
                      <BriefcaseBusiness className="h-5 w-5 text-cyber-accent" />
                    
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{experience.role}</h3>
                    <p className="text-sm text-muted-foreground">{experience.company}, {experience.duration}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{experience.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
