"use client";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { Container } from "./Container";
import { useLang } from "../hooks/useLang";

const aboutCopy = {
  en: {
    title: "About",
    body: `I'm a Senior Full-Stack Engineer passionate about building scalable systems, clean architectures, and intuitive user
experiences. Over the years, I've worked on projects that connect technology and business, from B2B marketplaces to
educational platforms and enterprise integrations, always aiming to deliver solutions that are both technically solid and
strategically impactful. I currently focus on high-performance backends using Go, Node.js/NestJS, and TypeScript, alongside
modern front-end frameworks like React and Next.js. I also explore AI-driven development and automation to streamline
workflows, reduce friction, and elevate engineering productivity. Beyond code, I value clarity, ownership, and
adaptability, the traits that allow me to move fast, learn faster, and consistently drive real results.`,
  },
  "pt-BR": {
    title: "Sobre",
    body: `Sou um Senior Full-Stack Engineer com foco em construir sistemas escaláveis, arquiteturas limpas e experiências de usuário
intuitivas. Ao longo dos anos, atuei em projetos que conectam tecnologia e negócio, de marketplaces B2B a plataformas
educacionais e integrações enterprise, sempre buscando entregar soluções sólidas tecnicamente e relevantes de forma
estratégica. Hoje tenho foco em backends de alta performance usando Go, Node.js/NestJS e TypeScript, além de frameworks
modernos no front-end como React e Next.js. Também exploro automação e desenvolvimento guiado por IA para simplificar
fluxos, reduzir atrito e aumentar a produtividade de engenharia. Além do código, valorizo clareza, ownership e
adaptabilidade, características que me permitem entregar rápido, aprender mais rápido e gerar resultados consistentes.`,
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

            <div className="space-y-6 text-foreground/80 leading-relaxed">
              <p>{t.body}</p>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
