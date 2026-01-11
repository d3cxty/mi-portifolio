"use client";

import Hero from "@/components/hero";
import TechStack from "@/components/tech-stack";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import GitHubGraph from "@/components/github-graph";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <>
      <section id="about" className="section">
        <Hero />
      </section>

      <section id="tech" className="section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container"
        >
          <TechStack />
        </motion.div>
      </section>

      <section id="projects" className="section bg-black/[.02] dark:bg-white/[.03]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container"
        >
          <Projects />
        </motion.div>
      </section>

      <section id="github" className="section bg-black/[.02] dark:bg-white/[.03]">
        <GitHubGraph />
      </section>

      <section id="contact" className="section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container"
        >
          <Contact />
        </motion.div>
      </section>
    </>
  );
}
