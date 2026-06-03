import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Nemow Logistics — Your Trusted Logistics & Fulfillment Partner in KSA",
    template: "%s | Nemow Logistics",
  },
  description:
    "Time-efficient, trust-driven logistics and fulfillment solutions across Saudi Arabia. P2P & P2C delivery, warehousing, real-time tracking.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
