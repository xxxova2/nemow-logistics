"use client"

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react"
import Lenis from "lenis"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface ScrollContextValue {
  lenis: Lenis | null
  scrollProgress: number
}

const ScrollContext = createContext<ScrollContextValue>({
  lenis: null,
  scrollProgress: 0,
})

export function useScroll() {
  return useContext(ScrollContext)
}

export function ScrollProvider({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const lenisInstance = new Lenis({
      duration: prefersReducedMotion ? 0.5 : 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 2,
    })

    setLenis(lenisInstance)

    lenisInstance.on("scroll", ScrollTrigger.update)
    gsap.ticker.add((time) => {
      lenisInstance.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    lenisInstance.on("scroll", ({ progress }: { progress: number }) => {
      setScrollProgress(progress)
    })

    return () => {
      lenisInstance.destroy()
      gsap.ticker.remove(lenisInstance.raf)
    }
  }, [])

  return (
    <ScrollContext.Provider value={{ lenis, scrollProgress }}>
      {children}
    </ScrollContext.Provider>
  )
}
