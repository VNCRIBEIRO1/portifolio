"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const skillCategories = [
  {
    title: "Frontend",
    icon: "🏗️",
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
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python / Django", level: 80 },
      { name: "PostgreSQL", level: 85 },
      { name: "REST APIs", level: 92 },
      { name: "Firebase", level: 88 },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: "🔧",
    skills: [
      { name: "Git / GitHub", level: 95 },
      { name: "Docker", level: 80 },
      { name: "Vercel / AWS", level: 88 },
      { name: "CI/CD", level: 82 },
      { name: "PWA / Service Workers", level: 90 },
    ],
  },
  {
    title: "Design & UX",
    icon: "🎨",
    skills: [
      { name: "Figma", level: 88 },
      { name: "UI/UX Design", level: 85 },
      { name: "Responsive Design", level: 95 },
      { name: "Prototipagem", level: 82 },
      { name: "Design Systems", level: 80 },
    ],
  },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="text-sm text-slate-300">{name}</span>
        <span className="text-xs text-blue-400 font-mono">{level}%</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ delay: delay, duration: 1.2, ease: "easeOut" }}
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
    <section id="skills" className="relative py-32 px-6">
      <div className="steel-beam mb-20" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Floor Badge */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-4 mb-12"
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <span className="text-blue-400 font-mono text-sm font-bold">2F</span>
            <span className="text-slate-500 text-sm">FUNDAÇÃO</span>
          </div>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-blue-500/20 to-transparent" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          <span className="text-white">Nossa </span>
          <span className="text-gradient">Fundação</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="text-slate-400 text-lg mb-12 max-w-2xl"
        >
          As tecnologias e habilidades que sustentam cada projeto que construímos.
          Uma base sólida para resultados extraordinários.
        </motion.p>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {skillCategories.map((cat, i) => (
            <button
              key={cat.title}
              onClick={() => setActiveCategory(i)}
              className={`px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === i
                  ? "bg-blue-500/20 border-blue-500/40 text-blue-400 border"
                  : "bg-white/3 border border-white/5 text-slate-400 hover:text-white hover:border-white/10"
              }`}
            >
              <span className="mr-2">{cat.icon}</span>
              {cat.title}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Active Category Skills */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="glass-card p-8"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-2xl">
                {skillCategories[activeCategory].icon}
              </span>
              {skillCategories[activeCategory].title}
            </h3>
            {skillCategories[activeCategory].skills.map((skill, i) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                delay={i * 0.1}
              />
            ))}
          </motion.div>

          {/* Tech Stack Grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "⚛️", name: "React", desc: "UI Library" },
              { icon: "▲", name: "Next.js", desc: "Framework" },
              { icon: "🔷", name: "TypeScript", desc: "Linguagem" },
              { icon: "🎨", name: "Tailwind", desc: "CSS Framework" },
              { icon: "🟢", name: "Node.js", desc: "Runtime" },
              { icon: "🐘", name: "PostgreSQL", desc: "Database" },
              { icon: "🐳", name: "Docker", desc: "Container" },
              { icon: "📱", name: "PWA", desc: "Progressive" },
            ].map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.05 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="glass-card p-5 text-center cursor-default"
              >
                <div className="text-3xl mb-2">{tech.icon}</div>
                <div className="text-sm font-semibold text-white">
                  {tech.name}
                </div>
                <div className="text-xs text-slate-500">{tech.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
