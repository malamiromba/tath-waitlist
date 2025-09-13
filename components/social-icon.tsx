import type React from "react"
import type { ReactNode } from "react"

interface SocialIconProps {
  href: string
  target?: string
  rel?: string
  "aria-label"?: string
  icon: ReactNode
  className?: string
  style?: React.CSSProperties
}

export function SocialIcon({ href, target, rel, "aria-label": ariaLabel, icon, className, style }: SocialIconProps) {
  return (
    <a href={href} target={target} rel={rel} aria-label={ariaLabel} className={className} style={style}>
      {icon}
    </a>
  )
}
