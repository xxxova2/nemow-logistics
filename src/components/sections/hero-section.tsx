"use client"

import { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { ArrowRight, Package, Truck, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslations, useLocale } from "next-intl"
import { Link } from "@/i18n/navigation"

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subheadingRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  const locale = useLocale()
  const t = useTranslations("hero")

  useEffect(() => {
    setMounted(true)
    if (!headingRef.current || !subheadingRef.current || !ctaRef.current || !statsRef.current) return

    const tl = gsap.timeline({ delay: 0.5 })
    tl.fromTo(headingRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" })
      .fromTo(subheadingRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.5")
      .fromTo(ctaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.4")
      .fromTo(statsRef.current.children, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power3.out" }, "-=0.3")

    return () => { tl.kill() }
  }, [mounted])

  if (!mounted) return null

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center content-layer">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-primary">{t("badge")}</span>
          </div>

          <h1 ref={headingRef} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-balance">
            <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary block mb-4">{t("company")}</span>
            <span className={locale === "ar" ? "text-foreground" : "text-primary"}>{locale === "ar" ? t("arHeadline") : t("enHeadline")}</span>
          </h1>

          <p ref={subheadingRef} className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-10 text-pretty">
            {t("description")}
          </p>

          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/tracking">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg glow-teal">
                {t("trackPackage")}
                <ArrowRight className="ltr:ml-2 rtl:mr-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="border-border hover:bg-secondary px-8 py-6 text-lg">
                {t("viewServices")}
              </Button>
            </Link>
          </div>

          <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card/80 backdrop-blur-md border border-border/50 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-accent/30 flex items-center justify-center">
                <Package className="w-6 h-6 text-accent" />
              </div>
              <div className="text-lg font-bold text-foreground">{t("badge1Title")}</div>
              <div className="text-sm text-foreground/70 text-center">{t("badge1Desc")}</div>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card/80 backdrop-blur-md border border-border/50 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-primary/30 flex items-center justify-center">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <div className="text-lg font-bold text-foreground">{t("badge2Title")}</div>
              <div className="text-sm text-foreground/70 text-center">{t("badge2Desc")}</div>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card/80 backdrop-blur-md border border-border/50 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-primary/30 flex items-center justify-center">
                <Truck className="w-6 h-6 text-primary" />
              </div>
              <div className="text-lg font-bold text-foreground">{t("badge3Title")}</div>
              <div className="text-sm text-foreground/70 text-center">{t("badge3Desc")}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground uppercase tracking-widest">{t("scrollToExplore")}</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  )
}
