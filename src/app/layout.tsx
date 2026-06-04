import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Nemow Logistics — Your Trusted Logistics & Fulfillment Partner in KSA",
    template: "%s | Nemow Logistics",
  },
  description:
    "Time-efficient, trust-driven logistics and fulfillment solutions across Saudi Arabia. P2P & P2C delivery, warehousing, real-time tracking.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    alternateLocale: "en_US",
    siteName: "Nemow Al Toseil",
    title: "Nemow Al Toseil — Door-to-Door Logistics Across Saudi Arabia",
    description:
      "Integrated logistics solutions across the Kingdom — from door to door, on time, every time.",
    url: "https://nemow-logistics.vercel.app",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
