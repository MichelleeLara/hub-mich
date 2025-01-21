import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconWhatsappT } from "../icons/Icons";
import { servicesData } from "../data/servicesData";

// Card component for individual service items
function ServiceCard({ service, isSelected, onClick }) {
  return (
    <motion.div
      layoutId={`card-${service.id}`}
      onClick={onClick}
      className={`cursor-pointer overflow-hidden rounded-xl ${
        isSelected ? "fixed inset-0 z-50 flex items-center justify-center p-4" : ""
      }`}
      initial={false}
    >
      <motion.div
        className="relative h-fit w-full rounded-xl bg-white dark:bg-[#222]"
        layoutId={`card-container-${service.id}`}
      >
        <motion.div className="p-6">
          <motion.h2
            layoutId={`title-${service.id}`}
            className="text-lg font-semibold dark:text-secondary"
          >
            {service.title}
          </motion.h2>

          <motion.p
            layoutId={`description-${service.id}`}
            className="mt-2 text-sm text-terteary"
          >
            {service.description}
          </motion.p>

          <motion.div
            layoutId={`image-container-${service.id}`}
            className="my-4 flex justify-center"
          >
            <motion.img
              src={service.imageSrc}
              alt={service.title}
              className="w-52 rounded-xl"
            />
          </motion.div>

          <motion.div
            layoutId={`actions-${service.id}`}
            className="mt-4 flex justify-between items-center"
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
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function Services() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <section className="py-20 flex items-center justify-center">
      <div className="mx-6 flex flex-col gap-12 text-center max-w-screen-xl w-full">
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

        <div className="flex gap-6 items-center justify-center flex-wrap">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              isSelected={selectedId === service.id}
              onClick={() => setSelectedId(service.id)}
            />
          ))}
        </div>

        <AnimatePresence>
          {selectedId && (
            <>
              <motion.div
                key="overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
              />
              
              <motion.button
                onClick={() => setSelectedId(null)}
                className="fixed top-48 right-4 z-50 w-10 h-10 rounded-full bg-white/80 
                         flex items-center justify-center text-black hover:bg-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                ✕
              </motion.button>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}