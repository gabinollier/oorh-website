"use client";

import React from "react";
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const quotes = [
  { text: "La grandeur d'un métier est avant tout d'unir les Hommes ; Il n'est qu'un luxe véritable et c'est celui des relations humaines.", cite: "Antoine de Saint-Exupéry" },
  { text: "Si vous vous occupez de votre personnel, ils s’occuperont de vos clients.", cite: "Richard Branson" },
  { text: "Les ressources financières représentent le réseau sanguin d’une entreprise, les ressources humaines en sont le cerveau.", cite: "Rob Silzer" },
  { text: "Les ressources humaines ne sont pas quelque chose que nous faisons, c’est ce qui permet à notre entreprise de fonctionner.", cite: "Steve Wynne" },
];

export function Hero() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 5000 })]
  );

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-rose-100 to-rose-50/50 pt-16 md:pt-20 pb-4 md:pb-8 relative overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-[110%] min-h-[110%] max-w-none blur-md -left-[5%] -top-[5%]"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video.
      </video>
      <div className="absolute inset-0 bg-black/60 z-1 motion-opacity-in-100 motion-duration-1500"></div>

      {/* Main content area */}
      <div className="flex-1 flex items-center justify-center z-10 px-4 md:px-6 lg:px-8 mb-10">
        <div className="max-w-6xl mx-auto w-full">
          {/* Professional layout: photo and content */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-20 xl:gap-32">
            {/* Photo */}
            <div className="flex-shrink-0 motion-opacity-in-0 motion-translate-x-in-[-50] motion-duration-1000 motion-delay-300">
              <div className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] overflow-hidden rounded-full shadow-2xl">
                <Image
                  src="/photo.png"
                  width={350}
                  height={350}
                  alt="Odile Ollier - Consultante RH"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center text-left max-w-2xl motion-opacity-in-0 motion-translate-x-in-50 motion-duration-1000 motion-delay-500">
              <div className="mb-6 md:mb-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-sans tracking-tight leading-tight">
                  Odile Ollier
                </h1>
                <p className="text-base md:text-lg text-white/70 italic mt-1 md:mt-1.5">
                  Experte, à temps partagé, en management des Ressources Humaines et en gestion administrative et financière
                </p>
              </div>

              <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                <p className="text-base md:text-lg text-white/90 ">
                  Je vous accompagne dans la gestion et le développement de votre structure :
                </p>
                <div className="text-sm md:text-base text-white/70 space-y-1">
                  <div className="text-white/70 hover:text-white/90 transition-colors duration-300 hover:duration-0 flex items-center justify-start lg:justify-start gap-2">
                    <div className="w-2 h-2 bg-rose-400 rounded-full flex-shrink-0"></div>
                    <span>Solutions RH et de gestion personnalisées</span>
                  </div>
                  <div className="text-white/70 hover:text-white/90 transition-colors duration-300 hover:duration-0 flex items-center justify-start lg:justify-start gap-2">
                    <div className="w-2 h-2 bg-rose-400 rounded-full flex-shrink-0"></div>
                    <span>Expertise confirmée, flexibilité et agilité</span>
                  </div>
                  <div className="text-white/70 hover:text-white/90 transition-colors duration-300 hover:duration-0 flex items-center justify-start lg:justify-start gap-2">
                    <div className="w-2 h-2 bg-rose-400 rounded-full flex-shrink-0"></div>
                    <span>Performances sociale, économique et financière optimisées et durables</span>
                  </div>
                  <div className="text-white/70 hover:text-white/90 transition-colors duration-300 hover:duration-0 flex items-center justify-start lg:justify-start gap-2">
                    <div className="w-2 h-2 bg-rose-400 rounded-full flex-shrink-0"></div>
                    <span>Coûts maîtrisés</span>
                  </div>
                </div>
              </div>

              {/* Professional CTA Button */}
              <div className="flex justify-center lg:justify-start motion-opacity-in-0 motion-translate-y-in-25 motion-duration-1000 motion-delay-700">
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white font-semibold py-3 px-6 md:py-4 md:px-8 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-rose-500/50 text-sm md:text-base"
                >
                  <span className="flex items-center gap-2 md:gap-3">
                    En savoir plus
                    <svg className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:motion-translate-x-loop-25 motion-duration-1000" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Embla Carousel for Quotes - hidden on mobile to save space */}
      <div className="text-md absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden md:block z-10 embla embla-fade w-full max-w-6xl px-4 motion-opacity-in-0 motion-duration-1500 motion-delay-1000" ref={emblaRef}>
        <div className="embla__container flex">
          {quotes.map((quote, index) => (
            <div className="embla__slide flex-[0_0_100%] min-w-0 px-4 flex flex-col justify-end" key={index}>
              <blockquote className="text-center italic text-white/90 font-serif mb-2">
                &ldquo;{quote.text}&rdquo;
              </blockquote>
              <cite className="block text-center text-white/70 font-serif not-italic">
                — {quote.cite}
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}