"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: "🌐",
    title: "Sites Institucionais",
    description:
      "Sites modernos e responsivos com foco em performance, SEO e experiência do usuário. Design personalizado que representa a identidade da sua marca.",
    features: [
      "Design responsivo",
      "SEO otimizado",
      "CMS integrado",
      "Alta performance",
    ],
  },
  {
    icon: "⚡",
    title: "Sistemas Web",
    description:
      "Sistemas robustos e escaláveis para automatizar processos e gerenciar seu negócio. ERPs, CRMs e dashboards sob medida.",
    features: [
      "Arquitetura escalável",
      "Painel admin",
      "APIs REST",
      "Relatórios",
    ],
  },
  {
    icon: "📱",
    title: "Aplicações PWA",
    description:
      "Progressive Web Apps que funcionam como apps nativos, com modo offline, notificações push e instalação direto do navegador.",
    features: [
      "Modo offline",
      "Push notifications",
      "Instalável",
      "Performance nativa",
    ],
  },
  {
    icon: "🎯",
    title: "Landing Pages",
    description:
      "Páginas de alta conversão com design impactante, animações fluidas e otimização para performance e marketing.",
    features: [
      "Alta conversão",
      "A/B testing",
      "Animações",
      "Speed otimizado",
    ],
  },
  {
    icon: "🛒",
    title: "E-Commerce",
    description:
      "Lojas virtuais completas com integração de pagamentos, gestão de estoque e experiência de compra excepcional.",
    features: [
      "Checkout otimizado",
      "Multi-pagamentos",
      "Gestão de estoque",
      "Analytics",
    ],
  },
  {
    icon: "🔧",
    title: "Consultoria Tech",
    description:
      "Análise técnica, arquitetura de sistemas, code review e mentoria para times de desenvolvimento.",
    features: [
      "Análise técnica",
      "Arquitetura",
      "Code review",
      "Mentoria",
    ],
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-32 px-6">
      <div className="steel-beam mb-20" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Floor Badge */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-4 mb-12"
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <span className="text-blue-400 font-mono text-sm font-bold">4F</span>
            <span className="text-slate-500 text-sm">ESCRITÓRIO</span>
          </div>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-blue-500/20 to-transparent" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          <span className="text-white">Nossos </span>
          <span className="text-gradient">Serviços</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="text-slate-400 text-lg mb-12 max-w-2xl"
        >
          Soluções completas para transformar sua presença digital. Do projeto à
          entrega, construímos com excelência.
        </motion.p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card p-8 group cursor-default"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="space-y-2">
                {service.features.map((feat) => (
                  <div
                    key={feat}
                    className="flex items-center gap-2 text-sm text-slate-500"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
                    {feat}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
