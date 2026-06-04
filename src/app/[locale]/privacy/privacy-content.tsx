"use client"

import { Shield } from "lucide-react"
import { useTranslations } from "next-intl"
import { Navigation } from "@/components/Navigation"
import { Footer, CTASection } from "@/components/sections/cta-section"
import PageHeader from "@/components/PageHeader"
import Reveal from "@/components/Reveal"

export default function PrivacyContent() {
  const t = useTranslations("pages.privacy")

  const items = [
    { title: t("item1Title"), content: t("item1Content") },
    { title: t("item2Title"), content: t("item2Content") },
    { title: t("item3Title"), content: t("item3Content") },
    { title: t("item4Title"), content: t("item4Content") },
  ]

  return (
    <>
      <Navigation />
      <main className="page-bg">
        <PageHeader title={t("pageTitle")} description="" />
        <Reveal>
          <section className="py-16 sm:py-24 bg-card">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-muted-foreground leading-relaxed mb-10">{t("section1Content")}</p>
              <div className="space-y-8">
                {items.map((item) => (
                  <div key={item.title} className="bg-card/50 rounded-2xl p-6 border border-border">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                        <Shield className="w-5 h-5 text-accent" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.content}</p>
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
