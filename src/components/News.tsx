"use client";

import { Linkedin } from "lucide-react";

export function News() {
  return (
    <>
      <section id="news" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Actualités</h2>
          
          {/* LinkedIn Embedded Post */}
          <div className="mx-auto max-w-xl mb-10">
            <div className="aspect-w-16 aspect-h-9 shadow-lg rounded-lg overflow-hidden">
              <iframe 
                src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7258974738423668736?collapsed=1" 
                height="675" 
                width="504" 
                frameBorder="0" 
                allowFullScreen 
                title="Post intégré LinkedIn"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <a 
              href="https://www.linkedin.com/in/odile-ollier-088025190/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-lg transition-colors"
            >
              <Linkedin className="w-5 h-5 mr-4" />
              Voir toutes mes actualités sur LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}