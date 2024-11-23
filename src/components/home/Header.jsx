import bgheader from "../../assets/img/bgheader.png";
import CV from "../../assets/pdf/CV.pdf";
import Perfil from "../../assets/img/Perfil.png";
export default function Header() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        src={bgheader}
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center opacity-40"
      />
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      ></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <div className="pb-8">
            <img src={Perfil} alt="Perfil" className="h-44 w-34 rounded-md" />
          </div>
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-5xl">
            Hola, soy Deimer Orjuela
          </h2>
          <p className="mt-8 text-pretty text-lg font-medium text-gray-300 sm:text-xl/8">
            Ingeniero de sistemas amante de la tecnologia y apasionado por los
            grandes retos
          </p>
          <div className="pt-6">
            <a href={CV} download>
              <button className="bg-lime-nav hover:bg-lime-hover transition duration-200 text-black h-8 px-4 text-center rounded-md">
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
