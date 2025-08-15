import React from "react";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { AboutMe } from "../components/AboutMe";
import { Services } from "../components/Services";
import { Domains } from "../components/Domains";
import { Clients } from "../components/Clients";
import { News } from "../components/News";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <Services />
        <Domains />
        <News />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
