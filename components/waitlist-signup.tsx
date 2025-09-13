"use client";

import { useState } from "react";
import { Avatar } from "./avatar";
import { WaitlistForm } from "./waitlist-form";
import { SocialIcon } from "./social-icon";
import { XIcon } from "./icons/x-icon";
import { FacebookIcon } from "./icons/facebook-icon";
import { LinkedInIcon } from "./icons/linkedin-icon";
import Image from "next/image";
import { Button } from "./ui/button";

export function WaitlistSignup() {
   const [waitlistCount, setWaitlistCount] = useState(100);
   const [showForm, setShowForm] = useState(false);

   const handleSuccess = (count: number) => {
      setWaitlistCount(count + 1200);
   };

   return (
      <div className="w-full max-w-2xl lg:max-w-5xl mx-auto p-8 flex flex-col justify-between min-h-screen">
         <div className="flex-1 flex flex-col justify-center items-center text-center space-y-5">
            <Image src="/logo.svg" width={300} height={300} alt="tath-logo" />
            {/* Enhanced hero section */}
            <div className="space-y-6">
               {/* <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800/80 backdrop-blur-sm border border-cyan-500/30 text-cyan-300 text-[10px] md:text-sm font-medium">
                  🚀 Something amazing is coming
               </div> */}

               <h1 className="text-3xl sm:text-7xl lg:text-8xl font-black mb-6 text-white text-gradient-hero text-glow leading-tight text-balance tracking-tight">
                  Tath School is here!
               </h1>

               <p className="text-xs sm:text-lg md:text-xl mb-12 text-gray-100/90 max-w-2xl mx-auto leading-relaxed text-balance">
                  A platform where you learn everything about tech, wide lessons
                  delivered in English and Hausa.
               </p>

               <div className="flex flex-col items-center space-y-2">
                  <p className="text-xs sm:text-lg md:text-xl mb-12 text-gray-100/90 max-w-2xl mx-auto leading-relaxed text-balance">
                     Choose you path:
                  </p>

                  <div className="flex flex-col items-center">
                     <p className="text-glow bg-gradient-hero p-5">AI School</p>
                     <p>Programming School</p>
                     <p>Business & Entreprenueship School</p>
                     <p>Creative Economy School</p>
                  </div>
               </div>
            </div>

            {!showForm && (
               <Button
                  onClick={() => setShowForm(true)}
                  className="bg-gradient-to-r from-[#330066] to-[#B307C6] hover:from-[#B307C6] hover:to-[#D90089] text-xs md:text-sm text-white font-semibold px-4 rounded-xl transition-all duration-300 ease-in-out focus:outline-none w-full md:w-fit border-0 shadow-lg hover:shadow-xl"
               >
                  Join waitlist
               </Button>
            )}

            {/* Enhanced form section */}
            {showForm && (
               <div className="w-full max-w-md">
                  <WaitlistForm onSuccess={handleSuccess} />
               </div>
            )}

            <div className="flex items-center justify-center space-x-4 px-3 md:px-6 py-2 md:py-3 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50">
               <div className="flex -space-x-2 md:-space-x-3">
                  <Avatar initials="JD" index={0} />
                  <Avatar initials="AS" index={1} />
                  <Avatar initials="MK" index={2} />
                  <Avatar initials="LR" index={3} />
                  <Avatar initials="TK" index={4} />
               </div>
               <div className="text-left">
                  <p className="text-white font-bold text-sm md:text-lg">
                     {waitlistCount.toLocaleString()}+
                  </p>
                  <p className="text-slate-300 text-[10px] md:text-sm">
                     people waiting
                  </p>
               </div>
            </div>
         </div>

         {/* Enhanced footer */}
         <div className="pt-8 flex justify-center space-x-8">
            <SocialIcon
               href="https://x.com/tathschool?s=21"
               target="_blank"
               rel="noopener noreferrer"
               aria-label="X (formerly Twitter)"
               icon={<XIcon className="w-6 h-6" />}
            />
            <SocialIcon
               href="https://www.facebook.com/share/1PxdMP1ivL/?mibextid=wwXIfr"
               target="_blank"
               rel="noopener noreferrer"
               aria-label="Facebook"
               icon={<FacebookIcon className="w-6 h-6" />}
            />
            {/* <SocialIcon
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          icon={<LinkedInIcon className="w-6 h-6" />}
        /> */}
         </div>
      </div>
   );
}
