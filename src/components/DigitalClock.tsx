"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const DigitalClock = () => {
  const [time, setTime] = useState({ h: "00", m: "00", s: "00" });

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime({
        h: String(now.getHours()).padStart(2, "0"),
        m: String(now.getMinutes()).padStart(2, "0"),
        s: String(now.getSeconds()).padStart(2, "0"),
      });
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const Segment = ({ value }: { value: string }) => (
    <motion.span
      key={value}
      initial={{ y: -6, opacity: 0.5 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="text-sm font-mono font-bold text-cyber-accent tabular-nums tracking-widest"
      style={{ textShadow: "0 0 8px rgba(100, 255, 218, 0.5)" }}
    >
      {value}
    </motion.span>
  );

  const Separator = () => (
    <motion.span
      animate={{ opacity: [1, 0.3, 1] }}
      transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
      className="text-sm font-bold text-cyber-accent/60 mx-0.5"
    >
      :
    </motion.span>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-4 right-6 z-50"
    >
      <div className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-cyber-accent/15 bg-cyber-dark/60 backdrop-blur-md shadow-lg shadow-cyber-accent/5">
        <div className="w-1 h-1 rounded-full bg-cyber-accent animate-pulse" />
        <div className="flex items-center ml-1">
          <Segment value={time.h} />
          <Separator />
          <Segment value={time.m} />
          <Separator />
          <Segment value={time.s} />
        </div>
        <div className="w-1 h-1 rounded-full bg-cyber-accent animate-pulse ml-1" />
      </div>
    </motion.div>
  );
};

export default DigitalClock;
