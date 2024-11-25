import git from "../../assets/img/git.png";
import bgaboutus4 from "../../assets/img/bgaboutus4.png";

const posts = [
  {
    title: "Landing Page React JS/Tailwind CSS",
    href: "#",
    description:
      "Esta Landing page es un ejemplo claro de mis capacidades como Desarrollador, se creó con el fin de ilustrar de manera práctica mis habilidades para desarrollar front usando tecnologías como React JS y Tailwind.",
    author: {
      name: "View Code",
      href: "#",
      imageUrl: git,
    },
  },
  {
    title: "Blog Personal",
    href: "#",
    description:
      "Este proyecto fue desarrollado para mostrar mis conocimientos y habilidades en la creación de aplicaciones web full stack, usando tecnologías del front como React JS, Tailwind, Back Django y SGDB MySQL. Donde se pueden usar las operaciones CRUD (Create, Read, Update, Delete).",
    author: {
      name: "View Code",
      href: "#",
      imageUrl: git,
    },
  },
  {
    title: "Consumo APIs",
    href: "#",
    description:
      "Con este proyecto se busca mostrar mis capacidades al momento de interactuar con datos o peticiones obtenidos de una API pública.",
    author: {
      name: "View Code",
      href: "#",
      imageUrl: git,
    },
  },
];

export default function HeaderProject() {
  return (
    <div className="relative bg-olive-green px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      {/* Imagen de fondo */}
      <img
        src={bgaboutus4}
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="relative mx-auto lg:mx-12 max-w-full">
        <div className="text-center">
          <h2 className="text-5xl font-bold tracking-wider text-gray-200 sm:text-4xl">
            Proyectos
          </h2>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <div key={post.title} className="flex flex-col">
              <div className="flex flex-1 flex-col justify-between bg-olive-green p-6 transition duration-300 hover:translate-y-1 ease-in-out overflow-hidden rounded-lg shadow-lg">
                <div className="flex-1">
                  <a href={post.href} className="mt-2 block">
                    <p className="text-xl font-semibold text-indigo-400 hover:underline">
                      {post.title}
                    </p>
                  </a>
                  <p className="mt-3 text-base text-gray-300">
                    {post.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href={post.author.href}>
                      <span className="sr-only">{post.author.name}</span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={post.author.imageUrl}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-300">
                      <a href={post.author.href} className="hover:underline">
                        {post.author.name}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
