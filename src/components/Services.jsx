import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconWhatsappT } from "../icons/Icons";
import { servicesData } from "../data/servicesData";

export default function Services() {
  const [selectedId, setSelectedId] = useState(null);

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
      transition: { duration: 0.2 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  const modalVariants = {
    // Eliminadas las propiedades de animación para evitar conflictos
    hidden: {},
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

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              onClick={() => setSelectedId(service.id)}
              className="overflow-hidden rounded-xl relative cursor-pointer"
            >
              {/* Fondo separado con rounded-xl añadido */}
              <motion.div
                className="absolute inset-0 bg-white dark:bg-[#222] rounded-xl"
                layoutId={`bg-${service.id}`}
              />

              {/* Contenedor del contenido */}
              <div className="relative z-10 p-6">
                <motion.h2
                  layoutId={`title-${service.id}`}
                  className="text-lg font-semibold dark:text-secondary"
                  // Eliminadas las animaciones conflictivas
                >
                  {service.title}
                </motion.h2>

                <motion.p
                  layoutId={`description-${service.id}`}
                  className="text-sm text-terteary mt-2"
                  // Puedes eliminar o mantener animaciones aquí si no tienen layoutId
                >
                  {service.description}
                </motion.p>

                <motion.img
                  layoutId={`image-${service.id}`}
                  src={service.imageSrc}
                  alt={service.title}
                  className="w-52 mx-auto my-4 rounded-xl"
                />

                {/* Elementos interactivos que solo aparecen en la tarjeta */}
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
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedId && (
            <>
              <motion.div
                key="overlay"
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                variants={overlayVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={() => setSelectedId(null)}
              />

              <motion.div
                key="modal"
                // Eliminado layoutId del contenedor principal del modal
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
              >
                <motion.div
                  className="rounded-xl relative max-w-sm w-full overflow-hidden"
                  variants={modalVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {/* Fondo separado con rounded-xl añadido */}
                  {/* <motion.div
                    className="absolute inset-0 bg-white dark:bg-[#222] rounded-xl"
                    layoutId={`bg-${selectedId}`}
                  /> */}

                  {/* Contenedor del contenido */}
                  <div className="relative z-10 p-6">
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

                    {/* Contenido que se mantiene durante la transición */}
                    <div className="space-y-4">
                      <motion.h2
                        layoutId={`title-${selectedId}`}
                        className="text-xl font-semibold dark:text-secondary"
                        // Eliminadas las animaciones conflictivas
                      >
                        {servicesData.find((s) => s.id === selectedId)?.title}
                      </motion.h2>

                      <motion.p
                        layoutId={`description-${selectedId}`}
                        className="text-sm text-terteary"
                        // Puedes eliminar o mantener animaciones aquí si no tienen layoutId
                      >
                        {servicesData.find((s) => s.id === selectedId)?.description}
                      </motion.p>

                      <motion.img
                        layoutId={`image-${selectedId}`}
                        className="w-60 mx-auto my-4 rounded-xl"
                        src={servicesData.find((s) => s.id === selectedId)?.imageSrc}
                        alt={servicesData.find((s) => s.id === selectedId)?.title}
                      />
                    </div>

                    {/* Contenido adicional que aparece solo en el modal */}
                    <AnimatePresence>
                      <motion.div
                        className="mt-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {/* Aquí puedes agregar contenido adicional que solo aparece en el modal */}
                      </motion.div>
                    </AnimatePresence>
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
