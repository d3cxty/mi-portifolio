"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [progress, setProgress] = useState(0); // 0 - 100
  const animRef = useRef<number | null>(null);

  // Colored HTML (visual only). Screen readers get the plain text below.
  const htmlString = `{
  <span class="text-sky-300">"name"</span>: <span class="text-emerald-300">"Hirwa Pie"</span>,
  <span class="text-sky-300">"role"</span>: <span class="text-emerald-300">"Full-stack Developer & Consultant"</span>,
  <span class="text-sky-300">"location"</span>: <span class="text-emerald-300">"Kigali, Rwanda"</span>,
  <span class="text-sky-300">"email"</span>: <span class="text-emerald-300">"hirwapie@gmail.com"</span>,
  <span class="text-sky-300">"website"</span>: <span class="text-emerald-300">"https://hirwapie.vercel.app"</span>,
  <span class="text-sky-300">"skills"</span>: [<span class="text-emerald-300">"Next.js"</span>, <span class="text-emerald-300">"Node.js"</span>, <span class="text-emerald-300">"TypeScript"</span>, <span class="text-emerald-300">"Python"</span>, <span class="text-emerald-300">"MongoDB"</span>, <span class="text-emerald-300">"PostgreSQL"</span>, <span class="text-emerald-300">"TailwindCSS"</span>, <span class="text-emerald-300">"Java"</span>, <span class="text-emerald-300">"Docker"</span>],
  <span class="text-sky-300">"interests"</span>: [<span class="text-emerald-300">"AI"</span>, <span class="text-emerald-300">"Security"</span>, <span class="text-emerald-300">"DevOps"</span>, <span class="text-emerald-300">"GIS"</span>],
  <span class="text-sky-300">"availableFor"</span>: [<span class="text-emerald-300">"Consulting"</span>, <span class="text-emerald-300">"Remote"</span>, <span class="text-emerald-300">"On-site (EA)"</span>],
  <span class="text-sky-300">"currentlyBuilding"</span>: {
    <span class="text-sky-300">"portfolio"</span>: <span class="text-emerald-300">"next-portfolio"</span>,
    <span class="text-sky-300">"smartBidAI"</span>: <span class="text-pink-400">true</span>
  }
}`;

  // Plain text for accessibility / screen readers
  const plainText = `{
  "name": "Hirwa Pie",
  "role": "Full-stack Developer & Consultant",
  "location": "Kigali, Rwanda",
  "email": "hirwapie@gmail.com",
  "website": "https://hirwapie.vercel.app",
  "skills": ["Next.js", "Node.js", "TypeScript", "Python", "MongoDB", "PostgreSQL", "TailwindCSS", "Java", "Docker"],
  "interests": ["AI", "Security", "DevOps", "GIS"],
  "availableFor": ["Consulting", "Remote", "On-site (EA)"],
  "currentlyBuilding": {
    "portfolio": "next-portfolio",
    "smartBidAI": true
  }
}`;

  useEffect(() => {
    // Respect reduced motion
    if (typeof window === "undefined") return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(100);
      return;
    }

    // Duration adapts to screen width for responsiveness (wider screens type slightly slower)
    const base = Math.max(2000, Math.min(7000, Math.floor(window.innerWidth * 6)));
    const start = performance.now();

    const step = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(1, elapsed / base);
      setProgress(pct * 100);
      if (pct < 1) animRef.current = requestAnimationFrame(step);
    };

    animRef.current = requestAnimationFrame(step);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <div className="container grid md:grid-cols-2 items-center gap-10">
      <div>
        <p className="mono">Hi! I'm</p>
        <h1 className="h1">Hirwa Pie</h1>
        <p className="mt-4 text-lg leading-relaxed opacity-90">
          Full-stack developer & consultant. I design and build modern, reliable web apps — from idea to production.
        </p>
        <div className="mt-6 flex gap-3">
          <a href="#projects" className="btn">See Projects</a>
          <a href="#contact" className="btn">Contact Me</a>
        </div>
      </div>

      {/* Code block instead of image */}
      <motion.div
        initial={{ opacity: 0, rotate: -2, y: 10 }}
        whileInView={{ opacity: 1, rotate: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <div className="card relative overflow-hidden">
          {/* soft glow */}
          <div className="pointer-events-none absolute -top-10 -left-10 h-48 w-48 rounded-full bg-blue-500/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-indigo-500/20 blur-2xl" />

          <pre
            aria-label="Profile JSON"
            className="relative z-10 font-mono text-[13px] leading-6 rounded-xl p-5 border border-black/5 bg-white/80 dark:bg-black/30 overflow-x-auto"
          >
            <div className="code-wrapper relative">
              <code
                className="code-colored whitespace-pre-wrap"
                aria-hidden
                dangerouslySetInnerHTML={{ __html: htmlString }}
              />

              {/* overlay that hides the un-typed portion; width animates from 100% -> 0% */}
              <div
                className="reveal-overlay"
                style={{ width: `${100 - progress}%` }}
              />

              {/* caret positioned at the reveal edge */}
              <div
                className="caret"
                style={{ left: `${progress}%` }}
                aria-hidden
              />

              {/* Screen-reader-only full text */}
              <span className="sr-only">{plainText}</span>
            </div>
          </pre>
        </div>
      </motion.div>
    </div>
  );
}
