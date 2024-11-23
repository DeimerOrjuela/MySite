import React from "react";
import Navbar from "../../components/navigations/Navbar";
import Footer from "../../components/navigations/Footer";
import HeaderProject from "../../components/projects/HeaderProjects";
import ContactWhatsapp from "../../components/home/ContactWhatsapp";
import { useEffect } from "react";

function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="pb-28">
        <Navbar />
      </div>
      <HeaderProject />
      <ContactWhatsapp />
      <Footer />
    </div>
  );
}

export default Projects;
