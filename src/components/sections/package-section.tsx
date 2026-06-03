"use client"

import { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Package, MapPin, Clock, CheckCircle2, Truck, Warehouse, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTranslations } from "next-intl"

gsap.registerPlugin(ScrollTrigger)

const trackingStepsStatus = ["completed", "completed", "active", "pending"]

export function PackageSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const [trackingNumber] = useState("NL-2024-7829-4521")
  const t = useTranslations("package")

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current || !timelineRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current, { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%", end: "top 30%", toggleActions: "play none none reverse" },
      })
      const items = timelineRef.current!.querySelectorAll(".timeline-item")
      gsap.fromTo(items, { opacity: 0, x: -30 }, {
        opacity: 1, x: 0, duration: 0.6, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: timelineRef.current, start: "top 60%", end: "top 20%", toggleActions: "play none none reverse" },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const steps = [
    { icon: Warehouse, title: t("step1"), location: t("step1Loc"), time: t("step1Time") },
    { icon: Package, title: t("step2"), location: t("step2Loc"), time: t("step2Time") },
    { icon: Truck, title: t("step3"), location: t("step3Loc"), time: t("step3Time") },
    { icon: MapPin, title: t("step4"), location: t("step4Loc"), time: t("step4Time") },
  ]

  return (
    <section ref={sectionRef} id="track" className="relative min-h-screen flex items-center py-24 content-layer">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div ref={contentRef}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Package className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">{t("badge")}</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
              {t("heading1")}
              {t("heading2") && (
                <><br /><span className="text-primary text-glow-teal">{t("heading2")}</span></>
              )}
              {t("heading3") && (
                <><br />{t("heading3")}</>
              )}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg text-pretty">{t("description")}</p>
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <div className="relative flex-1">
                <Search className="absolute ltr:left-3 rtl:right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder={t("placeholder")}
                  value={trackingNumber}
                  readOnly
                  className="ltr:pl-10 rtl:pr-10 h-12 bg-card border-border text-foreground"
                />
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8">
                {t("track")}
              </Button>
            </div>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-accent" />
                <span className="text-sm text-muted-foreground">{t("estDelivery")} <span className="text-foreground">{t("today")}</span></span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">{t("distance")} <span className="text-foreground">{t("milesAway")}</span></span>
              </div>
            </div>
          </div>

          <div ref={timelineRef} className="relative p-6 md:p-8 rounded-3xl bg-card/50 backdrop-blur-sm border border-border">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
              <div>
                <p className="text-sm text-muted-foreground mb-1">{t("trackingNumber")}</p>
                <p className="text-lg font-mono font-semibold text-foreground">{trackingNumber}</p>
              </div>
              <div className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium">{t("inTransit")}</div>
            </div>
            <div className="space-y-6">
              {steps.map((step, index) => {
                const Icon = step.icon
                const isCompleted = trackingStepsStatus[index] === "completed"
                const isActive = trackingStepsStatus[index] === "active"
                return (
                  <div key={index} className="timeline-item flex gap-4 relative">
                    {index < steps.length - 1 && (
                      <div className={`absolute ltr:left-5 rtl:right-5 top-10 w-0.5 h-full ${isCompleted ? "bg-primary" : "bg-border"}`} />
                    )}
                    <div className={`relative z-10 w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      isCompleted ? "bg-primary text-primary-foreground" : isActive ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"
                    }`}>
                      {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                    </div>
                    <div className="flex-1 pb-6">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className={`font-semibold ${isActive ? "text-accent" : "text-foreground"}`}>{step.title}</h4>
                          <p className="text-sm text-muted-foreground">{step.location}</p>
                        </div>
                        <span className="text-xs text-muted-foreground whitespace-nowrap">{step.time}</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">{t("progress")}</span>
                <span className="text-sm font-semibold text-foreground">75%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000" style={{ width: "75%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
