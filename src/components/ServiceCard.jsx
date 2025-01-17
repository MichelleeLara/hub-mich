import React from "react";
import { motion } from "framer-motion";
import { IconWhatsappT } from "../icons/Icons";

export function ServiceCard({
  title,
  description,
  imageSrc,
  imageAlt,
  icons = [],
  onClick,
  isExpanded = false
}) {
  // Card content animation variants - removed scaling
  const contentVariants = {
    normal: {
      transition: { duration: 0.3 }
    },
    expanded: {
      transition: { duration: 0.3 }
    }
  };

  // Background decoration variants
  const backgroundVariants = {
    normal: {
      opacity: 1,
      scale: 1,
      rotate: -45,
      transition: { duration: 0.3 }
    },
    expanded: {
      opacity: 0.8,
      scale: 1.2,
      rotate: -30,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      className="flex flex-col justify-center items-center gap-3 relative
                 overflow-hidden border border-[#eff3f4] dark:border-[#2d2d2d2a]
                 rounded-xl p-2 px-3 cursor-pointer"
      onClick={onClick}
      whileHover={{ 
        scale: isExpanded ? 1 : 1.02,
        transition: { duration: 0.2 } 
      }}
      animate={isExpanded ? "expanded" : "normal"}
    >
      {/* Content container with separate animation */}
      <motion.div 
        className="flex flex-col items-center w-full relative z-30"
        variants={contentVariants}
      >
        <header className="flex items-center justify-start w-full gap-2">
          <h3 className="text-lg font-semibold dark:text-secondary">{title}</h3>
          {!!icons.length && (
            <div className="flex items-center gap-2.5">
              {icons.map((icon, idx) => (
                <div key={idx} className="w-3.5">
                  {icon}
                </div>
              ))}
            </div>
          )}
        </header>

        <p className="text-sm text-terteary mt-2">{description}</p>
        
        <motion.img 
          src={imageSrc} 
          alt={imageAlt} 
          className="w-52 my-4"
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.2 } 
          }}
        />

        <footer className="flex items-end justify-between w-full mt-1.5">
          <motion.a
            href="#"
            className="text-sm text-white font-semibold bg-primary
                       rounded-2xl flex items-center py-3 px-6 gap-2 w-fit"
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
            aria-label="Ver información sobre lo que incluye"
            whileHover={{ scale: 1.1 }}
          >
            ¿Qué incluye?
          </motion.button>
        </footer>
      </motion.div>

      {/* Animated background decorations */}
      <motion.div
        variants={backgroundVariants}
        className="w-[240px] h-[600px] bg-lights bg-lights-2
                   absolute top-[-6rem] left-4 rounded-full z-[0]"
      />
      <motion.div
        variants={backgroundVariants}
        className="w-[240px] h-[600px] bg-lights
                   absolute top-[-6rem] left-4 rounded-full z-[0]"
      />
    </motion.div>
  );
}