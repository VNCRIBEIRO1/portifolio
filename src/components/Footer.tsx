"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-md rotate-45 transform" />
              <div className="absolute inset-[2px] bg-[#0a0a0f] rounded-sm rotate-45 transform" />
              <span className="absolute inset-0 flex items-center justify-center text-blue-400 font-bold text-xs">
                P
              </span>
            </div>
            <div>
              <span className="font-bold text-white text-sm tracking-tight">
                PIXEL<span className="text-blue-400">CODE</span>
              </span>
              <span className="block text-[8px] text-slate-600 tracking-[2px] uppercase">
                STUDIO
              </span>
            </div>
          </div>

          {/* Center text */}
          <div className="text-center">
            <p className="text-sm text-slate-500">
              Construindo soluções digitais sólidas
            </p>
            <p className="text-xs text-slate-600 mt-1">
              © {currentYear} Pixel Code Studio. Todos os direitos reservados.
            </p>
          </div>

          {/* Links */}
          <div className="flex justify-end gap-4">
            {["GitHub", "LinkedIn", "Instagram"].map((link) => (
              <motion.a
                key={link}
                href="#"
                whileHover={{ y: -2 }}
                className="text-sm text-slate-500 hover:text-blue-400 transition-colors"
              >
                {link}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="mt-8 pt-8 border-t border-white/3">
          <div className="flex items-center justify-center gap-2 text-xs text-slate-700 font-mono">
            <span>EDIFICADO COM</span>
            <span className="text-blue-500">♦</span>
            <span>NEXT.JS + TYPESCRIPT + TAILWIND</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
