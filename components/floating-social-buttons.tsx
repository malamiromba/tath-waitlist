"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, easeInOut, easeOut } from "framer-motion";
import { SocialIcon } from "./social-icon";
import { XIcon } from "./icons/x-icon";
import { FacebookIcon } from "./icons/facebook-icon";
import { WhatsAppIcon } from "./icons/whatsapp-icon";

export function FloatingSocialBtns() {
   const [isScrolled, setIsScrolled] = useState(false);
   const [showIcons, setShowIcons] = useState(true);

   useEffect(() => {
      const handleScroll = () => {
         const heroHeight = window.innerHeight;
         const scrollPosition = window.scrollY;

         // Hide icons when scrolled past hero section, show them when they reach bottom right
         if (scrollPosition > heroHeight * 0.3) {
            setIsScrolled(true);
         } else {
            setIsScrolled(false);
         }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   const socialIconVariants = {
      initial: { scale: 1, rotate: 0 },
      animate: {
         scale: [1, 1.1, 1],
         rotate: [0, 5, -5, 0],
         transition: {
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse" as const,
            ease: easeOut,
         },
      },
      hover: {
         scale: 1.2,
         rotate: 10,
         transition: { duration: 0.3 },
      },
   };

   const containerVariants = {
      hero: {
         position: "static",
         right: "auto",
         bottom: "auto",
         flexDirection: "row",
         gap: "1.5rem",
         transition: {
            duration: 0.6,
            ease: easeInOut,
         },
      },
      floating: {
         position: "fixed",
         right: "1.5rem",
         bottom: "1.5rem",
         flexDirection: "column",
         gap: "0.75rem",
         transition: {
            duration: 0.6,
            ease: easeInOut,
         },
      },
   };

   return (
      <AnimatePresence>
         <motion.div
            className={`z-50 flex ${
               isScrolled
                  ? "fixed right-6 bottom-6 flex-col space-y-3"
                  : "justify-center space-x-6"
            }`}
            initial="hero"
            animate={isScrolled ? "floating" : "hero"}
            variants={containerVariants}
         >
            <motion.div whileHover="hover" className={isScrolled ? "mb-2" : ""}>
               <motion.div
                  variants={socialIconVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
               >
                  <SocialIcon
                     href="https://x.com/tathschool?s=21"
                     target="_blank"
                     rel="noopener noreferrer"
                     aria-label="X (formerly Twitter)"
                     icon={
                        <XIcon
                           className={`${isScrolled ? "w-6 h-6" : "w-8 h-8"}`}
                        />
                     }
                     className={`${
                        isScrolled ? "w-12 h-12" : "w-16 h-16"
                     } flex items-center justify-center text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group`}
                     style={{
                        background:
                           "linear-gradient(135deg, #1f2937 0%, #374151 100%)",
                        boxShadow:
                           "0 10px 25px rgba(31, 41, 55, 0.3), 0 0 20px rgba(31, 41, 55, 0.1)",
                     }}
                  />
               </motion.div>
            </motion.div>

            <motion.div whileHover="hover" className={isScrolled ? "mb-2" : ""}>
               <motion.div
                  variants={socialIconVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  style={{ animationDelay: "0.3s" }}
               >
                  <SocialIcon
                     href="https://www.facebook.com/share/1PxdMP1ivL/?mibextid=wwXIfr"
                     target="_blank"
                     rel="noopener noreferrer"
                     aria-label="Facebook"
                     icon={
                        <FacebookIcon
                           className={`${isScrolled ? "w-6 h-6" : "w-8 h-8"}`}
                        />
                     }
                     className={`${
                        isScrolled ? "w-12 h-12" : "w-16 h-16"
                     } flex items-center justify-center text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group`}
                     style={{
                        background:
                           "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
                        boxShadow:
                           "0 10px 25px rgba(6, 182, 212, 0.4), 0 0 20px rgba(6, 182, 212, 0.2)",
                     }}
                  />
               </motion.div>
            </motion.div>

            <motion.div whileHover="hover">
               <motion.div
                  variants={socialIconVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  style={{ animationDelay: "0.6s" }}
               >
                  <SocialIcon
                     href="https://wa.me/qr/TPFCHF46I25QE1"
                     target="_blank"
                     rel="noopener noreferrer"
                     aria-label="WhatsApp"
                     icon={
                        <WhatsAppIcon
                           className={`${isScrolled ? "w-6 h-6" : "w-8 h-8"}`}
                        />
                     }
                     className={`${
                        isScrolled ? "w-12 h-12" : "w-16 h-16"
                     } flex items-center justify-center text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group`}
                     style={{
                        background:
                           "linear-gradient(135deg, #ec4899 0%, #db2777 100%)",
                        boxShadow:
                           "0 10px 25px rgba(236, 72, 153, 0.4), 0 0 20px rgba(236, 72, 153, 0.2)",
                     }}
                  />
               </motion.div>
            </motion.div>
         </motion.div>
      </AnimatePresence>
   );
}
