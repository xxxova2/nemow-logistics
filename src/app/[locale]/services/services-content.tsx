"use client"

import { Send, Package, Truck, MapPin, Clock } from "lucide-react"
import { useTranslations } from "next-intl"
import { Navigation } from "@/components/Navigation"
import { Footer, CTASection } from "@/components/sections/cta-section"
import PageHeader from "@/components/PageHeader"
import Reveal from "@/components/Reveal"

export default function ServicesContent() {
  const t = useTranslations("pages.services")

  const servicesList = [
    {
      icon: Send,
      title: t("service1Title"),
      description: t("service1Desc"),
      features: [t("service1Feature1"), t("service1Feature2"), t("service1Feature3"), t("service1Feature4")],
    },
    {
      icon: Package,
      title: t("service2Title"),
      description: t("service2Desc"),
      features: [t("service2Feature1"), t("service2Feature2"), t("service2Feature3"), t("service2Feature4")],
    },
    {
      icon: Truck,
      title: t("service3Title"),
      description: t("service3Desc"),
      features: [t("service3Feature1"), t("service3Feature2"), t("service3Feature3"), t("service3Feature4")],
    },
    {
      icon: MapPin,
      title: t("service4Title"),
      description: t("service4Desc"),
      features: [t("service4Feature1"), t("service4Feature2"), t("service4Feature3"), t("service4Feature4")],
    },
    {
      icon: Clock,
      title: t("service5Title"),
      description: t("service5Desc"),
      features: [t("service5Feature1"), t("service5Feature2"), t("service5Feature3"), t("service5Feature4")],
    },
  ]

  return (
    <>
      <Navigation />
      <main>
        <PageHeader title={t("pageTitle")} description={t("pageDescription")} />

        <section className="py-16 sm:py-24 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
            {servicesList.map((service, i) => (
              <Reveal key={service.title} delay={i * 0.1}>
                <div className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 items-center`}>
                  <div className="flex-1">
                    <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-5">
                      <service.icon className="w-7 h-7 text-accent" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-3">{service.title}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                    <ul className="space-y-2.5">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-3 text-sm text-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-1 w-full">
                    <div className="bg-card/50 rounded-3xl h-64 sm:h-80 flex items-center justify-center border border-border">
                      <service.icon className="w-20 h-20 text-primary/20" />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
