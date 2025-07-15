import React from "react";
import { Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-rose-50 scroll-m-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="flex items-center text-gray-700">
          <Mail size={24} className="mr-2 text-blue-600" />
          Lorem ipsum dolor sit amet, envoyez-moi un message.
        </p>
      </div>
    </section>
  );
}