"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { useLang } from "../hooks/useLang";

const copy = {
  en: { title: "Recommendations" },
  "pt-BR": { title: "Recomendações" },
} as const;
export const recommendations = [
  {
    name: "Lucas Garcia",
    title: {
      en: "PSM I • PSPO I | Project Manager | Product Management | MBA USP (in progress) | Digital Strategy • Tech • Content Leadership",
      "pt-BR":
        "PSM I • PSPO I | Gerente de Projetos | Gestão de Produto | MBA USP (em andamento) | Estratégia Digital • Tech • Liderança de Conteúdo",
    },
    content: {
      en: "I had the pleasure of working directly with Lucas Freitas at Grupo CCR/Motiva, where he was responsible for implementing digital content for websites on the AEM platform. He is the kind of rare professional who quickly understands requirements without the need for extensive explanations. His logical thinking is outstanding, and he often surprises with creative and innovative solutions. In addition, he automated several processes in an extremely efficient way, significantly increasing our team’s productivity. I must also highlight that he was the fastest content implementer I worked with within the group, which I consider a true differentiator. His collaborative and positive personality made the work environment much more pleasant and productive. Without a doubt, I strongly recommend Lucas Freitas for any project or challenge that requires dynamism, creativity, and operational efficiency.",
      "pt-BR":
        "Tive o prazer de trabalhar diretamente com Lucas Freitas no Grupo CCR/Motiva, onde ele foi responsável pela implementação de conteúdo digital em websites na plataforma AEM. Ele é aquele tipo raro de profissional que entende rapidamente os requisitos, sem a necessidade de longas explicações. Seu raciocínio lógico é excelente e ele frequentemente surpreende com soluções criativas e inovadoras. Além disso, automatizou diversos processos de forma extremamente eficiente, aumentando significativamente a produtividade do time. Destaco também que foi o implementador de conteúdo mais rápido com quem trabalhei dentro do grupo, o que considero um grande diferencial. Sua postura colaborativa e positiva tornou o ambiente de trabalho muito mais agradável e produtivo. Recomendo fortemente Lucas Freitas para qualquer projeto ou desafio que exija dinamismo, criatividade e eficiência operacional.",
    },
    platform: "LinkedIn",
  },
  {
    name: "André Meireles",
    title: {
      en: "Senior Developer / Tech Lead",
      "pt-BR": "Desenvolvedor Sênior / Tech Lead",
    },
    content: {
      en: "Lucas is an excellent professional, dedicated to delivering his tasks with maximum quality and speed. He quickly understands business rules and effectively applies them in code. He learns fast, is always willing to help and teach others, and working with him was a great experience.",
      "pt-BR":
        "Lucas é um profissional excelente, dedicado a entregar suas tarefas com máxima qualidade e agilidade. Ele entende rapidamente as regras de negócio e as aplica de forma eficiente no código. Aprende rápido, está sempre disposto a ajudar e ensinar outras pessoas, e trabalhar com ele foi uma ótima experiência.",
    },
    platform: "LinkedIn",
  },
  {
    name: "Newmar Lucas",
    title: {
      en: "Software Engineer",
      "pt-BR": "Engenheiro de Software",
    },
    content: {
      en: "As a frontend developer, I had the opportunity to work closely with him while he was responsible for the backend in our team. José is an exceptional professional, consistently delivering high-quality work. In addition, his willingness to learn and explore new technologies is truly inspiring. His relaxed and positive attitude makes the work environment lighter and more enjoyable. I highly recommend José as a talented and dedicated colleague who makes a real difference on any team he is part of.",
      "pt-BR":
        "Como desenvolvedor frontend, tive a oportunidade de trabalhar de perto com ele enquanto era responsável pelo backend do nosso time. José é um profissional excepcional, entregando consistentemente trabalho de alta qualidade. Além disso, sua disposição para aprender e explorar novas tecnologias é realmente inspiradora. Sua postura leve e positiva torna o ambiente de trabalho mais agradável. Recomendo fortemente José como um colega talentoso e dedicado, que faz diferença em qualquer equipe da qual faça parte.",
    },
    platform: "LinkedIn",
  },
];

export function Recommendations() {
  const lang = useLang();
  const t = copy[lang];

  return (
    <section id="recommendations" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-16 text-[clamp(1.875rem,4vw,3rem)] tracking-tight">
            {t.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendations.map((rec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg p-6"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <Linkedin className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <h4 className="text-foreground">{rec.name}</h4>
                    <p className="text-muted-foreground mt-0.5">
                      {rec.title[lang]}
                    </p>
                  </div>
                </div>
                <p className="text-foreground/70 leading-relaxed italic">
                  "{rec.content[lang]}"
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
