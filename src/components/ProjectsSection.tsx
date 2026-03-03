"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

interface Project {
  id: number;
  floor: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  color: string;
  category: string;
  link?: string;
  features: string[];
}

const projects: Project[] = [
  {
    id: 1,
    floor: "3A",
    title: "E-Commerce Premium",
    description: "Plataforma de e-commerce completa com PWA, pagamentos integrados e painel administrativo.",
    longDescription: "Sistema completo de comércio eletrônico construído com Next.js e integração com gateways de pagamento. Inclui painel admin, gestão de estoque, relatórios e experiência mobile-first.",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "PWA"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    color: "from-blue-600/20 to-cyan-600/20",
    category: "Sistema Web",
    features: ["Pagamentos online", "Painel Admin", "PWA offline", "Dashboard analytics"],
  },
  {
    id: 2,
    floor: "3B",
    title: "Dashboard Analytics",
    description: "Painel de controle com visualizações de dados em tempo real e relatórios automatizados.",
    longDescription: "Dashboard empresarial com gráficos interativos, métricas em tempo real e geração automática de relatórios. Integração com múltiplas fontes de dados.",
    tags: ["React", "D3.js", "Node.js", "WebSocket", "MongoDB"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    color: "from-purple-600/20 to-pink-600/20",
    category: "Dashboard",
    features: ["Tempo real", "Gráficos interativos", "Exportar PDF", "Multi-tenant"],
  },
  {
    id: 3,
    floor: "3C",
    title: "App Delivery PWA",
    description: "Aplicação PWA para delivery com rastreamento em tempo real e notificações push.",
    longDescription: "Plataforma de delivery completa com app para clientes, entregadores e restaurantes. Rastreamento GPS em tempo real, notificações push e modo offline.",
    tags: ["Next.js", "PWA", "Firebase", "Maps API", "Tailwind"],
    image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&q=80",
    color: "from-green-600/20 to-emerald-600/20",
    category: "PWA",
    features: ["GPS tracking", "Push notifications", "Offline mode", "Chat integrado"],
  },
  {
    id: 4,
    floor: "3D",
    title: "Portal Institucional",
    description: "Site institucional moderno com CMS integrado, blog e otimização SEO avançada.",
    longDescription: "Site institucional responsivo com sistema de gerenciamento de conteúdo customizado, blog integrado, formulários dinâmicos e SEO técnico avançado.",
    tags: ["Next.js", "Headless CMS", "SEO", "Vercel", "TypeScript"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    color: "from-amber-600/20 to-orange-600/20",
    category: "Website",
    features: ["CMS integrado", "Blog", "SEO otimizado", "Analytics"],
  },
  {
    id: 5,
    floor: "3E",
    title: "Sistema de Gestão",
    description: "ERP customizado com módulos de RH, financeiro, estoque e CRM integrado.",
    longDescription: "Sistema de gestão empresarial completo desenvolvido sob medida. Módulos integrados para gestão de pessoas, finanças, estoque e relacionamento com clientes.",
    tags: ["React", "Node.js", "PostgreSQL", "Docker", "REST API"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    color: "from-red-600/20 to-rose-600/20",
    category: "Sistema Web",
    features: ["Multi-módulo", "Relatórios", "Permissões", "Auditoria"],
  },
  {
    id: 6,
    floor: "3F",
    title: "Landing Page SaaS",
    description: "Landing page de alta conversão para produto SaaS com animações e A/B testing.",
    longDescription: "Landing page otimizada para conversão com design moderno, micro-animações, seções de pricing, testimonials e integração com ferramentas de marketing.",
    tags: ["Next.js", "Framer Motion", "Tailwind", "Vercel", "Analytics"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    color: "from-indigo-600/20 to-violet-600/20",
    category: "Website",
    features: ["Alta conversão", "Animações", "A/B testing", "Speed otimizado"],
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, rotateX: 5 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.7, ease: "easeOut" }}
      className="building-floor relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="glass-card overflow-hidden group cursor-pointer">
        {/* Floor badge */}
        <div className="floor-badge">{project.floor}</div>

        {/* Project Image */}
        <div className="relative h-56 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${project.image})` }}
          />
          <div className="project-image-overlay" />
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40`}
          />

          {/* Category badge */}
          <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs text-white font-medium border border-white/10">
            {project.category}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-4">
            {isHovered ? project.longDescription : project.description}
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.features.map((feat) => (
              <span
                key={feat}
                className="text-xs px-2.5 py-1 bg-blue-500/10 text-blue-400 rounded-md border border-blue-500/10"
              >
                {feat}
              </span>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 text-slate-500 font-mono"
              >
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
    filter === "Todos"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="steel-beam mb-20" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Floor Badge */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-4 mb-12"
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <span className="text-blue-400 font-mono text-sm font-bold">3F</span>
            <span className="text-slate-500 text-sm">ANDARES PRINCIPAIS</span>
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
          <span className="text-gradient">Projetos</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="text-slate-400 text-lg mb-12 max-w-2xl"
        >
          Cada andar representa um projeto construído com dedicação. Explore
          nossas obras e veja a qualidade de cada entrega.
        </motion.p>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                  : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="building-grid">
          {filteredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
