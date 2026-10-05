"use client";

import { animate, motion, useInView, useScroll, useSpring } from "framer-motion";
import { BriefcaseBusiness, Building2, Calendar, Clock, Shield, TrendingUp, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useWorkExperience } from "@/hooks/useWorkExperience";
import { Tilt } from "@/components/ui/tilt-card";

const stats = [
  { icon: Clock, label: "Years Experience", value: 5, prefix: "", suffix: "+" },
  { icon: Shield, label: "Projects", value: 50, prefix: "", suffix: "+" },
  { icon: TrendingUp, label: "AWS Score Boost", value: 27, prefix: "+", suffix: "" },
  { icon: Zap, label: "Cost Reduction", value: 97, prefix: "", suffix: "%" },
];

/** Number that counts up the first time it scrolls into view. */
function CountUp({ value, prefix, suffix }: { value: number; prefix: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

const Achievements = () => {
  const { data: experiences, isLoading, error } = useWorkExperience();
  const timelineRef = useRef<HTMLDivElement>(null);

  // The glowing line "draws" itself as the timeline scrolls through the viewport
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 55%"],
  });
  const lineProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <section id="experiences" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 hero-hex-grid opacity-15" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-400/30 to-transparent" />
      <div className="absolute top-1/4 -left-40 w-96 h-96 rounded-full bg-emerald-400/5 blur-[120px]" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 rounded-full bg-sky-400/5 blur-[120px]" />

      <div className="container px-4 sm:px-6 md:px-10 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 max-w-2xl mx-auto"
        >
          <span className="section-eyebrow">
            <BriefcaseBusiness className="h-4 w-4" /> // work history
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 neon-title">
            Professional Experience
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Building secure cloud infrastructure and driving DevSecOps transformation across
            organizations.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24, rotateX: 25 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ perspective: 800 }}
            >
              <Tilt className="h-full" max={10}>
                <div className="cyber-card rounded-xl p-5 text-center h-full">
                  <stat.icon className="w-5 h-5 text-sky-300 mx-auto mb-2 card-icon" />
                  <div className="text-3xl font-extrabold neon-title tabular-nums">
                    <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative max-w-5xl mx-auto">
          {/* base line + scroll-drawn glowing line */}
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 w-px -translate-x-1/2 bg-white/10" />
          <motion.div
            className="absolute top-0 bottom-0 left-4 md:left-1/2 w-[2px] -translate-x-1/2 origin-top bg-gradient-to-b from-emerald-400 via-sky-400 to-orange-400 shadow-[0_0_12px_rgba(56,189,248,0.6)]"
            style={{ scaleY: lineProgress }}
          />

          <div className="space-y-10 md:space-y-14">
            {experiences?.map((exp, index) => {
              const isLeft = index % 2 === 0;
              const isCurrent = /present/i.test(exp.duration || "");
              const hasDescription = !!exp.description?.trim();

              return (
                <div
                  key={exp._id || index}
                  className="relative grid grid-cols-1 md:grid-cols-2 md:gap-14 pl-12 md:pl-0"
                >
                  {/* node on the line */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
                    className="absolute left-4 md:left-1/2 top-7 -translate-x-1/2 z-10"
                  >
                    <span
                      className={`relative flex h-4 w-4 items-center justify-center rounded-full border-2 ${
                        isCurrent ? "border-orange-400 bg-orange-400/30" : "border-sky-400 bg-slate-950"
                      }`}
                    >
                      <span
                        className={`absolute inline-flex h-full w-full rounded-full opacity-60 animate-ping ${
                          isCurrent ? "bg-orange-400/60" : "bg-sky-400/40"
                        }`}
                      />
                    </span>
                  </motion.div>

                  {/* card: alternates sides on desktop */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -60 : 60, rotateY: isLeft ? 12 : -12 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                    style={{ perspective: 1000 }}
                    className={isLeft ? "md:col-start-1" : "md:col-start-2"}
                  >
                    <Tilt className="h-full" max={6}>
                      <div className="cyber-card rounded-xl p-5 sm:p-6">
                        <div className="flex items-start gap-4">
                          <div className="card-icon shrink-0 rounded-lg border border-sky-400/25 bg-sky-400/10 p-2.5">
                            <BriefcaseBusiness className="h-5 w-5 text-sky-300" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="text-lg font-bold text-foreground">{exp.role}</h3>
                              {isCurrent && (
                                <span className="rounded-full border border-orange-400/40 bg-orange-400/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-orange-300">
                                  Current
                                </span>
                              )}
                            </div>
                            <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                              {exp.company && (
                                <span className="inline-flex items-center gap-1.5 text-emerald-300/90">
                                  <Building2 className="h-3.5 w-3.5" />
                                  {exp.company}
                                </span>
                              )}
                              {exp.duration && (
                                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.04] px-2.5 py-0.5 text-xs text-muted-foreground">
                                  <Calendar className="h-3 w-3" />
                                  {exp.duration}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        {hasDescription && (
                          <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.35, duration: 0.6 }}
                            className="mt-4 text-sm leading-relaxed text-muted-foreground"
                          >
                            {exp.description}
                          </motion.p>
                        )}
                      </div>
                    </Tilt>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {isLoading && (
            <div className="space-y-6 pl-12 md:pl-0">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-28 animate-pulse rounded-xl border border-white/5 bg-white/[0.03]" />
              ))}
            </div>
          )}

          {error && (
            <p className="py-8 text-center text-muted-foreground">
              Unable to load experiences. Please try again later.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
