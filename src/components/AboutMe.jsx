import React from "react";
import { motion, useInView } from "framer-motion";
import { IconArrowRightUp } from "../icons/Icons";

const AnimatedText = ({ text }) => {
  const words = text.split(" ");
  return (
    <span className="inline-block">
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="inline-block mr-1"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

const HeroSection = () => {
  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const typingVariants = {
 
  };

  return (
    <section  className="py-20 overflow-hidden flex items-center justify-center md:py-40">
      <motion.div
        className="mx-6 flex flex-col gap-6 will-change-transform max-w-screen-xl md:flex-row"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2
          className="text-3xl uppercase font-ClashDisplay text-gray-800 font-semibold min-h-fit dark:text-secondary xs:text-4xl xs:leading-8"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ type: "spring", stiffness: 120, damping: 12 }}
        >
          Me gusta <motion.span
            className="uppercase text-primary"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ type: "spring", stiffness: 120, damping: 12, delay: 0.2 }}
          >crear &nbsp;"cosas"&nbsp;</motion.span> que ayudan a las personas
        </motion.h2>

        <div className="">
          <motion.p
            className="text-sm text-terteary"
            ref={sectionRef}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ type: "spring", stiffness: 120, damping: 12, delay: 0.4 }}
          >
            Soy
            <motion.span
              className="text-black dark:text-white font-bold mx-1"
              variants={typingVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              Front-End Engineer
            </motion.span>
            en Ciudad de México, especializado en crear sitios pixel-perfect con
            alto rendimiento, accesibilidad y experiencia de usuario.
          </motion.p>

          <motion.p
            className="text-sm text-terteary mt-2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ type: "spring", stiffness: 120, damping: 12, delay: 0.6 }}
          >
            Me apasiona trabajar en proyectos desafiantes que combinen diseño
            atractivo, facilidad de uso y solidez técnica.
          </motion.p>

          <motion.a
            href="#"
            className="uppercase font-semibold text-sm flex items-center gap-1 mt-8"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: "spring", stiffness: 120, damping: 12, delay: 0.8 }}
          >
            Más sobre mí
            <motion.span
              className="w-5"
              whileHover={{ rotate: 45 }}
              transition={{ type: "spring", stiffness: 20, damping: 12 }}
            >
              <IconArrowRightUp />
            </motion.span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
