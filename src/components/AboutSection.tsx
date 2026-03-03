"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { number: "50+", label: "Projetos Entregues" },
  { number: "5+", label: "Anos de Experiência" },
  { number: "30+", label: "Clientes Atendidos" },
  { number: "100%", label: "Compromisso" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 px-6 parallax-section">
      {/* Steel beam divider */}
      <div className="steel-beam mb-20" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Floor Badge */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <span className="text-blue-400 font-mono text-sm font-bold">
              1F
            </span>
            <span className="text-slate-500 text-sm">RECEPÇÃO</span>
          </div>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-blue-500/20 to-transparent" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              <span className="text-white">Quem </span>
              <span className="text-gradient">Somos</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-4 text-slate-400 leading-relaxed"
            >
              <p className="text-lg">
                A <strong className="text-white">Pixel Code Studio</strong> é
                uma empresa especializada em desenvolvimento de soluções digitais
                de alta performance. Assim como um edifício bem projetado, cada
                projeto que construímos tem uma fundação sólida, estrutura
                robusta e acabamento impecável.
              </p>
              <p>
                Trabalhamos com as mais modernas tecnologias do mercado para
                criar sites, sistemas web e aplicações PWA que se destacam pela
                qualidade, performance e design. Cada linha de código é
                cuidadosamente escrita como cada viga de aço em uma construção —
                com precisão e propósito.
              </p>
              <p>
                Nossa missão é transformar ideias em estruturas digitais que
                resistem ao tempo, crescem com seu negócio e impressionam seus
                usuários desde o primeiro acesso.
              </p>
            </motion.div>
          </div>

          {/* 3D Card */}
          <motion.div
            initial={{ opacity: 0, rotateY: -15 }}
            animate={isInView ? { opacity: 1, rotateY: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="perspective-container"
          >
            <div className="glass-card p-8 relative overflow-hidden">
              {/* Blueprint pattern */}
              <div className="absolute inset-0 blueprint-line opacity-30" />

              <div className="relative z-10">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      className="text-center p-4"
                    >
                      <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm text-slate-500">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative lines */}
                <div className="mt-8 pt-6 border-t border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-blue-500/50 animate-pulse" />
                    <span className="text-sm text-slate-500 font-mono">
                      STATUS: ONLINE & CONSTRUINDO
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
