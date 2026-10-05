"use client";

import { ReactNode } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

type TiltProps = {
  children: ReactNode;
  className?: string;
  /** Maximum tilt in degrees */
  max?: number;
};

/**
 * Subtle 3D tilt that follows the mouse, with a soft moving light reflection.
 * Disabled automatically for users who prefer reduced motion.
 */
export function Tilt({ children, className = "", max = 7 }: TiltProps) {
  const reduce = useReducedMotion();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const hover = useMotionValue(0);

  const spring = { stiffness: 180, damping: 18, mass: 0.6 };
  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), spring);
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), spring);
  const glareOpacity = useSpring(hover, { stiffness: 200, damping: 25 });

  const gx = useTransform(px, (v) => `${v * 100}%`);
  const gy = useTransform(py, (v) => `${v * 100}%`);
  const glare = useMotionTemplate`radial-gradient(420px circle at ${gx} ${gy}, rgba(56, 189, 248, 0.14), rgba(74, 222, 128, 0.06) 35%, transparent 60%)`;

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <div className={className} style={{ perspective: 1000 }}>
      <motion.div
        className="relative h-full rounded-lg"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          px.set((e.clientX - r.left) / r.width);
          py.set((e.clientY - r.top) / r.height);
          hover.set(1);
        }}
        onMouseLeave={() => {
          px.set(0.5);
          py.set(0.5);
          hover.set(0);
        }}
      >
        {children}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[2] rounded-lg"
          style={{ background: glare, opacity: glareOpacity }}
        />
      </motion.div>
    </div>
  );
}

export default Tilt;
