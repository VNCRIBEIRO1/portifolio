"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: "", email: "", project: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="steel-beam mb-20" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Floor Badge */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-4 mb-12"
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <span className="text-blue-400 font-mono text-sm font-bold">5F</span>
            <span className="text-slate-500 text-sm">COBERTURA</span>
          </div>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-blue-500/20 to-transparent" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              <span className="text-white">Vamos </span>
              <span className="text-gradient">Construir?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-slate-400 text-lg mb-10 leading-relaxed"
            >
              Chegou ao topo do edifício. Agora é hora de começar a construir o
              seu projeto. Entre em contato e vamos criar algo extraordinário
              juntos.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-xl">
                  📧
                </div>
                <div>
                  <div className="text-sm text-slate-500">Email</div>
                  <div className="text-white font-medium">
                    contato@pixelcodestudio.com
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-xl">
                  📱
                </div>
                <div>
                  <div className="text-sm text-slate-500">WhatsApp</div>
                  <div className="text-white font-medium">
                    +55 (11) 99999-9999
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-xl">
                  🌎
                </div>
                <div>
                  <div className="text-sm text-slate-500">Localização</div>
                  <div className="text-white font-medium">
                    Brasil — Atendimento remoto
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="flex gap-4 mt-10"
            >
              {[
                { name: "GitHub", icon: "💻", url: "https://github.com/VNCRIBEIRO1" },
                { name: "LinkedIn", icon: "🔗", url: "#" },
                { name: "Instagram", icon: "📸", url: "#" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg hover:bg-blue-500/10 hover:border-blue-500/30 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-400 mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                    placeholder="Seu nome"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-2">
                  Tipo de Projeto
                </label>
                <select
                  value={formState.project}
                  onChange={(e) =>
                    setFormState({ ...formState, project: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all appearance-none cursor-pointer"
                  required
                >
                  <option value="" className="bg-[#0a0a0f]">
                    Selecione o tipo
                  </option>
                  <option value="site" className="bg-[#0a0a0f]">
                    Site Institucional
                  </option>
                  <option value="sistema" className="bg-[#0a0a0f]">
                    Sistema Web
                  </option>
                  <option value="pwa" className="bg-[#0a0a0f]">
                    Aplicação PWA
                  </option>
                  <option value="ecommerce" className="bg-[#0a0a0f]">
                    E-Commerce
                  </option>
                  <option value="landing" className="bg-[#0a0a0f]">
                    Landing Page
                  </option>
                  <option value="outro" className="bg-[#0a0a0f]">
                    Outro
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-2">
                  Mensagem
                </label>
                <textarea
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all resize-none"
                  placeholder="Descreva seu projeto..."
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  submitted
                    ? "bg-green-500 text-white"
                    : "bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:shadow-lg hover:shadow-blue-500/25"
                }`}
              >
                {submitted ? "✓ Mensagem Enviada!" : "Enviar Proposta"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
