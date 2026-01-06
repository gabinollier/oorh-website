"use client";
import Image from "next/image";
import React from "react";

const clients = [
  {
    name: "Adapei Haute-Loire",
    logo: "/adapei43.png",
    description:
      "RRH de transition",
    period: "De juillet à décembre 2025",
  },
];

export function Clients() {
  return (
    <section id="clients" className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
            Ils m&apos;ont fait confiance
          </h2>
          {/* <p className="mt-4 text-base leading-7 text-gray-600">
            J&apos;ai eu le plaisir de collaborer avec des organisations engagées,
            apportant mon expertise pour structurer et optimiser leurs
            ressources humaines.
          </p> */}
        </div>
        <div className="mx-auto mt-12 max-w-2xl">
          <div className="rounded-2xl bg-gradient-to-br from-green-50 to-green-50/20 p-6 shadow-lg ring-1 ring-green-200 motion-opacity-in-0 motion-translate-y-in-25 motion-duration-1000">
            <figure className="flex flex-col items-center gap-y-4 sm:flex-row sm:gap-x-8 sm:items-center">
              <div className="flex-shrink-0">
                <Image
                  className="h-24 w-24 rounded-full object-contain bg-white p-2 shadow-md"
                  src={clients[0].logo}
                  alt={clients[0].name}
                  width={96}
                  height={96}
                />
              </div>
              <figcaption className="text-center sm:text-left flex-1">
                <div className="text-lg font-semibold text-gray-900">
                  {clients[0].name}
                </div>
                <div className="mt-1 text-sm font-medium text-gray-500">
                  {clients[0].period}
                </div>
                <p className="mt-2 text-sm leading-6 text-gray-700 italic">
                  {clients[0].description}
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
