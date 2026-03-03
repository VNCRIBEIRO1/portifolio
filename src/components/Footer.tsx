"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 px-6">
      <div className="section-divider mb-16" />

      <div className="max-w-7xl mx-auto">
        {/* Main Footer */}
        <div className="grid md:grid-cols-3 gap-12 items-start mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-9 h-9">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-cyan-400 rounded-xl rotate-45" />
                <div className="absolute inset-[2px] bg-[#050508] rounded-[10px] rotate-45" />
                <span className="absolute inset-0 flex items-center justify-center text-indigo-400 font-bold text-sm">
                  P
                </span>
              </div>
              <div>
                <span className="font-bold text-white text-[15px] tracking-tight">
                  PIXEL<span className="text-indigo-400">CODE</span>
                </span>
                <span className="block text-[9px] text-slate-500 tracking-[3px] uppercase">
                  STUDIO
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              Construindo experiências digitais de alto impacto com tecnologia de ponta e design moderno.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Navegação</h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              {["Início", "Sobre", "Skills", "Projetos", "Serviços", "Contato"].map((link) => (
                <a
                  key={link}
                  href={`#${link === "Início" ? "hero" : link.toLowerCase()}`}
                  className="text-sm text-slate-500 hover:text-indigo-400 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col items-end">
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Social</h4>
            <div className="flex gap-3">
              {[
                { name: "GitHub", url: "https://github.com/VNCRIBEIRO1" },
                { name: "LinkedIn", url: "#" },
                { name: "Instagram", url: "#" },
              ].map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="text-sm text-slate-500 hover:text-indigo-400 transition-colors px-3 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:border-indigo-500/20"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/[0.04]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-600">
              © {currentYear} Pixel Code Studio. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-700 font-mono">
              <span>Construído com</span>
              <span className="text-indigo-500">◆</span>
              <span className="text-slate-500">Next.js · TypeScript · Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
