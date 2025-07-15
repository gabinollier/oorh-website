"use client"; // Add this line for client-side hooks

import React, { useEffect } from "react"; // Import useEffect
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react'; // Import Embla hook
import Autoplay from 'embla-carousel-autoplay'; // Import Autoplay plugin

const quotes = [
  { text: "La grandeur d'un métier est avant tout d'unir les Hommes ; Il n'est qu'un luxe véritable et c'est celui des relations humaines.", cite: "Antoine de Saint-Exupéry" },
  { text: "Les deux choses les plus importantes n'apparaissent pas au bilan de l'entreprise : sa réputation et ses Hommes.", cite: "Henry Ford" },
  { text: "Se réunir est un début, rester ensemble est un progrès, travailler ensemble est la réussite.", cite: "Henri Ford" },
] ;

export function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 5000 })] // Add Autoplay plugin with 5-second delay
  );

  // Optional: Add autoplay or other plugins later if needed

  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-between bg-gradient-to-br from-rose-100 to-rose-50/50 pt-20 pb-8 relative overflow-hidden "
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
      <div className="flex-1 flex items-center justify-center z-10 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto w-full">
          {/* Professional layout: photo and content side by side */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-20 lg:gap-32">
            {/* Photo - same height as content */}
            <div className="flex-shrink-0 motion-opacity-in-0 motion-translate-x-in-[-50] motion-duration-1000 motion-delay-300">
              <div className="w-[400px] h-[400px] overflow-hidden rounded-full shadow-2xl">
                <Image
                  src="/photo.png"
                  width={400}
                  height={400}
                  alt="Odile Ollier - Consultante RH"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Content - matching height */}
            <div className="flex flex-col justify-center text-center lg:text-left max-w-2xl h-[400px] motion-opacity-in-0 motion-translate-x-in-50 motion-duration-1000 motion-delay-500">
              <div className="mb-8">
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white font-sans tracking-tight">
                  Odile Ollier
                </h1>
                <p className="text-lg lg:text-xl text-white/70 italic mt-2">
                  Consultante experte en Ressources Humaines
                </p>
              </div>
              
              <div className="space-y-6 mb-8 flex-1 flex flex-col justify-center">
                <p className="text-lg lg:text-xl text-white/85 leading-relaxed">
                  Je vous accompagne dans la gestion et le développement de votre capital humain.
                </p>
                <div className="text-base lg:text-lg text-white/75 space-y-2">
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
                    <span>Solutions RH personnalisées</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
                    <span>Performance optimisée</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
                    <span>Expertise confirmée</span>
                  </div>
                </div>
              </div>
              
              {/* Professional CTA Button */}
              <div className="flex justify-center lg:justify-start motion-opacity-in-0 motion-translate-y-in-25 motion-duration-1000 motion-delay-700">
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-rose-500/50"
                >
                  <span className="flex items-center gap-3">
                    Découvrir mes services
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Embla Carousel for Quotes - positioned at bottom */}
      <div className="z-10 embla embla-fade w-full max-w-3xl mx-auto px-4 mb-12 motion-opacity-in-0 motion-duration-1500 motion-delay-1000" ref={emblaRef}>
        <div className="embla__container flex">
          {quotes.map((quote, index) => (
            <div className="embla__slide flex-[0_0_100%] min-w-0 px-4" key={index}>
              <blockquote className="text-center italic text-lg md:text-xl text-white/90 font-serif mb-2">
                "{quote.text}"
              </blockquote>
              <cite className="block text-center text-white/70 font-serif text-sm">
                — {quote.cite}
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}