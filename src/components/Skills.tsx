"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ShieldCheck } from "lucide-react";
import { useSkills } from "@/hooks/useSkills";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";

const Skills = () => {
  // const skills = [
  //   {
  //     category: "Network Security",
  //     items: [
  //       { name: "Firewall Configuration", level: 95 },
  //       { name: "IDS/IPS Management", level: 90 },
  //       { name: "VPN Implementation", level: 85 }
  //     ]
  //   },
  //   {
  //     category: "Application Security",
  //     items: [
  //       { name: "SAST & DAST", level: 80 },
  //       { name: "API Security", level: 85 },
  //       { name: "Secure Code Review", level: 90 }
  //     ]
  //   },
  //   {
  //     category: "Offensive Security",
  //     items: [
  //       { name: "Penetration Testing", level: 95 },
  //       { name: "Exploit Development", level: 75 },
  //       { name: "Social Engineering", level: 80 }
  //     ]
  //   },
  //   {
  //     category: "Security Governance",
  //     items: [
  //       { name: "Risk Assessment", level: 90 },
  //       { name: "Compliance Frameworks", level: 85 },
  //       { name: "Security Policies", level: 90 }
  //     ]
  //   }
  // ];

  const { data: skills, isLoading, error } = useSkills();

  if (isLoading) return null;
  if (error) return <p>Failed to load skills</p>;

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 z-0 cyber-grid"></div>

      <div className="container px-6 md:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical Skills
          </h2>
          <p className="text-muted-foreground">
            Comprehensive expertise across the cybersecurity spectrum, from
            network security to advanced threat detection and mitigation
            strategies.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills?.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-cyber-secondary/50 border-border overflow-hidden aspect-square cyber-border flex justify-center items-center flex-col">
                
                <CardContent className="space-y-4 justify-center items-center flex-col flex">
                  <Image
                    className="rounded-full"
                    src={urlFor(skill.icon).width(60).url()}
                    alt={skill.name}
                    width={60}
                    height={60}
                  />

                  <CardTitle className="text-lg">{skill.name}</CardTitle>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
