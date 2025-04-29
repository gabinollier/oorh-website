import React from "react";
import Image from 'next/image';

export function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col md:flex-row justify-center items-center -bg-linear-40 from-rose-100 motion-bg to-rose-50/50 pt-20 relative overflow-hidden"
    >
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="flex items-center justify-center mr-8 mb-4 md:mb-0">
          <Image 
            src="/photo.png" 
            width={200} 
            height={200} 
            alt="Photo" 
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-extrabold mb-4">
            Bienvenue chez OORH
          </h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
          </p>
        </div>
      </div>
    </section>
  );
}