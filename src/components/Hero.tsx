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
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-rose-100 to-rose-50/50 pt-20 relative overflow-hidden" // Adjusted background gradient
    >

      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video.
      </video>
      <div className="absolute inset-0 bg-black opacity-70 z-1  motion-opacity-in-100 motion-duration-1500"></div>

      <div className="flex flex-col md:flex-row items-center justify-center mb-12"> {/* Added margin-bottom */}
        <div className="flex items-center justify-center mr-8 mb-4 md:mb-0">
          <Image
            src="/photo.png"
            width={200}
            height={200}
            alt="Photo"
            className="rounded-full shadow-lg" // Added shadow
          />
        </div>
        <div className="flex flex-col justify-center text-center md:text-left"> {/* Centered text on small screens */}
          <h1 className="text-5xl font-extrabold mb-4 text-rose-900"> {/* Changed text color */}
            Bienvenue chez OORH
          </h1>
          <p className="text-gray-700 text-lg"> {/* Increased text size and changed color */}
            Votre partenaire expert en Ressources Humaines.
          </p>
        </div>
      </div>

      {/* Embla Carousel for Quotes */}
      <div className="z-10 embla embla-fade w-full max-w-2xl mx-auto mt-52 overflow-hidden" ref={emblaRef}> {/* Added overflow-hidden and embla-fade */}
        <div className="embla__container flex ">
          {(quotes).map((quote, index) => (
            <div className="embla__slide flex-[0_0_100%] min-w-0 px-4" key={index}>
              <blockquote className="text-center italic text-xl text-white font-serif mb-2"> {/* Nice font and styling */}
                "{quote.text}"
              </blockquote>
              <cite className="block text-center text-gray-200 font-serif">- {quote.cite}</cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}