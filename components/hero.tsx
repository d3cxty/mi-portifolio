"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="container">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mono">Hi! I'm</p>
          <h1 className="h1">Hirwa Pie</h1>
          <p className="mt-4 text-lg leading-relaxed opacity-90">
            Full-stack developer & consultant. I design and build modern, reliable web apps — from idea to production.
          </p>
          <div className="mt-6 flex gap-3 justify-center">
            <a href="#projects" className="btn">See Projects</a>
            <a href="#contact" className="btn">Contact Me</a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
