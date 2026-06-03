"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Truck, Package, Shield, Zap, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/navigation"
import { useTranslations } from "next-intl"

gsap.registerPlugin(ScrollTrigger)

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const t = useTranslations("services")

  const services = [
    { icon: Truck, title: t("p2pDelivery"), description: t("p2pDeliveryDesc"), color: "primary" },
    { icon: Package, title: t("warehousing"), description: t("warehousingDesc"), color: "accent" },
  ]

  const features = [
    { icon: Shield, title: t("onTimeGuarantee"), description: t("onTimeGuaranteeDesc") },
    { icon: Zap, title: t("fullyInsured"), description: t("fullyInsuredDesc") },
  ]

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !cardsRef.current || !featuresRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current, { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%", toggleActions: "play none none reverse" },
      })
      const cards = cardsRef.current!.querySelectorAll(".service-card")
      gsap.fromTo(cards, { opacity: 0, y: 40, scale: 0.95 }, {
        opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: cardsRef.current, start: "top 65%", toggleActions: "play none none reverse" },
      })
      const features = featuresRef.current!.querySelectorAll(".feature-item")
      gsap.fromTo(features, { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: featuresRef.current, start: "top 75%", toggleActions: "play none none reverse" },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="services" className="relative min-h-screen py-24 content-layer">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Truck className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">{t("badge")}</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
            {t("heading1")}
            <br />
            <span className="text-accent text-glow-teal">{t("heading2")}</span> {t("heading3")}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">{t("description")}</p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 gap-6 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon
            const isPrimary = service.color === "primary"
            return (
              <div key={index} className="service-card group relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                <div className={`w-14 h-14 rounded-2xl mb-5 flex items-center justify-center ${isPrimary ? "bg-primary/20" : "bg-accent/20"}`}>
                  <Icon className={`w-7 h-7 ${isPrimary ? "text-primary" : "text-accent"}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 text-pretty">{service.description}</p>
                <ArrowRight className={`w-5 h-5 ${isPrimary ? "text-primary" : "text-accent"} opacity-0 group-hover:opacity-100 transform ltr:translate-x-0 rtl:-translate-x-0 group-hover:ltr:translate-x-1 group-hover:rtl:-translate-x-1 transition-all duration-300`} />
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                  isPrimary ? "bg-gradient-to-br from-primary/5 to-transparent" : "bg-gradient-to-br from-accent/5 to-transparent"
                }`} />
              </div>
            )
          })}
        </div>

        <div ref={featuresRef} className="p-8 rounded-3xl bg-card/30 backdrop-blur-sm border border-border">
          <div className="grid sm:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="feature-item flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="text-center mt-16">
          <Link href="/services">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg glow-mint">
              {t("exploreAll")}
              <ArrowRight className="ltr:ml-2 rtl:mr-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
