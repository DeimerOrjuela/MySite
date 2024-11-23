import React from "react";
import Navbar from "../../components/navigations/Navbar";
import Footer from "../../components/navigations/Footer";
import Header from "../../components/home/Header";
import ContactWhatsapp from "../../components/home/ContactWhatsapp";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="pb-28">
        <Navbar />
      </div>
      <Header />
      <ContactWhatsapp />
      <Footer />
    </div>
  );
}

export default Home;
