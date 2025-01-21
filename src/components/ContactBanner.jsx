import React from "react";
import { motion, useInView } from "framer-motion";
import {
  ConversationIcon,
  IconArrowRight,
  IconDownload,
  IconEyes,
  IconLinkedin,
  IconWhatsappT,
} from "../icons/Icons";

const ContactSection = () => {
  // Ref for the section to monitor when it comes into view
  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  console.log(isInView)

  const wordVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  const AnimatedText = ({ text }) => {
    const words = text.split(" ");
    return (
      <span>
        {words.map((word, index) => (
          <motion.span
            key={index}
            custom={index}
            variants={wordVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="inline-block mr-1"
          >
            {word}
          </motion.span>
        ))}
      </span>
    );
  };

  return (
    <motion.section
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="border-t border-[#d9d6d6c7] dark:border-[#2b2b2b] border-b flex items-center justify-center"
    >
      <div className="mx-6 flex flex-col gap-16 my-16 max-w-screen-xl w-full md:flex-row md:justify-between">
        {/* Contact mail */}
        <motion.a
          custom={0}
          variants={wordVariants}
          href="mailto:mich.ia@hotmail.com?subject=Hola&body=Hola%20Michelle%20..."
          className="flex items-center justify-between cursor-pointer gap-2 group"
        >
          <div className="flex gap-2">
            <div className="w-7 flex items-center gap-4"   >
              <ConversationIcon />
            </div>
            <div className="w-8 text-terteary flex items-center gap-4"   >
              <IconLinkedin/>
            </div>
            <p>
              <AnimatedText text="Contactame" />
            </p>
          </div>

          <div className="w-7 transition-all duration-100 group-hover:-rotate-45">
            <IconArrowRight />
          </div>
        </motion.a>

        {/* Whatsapp */}
        <motion.div
          custom={1}
          variants={wordVariants}
          className="flex items-center gap-4 group max-w-[580px]"
        >
          <p className="text-white">
            <AnimatedText text="Bienvenido al espacio donde muestro la experiencia y el datelle que me gusta proporcionar a los proyectos" />
          </p>
          <div className="w-7 transition-all duration-100 group-hover:-rotate-45 md:hidden">
            <IconArrowRight />
          </div>
      
        </motion.div>

        {/* CV */}
        <motion.div
          custom={2}
          variants={wordVariants}
          className="flex items-center gap-2"
          ref={sectionRef}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19Z"
              fill="currentColor"
            ></path>
            <path
              d="M15.7997 2.20999C15.3897 1.79999 14.6797 2.07999 14.6797 2.64999V6.13999C14.6797 7.59999 15.9197 8.80999 17.4297 8.80999C18.3797 8.81999 19.6997 8.81999 20.8297 8.81999C21.3997 8.81999 21.6997 8.14999 21.2997 7.74999C19.8597 6.29999 17.2797 3.68999 15.7997 2.20999Z"
              fill="currentColor"
            ></path>
            <path
              d="M13.5 13.75H7.5C7.09 13.75 6.75 13.41 6.75 13C6.75 12.59 7.09 12.25 7.5 12.25H13.5C13.91 12.25 14.25 12.59 14.25 13C14.25 13.41 13.91 13.75 13.5 13.75Z"
              fill="currentColor"
            ></path>
            <path
              d="M11.5 17.75H7.5C7.09 17.75 6.75 17.41 6.75 17C6.75 16.59 7.09 16.25 7.5 16.25H11.5C11.91 16.25 12.25 16.59 12.25 17C12.25 17.41 11.91 17.75 11.5 17.75Z"
              fill="currentColor"
            ></path>
          </svg>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-1.5">
              <div className="">
                <p>
                  CV <span className="text-xs text-terteary">2025</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 ml-4">
              <div className="p-2 w7 rounded-xl border border-[#eff3f4] bg-[#eff3f43c] dark:bg-[#2c2c2c] dark:border-[#4d4d4da0] transition-all duration-150 hover:-translate-y-2">
                <IconDownload />
              </div>
              <div className="p-2 w7 rounded-xl border border-[#eff3f4] bg-[#eff3f43c] dark:bg-[#2c2c2c] dark:border-[#4d4d4da0] transition-all duration-150 hover:-translate-y-2">
                <IconEyes />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
