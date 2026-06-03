import arMessages from "../../../../messages/ar.json"
import enMessages from "../../../../messages/en.json"
import AboutContent from "./about-content"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const m = locale === "ar" ? arMessages : enMessages
  return { title: m.pages.about.metaTitle, description: m.pages.about.metaDescription }
}

export default function AboutPage() {
  return <AboutContent />
}
