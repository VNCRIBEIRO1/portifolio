"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Início", floor: "L" },
  { id: "about", label: "Sobre", floor: "1" },
  { id: "skills", label: "Skills", floor: "2" },
  { id: "projects", label: "Projetos", floor: "3" },
  { id: "services", label: "Serviços", floor: "4" },
  { id: "contact", label: "Contato", floor: "5" },
];

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActive(sections[i].id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#050508]/80 backdrop-blur-xl border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollTo("hero")} className="flex items-center gap-3 group">
            <div className="relative w-9 h-9">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-cyan-400 rounded-xl rotate-45 group-hover:rotate-[225deg] transition-transform duration-700" />
              <div className="absolute inset-[2px] bg-[#050508] rounded-[10px] rotate-45" />
              <span className="absolute inset-0 flex items-center justify-center text-indigo-400 font-bold text-sm">
                P
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white text-[15px] tracking-tight leading-none">
                PIXEL<span className="text-indigo-400">CODE</span>
              </span>
              <span className="text-[9px] text-slate-500 tracking-[3px] uppercase leading-none mt-0.5">
                STUDIO
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollTo(section.id)}
                className={`relative px-4 py-2 rounded-xl text-[13px] font-medium transition-all duration-300 ${
                  active === section.id
                    ? "text-white"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {active === section.id && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white/[0.08] rounded-xl border border-white/[0.06]"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{section.label}</span>
              </button>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTo("contact")}
              className="hidden md:flex btn-primary !py-2.5 !px-5 !text-[13px] !rounded-xl"
            >
              Iniciar Projeto
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center"
            >
              <div className="flex flex-col gap-1.5 w-5">
                <motion.span
                  animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="w-full h-[2px] bg-white rounded-full block"
                />
                <motion.span
                  animate={mobileOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                  className="w-full h-[2px] bg-white rounded-full block"
                />
                <motion.span
                  animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="w-full h-[2px] bg-white rounded-full block"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[72px] z-40 bg-[#050508]/95 backdrop-blur-2xl border-b border-white/[0.06] md:hidden"
          >
            <div className="px-6 py-6 space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollTo(section.id)}
                  className={`w-full text-left px-4 py-3.5 rounded-xl text-sm font-medium transition-all ${
                    active === section.id
                      ? "bg-indigo-500/10 text-white border border-indigo-500/20"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className="text-xs text-indigo-500/70 mr-3 font-mono">
                    {section.floor}F
                  </span>
                  {section.label}
                </button>
              ))}
              <div className="pt-4">
                <button
                  onClick={() => scrollTo("contact")}
                  className="btn-primary w-full justify-center !text-sm"
                >
                  Iniciar Projeto →
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
