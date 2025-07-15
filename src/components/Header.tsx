"use client";

import React, { useState, useEffect, useRef } from "react";

const sections = [
  { id: "hero",       label: "Accueil"       },
  { id: "about",      label: "À Propos"      },
  { id: "importance", label: "Pourquoi RH"  },
  { id: "missions",   label: "Missions"      },
  { id: "domains",    label: "Domaines"      },
  { id: "news",       label: "Actualités"    },
  { id: "contact",    label: "Contact"       },
];

export function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) 
      {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Update underline position when activeSection changes
  useEffect(() => {
    if (headerRef.current) {
      const link = headerRef.current.querySelector(`a[href="#${activeSection}"]`) as HTMLElement;
      if (link) {
        const headerRect = headerRef.current.getBoundingClientRect();
        const linkRect = link.getBoundingClientRect();
        setUnderlineStyle({ left: linkRect.left - headerRect.left, width: linkRect.width });
      }
    }
  }, [activeSection]);

  return (
    <header ref={headerRef} className="bg-white/70 backdrop-blur-lg shadow-md shadow-rose-950/10 fixed w-full z-20">
      <div className="container mx-auto p-6 flex justify-between items-center">
        <div className="text-2xl font-bold">OORH</div>
        <nav className="space-x-10">
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="hover:text-rose-700"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>

      {/* Sliding underline at header bottom */}
      <span
        className="absolute bottom-0 h-0.5 bg-rose-700 transition-all duration-300"
        style={{ left: underlineStyle.left, width: underlineStyle.width + 20, marginLeft: -10 }}
      />
    </header>
  );
}