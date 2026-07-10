import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  // Sincronizar tema desde localStorage al montar el componente
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme); // Actualiza el estado con el tema guardado
    updateThemeClass(savedTheme); // Asegura que la clase correcta esté aplicada
  }, []);

  // Función para actualizar la clase del tema en el DOM
  const updateThemeClass = (theme) => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Cambiar entre temas con transición de blur en la foto del hero.
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;

    setTheme(newTheme); // actualiza el ícono al instante
    localStorage.setItem("theme", newTheme);

    // Blur leve durante el cruce; el cambio de tema (crossfade) ocurre ya
    // y el CSS disuelve una foto en la otra.
    root.classList.add("theme-swapping");
    updateThemeClass(newTheme);

    window.setTimeout(() => {
      root.classList.remove("theme-swapping");
    }, 260);
  };

  return (
    <motion.div
      // Contenedor principal con animación del fondo
      className=" flex items-center justify-center transition-colors duration-500"
    >
      <motion.button
        onClick={toggleTheme}
        aria-label="Cambiar tema"
        className="relative flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-300"
        whileTap={{ scale: 0.9 }}
      >
        {/* Ícono del toggle */}
        <motion.div
          className="absolute flex items-center justify-center w-8 h-8"
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
        >
          {theme === "dark" ? (
            <motion.svg
              key="moon"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="text-gray-50"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
            </motion.svg>
          ) : (
            <motion.svg
              key="sun"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={18}
              height={18}
              /** Aplica color como “currentColor” */
              fill="currentColor"
              /** Opcional: si quieres forzar un color exacto */
              color="#161616"
              /** Animación de Framer Motion */
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              /** Clase para tener color "amarillo” y manipular con Tailwind */
              className=""
            >
              {/* Círculo central (relleno) */}
              <path
                d="M17 12C17 14.7614 14.7614 17 12 17
         C9.23858 17 7 14.7614 7 12
         C7 9.23858 9.23858 7 12 7
         C14.7614 7 17 9.23858 17 12Z"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="currentColor"
              />
              {/* Rayos del sol (solo borde) */}
              <path
                d="M12 2V3.5M12 20.5V22
         M19.0708 19.0713L18.0101 18.0106
         M5.98926 5.98926L4.9286 4.9286
         M22 12H20.5
         M3.5 12H2
         M19.0713 4.92871L18.0106 5.98937
         M5.98975 18.0107L4.92909 19.0714"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
              />
            </motion.svg>
          )}
        </motion.div>
      </motion.button>
    </motion.div>
  );
}

