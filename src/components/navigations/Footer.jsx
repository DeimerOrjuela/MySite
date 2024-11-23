import logo from "../../assets/img/logo.png";
import { NavLink } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaStackOverflow,
} from "react-icons/fa";

const navigation = {
  sobremi: [{ name: "About", href: "/AboutUS" }],
  contacto: [{ name: "Contacto", href: "/Contact" }],
  stack: [
    { name: "Frontend", href: "/Stack" },
    { name: "Backend", href: "/Stack" },
    { name: "SGDB", href: "/Stack" },
    { name: "Versionamiento", href: "/Stack" },
    { name: "Scrum", href: "/Stack" },
  ],
  proyectos: [
    { name: "Landing Page", href: "/Projects" },
    { name: "Blog", href: "/Projects" },
    { name: "APIs", href: "/Projects" },
  ],
  social: [
    {
      name: "Github",
      href: "https://github.com/DeimerOrjuela",
      icon: FaGithub,
    },
    {
      name: "Whatsapp",
      href: "https://wa.me/3017079111?text=Hola%me%gustaria%contactarte...",
      icon: FaWhatsapp,
    },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/deimer-orjuela",
      icon: FaLinkedin,
    },
    {
      name: "StackOverflow",
      href: "https://stackoverflow.com/users/27536556/g%c3%bcnther-simon",
      icon: FaStackOverflow,
    },
  ],
};

function Footer() {
  return (
    <footer className="bg-olive-green black" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <NavLink to="/">
              <img src={logo} width={60} height={60} className="" />
            </NavLink>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-lime-nav transition duration-200  "
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6 " aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-medium text-gray-300">
                  Sobre mi
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.sobremi.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-500 hover:text-gray-300"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-base font-medium text-gray-300">
                  Contacto
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.contacto.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-500 hover:text-gray-300"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-medium text-gray-300">Stack</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.stack.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-500 hover:text-gray-300"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-base font-medium text-gray-300">
                  Proyectos
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.proyectos.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-500 hover:text-gray-300"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 sm:text-center">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2024 Deimer Orjuela todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

const mapStateToProps = (state) => ({});

export default Footer;
