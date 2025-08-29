"use client";

import Link from "next/link";
import ThemeToggle from "./theme-toggle";

const items = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#tech", label: "Tech Stack" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-black/30 border-b border-black/5 dark:border-white/10">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="font-bold">Hirwapie.dev</Link>
        <nav className="hidden md:flex items-center gap-6">
          {items.map(i => (
            <a key={i.href} href={i.href} className="hover:underline underline-offset-4">{i.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a className="btn" href="/resume.pdf" target="_blank" rel="noreferrer">View Resume</a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
