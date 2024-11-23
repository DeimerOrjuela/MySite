import bgaboutus from "../../assets/img/bgaboutus.png";

export default function HeaderAboutUS() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        alt=""
        src={bgaboutus}
        className="opacity-15 absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
      />
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-4xl">
            Soy Deimer Orjuela
          </h2>
          <p className="mt-8 mb-12 text-pretty text-lg font-medium text-gray-300 sm:text-xl/8">
            ¡Hola! Soy Deimer, Ingeniero de Sistemas egresado de la Institucion
            Universitaria de Colombia, con conocimientos en desarrollo de
            software en diversas áreas. <br />
            Tengo experiencia en lenguajes y tecnologías como Java, Python
            (Django), JavaScript, React, SQL y en el manejo de bases de datos
            relacionales como MySQL. <br />
            También cuento con habilidades en control de versiones con GitHub y
            en metodologías ágiles, especialmente Scrum. <br />
            Mi enfoque es desarrollar aplicaciones modernas y eficientes. <br />
            Cuento con conocimientos intermedios en React y Tailwind CSS para
            proyectos de frontend. <br />
            Con una mentalidad de crecimiento y una sólida base en tecnología,
            busco oportunidades para contribuir y seguir aprendiendo en el mundo
            del desarrollo de software.
          </p>
          <h2 className="text-4xl pt-8 font-semibold tracking-tight text-white sm:text-4xl">
            Formacion Academica
          </h2>
          <p className="mt-8 mb-12 text-pretty text-lg font-medium text-gray-300 sm:text-xl/8">
            - Ingeniero de Sistemas <br />
            Institucion Universitaria de Colombia <br />
            <br />
            - Tecnico en Analisis y Diseño de Bases de Datos <br />
            Fundacion Universitaria Compensar <br />
          </p>
          <h2 className="text-4xl pt-8 font-semibold tracking-tight text-white sm:text-4xl">
            Cursos
          </h2>
          <p className="mt-8 mb-12 text-pretty text-lg font-medium text-gray-300 sm:text-xl/8">
            - Ingles Basico <br />
            CET Colsubsidio <br />
            <br />
            - Scrum Foundation <br />
            Certiprof <br />
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-4xl">
            Conocimientos
          </h2>
          <p className="mt-8 mb-12 text-pretty text-lg font-medium text-gray-300 sm:text-xl/8">
            Cuento con conocimientos en tecnologias tanto como para el
            desarrollo Frontend como Backend <br />
            - Frontend <br />
            HTML, CSS, JavaScript, React, Tailwind CSS <br />
            <br />
            - Backend Java, Python (Django) <br />
            <br />
            - Sistemas Gestores de Bases de Datos Relacionales
            <br />
            MySQL, SQL SERVER, PostgreSQL <br />
            <br />
            - Manejo de Versionamiento <br />
            GitHub <br />
          </p>
        </div>
      </div>
    </div>
  );
}
