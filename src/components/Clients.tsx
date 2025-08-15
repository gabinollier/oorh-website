"use client";
import Image from "next/image";
import React from "react";

const clients = [
  {
    name: "Adapei Haute-Loire",
    logo: "/adapei43.png",
    description:
      "L’Adapei Haute-Loire est une association engagée auprès des personnes en situation de handicap et de leurs familles. Fondée en 1963, elle développe des services et établissements spécialisés sur tout le département pour répondre aux besoins non satisfaits.",
    period: "Depuis 2025",
  },
];

export function Clients() {
  return (
    <section id="clients" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 tracking-tight sm:text-4xl">
            Ils me font confiance
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            J&apos;ai le plaisir de collaborer avec des organisations engagées,
            apportant mon expertise pour structurer et optimiser leurs
            ressources humaines.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-4xl">
          <div className="rounded-2xl bg-gradient-to-br from-green-50 to-green-50/20 p-8 shadow-lg ring-1 ring-green-200 motion-opacity-in-0 motion-translate-y-in-25 motion-duration-1000">
            <figure className="flex flex-col items-center gap-y-6 sm:flex-row sm:gap-x-10 sm:items-start">
              <div className="flex-shrink-0">
                <Image
                  className="h-32 w-32 rounded-full object-contain bg-white p-2 shadow-md"
                  src={clients[0].logo}
                  alt={clients[0].name}
                  width={128}
                  height={128}
                />
              </div>
              <figcaption className="text-center sm:text-left">
                <div className="text-xl font-semibold text-gray-900">
                  {clients[0].name}
                </div>
                <div className="mt-1 font-semibold text-gray-500">
                  {clients[0].period}
                </div>
                <blockquote className="mt-4">
                  <p className="text-base leading-7 text-gray-700 italic">
                    « {clients[0].description} »
                  </p>
                </blockquote>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
