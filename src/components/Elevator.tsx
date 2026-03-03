"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "hero", floor: "L" },
  { id: "about", floor: "1" },
  { id: "skills", floor: "2" },
  { id: "projects", floor: "3" },
  { id: "services", floor: "4" },
  { id: "contact", floor: "5" },
];

export default function Elevator() {
  const [active, setActive] = useState("hero");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 300) {
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
  };

  if (!visible) return null;

  return (
    <div className="elevator-track hidden lg:flex">
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent" />
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollTo(section.id)}
          className="relative group"
          title={`Andar ${section.floor}`}
        >
          <div className={`elevator-dot ${active === section.id ? "active" : ""}`} />
          <span className="absolute right-7 top-1/2 -translate-y-1/2 bg-indigo-600/90 backdrop-blur-sm text-white text-[11px] px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
            {section.floor}F
          </span>
        </button>
      ))}
    </div>
  );
}
