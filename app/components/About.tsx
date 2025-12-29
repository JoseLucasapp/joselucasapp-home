"use client";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { Container } from "./Container";
export function About() {
  return (
    <Section id="about" muted>
      <Container>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-12 text-[clamp(1.875rem,4vw,3rem)] tracking-tight">
              About
            </h2>
            <div className="space-y-6 text-foreground/80 leading-relaxed">
              <p>
                I'm a Senior Full-Stack Engineer passionate about building
                scalable systems, clean architectures, and intuitive user
                experiences. Over the years, I've worked on projects that
                connect technology and business, from B2B marketplaces to
                educational platforms and enterprise integrations, always aiming
                to deliver solutions that are both technically solid and
                strategically impactful. I currently focus on high-performance
                backends using Go, Node.js/NestJS, and TypeScript, alongside
                modern front-end frameworks like React and Next.js. I also
                explore AI-driven development and automation to streamline
                workflows, reduce friction, and elevate engineering
                productivity. Beyond code, I value clarity, ownership, and
                adaptability, the traits that allow me to move fast, learn
                faster, and consistently drive real results.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
