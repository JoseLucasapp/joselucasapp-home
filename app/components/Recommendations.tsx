"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const recommendations = [
  {
    name: "Lucas Garcia",
    title:
      "PSM I • PSPO I | Project Manager | Product Management | MBA USP (in progress) | Digital Strategy • Tech • Content Leadership",
    content:
      "I had the pleasure of working directly with Lucas Freitas at Grupo CCR/Motiva, where he was responsible for implementing digital content for websites on the AEM platform. He is the kind of rare professional who quickly understands requirements without the need for extensive explanations. His logical thinking is outstanding, and he often surprises with creative and innovative solutions. In addition, he automated several processes in an extremely efficient way, significantly increasing our team’s productivity. I must also highlight that he was the fastest content implementer I worked with within the group, which I consider a true differentiator. His collaborative and positive personality made the work environment much more pleasant and productive. Without a doubt, I strongly recommend Lucas Freitas for any project or challenge that requires dynamism, creativity, and operational efficiency.",
    platform: "LinkedIn",
  },
  {
    name: "André Meireles",
    title: "Senior Developer/Techlead",
    content:
      "Lucas is an excellent professional, dedicated to delivering his tasks with maximum quality and speed. He quickly understands business rules and effectively applies them in code. He learns fast, is always willing to help and teach others, and working with him was a great experience.",
    platform: "LinkedIn",
  },
  {
    name: "Newmar Lucas",
    title: "Software Engineer",
    content:
      "As a frontend developer, I had the opportunity to work closely with him while he was responsible for the backend in our team. José is an exceptional professional, consistently delivering high-quality work. In addition, his willingness to learn and explore new technologies is truly inspiring. His relaxed and positive attitude makes the work environment lighter and more enjoyable. I highly recommend José as a talented and dedicated colleague who makes a real difference on any team he is part of.",
    platform: "LinkedIn",
  },
];

export function Recommendations() {
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
            Recommendations
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
                    <p className="text-muted-foreground mt-0.5">{rec.title}</p>
                  </div>
                </div>
                <p className="text-foreground/70 leading-relaxed italic">
                  "{rec.content}"
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
