import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconWhatsappT } from "../icons/Icons";
import { servicesData } from "../data/servicesData";

function ServiceCard({ service, isSelected, onClick }) {
  return (
    <div className="relative h-fit">
      {/* Placeholder div that maintains the space when card is selected */}
      {isSelected && (
        <div className="invisible">
          <div className="h-full w-full rounded-xl bg-white dark:bg-[#222]">
            <div className="flex h-full flex-col p-6">
              <h2 className="text-lg font-semibold">{service.title}</h2>
              <p className="mt-2 text-sm">{service.description}</p>
              <div className="my-4 flex flex-1 items-center justify-center">
                <img src={service.imageSrc} alt={service.title} className="w-52 rounded-xl" />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <a className="flex w-fit items-center gap-2 rounded-xl bg-primary py-3 px-6 text-sm font-semibold text-white">
                  Contáctame por
                  <span className="w-4">
                    <IconWhatsappT />
                  </span>
                </a>
                <button className="text-xs underline">¿Qué incluye?</button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <motion.div
        className={`${
          isSelected
            ? "fixed inset-0 z-50 m-auto h-fit w-[384px]"
            : "h-full w-full"
        }`}
      >
        <motion.div
          layoutId={`card-container-${service.id}`}
          onClick={onClick}
          className="h-full w-full cursor-pointer overflow-hidden rounded-xl bg-white dark:bg-[#222]"
          initial={false}
        >
          <motion.div 
            className="flex h-full flex-col p-6"
            layout
          >
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
              className="my-4 flex flex-1 items-center justify-center"
            >
              <img
                src={service.imageSrc}
                alt={service.title}
                className="w-52 rounded-xl"
              />
            </motion.div>

            <motion.div
              layoutId={`actions-${service.id}`}
              className="mt-4 flex items-center justify-between"
            >
              <motion.a
                href="#"
                className="flex w-fit items-center gap-2 rounded-xl bg-primary 
                         py-3 px-6 text-sm font-semibold text-white"
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
    </div>
  );
}

export default function Services() {
  const [selectedId, setSelectedId] = useState(null);

  React.useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedId]);

  return (
    <section className="relative py-20">
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

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              isSelected={selectedId === service.id}
              onClick={() => setSelectedId(selectedId === service.id ? null : service.id)}
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
                className="fixed inset-0 z-40 "
              />
              
              <motion.button
                onClick={() => setSelectedId(null)}
                className="fixed top-4 right-4 z-50 h-10 w-10 rounded-full 
                         bg-white/80 text-black hover:bg-white flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.15 }}
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