"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { WaitlistForm } from "./waitlist-form";
import { Button } from "./ui/button";

export function InstructorsSection() {
   const [showAll, setShowAll] = useState(false);

   const instructors = [
      { id: 0 },
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 },
      { id: 9 },
      { id: 11 },
      { id: 12 },
      { id: 13 },
   ];

   const displayedInstructors = showAll ? instructors : instructors.slice(0, 3);

   const handleSuccess = () => {
      //
   };

   return (
      <section className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-20">
         <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 text-gray-900 text-gradient-hero-dark text-glow-dark leading-tight text-balance">
               Instructors
            </h2>

            <p className="text-sm sm:text-xl md:text-2xl mb-16 text-gray-700 max-w-3xl mx-auto leading-relaxed text-balance">
               Learn from industry experts and passionate educators who will
               guide your journey
            </p>

            {/* Instructor Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
               {displayedInstructors.map((instructor, index) => (
                  <motion.div
                     key={instructor.id}
                     className="instructor-image-hover section-fade-in flex justify-center"
                     style={{ animationDelay: `${index * 0.1}s` }}
                     initial={{ opacity: 0, y: 50 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{
                        duration: 0.6,
                        delay: index * 0.1,
                        ease: "easeOut",
                     }}
                  >
                     <div className="relative group">
                        {/* Glow effect background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110" />

                        {/* Image container - Updated border colors for white background */}
                        <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-2 border-gray-300 group-hover:border-cyan-500/50 transition-colors duration-300">
                           <Image
                              src={`/flyer${instructor.id}.png`}
                              alt="Instructor"
                              className="w-full h-full object-cover"
                              width={500}
                              height={500}
                           />

                           {/* Overlay gradient - Updated overlay for white background */}
                           <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                     </div>
                  </motion.div>
               ))}
            </div>

            {!showAll && instructors.length > 3 && (
               <motion.div
                  className="mt-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
               >
                  <Button
                     onClick={() => setShowAll(true)}
                     className="bg-gradient-to-r h-12 from-[#330066] to-[#B307C6] hover:from-[#B307C6] hover:to-[#D90089] text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 ease-in-out focus:outline-none border-0 shadow-lg hover:shadow-xl"
                  >
                     See More
                  </Button>
               </motion.div>
            )}

            {/* Call to action - Updated colors for white background */}
            <div className="mt-16 p-6 flex flex-col items-center sm:p-8 rounded-3xl bg-gray-100 backdrop-blur-sm border border-gray-200">
               <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-gray-900">
                  Ready to Start Learning?
               </h3>
               <p className="text-gray-600 text-base sm:text-lg mb-6 max-w-2xl mx-auto">
                  Be one of the first to get notified once we launch and get
                  free course.
               </p>
               <div className="w-full max-w-md">
                  <WaitlistForm onSuccess={handleSuccess} />
               </div>
               <div className="inline-flex items-center px-4 sm:px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-700 text-sm font-medium">
                  🚀 Coming Soon - Be the First to Know!
               </div>
            </div>
         </div>
      </section>
   );
}
