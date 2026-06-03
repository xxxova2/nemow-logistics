"use client"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { useScroll } from "@/lib/scroll-context"
import { lerp } from "@/lib/use-scroll-animation"
import * as THREE from "three"

export function MovingVan() {
  const vanRef = useRef<THREE.Group>(null)
  const { scrollProgress } = useScroll()

  useFrame(() => {
    if (!vanRef.current) return
    const targetX = lerp(-8, 8, scrollProgress)
    vanRef.current.position.x = lerp(vanRef.current.position.x, targetX, 0.08)
    vanRef.current.rotation.z = Math.sin(scrollProgress * Math.PI * 4) * 0.05
  })

  return (
    <group ref={vanRef} position={[-8, 0, 0]} scale={0.8}>
      {/* Van body */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <boxGeometry args={[2.5, 1.2, 1.0]} />
        <meshStandardMaterial color="#1e40af" metalness={0.3} roughness={0.4} />
      </mesh>
      {/* Cabin */}
      <mesh position={[0.7, 1.1, 0]} castShadow>
        <boxGeometry args={[1.0, 0.8, 0.9]} />
        <meshStandardMaterial color="#2563eb" metalness={0.3} roughness={0.3} />
      </mesh>
      {/* Windshield */}
      <mesh position={[1.1, 1.1, 0.46]} rotation={[0.1, 0, 0]}>
        <planeGeometry args={[0.8, 0.5]} />
        <meshStandardMaterial color="#bdf3e9" metalness={0.8} roughness={0.1} side={THREE.DoubleSide} />
      </mesh>
      {/* Wheels */}
      <mesh position={[0.6, 0.05, 0.6]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.35, 0.35, 0.2, 16]} />
        <meshStandardMaterial color="#374151" roughness={0.8} />
      </mesh>
      <mesh position={[0.6, 0.05, -0.6]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.35, 0.35, 0.2, 16]} />
        <meshStandardMaterial color="#374151" roughness={0.8} />
      </mesh>
      <mesh position={[-0.6, 0.05, 0.6]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.35, 0.35, 0.2, 16]} />
        <meshStandardMaterial color="#374151" roughness={0.8} />
      </mesh>
      <mesh position={[-0.6, 0.05, -0.6]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.35, 0.35, 0.2, 16]} />
        <meshStandardMaterial color="#374151" roughness={0.8} />
      </mesh>
      {/* Headlights */}
      <mesh position={[1.25, 0.3, 0.4]}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshStandardMaterial color="#FBBF24" emissive="#FBBF24" emissiveIntensity={2} />
      </mesh>
      <mesh position={[1.25, 0.3, -0.4]}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshStandardMaterial color="#FBBF24" emissive="#FBBF24" emissiveIntensity={2} />
      </mesh>
    </group>
  )
}

export function RoadLine() {
  return (
    <>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
        <planeGeometry args={[25, 3]} />
        <meshStandardMaterial color="#cbd5e1" roughness={1} />
      </mesh>
      {Array.from({ length: 30 }).map((_, i) => (
        <mesh key={i} rotation={[-Math.PI / 2, 0, 0]} position={[-12 + i * 0.85, -0.48, 0]} receiveShadow>
          <planeGeometry args={[0.4, 0.06]} />
          <meshStandardMaterial color="#2563eb" emissive="#2563eb" emissiveIntensity={0.2} />
        </mesh>
      ))}
    </>
  )
}
