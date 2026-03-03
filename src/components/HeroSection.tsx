"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden blueprint-line"
    >
      {/* Ambient background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-[120px]" />
      </div>

      {/* 3D Building Silhouette */}
      <div
        className="absolute inset-0 flex items-end justify-center opacity-10"
        style={{
          transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.3}px)`,
        }}
      >
        <svg
          viewBox="0 0 1200 600"
          className="w-full max-w-6xl"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Skyline silhouette */}
          <rect x="100" y="200" width="80" height="400" fill="#1e293b" rx="2" />
          <rect x="90" y="220" width="100" height="10" fill="#334155" />
          <rect x="90" y="280" width="100" height="10" fill="#334155" />
          <rect x="90" y="340" width="100" height="10" fill="#334155" />

          <rect x="250" y="100" width="120" height="500" fill="#1e293b" rx="2" />
          <rect x="240" y="120" width="140" height="10" fill="#334155" />
          <rect x="240" y="200" width="140" height="10" fill="#334155" />
          <rect x="240" y="280" width="140" height="10" fill="#334155" />
          <rect x="240" y="360" width="140" height="10" fill="#334155" />

          <rect x="450" y="50" width="100" height="550" fill="#1e293b" rx="2" />
          <rect
            x="480"
            y="30"
            width="40"
            height="20"
            fill="#3b82f6"
            opacity="0.4"
          />

          <rect x="620" y="150" width="140" height="450" fill="#1e293b" rx="2" />
          <rect x="610" y="170" width="160" height="10" fill="#334155" />
          <rect x="610" y="250" width="160" height="10" fill="#334155" />
          <rect x="610" y="330" width="160" height="10" fill="#334155" />

          <rect x="830" y="80" width="90" height="520" fill="#1e293b" rx="2" />
          <rect x="960" y="250" width="120" height="350" fill="#1e293b" rx="2" />
          <rect x="950" y="270" width="140" height="10" fill="#334155" />
          <rect x="950" y="350" width="140" height="10" fill="#334155" />

          {/* Ground line */}
          <rect x="0" y="595" width="1200" height="5" fill="#3b82f6" opacity="0.3" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        {/* Floor indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 mb-8"
        >
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
          <span className="text-blue-400 text-sm font-mono">
            LOBBY // BEM-VINDO AO EDIFÍCIO
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
        >
          <span className="text-white">Construímos</span>
          <br />
          <span className="text-gradient">Soluções Digitais</span>
          <br />
          <span className="text-white">
            Sólidas
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Desenvolvimento de sites, sistemas web e aplicações PWA com a solidez
          de um arranha-céu e a elegância da arquitetura moderna.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59,130,246,0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl text-lg hover:shadow-xl transition-all duration-300"
          >
            Explorar Projetos ↑
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 border border-white/10 text-white font-semibold rounded-xl text-lg hover:bg-white/5 hover:border-blue-500/30 transition-all duration-300"
          >
            Subir ao Topo
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-slate-500 font-mono">SCROLL</span>
            <div className="w-[1px] h-8 bg-gradient-to-b from-blue-500 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
