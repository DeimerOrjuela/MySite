import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import bgaboutus2 from "../../assets/img/bgaboutus2.png";

function HeaderContact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_vz03o9q", "template_gnpt8gn", form.current, {
        publicKey: "cU-ooHCyNoDI0stP6",
      })
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "¡Mensaje enviado!",
            text: "Hemos recibido tus datos, pronto me pondre en contacto contigo....",
            background: "#06011a", // Fondo olive-green
            color: "#e5e7eb", // Texto bg-gray-200 (equivalente al gris claro)
            confirmButtonColor: "#4caf50", // Color del botón
            customClass: {
              title: "custom-title",
              htmlContainer: "custom-text",
            },
          });
          form.current.reset();
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Error al enviar",
            text: `Rayos, ocurrió un problema, revisa tu conexion e intentalo nuevamente.: ${error.text}`,
            background: "#06011a", // Fondo olive-green
            color: "#e5e7eb", // Texto bg-gray-200
            confirmButtonColor: "#f44336", // Color del botón
            customClass: {
              title: "custom-title",
              htmlContainer: "custom-text",
            },
          });
          form.current.reset();
        }
      );
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-6">
      {/* Imagen de fondo con opacidad */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgaboutus2}
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Capa con opacidad sobre la imagen */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      <div className="relative z-10 shadow-md rounded-lg p-8 mt-10 max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-200 text-center mb-6">
          Contáctame
        </h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          {/* Campo Nombre */}
          <div className="relative">
            <p className="p-3 font-semibold text-gray-200">Nombre</p>
            <input
              type="text"
              name="user_name"
              className="peer block w-full px-3 py-2 text-sm text-gray-100 bg-transparent border-b border-indigo-700 focus:outline-none"
              placeholder="Nombre"
              required
            />
          </div>

          {/* Campo Email */}
          <div className="relative">
            <p className="p-3 font-semibold text-gray-200">E-mail</p>
            <input
              type="email"
              name="user_email"
              className="peer block w-full px-3 py-2 text-sm text-gray-100 bg-transparent border-b border-indigo-700 focus:outline-none"
              placeholder="E-mail"
              required
            />
          </div>

          {/* Campo Mensaje */}
          <div className="relative">
            <p className="p-3 font-semibold text-gray-200">Mensaje</p>
            <textarea
              name="message"
              rows="4"
              className="peer block w-full px-3 py-2 text-sm text-gray-100 bg-transparent border-b border-indigo-700 focus:outline-none"
              placeholder="Mensaje"
              required
            ></textarea>
          </div>

          {/* Botón Enviar */}
          <div className="pt-6 pb-10">
            <button
              type="submit"
              value="send"
              className="w-full bg-blue-600 text-white font-medium py-2.5 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default HeaderContact;
