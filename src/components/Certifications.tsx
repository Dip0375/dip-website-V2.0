"use client";

import { motion } from "framer-motion";
import { Check, Link as LinkIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useCertifications } from "@/hooks/useCertifications";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";

const Certifications = () => {
  const { data: certifications = [], isLoading, error } = useCertifications();

  return (
    <section id="certifications" className="py-20 bg-cyber-dark/30">
      <div className="container px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional Certifications
          </h2>
          <p className="text-muted-foreground">
            Industry-recognized certifications that validate expertise and
            commitment to cybersecurity excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className={`p-6 rounded-lg border ${
                  cert.highlighted
                    ? "border-cyber-accent/30 bg-cyber-accent/5"
                    : "border-border bg-cyber-secondary/30"
                } cyber-border h-full`}
              >
                <div className="flex justify-between items-start">
                  <div className="bg-cyber-dark/70 p-3 rounded-md border border-border">
                    <div className="text-2xl font-bold font-mono text-cyber-accent">
                      <Image
                        src={urlFor(cert.certificateImage).url()}
                        alt={cert.name}
                        width={60}
                        height={60}
                      />
                    </div>
                  </div>
                  {cert.highlighted && (
                    <Badge
                      variant="outline"
                      className="border-cyber-accent bg-cyber-accent/10 text-cyber-accent text-xs"
                    >
                      Featured
                    </Badge>
                  )}
                </div>

                <h3 className="mt-5 text-lg font-semibold">{cert.name}</h3>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Check className="h-4 w-4 mr-2 text-cyber-accent" />
                    <span>Issuer: {cert.issuer}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Check className="h-4 w-4 mr-2 text-cyber-accent" />
                    <span>Obtained: {cert.date}</span>
                  </div>
                  <Link
                    href={cert.certificateLink || ""}
                    target="_blank"
                    className="flex items-center text-sm text-muted-foreground"
                  >
                    <LinkIcon className="h-4 w-4 mr-2 text-cyber-accent" />
                    <span>Link</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
