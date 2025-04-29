import React from "react";

export function News() {
  return (
    <section id="news" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Actualités</h2>
        <ul className="space-y-4 text-gray-700">
          <li>• Lorem ipsum dolor sit amet (Mai 2025)</li>
          <li>• Ut enim ad minim veniam (Avril 2025)</li>
          {/* Ajoutez d’autres actualités ici */}
        </ul>
      </div>
    </section>
  );
}