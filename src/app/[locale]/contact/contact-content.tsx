"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Send } from "lucide-react"
import { useTranslations } from "next-intl"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/sections/cta-section"
import PageHeader from "@/components/PageHeader"
import Reveal from "@/components/Reveal"

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false)
  const t = useTranslations("pages.contact")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = data.get("name")
    const email = data.get("email")
    const phone = data.get("phone")
    const subject = data.get("subject")
    const message = data.get("message")
    const mailtoLink = `mailto:sales@nemow.net?subject=${encodeURIComponent(String(subject))}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`)}`
    window.location.href = mailtoLink
    setSubmitted(true)
  }

  return (
    <>
      <Navigation />
      <main className="page-bg">
        <PageHeader
          title={t("pageTitle")}
          description={t("pageDescription")}
        />

        <Reveal>
          <section className="py-16 sm:py-24 bg-card">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-black text-foreground mb-6">{t("formTitle")}</h2>
                {submitted ? (
                  <div className="bg-card/50 rounded-2xl p-8 text-center border border-border">
                    <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{t("successTitle")}</h3>
                    <p className="text-sm text-muted-foreground">{t("successDesc")}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5 block">{t("fullName")}</label>
                        <input required type="text" name="name" className="w-full px-4 py-3 bg-card/50 border border-border rounded-xl text-sm text-foreground outline-none focus:border-accent transition-colors" placeholder={t("fullNamePlaceholder")} />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5 block">{t("email")}</label>
                        <input required type="email" name="email" className="w-full px-4 py-3 bg-card/50 border border-border rounded-xl text-sm text-foreground outline-none focus:border-accent transition-colors" placeholder={t("emailPlaceholder")} />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5 block">{t("phone")}</label>
                        <input type="tel" name="phone" className="w-full px-4 py-3 bg-card/50 border border-border rounded-xl text-sm text-foreground outline-none focus:border-accent transition-colors" placeholder={t("phonePlaceholder")} />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5 block">{t("subject")}</label>
                        <select name="subject" className="w-full px-4 py-3 bg-card/50 border border-border rounded-xl text-sm text-foreground outline-none focus:border-accent transition-colors">
                        <option>{t("subjectGeneral")}</option>
                        <option>{t("subjectQuote")}</option>
                        <option>{t("subjectPartner")}</option>
                        <option>{t("subjectSupport")}</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5 block">{t("message")}</label>
                        <textarea required name="message" rows={5} className="w-full px-4 py-3 bg-card/50 border border-border rounded-xl text-sm text-foreground outline-none focus:border-accent transition-colors resize-none" placeholder={t("messagePlaceholder")} />
                    </div>
                    <button type="submit" className="w-full bg-accent text-accent-foreground py-3 rounded-xl text-sm font-bold hover:opacity-90 transition-all">
                      {t("sendMessage")}
                    </button>
                  </form>
                )}
              </div>

              <div>
                <h2 className="text-2xl font-black text-foreground mb-6">{t("contactInfoTitle")}</h2>
                <div className="bg-card/50 rounded-2xl p-6 border border-border space-y-4">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Mail className="w-5 h-5 text-accent shrink-0" />
                    <span>{t("emailLabel")}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Phone className="w-5 h-5 text-accent shrink-0" />
                    <a href="tel:0555107018" className="hover:text-primary transition-colors">{t("phoneLabel")}</a>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>{t("addressLabel")}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="bg-card/50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-card rounded-3xl h-64 sm:h-80 flex items-center justify-center border border-border">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary/20 mx-auto mb-2" />
                  <p className="text-foreground font-bold">{t("mapTitle")}</p>
                  <p className="text-muted-foreground text-sm">{t("mapSubtitle")}</p>
                </div>
              </div>
            </div>
          </section>
        </Reveal>
      </main>
      <Footer />
    </>
  )
}
