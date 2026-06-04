import arMessages from "../../../messages/ar.json"
import enMessages from "../../../messages/en.json"
import HomeContent from "./home-content"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const m = locale === "ar" ? arMessages : enMessages
  return { title: m.home.metaTitle, description: m.home.metaDescription }
}

export default function Home() {
  return <HomeContent />
}
