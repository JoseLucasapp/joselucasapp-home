"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLang } from "../hooks/useLang";

type Lang = "pt-BR" | "en";

type Project = {
  name: string;
  description: Record<Lang, string>;
  stack: Record<Lang, string>;
  mediaType: "image" | "video";
  media: string;
  link?: string;
};

const copy = {
  en: {
    title: "Personal Projects",
    subtitle:
      "Products and platforms I am building, experimenting with and launching.",
  },
  "pt-BR": {
    title: "Projetos Pessoais",
    subtitle:
      "Produtos e plataformas que estou construindo e colocando no mercado.",
  },
} as const;

const projects: Project[] = [
  {
    name: "Aselora",
    description: {
      en: "Aselora helps local businesses launch an online storefront in minutes and start selling without complex checkout flows. Customers browse products or services and contact the store directly through WhatsApp, removing friction and making digital presence simple and accessible. This first version focuses on speed and simplicity, with many new features coming next.",
      "pt-BR":
        "O Aselora ajuda negócios locais a criarem uma vitrine online em minutos e começarem a vender sem checkout complexo. O cliente visualiza produtos ou serviços e entra em contato direto pelo WhatsApp, removendo fricção e facilitando a presença digital. A V1 é focada em simplicidade e velocidade, e muitas melhorias ainda estão por vir.",
    },
    stack: {
      en: "Next.js · Saas · Payments · Supabase",
      "pt-BR": "Next.js · Saas · Pagamentos · Supabase",
    },
    mediaType: "video",
    media: "/aselora.mp4",
    link: "https://aselora.site",
  },
  {
    name: "Zumbra",
    description: {
      en: "Zumbra is a gentle programming language designed to make code more readable and welcoming (even for those who don't code). Born from the desire to bridge the gap between logic and language, Zumbra embraces simplicity, structure, and expression. Its clean syntax and human-friendly features aim to help learners, educators, and curious minds understand what code is really saying.",
      "pt-BR":
        "O Zumbra é uma linguagem de programação gentil criada para tornar o código mais legível e acolhedor (mesmo para quem não programa). Nascida da vontade de unir lógica e linguagem, o Zumbra abraça simplicidade, estrutura e expressão. Sua sintaxe limpa e recursos amigáveis ajudam estudantes, educadores e mentes curiosas a entenderem o que o código realmente diz.",
    },
    stack: {
      en: "Go · Language Design · Open Source",
      "pt-BR": "Go · Design de Linguagem · Código Aberto",
    },
    mediaType: "image",
    media: "/zumbra.png",
    link: "https://github.com/JoseLucasapp/Zumbra-lang",
  },
];

export function PersonalProjects() {
  const lang = useLang();
  const t = copy[lang];

  return (
    <section id="projects" className="py-24 px-6">
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

          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((p, index) => (
              <a
                key={p.name}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="rounded-xl overflow-hidden bg-background border border-border hover:border-muted transition-all"
                >
                  {/* MEDIA */}
                  <div className="w-full h-60 bg-muted overflow-hidden">
                    {p.mediaType === "video" ? (
                      <video
                        src={p.media}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Image
                        src={p.media}
                        alt={p.name}
                        width={600}
                        height={240}
                        className="w-full h-full object-cover"
                        style={{ objectFit: "cover" }}
                        priority={index === 0}
                      />
                    )}
                  </div>

                  {/* CONTENT */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-semibold">{p.name}</h3>

                    <p className="text-muted-foreground">{p.description[lang]}</p>

                    <p className="text-sm text-muted-foreground pt-2">
                      {p.stack[lang]}
                    </p>
                  </div>
                </motion.div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
