import { useState } from "react";
import "@/App.css";
import { LangContext } from "@/i18n";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Vehicle from "@/components/Vehicle";
import Reviews from "@/components/Reviews";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Floating from "@/components/Floating";

function App() {
  const [lang, setLang] = useState("en");

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <div
        className={`App ${lang === "ne" ? "font-nepali" : ""}`}
        data-testid="app-root"
      >
        <Navbar />

        <main>
          <Hero />
          <Marquee />
          <Services />
          <Vehicle />
          <Reviews />
          <Booking />
          <Contact />
        </main>

        <Footer />
        <Floating />
      </div>
    </LangContext.Provider>
  );
}

export default App;
