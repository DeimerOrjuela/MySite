import html from "../../assets/img/html.svg";
import css from "../../assets/img/css.svg";
import js from "../../assets/img/js.svg";
import reactjs from "../../assets/img/reactjs.svg";
import tw from "../../assets/img/tw.svg";
import java from "../../assets/img/java.svg";
import python from "../../assets/img/python.svg";
import django from "../../assets/img/django.svg";
import mysql from "../../assets/img/mysql.svg";
import postre from "../../assets/img/postgre.svg";
import bgaboutus3 from "../../assets/img/bgaboutus3.png";

export default function HeaderStack() {
  return (
    <div className="bg-olive-green py-24 sm:py-32">
      <div className="absolute inset-0 opacity-20">
        <img src={bgaboutus3} alt="" />
        <div />
      </div>
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <p className="mx-auto max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-100 sm:text-5xl">
          Stack de Tecnologias
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-olive-green lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-200 max-lg:text-center">
                  Frontend
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-200 max-lg:text-center mb-8">
                  Conocimientos Intermedios en HTML, CSS, JavaScript, React JS,
                  Tailwind.
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                <div className="flex flex-col items-center justify-start absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-none bg-olive-green">
                  <img
                    className="w-16 h-w-16 object-cover object-top mb-4" // Agrega 'mb-4' para separar un poco las imágenes
                    src={html}
                    alt="HTML"
                  />
                  <img
                    className="w-16 h-w-16 object-cover object-top mb-4"
                    src={css}
                    alt="CSS"
                  />
                  <img
                    className="w-16 h-w-16 object-cover object-top mb-4"
                    src={tw}
                    alt="Tailwind CSS"
                  />
                  <img
                    className="w-16 h-w-16 object-cover object-top mb-6"
                    src={js}
                    alt="JavaScript"
                  />
                  <img
                    className="w-16 h-w-16 object-cover object-top mb-4"
                    src={reactjs}
                    alt="React"
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-olive-green max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-200 max-lg:text-center">
                  Backend
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-200 max-lg:text-center mb-8">
                  Conocimientos intermedios en Java, Python, Django.
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                <div className="flex flex-col items-center justify-start absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-none bg-olive-green">
                  <img
                    className="w-16 h-16 object-cover object-top mb-4"
                    src={python}
                    alt=""
                  />
                  <img
                    className="w-24 h-24 size-full object-cover object-top mb-4"
                    src={java}
                    alt=""
                  />
                  <img
                    className="w-16 h-16 size-full object-cover object-top"
                    src={django}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          </div>

          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-olive-green max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-200 max-lg:text-center">
                  Sistemas Gestores de Bases de Datos
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-200 max-lg:text-center mb-8">
                  Conocimientos intermedios en SGBD relacionales como MySQL,
                  PostgreSQL.
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                <div className="flex flex-col items-center justify-start absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-none bg-olive-green">
                  <img
                    className="w-16 h-16 object-cover object-top mb-4"
                    src={postre}
                    alt=""
                  />
                  <img
                    className="w-28 h-28 size-full object-cover object-top"
                    src={mysql}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
