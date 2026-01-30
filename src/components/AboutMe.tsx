"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { CheckCircle2, Heart, GraduationCap } from 'lucide-react';

const experiences = [
  {
    period: "1993 - 2000",
    title: "Assistante de gestion",
    company: "Proteg Securité - Securitas",
    description: "Gestion des ressources humaines (200 salariés), compabilité et gestion",
    logo: "/logo-securitas.jpg",
    type: "experience"
  },
  {
    period: "2000-2005",
    title: "Responsable Administrative",
    company: "Just A Link",
    description: "Responsable des Ressources Humaines (40 salariés), comptabilité et gestion, assistante du dirigeant et encadrement d'équipe",
    logo: "/logo-jal.gif",
    type: "experience"
  },
  {
    period: "2005 - 2007",
    title: "Collaboratrice comptable",
    company: "Cabinet ALIX et Associés",
    description: "Suivi portefeuille clients, révision comptable",
    logo: "/logo-alix-et-associes.png",
    type: "experience"
  },
  {
    period: "2007 - 2016",
    title: "RRH et Responsable administrative et comptable",
    company: "CEDAT-JEAN Automobiles",
    description: "Responsable des ressources humaines (+300 salariés), comptabilité et gestion, support et management",
    logo: "/logo-cedat-jean.jpg",
    type: "experience"
  },
  {
    period: "2012 - 2015",
    title: "Formatrice",
    company: "Pôle La Chartreuse",
    description: "Formation en droit du travail aux étudiants préparant un Diplôme de Comptabilité et de Gestion (DCG)",
    logo: "/logo-la-chartreuse.png",
    type: "experience"
  },
  {
    period: "2017 - 2024",
    title: "DRH et Responsable administrative",
    company: "SCP ALTILABO",
    description: "Directrice RH (~110 salariés), comptabilité et gestion, support à la direction, aux managers et encadrement d'équipes",
    logo: "/logo-altilabo.webp",
    type: "experience"
  },
  {
    period: "2024 - 2025",
    title: "Master 2 Management des RH et des Organisations",
    company: "IAE de Lyon",
    description: "Formation continue en Management des Ressources Humaines et des Organisations",
    logo: "/logo-iaelyon.png",
    type: "formation"
  },
  {
    period: "Depuis 04/2025",
    title: "DRH à temps partagé",
    company: "OO'RH",
    description: "Ressources Humaines et gestion administrative et financière à temps partagé, conseils RH, recrutements et formation",
    logo: "/logo.png",
    type: "experience"
  },

];

export function AboutMe() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'center',
    containScroll: false,
    dragFree: false,
    skipSnaps: false,
    startIndex: 1
  });
  const [selectedIndex, setSelectedIndex] = useState(1);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on('select', onSelect);
    onSelect();

    const autoplayInterval = setInterval(() => {
      if (emblaApi) {
        const currentIndex = emblaApi.selectedScrollSnap();
        const lastPlayableIndex = experiences.length - 2;

        if (currentIndex < lastPlayableIndex) {
          emblaApi.scrollNext();
        } else {
          emblaApi.scrollTo(1);
        }
      }
    }, 5000);

    return () => {
      emblaApi.off('select', onSelect);
      clearInterval(autoplayInterval);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-rose-50/50 to-white scroll-m-20">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-rose-900 mb-6 motion-opacity-in-0 motion-translate-y-in-25 motion-duration-1000">
            À propos de moi
          </h2>
          <div className="max-w-3xl">
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed motion-opacity-in-0 motion-translate-y-in-25 motion-duration-1000 motion-delay-200">
              Forte d’une expérience confirmée, à des postes en responsabilités RH et gestion administrative et financière, dans divers environnements, j’apporte une double expertise tant opérationnelle que stratégique. Mon approche combine savoir-faire et savoir-être pour créer et faire vivre des solutions et des outils adaptés à vos enjeux.
            </p>
          </div>
        </div>

        {/* Three columns layout */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-20">
          {/* Mes atouts */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 motion-opacity-in-0 motion-translate-y-in-25 motion-duration-1000 motion-delay-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-rose-600 rounded-xl flex items-center justify-center mr-4">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-rose-900">Mes atouts</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Mon expérience, mon expertise, mes connaissances et compétences me permettent d&apos;être
              <span className="font-semibold"> immédiatement opérationnelle</span> en prenant en compte tous les paramètres de votre entreprise, de manière globale.
            </p>
          </div>

          {/* Mes valeurs */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 motion-opacity-in-0 motion-translate-y-in-25 motion-duration-1000 motion-delay-500">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-rose-600 rounded-xl flex items-center justify-center mr-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-rose-900">Mes valeurs</h3>
            </div>
            <ul className="space-y-3 pt-2">
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-rose-400 rounded-full mr-3"></div>
                <span className="font-medium">Engagement</span>
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-rose-400 rounded-full mr-3"></div>
                <span className="font-medium">Intégrité</span>
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-rose-400 rounded-full mr-3"></div>
                <span className="font-medium">Respect</span>
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-rose-400 rounded-full mr-3"></div>
                <span className="font-medium">Diplomatie</span>
              </li>
            </ul>
          </div>

          {/* Le petit plus */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 motion-opacity-in-0 motion-translate-y-in-25 motion-duration-1000 motion-delay-700">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-rose-600 rounded-xl flex items-center justify-center mr-4">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-rose-900">Le petit plus</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Un <span className="font-semibold">Master 2</span> de Management des Ressources Humaines
              et des Organisations à l&apos;IAE de Lyon qui fut 12 mois riches en apprentissage, perfectionnement,
              ouverture d&apos;esprit et prise de hauteur.
            </p>
          </div>
        </div>

        {/* Professional Experience Carousel */}
        <div className="motion-opacity-in-0 motion-translate-y-in-25 motion-duration-1000 motion-delay-900 -mx-6 px-6">
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <h3 className="text-3xl font-bold text-rose-900">Mon parcours</h3>
            </div>
            <p className="text-lg text-gray-600 w-full">
              Découvrez mon expérience diversifiée dans la gestion des ressources humaines et la gestion administrative et financière
            </p>
          </div>

          <div className="embla overflow-hidden embla-fade" ref={emblaRef}>
            <div className="embla__container flex py-6">
              {experiences.map((exp, index) => (
                <div className="embla__slide flex-[0_0_90%] md:flex-[0_0_35%] lg:flex-[0_0_28%] min-w-0 px-1 md:px-3" key={index}>
                  <div className="bg-white rounded-2xl shadow-lg transition-all duration-300 p-6 h-full border border-gray-100 flex flex-col">
                    {/* Header with logo and period */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        {exp.logo && (
                          <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mr-3 p-1">
                            <Image
                              src={exp.logo}
                              alt={`Logo ${exp.company}`}
                              width={40}
                              height={40}
                              className="object-contain p-px"
                            />
                          </div>
                        )}
                        <div className={`w-3 h-3 rounded-full ${exp.type === 'formation' ? 'bg-blue-400' : 'bg-rose-400'}`}></div>
                      </div>
                      <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>

                    {/* Content - flex-grow to push type indicator to bottom */}
                    <div className="space-y-3 flex-grow">
                      <h4 className="font-bold text-lg text-gray-900 leading-tight">
                        {exp.title}
                      </h4>
                      <p className="font-semibold text-rose-700">
                        {exp.company}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </div>

                    {/* Type indicator - anchored at bottom */}
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <span className={`inline-flex items-center text-xs font-medium px-2 py-1 rounded-full ${exp.type === 'formation'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-rose-100 text-rose-700'
                        }`}>
                        {exp.type === 'formation' ? (
                          <>
                            <GraduationCap className="w-3 h-3 mr-1" />
                            Formation
                          </>
                        ) : (
                          <>
                            <CheckCircle2 className="w-3 h-3 mr-1" />
                            Expérience
                          </>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel indicators - Hidden on mobile when only 1 slide is visible */}
          <div className="hidden md:flex justify-center mt-8">
            <div className="relative flex items-center space-x-2">
              {/* Dots */}
              {experiences.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (index === 0) {
                      emblaApi?.scrollTo(1);
                    } else if (index === experiences.length - 1) {
                      emblaApi?.scrollTo(experiences.length - 2);
                    } else {
                      emblaApi?.scrollTo(index);
                    }
                  }}
                  className="w-2 h-2 bg-gray-300 rounded-full"
                  aria-label={`Aller à l&apos;élément ${index + 1}`}
                />
              ))}
              {/* Pill */}
              <div
                className="absolute top-1/2 -translate-y-1/2 bg-rose-600 rounded-full transition-all duration-500 ease-out"
                style={{
                  width: 'calc(0.5rem * 3 + 0.5rem * 2)', // 3 dots + 2 spaces
                  height: '0.5rem',
                  transform: `translateX(calc(${selectedIndex - 1} * (0.5rem + 0.5rem)))`, // (dot width + space) - compensate for startIndex
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}