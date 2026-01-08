"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";
import { useLang } from "../hooks/useLang";

type Lang = "pt-BR" | "en";
type I18n<T> = Record<Lang, T>;

const modalCopy = {
  en: {
    role: "Role",
    responsibilities: "Key Responsibilities",
    projects: "Main Projects Delivered",
    tech: "Technologies Used",
  },
  "pt-BR": {
    role: "Cargo",
    responsibilities: "Principais responsabilidades",
    projects: "Principais entregas",
    tech: "Tecnologias",
  },
} as const;

interface ExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
  experience: {
    company: string;
    logo: string;
    role: I18n<string>;
    period: I18n<string>;
    responsibilities: I18n<string[]>;
    projects: I18n<string[]>;
    technologies: string[];
  } | null;
}

export function ExperienceModal({
  isOpen,
  onClose,
  experience,
}: ExperienceModalProps) {
  const lang = useLang();
  const t = modalCopy[lang];

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!experience) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="bg-card border border-border rounded-lg shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-card border-b border-border px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                    <img
                      src={experience.logo}
                      alt={`${experience.company} logo`}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-foreground">{experience.company}</h3>
                    <p className="text-muted-foreground ui-text">
                      {experience.period[lang]}
                    </p>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>

              <div className="p-6 space-y-6">
                <div>
                  <h4 className="text-foreground mb-2">{t.role}</h4>
                  <p className="text-muted-foreground">
                    {experience.role[lang]}
                  </p>
                </div>

                <div>
                  <h4 className="text-foreground mb-3">{t.responsibilities}</h4>
                  <ul className="space-y-2">
                    {experience.responsibilities[lang].map((resp, index) => (
                      <li key={index} className="flex gap-3 text-foreground/80">
                        <span className="text-muted-foreground mt-1.5">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-foreground mb-3">{t.projects}</h4>
                  <ul className="space-y-2">
                    {experience.projects[lang].map((project, index) => (
                      <li key={index} className="flex gap-3 text-foreground/80">
                        <span className="text-muted-foreground mt-1.5">•</span>
                        <span>{project}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-foreground mb-3">{t.tech}</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-muted text-foreground/80 rounded-md ui-text"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
