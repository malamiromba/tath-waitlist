"use client";

import { useState } from "react";
import { Avatar } from "./avatar";
import { WaitlistForm } from "./waitlist-form";
import Image from "next/image";
import { Button } from "./ui/button";
import { FloatingSocialBtns } from "./floating-social-buttons";

export function HeroSection() {
   const [waitlistCount, setWaitlistCount] = useState(100);
   const [showForm, setShowForm] = useState(false);

   const handleSuccess = (count: number) => {
      //  setWaitlistCount(count + 1)
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
            <h1 className="text-5xl sm:text-7xl font-black mb-6 text-gray-900 text-gradient-hero-dark text-glow-dark leading-tight text-balance tracking-tight">
               Tathschool is almost here!
            </h1>

            <p className="text-sm sm:text-xl md:text-2xl mb-12 text-gray-700 max-w-3xl mx-auto leading-relaxed text-balance">
               A platform where you learn everything about tech, wide lessons
               delivered in English and Hausa.
            </p>
         </div>

         {!showForm && (
            <Button
               size="lg"
               onClick={() => setShowForm(true)}
               className="bg-gradient-to-r h-14 px-16 from-[#330066] to-[#B307C6] hover:from-[#B307C6] hover:to-[#D90089] text-lg text-white font-semibold py-4 rounded-xl transition-all duration-300 ease-in-out focus:outline-none border-0 shadow-lg hover:shadow-xl btn-glow hover:btn-glow-hover"
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

         <FloatingSocialBtns />
      </section>
   );
}
