"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-4 px-4 py-1.5 bg-muted rounded-full">
            <span className="text-muted-foreground ui-text">@joselucasapp</span>
          </div>
          <h1 className="mb-6 text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.1] tracking-tight">
            Lucas Freitas
          </h1>
          <p className="mb-8 text-[clamp(1.125rem,2vw,1.5rem)] text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Senior Software Engineer building scalable systems and solving
            complex problems for startups and established companies.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity ui-text"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Work with me
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="#experience"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors ui-text"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View experience
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
