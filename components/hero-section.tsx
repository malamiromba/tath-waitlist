"use client";

import { useState } from "react";
import { Avatar } from "./avatar";
import { WaitlistForm } from "./waitlist-form";
import { SocialIcon } from "./social-icon";
import { XIcon } from "./icons/x-icon";
import { FacebookIcon } from "./icons/facebook-icon";
import { WhatsAppIcon } from "./icons/whatsapp-icon";
import Image from "next/image";
import { Button } from "./ui/button";
import { motion, easeOut } from "framer-motion";

export function HeroSection() {
   const [waitlistCount, setWaitlistCount] = useState(100);
   const [showForm, setShowForm] = useState(false);

   const handleSuccess = (count: number) => {
      //  setWaitlistCount(count + 1)
   };

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
      initial: { opacity: 0 },
      animate: {
         opacity: 1,
         transition: {
            staggerChildren: 0.2,
            delayChildren: 0.5,
         },
      },
   };

   const itemVariants = {
      initial: { y: 20, opacity: 0 },
      animate: {
         y: 0,
         opacity: 1,
         transition: { duration: 0.6, ease: easeOut },
      },
   };

   return (
      <section className="min-h-screen flex flex-col justify-center items-center text-center space-y-8 px-8">
         <Image
            src="/logo.svg"
            width={300}
            height={300}
            alt="tath-logo"
            className="animate-pulse"
         />

         <div className="space-y-6 max-w-4xl">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black mb-6 text-gray-900 text-gradient-hero-dark text-glow-dark leading-tight text-balance tracking-tight">
               Tath School is here!
            </h1>

            <p className="text-sm sm:text-xl md:text-2xl mb-12 text-gray-700 max-w-3xl mx-auto leading-relaxed text-balance">
               A platform where you learn everything about tech, wide lessons
               delivered in English and Hausa.
            </p>
         </div>

         {!showForm && (
            <Button
               onClick={() => setShowForm(true)}
               className="bg-gradient-to-r from-[#330066] to-[#B307C6] hover:from-[#B307C6] hover:to-[#D90089] text-lg text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 ease-in-out focus:outline-none border-0 shadow-lg hover:shadow-xl btn-glow hover:btn-glow-hover"
            >
               Join waitlist
            </Button>
         )}

         {showForm && (
            <div className="w-full max-w-md">
               <WaitlistForm onSuccess={handleSuccess} />
            </div>
         )}

         <div className="flex items-center justify-center space-x-4 px-6 py-3 rounded-2xl bg-gray-100 backdrop-blur-sm border border-gray-200">
            <div className="flex -space-x-3">
               <Avatar initials="JD" index={0} />
               <Avatar initials="AS" index={1} />
               <Avatar initials="MK" index={2} />
               <Avatar initials="LR" index={3} />
               <Avatar initials="TK" index={4} />
            </div>
            <div className="text-left">
               <p className="text-gray-900 font-bold text-lg">
                  {waitlistCount.toLocaleString()}+
               </p>
               <p className="text-gray-600 text-sm">people waiting</p>
            </div>
         </div>

         <motion.div
            className="pt-8 flex justify-center space-x-6"
            variants={containerVariants}
            initial="initial"
            animate="animate"
         >
            <motion.div variants={itemVariants} whileHover="hover">
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
                     icon={<XIcon className="w-8 h-8" />}
                     className="w-16 h-16 flex items-center justify-center text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                     style={{
                        background:
                           "linear-gradient(135deg, #1f2937 0%, #374151 100%)",
                        boxShadow:
                           "0 10px 25px rgba(31, 41, 55, 0.3), 0 0 20px rgba(31, 41, 55, 0.1)",
                     }}
                  />
               </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} whileHover="hover">
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
                     icon={<FacebookIcon className="w-8 h-8" />}
                     className="w-16 h-16 flex items-center justify-center text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                     style={{
                        background:
                           "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
                        boxShadow:
                           "0 10px 25px rgba(6, 182, 212, 0.4), 0 0 20px rgba(6, 182, 212, 0.2)",
                     }}
                  />
               </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} whileHover="hover">
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
                     icon={<WhatsAppIcon className="w-8 h-8" />}
                     className="w-16 h-16 flex items-center justify-center text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
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
      </section>
   );
}
