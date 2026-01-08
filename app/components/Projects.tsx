"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useLang } from "../hooks/useLang";

type Lang = "pt-BR" | "en";

type Project = {
  company: string;
  project: Record<Lang, string>;
  stack: Record<Lang, string>;
  logo: string;
};

const copy = {
  en: {
    title: "Projects",
    subtitle:
      "Selected projects delivered for global brands, startups and high-growth platforms.",
  },
  "pt-BR": {
    title: "Projetos",
    subtitle:
      "Projetos selecionados entregues para marcas globais, startups e plataformas de alto crescimento.",
  },
} as const;

const projects: Project[] = [
  {
    company: "Nestlé Até Você",
    project: {
      en: "Fullstack Development",
      "pt-BR": "Desenvolvimento Fullstack",
    },
    stack: {
      en: "JavaScript · ReactJS",
      "pt-BR": "JavaScript · ReactJS",
    },
    logo: "https://www.nestleatevoce.com.br/new_logo_bees-rNo.png",
  },
  {
    company: "Lumisfera",
    project: {
      en: "Front-end Interfaces",
      "pt-BR": "Interfaces Front-end",
    },
    stack: {
      en: "React · JavaScript · CSS/LESS",
      "pt-BR": "React · JavaScript · CSS/LESS",
    },
    logo: "https://lumisfera.com.br/static/version1767867858/frontend/FTD/lumi/pt_BR/images/logo.svg",
  },
  {
    company: "Inspiralli",
    project: {
      en: "Web Experience Platform",
      "pt-BR": "Plataforma de Experiência Web",
    },
    stack: {
      en: "Front-end · UI · SEO Alignment",
      "pt-BR": "Front-end · UI · Alinhamento SEO",
    },
    logo: "https://jornaldobras.com.br/images/noticias/6943/23024351_logo_inspi.png.png",
  },
  {
    company: "Baby & Me",
    project: {
      en: "E-commerce UI",
      "pt-BR": "UI de E-commerce",
    },
    stack: {
      en: "Front-end · PHP · UI Implementation",
      "pt-BR": "Front-end · PHP · Implementação de UI",
    },
    logo: "https://www.lojafamilynes.com.br/static/version1765974717/frontend/Webjump/theme-frontend-familynes/default/images/logo.png",
  },
  {
    company: "CCR / Motiva",
    project: {
      en: "AEM Digital Content",
      "pt-BR": "Conteúdo Digital no AEM",
    },
    stack: {
      en: "AEM · JavaScript · Automation",
      "pt-BR": "AEM · JavaScript · Automação",
    },
    logo: "https://media-genial-analisa.genialinvestimentos.com.br/wp-content/uploads/2021/12/01132437/motiva-logo-png-1.png",
  },

  {
    company: "123milhas",
    project: {
      en: "Airline Data APIs & Crawlers",
      "pt-BR": "APIs & Crawlers de Dados Aéreos",
    },
    stack: {
      en: "Node.js · REST APIs · Crawlers · MySQL",
      "pt-BR": "Node.js · REST APIs · Crawlers · MySQL",
    },
    logo: "https://123milhas.com/_next/image?url=%2Flogo%2Flogo-123-horizontal.png&w=1920&q=75",
  },

  {
    company: "Sim Mobi",
    project: {
      en: "Mobility App Backend",
      "pt-BR": "Backend para App de Mobilidade",
    },
    stack: {
      en: "TypeScript · APIs · PostgreSQL · MongoDB",
      "pt-BR": "TypeScript · APIs · PostgreSQL · MongoDB",
    },
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQH54gJXVTxJOA/company-logo_100_100/company-logo_100_100/0/1630630318660?e=1768435200&v=beta&t=74CuE6IvhfdlhHbSVBq4SFCD8tYqswQEn6-Ge7vUUFI",
  },
  {
    company: "e-Arbo",
    project: {
      en: "Forestry Management Platform",
      "pt-BR": "Plataforma de Gestão Florestal",
    },
    stack: {
      en: "TypeScript · Express · PostgreSQL · Docker",
      "pt-BR": "TypeScript · Express · PostgreSQL · Docker",
    },
    logo: "https://e-arbo-front.vercel.app/static/media/logoLogin.5872b18691753b2f32e7.png",
  },

  {
    company: "Modern Mindset",
    project: {
      en: "LMS & SSO Integrations",
      "pt-BR": "Integrações de LMS & SSO",
    },
    stack: {
      en: "Next.js · WordPress · Auth0 · Teachfloor",
      "pt-BR": "Next.js · WordPress · Auth0 · Teachfloor",
    },
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQGrKQUPiQH8lw/company-logo_100_100/B4EZc7dodZHgAU-/0/1749049314385/modern_mindset_logo?e=1768435200&v=beta&t=QHx4eHVCwwGS-WaI4O7Iwvw-YvVpa5Q_PfL-CdA_1UY",
  },
  {
    company: "FUSE Health",
    project: {
      en: "Healthcare Platform",
      "pt-BR": "Plataforma de Saúde",
    },
    stack: {
      en: "Next.js · Node.js · AWS · SOC2/HIPAA",
      "pt-BR": "Next.js · Node.js · AWS · SOC2/HIPAA",
    },
    logo: "https://media.licdn.com/dms/image/v2/D560BAQEdHAFdzTAjag/company-logo_100_100/B56ZnE3mIBKMAQ-/0/1759944532898/fusehealth_inc_logo?e=1768435200&v=beta&t=itgR35MrdDbJxyjHd_gDMCLL13vJ26SYLo3y0cvB58g",
  },
  {
    company: "Recruit GenAI",
    project: {
      en: "AI Hiring Platform",
      "pt-BR": "Plataforma de Recrutamento com IA",
    },
    stack: {
      en: "TypeScript · APIs · LLM · Automation",
      "pt-BR": "TypeScript · APIs · LLM · Automação",
    },
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUnMW7OTfazruaizhP3fAi8sLYNwQvnObt9g&s",
  },
  {
    company: "Row Seed",
    project: {
      en: "B2B Seed Marketplace",
      "pt-BR": "Marketplace B2B de Sementes",
    },
    stack: {
      en: "NestJS · Next.js · Stripe · PostgreSQL",
      "pt-BR": "NestJS · Next.js · Stripe · PostgreSQL",
    },
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQEwXFkJSkwlPA/company-logo_100_100/company-logo_100_100/0/1684187252679/bolt_group_logo?e=1768435200&v=beta&t=CyJNzPzTs2huL6Sj0J8vgjyj_6a_cgcoMI5qPjurfXA",
  },
  {
    company: "Custom Checkout",
    project: {
      en: "High-Performance Payments",
      "pt-BR": "Pagamentos de Alta Performance",
    },
    stack: {
      en: "Next.js · Edge · Payments",
      "pt-BR": "Next.js · Edge · Pagamentos",
    },
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQEwXFkJSkwlPA/company-logo_100_100/company-logo_100_100/0/1684187252679/bolt_group_logo?e=1768435200&v=beta&t=CyJNzPzTs2huL6Sj0J8vgjyj_6a_cgcoMI5qPjurfXA",
  },
];

export function Projects() {
  const lang = useLang();
  const t = copy[lang];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-[clamp(1.875rem,4vw,3rem)] tracking-tight">
            {t.title}
          </h2>
          <p className="mb-16 text-muted-foreground max-w-2xl">{t.subtitle}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {projects.map((p, index) => (
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
                  <div className="relative w-24 h-24 flex items-center justify-center">
                    <motion.img
                      src={p.logo}
                      alt={`${p.company} logo`}
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

                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      height: hoveredIndex === index ? "auto" : 0,
                    }}
                    transition={{ duration: 0.25 }}
                    className="text-center overflow-hidden"
                  >
                    <h3 className="text-foreground mb-1">{p.project[lang]}</h3>
                    <p className="text-muted-foreground ui-text">
                      {p.stack[lang]}
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
