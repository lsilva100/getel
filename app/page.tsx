// app/page.tsx
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Pain from "@/components/sections/Pain";
import Solutions from "@/components/sections/Solutions";
import TrackerHighlight from "@/components/sections/TrackerHighlight";
import BuyVsRent from "@/components/sections/BuyVsRent";
import Segments from "@/components/sections/Segments";
import Pillars from "@/components/sections/Pillars";
import CtaFinal from "@/components/sections/CtaFinal";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Pain />
        <Solutions />
        <TrackerHighlight />
        <BuyVsRent />
        <Segments />
        <Pillars />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}