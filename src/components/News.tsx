"use client";

import { Linkedin, ExternalLink } from "lucide-react";
import { useState } from "react";

// Define a type for news items
type NewsItem = {
  id: string;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  linkedinUrl: string;
};

// Sample news data
const newsItems: NewsItem[] = [
  {
    id: "news1",
    title: "Nouvelle formation en leadership accessible",
    description: "Je suis heureuse d'annoncer le lancement de ma nouvelle formation en leadership adaptée aux besoins des entreprises modernes.",
    date: "15 avril 2025",
    imageUrl: "/news/test.jpg",
    linkedinUrl: "https://www.linkedin.com/in/odile-ollier-088025190/recent-activity/",
  },
  {
    id: "news2",
    title: "Atelier RH : Gestion des talents",
    description: "Retour sur notre dernier atelier consacré aux meilleures pratiques de gestion des talents et d'intégration.",
    date: "28 mars 2025",
    imageUrl: "/news/atelier-rh.jpg",
    linkedinUrl: "https://www.linkedin.com/in/odile-ollier-088025190/recent-activity/",
  },
  {
    id: "news3",
    title: "Interview : L'avenir du recrutement",
    description: "J'ai récemment partagé ma vision de l'avenir du recrutement et des RH dans une interview exclusive.",
    date: "10 février 2025",
    imageUrl: "/news/interview.jpg",
    linkedinUrl: "https://www.linkedin.com/in/odile-ollier-088025190/recent-activity/",
  },
];

export function News() {
  return (
    <>
      <section id="news" className="py-20 bg-white scroll-m-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">Actualités</h2>
          
          {/* Custom News Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {newsItems.map((item, index) => (
              <div 
                key={item.id}
                className={"intersect:motion-preset-slide-up bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full" + " " + ["motion-delay-500", "motion-delay-1000", "motion-delay-1500"][index % 3]}
              >
                <div className="aspect-w-16 aspect-h-9 relative">
                  <ImageWithFallback
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{item.description}</p>
                  <a
                    href={item.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sky-600 hover:text-sky-700 font-medium mt-auto"
                  >
                    Lire sur LinkedIn
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
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

// Image component with fallback
function ImageWithFallback({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`bg-sky-100 flex items-center justify-center ${className}`}>
        <Linkedin className="w-12 h-12 text-sky-600" />
      </div>
    );
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      className={className}
      onError={() => setError(true)}
    />
  );
}