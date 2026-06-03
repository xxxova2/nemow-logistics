import arMessages from "../../../../messages/ar.json"
import enMessages from "../../../../messages/en.json"
import ServicesContent from "./services-content"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const m = locale === "ar" ? arMessages : enMessages
  return { title: m.pages.services.metaTitle, description: m.pages.services.metaDescription }
}

export default function ServicesPage() {
  return <ServicesContent />
}
