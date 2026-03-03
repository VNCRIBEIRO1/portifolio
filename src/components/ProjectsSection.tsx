"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  category: string;
  features: string[];
  accent: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Premium",
    description:
      "Plataforma de e-commerce completa com PWA, pagamentos integrados, painel admin e experiência mobile-first.",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    category: "Sistema Web",
    features: ["Pagamentos online", "Painel Admin", "PWA offline", "Analytics"],
    accent: "from-indigo-500/20 to-violet-500/20",
  },
  {
    id: 2,
    title: "Dashboard Analytics",
    description:
      "Painel de controle com visualizações de dados em tempo real, gráficos interativos e relatórios automatizados.",
    tags: ["React", "D3.js", "Node.js", "WebSocket"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    category: "Dashboard",
    features: ["Tempo real", "Gráficos", "Exportar PDF", "Multi-tenant"],
    accent: "from-cyan-500/20 to-blue-500/20",
  },
  {
    id: 3,
    title: "App Delivery PWA",
    description:
      "Aplicação PWA para delivery com rastreamento GPS em tempo real, notificações push e modo offline.",
    tags: ["Next.js", "PWA", "Firebase", "Maps API"],
    image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&q=80",
    category: "PWA",
    features: ["GPS tracking", "Push notifications", "Offline mode", "Chat"],
    accent: "from-emerald-500/20 to-teal-500/20",
  },
  {
    id: 4,
    title: "Portal Institucional",
    description:
      "Site institucional moderno com CMS integrado, blog e otimização SEO avançada para máxima visibilidade.",
    tags: ["Next.js", "Headless CMS", "SEO", "Vercel"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    category: "Website",
    features: ["CMS integrado", "Blog", "SEO otimizado", "Analytics"],
    accent: "from-amber-500/20 to-orange-500/20",
  },
  {
    id: 5,
    title: "Sistema de Gestão",
    description:
      "ERP customizado com módulos de RH, financeiro, estoque e CRM integrado para gestão completa.",
    tags: ["React", "Node.js", "PostgreSQL", "Docker"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    category: "Sistema Web",
    features: ["Multi-módulo", "Relatórios", "Permissões", "Auditoria"],
    accent: "from-rose-500/20 to-pink-500/20",
  },
  {
    id: 6,
    title: "Landing Page SaaS",
    description:
      "Landing page de alta conversão com design moderno, micro-animações e integração com marketing tools.",
    tags: ["Next.js", "Framer Motion", "Tailwind", "Analytics"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    category: "Website",
    features: ["Alta conversão", "Animações", "A/B testing", "Speed"],
    accent: "from-violet-500/20 to-purple-500/20",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      <div className="project-card group cursor-pointer">
        {/* Image */}
        <div className="relative h-52 overflow-hidden">
          <div
            className="project-image absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${project.image})` }}
          />
          <div className="project-overlay" />
          <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-30 mix-blend-overlay`} />

          {/* Category */}
          <div className="absolute top-4 right-4 px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-full text-[11px] text-white font-semibold border border-white/10 uppercase tracking-wider">
            {project.category}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 relative">
          <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-indigo-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.features.map((feat) => (
              <span
                key={feat}
                className="text-[11px] px-3 py-1.5 bg-indigo-500/[0.08] text-indigo-300 rounded-lg border border-indigo-500/10 font-medium"
              >
                {feat}
              </span>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-white/[0.05]">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs text-slate-500 font-mono">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState("Todos");

  const categories = ["Todos", "Sistema Web", "PWA", "Website", "Dashboard"];
  const filteredProjects =
    filter === "Todos" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="section-divider mb-24" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-4"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/[0.08] border border-indigo-500/20 text-[12px] text-indigo-400 font-semibold tracking-wider uppercase">
            Portfólio
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          <span className="text-white">Nossos </span>
          <span className="text-gradient">Projetos</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-lg mb-12 max-w-2xl"
        >
          Cada projeto é construído com dedicação, atenção aos detalhes e foco
          em resultados mensuráveis.
        </motion.p>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/25"
                  : "bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
