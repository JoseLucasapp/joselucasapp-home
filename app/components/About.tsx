"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";
import { Container } from "./Container";
import { useLang } from "../hooks/useLang";

const aboutCopy = {
  en: {
    title: "About",
    body: `I'm a Senior Full-Stack Engineer focused on building scalable SaaS platforms, clean architectures, and reliable digital products that connect technology with real business outcomes. Over the years, I’ve worked across marketplaces, ATS and recruitment systems, educational platforms, ecommerce solutions, enterprise integrations, and custom internal tools, always balancing technical quality, maintainability, and speed of execution.

My strongest background is in backend and product engineering using Go, Node.js, NestJS, TypeScript, PostgreSQL, MongoDB, Redis, Docker, and cloud-based workflows, while also delivering polished user-facing experiences with React, Next.js, Tailwind, and modern front-end patterns. I've worked with payments, authentication, automation, CMS ecosystems, and AI-powered systems, including tools and integrations involving Stripe, Auth0, Clerk, WordPress, Supabase, LLM workflows, and process automation.

Beyond implementation, I care deeply about architecture, API design, developer experience, observability, performance, and shipping products end-to-end with ownership. I enjoy turning complex business rules into clear systems, improving engineering workflows with automation and AI-assisted tooling, and contributing wherever the product needs the most leverage — from backend foundations and integrations to UX refinement, technical strategy, and scalable delivery.`,
  },
  "pt-BR": {
    title: "Sobre",
    body: `Sou Engenheiro Full-Stack Sênior com foco em construir plataformas SaaS escaláveis, arquiteturas limpas e produtos digitais confiáveis que conectam tecnologia a resultados reais de negócio. Ao longo dos anos, atuei em marketplaces, sistemas de ATS e recrutamento, plataformas educacionais, soluções de e-commerce, integrações enterprise e ferramentas internas sob medida — sempre equilibrando qualidade técnica, manutenibilidade e velocidade de execução.

Minha base mais forte está em backend e product engineering usando Go, Node.js, NestJS, TypeScript, PostgreSQL, MongoDB, Redis, Docker e fluxos cloud, ao mesmo tempo em que entrego experiências bem acabadas no front-end com React, Next.js, Tailwind e padrões modernos de interface. Já trabalhei com pagamentos, autenticação, automação, ecossistemas CMS e sistemas com IA, incluindo ferramentas e integrações com Stripe, Auth0, Clerk, WordPress, Supabase, fluxos com LLMs e automação de processos.

Além da implementação, me importo bastante com arquitetura, design de APIs, developer experience, observabilidade, performance e entrega ponta a ponta com ownership. Gosto de transformar regras de negócio complexas em sistemas claros, melhorar fluxos de engenharia com automação e ferramentas assistidas por IA, e contribuir onde o produto precisa de mais alavancagem — desde fundações de backend e integrações até refinamento de UX, estratégia técnica e entrega escalável.`,
  },
} as const;

export function About() {
  const lang = useLang();
  const t = aboutCopy[lang];

  return (
    <Section id="about" muted>
      <Container>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-12 text-[clamp(1.875rem,4vw,3rem)] tracking-tight">
              {t.title}
            </h2>

            <div className="space-y-6 text-foreground/80 leading-relaxed whitespace-pre-line text-[1.02rem] md:text-[1.06rem]">
              <p>{t.body}</p>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
