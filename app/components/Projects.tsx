"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { useLang } from "../hooks/useLang";

type Lang = "pt-BR" | "en";

type Project = {
  company: string;
  project: Record<Lang, string>;
  impact: Record<Lang, string>;
  stack: Record<Lang, string>;
  logo: string;
  href?: string;
};

const copy = {
  en: {
    title: "Projects",
    subtitle:
      "Selected case-study level work across SaaS platforms, payments and AI automation.",
    open: "Open",
  },
  "pt-BR": {
    title: "Projetos",
    subtitle:
      "Projetos selecionados com nível de case study em SaaS, pagamentos e automação com IA.",
    open: "Abrir",
  },
} as const;

const projects: Project[] = [
  {
    company: "Row Seed",
    project: {
      en: "B2B Seed Marketplace",
      "pt-BR": "Marketplace B2B de Sementes",
    },
    impact: {
      en: "Built RFQ → quotes → checkout workflow with Stripe, enabling fast purchasing and predictable order flow.",
      "pt-BR":
        "Construí o fluxo RFQ → propostas → checkout com Stripe, acelerando a compra e padronizando o fluxo de pedidos.",
    },
    stack: {
      en: "NestJS · Next.js · Stripe · PostgreSQL",
      "pt-BR": "NestJS · Next.js · Stripe · PostgreSQL",
    },
    logo: "/bolt.jpeg",
  },
  {
    company: "Recruit GenAI",
    project: {
      en: "AI Hiring Platform",
      "pt-BR": "Plataforma de Recrutamento com IA",
    },
    impact: {
      en: "Implemented AI scoring and automation pipelines to speed up candidate evaluation and reduce manual review.",
      "pt-BR":
        "Implementei scoring com IA e automações para acelerar a avaliação de candidatos e reduzir revisão manual.",
    },
    stack: {
      en: "TypeScript · APIs · LLM · Automation",
      "pt-BR": "TypeScript · APIs · LLM · Automação",
    },
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUnMW7OTfazruaizhP3fAi8sLYNwQvnObt9g&s",
  },
  {
    company: "Custom Checkout",
    project: {
      en: "High-Performance Payments",
      "pt-BR": "Pagamentos de Alta Performance",
    },
    impact: {
      en: "Designed payment flows optimized for reliability and speed, focusing on edge-friendly delivery and clean UX.",
      "pt-BR":
        "Desenhei fluxos de pagamento otimizados para confiabilidade e velocidade, com entrega edge-friendly e UX limpa.",
    },
    stack: {
      en: "Next.js · Edge · Payments",
      "pt-BR": "Next.js · Edge · Pagamentos",
    },
    logo: "/bolt.jpeg",
  },
  {
    company: "Modern Mindset",
    project: {
      en: "LMS & SSO Integrations",
      "pt-BR": "Integrações de LMS & SSO",
    },
    impact: {
      en: "Delivered Auth0 SSO and LMS integrations, aligning identity + learning flows for a smoother user experience.",
      "pt-BR":
        "Entreguei integrações de SSO com Auth0 e LMS, alinhando identidade e aprendizagem para uma experiência mais fluida.",
    },
    stack: {
      en: "Next.js · WordPress · Auth0 · Teachfloor",
      "pt-BR": "Next.js · WordPress · Auth0 · Teachfloor",
    },
    logo: "/modern.jpeg",
  },
  {
    company: "123milhas",
    project: {
      en: "Airline Data APIs & Crawlers",
      "pt-BR": "APIs & Crawlers de Dados Aéreos",
    },
    impact: {
      en: "Built data extraction + API pipelines for airline ticket workflows with focus on reliability and real-time updates.",
      "pt-BR":
        "Construí extração de dados + pipelines de APIs para fluxos de passagens aéreas com foco em confiabilidade e tempo real.",
    },
    stack: {
      en: "Node.js · REST APIs · Crawlers · MySQL",
      "pt-BR": "Node.js · REST APIs · Crawlers · MySQL",
    },
    logo: "https://www.infomoney.com.br/wp-content/uploads/2023/08/269782737_1550808495278798_425803861984385634_n.png?fit=1024%2C1024&quality=50&strip=all",
  },
  {
    company: "FUSE Health",
    project: { en: "Healthcare Platform", "pt-BR": "Plataforma de Saúde" },
    impact: {
      en: "Worked on a healthcare platform with emphasis on secure delivery, cloud infrastructure and compliance mindset.",
      "pt-BR":
        "Atuei em uma plataforma de saúde com foco em entrega segura, infraestrutura cloud e mentalidade de compliance.",
    },
    stack: {
      en: "Next.js · Node.js · AWS · Compliance",
      "pt-BR": "Next.js · Node.js · AWS · Compliance",
    },
    logo: "/fuse.jpeg",
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

          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            {projects.map((p, index) => {
              const isHovered = hoveredIndex === index;
              const Wrapper = p.href ? "a" : "div";

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.03 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group"
                >
                  <Wrapper
                    {...(p.href
                      ? { href: p.href, target: "_blank", rel: "noreferrer" }
                      : {})}
                    className="block"
                  >
                    <motion.div
                      className="flex flex-col items-center justify-center gap-4 p-6 rounded-xl transition-all duration-300 hover:bg-muted/40 cursor-pointer"
                      whileHover={{ y: -4 }}
                    >
                      <div className="relative w-24 h-24 flex items-center justify-center">
                        <motion.img
                          src={p.logo}
                          alt={`${p.company} logo`}
                          className="w-full h-full object-contain transition-all duration-300"
                          style={{
                            filter: isHovered ? "grayscale(0%)" : "grayscale(100%)",
                            opacity: isHovered ? 1 : 0.6,
                          }}
                        />
                      </div>

                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: isHovered ? 1 : 0,
                          height: isHovered ? "auto" : 0,
                        }}
                        transition={{ duration: 0.25 }}
                        className="text-center overflow-hidden"
                      >
                        <h3 className="text-foreground mb-1">{p.company}</h3>
                        <h4 className="text-foreground mb-2">{p.project[lang]}</h4>

                        <p className="text-muted-foreground ui-text mb-2">
                          {p.impact[lang]}
                        </p>

                        <p className="text-muted-foreground ui-text">
                          {p.stack[lang]}
                        </p>

                        {p.href ? (
                          <div className="mt-3 inline-flex items-center gap-2 text-muted-foreground ui-text">
                            <ExternalLink className="w-4 h-4" />
                            <span>{t.open}</span>
                          </div>
                        ) : null}
                      </motion.div>
                    </motion.div>
                  </Wrapper>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}