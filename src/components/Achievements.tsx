"use client";

import { motion, useInView } from "framer-motion";
import {
  BriefcaseBusiness,
  Calendar,
  Building2,
  ChevronRight,
  Clock,
  TrendingUp,
  Shield,
  Zap,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useWorkExperience } from "@/hooks/useWorkExperience";
import { useRef } from "react";

const stats = [
  { icon: Clock, label: "Years Experience", value: "5+", color: "text-cyber-accent" },
  { icon: Shield, label: "Projects", value: "50+", color: "text-cyber-accent" },
  { icon: TrendingUp, label: "AWS Score Boost", value: "+27", color: "text-cyber-accent" },
  { icon: Zap, label: "Cost Reduction", value: "97%", color: "text-cyber-accent" },
];

const Achievements = () => {
  const { data: experiences, isLoading, error } = useWorkExperience();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="experiences" className="py-16 sm:py-20 relative overflow-hidden" ref={sectionRef}>
      {/* Background effects */}
      <div className="absolute inset-0 hero-hex-grid opacity-20" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-accent/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-accent/30 to-transparent" />

      {/* Floating background orbs */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-cyber-accent/5 rounded-full blur-[100px]"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-48 h-48 bg-cyber-accent/5 rounded-full blur-[80px]"
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Animated code lines in background */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-[10px] font-mono text-cyber-accent/5 whitespace-nowrap"
          style={{ top: `${15 + i * 18}%`, left: "-200px" }}
          animate={{ x: ["0%", "120vw"] }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "linear",
            delay: i * 3,
          }}
        >
          {`const threat = await guardDuty.analyze(${["networkTraffic", "logs", "events", "vulnerabilities", "accessPatterns"][i]}); -> [THREAT_DETECTED] -> response.automatedRemediation();`}
        </motion.div>
      ))}

      <div className="container px-4 sm:px-6 md:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 max-w-2xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-cyber-accent/5 border border-cyber-accent/20 rounded-full px-4 py-1.5 mb-4"
          >
            <BriefcaseBusiness className="w-4 h-4 text-cyber-accent" />
            <span className="text-xs font-mono text-cyber-accent">Work History</span>
          </motion.div>

          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 glitch-text"
            data-text="Professional Experience"
          >
            Professional Experience
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Building secure cloud infrastructure and driving DevSecOps transformation across
            organizations.
          </p>
        </motion.div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative group"
            >
              <div className="bg-cyber-secondary/30 border border-border/30 rounded-xl p-4 text-center backdrop-blur-sm hover:border-cyber-accent/30 transition-all duration-300 overflow-hidden">
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-accent/5 to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
                />
                <stat.icon className={`w-5 h-5 ${stat.color} mx-auto mb-2 relative z-10`} />
                <motion.div
                  className="text-2xl font-bold text-cyber-accent relative z-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-xs text-muted-foreground mt-1 relative z-10">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="experience-timeline">
            {experiences?.map((experience, index) => (
              <motion.div
                key={experience._id || index}
                initial={{ opacity: 0, x: -40, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                className="experience-card mb-8 last:mb-0"
              >
                <Card className="bg-cyber-secondary/40 border-border/50 backdrop-blur-sm hover:border-cyber-accent/30 transition-all duration-500 group overflow-hidden relative">
                  {/* Animated gradient border on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: "linear-gradient(135deg, rgba(100,255,218,0.1), transparent, rgba(100,255,218,0.1))",
                    }}
                  />

                  {/* Top accent line */}
                  <motion.div
                    className="h-px bg-gradient-to-r from-transparent via-cyber-accent/60 to-transparent"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                  />

                  <CardHeader className="flex flex-row items-start gap-4 pb-3">
                    {/* Animated icon with pulse ring */}
                    <div className="relative shrink-0">
                      <motion.div
                        className="absolute -inset-1 rounded-xl border border-cyber-accent/0 group-hover:border-cyber-accent/30 transition-all duration-500"
                        whileHover={{ scale: 1.1 }}
                      />
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="p-2.5 rounded-xl bg-cyber-accent/10 border border-cyber-accent/20 relative"
                      >
                        <BriefcaseBusiness className="h-5 w-5 text-cyber-accent" />
                        {/* Pulse dot */}
                        <motion.div
                          className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyber-accent"
                          animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                        />
                      </motion.div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <motion.h3
                        className="text-lg font-bold text-foreground group-hover:text-cyber-accent transition-colors duration-300"
                        whileHover={{ x: 4 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {experience.role}
                      </motion.h3>
                      <div className="flex flex-wrap items-center gap-3 mt-1">
                        <motion.span
                          className="flex items-center gap-1 text-sm text-cyber-accent/80"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + index * 0.1 }}
                        >
                          <Building2 className="w-3.5 h-3.5" />
                          {experience.company}
                        </motion.span>
                        <span className="text-border">•</span>
                        <motion.span
                          className="flex items-center gap-1 text-xs text-muted-foreground"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                        >
                          <Calendar className="w-3 h-3" />
                          {experience.duration}
                        </motion.span>
                      </div>
                    </div>

                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <ChevronRight className="w-5 h-5 text-muted-foreground/30 group-hover:text-cyber-accent transition-colors duration-300 shrink-0 mt-1" />
                    </motion.div>
                  </CardHeader>

                  <CardContent>
                    <motion.p
                      className="text-sm text-muted-foreground leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      {experience.description}
                    </motion.p>

                    {/* Animated progress-like dots */}
                    <div className="flex gap-1.5 mt-4">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="h-1 rounded-full bg-cyber-accent/20 flex-1 overflow-hidden"
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                          style={{ transformOrigin: "left" }}
                        >
                          <motion.div
                            className="h-full bg-cyber-accent/60 rounded-full"
                            animate={{ width: ["0%", "100%", "0%"] }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              delay: i * 0.3,
                              ease: "easeInOut",
                            }}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Loading state */}
          {isLoading && (
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="h-32 bg-cyber-secondary/50 rounded-lg border border-border/30" />
                </div>
              ))}
            </div>
          )}

          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-8 text-muted-foreground"
            >
              <p>Unable to load experiences. Please try again later.</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
