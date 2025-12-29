"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type Project = {
  company: string;
  project: string;
  stack: string;
  logo: string;
};

const projects: Project[] = [
  // WEBJUMP
  {
    company: "Nestlé Até Você",
    project: "Fullstack Development",
    stack: "JavaScript · ReactJS",
    logo: "https://media.licdn.com/dms/image/v2/D4D2DAQFBYi1Ze4egXA/profile-treasury-image-shrink_160_160/B4DZflrgbLHMAs-/0/1751905077920?e=1767646800&v=beta&t=b_RlT3b38QYUs7QyBwidiw6YnBKFw66xvqu8AqI0rw0",
  },
  {
    company: "Lumisfera",
    project: "Front-end Interfaces",
    stack: "React · JavaScript · CSS/LESS",
    logo: "https://media.licdn.com/dms/image/v2/D4D2DAQFTvad3PVngLA/profile-treasury-image-shrink_160_160/B4DZflrdzuHMAs-/0/1751905066779?e=1767646800&v=beta&t=sU62Rb3ZnK_jPE5R-lF1dbOHn5wriozOb8Wgo6nmHVE",
  },
  {
    company: "Inspiralli",
    project: "Web Experience Platform",
    stack: "Front-end · UI · SEO Alignment",
    logo: "https://media.licdn.com/dms/image/v2/D4D2DAQE-09DoByU8hQ/profile-treasury-image-shrink_160_160/B4DZflrataGkAk-/0/1751905055010?e=1767646800&v=beta&t=GWfIBytDQy1bwnOxNlzhu8YxqpNEtlNlmIEWKhRVK1Q",
  },
  {
    company: "Baby & Me",
    project: "E-commerce UI",
    stack: "Front-end · PHP · UI Implementation",
    logo: "https://media.licdn.com/dms/image/v2/D4D2DAQEAKCXhpfPNpw/profile-treasury-image-shrink_160_160/B4DZflrSFRHAAo-/0/1751905018663?e=1767646800&v=beta&t=KRGTJTc1daqjn9vIFBCo7mCNIpB3WoQZjVsD5LKNiHA",
  },
  {
    company: "CCR / Movida",
    project: "AEM Digital Content",
    stack: "AEM · JavaScript · Automation",
    logo: "https://media.licdn.com/dms/image/v2/D4D2DAQFRGgnIep0e7A/profile-treasury-image-shrink_160_160/B4DZflrYF1G8As-/0/1751905044012?e=1767646800&v=beta&t=68-ZWKR5aX_Ca4yTtH-Roz8O4d6Ddrad6ezgJjxOQkI",
  },

  // DEVNOLOGY
  {
    company: "123milhas",
    project: "Airline Data APIs & Crawlers",
    stack: "Node.js · REST APIs · Crawlers · MySQL",
    logo: "https://media.licdn.com/dms/image/v2/D4D2DAQH84OnKy6aC5A/profile-treasury-image-shrink_160_160/B4DZpcIo1VJMAo-/0/1762482360071?e=1767646800&v=beta&t=c2GlPwIdM0YE3PnMUwwDeKNYkKwcozzOyEzwdidl1VY",
  },

  // CÓDIGO_FONT
  {
    company: "Sim Mobi",
    project: "Mobility App Backend",
    stack: "TypeScript · APIs · PostgreSQL · MongoDB",
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQH54gJXVTxJOA/company-logo_100_100/company-logo_100_100/0/1630630318660?e=1768435200&v=beta&t=74CuE6IvhfdlhHbSVBq4SFCD8tYqswQEn6-Ge7vUUFI",
  },
  {
    company: "e-Arbo",
    project: "Forestry Management Platform",
    stack: "TypeScript · Express · PostgreSQL · Docker",
    logo: "https://e-arbo-front.vercel.app/static/media/logoLogin.5872b18691753b2f32e7.png",
  },

  // BOLT GROUP
  {
    company: "Modern Mindset",
    project: "LMS & SSO Integrations",
    stack: "Next.js · WordPress · Auth0 · Teachfloor",
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQGrKQUPiQH8lw/company-logo_100_100/B4EZc7dodZHgAU-/0/1749049314385/modern_mindset_logo?e=1768435200&v=beta&t=QHx4eHVCwwGS-WaI4O7Iwvw-YvVpa5Q_PfL-CdA_1UY",
  },
  {
    company: "FUSE Health",
    project: "Healthcare Platform",
    stack: "Next.js · Node.js · AWS · SOC2/HIPAA",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQEdHAFdzTAjag/company-logo_100_100/B56ZnE3mIBKMAQ-/0/1759944532898/fusehealth_inc_logo?e=1768435200&v=beta&t=itgR35MrdDbJxyjHd_gDMCLL13vJ26SYLo3y0cvB58g",
  },
  {
    company: "Recruit GenAI",
    project: "AI Hiring Platform",
    stack: "TypeScript · APIs · LLM · Automation",
    logo: "data:image/png;base64,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",
  },
  {
    company: "Row Seed",
    project: "B2B Seed Marketplace",
    stack: "NestJS · Next.js · Stripe · PostgreSQL",
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQEwXFkJSkwlPA/company-logo_100_100/company-logo_100_100/0/1684187252679/bolt_group_logo?e=1768435200&v=beta&t=CyJNzPzTs2huL6Sj0J8vgjyj_6a_cgcoMI5qPjurfXA",
  },
  {
    company: "Custom Checkout",
    project: "High-Performance Payments",
    stack: "Next.js · Edge · Payments",
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQEwXFkJSkwlPA/company-logo_100_100/company-logo_100_100/0/1684187252679/bolt_group_logo?e=1768435200&v=beta&t=CyJNzPzTs2huL6Sj0J8vgjyj_6a_cgcoMI5qPjurfXA",
  },
];

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-[clamp(1.875rem,4vw,3rem)] tracking-tight">
            Projects
          </h2>
          <p className="mb-16 text-muted-foreground max-w-2xl">
            Selected projects delivered for global brands, startups and
            high-growth platforms.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.03 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group cursor-pointer"
              >
                <motion.div
                  className="flex flex-col items-center justify-center gap-4 p-6 rounded-xl transition-all duration-300 hover:bg-muted/40"
                  whileHover={{ y: -4 }}
                >
                  {/* Logo */}
                  <div className="relative w-24 h-24 flex items-center justify-center">
                    <motion.img
                      src={project.logo}
                      alt={`${project.company} logo`}
                      className="w-full h-full object-contain transition-all duration-300"
                      style={{
                        filter:
                          hoveredIndex === index
                            ? "grayscale(0%)"
                            : "grayscale(100%)",
                        opacity: hoveredIndex === index ? 1 : 0.6,
                      }}
                    />
                  </div>

                  {/* Hover content */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      height: hoveredIndex === index ? "auto" : 0,
                    }}
                    transition={{ duration: 0.25 }}
                    className="text-center overflow-hidden"
                  >
                    <h3 className="text-foreground mb-1">{project.project}</h3>
                    <p className="text-muted-foreground ui-text">
                      {project.stack}
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
