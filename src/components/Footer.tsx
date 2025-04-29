import React from "react";

export function Footer() {
  return (
    <footer className="bg-rose-50 py-6">
      <div className="container mx-auto px-6 text-center text-gray-600">
        © {new Date().getFullYear()} OORH. Tous droits réservés. <br/>
        <span className="text-gray-400">Développé par <a href="https://github.com/gabinollier" className="hover:text-gray-600 underline">Gabin Ollier</a></span>
      </div>
    </footer>
  );
}