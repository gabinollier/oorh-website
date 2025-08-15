"use client";

import React from "react";
import Image from 'next/image';
import { Mail, MapPin, Clock, Phone, MessageSquare } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-rose-50/50 to-white scroll-m-20">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-rose-900 mb-6 motion-opacity-in-0 motion-translate-y-in-25 motion-duration-1000">
            Contact
          </h2>
        </div>

        {/* Contact content */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">

          

          {/* Contact Information */}
          <div className="motion-opacity-in-0 motion-translate-x-in-[-25] motion-duration-1000 motion-delay-300">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-rose-100">
              
              <div className="space-y-6">

              {/* CTA */}
              <div className="mb-8 pb-6 border-b border-rose-100">
                <div className="flex items-center gap-3 text-rose-700">
                  <MessageSquare size={20} />
                  <span className="font-medium text-lg">
                    Prêt·e à échanger sur vos projets RH ?
                  </span>
                </div>
                <p className="text-md text-gray-600 mt-2">
                  Contactez pour discuter de vos besoins et voir comment je peux vous accompagner.
                </p>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                  <div className="bg-rose-100 p-3 rounded-full">
                    <Mail className="text-rose-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <a 
                      href="mailto:odile.ollier@oorh.fr" 
                      className="text-rose-600 hover:text-rose-700 transition-colors text-lg"
                    >
                      odile.ollier@oorh.fr
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="bg-rose-100 p-3 rounded-full">
                    <Phone className="text-rose-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Téléphone</h4>
                    <a 
                      href="tel:+33612345678" 
                      className="text-rose-600 hover:text-rose-700 transition-colors text-lg"
                    >
                      06 12 34 56 78
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="bg-rose-100 p-3 rounded-full">
                    <MapPin className="text-rose-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Zone d&apos;intervention</h4>
                    <p className="text-gray-700 text-lg">
                      Haute-Loire et alentours
                    </p>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-start gap-4">
                  <div className="bg-rose-100 p-3 rounded-full">
                    <Clock className="text-rose-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Disponibilité</h4>
                    <p className="text-gray-700 text-lg">
                      Du lundi au vendredi<br/>
                    </p>
                  </div>
                </div>
              </div>

              
            </div>
          </div>

          {/* Map */}
          <div className="motion-opacity-in-0 motion-translate-x-in-25 motion-duration-1000 motion-delay-500">
              <div className="relative h-full min-h-[500px] flex items-center justify-center  p-8">
                <Image
                  src="/map.png"
                  alt="Zone d'intervention - Le Puy, Haute-Loire et alentours"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}