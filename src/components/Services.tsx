"use client";

import React from "react";
import {
  Wrench,
  Calculator,
  CalendarClock,
  Hourglass,
} from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Sur l'ensemble des sujets RH",
    description:
      "J'apporte une vraie valeur ajoutée à votre organisation. Mon approche combine expertise technique et vision humaine pour créer des solutions RH sur mesure adaptées à vos besoins et à vos enjeux.",
    highlight: "Expertise RH",
  },
  {
    icon: Calculator,
    title: "Sur les fonctions comptables, administratives et financières",
    description:
      "Formalisation des procédures comptables, transfert de compétences, tenue de la comptabilité, mise en place et suivi d'une comptabilité prévisionnelle, élaboration de situations intermédiaires…",
    highlight: "Expertise financière",
  },
  {
    icon: CalendarClock,
    title: "En prestations à temps partagé",
    description:
      "Selon vos besoins, quelques jours par semaine ou par mois, dans votre entreprise. Une solution flexible et économique tout en bénéficiant d'une réelle expertise.",
    highlight: "Flexibilité totale",
  },
  {
    icon: Hourglass,
    title: "Sur la durée ou dans l'attente...",
    description:
      "...du retour d'un salarié en arrêt de travail de longue durée ou d'un recrutement pérenne. Je m'adapte à votre temporalité pour assurer la continuité de vos services.",
    highlight: "Continuité assurée",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-rose-50/50 to-white scroll-m-20">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-rose-900 mb-6 motion-opacity-in-0 motion-translate-y-in-25 motion-duration-1000">
            Mes services
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-3xl motion-opacity-in-0 motion-translate-y-in-25 motion-duration-1000 motion-delay-200">
            Véritable <span className="font-semibold">support et partenaire de confiance</span>, j&apos;interviens :
          </p>
        </div>

        {/* Services Timeline Layout */}
        <div className="relative">
          {/* Vertical accent line - visible on larger screens */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-rose-200 via-rose-400 to-rose-200" />

          <div className="space-y-12 lg:space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="motion-opacity-in-0 motion-translate-y-in-25 motion-duration-1000"
                  style={{ animationDelay: `${300 + index * 150}ms` }}
                >
                  {/* Desktop: Alternating layout */}
                  <div className={`hidden lg:flex items-center gap-8 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                    {/* Content side */}
                    <div className={`flex-1 ${isEven ? 'text-right pr-12' : 'text-left pl-12'}`}>
                      <span className="inline-block text-xs font-semibold text-rose-600 bg-rose-100 px-3 py-1.5 rounded-full mb-4">
                        {service.highlight}
                      </span>
                      <h3 className="text-2xl font-bold text-rose-900 mb-3 leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {service.description}
                      </p>
                    </div>

                    {/* Center icon node */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-rose-600 rounded-full flex items-center justify-center shadow-xl ring-4 ring-white hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Spacer for the other side */}
                    <div className="flex-1" />
                  </div>

                  {/* Mobile/Tablet: Left-aligned layout */}
                  <div className="lg:hidden group flex items-start gap-6">
                    {/* Icon */}
                    <div className="relative flex-shrink-0">
                      {/* Connecting line */}
                      {index < services.length - 1 && (
                        <div className="absolute left-1/2 top-16 bottom-0 w-px h-[calc(100%+2rem)] -translate-x-1/2 bg-gradient-to-b from-rose-300 to-rose-100" />
                      )}
                      <div className="w-14 h-14 bg-gradient-to-br from-rose-500 to-rose-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-4">
                      <span className="inline-block text-xs font-semibold text-rose-600 bg-rose-100 px-3 py-1.5 rounded-full mb-3">
                        {service.highlight}
                      </span>
                      <h3 className="text-xl font-bold text-rose-900 mb-2 leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}