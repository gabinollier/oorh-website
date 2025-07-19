"use client";

import React from "react";
import { Clock, Users, Target, Briefcase, ArrowRight, CheckCircle2, ArrowRightFromLine } from "lucide-react";

const services = [
  {
    icon: Clock,
    title: "DRH à temps partagé",
    subtitle: "Flexibilité et expertise immédiate",
    description: "Une solution sur-mesure pour les TPE, PME et organisations qui souhaitent bénéficier de compétences RH expertes de manière flexible.",
    features: [
      "Court, moyen ou long terme",
      "Immédiatement opérationnelle",
      "Coûts optimisés",
      "Expertise confirmée"
    ],
    color: "rose"
  },
  {
    icon: ArrowRightFromLine,
    title: "Management de transition",
    subtitle: "Solutions d'urgence et projets spécifiques",
    description: "Intégration temporaire d'un profil expert pour répondre à des besoins précis et urgents dans des situations délicates.",
    features: [
      "Continuité de service garantie",
      "Gestion de crise",
      "Projets SIRH et digitalisation",
      "Accompagnement au changement"
    ],
    color: "purple"
  }
];

const interventions = [
  {
    icon: Users,
    title: "Poste vacant",
    description: "Assurer la continuité suite à un départ ou une absence prolongée"
  },
  {
    icon: Briefcase,
    title: "Projets spécifiques",
    description: "Piloter l'évolution SIRH, transition numérique, nouveaux processus"
  },
  {
    icon: Target,
    title: "Renforcement d'équipe",
    description: "Soutien en période de surcharge ou contexte de crise interne"
  },
  {
    icon: ArrowRight,
    title: "Transformation",
    description: "Accompagner fusion, acquisition, fermeture, restructuration"
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-rose-50/50 to-white scroll-m-20">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-rose-900 mb-6 motion-opacity-in-0 motion-translate-y-in-25 motion-duration-1000">
            Mes services
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed motion-opacity-in-0 motion-translate-y-in-25 motion-duration-1000 motion-delay-200">
            Je vous propose différentes solutions RH expertes et flexibles, adaptées aux besoins spécifiques de votre organisation.
          </p>
        </div>

        {/* Big services */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 motion-opacity-in-0 motion-translate-y-in-25 motion-duration-1000`}
                style={{ animationDelay: `${300 + index * 200}ms` }}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br from-${service.color}-500 to-${service.color}-600 rounded-2xl flex items-center justify-center mr-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-rose-900">{service.title}</h3>
                    <p className="text-lg text-gray-600 font-medium">{service.subtitle}</p>
                  </div>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-rose-500 mr-3 flex-shrink-0" />
                      <span className="text-md text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Small services */}
        <div className="motion-opacity-in-0 motion-translate-y-in-25 motion-duration-1000 motion-delay-700">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interventions.map((intervention, index) => {
              const Icon = intervention.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-rose-600 rounded-2xl flex items-center justify-center mr-3">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-rose-900">
                        {intervention.title}
                      </h4>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {intervention.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}