"use client"

import { Star } from "lucide-react"
import { useTranslations } from "next-intl"
import { Navigation } from "@/components/Navigation"
import { Footer, CTASection } from "@/components/sections/cta-section"
import PageHeader from "@/components/PageHeader"
import Reveal from "@/components/Reveal"

export default function TestimonialsContent() {
  const t = useTranslations("pages.testimonials")

  const testimonials = [
    { quote: t("quote1"), name: t("name1"), role: t("role1") },
    { quote: t("quote2"), name: t("name2"), role: t("role2") },
    { quote: t("quote3"), name: t("name3"), role: t("role3") },
    { quote: t("quote4"), name: t("name4"), role: t("role4") },
    { quote: t("quote5"), name: t("name5"), role: t("role5") },
    { quote: t("quote6"), name: t("name6"), role: t("role6") },
  ]

  return (
    <>
      <Navigation />
      <main>
        <PageHeader
          title={t("pageTitle")}
          description={t("pageDescription")}
        />

        <Reveal>
          <section className="py-16 sm:py-24 bg-card">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight mb-12 text-center">
                {t("sectionTitle")}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials.map((item) => (
                  <div key={item.name} className="bg-card rounded-2xl p-6 sm:p-8 border border-border">
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <blockquote className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                      &ldquo;{item.quote}&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                        {item.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-foreground">{item.name}</p>
                        <p className="text-xs text-muted-foreground">{item.role}</p>
                      </div>
                    </div>
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
