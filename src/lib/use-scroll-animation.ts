"use client"

import { useEffect, useRef, type RefObject } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface ScrollAnimationOptions {
  start?: string
  end?: string
  scrub?: boolean | number
  markers?: boolean
  onUpdate?: (progress: number) => void
  onEnter?: () => void
  onLeave?: () => void
  onEnterBack?: () => void
  onLeaveBack?: () => void
}

export function useScrollAnimation<T extends HTMLElement>(
  options: ScrollAnimationOptions = {}
): [RefObject<T | null>, ScrollTrigger | null] {
  const ref = useRef<T>(null)
  const triggerRef = useRef<ScrollTrigger | null>(null)

  useEffect(() => {
    if (!ref.current) return

    const {
      start = "top bottom",
      end = "bottom top",
      scrub = 1,
      markers = false,
      onUpdate,
      onEnter,
      onLeave,
      onEnterBack,
      onLeaveBack,
    } = options

    triggerRef.current = ScrollTrigger.create({
      trigger: ref.current,
      start,
      end,
      scrub,
      markers,
      onUpdate: (self) => onUpdate?.(self.progress),
      onEnter,
      onLeave,
      onEnterBack,
      onLeaveBack,
    })

    return () => {
      triggerRef.current?.kill()
    }
  }, [])

  return [ref, triggerRef.current]
}

export function useMutableScrollProgress(): RefObject<{ value: number }> {
  const progressRef = useRef({ value: 0 })
  return progressRef
}

export function lerp(start: number, end: number, factor: number): number {
  return start + (end - start) * factor
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

export function mapRange(value: number, inMin: number, inMax: number, outMin: number, outMax: number): number {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}
