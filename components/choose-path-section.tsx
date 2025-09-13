"use client";

import { motion } from "framer-motion";

const paths = [
   {
      title: "AI School",
      gradient: "from-purple-500 to-purple-600",
      rotation: -8,
   },
   {
      title: "Programming School",
      gradient: "from-purple-500 to-purple-600",
      rotation: 12,
   },
   {
      title: "Business & Entrepreneurship School",
      gradient: "from-purple-500 to-purple-600",
      rotation: -15,
   },
   {
      title: "Creative Economy School",
      gradient: "from-purple-500 to-purple-600",
      rotation: 6,
   },
];

export function ChoosePathSection() {
   return (
      <section className="min-h-screen flex flex-col justify-center items-center px-8 py-20">
         <div className="max-w-6xl mx-auto text-center">
            <motion.h2
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               viewport={{ once: true }}
               className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 text-gray-900 text-gradient-hero-dark text-glow-dark leading-tight text-balance"
            >
               Choose Your Path
            </motion.h2>

            <motion.p
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
               viewport={{ once: true }}
               className="text-sm sm:text-xl md:text-2xl mb-16 text-gray-700 max-w-3xl mx-auto leading-relaxed text-balance"
            >
               Discover your passion and build expertise in the field that
               excites you most
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
               {paths.map((path, index) => (
                  <motion.div
                     key={path.title}
                     initial={{
                        opacity: 0,
                        y: 100,
                        rotate: path.rotation,
                        rotateX: 0,
                        rotateY: 0,
                     }}
                     whileInView={{
                        opacity: 1,
                        y: 0,
                        rotate: path.rotation,
                        rotateX: index % 2 === 0 ? 5 : -5,
                        rotateY: index % 2 === 0 ? -5 : 5,
                     }}
                     whileHover={{
                        scale: 1.05,
                        rotate: path.rotation + (index % 2 === 0 ? 3 : -3),
                        rotateX: index % 2 === 0 ? 8 : -8,
                        rotateY: index % 2 === 0 ? -8 : 8,
                        z: 50,
                     }}
                     whileTap={{ scale: 0.98 }}
                     transition={{
                        duration: 0.6,
                        delay: index * 0.15,
                        ease: "easeOut",
                        type: "spring",
                        stiffness: 100,
                     }}
                     viewport={{ once: true }}
                     className="group cursor-pointer"
                     style={{ perspective: "1000px" }}
                  >
                     <motion.div
                        className={`relative px-8 py-6 rounded-2xl bg-gradient-to-br ${path.gradient} shadow-2xl`}
                        whileHover={{
                           boxShadow:
                              "0 25px 50px -12px rgba(147, 51, 234, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)",
                        }}
                        transition={{ duration: 0.3 }}
                     >
                        <motion.h3
                           className="text-xl sm:text-2xl font-bold text-white text-center"
                           whileHover={{ y: -2 }}
                           transition={{ duration: 0.2 }}
                        >
                           {path.title}
                        </motion.h3>

                        <motion.div
                           className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0"
                           whileHover={{ opacity: 1 }}
                           transition={{ duration: 0.3 }}
                        />
                     </motion.div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
   );
}
