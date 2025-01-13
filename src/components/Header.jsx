import React, { useEffect, useState } from "react";
import { AnimatePresence, color, motion } from "framer-motion";
import ThemeToggle from "./Themetoggle";
// import throttle from "lodash/throttle"; // O implementa tu propia.

const Header = () => {
  const [hidden, setHidden] = useState(false);
  const [currentVariant, setCurrentVariant] = useState('expanded')

  let lastScroll = 0;

  useEffect(() => {
    // Ejemplo con requestAnimationFrame (sin lodash)
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScroll = window.scrollY;

          if (currentScroll > lastScroll) {
            setHidden(false);
            setCurrentVariant("hidden");
          } else if ( currentScroll < lastScroll && currentScroll > 130){
            setHidden(true);
            setCurrentVariant("visible");
          } else if (currentScroll < 130){
            setHidden(false);
            setCurrentVariant('expanded')
          }

          lastScroll = Math.max(currentScroll, 0);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 // Puedes ajustar los valores de color a tu gusto
const variants = {
  expanded: {
    width: "100%",
    y: 0,
    borderRadius: 0,
    // transparente
    transition: {
      // Aquí definimos transiciones separadas
      backgroundColor: {
        duration: .3,   // Duración para el color
        ease: "easeInOut",
        stiffness:100,
      },
      // Si deseas que las demás props (por ejemplo y, width, etc.) usen otra transición,
      // las declaras, o usas "default"
      default: {
        type: "spring",
        duration: 0.4,
        stiffness: 380,
        damping: 32
      }
    }
  },
  visible: {
    y: 10,
    width: "50%",
    borderRadius: 60,

    transition: {
      // Aquí definimos transiciones separadas
      backgroundColor: {
        duration: .3,   // Duración para el color
        ease: "easeInOut",
        stiffness:100
      },
      // Si deseas que las demás props (por ejemplo y, width, etc.) usen otra transición,
      // las declaras, o usas "default"
      default: {
        type: "spring",
        duration: 0.4,
        stiffness: 380,
        damping: 32
      }
    }
  },
  hidden: {
    y: "-80%", // se oculta por completo
    width: "50%",
    borderRadius: 60,
   
    transition: {
      // Aquí definimos transiciones separadas
      backgroundColor: {
        duration: .3,   // Duración para el color
        ease: "easeInOut",
        stiffness:100
      },
      // Si deseas que las demás props (por ejemplo y, width, etc.) usen otra transición,
      // las declaras, o usas "default"
      default: {
        type: "spring",
        duration: 0.4,
        stiffness: 380,
        damping: 32
      }
    }
  },
};

  console.log(currentVariant)

  return (
    <AnimatePresence>
      <div className="fixed top-0 left-0 w-full z-50  will-change-auto flex items-center justify-center">
        <motion.header
          className={`min-w-[310px] w-2/4   dark:shadow-none py-3  ${currentVariant !== 'expanded' ? 'shadow-2xl border border-[#d2d2d2] dark:border-[#5c5c5c] bg-[#eff3f4] dark:bg-[#1c1c1c] ' : ''}`} // Para activar GPU
          // style={{ transformOrigin: "top center" }}
          variants={variants}
          initial="expanded"
          animate={currentVariant}
        >
          <div className="mx-6 flex gap-3 items-center justify-between">
            <div className="flex gap-1.5 items-center text-nowrap ">
              <img src="/author.png" className="w-12 object-top" alt="Author" />
              <AnimatePresence>
                <div className="flex flex-col gap-0">
                  <p className="font-semibold  text-sm dark:text-secondary">
                    {(currentVariant !== 'expanded') ? <span>Mich R.</span> : <span>Mich </span>}
                    {(currentVariant === 'expanded') && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                      >
                        Rodriguez
                      </motion.span>
                    )}
                  </p>
                  <p className="text-xs font-medium text-terteary">
                    Frontend{" "}
                    {(currentVariant === 'expanded') && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                      >
                        Engineer
                      </motion.span>
                    )}
                  </p>
                </div>
              </AnimatePresence>
            </div>
            <div className="flex items-center justify-center gap-2 text-secondary">
              <AnimatePresence>
                {/* Si está en modo hidden, NO mostramos el botón */}
                {(currentVariant !== 'expanded') && (
                  <motion.div
                    key="island-btn"
                    className="flex justify-center items-center text-xs rounded-xl py-1 px-2 gap-2"
                    /*  
                      * Aquí es donde agregamos x: 50 → x: 0 para que “nazca” desde la derecha 
                    */
                    initial={{ opacity: 0, scale: 0.8, y: -50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8}}
                    transition={{ duration: 0.8, stiffness: 800, type: "spring", damping: 40 }}
                  >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity="0.4" d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19Z" fill="currentColor"></path><path d="M15.7997 2.20999C15.3897 1.79999 14.6797 2.07999 14.6797 2.64999V6.13999C14.6797 7.59999 15.9197 8.80999 17.4297 8.80999C18.3797 8.81999 19.6997 8.81999 20.8297 8.81999C21.3997 8.81999 21.6997 8.14999 21.2997 7.74999C19.8597 6.29999 17.2797 3.68999 15.7997 2.20999Z" fill="currentColor"></path><path d="M13.5 13.75H7.5C7.09 13.75 6.75 13.41 6.75 13C6.75 12.59 7.09 12.25 7.5 12.25H13.5C13.91 12.25 14.25 12.59 14.25 13C14.25 13.41 13.91 13.75 13.5 13.75Z" fill="currentColor"></path><path d="M11.5 17.75H7.5C7.09 17.75 6.75 17.41 6.75 17C6.75 16.59 7.09 16.25 7.5 16.25H11.5C11.91 16.25 12.25 16.59 12.25 17C12.25 17.41 11.91 17.75 11.5 17.75Z" fill="currentColor"></path></svg>
                    <p>CV</p>
                  </motion.div>
                )}
              </AnimatePresence>
              <ThemeToggle />
            </div>
          </div>
        </motion.header>
      </div>
    </AnimatePresence>
  );
};

export default Header;
