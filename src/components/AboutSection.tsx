"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "50+", label: "Projetos Entregues", color: "from-indigo-500 to-indigo-600" },
  { value: "5+", label: "Anos de Experiência", color: "from-cyan-500 to-cyan-600" },
  { value: "30+", label: "Clientes Satisfeitos", color: "from-emerald-500 to-emerald-600" },
  { value: "100%", label: "Comprometimento", color: "from-amber-500 to-amber-600" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-28 px-6">
      <div className="section-divider mb-24" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-4"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/[0.08] border border-indigo-500/20 text-[12px] text-indigo-400 font-semibold tracking-wider uppercase">
            Sobre Nós
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            >
              <span className="text-white">Transformamos ideias em </span>
              <span className="text-gradient">soluções reais</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-lg leading-relaxed mb-6"
            >
              Somos um estúdio de desenvolvimento especializado em criar
              experiências digitais que fazem a diferença. Combinamos design
              moderno com tecnologia de ponta para entregar projetos que
              superam expectativas.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-slate-500 text-base leading-relaxed mb-8"
            >
              Do conceito à entrega, cada linha de código é escrita com
              propósito. Nosso foco é performance, acessibilidade e uma
              experiência de usuário impecável.
            </motion.p>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              {["Código Limpo", "Performance", "SEO Otimizado", "Mobile First", "Acessível"].map(
                (item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm text-slate-300 font-medium"
                  >
                    {item}
                  </span>
                )
              )}
            </motion.div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-5">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="glass-card p-6 text-center group"
              >
                <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
