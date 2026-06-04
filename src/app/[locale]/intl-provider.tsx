"use client"

import { NextIntlClientProvider } from "next-intl"
import { ScrollProvider } from "@/lib/scroll-context"
import { ThemeProvider } from "@/lib/theme-context"
import type { ReactNode } from "react"

export function IntlProvider({
  children,
  locale,
  messages,
}: {
  children: ReactNode
  locale: string
  messages: Record<string, unknown>
}) {
  return (
    <NextIntlClientProvider messages={messages} locale={locale} timeZone="Asia/Riyadh">
      <ScrollProvider>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </ScrollProvider>
    </NextIntlClientProvider>
  )
}
