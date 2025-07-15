"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from 'next/image';

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
    <header ref={headerRef} className="bg-white backdrop-blur-xl border-b border-white/20 shadow-xl fixed w-full z-20 before:absolute before:inset-0 before:bg-gradient-to-r before:from-rose-50/10 before:to-transparent before:pointer-events-none">
      <div className="container mx-auto p-6 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="OORH Logo" width={40} height={40} className="h-10 w-10" />
          <div className="text-2xl font-bold">OORH</div>
        </div>
        <nav className="space-x-10">
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="hover:text-rose-700 transition-all duration-300 relative px-2 py-1  hover:bg-white/30 hover:backdrop-blur-sm"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>

      {/* Sliding underline at header bottom */}
      <span
        className="absolute bottom-0 h-1 bg-gradient-to-r from-rose-600 to-rose-700 transition-all duration-300 rounded-full shadow-sm"
        style={{ left: underlineStyle.left, width: underlineStyle.width + 20, marginLeft: -10 }}
      />
    </header>
  );
}