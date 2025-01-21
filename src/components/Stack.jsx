import React from 'react';
import '../global.css'
import {
  IconGroup,
  IconCloud,
  IconTech,
  ReactIcon,
  GitIcon,
  GitHubIcon,
  AwsIcon,
  CloudFareIcons,
  GoogleIcon,
  NextJS,
  TypeScriptIcon,
  TailwindIcon
} from '../icons/Icons';

const Stack = () => {
  return (
    <section id="Stack" className="py-12 pb-48 flex items-center justify-center">
      <div className="mx-6 flex flex-col gap-2 w-full max-w-screen-xl">
        <h2 className="text-3xl font-ClashDisplay tracking-wide text-gray-800 font-semibold flex flex-col gap-0 dark:text-secondary xs:text-4xl xs:leading-8">
          Mi stack
        </h2>
        <p className="text-sm text-terteary">
          Aquí divido las <span className='text-black dark:text-white'>tecnologías que domino</span> en tres bloques clave, mostrando cómo contribuyen al desarrollo de soluciones escalables y eficientes.
        </p>

        <div className="container-techs">
          {/* Colab frontend */}
          <div className="flex flex-col gap-4 items-start border border-[#d9d6d6c7] dark:border-[#2b2b2b] grayscale rounded-xl p-5 tech-cards1">
            <header className="flex items-center gap-3">
              <div className="p-1 rounded-full bg-[#22c55e25] w-fit text-green-500">
                <IconGroup />
              </div>
              <h3 className="text-green-500 text-sm font-semibold">Colaboración</h3>
            </header>

            <p className="text-terteary text-ellipsis line-clamp-1">Estas son las tecnologías front que ..</p>

            <div className="flex items-center gap-3">
              <div className="w-5">
                <GitIcon />
              </div>
              <div className="w-5">
                <GitHubIcon />
              </div>
            </div>
          </div>

          {/* Technologies frontend */}
          <div className="flex flex-col gap-4 items-start border border-[#d9d6d6c7] dark:border-[#2b2b2b] grayscale rounded-xl p-5 tech-cards2">
            <header className="flex items-center gap-3">
              <div className="p-1 rounded-full bg-[#f9741623] w-fit text-orange-600">
                <IconCloud />
              </div>
              <h3 className="text-orange-500 text-sm font-semibold">Nube</h3>
            </header>

            <p className="text-terteary text-ellipsis line-clamp-1">Estas son las tecnologías front que ..</p>

            <div className="flex items-center gap-3">
              <div className="w-5">
                <AwsIcon />
              </div>
              <div className="w-5">
                <CloudFareIcons />
              </div>
              <div className="w-5">
                <GoogleIcon />
              </div>
            </div>
          </div>

          {/* Frontend */}
          <div className="flex flex-col gap-4 items-start border border-[#d9d6d6c7] dark:border-[#2b2b2b] rounded-xl p-5 tech-cards3">
            <header className="flex items-center gap-3">
              <div className="p-1 rounded-full bg-[#148bfa12] w-fit text-primary">
                <IconTech />
              </div>
              <h3 className="text-primary text-sm font-semibold">Frontend</h3>
            </header>

            <p className="text-ellipsis line-clamp-1">Lenguajes y frameworks que empleo para crear proyectos funcionales</p>

            <div className="flex items-center gap-3">
              <div className="w-5">
                <ReactIcon />
              </div>
              <div className="w-5">
                <NextJS />
              </div>
              <div className="w-5">
                <TypeScriptIcon />
              </div>
              <div className="w-5">
                <TailwindIcon />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stack;
