"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { ArrowRight, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/navigation"
import { useTranslations } from "next-intl"

gsap.registerPlugin(ScrollTrigger)

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const t = useTranslations("cta")

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current, { opacity: 0, y: 50, scale: 0.98 }, {
        opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%", toggleActions: "play none none reverse" },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="contact" className="relative min-h-screen flex items-center py-24 content-layer page-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={contentRef} className="relative max-w-5xl mx-auto p-8 md:p-12 lg:p-16 rounded-3xl bg-gradient-to-br from-card/90 via-card/70 to-primary/10 backdrop-blur-md border border-border/50 shadow-sm overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">{t("badge")}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
                {t("heading1")}
                <br />
                <span className="text-accent text-glow-teal">{t("heading2")}</span>
                <br />
                {t("heading3")}
              </h2>
              <p className="text-lg text-foreground/80 mb-8 text-pretty">{t("description")}</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{t("callUs")}</p>
                    <p className="font-semibold text-foreground">{t("email1")}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{t("emailUs")}</p>
                    <p className="font-semibold text-foreground">{t("email")}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{t("operationsEmail")}</p>
                    <a href="tel:0555107018" className="font-semibold text-foreground hover:text-primary transition-colors">{t("email2")}</a>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/contact">
              <div className="p-6 md:p-8 rounded-2xl bg-card/80 backdrop-blur-md border border-border/50 hover:border-primary/50 shadow-sm transition-all duration-300 cursor-pointer">
                <h3 className="text-xl font-semibold text-foreground mb-6">{t("quoteTitle")}</h3>
                <p className="text-foreground/70 mb-6">{t("quoteDesc")}</p>
                <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground h-12 glow-mint">
                  {t("requestQuote")}
                  <ArrowRight className="ltr:ml-2 rtl:mr-2 h-5 w-5" />
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  const t = useTranslations("footer")

  return (
    <footer className="relative py-12 border-t border-border/50 content-layer bg-card/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="Nemow Al Toseil" width={56} height={56} className="w-14 h-14 object-contain rounded-xl" />
              <span className="text-xl font-bold text-foreground">
                Nemow <span className="text-primary">Al Toseil</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm text-pretty">{t("brandDesc")}</p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t("company")}</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">{t("aboutUs")}</Link></li>
              <li><Link href="/coverage" className="text-muted-foreground hover:text-foreground transition-colors">{t("coverage")}</Link></li>
              <li><Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">{t("privacy")}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t("support")}</h4>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">{t("contact")}</Link></li>
              <li><Link href="/tracking" className="text-muted-foreground hover:text-foreground transition-colors">{t("trackShipment")}</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">{new Date().getFullYear()} {t("rights")}</p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-8 h-8 rounded-lg bg-card/80 border border-border/50 flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-card transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-lg bg-card/80 border border-border/50 flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-card transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-lg bg-card/80 border border-border/50 flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-card transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.554v-11.452h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zm-15.11-13.019c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019h-3.564v-11.452h3.564v11.452zm15.106-20.452h-20.454c-.979 0-1.771.774-1.771 1.729v20.542c0 .956.792 1.729 1.771 1.729h20.451c.978 0 1.778-.773 1.778-1.729v-20.542c0-.955-.8-1.729-1.778-1.729z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
