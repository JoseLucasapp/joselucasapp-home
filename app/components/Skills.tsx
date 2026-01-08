"use client";

import { motion } from "framer-motion";
import { useLang } from "../hooks/useLang";

type Lang = "pt-BR" | "en";

type SkillCategory = {
  key: string;
  category: Record<Lang, string>;
  skills: string[];
};

const copy = {
  en: { title: "Skills & Stack" },
  "pt-BR": { title: "Habilidades & Stack" },
} as const;

const skillCategories: SkillCategory[] = [
  {
    key: "languages",
    category: { en: "Languages", "pt-BR": "Linguagens" },
    skills: ["TypeScript", "JavaScript", "Python", "Go", "Java", "Elixir", "C"],
  },
  {
    key: "backend",
    category: { en: "Backend", "pt-BR": "Backend" },
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
    key: "frontend",
    category: { en: "Frontend", "pt-BR": "Frontend" },
    skills: ["React", "Next.js", "Vue", "Tailwind CSS"],
  },
  {
    key: "databases",
    category: { en: "Databases", "pt-BR": "Bancos de Dados" },
    skills: ["PostgreSQL", "MongoDB", "Redis", "ClickHouse", "DynamoDB"],
  },
  {
    key: "devops",
    category: { en: "DevOps & Cloud", "pt-BR": "DevOps & Cloud" },
    skills: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
  },
  {
    key: "tools",
    category: { en: "Tools & Practices", "pt-BR": "Ferramentas & Práticas" },
    skills: ["Git", "REST APIs", "GraphQL", "Microservices", "CI/CD", "AI"],
  },
];

export function Skills() {
  const lang = useLang();
  const t = copy[lang];

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
            {t.title}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((cat, index) => (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-foreground mb-4">{cat.category[lang]}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
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
