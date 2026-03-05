"use client";

import { motion } from "framer-motion";
import { useLang } from "../hooks/useLang";

type Lang4 = "pt-BR" | "en";

type SkillCategory = {
  key: string;
  category: Record<Lang4, string>;
  core: string[];
  secondary: string[];
};

const copy2 = {
  en: { title: "Skills & Stack", core: "Core", secondary: "Also worked with" },
  "pt-BR": {
    title: "Habilidades & Stack",
    core: "Core",
    secondary: "Também uso",
  },
} as const;

const skillCategories: SkillCategory[] = [
  {
    key: "core-stack",
    category: { en: "Core Stack", "pt-BR": "Stack Principal" },
    core: [
      "Go",
      "TypeScript",
      "Node.js",
      "NestJS",
      "React",
      "Next.js",
      "PostgreSQL",
      "Docker",
    ],
    secondary: ["MongoDB", "Redis", "AWS", "REST APIs", "CI/CD"],
  },
  {
    key: "backend",
    category: { en: "Backend", "pt-BR": "Backend" },
    core: ["Go (Gin)", "Node.js", "NestJS", "PostgreSQL", "Redis"],
    secondary: ["Express", "Supabase", "MongoDB", "Django", "Flask", "Phoenix"],
  },
  {
    key: "frontend",
    category: { en: "Frontend", "pt-BR": "Frontend" },
    core: ["React", "Next.js", "Tailwind CSS"],
    secondary: ["Vue", "Vite", "CSS/LESS", "KnockoutJS"],
  },
  {
    key: "payments",
    category: { en: "Payments & Identity", "pt-BR": "Pagamentos & Identidade" },
    core: ["Stripe", "Auth0"],
    secondary: ["Clerk", "NMI", "Affirm", "EasyPayDirect"],
  },
  {
    key: "engineering",
    category: {
      en: "Engineering Practices",
      "pt-BR": "Práticas de Engenharia",
    },
    core: ["Clean Architecture", "API Design", "Observability", "Performance"],
    secondary: [
      "Microservices",
      "UML",
      "Swagger/OpenAPI",
      "Security Hardening",
    ],
  },
  {
    key: "ai",
    category: { en: "AI & Automation", "pt-BR": "IA & Automação" },
    core: ["LLM Integrations", "Automation Tooling"],
    secondary: ["ChatGPT", "Claude", "Cursor", "Lovable"],
  },
];

function SkillPills({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((skill) => (
        <span
          key={skill}
          className="px-3 py-1.5 bg-card border border-border rounded-md text-foreground/80 ui-text"
        >
          {skill}
        </span>
      ))}
    </div>
  );
}

export function Skills() {
  const lang = useLang();
  const t = copy2[lang];

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
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="space-y-4"
              >
                <h3 className="text-foreground">{cat.category[lang]}</h3>

                <div className="space-y-2">
                  <p className="text-muted-foreground ui-text">{t.core}</p>
                  <SkillPills items={cat.core} />
                </div>

                <div className="space-y-2">
                  <p className="text-muted-foreground ui-text">{t.secondary}</p>
                  <SkillPills items={cat.secondary} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
