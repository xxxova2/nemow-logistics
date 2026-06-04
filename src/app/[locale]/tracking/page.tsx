"use client"

import { useState } from "react"
import { Search, Package, CheckCircle2, Clock } from "lucide-react"
import { useTranslations } from "next-intl"
import { Navigation } from "@/components/Navigation"
import { Footer, CTASection } from "@/components/sections/cta-section"
import PageHeader from "@/components/PageHeader"
import Reveal from "@/components/Reveal"

const trackingData: Record<string, { status: number; location: string; eta: string; updates: { time: string; text: string }[] }> = {
  "NML-2024-001": {
    status: 4,
    location: "Riyadh",
    eta: "Today by 6:00 PM",
    updates: [
      { time: "08:30 AM", text: "Package out for delivery — Riyadh Hub" },
      { time: "06:15 AM", text: "Arrived at local facility — Riyadh" },
      { time: "02:00 AM", text: "Departed sort facility — Jeddah" },
      { time: "10:00 PM", text: "Arrived at sort facility — Jeddah" },
      { time: "04:00 PM", text: "Picked up from shipper — Dammam" },
    ],
  },
  "NML-2024-002": {
    status: 2,
    location: "Jeddah",
    eta: "Tomorrow by 12:00 PM",
    updates: [
      { time: "09:45 PM", text: "In transit — Jeddah" },
      { time: "06:00 PM", text: "Picked up from shipper — Riyadh" },
    ],
  },
}

function getQuote(weight: number, origin: string, destination: string) {
  const baseRate = 15
  const weightRate = weight * 0.5
  const distanceMultiplier = origin && destination ? 1.2 : 1.0
  const total = (baseRate + weightRate) * distanceMultiplier
  return {
    amount: total.toFixed(2),
    transitDays: weight > 50 ? "3-5" : weight > 20 ? "2-3" : "1-2",
  }
}

export default function TrackingPage() {
  const [trackingInput, setTrackingInput] = useState("")
  const [trackingResult, setTrackingResult] = useState<typeof trackingData[string] | null>(null)
  const [error, setError] = useState("")

  const [weight, setWeight] = useState("")
  const [origin, setOrigin] = useState("")
  const [destination, setDestination] = useState("")
  const [quote, setQuote] = useState<{ amount: string; transitDays: string } | null>(null)

  const t = useTranslations("pages.tracking")
  const steps = [t("step0"), t("step1"), t("step2"), t("step3"), t("step4")]

  const handleTrack = () => {
    if (!trackingInput.trim()) {
      setError(t("errorEmpty"))
      return
    }
    const data = trackingData[trackingInput.trim()]
    if (data) {
      setTrackingResult(data)
      setError("")
    } else {
      setError(t("errorNotFound"))
      setTrackingResult(null)
    }
  }

  const handleQuote = () => {
    const w = parseFloat(weight)
    if (!w || w <= 0) return
    const q = getQuote(w, origin, destination)
    setQuote(q)
  }

  return (
    <>
      <Navigation />
      <main className="page-bg">
        <PageHeader title={t("pageTitle")} description={t("pageDescription")} />

        <Reveal>
          <section className="py-16 sm:py-20 bg-card">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-black text-foreground mb-6 flex items-center gap-2">
                  <Search className="w-6 h-6 text-accent" /> {t("trackTitle")}
                </h2>
                <div className="flex items-stretch gap-2 mb-4">
                  <input
                    type="text"
                    value={trackingInput}
                    onChange={(e) => setTrackingInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleTrack()}
                    placeholder={t("trackPlaceholder")}
                    className="flex-1 px-4 py-3 bg-card/50 border border-border rounded-xl text-sm text-foreground outline-none focus:border-accent transition-colors"
                  />
                  <button
                    onClick={handleTrack}
                    className="bg-accent text-accent-foreground px-6 py-3 rounded-xl text-sm font-bold hover:opacity-90 transition-all"
                  >
                    {t("trackButton")}
                  </button>
                </div>
                {error && <p className="text-destructive text-xs mb-4">{error}</p>}

                {trackingResult && (
                  <div className="bg-card/50 rounded-2xl p-6 border border-border">
                    <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
                      <p className="text-sm text-muted-foreground">{t("statusLabel")} <strong className="text-foreground">{steps[trackingResult.status]}</strong></p>
                      <p className="text-sm text-muted-foreground">{t("etaLabel")} <strong className="text-accent">{trackingResult.eta}</strong></p>
                    </div>

                    <div className="relative mb-6">
                      <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-muted" />
                      {steps.map((step, i) => (
                        <div key={step} className="flex items-center gap-3 mb-4 last:mb-0 relative">
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center z-10 bg-card ${
                            i <= trackingResult.status ? "border-accent" : "border-border"
                          }`}>
                            {i < trackingResult.status ? (
                              <CheckCircle2 className="w-4 h-4 text-accent" />
                            ) : i === trackingResult.status ? (
                              <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                            ) : null}
                          </div>
                          <span className={`text-sm ${i <= trackingResult.status ? "text-foreground font-semibold" : "text-muted-foreground"}`}>
                            {step}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-border pt-4">
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">{t("updatesTitle")}</p>
                      <div className="space-y-2.5">
                        {trackingResult.updates.map((u, i) => (
                          <div key={i} className="flex items-start gap-3 text-xs">
                            <Clock className="w-3.5 h-3.5 text-muted-foreground mt-0.5 shrink-0" />
                            <span className="text-muted-foreground"><strong className="text-foreground">{u.time}</strong> — {u.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <h2 className="text-2xl font-black text-foreground mb-6 flex items-center gap-2">
                  <Package className="w-6 h-6 text-accent" /> {t("quoteTitle")}
                </h2>
                <div className="bg-card/50 rounded-2xl p-6 border border-border space-y-4">
                  <div>
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5 block">{t("weightLabel")}</label>
                    <input
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      placeholder={t("weightPlaceholder")}
                      className="w-full px-4 py-3 bg-card border border-border rounded-xl text-sm text-foreground outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5 block">{t("originLabel")}</label>
                    <input
                      type="text"
                      value={origin}
                      onChange={(e) => setOrigin(e.target.value)}
                      placeholder={t("originPlaceholder")}
                      className="w-full px-4 py-3 bg-card border border-border rounded-xl text-sm text-foreground outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5 block">{t("destLabel")}</label>
                    <input
                      type="text"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      placeholder={t("destPlaceholder")}
                      className="w-full px-4 py-3 bg-card border border-border rounded-xl text-sm text-foreground outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <button
                    onClick={handleQuote}
                    className="w-full bg-accent text-accent-foreground py-3 rounded-xl text-sm font-bold hover:opacity-90 transition-all"
                  >
                    {t("quoteButton")}
                  </button>

                  {quote && (
                    <div className="bg-card rounded-xl p-4 border border-accent/20">
                      <p className="text-xs text-muted-foreground mb-1">{t("quoteRate")}</p>
                      <p className="text-3xl font-black text-foreground">{quote.amount} {t("quoteCurrency")}</p>
                      <p className="text-xs text-muted-foreground mt-1">{t("quoteTransit")} {quote.transitDays} {t("quoteBusinessDays")}</p>
                    </div>
                  )}
                </div>
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
