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
  BrainCircuit,
  HeartPlus,
  Landmark,
  UserCheck2
} from "lucide-react";

const domains = [
  {
    icon: Users,
    title: "Recrutement & Intégration",
    description: "Accompagnement pour recruter la bonne personne pour le poste, organiser le parcours d’intégration et garantir une expérience candidat positive.",
  },
  {
    icon: Briefcase,
    title: "Conseils & Audits RH",
    description: "Prestations de conseils, diagnostics de conformité juridique, plans d’actions, mise en œuvre et suivi des actions de manière opérationnelle.",
  },
  {
    icon: FileText,
    title: "Gestion administrative du personnel",
    description: "Gestion des contrats de travail, des temps de travail, de la paie, des indicateurs RH, du suivi administratif des salariés jusqu’à leur sortie des effectifs.",
  },
  {
    icon: DollarSign,
    title: "Rémunérations",
    description: "Définition de politiques de rémunération, gestion de la paie, mise en conformité avec la Directive européenne sur la transparence des rémunérations, SIRH.",
  },
  {
    icon: Award,
    title: "Gestion des compétences",
    description: "Pilotage de la formation, gestion des parcours professionnels, mise en oeuvre et suivi des entretiens individuels et des entretiens de parcours professionnels.",
  },
  {
    icon: MessageSquare,
    title: "Relations sociales",
    description: `Organisation des élections du CSE, animation des réunions et négociation d'accords d'entreprise avec un point de mire : maintenir un bon climat social.`,
  },
  {
    icon: BrainCircuit,
    title: "Management & Leadership",
    description: "Support des managers pour la gestion au quotidien des équipes, la gestion des conflits, les demandes individuelles des salariés ou l’organisation du travail.",
  },
  {
    icon: Building,
    title: "Développement organisationnel",
    description: "Alignement de la politique RH avec la culture d'entreprise, mise en place ou optimisation de processus RH et d’outils tels qu’un SIRH."
  },
  {
    icon: Target,
    title: "Marque employeur",
    description: "Construction, formalisation et communication interne et externe de votre promesse employeur pour attirer et retenir les collaborateurs.",
  },
  {
    icon: HeartPlus,
    title: "QVCT et bien-être au travail",
    description: "Qualité de Vie et des Conditions de Travail et prévention en santé au travail pour des salariés en bonne santé, mieux au travail et engagés au service de la performance de l’entreprise.",
  },
  {
    icon: Landmark,
    title: "Gestion administrative et financière",
    description: "Pilotage des fonctions administratives et financières, processus comptables, gestion prévisionnelle et états intermédiaires de gestion.",
  },
  {
    icon: UserCheck2,
    title: "Interlocuteur privilégié",
    description: "Du dirigeant, des salariés, des organismes extérieurs et de l’ensemble des parties prenantes pour toutes les questions RH, administratives et financières.",
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
          <p className="text-lg lg:text-xl text-gray-700 max-w-5xl motion-opacity-in-0 motion-translate-y-in-25 motion-duration-1000 motion-delay-200">
            <span>Mon expertise couvre tous les contours de la fonction RH pour piloter, structurer, développer et sécuriser la gestion de vos Ressources Humaines mais aussi la gestion administrative et financière de votre entreprise.
</span> <br/>
            <span className="mt-3 block">Elle peut être complétée par un volet de gestion administrative et financière.</span>
          </p>
        </div>

        {/* Domains Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {domains.map((domain, index) => {
            const Icon = domain.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 flex flex-col border border-gray-100 hover:scale-[1.02] motion-opacity-in-0 motion-translate-y-in-25 motion-duration-1000"
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center mr-5 flex-shrink-0">
                    <Icon className="w-8 h-8 text-rose-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-rose-900 leading-snug">{domain.title}</h3>
                </div>
                <p className="text-md  text-gray-700 leading-relaxed">
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