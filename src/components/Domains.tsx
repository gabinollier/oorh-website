"use client";

import React from "react";
import {
  Users,
  Briefcase,
  FileText,
  DollarSign,
  Award,
  MessageSquare,
  Target,
  Building,
  BrainCircuit
} from "lucide-react";

const domains = [
  {
    icon: Users,
    title: "Recrutement & Intégration",
    description: "Accompagnement pour recruter les meilleurs profils et garantir une expérience candidat positive.",
  },
  {
    icon: Briefcase,
    title: "Conseils & Audits RH",
    description: "Prestations de conseil sur-mesure et audits de conformité (légal, réglementaire, conventionnel).",
  },
  {
    icon: FileText,
    title: "Gestion administrative",
    description: "Suivi des contrats, paie, plannings, tableaux de bord, procédures disciplinaires et SIRH.",
  },
  {
    icon: DollarSign,
    title: "Rémunérations",
    description: "Définition de politiques de rémunération et gestion de la paie, incluant la conformité européenne 2026.",
  },
  {
    icon: Award,
    title: "Gestion des compétences",
    description: "Développement des compétences (PDC), GEPP et optimisation des parcours de carrière.",
  },
  {
    icon: MessageSquare,
    title: "Relations sociales",
    description: "Organisation des élections du CSE, négociation d'accords et gestion du climat social.",
  },
  {
    icon: Target,
    title: "Marque employeur",
    description: "Stratégies pour attirer et fidéliser les talents en définissant une promesse employeur forte.",
  },
  {
    icon: Building,
    title: "Développement organisationnel",
    description: "Alignement de la culture d'entreprise, optimisation des processus et communication interne.",
  },
  {
    icon: BrainCircuit,
    title: "Management & Leadership",
    description: "Accompagnement des managers et développement des compétences en leadership.",
  },
];

export function Domains() {
  return (
    <section id="domains" className="py-20 bg-white scroll-m-20">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-rose-900 mb-6 motion-opacity-in-0 motion-translate-y-in-25 motion-duration-1000">
            Mes domaines d’intervention
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-3xl motion-opacity-in-0 motion-translate-y-in-25 motion-duration-1000 motion-delay-200">
            Mon expertise couvre l’ensemble des fonctions RH pour structurer, développer et sécuriser votre organisation.
          </p>
        </div>

        {/* Domains Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domains.map((domain, index) => {
            const Icon = domain.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 flex flex-col motion-opacity-in-0 motion-translate-y-in-25 motion-duration-1000"
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center mr-5">
                    <Icon className="w-8 h-8 text-rose-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-rose-900 leading-snug">{domain.title}</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {domain.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}