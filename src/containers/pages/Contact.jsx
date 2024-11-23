import React from "react";
import Navbar from "../../components/navigations/Navbar";
import Footer from "../../components/navigations/Footer";
import HeaderContact from "../../components/contact/HeaderContact";
import ContactWhatsapp from "../../components/home/ContactWhatsapp";
import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="pb-28">
        <Navbar />
      </div>
      <HeaderContact />
      <ContactWhatsapp />
      <Footer />
    </div>
  );
}

export default Contact;
