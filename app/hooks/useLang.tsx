"use client";

import { useEffect, useState } from "react";

type Lang = "pt-BR" | "en";

export function useLang() {
  const [lang, setLang] = useState<Lang>("pt-BR");

  useEffect(() => {
    const saved = (localStorage.getItem("lang") as Lang | null) ?? "pt-BR";
    setLang(saved);

    const handler = (e: Event) => {
      const ce = e as CustomEvent<Lang>;
      if (ce.detail) setLang(ce.detail);
    };

    window.addEventListener("app:lang", handler);
    return () => window.removeEventListener("app:lang", handler);
  }, []);

  return lang;
}
