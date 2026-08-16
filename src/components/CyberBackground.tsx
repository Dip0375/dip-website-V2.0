"use client";

import { useEffect, useRef } from "react";

const CyberBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", resize);

    // Scroll-based opacity: bright on Hero, fade after
    let currentOpacity = 1;
    const onScroll = () => {
      const scrollY = window.scrollY;
      const fadeStart = 0;
      const fadeEnd = height * 0.8;
      if (scrollY <= fadeStart) {
        currentOpacity = 1;
      } else if (scrollY >= fadeEnd) {
        currentOpacity = 0.05;
      } else {
        const t = (scrollY - fadeStart) / (fadeEnd - fadeStart);
        currentOpacity = 1 - t * 0.95;
      }
      canvas.style.opacity = String(currentOpacity);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Matrix rain columns
    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    const drops: number[] = Array.from({ length: columns }, () =>
      Math.random() * -100
    );

    const chars = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF<>{}[]=/\\@#$%^&*";

    // Scanning lines
    interface ScanLine {
      y: number;
      speed: number;
      opacity: number;
      height: number;
    }

    const scanLines: ScanLine[] = [
      { y: 0, speed: 1, opacity: 0.1, height: 2 },
      { y: height / 2, speed: 0.5, opacity: 0.06, height: 1 },
    ];

    // Data packets (moving dots along paths)
    interface DataPacket {
      x: number;
      y: number;
      targetX: number;
      targetY: number;
      speed: number;
      size: number;
      trail: { x: number; y: number }[];
    }

    const packets: DataPacket[] = Array.from({ length: 4 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      targetX: Math.random() * width,
      targetY: Math.random() * height,
      speed: 0.8 + Math.random() * 1,
      size: 2 + Math.random() * 1.5,
      trail: [],
    }));

    function animate() {
      if (!ctx) return;
      // Semi-transparent clear for trail effect
      ctx.fillStyle = "rgba(10, 25, 47, 0.06)";
      ctx.fillRect(0, 0, width, height);

      // Matrix rain
      ctx.font = `${fontSize}px monospace`;
      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Brighter head of the rain
        if (Math.random() > 0.92) {
          ctx.fillStyle = "rgba(100, 255, 218, 0.9)";
        } else if (Math.random() > 0.8) {
          ctx.fillStyle = "rgba(100, 255, 218, 0.5)";
        } else {
          ctx.fillStyle = "rgba(100, 255, 218, 0.2)";
        }

        ctx.fillText(char, x, y);

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 0.4;
      }

      // Scanning lines
      scanLines.forEach((line) => {
        line.y += line.speed;
        if (line.y > height) {
          line.y = -line.height;
        }
        const gradient = ctx.createLinearGradient(0, line.y, width, line.y);
        gradient.addColorStop(0, "rgba(100, 255, 218, 0)");
        gradient.addColorStop(0.3, `rgba(100, 255, 218, ${line.opacity})`);
        gradient.addColorStop(0.7, `rgba(100, 255, 218, ${line.opacity})`);
        gradient.addColorStop(1, "rgba(100, 255, 218, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, line.y, width, line.height);
      });

      // Data packets
      packets.forEach((pkt) => {
        const dx = pkt.targetX - pkt.x;
        const dy = pkt.targetY - pkt.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 5) {
          pkt.targetX = Math.random() * width;
          pkt.targetY = Math.random() * height;
        }

        pkt.x += (dx / dist) * pkt.speed;
        pkt.y += (dy / dist) * pkt.speed;

        pkt.trail.push({ x: pkt.x, y: pkt.y });
        if (pkt.trail.length > 20) pkt.trail.shift();

        // Draw trail
        pkt.trail.forEach((point, idx) => {
          const alpha = (idx / pkt.trail.length) * 0.5;
          ctx.fillStyle = `rgba(100, 255, 218, ${alpha})`;
          ctx.beginPath();
          ctx.arc(point.x, point.y, 1, 0, Math.PI * 2);
          ctx.fill();
        });

        // Draw packet
        ctx.fillStyle = "rgba(100, 255, 218, 0.8)";
        ctx.beginPath();
        ctx.arc(pkt.x, pkt.y, pkt.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Grid lines (subtle)
      ctx.strokeStyle = "rgba(100, 255, 218, 0.04)";
      ctx.lineWidth = 0.5;
      const gridSize = 80;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      animationId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 1 }}
    />
  );
};

export default CyberBackground;
