import React from "react";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Missions } from "../components/Missions";
import { Why } from "../components/Why";
import { Domains } from "../components/Domains";
import { News } from "../components/News";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Why />
        <Missions />
        <Domains />
        <News />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
