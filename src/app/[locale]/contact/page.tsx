import arMessages from "../../../../messages/ar.json"
import enMessages from "../../../../messages/en.json"
import ContactContent from "./contact-content"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const m = locale === "ar" ? arMessages : enMessages
  return { title: m.pages.contact.metaTitle, description: m.pages.contact.metaDescription }
}

export default function ContactPage() {
  return <ContactContent />
}
