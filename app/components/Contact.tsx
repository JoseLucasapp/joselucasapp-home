"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, LetterText } from "lucide-react";
import { Container } from "./Container";
import { Section } from "./Section";
import { useLang } from "../hooks/useLang";

const copy = {
  en: {
    title: "Let's work together",
    subtitle:
      "If you're looking for a senior engineer who can deliver results, let's connect.",
    labels: {
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      resume: "Resume",
    },
  },
  "pt-BR": {
    title: "Vamos trabalhar juntos",
    subtitle:
      "Se você busca um engenheiro sênior que entrega resultado, vamos conversar.",
    labels: {
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      resume: "Curriculo",
    },
  },
} as const;

export function Contact() {
  const lang = useLang();
  const t = copy[lang];

  const contactLinks = [
    {
      icon: Mail,
      label: t.labels.email,
      value: "jlgf.profissional@gmail.com",
      href: "mailto:jlgf.profissional@gmail.com",
    },
    {
      icon: Linkedin,
      label: t.labels.linkedin,
      value: "/in/jlgf524150",
      href: "https://www.linkedin.com/in/jlgf524150",
    },
    {
      icon: Github,
      label: t.labels.github,
      value: "@joselucasapp",
      href: "https://github.com/joselucasapp",
    },
    {
      icon: LetterText,
      label: t.labels.resume,
      value: "",
      href: "/resume/eng.pdf",
    },
  ];

  return (
    <Section id="contact" muted>
      <Container>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="mb-6 text-[clamp(1.875rem,4vw,3rem)] tracking-tight">
              {t.title}
            </h2>
            <p className="mb-12 text-muted-foreground text-lg max-w-xl mx-auto">
              {t.subtitle}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center gap-3 p-6 bg-card border border-border rounded-lg hover:border-foreground/20 transition-colors"
                >
                  <link.icon className="w-6 h-6 text-foreground" />
                  <div>
                    <p className="text-muted-foreground mb-1 ui-text">
                      {link.label}
                    </p>
                    <p className="text-foreground ui-text">{link.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
