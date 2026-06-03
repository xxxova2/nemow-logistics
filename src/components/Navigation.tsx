"use client"

import { useState, useEffect } from "react"
import { Menu, X, Package, Globe } from "lucide-react"
import { useTranslations, useLocale } from "next-intl"
import { Link, usePathname, useRouter } from "@/i18n/navigation"
import { useScroll } from "@/lib/scroll-context"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollProgress } = useScroll()
  const t = useTranslations("nav")
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    setIsScrolled(scrollProgress > 0.02)
  }, [scrollProgress])

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <Package className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">
              Nemow<span className="text-primary">Logistics</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {t("home")}
            </Link>
            <Link href="/services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {t("services")}
            </Link>
            <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {t("about")}
            </Link>
            <Link href="/blog" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {t("blog")}
            </Link>
            <Link href="/faq" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {t("faq")}
            </Link>
            <Link href="/privacy" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {t("privacy")}
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => switchLocale(locale === "ar" ? "en" : "ar")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-muted-foreground hover:text-foreground border border-border hover:border-primary/50 transition-all"
            >
              <Globe className="w-3.5 h-3.5" />
              {locale === "ar" ? "EN" : "AR"}
            </button>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-9 px-4 py-2 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 glow-teal"
            >
              {t("getAQuote")}
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? t("closeMenu") : t("openMenu")}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border">
            <div className="px-6 py-4 flex flex-col gap-4">
              <Link href="/" className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2" onClick={() => setIsOpen(false)}>
                {t("home")}
              </Link>
              <Link href="/services" className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2" onClick={() => setIsOpen(false)}>
                {t("services")}
              </Link>
              <Link href="/about" className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2" onClick={() => setIsOpen(false)}>
                {t("about")}
              </Link>
              <Link href="/blog" className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2" onClick={() => setIsOpen(false)}>
                {t("blog")}
              </Link>
              <Link href="/faq" className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2" onClick={() => setIsOpen(false)}>
                {t("faq")}
              </Link>
              <Link href="/privacy" className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2" onClick={() => setIsOpen(false)}>
                {t("privacy")}
              </Link>
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <button
                  onClick={() => { switchLocale(locale === "ar" ? "en" : "ar"); setIsOpen(false) }}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground border border-border hover:border-primary/50 transition-all"
                >
                  <Globe className="w-4 h-4" />
                  {locale === "ar" ? "English" : "العربية"}
                </button>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center h-9 px-4 py-2 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => setIsOpen(false)}
                >
                  {t("getAQuote")}
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
