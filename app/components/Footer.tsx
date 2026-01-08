"use client";

import { useLang } from "../hooks/useLang";

const copy = {
  en: {
    rights: "All rights reserved.",
    tagline: "Built with precision and purpose.",
  },
  "pt-BR": {
    rights: "Todos os direitos reservados.",
    tagline: "Construído com precisão e propósito.",
  },
} as const;

export function Footer() {
  const lang = useLang();
  const t = copy[lang];

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground ui-text">
          © {new Date().getFullYear()} Lucas Freitas. {t.rights}
        </p>
        <p className="text-muted-foreground ui-text">{t.tagline}</p>
      </div>
    </footer>
  );
}
