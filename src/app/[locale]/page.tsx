"use client"
import dynamic from "next/dynamic"
import { Navigation } from "@/components/Navigation"
import { HeroSection } from "@/components/sections/hero-section"
import { PackageSection } from "@/components/sections/package-section"
import { ServicesSection } from "@/components/sections/services-section"
import { CTASection, Footer } from "@/components/sections/cta-section"

const Scene3D = dynamic(
  () => import("@/components/3d/scene-3d").then((mod) => mod.Scene3D),
  {
    ssr: false,
    loading: () => (
      <div className="fixed inset-0 bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    ),
  }
)

export default function Home() {
  return (
    <>
      <Scene3D />
      <Navigation />
      <main className="relative">
        <HeroSection />
        <PackageSection />
        <ServicesSection />
        <CTASection />
        <Footer />
      </main>
    </>
  )
}
