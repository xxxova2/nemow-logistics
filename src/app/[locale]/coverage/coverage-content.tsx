"use client"

import { MapPin, Building, Globe, ArrowRight } from "lucide-react"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { Navigation } from "@/components/Navigation"
import { Footer, CTASection } from "@/components/sections/cta-section"
import PageHeader from "@/components/PageHeader"
import Reveal from "@/components/Reveal"

const regionsData = [
  { regionKey: "region1", hubs: ["Riyadh", "Al Kharj", "Majmaah"] },
  { regionKey: "region2", hubs: ["Jeddah", "Makkah", "Madinah", "Taif", "Yanbu"] },
  { regionKey: "region3", hubs: ["Dammam", "Khobar", "Dhahran", "Jubail", "Hafr Al-Batin"] },
  { regionKey: "region4", hubs: ["Tabuk", "Hail", "Arar", "Al-Jouf"] },
  { regionKey: "region5", hubs: ["Abha", "Khamis Mushait", "Najran", "Jizan"] },
  { regionKey: "region6", hubs: ["Buraidah", "Onaizah"] },
]

export default function CoverageContent() {
  const t = useTranslations("pages.coverage")

  return (
    <>
      <Navigation />
      <main>
        <PageHeader
          title={t("pageTitle")}
          description={t("pageDescription")}
        />

        <Reveal>
          <section className="py-16 sm:py-20 bg-card">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-card/50 rounded-3xl h-80 sm:h-96 flex items-center justify-center border border-border mb-12">
                <div className="text-center">
                  <Globe className="w-16 h-16 text-primary/20 mx-auto mb-3" />
                  <p className="text-foreground font-bold">{t("mapLabel")}</p>
                  <p className="text-muted-foreground text-sm mt-1">{t("mapSubtext")}</p>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="py-16 sm:py-20 bg-card/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight mb-12 text-center">
                {t("hubsTitle")}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {regionsData.map((region) => (
                  <div key={region.regionKey} className="bg-card rounded-2xl p-6 border border-border">
                    <div className="flex items-center gap-2 mb-4">
                      <MapPin className="w-5 h-5 text-accent" />
                      <h3 className="text-lg font-bold text-foreground">{t(region.regionKey)}</h3>
                    </div>
                    <div className="space-y-2.5">
                      {region.hubs.map((city) => (
                        <div key={city} className="flex items-start gap-3 text-sm">
                          <Building className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                          <p className="font-semibold text-foreground">{city}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="py-16 sm:py-20 bg-card">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight mb-4">
                {t("ctaTitle")}
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg max-w-lg mx-auto mb-8">
                {t("ctaDesc")}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3.5 rounded-full text-sm font-bold hover:opacity-90 transition-all"
              >
                {t("ctaButton")} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>
        </Reveal>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
