interface AvatarProps {
   initials: string;
   index: number;
}

export function Avatar({ initials, index }: AvatarProps) {
   const colors = [
      "bg-gradient-to-br from-[#330066] to-[#B307C6]", // Primary to secondary purple
      "bg-gradient-to-br from-[#B307C6] to-[#D90089]", // Secondary purple to tertiary pink
      "bg-gradient-to-br from-[#D90089] to-[#03DEFE]", // Tertiary pink to accent cyan
   ];

   return (
      <div
         className={`w-6 h-6 md:w-10 md:h-10 rounded-full border border-[#03DEFE]/30 ${colors[index]} flex items-center justify-center text-white font-semibold text-sm shadow-lg`}
      >
         <p className="text-[8px] md:text-sm text-white md:font-bold">{initials}</p>
      </div>
   );
}
