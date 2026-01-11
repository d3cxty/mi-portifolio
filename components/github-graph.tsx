"use client";

import { motion } from "framer-motion";

export default function GitHubGraph() {
  return (
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="h2 text-center mb-8">GitHub Contributions</h2>
        <div className="max-w-5xl mx-auto">
          {/* GitHub-style header */}
          <div className="mb-4 flex items-center justify-between text-sm">
            <a
              href="https://github.com/d3cxty"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              @d3cxty
            </a>
            <span className="mono opacity-60">Contributions in the last year</span>
          </div>
          
          {/* Contribution graph with GitHub-like styling */}
          <div className="card p-8 bg-white dark:bg-[#0d1117] border-gray-200 dark:border-gray-800">
            <img
              src="https://ghchart.rshah.org/40c463/d3cxty"
              alt="GitHub Contribution Graph"
              className="w-full h-auto"
              style={{ imageRendering: 'pixelated' }}
              loading="lazy"
            />
          </div>
          
          {/* Legend */}
          <div className="mt-3 flex items-center justify-end gap-2 text-xs opacity-60">
            <span>Less</span>
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-sm bg-gray-200 dark:bg-gray-800"></div>
              <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: '#9be9a8' }}></div>
              <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: '#40c463' }}></div>
              <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: '#30a14e' }}></div>
              <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: '#216e39' }}></div>
            </div>
            <span>More</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
