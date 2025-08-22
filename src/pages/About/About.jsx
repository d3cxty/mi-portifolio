import HeroImg from "@/assets/images/hero.jpg";
import OlovaLogo from "@/assets/images/olova.png";
import React from "react";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32 text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Full-Stack Developer, Cybersecurity Enthusiast, Innovator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src="https://via.placeholder.com/1207x929"
                  className="rounded-[15px] shadow block"
                  alt="Portrait or project illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>
            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm Hirwa Pie, a passionate full-stack developer skilled in HTML, CSS, JavaScript, React, Laravel, and Python, with a keen interest in cybersecurity.{" "}
                <span className="font-bold text-white">
                  As the creator of PieBot, a Python-based voice assistant
                </span>
                , I'm dedicated to building innovative solutions that simplify tasks and enhance user experiences.
              </p>
              <p className="text-white">
                My focus is on crafting seamless, scalable web applications and securing them with tools like Nmap. I've built projects like a MERN-stack e-commerce platform and a Laravel-based bakery API, and I'm currently diving deeper into full-stack development to create robust, user-friendly systems.
              </p>
              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I'm a problem-solver and lifelong learner, driven by a passion for creating tools that empower users and developers. From building PieBot to streamline tasks to competing in hackathons, I aim to push the boundaries of technology with creativity and precision.
                  </p>
                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Hirwa pie, Creator of
                    </cite>
                    <div className="flex items-center gap-2">
                      <img
                        className="h-5 w-fit"
                        src="https://via.placeholder.com/100x20"
                        alt="PieBot Logo"
                        height="20"
                        width="auto"
                      />
                      <span className="text-white">PieBot</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}