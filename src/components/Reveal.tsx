"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
}

export default function Reveal({ children, className = "", delay = 0, direction = "up" }: RevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const variants = {
    up: { y: 60 },
    down: { y: -60 },
    left: { x: 60 },
    right: { x: -60 },
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...variants[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
