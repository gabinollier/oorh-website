import React from "react";

export function Missions() {
  return (
    <section id="missions" className="py-20 bg-rose-50 scroll-m-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Mes missions</h2>
        <ul className="list-disc list-inside mb-6">
          <li>RRH ou DRH à temps partagé à court, moyen ou long terme</li>
          <li>DRH de transition</li>
        </ul>
        <p className="mb-4">Le temps partagé répond à un vrai besoin des entreprises. Il permet aux entreprises même les plus petites, aux TPE, PME et autres organisations, de bénéficier de compétences RH de manière très flexible, immédiatement opérationnelles et disponibles.</p>
        <p className="mb-4">Le management de transition dans les Ressources Humaines consiste à intégrer temporairement un profil expert au sein d'une organisation pour répondre à un besoin précis et urgent lié à une situation délicate. Le manager de transition peut être sollicité pour :</p>
        <ul className="list-disc list-inside">
          <li>Occuper un poste vacant suite à un départ ou à une absence prolongée, afin de garantir la continuité de service des processus RH</li>
          <li>Piloter des projets spécifiques : conduire une évolution majeure du Système d'Information RH (SIRH), accompagner une transition numérique…</li>
          <li>Renforcer temporairement une équipe : en période de surcharge ou dans un contexte de crise interne</li>
          <li>Accompagner un changement organisationnel important (fusion, acquisition, fermeture de site, restructuration)</li>
        </ul>
      </div>
    </section>
  );
}