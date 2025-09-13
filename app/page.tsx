"use client";

import { ChoosePathSection } from "@/components/choose-path-section";
import { FloatingLogos } from "@/components/floating-logos";
import { HeroSection } from "@/components/hero-section";
import { InstructorsSection } from "@/components/instructors-section";

export default function Home() {
   return (
      <main className="bg-white relative overflow-x-hidden">
         {/* Background grid pattern */}
         <div className="fixed inset-0 bg-grid-pattern-light pointer-events-none z-20" />

         <FloatingLogos />

         {/* Scrollable content */}
         <div className="relative z-30">
            <HeroSection />
            <ChoosePathSection />
            <InstructorsSection />
         </div>
      </main>
   );
}
