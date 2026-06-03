import arMessages from "../../../../messages/ar.json"
import enMessages from "../../../../messages/en.json"
import BlogContent from "./blog-content"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const m = locale === "ar" ? arMessages : enMessages
  return { title: m.pages.blog.metaTitle, description: m.pages.blog.metaDescription }
}

export default function BlogPage() {
  return <BlogContent />
}
