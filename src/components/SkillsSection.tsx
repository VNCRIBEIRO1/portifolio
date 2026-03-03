"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const skillCategories = [
  {
    title: "Frontend",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML5 / CSS3", level: 98 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    title: "Backend",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python / Django", level: 80 },
      { name: "PostgreSQL", level: 85 },
      { name: "REST APIs", level: 92 },
      { name: "Firebase", level: 88 },
    ],
  },
  {
    title: "DevOps",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    skills: [
      { name: "Git / GitHub", level: 95 },
      { name: "Docker", level: 80 },
      { name: "Vercel / AWS", level: 88 },
      { name: "CI/CD", level: 82 },
      { name: "PWA / Service Workers", level: 90 },
    ],
  },
  {
    title: "Design",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r="2.5" /><path d="M17 2h4v4" /><path d="M2 22l4-4" />
        <path d="M15.5 8.5L22 2" /><path d="M2 15l7-7" /><circle cx="8.5" cy="15.5" r="6.5" />
      </svg>
    ),
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    skills: [
      { name: "Figma", level: 88 },
      { name: "UI/UX Design", level: 85 },
      { name: "Responsive Design", level: 95 },
      { name: "Prototipagem", level: 82 },
      { name: "Design Systems", level: 80 },
    ],
  },
];

const techStack = [
  { name: "React", color: "text-cyan-400", border: "border-cyan-500/20" },
  { name: "Next.js", color: "text-white", border: "border-white/10" },
  { name: "TypeScript", color: "text-blue-400", border: "border-blue-500/20" },
  { name: "Tailwind", color: "text-cyan-300", border: "border-cyan-500/20" },
  { name: "Node.js", color: "text-emerald-400", border: "border-emerald-500/20" },
  { name: "PostgreSQL", color: "text-blue-300", border: "border-blue-500/20" },
  { name: "Docker", color: "text-sky-400", border: "border-sky-500/20" },
  { name: "PWA", color: "text-indigo-400", border: "border-indigo-500/20" },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between mb-2">
        <span className="text-sm text-slate-300 font-medium">{name}</span>
        <span className="text-xs text-indigo-400 font-mono font-bold">{level}%</span>
      </div>
      <div className="h-[6px] bg-white/[0.04] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ delay, duration: 1.2, ease: "easeOut" }}
          className="skill-bar-fill"
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="relative py-28 px-6">
      <div className="section-divider mb-24" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-4"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/[0.08] border border-indigo-500/20 text-[12px] text-indigo-400 font-semibold tracking-wider uppercase">
            Habilidades
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          <span className="text-white">Nossa </span>
          <span className="text-gradient">Stack Técnica</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-lg mb-12 max-w-2xl"
        >
          Tecnologias e ferramentas que dominamos para entregar
          projetos de alta qualidade.
        </motion.p>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {skillCategories.map((cat, i) => (
            <button
              key={cat.title}
              onClick={() => setActiveCategory(i)}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === i
                  ? `${cat.bg} border ${cat.color} border-current/20`
                  : "bg-white/[0.03] border border-white/[0.06] text-slate-400 hover:text-white hover:border-white/10"
              }`}
            >
              <span className={activeCategory === i ? cat.color : "text-slate-500"}>
                {cat.icon}
              </span>
              {cat.title}
            </button>
          ))}
        </motion.div>

        {/* Skills Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Active Category Skills */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="glass-card p-8"
          >
            <h3 className={`text-xl font-bold mb-8 flex items-center gap-3 ${skillCategories[activeCategory].color}`}>
              <div className={`icon-box ${skillCategories[activeCategory].bg} rounded-xl`}>
                {skillCategories[activeCategory].icon}
              </div>
              <span className="text-white">{skillCategories[activeCategory].title}</span>
            </h3>
            {skillCategories[activeCategory].skills.map((skill, i) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 0.1} />
            ))}
          </motion.div>

          {/* Tech Stack Grid */}
          <div className="grid grid-cols-2 gap-4">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + i * 0.05 }}
                whileHover={{ y: -4 }}
                className={`glass-card p-6 text-center cursor-default border ${tech.border}`}
              >
                <div className={`text-lg font-bold ${tech.color} mb-1`}>{tech.name}</div>
                <div className="text-xs text-slate-500 font-mono">Proficient</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
