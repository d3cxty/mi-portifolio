"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="container grid md:grid-cols-2 items-center gap-10">
      <div>
        <p className="mono">Hi! I'm</p>
        <h1 className="h1">Hirwa Pie</h1>
        <p className="mt-4 text-lg leading-relaxed opacity-90">
          Full‑stack developer & consultant. I design and build modern, reliable web apps — from idea to production.
        </p>
        <div className="mt-6 flex gap-3">
          <a href="#projects" className="btn">See Projects</a>
          <a href="#contact" className="btn">Contact Me</a>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, rotate: -2, y: 10 }}
        whileInView={{ opacity: 1, rotate: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <div className="card">
          <img
            alt="Hero"
            className="rounded-xl w-full h-64 object-cover"
            src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop"
          />
        </div>
      </motion.div>
    </div>
  );
}
