import arMessages from "../../../../messages/ar.json"
import enMessages from "../../../../messages/en.json"
import TestimonialsContent from "./testimonials-content"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const m = locale === "ar" ? arMessages : enMessages
  return { title: m.pages.testimonials.metaTitle, description: m.pages.testimonials.metaDescription }
}

export default function TestimonialsPage() {
  return <TestimonialsContent />
}
