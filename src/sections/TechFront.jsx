import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Figma, ReactIcon, NextJS, TailwindIcon, TypeScriptIcon } from '../icons/Icons';
import Technologies from '../components/Technologies';

const FrontendTechnologies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const technologies = [
    { Title: "React", Description: "Librería", Icon: ReactIcon, colors: ["#087ea4"] },
    { Title: "NextJs", Description: "Framework", Icon: NextJS, colors: ["#8d8d8d"] },
    { Title: "TypeScript", Description: "Lenguaje", Icon: TypeScriptIcon, colors: ["#3178c6"] },
    { Title: "TailwindCSS", Description: "Librería", Icon: TailwindIcon, colors: ["#38bdf8"] },
    { Title: "Figma", Description: "Diseño", Icon: Figma, colors: ["#f24e1e"] }
  ];

  const moveSlide = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => 
      (prevIndex + newDirection + technologies.length) % technologies.length
    );
  };

  const handleDragEnd = (event, info) => {
    const offsetX = info.offset.x;
    const threshold = 30;

    if (offsetX > threshold) {
      moveSlide(-1); // Mover hacia la derecha
    } else if (offsetX < -threshold) {
      moveSlide(1); // Mover hacia la izquierda
    }
  };

  return (
    <article className="flex flex-col gap-28 my-10">
      <div className="flex flex-col gap-2">
        <motion.h3
          className="text-lg text-gray-800 font-semibold dark:text-secondary"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          Frontend
        </motion.h3>
      </div>

      <div className="flex flex-col gap-24">

        <div className="relative h-fit flex items-center justify-center ">
          <AnimatePresence initial={false} custom={direction}>
            {technologies.map((tech, index) => {
              const isActive = index === currentIndex;
              const distance = (index - currentIndex + technologies.length) % technologies.length;
              const isFront = distance === 0
              
              return (
                <motion.div
                  key={tech.Title}
                  className="absolute w-full"
                  style={{
                    zIndex: technologies.length - distance,
                  }}
                  drag={isActive ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={isActive ? handleDragEnd : undefined}
                  initial={direction > 0 
                    ? { x: 0, opacity: 0, scale: 0.8 }
                    : { x: 0, opacity: 0, scale: 0.8 }
                  }
                  animate={{
                    x: 0,
                    y: distance * -8, // Desplazamiento vertical para efecto stack
                    opacity: 1 - (distance * 0.2),
                    scale: 1 - (distance * 0.05),
                    rotateX: distance * -5, // Rotación en X para efecto 3D
                    translateZ: -distance * 50, // Profundidad para efecto 3D
                  }}
                  exit={direction > 0
                    ? { x: 300, opacity: 0, scale: 0.8 }
                    : { x: -300, opacity: 0, scale: 0.8 }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                >
                  <Technologies {...tech} isFront= {isFront}>
                    <tech.Icon />
                  </Technologies>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-4 ">
        {technologies.map((_, index) => (
          <motion.div
            key={index}
            className="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full cursor-pointer"
            
            animate={{
              scale: currentIndex === index ? 1.9 : 1,
              backgroundColor: currentIndex === index ? '#3178c6' : '#d1d5db'
            }}
            onClick={() => {
              const newDirection = index > currentIndex ? 1 : -1;
              moveSlide(newDirection);
            }}
          />
        ))}
      </div>

      </div>

      
    </article>
  );
};

export default FrontendTechnologies;