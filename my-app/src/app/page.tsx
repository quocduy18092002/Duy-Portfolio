"use client";

import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Intro from "@/components/Intro/Intro";
import MenuTop from "@/components/MenuTop/MenuTop";
import Works from "@/components/Works/Works";

export default function Home() {
  return (
    <div className="bg-[#040404] overflow-x-hidden">
      <MenuTop />
      <Intro />
      <About />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}
