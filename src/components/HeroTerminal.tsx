"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Lock, RotateCcw } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type Tone = "cmd" | "out" | "info" | "ok" | "warn" | "dim" | "progress";
type Line = { id: number; text: string; tone: Tone };

const SCRIPT: Array<
  | { kind: "cmd"; text: string }
  | { kind: "out"; text: string; tone?: Tone; delay?: number }
  | { kind: "progress" }
  | { kind: "reveal" }
> = [
  { kind: "cmd", text: "whoami" },
  { kind: "out", text: "dipnarayan · aka infinite" },
  { kind: "cmd", text: "cat focus.txt" },
  { kind: "out", text: "cloud-sec · siem · ir · waf" },
  { kind: "cmd", text: "scan --identity --verify" },
  { kind: "out", text: "Connecting to secure vault... ✓ online", tone: "info", delay: 450 },
  { kind: "out", text: "Scanning: certifications", tone: "dim", delay: 380 },
  { kind: "out", text: "✓ AWS Security · AWS SAA · Barracuda WAS200", tone: "ok", delay: 420 },
  { kind: "out", text: "Scanning: experience", tone: "dim", delay: 380 },
  { kind: "out", text: "✓ 5+ yrs · cloud security · incident response", tone: "ok", delay: 420 },
  { kind: "progress" },
  { kind: "out", text: "✓ Identity verified — decrypting profile...", tone: "ok", delay: 250 },
  { kind: "reveal" },
];

const toneClass: Record<Tone, string> = {
  cmd: "text-foreground/90",
  out: "text-sky-300/90 pl-4",
  info: "text-foreground/70 pl-4",
  ok: "text-emerald-400 pl-4",
  warn: "text-orange-300 pl-4",
  dim: "text-foreground/60 pl-4",
  progress: "pl-4",
};

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export default function HeroTerminal() {
  const reduce = useReducedMotion();
  const [lines, setLines] = useState<Line[]>([]);
  const [typing, setTyping] = useState<string | null>(null);
  const [progress, setProgress] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [running, setRunning] = useState(false);
  const runId = useRef(0);

  const run = useCallback(async () => {
    const id = ++runId.current;
    const alive = () => runId.current === id;
    setLines([]);
    setTyping(null);
    setProgress(null);
    setRevealed(false);
    setRunning(true);

    let n = 0;
    const push = (text: string, tone: Tone) =>
      setLines((prev) => [...prev, { id: n++, text, tone }]);

    await sleep(700);
    for (const step of SCRIPT) {
      if (!alive()) return;
      if (step.kind === "cmd") {
        for (let i = 1; i <= step.text.length; i++) {
          if (!alive()) return;
          setTyping(step.text.slice(0, i));
          await sleep(55 + Math.random() * 45);
        }
        await sleep(220);
        setTyping(null);
        push(step.text, "cmd");
        await sleep(260);
      } else if (step.kind === "out") {
        await sleep(step.delay ?? 200);
        push(step.text, step.tone ?? "out");
      } else if (step.kind === "progress") {
        await sleep(250);
        setProgress(0);
        push("", "progress");
        for (let p = 0; p <= 100; p += 4) {
          if (!alive()) return;
          setProgress(p);
          await sleep(p > 80 ? 60 : 32);
        }
        setProgress(100);
      } else if (step.kind === "reveal") {
        await sleep(350);
        setRevealed(true);
      }
    }
    if (alive()) setRunning(false);
  }, []);

  useEffect(() => {
    if (reduce) {
      // Show the finished state straight away for reduced-motion users
      let n = 0;
      const final: Line[] = [];
      for (const s of SCRIPT) {
        if (s.kind === "cmd") final.push({ id: n++, text: s.text, tone: "cmd" });
        if (s.kind === "out") final.push({ id: n++, text: s.text, tone: s.tone ?? "out" });
        if (s.kind === "progress") final.push({ id: n++, text: "", tone: "progress" });
      }
      setLines(final);
      setProgress(100);
      setRevealed(true);
      return;
    }
    run();
    return () => {
      runId.current++;
    };
  }, [reduce, run]);

  return (
    <div className="cyber-card rounded-2xl p-6">
      {/* title bar */}
      <div className="flex items-center gap-2 pb-4 border-b border-white/5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        <span className="ml-3 font-mono text-[11px] uppercase tracking-[0.18em] text-sky-300/70">
          infinite@secops — identity scan
        </span>
        {!running && !reduce && (
          <button
            type="button"
            onClick={run}
            aria-label="Replay scan"
            className="ml-auto rounded-md p-1 text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
          >
            <RotateCcw className="h-3.5 w-3.5" />
          </button>
        )}
      </div>

      {/* identity panel: locked until the scan finishes */}
      <div className="relative my-5 h-[104px]">
        <AnimatePresence mode="wait">
          {!revealed ? (
            <motion.div
              key="locked"
              exit={{ opacity: 0, filter: "blur(6px)" }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0 flex items-center gap-5"
            >
              <div className="relative flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-slate-900/80">
                <Lock className="h-6 w-6 text-sky-300/60" />
                {progress !== null && (
                  <motion.span
                    className="absolute inset-x-0 h-8 bg-gradient-to-b from-transparent via-sky-400/40 to-transparent"
                    animate={{ y: ["-100%", "320%"] }}
                    transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
                  />
                )}
              </div>
              <div className="flex-1 space-y-2.5">
                <div className="h-4 w-3/4 rounded bg-white/[0.06]" />
                <div className="h-3 w-1/2 rounded bg-white/[0.05]" />
                <p className="font-mono text-[11px] text-muted-foreground">
                  {progress === null ? "identity encrypted" : `decrypting ${progress}%`}
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div key="revealed" className="absolute inset-0 flex items-center gap-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.6, filter: "blur(12px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-24 w-24 shrink-0"
              >
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-emerald-400 via-sky-400 to-orange-400 opacity-70 blur-[2px]" />
                <div className="group relative h-24 w-24 overflow-hidden rounded-full border-2 border-slate-900">
                  <Image
                    src="/profile.png"
                    alt="Dipnarayan Nandi"
                    fill
                    className="object-cover blur-md transition-all duration-500 group-hover:blur-0"
                    priority
                  />
                  {/* one-time scan sweep over the photo */}
                  <motion.span
                    className="absolute inset-x-0 h-10 bg-gradient-to-b from-transparent via-emerald-300/50 to-transparent"
                    initial={{ y: "-120%" }}
                    animate={{ y: "260%" }}
                    transition={{ duration: 0.9, ease: "easeInOut", delay: 0.2 }}
                  />
                </div>
              </motion.div>
              <div>
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35, duration: 0.45 }}
                  className="text-lg font-bold text-foreground"
                >
                  Dipnarayan Nandi
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.55, duration: 0.45 }}
                  className="text-sm text-muted-foreground"
                >
                  Security Engineer
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, type: "spring", stiffness: 300, damping: 18 }}
                  className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-300"
                >
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" /> Verified · Online
                </motion.p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* terminal body */}
      <div
        className="h-[330px] overflow-hidden rounded-xl bg-slate-950/70 p-4 font-mono text-[12.5px] leading-[1.6]"
        aria-live="polite"
      >
        {lines.map((l) =>
          l.tone === "progress" ? (
            <div key={l.id} className="my-1.5 pl-4">
              <p className="text-sky-300/80">SCAN PROGRESS [{progress ?? 0}%]</p>
              <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-sky-400 to-orange-400 transition-[width] duration-100"
                  style={{ width: `${progress ?? 0}%` }}
                />
              </div>
            </div>
          ) : l.tone === "cmd" ? (
            <p key={l.id} className="mt-1.5 first:mt-0">
              <span className="text-emerald-400">$</span> <span className={toneClass.cmd}>{l.text}</span>
            </p>
          ) : (
            <motion.p
              key={l.id}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25 }}
              className={`${toneClass[l.tone]} truncate`}
            >
              {l.text}
            </motion.p>
          )
        )}

        {typing !== null && (
          <p className="mt-1.5">
            <span className="text-emerald-400">$</span> <span className="text-foreground/90">{typing}</span>
            <span className="typing-cursor" />
          </p>
        )}

        {typing === null && !running && (
          <p className="mt-1.5">
            <span className="text-emerald-400">$</span> <span className="typing-cursor" />
          </p>
        )}
      </div>
    </div>
  );
}
