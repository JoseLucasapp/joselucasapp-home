"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Go", "Java", "Elixir", "C"],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express",
      "NestJS",
      "Django",
      "Flask",
      "Gin",
      "Phoenix",
    ],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Vue", "Tailwind CSS"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis", "ClickHouse", "DynamoDB"],
  },
  {
    category: "DevOps & Cloud",
    skills: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
  },
  {
    category: "Tools & Practices",
    skills: ["Git", "REST APIs", "GraphQL", "Microservices", "CI/CD", "AI"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-16 text-[clamp(1.875rem,4vw,3rem)] tracking-tight">
            Skills & Stack
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-foreground mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-card border border-border rounded-md text-foreground/80 ui-text"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
