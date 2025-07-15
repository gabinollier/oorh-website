import React from "react";
import Image from 'next/image';

export function Domains() {
  return (
    <section id="domains" className="py-20 bg-white scroll-m-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Mes domaines d’interventions</h2>

        <h3 className="text-2xl font-semibold mt-4 mb-2">Recrutements et parcours d’intégration (On-boarding)</h3>
        <p className="mb-4">Vous accompagner pour recruter les meilleurs profils et garantir un process de recrutement fiable, valide, équitable et porteur d’une expérience candidat positive.</p>
        <blockquote className="italic border-l-4 pl-4 mb-4">« de la rigueur, de la méthode, de la structuration et de l’harmonie dans nos processus de recrutement tout en garantissant une grande humanité sur la forme. » <br/><cite>Villemus, P. (2023). Le recrutement gagnant !</cite></blockquote>

        <h3 className="text-2xl font-semibold mt-4 mb-2">Accompagnement et conseils RH</h3>
        <p className="mb-4">Prise en charge possible par votre OPCO pour des prestations de conseil adaptées à vos besoins.</p>

        <h3 className="text-2xl font-semibold mt-4 mb-2">Audits RH</h3>
        <p className="mb-4">Vérification de votre conformité aux obligations légales, réglementaires et conventionnelles.</p>

        <h3 className="text-2xl font-semibold mt-4 mb-2">Gestion administrative du personnel</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Suivi administratif et contrats de travail</li>
          <li>Paie et déclarations sociales</li>
          <li>Gestion des plannings et absences</li>
          <li>Tableaux de bord RH</li>
          <li>Procédures disciplinaires et ruptures de contrat</li>
          <li>Mise en place de prévoyance santé et SIRH</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-4 mb-2">Rémunérations</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Définition et mise en place de politiques de rémunération</li>
          <li>Gestion de la paie et des déclarations sociales</li>
          <li>Accompagnement vers la conformité à la directive européenne sur la transparence des rémunérations (applicable dès 2026)</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-4 mb-2">Gestion des compétences</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Plan de Développement des Compétences (PDC) et plan de formation</li>
          <li>Gestion des Emplois et Parcours Professionnels (GEPP)</li>
          <li>Entretiens d’évaluation et professionnels</li>
          <li>Optimisation des parcours de carrière</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-4 mb-2">Gestion des relations sociales</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Organisation des élections du CSE</li>
          <li>Climat social et négociation d’accords (temps de travail, télétravail, participation, intéressement, etc.)</li>
          <li>Mise en œuvre de la Négociation Annuelle Obligatoire (NAO)</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-4 mb-2">Attractivité et fidélisation (Marketing RH & marque employeur)</h3>
        <p className="mb-4">Faire la différence pour attirer et fidéliser les talents : définir votre promesse employeur, identifier votre cible, choisir les canaux et créer du contenu engageant.</p>
        <Image src="/news/test.jpg" alt="Marque employeur" width={800} height={600} className="w-full h-auto mb-4" />

        <h3 className="text-2xl font-semibold mt-4 mb-2">Développement organisationnel</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Culture et valeurs d’entreprise</li>
          <li>Communication interne</li>
          <li>Optimisation des processus internes</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-4 mb-2">Management et Leadership</h3>
        <ul className="list-disc list-inside">
          <li>Management d’équipes</li>
          <li>Accompagnement de managers</li>
        </ul>

      </div>
    </section>
  );
}