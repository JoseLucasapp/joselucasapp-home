"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Lang = "pt-BR" | "en";

function FlagBR(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <rect width="24" height="24" rx="4" fill="#059669" />
      <path d="M12 3 L21 12 L12 21 L3 12 Z" fill="#F59E0B" />
      <circle cx="12" cy="12" r="4.2" fill="#1D4ED8" />
      <path
        d="M7.6 11.6c2.8-1.4 6-1.4 8.8 0"
        fill="none"
        stroke="#E5E7EB"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FlagUS(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <rect width="24" height="24" rx="4" fill="#ffffff" />
      {/* stripes */}
      <path
        d="M0 2h24v2H0zM0 6h24v2H0zM0 10h24v2H0zM0 14h24v2H0zM0 18h24v2H0zM0 22h24v2H0z"
        fill="#EF4444"
        opacity="0.95"
      />
      {/* canton */}
      <rect x="0" y="0" width="11.5" height="10" fill="#1D4ED8" />
      {/* stars (simple dots) */}
      <g fill="#ffffff" opacity="0.95">
        {Array.from({ length: 12 }).map((_, i) => {
          const x = 1.3 + (i % 4) * 2.4;
          const y = 1.4 + Math.floor(i / 4) * 2.6;
          return <circle key={i} cx={x} cy={y} r="0.45" />;
        })}
      </g>
    </svg>
  );
}

export function LanguageToggle() {
  const [lang, setLang] = useState<Lang>("pt-BR");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    const browser =
      typeof navigator !== "undefined" &&
      navigator.language?.toLowerCase().startsWith("pt")
        ? "pt-BR"
        : "en";

    const initial = saved ?? (browser as Lang);
    setLang(initial);

    document.documentElement.setAttribute("lang", initial);
    document.documentElement.dataset.lang = initial;
  }, []);

  const toggleLang = () => {
    const next: Lang = lang === "pt-BR" ? "en" : "pt-BR";
    setLang(next);
    localStorage.setItem("lang", next);
    document.documentElement.setAttribute("lang", next);
    document.documentElement.dataset.lang = next;

    window.dispatchEvent(new CustomEvent("app:lang", { detail: next }));
  };

  return (
    <motion.button
      onClick={toggleLang}
      className="p-2 rounded-lg hover:bg-muted transition-colors inline-flex items-center gap-2"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle language"
      title={lang === "pt-BR" ? "Português (Brasil)" : "English"}
    >
      {lang === "pt-BR" ? (
        <FlagBR className="w-5 h-5" />
      ) : (
        <FlagUS className="w-5 h-5" />
      )}
      <span className="text-xs text-foreground/70 ui-text hidden lg:inline">
        {lang === "pt-BR" ? "PT-BR" : "EN"}
      </span>
    </motion.button>
  );
}
