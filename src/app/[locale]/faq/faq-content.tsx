"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"
import { useTranslations } from "next-intl"
import { Navigation } from "@/components/Navigation"
import { Footer, CTASection } from "@/components/sections/cta-section"
import PageHeader from "@/components/PageHeader"
import Reveal from "@/components/Reveal"

export default function FaqContent() {
  const t = useTranslations("pages.faq")
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqItems = [
    { title: t("q1Title"), content: t("q1Content") },
    { title: t("q2Title"), content: t("q2Content") },
    { title: t("q3Title"), content: t("q3Content") },
    { title: t("q4Title"), content: t("q4Content") },
    { title: t("q5Title"), content: t("q5Content") },
    { title: t("q6Title"), content: t("q6Content") },
    { title: t("q7Title"), content: t("q7Content") },
  ]

  return (
    <>
      <Navigation />
      <main>
        <PageHeader title={t("pageTitle")} description={t("pageDescription")} />
        <Reveal>
          <section className="py-16 sm:py-24 bg-card">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
              {faqItems.map((item, i) => (
                <div key={i} className="bg-card/50 rounded-2xl border border-border overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                        <HelpCircle className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-sm font-semibold text-foreground">{item.title}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform ${openIndex === i ? "rotate-180" : ""}`} />
                  </button>
                  {openIndex === i && (
                    <div className="px-5 pb-5">
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </Reveal>
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
