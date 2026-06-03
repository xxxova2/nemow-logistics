"use client"

import { ExternalLink } from "lucide-react"
import { useTranslations } from "next-intl"
import { Navigation } from "@/components/Navigation"
import { Footer, CTASection } from "@/components/sections/cta-section"
import PageHeader from "@/components/PageHeader"
import Reveal from "@/components/Reveal"

const articles = [
  {
    title: "Saudi Arabia's logistics sector set for exponential growth",
    source: "Arab News",
    url: "https://www.arabnews.com/node/2592730/business-economy",
  },
  {
    title: "How Saudi Arabia is reshaping global supply chains",
    source: "Logistics Middle East",
    url: "https://www.logisticsmiddleeast.com/supply-chain/saudi-arabia-supply-chains",
  },
  {
    title: "Vision 2030 drives logistics transformation in the Kingdom",
    source: "Saudi Gazette",
    url: "https://saudigazette.com.sa/article/642132",
  },
  {
    title: "Saudi logistics market projected to reach $15bn by 2030",
    source: "Zawya",
    url: "https://www.zawya.com/en/economy/gcc/saudi-logistics-market",
  },
]

export default function BlogContent() {
  const t = useTranslations("pages.blog")

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
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => (
                  <a
                    key={article.url}
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg hover:border-accent/30 transition-all duration-300"
                  >
                    <div className="h-48 bg-card/50 flex items-center justify-center">
                      <ExternalLink className="w-10 h-10 text-primary/20" />
                    </div>
                    <div className="p-5 sm:p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-bold text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                          {t("externalArticle")}
                        </span>
                      </div>
                      <h2 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                        {article.title}
                      </h2>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                        {t("source")}: {article.source}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{article.source}</span>
                        <span className="font-bold text-accent">{t("readArticle")}</span>
                      </div>
                    </div>
                  </a>
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
