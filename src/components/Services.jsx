// Services.jsx
import React, { useState, memo } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { IconWhatsappT } from "../icons/Icons";
import { servicesData } from "../data/servicesData";

const ServiceCard = memo(({ service, selectedId, setSelectedId }) => (
  <motion.div
    onClick={() => setSelectedId(service.id)}
    className="overflow-hidden rounded-xl relative cursor-pointer"
  >
    {/* Fondo con layoutId para transiciones suaves */}
    <motion.div
      className="absolute inset-0 bg-white dark:bg-[#222] rounded-xl"
      layoutId={`bg-${service.id}`}
    />

    {/* Contenido de la tarjeta */}
    <div className="relative z-10 p-6">
      {/* Título sin layoutId para evitar animaciones conflictivas */}
      <h2 className="text-lg font-semibold dark:text-secondary">
        {service.title}
      </h2>

      {/* Descripción sin layoutId */}
      <p className="text-sm text-terteary mt-2">
        {service.description}
      </p>

      {/* Imagen con layoutId para transiciones suaves */}
      <motion.img
        src={service.imageSrc}
        alt={service.title}
        className="w-52 mx-auto my-4 rounded-xl"
        layoutId={`image-${service.id}`}
        loading="lazy"
      />

      {/* Elementos interactivos que solo aparecen cuando la tarjeta no está seleccionada */}
      {selectedId !== service.id && (
        <motion.div
          className="flex justify-between items-center mt-4"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.a
            href="#"
            className="text-sm text-white font-semibold bg-primary
                     rounded-xl flex items-center py-3 px-6 gap-2 w-fit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contáctame por
            <span className="w-4">
              <IconWhatsappT />
            </span>
          </motion.a>
          <motion.button
            className="text-xs underline"
            whileHover={{ scale: 1.1 }}
          >
            ¿Qué incluye?
          </motion.button>
        </motion.div>
      )}
    </div>
  </motion.div>
));

export default function Services() {
  const [selectedId, setSelectedId] = useState(null);
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.2 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.2 } 
    }
  };

  const modalVariants = {
    visible: {
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <section className="py-20">
      <div className="mx-6 flex flex-col gap-12 text-center">
        {/* Título y descripción de la sección */}
        <motion.div
          className="flex flex-col gap-2 text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold dark:text-secondary">
            Así es como aporto valor a tu negocio
          </h2>
          <p className="text-sm text-terteary">
            Transformo ideas en proyectos digitales que destacan por su alta
            calidad, rendimiento y experiencias inmersivas.
          </p>
        </motion.div>

        {/* Lista de servicios */}
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              selectedId={selectedId}
              setSelectedId={setSelectedId}
            />
          ))}
        </motion.div>

        {/* Modal y overlay */}
        <AnimatePresence>
          {selectedId && (
            <>
              {/* Overlay semitransparente */}
              <motion.div
                key="overlay"
                className="fixed inset-0 bg-black/40 z-40 sm:backdrop-blur-sm"
                variants={overlayVariants}
                initial={shouldReduceMotion ? "visible" : "hidden"}
                animate="visible"
                exit="exit"
                onClick={() => setSelectedId(null)}
              />

              {/* Modal */}
              <motion.div
                key="modal"
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
              >
                <motion.div
                  className="rounded-xl relative max-w-sm w-full overflow-hidden"
                  variants={modalVariants}
                  initial={shouldReduceMotion ? "visible" : "hidden"}
                  animate="visible"
                  exit="exit"
                >
                  {/* Fondo con layoutId para transiciones suaves */}
                  <motion.div
                    className="absolute inset-0 bg-white dark:bg-[#222] rounded-xl"
                    layoutId={`bg-${selectedId}`}
                  />

                  {/* Contenido del modal */}
                  <div className="relative z-10 p-6">
                    {/* Botón de cierre */}
                    <motion.button
                      className="absolute top-2 right-2 text-black dark:text-white
                               w-8 h-8 flex items-center justify-center rounded-xl
                               hover:bg-gray-100 dark:hover:bg-gray-800"
                      onClick={() => setSelectedId(null)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      ✕
                    </motion.button>

                    {/* Contenido principal del modal sin animaciones adicionales */}
                    <div className="space-y-4">
                      {/* Título sin layoutId */}
                      <h2 className="text-xl font-semibold dark:text-secondary">
                        {servicesData.find((s) => s.id === selectedId)?.title}
                      </h2>

                      {/* Descripción sin layoutId */}
                      <p className="text-sm text-terteary">
                        {servicesData.find((s) => s.id === selectedId)?.description}
                      </p>

                      {/* Imagen con layoutId para transiciones suaves */}
                      <motion.img
                        className="w-60 mx-auto my-4 rounded-xl"
                        src={servicesData.find((s) => s.id === selectedId)?.imageSrc}
                        alt={servicesData.find((s) => s.id === selectedId)?.title}
                        layoutId={`image-${selectedId}`}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
