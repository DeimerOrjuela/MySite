import React from "react";
import whatsapp from "../../assets/img/whatsapp.png";

const ContactWhatsapp = () => {
  return (
    <div className="fixed bottom-5 right-5 z-50 hover:scale-110 transition-transform duration-200">
      <a
        href="https://wa.me/3017079111?text=Hola%me%gustaria%contactarte..."
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={whatsapp} alt="WhatsApp" className="w-84 h-24" />
      </a>
    </div>
  );
};

export default ContactWhatsapp;
