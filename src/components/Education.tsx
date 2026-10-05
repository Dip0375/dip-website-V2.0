"use client";

import { motion } from "framer-motion";
import { Calendar, GraduationCap, Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEducation } from "@/hooks/useEducation";
import { urlFor } from "@/lib/sanity";

const Education = () => {
  const { data: education = [], isLoading, error } = useEducation();

  if (isLoading || error || education.length === 0) return null;

  return (
    <section id="education" className="py-16 sm:py-20 relative">
      <div className="container px-4 sm:px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16 max-w-2xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Education
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            The academic foundation behind my work in cybersecurity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={education.length === 1 ? "md:col-span-2" : ""}
            >
              <div className="p-6 rounded-lg border border-border bg-cyber-secondary/30 cyber-border h-full flex gap-5 items-start">
                <div className="bg-cyber-dark/70 p-3 rounded-md border border-border shrink-0">
                  {edu.institutionLogo ? (
                    <Image
                      src={urlFor(edu.institutionLogo).width(120).url()}
                      alt={edu.institution}
                      width={60}
                      height={60}
                      className="rounded"
                    />
                  ) : (
                    <GraduationCap className="h-[60px] w-[60px] text-cyber-accent" />
                  )}
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">
                    {edu.degree}
                    {edu.fieldOfStudy ? ` in ${edu.fieldOfStudy}` : ""}
                  </h3>
                  <p className="text-sm text-muted-foreground">{edu.institution}</p>
                  {edu.duration && (
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2 text-cyber-accent" />
                      <span>{edu.duration}</span>
                    </div>
                  )}
                  {edu.institutionLink && (
                    <Link
                      href={edu.institutionLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-muted-foreground hover:text-cyber-accent"
                    >
                      <LinkIcon className="h-4 w-4 mr-2 text-cyber-accent" />
                      <span>Institution website</span>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
