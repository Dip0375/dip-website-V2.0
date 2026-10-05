"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, Download, Loader2 } from "lucide-react";
import { useState } from "react";

type State = "idle" | "loading" | "done";

const RESUME_URL = "/Dipnarayan_Nandi_Resume.pdf";

export default function ResumeButton() {
  const [state, setState] = useState<State>("idle");

  const handleClick = () => {
    if (state !== "idle") return;
    setState("loading");

    const link = document.createElement("a");
    link.href = RESUME_URL;
    link.download = "Dipnarayan_Nandi_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();

    setTimeout(() => setState("done"), 1400);
    setTimeout(() => setState("idle"), 3600);
  };

  const done = state === "done";

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      whileHover={state === "idle" ? { y: -2 } : undefined}
      whileTap={state === "idle" ? { scale: 0.96 } : undefined}
      aria-live="polite"
      className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full border px-6 py-3 text-sm font-semibold transition-colors duration-300 ${
        done
          ? "border-emerald-400/60 text-emerald-300 bg-emerald-400/10"
          : "border-sky-400/40 text-sky-200 hover:bg-sky-400/10"
      }`}
    >
      {/* progress sweep while downloading */}
      <AnimatePresence>
        {state === "loading" && (
          <motion.span
            key="progress"
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-emerald-400/25 to-sky-400/25"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
          />
        )}
      </AnimatePresence>

      <span className="relative z-10 flex h-4 w-4 items-center justify-center">
        {state === "idle" && (
          <motion.span
            key="idle"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: [0, 2.5, 0] }}
            transition={{ y: { duration: 1.4, repeat: Infinity, ease: "easeInOut" }, opacity: { duration: 0.2 } }}
          >
            <Download className="h-4 w-4" />
          </motion.span>
        )}
        {state === "loading" && (
          <motion.span
            key="loading"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1, rotate: 360 }}
            transition={{ rotate: { duration: 0.9, repeat: Infinity, ease: "linear" }, default: { duration: 0.2 } }}
          >
            <Loader2 className="h-4 w-4" />
          </motion.span>
        )}
        {state === "done" && (
          <motion.span
            key="done"
            initial={{ opacity: 0, scale: 0, rotate: -90 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 14 }}
          >
            <Check className="h-4 w-4" strokeWidth={3} />
          </motion.span>
        )}
      </span>

      <span className="relative z-10 inline-block min-w-[6.5rem] text-left">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={state}
            className="inline-block"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {state === "idle" ? "Resume" : state === "loading" ? "Preparing…" : "Downloaded"}
          </motion.span>
        </AnimatePresence>
      </span>
    </motion.button>
  );
}
