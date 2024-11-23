import React from "react";
import Navbar from "../../components/navigations/Navbar";
import Footer from "../../components/navigations/Footer";
import HeaderAboutUS from "../../components/aboutUS/HeaderAboutUS";
import ContactWhatsapp from "../../components/home/ContactWhatsapp";
import { useEffect } from "react";

function AboutUS() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="pb-28">
        <Navbar />
      </div>
      <HeaderAboutUS />
      <ContactWhatsapp />
      <Footer />
    </div>
  );
}

export default AboutUS;
