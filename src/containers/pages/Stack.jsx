import React from "react";
import Navbar from "../../components/navigations/Navbar";
import Footer from "../../components/navigations/Footer";
import HeaderStack from "../../components/stack/HeaderStack";
import ContactWhatsapp from "../../components/home/ContactWhatsapp";
import { useEffect } from "react";

function Stack() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="pb-20">
        <Navbar />
      </div>
      <HeaderStack />
      <ContactWhatsapp />
      <Footer />
    </div>
  );
}

export default Stack;
