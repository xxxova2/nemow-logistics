import { setRequestLocale } from "next-intl/server"
import { Tajawal, Geist } from "next/font/google"
import { IntlProvider } from "./intl-provider"
import enMessages from "../../../messages/en.json"
import arMessages from "../../../messages/ar.json"

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
})

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
})

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params
  setRequestLocale(locale)
  const dir = locale === "ar" ? "rtl" : "ltr"
  const messages = locale === "ar" ? arMessages : enMessages
  const fontClass = locale === "ar" ? tajawal.variable : geist.variable

  return (
    <html lang={locale} dir={dir} className={`${fontClass} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <IntlProvider locale={locale} messages={messages}>
          {children}
        </IntlProvider>
      </body>
    </html>
  )
}
