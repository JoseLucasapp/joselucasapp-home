"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ExperienceModal } from "./ExperienceModal";

const experiences = [
  {
    company: "Bolt Group",
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQEwXFkJSkwlPA/company-logo_100_100/company-logo_100_100/0/1684187252679/bolt_group_logo?e=1768435200&v=beta&t=CyJNzPzTs2huL6Sj0J8vgjyj_6a_cgcoMI5qPjurfXA",
    role: "Senior Software Engineer",
    period: "Sep 2025 - Present · Remote (Las Vegas, NV, USA)",
    responsibilities: [
      "Designed and built scalable, high-performance systems aligned with business needs and long-term maintainability",
      "Owned backend architecture and API design, integrating complex business rules and data flows",
      "Contributed to front-end engineering and UX refinement to improve clarity and product usability",
      "Collaborated closely with cross-functional teams to define architecture, execute delivery, and ensure reliability",
      "Improved developer workflows with automation and AI-assisted tooling to increase speed and quality",
    ],
    projects: [
      "Backend architecture and modular service design for scalable product domains",
      "API design and integration across internal services and external providers",
      "Performance and reliability improvements (instrumentation, optimization, and maintainability)",
      "Developer experience initiatives: automation, tooling, and best-practice enforcement",
    ],
    technologies: [
      "Go",
      "TypeScript",
      "Node.js",
      "NestJS",
      "React",
      "Next.js",
      "PostgreSQL",
      "Docker",
      "REST APIs",
    ],
  },
  {
    company: "Freelance",
    logo: "https://logo.clearbit.com/github.com",
    role: "Freelancer Fullstack Developer",
    period: "Dec 2020 - Present · Remote",
    responsibilities: [
      "Delivered custom backend and full-stack solutions tailored to client requirements",
      "Designed and implemented secure, efficient RESTful APIs to integrate systems and automate workflows",
      "Modeled and maintained relational (MySQL/PostgreSQL) and non-relational (MongoDB) databases with performance and security in mind",
      "Set up servers, automated deployments, and used Docker containers for stable, scalable delivery",
      "Managed direct client communication, deadlines, and deliverables independently to ensure high satisfaction",
    ],
    projects: [
      "Custom REST API backends for business automation and integrations",
      "Database design and optimization for transactional and operational systems",
      "Containerized deployments and environment standardization with Docker",
      "End-to-end delivery: requirements → implementation → deployment → support",
    ],
    technologies: [
      "JavaScript",
      "TypeScript",
      "Node.js",
      "React",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Docker",
      "REST APIs",
    ],
  },
  {
    company: "WEBJUMP",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQGIMl1NzhfGzA/company-logo_100_100/B4DZWKhIOpGkAU-/0/1741785695556/webjump_logo?e=1768435200&v=beta&t=oFEEVI3wEQfOcdRBxbkpPGpWHquaXZS-eBbCSM7hQfo",
    role: "Fullstack Developer (Magento / AEM)",
    period: "Jan 2024 - Jul 2025 · San Francisco, CA, USA",
    responsibilities: [
      "Worked as a Full Stack Developer focused on Magento and Adobe Experience Manager (AEM)",
      "Published and maintained AEM content with visual consistency, functionality, and SEO alignment",
      "Built responsive interfaces from prototypes using React, CSS/LESS, and KnockoutJS",
      "Developed scalable REST APIs using Node.js, NestJS, and PHP integrated with MySQL/MariaDB",
      "Performed code reviews and optimizations to ensure quality and best practices",
      "Applied AI-based automations to optimize processes and improve delivery efficiency",
    ],
    projects: [
      "AEM content operations with SEO-focused publishing workflows",
      "Frontend implementation from prototypes for responsive experiences",
      "REST API development and integration for platform features and services",
      "AI-driven automation to accelerate repetitive tasks and improve consistency",
    ],
    technologies: [
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "NestJS",
      "PHP",
      "Magento",
      "AEM",
      "MySQL",
      "MariaDB",
      "CSS",
      "LESS",
      "KnockoutJS",
    ],
  },
  {
    company: "WEBJUMP",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQGIMl1NzhfGzA/company-logo_100_100/B4DZWKhIOpGkAU-/0/1741785695556/webjump_logo?e=1768435200&v=beta&t=oFEEVI3wEQfOcdRBxbkpPGpWHquaXZS-eBbCSM7hQfo",
    role: "Backend Developer",
    period: "Sep 2023 - Jan 2024 · San Francisco, CA, USA",
    responsibilities: [
      "Built robust, scalable, and secure RESTful APIs using NestJS with modular architecture",
      "Integrated databases and third-party services to enable reliable system communication",
      "Optimized performance and applied best practices to improve code quality and maintainability",
      "Implemented backend security measures to protect data and ensure reliability",
      "Collaborated in agile squads using Scrum and Azure DevOps for planning and delivery tracking",
    ],
    projects: [
      "Modular NestJS API foundations for scalable service development",
      "Third-party integrations and data workflows for business features",
      "Security hardening and performance optimization initiatives",
      "Agile delivery processes with consistent planning and tracking",
    ],
    technologies: [
      "TypeScript",
      "Node.js",
      "NestJS",
      "REST APIs",
      "PostgreSQL",
      "Security",
      "Azure DevOps",
      "Scrum",
    ],
  },
  {
    company: "Devnology",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQEnQpA6DV37XA/company-logo_100_100/company-logo_100_100/0/1715009789756/devnology_br_logo?e=1768435200&v=beta&t=uPu_5uYyf0RwEaFmZiXzEG7HNBwsUz347t1TR9_0Y9g",
    role: "Crawler and Backend Developer",
    period: "Sep 2022 - Jan 2023 · Full-time",
    responsibilities: [
      "Implemented scalable REST APIs to integrate airline ticket data with strong authentication, versioning, and security practices",
      "Developed smart web crawlers/bots to automate airline ticket purchasing workflows with real-time extraction",
      "Optimized processes to reduce response times and improve user convenience during flight searches",
    ],
    projects: [
      "Airline ticket integration APIs with authentication and versioning",
      "Web crawler automation for real-time search and purchasing flows",
      "Performance optimization for faster responses in critical user journeys",
    ],
    technologies: [
      "Node.js",
      "JavaScript",
      "TypeScript",
      "REST APIs",
      "MySQL",
      "Relational Databases",
      "Web Crawlers",
      "Automation",
    ],
  },
  {
    company: "Código_Font",
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQH54gJXVTxJOA/company-logo_200_200/company-logo_200_200/0/1630630318660?e=1768435200&v=beta&t=4C78XEhDZGw947TpVjB8v6ycxCkk8zEF1nDb20szF3c",
    role: "Backend Developer",
    period: "May 2021 - Aug 2022 · Remote",
    responsibilities: [
      "Developed robust and scalable RESTful APIs using JavaScript, TypeScript, Elixir, and Express.js",
      "Worked with PostgreSQL and MongoDB ensuring data integrity, performance, and maintainable queries",
      "Deployed and maintained applications in Docker containers for portability and consistency",
      "Used Git/GitHub for version control and continuous integration in team workflows",
      "Integrated services via REST APIs to enable secure and reliable communication between systems",
      "Applied technical English for documentation and collaboration in distributed environments",
    ],
    projects: [
      "Scalable API development with strong focus on performance and maintainability",
      "Database modeling and optimization for relational and document-oriented stores",
      "Containerized deployments and environment consistency using Docker",
      "Service-to-service integration with secure REST-based communication",
    ],
    technologies: [
      "JavaScript",
      "TypeScript",
      "Elixir",
      "Express.js",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "Git",
      "GitHub",
      "REST APIs",
      "CI",
    ],
  },
];

export function Experience() {
  const [selectedExperience, setSelectedExperience] = useState<
    (typeof experiences)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleClick = (experience: (typeof experiences)[0]) => {
    setSelectedExperience(experience);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedExperience(null), 200);
  };

  return (
    <>
      <section id="experience" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-[clamp(1.875rem,4vw,3rem)] tracking-tight">
              Experience
            </h2>
            <p className="mb-16 text-muted-foreground max-w-2xl">
              Senior engineering roles at leading tech companies. Click on any
              company to learn more.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => handleClick(exp)}
                  className="cursor-pointer group"
                >
                  <motion.div
                    className="flex flex-col items-center gap-4 p-8 rounded-lg transition-all duration-300 hover:bg-muted/50"
                    whileHover={{ y: -6 }}
                  >
                    {/* Larger logo */}
                    <div className="relative w-32 h-32 flex items-center justify-center">
                      <motion.img
                        src={exp.logo}
                        alt={``}
                        className="w-full h-full object-contain transition-all duration-300"
                        style={{
                          filter:
                            hoveredIndex === index
                              ? "grayscale(0%)"
                              : "grayscale(100%)",
                          opacity: hoveredIndex === index ? 1 : 0.5,
                        }}
                      />
                    </div>

                    {/* Company info */}
                    <div className="text-center">
                      <h3 className="text-foreground mb-1">{exp.company}</h3>
                      <p className="text-muted-foreground ui-text mb-1">
                        {exp.role}
                      </p>
                      <p className="text-muted-foreground/70 ui-text">
                        {exp.period}
                      </p>
                    </div>

                    {/* Hover indicator */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                      className="text-muted-foreground ui-text"
                    >
                      Click to view details
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <ExperienceModal
        isOpen={isModalOpen}
        onClose={closeModal}
        experience={selectedExperience}
      />
    </>
  );
}
