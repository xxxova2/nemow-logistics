import arMessages from "../../../../messages/ar.json"
import enMessages from "../../../../messages/en.json"
import PrivacyContent from "./privacy-content"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const m = locale === "ar" ? arMessages : enMessages
  return { title: m.pages.privacy.metaTitle, description: m.pages.privacy.metaDescription }
}

export default function PrivacyPage() {
  return <PrivacyContent />
}
