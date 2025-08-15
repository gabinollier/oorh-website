"use client";

import React from "react";
import { Clock, CheckCircle2, ArrowRightFromLine } from "lucide-react";

const services = [
  {
    icon: Clock,
    title: "DRH à temps partagé",
    subtitle: "Flexibilité et expertise sur-mesure",
    description: "Une solution adaptée aux TPE, PME et organisations souhaitant bénéficier de compétences RH expertes de manière flexible, sans alourdir leur structure.",
    features: [
      "Intervention à court, moyen ou long terme",
      "Profil expert immédiatement opérationnel",
      "Optimisation des coûts et de la masse salariale",
      "Accompagnement stratégique et opérationnel"
    ],
    gradient: "from-rose-500 to-rose-600"
  },
  {
    icon: ArrowRightFromLine,
    title: "Management de transition",
    subtitle: "Solutions d'urgence et projets stratégiques",
    description: "Intégration d'un profil expert pour piloter des projets complexes, gérer des situations de crise ou assurer la continuité managériale.",
    features: [
      "Remplacement de poste vacant (départ, absence)",
      "Gestion de projets de transformation (SIRH, etc.)",
      "Renforcement d'équipe en contexte de crise",
      "Conduite de réorganisations (fusion, acquisition)"
    ],
    gradient: "from-rose-500 to-rose-600"
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white scroll-m-20">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-rose-900 mb-6 motion-opacity-in-0 motion-translate-y-in-25 motion-duration-1000">
            Mes services
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed motion-opacity-in-0 motion-translate-y-in-25 motion-duration-1000 motion-delay-200">
            Je vous propose différentes solutions RH expertes et flexibles, adaptées aux besoins spécifiques de votre organisation.
          </p>
        </div>

        {/* Big services */}
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 motion-opacity-in-0 motion-translate-y-in-25 motion-duration-1000 flex flex-col`}
                style={{ animationDelay: `${300 + index * 200}ms` }}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mr-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-rose-900">{service.title}</h3>
                    <p className="text-lg text-gray-600 font-medium">{service.subtitle}</p>
                  </div>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-auto pt-6 border-t border-gray-100">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-rose-500 mr-3 flex-shrink-0" />
                      <span className="text-md text-gray-600 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}