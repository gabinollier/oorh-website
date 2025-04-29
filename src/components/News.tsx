"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Linkedin } from "lucide-react";

// Sample news data - you could move this to a separate file or fetch from an API
const newsItems = [
  {
    id: 1,
    title: "Nouveau partenariat stratégique",
    date: "15 avril 2025",
    excerpt: "Nous sommes ravis d'annoncer notre nouveau partenariat avec...",
    imageUrl: "/images/news/partnership.jpg",
    link: "https://www.linkedin.com/company/your-company/posts/"
  },
  {
    id: 2,
    title: "Webinaire sur les ressources humaines",
    date: "3 avril 2025",
    excerpt: "Rejoignez-nous pour un webinaire exclusif sur les dernières tendances RH...",
    imageUrl: "/images/news/webinar.jpg",
    link: "https://www.linkedin.com/company/your-company/posts/"
  },
  // Add more news items as needed
];

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