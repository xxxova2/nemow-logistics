import arMessages from "../../../../messages/ar.json"
import enMessages from "../../../../messages/en.json"
import CoverageContent from "./coverage-content"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const m = locale === "ar" ? arMessages : enMessages
  return { title: m.pages.coverage.metaTitle, description: m.pages.coverage.metaDescription }
}

export default function CoveragePage() {
  return <CoverageContent />
}
