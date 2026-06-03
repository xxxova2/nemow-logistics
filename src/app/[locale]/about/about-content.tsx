"use client"

import { Shield, Clock, TrendingUp, Heart } from "lucide-react"
import { useTranslations } from "next-intl"
import { Navigation } from "@/components/Navigation"
import { Footer, CTASection } from "@/components/sections/cta-section"
import PageHeader from "@/components/PageHeader"
import Reveal from "@/components/Reveal"

export default function AboutContent() {
  const t = useTranslations("pages.about")

  const values = [
    { icon: Clock, title: t("value1"), description: t("value1Desc") },
    { icon: Shield, title: t("value2"), description: t("value2Desc") },
    { icon: TrendingUp, title: t("value3"), description: t("value3Desc") },
    { icon: Heart, title: t("value4"), description: t("value4Desc") },
  ]

  return (
    <>
      <Navigation />
      <main>
        <PageHeader title={t("pageTitle")} description={t("pageDescription")} />
        <Reveal>
          <section className="py-16 sm:py-24 bg-card">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight mb-6">{t("storyTitle")}</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>{t("storyP1")}</p>
                  <p>{t("storyP2")}</p>
                  <p>{t("storyP3")}</p>
                </div>
              </div>
            </div>
          </section>
        </Reveal>
        <Reveal>
          <section className="py-16 sm:py-24 bg-card/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight mb-4">{t("valuesTitle")}</h2>
                <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">{t("valuesDesc")}</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-8">
                {values.map((v) => (
                  <div key={v.title} className="bg-card rounded-2xl p-6 sm:p-8 border border-border">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                      <v.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{v.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Reveal>
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
