import arMessages from "../../../../messages/ar.json"
import enMessages from "../../../../messages/en.json"
import FaqContent from "./faq-content"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const m = locale === "ar" ? arMessages : enMessages
  return { title: m.pages.faq.metaTitle, description: m.pages.faq.metaDescription }
}

export default function FaqPage() {
  return <FaqContent />
}
