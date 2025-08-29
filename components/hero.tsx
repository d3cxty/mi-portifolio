"use client";

import { motion } from "framer-motion";

export default function Hero() {
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

          <motion.pre
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative z-10 font-mono text-[13px] leading-6 bg-black/30 rounded-xl p-5 border border-white/10 overflow-x-auto"
          >
            <code>
{`{`}
{"\n"}  <span className="text-sky-300">"name"</span>: <span className="text-emerald-300">"Hirwa Pie"</span>,{"\n"}  <span className="text-sky-300">"role"</span>: <span className="text-emerald-300">"Full-stack Developer & Consultant"</span>,{"\n"}  <span className="text-sky-300">"location"</span>: <span className="text-emerald-300">"Kigali, Rwanda"</span>,{"\n"}  <span className="text-sky-300">"email"</span>: <span className="text-emerald-300">"hirwapie@gmail.com"</span>,{"\n"}  <span className="text-sky-300">"website"</span>: <span className="text-emerald-300">"https://hirwapie.vercel.app"</span>,{"\n"}  <span className="text-sky-300">"skills"</span>: [<span className="text-emerald-300">"Next.js"</span>, <span className="text-emerald-300">"Node.js"</span>, <span className="text-emerald-300">"TypeScript"</span>, <span className="text-emerald-300">"Python"</span>, <span className="text-emerald-300">"MongoDB"</span>, <span className="text-emerald-300">"PostgreSQL"</span>, <span className="text-emerald-300">"TailwindCSS"</span>,<span className="text-emerald-300">"Java"</span>, <span className="text-emerald-300">"Docker"</span>],{"\n"}  <span className="text-sky-300">"interests"</span>: [<span className="text-emerald-300">"AI"</span>, <span className="text-emerald-300">"Security"</span>, <span className="text-emerald-300">"DevOps"</span>, <span className="text-emerald-300">"GIS"</span>],{"\n"}  <span className="text-sky-300">"availableFor"</span>: [<span className="text-emerald-300">"Consulting"</span>, <span className="text-emerald-300">"Remote"</span>, <span className="text-emerald-300">"On-site (EA)"</span>],{"\n"}  <span className="text-sky-300">"currentlyBuilding"</span>: {`{`}{"\n"}    <span className="text-sky-300">"portfolio"</span>: <span className="text-emerald-300">"next-portfolio"</span>,{"\n"}    <span className="text-sky-300">"smartBidAI"</span>: <span className="text-pink-400">true</span>{"\n"}  {`}`}{"\n"}
{`}`}
            </code>
          </motion.pre>
        </div>
      </motion.div>
    </div>
  );
}
