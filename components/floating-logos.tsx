"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface FloatingLogo {
   id: number;
   x: number;
   y: number;
   size: number;
   opacity: number;
   duration: number;
   delay: number;
}

export function FloatingLogos() {
   const [logos, setLogos] = useState<FloatingLogo[]>([]);

   useEffect(() => {
      // Generate 4 floating logos with random properties (increased from 3 to 4)
      const generateLogos = () => {
         return Array.from({ length: 4 }, (_, i) => ({
            id: i,
            x: Math.random() * 70 + 15, // 15-85% from left (more centered)
            y: Math.random() * 70 + 15, // 15-85% from top (more centered)
            size: Math.random() * 100 + 80, // 80-180px (increased size)
            opacity: Math.random() * 0.3 + 0.15, // 0.15-0.45 opacity for better visibility
            duration: Math.random() * 25 + 15, // 15-40s animation duration
            delay: Math.random() * 10, // 0-10s delay (increased range)
         }));
      };

      setLogos(generateLogos());
   }, []);

   return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
         {logos.map((logo) => (
            <div
               key={logo.id}
               className="absolute animate-float"
               style={{
                  left: `${logo.x}%`,
                  top: `${logo.y}%`,
                  opacity: logo.opacity,
                  animationDuration: `${logo.duration}s`,
                  animationDelay: `${logo.delay}s`,
               }}
            >
               <div
                  className="relative"
                  style={{
                     width: `${logo.size}px`,
                     height: `${logo.size * 0.22}px`, // Maintain aspect ratio of logo
                  }}
               >
                  <Image
                     src="/logo.svg"
                     alt=""
                     fill
                     className="object-contain"
                     style={{
                        filter:
                           "brightness(0) saturate(100%) invert(20%) sepia(10%) saturate(99%) hue-rotate(190deg) brightness(85%) contrast(101%) drop-shadow(0 0 15px rgba(100, 200, 255, 0.3))",
                     }}
                  />
               </div>
            </div>
         ))}
      </div>
   );
}
