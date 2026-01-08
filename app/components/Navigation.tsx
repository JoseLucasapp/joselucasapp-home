"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { useLang } from "../hooks/useLang";

const navLinksByLang = {
  en: [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#recommendations", label: "Recommendations" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ],
  "pt-BR": [
    { href: "#about", label: "Sobre" },
    { href: "#experience", label: "Experiência" },
    { href: "#projects", label: "Projetos" },
    { href: "#recommendations", label: "Recomendações" },
    { href: "#skills", label: "Habilidades" },
    { href: "#contact", label: "Contato" },
  ],
} as const;

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const lang = useLang();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = navLinksByLang[lang];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="text-foreground hover:opacity-70 transition-opacity ui-text"
          >
            Lucas Freitas
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/70 hover:text-foreground transition-colors ui-text"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
