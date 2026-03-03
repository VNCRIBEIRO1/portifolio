"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "hero", label: "Lobby", floor: "L" },
  { id: "about", label: "Recepção", floor: "1" },
  { id: "skills", label: "Fundação", floor: "2" },
  { id: "projects", label: "Andares", floor: "3" },
  { id: "services", label: "Escritório", floor: "4" },
  { id: "contact", label: "Cobertura", floor: "5" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sectionElements = sections.map((s) => ({
        id: s.id,
        el: document.getElementById(s.id),
      }));

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i].el;
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(sectionElements[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollTo("hero")}
          >
            <div className="w-10 h-10 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg rotate-45 transform" />
              <div className="absolute inset-[3px] bg-[#0a0a0f] rounded-md rotate-45 transform" />
              <span className="absolute inset-0 flex items-center justify-center text-blue-400 font-bold text-sm">
                P
              </span>
            </div>
            <div>
              <span className="font-bold text-white text-lg tracking-tight">
                PIXEL<span className="text-blue-400">CODE</span>
              </span>
              <span className="block text-[10px] text-slate-500 tracking-[3px] uppercase -mt-1">
                STUDIO
              </span>
            </div>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollTo(section.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                  activeSection === section.id
                    ? "text-blue-400"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <span className="text-[10px] text-blue-500/60 mr-1 font-mono">
                  {section.floor}F
                </span>
                {section.label}
                {activeSection === section.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-2 right-2 h-[2px] bg-blue-500 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo("contact")}
            className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
          >
            Iniciar Projeto
          </motion.button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          >
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#0a0a0f]/98 backdrop-blur-xl pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {sections.map((section, i) => (
                <motion.button
                  key={section.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(section.id)}
                  className={`text-left px-4 py-4 rounded-xl text-lg font-medium border transition-all ${
                    activeSection === section.id
                      ? "text-blue-400 border-blue-500/30 bg-blue-500/5"
                      : "text-slate-400 border-transparent hover:text-white"
                  }`}
                >
                  <span className="text-xs text-blue-500/60 mr-2 font-mono">
                    {section.floor}F
                  </span>
                  {section.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
