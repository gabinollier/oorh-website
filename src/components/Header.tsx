"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from 'next/image';

const sections = [
  { id: "hero",       label: "Accueil"       },
  { id: "about",      label: "À Propos"      },
  { id: "services",   label: "Services"      },
  { id: "domains",    label: "Domaines"      },
  { id: "news",       label: "Actualités"    },
  { id: "contact",    label: "Contact"       },
];

export function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  // Update underline position when activeSection changes (only for desktop)
  useEffect(() => {
    if (headerRef.current && window.innerWidth >= 768) {
      const link = headerRef.current.querySelector(`a[href="#${activeSection}"]`) as HTMLElement;
      if (link) {
        const headerRect = headerRef.current.getBoundingClientRect();
        const linkRect = link.getBoundingClientRect();
        setUnderlineStyle({ left: linkRect.left - headerRect.left, width: linkRect.width });
      }
    }
  }, [activeSection]);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header ref={headerRef} className="bg-white/90 backdrop-blur-xl border-b border-white/20 shadow-xl fixed w-full z-20 before:absolute before:inset-0 before:bg-gradient-to-r before:from-rose-50/10 before:to-transparent before:pointer-events-none">
      <div className="container mx-auto px-4 py-3 md:p-6 flex justify-between items-center relative z-10">
        {/* Logo */}
        <div className="flex items-center gap-2 md:gap-3">
          <Image src="/logo.png" alt="OORH Logo" width={32} height={32} className="h-8 w-8 md:h-10 md:w-10" />
          <div className="text-xl md:text-2xl font-bold">OORH</div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 lg:space-x-10">
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="hover:text-rose-700 transition-all duration-300 relative px-2 py-1 hover:bg-white/30 hover:backdrop-blur-sm text-sm lg:text-base"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 border-0 text-transparent bg-transparent relative focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
          <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-white/20 shadow-xl transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
        <nav className="container mx-auto px-4 py-4 space-y-3">
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={handleLinkClick}
              className="block py-3 px-4 hover:text-rose-700 hover:bg-rose-50/50 transition-all duration-200 rounded-lg text-base"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>

      {/* Sliding underline for desktop only */}
      <span
        className="hidden md:block absolute bottom-0 h-1 bg-gradient-to-r from-rose-600 to-rose-700 transition-all duration-300 rounded-full shadow-sm"
        style={{ left: underlineStyle.left, width: underlineStyle.width + 20, marginLeft: -10 }}
      />
    </header>
  );
}