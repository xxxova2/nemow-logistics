"use client"

import { useEffect, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { PerspectiveCamera } from "@react-three/drei"
import * as THREE from "three"
import { MovingVan, RoadLine } from "./scene-objects"
import { useScroll } from "@/lib/scroll-context"

function SceneContent() {
  const { scrollProgress } = useScroll()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useFrame(({ scene }) => {
    const color = new THREE.Color(0xeff6ff)
    scene.background = color
    scene.fog = new THREE.Fog(color, 12, 35)
  })

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 2, 8]} fov={55} />
      <ambientLight intensity={0.7} />
      <directionalLight position={[10, 10, 5]} intensity={0.9} castShadow shadow-mapSize={[1024, 1024]} />
      <pointLight position={[0, 3, 0]} intensity={0.4} color="#2563eb" />
      <pointLight position={[4, 1, 2]} intensity={0.3} color="#f97316" />
      <MovingVan />
      <RoadLine />
    </>
  )
}

export function Scene3D() {
  const [mounted, setMounted] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    setMounted(true)
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches)
  }, [])

  if (!mounted) {
    return (
      <div className="scene-container bg-background">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      </div>
    )
  }

  if (reducedMotion) {
    return (
      <div className="scene-container bg-background">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/30 via-background to-primary/5" />
      </div>
    )
  }

  return (
    <div className="scene-container">
      <Canvas
        gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
        dpr={[1, 2]}
        shadows
      >
        <SceneContent />
      </Canvas>
    </div>
  )
}
