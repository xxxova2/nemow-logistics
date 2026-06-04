import arMessages from "../../../../messages/ar.json"
import enMessages from "../../../../messages/en.json"
import TrackingContent from "./tracking-content"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const m = locale === "ar" ? arMessages : enMessages
  return { title: m.pages.tracking.metaTitle, description: m.pages.tracking.metaDescription }
}

export default function TrackingPage() {
  return <TrackingContent />
}
