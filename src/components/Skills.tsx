import React from "react";
import { Code, UserCog } from "lucide-react";

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-rose-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Mes Compétences</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <li className="flex items-center space-x-4">
            <Code size={32} className="text-blue-600" />
            <span>Lorem ipsum dolor sit amet</span>
          </li>
          <li className="flex items-center space-x-4">
            <UserCog size={32} className="text-blue-600" />
            <span>Consectetur adipiscing elit</span>
          </li>
          {/* Ajoutez d’autres compétences ici */}
        </ul>
      </div>
    </section>
  );
}