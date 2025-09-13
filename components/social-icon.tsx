import type React from "react";

interface SocialIconProps {
   href: string;
   "aria-label": string;
   icon: React.ReactNode;
   target?: string;
   rel?: string;
   className?: string;
}

export function SocialIcon({
   href,
   "aria-label": ariaLabel,
   icon,
   target,
   rel,
   className,
}: SocialIconProps) {
   return (
      <a
         href={href}
         aria-label={ariaLabel}
         target={target}
         rel={rel}
         className={`${className}`}
      >
         {icon}
      </a>
   );
}
