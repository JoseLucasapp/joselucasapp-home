/* =========================================================
   Experience.tsx (COMPLETO)
   - Mantém TODAS as suas experiências (Bolt, Freelance, Webjump x2, Devnology, Código_Font)
   - Adiciona highlights em TODAS (para não quebrar o modal)
   - Tipagem explícita (sem “as const” quebrando com strings)
   ========================================================= */

"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ExperienceModal } from "./ExperienceModal";
import { useLang } from "../hooks/useLang";

type Lang = "pt-BR" | "en";
type I18n<T> = Record<Lang, T>;

export type ExperienceItem = {
  company: string;
  logo: string;
  role: I18n<string>;
  period: I18n<string>;
  highlights: I18n<string[]>;
  responsibilities: I18n<string[]>;
  projects: I18n<string[]>;
  technologies: string[];
};

export const experiences: ExperienceItem[] = [
  {
    company: "Bolt Group",
    logo: "/bolt.jpeg",
    role: {
      en: "Senior Software Engineer",
      "pt-BR": "Engenheiro de Software Sênior",
    },
    period: {
      en: "Sep 2025 - Present · Remote (Las Vegas, NV, USA)",
      "pt-BR": "Set 2025 - Atual · Remoto (Las Vegas, NV, EUA)",
    },
    highlights: {
      en: [
        "Owned backend architecture and API design for scalable product domains",
        "Improved reliability and delivery speed through instrumentation, automation and DX tooling",
        "Built integrations and data flows across services with strong focus on maintainability",
      ],
      "pt-BR": [
        "Assumi arquitetura de backend e design de APIs para domínios escaláveis do produto",
        "Melhorei confiabilidade e velocidade de entrega com instrumentação, automação e DX tooling",
        "Construí integrações e fluxos de dados entre serviços com foco em manutenibilidade",
      ],
    },
    responsibilities: {
      en: [
        "Designed and built scalable, high-performance systems aligned with business needs and long-term maintainability",
        "Owned backend architecture and API design, integrating complex business rules and data flows",
        "Contributed to front-end engineering and UX refinement to improve clarity and product usability",
        "Collaborated closely with cross-functional teams to define architecture, execute delivery, and ensure reliability",
        "Improved developer workflows with automation and AI-assisted tooling to increase speed and quality",
      ],
      "pt-BR": [
        "Projetei e desenvolvi sistemas escaláveis e de alta performance, alinhados às necessidades do negócio e à manutenção de longo prazo",
        "Assumi a arquitetura de backend e o design de APIs, integrando regras de negócio complexas e fluxos de dados",
        "Contribuí com engenharia de front-end e refinamento de UX para melhorar clareza e usabilidade do produto",
        "Colaborei de perto com times multidisciplinares para definir arquitetura, executar entregas e garantir confiabilidade",
        "Melhorei fluxos de trabalho de desenvolvimento com automações e ferramentas assistidas por IA para aumentar velocidade e qualidade",
      ],
    },
    projects: {
      en: [
        "Backend architecture and modular service design for scalable product domains",
        "API design and integration across internal services and external providers",
        "Performance and reliability improvements (instrumentation, optimization, and maintainability)",
        "Developer experience initiatives: automation, tooling, and best-practice enforcement",
      ],
      "pt-BR": [
        "Arquitetura de backend e design modular de serviços para domínios escaláveis",
        "Design de APIs e integrações entre serviços internos e provedores externos",
        "Melhorias de performance e confiabilidade (instrumentação, otimização e manutenibilidade)",
        "Iniciativas de Developer Experience: automação, tooling e adoção de boas práticas",
      ],
    },
    technologies: [
      "Go",
      "TypeScript",
      "Node.js",
      "NestJS",
      "React",
      "Next.js",
      "PostgreSQL",
      "Docker",
      "REST APIs",
    ],
  },

  {
    company: "Freelance",
    logo: "https://logo.clearbit.com/github.com",
    role: {
      en: "Freelancer Fullstack Developer",
      "pt-BR": "Desenvolvedor Fullstack Freelancer",
    },
    period: {
      en: "Dec 2020 - Present · Remote",
      "pt-BR": "Dez 2020 - Atual · Remoto",
    },
    highlights: {
      en: [
        "Delivered end-to-end solutions: requirements → architecture → implementation → deployment",
        "Built and integrated REST APIs for business automation and system interoperability",
        "Owned client communication, scope, and delivery with high autonomy",
      ],
      "pt-BR": [
        "Entreguei soluções ponta a ponta: requisitos → arquitetura → implementação → deploy",
        "Criei e integrei APIs REST para automação e interoperabilidade de sistemas",
        "Assumi comunicação com cliente, escopo e entregas com alta autonomia",
      ],
    },
    responsibilities: {
      en: [
        "Delivered custom backend and full-stack solutions tailored to client requirements",
        "Designed and implemented secure, efficient RESTful APIs to integrate systems and automate workflows",
        "Modeled and maintained relational (MySQL/PostgreSQL) and non-relational (MongoDB) databases with performance and security in mind",
        "Set up servers, automated deployments, and used Docker containers for stable, scalable delivery",
        "Managed direct client communication, deadlines, and deliverables independently to ensure high satisfaction",
      ],
      "pt-BR": [
        "Entreguei soluções sob medida de backend e full-stack alinhadas às necessidades do cliente",
        "Projetei e implementei APIs REST seguras e eficientes para integrações e automações de processos",
        "Modelei e mantive bancos relacionais (MySQL/PostgreSQL) e não-relacionais (MongoDB) com foco em performance e segurança",
        "Configurei servidores, automatizei deploys e usei containers Docker para entregas estáveis e escaláveis",
        "Gerenciei comunicação direta com clientes, prazos e entregas de forma independente para garantir alta satisfação",
      ],
    },
    projects: {
      en: [
        "Custom REST API backends for business automation and integrations",
        "Database design and optimization for transactional and operational systems",
        "Containerized deployments and environment standardization with Docker",
        "End-to-end delivery: requirements → implementation → deployment → support",
      ],
      "pt-BR": [
        "Backends com APIs REST sob medida para automação e integrações de negócio",
        "Design e otimização de bancos de dados para sistemas transacionais e operacionais",
        "Deploys containerizados e padronização de ambientes com Docker",
        "Entrega ponta a ponta: requisitos → implementação → deploy → suporte",
      ],
    },
    technologies: [
      "JavaScript",
      "TypeScript",
      "Node.js",
      "React",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Docker",
      "REST APIs",
    ],
  },

  {
    company: "WEBJUMP",
    logo: "/webjump.jpeg",
    role: {
      en: "Fullstack Developer (Magento / AEM)",
      "pt-BR": "Desenvolvedor Fullstack (Magento / AEM)",
    },
    period: {
      en: "Jan 2024 - Jul 2025 · San Francisco, CA, USA",
      "pt-BR": "Jan 2024 - Jul 2025 · San Francisco, CA, EUA",
    },
    highlights: {
      en: [
        "Built and maintained ecommerce/AEM experiences with SEO-aware publishing workflows",
        "Delivered frontend from prototypes with strong UI consistency and performance mindset",
        "Developed REST APIs and integrations using NestJS/PHP with MySQL/MariaDB",
      ],
      "pt-BR": [
        "Construí e mantive experiências ecommerce/AEM com workflow de publicação alinhado a SEO",
        "Entreguei front-end a partir de protótipos com consistência visual e mentalidade de performance",
        "Desenvolvi APIs REST e integrações com NestJS/PHP e MySQL/MariaDB",
      ],
    },
    responsibilities: {
      en: [
        "Worked as a Full Stack Developer focused on Magento and Adobe Experience Manager (AEM)",
        "Published and maintained AEM content with visual consistency, functionality, and SEO alignment",
        "Built responsive interfaces from prototypes using React, CSS/LESS, and KnockoutJS",
        "Developed scalable REST APIs using Node.js, NestJS, and PHP integrated with MySQL/MariaDB",
        "Performed code reviews and optimizations to ensure quality and best practices",
        "Applied AI-based automations to optimize processes and improve delivery efficiency",
      ],
      "pt-BR": [
        "Atuei como Desenvolvedor Full Stack com foco em Magento e Adobe Experience Manager (AEM)",
        "Publiquei e mantive conteúdo no AEM com consistência visual, funcionalidade e alinhamento com SEO",
        "Construí interfaces responsivas a partir de protótipos usando React, CSS/LESS e KnockoutJS",
        "Desenvolvi APIs REST escaláveis usando Node.js, NestJS e PHP, integradas com MySQL/MariaDB",
        "Realizei code reviews e otimizações para garantir qualidade e boas práticas",
        "Apliquei automações com IA para otimizar processos e aumentar eficiência de entrega",
      ],
    },
    projects: {
      en: [
        "AEM content operations with SEO-focused publishing workflows",
        "Frontend implementation from prototypes for responsive experiences",
        "REST API development and integration for platform features and services",
        "AI-driven automation to accelerate repetitive tasks and improve consistency",
      ],
      "pt-BR": [
        "Operações de conteúdo em AEM com workflow de publicação focado em SEO",
        "Implementação de front-end a partir de protótipos para experiências responsivas",
        "Desenvolvimento e integração de APIs REST para features e serviços da plataforma",
        "Automação guiada por IA para acelerar tarefas repetitivas e aumentar consistência",
      ],
    },
    technologies: [
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "NestJS",
      "PHP",
      "Magento",
      "AEM",
      "MySQL",
      "MariaDB",
      "CSS",
      "LESS",
      "KnockoutJS",
    ],
  },

  {
    company: "WEBJUMP",
    logo: "/webjump.jpeg",
    role: {
      en: "Backend Developer",
      "pt-BR": "Desenvolvedor Backend",
    },
    period: {
      en: "Sep 2023 - Jan 2024 · San Francisco, CA, USA",
      "pt-BR": "Set 2023 - Jan 2024 · San Francisco, CA, EUA",
    },
    highlights: {
      en: [
        "Built secure, modular NestJS APIs with strong focus on maintainability and scalability",
        "Delivered integrations and data workflows across internal and third-party services",
        "Improved API quality through performance optimization and backend hardening practices",
      ],
      "pt-BR": [
        "Construí APIs NestJS seguras e modulares com foco em manutenibilidade e escala",
        "Entreguei integrações e fluxos de dados entre serviços internos e terceiros",
        "Melhorei qualidade das APIs com otimização de performance e hardening no backend",
      ],
    },
    responsibilities: {
      en: [
        "Built robust, scalable, and secure RESTful APIs using NestJS with modular architecture",
        "Integrated databases and third-party services to enable reliable system communication",
        "Optimized performance and applied best practices to improve code quality and maintainability",
        "Implemented backend security measures to protect data and ensure reliability",
        "Collaborated in agile squads using Scrum and Azure DevOps for planning and delivery tracking",
      ],
      "pt-BR": [
        "Construí APIs REST robustas, escaláveis e seguras usando NestJS com arquitetura modular",
        "Integrei bancos de dados e serviços de terceiros para comunicação confiável entre sistemas",
        "Otimizei performance e apliquei boas práticas para melhorar qualidade e manutenibilidade do código",
        "Implementei medidas de segurança no backend para proteger dados e garantir confiabilidade",
        "Trabalhei em squads ágeis com Scrum e Azure DevOps para planejamento e acompanhamento de entregas",
      ],
    },
    projects: {
      en: [
        "Modular NestJS API foundations for scalable service development",
        "Third-party integrations and data workflows for business features",
        "Security hardening and performance optimization initiatives",
        "Agile delivery processes with consistent planning and tracking",
      ],
      "pt-BR": [
        "Fundação de APIs NestJS modulares para desenvolvimento escalável de serviços",
        "Integrações com terceiros e fluxos de dados para funcionalidades de negócio",
        "Iniciativas de hardening de segurança e otimização de performance",
        "Processos de entrega ágil com planejamento e tracking consistentes",
      ],
    },
    technologies: [
      "TypeScript",
      "Node.js",
      "NestJS",
      "REST APIs",
      "PostgreSQL",
      "Security",
      "Azure DevOps",
      "Scrum",
    ],
  },

  {
    company: "Devnology",
    logo: "/devnology.jpeg",
    role: {
      en: "Crawler and Backend Developer",
      "pt-BR": "Desenvolvedor Backend e Crawlers",
    },
    period: {
      en: "Sep 2022 - Jan 2023 · Full-time",
      "pt-BR": "Set 2022 - Jan 2023 · Tempo integral",
    },
    highlights: {
      en: [
        "Developed airline data APIs with authentication, versioning and reliable data pipelines",
        "Built crawlers/bots for real-time extraction and automation of complex workflows",
        "Optimized performance to reduce response times in critical user journeys",
      ],
      "pt-BR": [
        "Desenvolvi APIs de dados aéreos com autenticação, versionamento e pipelines confiáveis",
        "Criei crawlers/bots com extração em tempo real e automação de fluxos complexos",
        "Otimizei performance para reduzir tempo de resposta em jornadas críticas",
      ],
    },
    responsibilities: {
      en: [
        "Implemented scalable REST APIs to integrate airline ticket data with strong authentication, versioning, and security practices",
        "Developed smart web crawlers/bots to automate airline ticket purchasing workflows with real-time extraction",
        "Optimized processes to reduce response times and improve user convenience during flight searches",
      ],
      "pt-BR": [
        "Implementei APIs REST escaláveis para integrar dados de passagens aéreas com autenticação, versionamento e práticas de segurança",
        "Desenvolvi crawlers/bots inteligentes para automatizar fluxos de compra de passagens com extração em tempo real",
        "Otimizei processos para reduzir tempo de resposta e melhorar a experiência do usuário durante buscas de voos",
      ],
    },
    projects: {
      en: [
        "Airline ticket integration APIs with authentication and versioning",
        "Web crawler automation for real-time search and purchasing flows",
        "Performance optimization for faster responses in critical user journeys",
      ],
      "pt-BR": [
        "APIs de integração de passagens aéreas com autenticação e versionamento",
        "Automação via web crawler para busca em tempo real e fluxos de compra",
        "Otimização de performance para respostas mais rápidas em jornadas críticas",
      ],
    },
    technologies: [
      "Node.js",
      "JavaScript",
      "TypeScript",
      "REST APIs",
      "MySQL",
      "Relational Databases",
      "Web Crawlers",
      "Automation",
    ],
  },

  {
    company: "Código_Font",
    logo: "/codigo.jpeg",
    role: {
      en: "Backend Developer",
      "pt-BR": "Desenvolvedor Backend",
    },
    period: {
      en: "May 2021 - Aug 2022 · Remote",
      "pt-BR": "Mai 2021 - Ago 2022 · Remoto",
    },
    highlights: {
      en: [
        "Shipped scalable REST APIs across Node/Express and Elixir with solid database practices",
        "Worked with PostgreSQL/MongoDB focusing on integrity, query performance and maintainability",
        "Standardized deployments using Docker and improved team workflows with CI practices",
      ],
      "pt-BR": [
        "Entreguei APIs REST escaláveis usando Node/Express e Elixir com boas práticas de banco",
        "Trabalhei com PostgreSQL/MongoDB focando em integridade, performance de queries e manutenção",
        "Padronizei deploys com Docker e melhorei o fluxo do time com práticas de CI",
      ],
    },
    responsibilities: {
      en: [
        "Developed robust and scalable RESTful APIs using JavaScript, TypeScript, Elixir, and Express.js",
        "Worked with PostgreSQL and MongoDB ensuring data integrity, performance, and maintainable queries",
        "Deployed and maintained applications in Docker containers for portability and consistency",
        "Used Git/GitHub for version control and continuous integration in team workflows",
        "Integrated services via REST APIs to enable secure and reliable communication between systems",
        "Applied technical English for documentation and collaboration in distributed environments",
      ],
      "pt-BR": [
        "Desenvolvi APIs REST robustas e escaláveis usando JavaScript, TypeScript, Elixir e Express.js",
        "Trabalhei com PostgreSQL e MongoDB garantindo integridade de dados, performance e queries manuteníveis",
        "Fiz deploy e manutenção de aplicações em containers Docker para portabilidade e consistência",
        "Usei Git/GitHub para versionamento e integração contínua em fluxos de equipe",
        "Integrei serviços via APIs REST para comunicação segura e confiável entre sistemas",
        "Utilizei inglês técnico para documentação e colaboração em ambientes distribuídos",
      ],
    },
    projects: {
      en: [
        "Scalable API development with strong focus on performance and maintainability",
        "Database modeling and optimization for relational and document-oriented stores",
        "Containerized deployments and environment consistency with Docker",
        "Service-to-service integration with secure REST-based communication",
      ],
      "pt-BR": [
        "Desenvolvimento de APIs escaláveis com forte foco em performance e manutenibilidade",
        "Modelagem e otimização de bancos para bases relacionais e orientadas a documentos",
        "Deploys em containers e consistência de ambiente com Docker",
        "Integração entre serviços com comunicação REST segura",
      ],
    },
    technologies: [
      "JavaScript",
      "TypeScript",
      "Elixir",
      "Express.js",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "Git",
      "GitHub",
      "REST APIs",
      "CI",
    ],
  },
];

const sectionCopy: Record<
  Lang,
  { title: string; subtitle: string; hoverHint: string }
> = {
  en: {
    title: "Experience",
    subtitle:
      "Senior engineering roles and high-impact deliveries. Click on any company to view details.",
    hoverHint: "Click to view details",
  },
  "pt-BR": {
    title: "Experiência",
    subtitle:
      "Atuação sênior e entregas de alto impacto. Clique em uma empresa para ver detalhes.",
    hoverHint: "Clique para ver detalhes",
  },
};

export function Experience() {
  const lang = useLang() as Lang;
  const t = sectionCopy[lang];

  const [selectedExperience, setSelectedExperience] =
    useState<ExperienceItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleClick = (experience: ExperienceItem) => {
    setSelectedExperience(experience);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedExperience(null), 200);
  };

  return (
    <>
      <section id="experience" className="py-24 px-6">
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
            <p className="mb-16 text-muted-foreground max-w-2xl">
              {t.subtitle}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={`${exp.company}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => handleClick(exp)}
                  className="cursor-pointer group"
                >
                  <motion.div
                    className="flex flex-col items-center gap-4 p-8 rounded-lg transition-all duration-300 hover:bg-muted/50"
                    whileHover={{ y: -6 }}
                  >
                    <div className="relative w-32 h-32 flex items-center justify-center">
                      <motion.img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-full h-full object-contain transition-all duration-300"
                        style={{
                          filter:
                            hoveredIndex === index
                              ? "grayscale(0%)"
                              : "grayscale(100%)",
                          opacity: hoveredIndex === index ? 1 : 0.5,
                        }}
                      />
                    </div>

                    <div className="text-center">
                      <h3 className="text-foreground mb-1">{exp.company}</h3>
                      <p className="text-muted-foreground ui-text mb-1">
                        {exp.role[lang]}
                      </p>
                      <p className="text-muted-foreground/70 ui-text">
                        {exp.period[lang]}
                      </p>
                    </div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                      className="text-muted-foreground ui-text"
                    >
                      {t.hoverHint}
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <ExperienceModal
        isOpen={isModalOpen}
        onClose={closeModal}
        experience={selectedExperience}
      />
    </>
  );
}
