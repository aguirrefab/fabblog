import type { Metadata } from 'next'
import { Header } from '@/components/header/Header'
import { Footer } from '@/components/footer/Footer'
import './globals.css'

import { Inter as FontSans } from 'next/font/google'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme.provider'

export const metadata: Metadata = {
  title: 'Fabblog | All about technology',
  description:
    'A simple blog app to share news and updates about the world of technology'
}

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es' suppressHydrationWarning>
      <body
        className={cn(
          'flex flex-col  min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <Header />
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <main className='flex-1 px-10 py-6 '>{children}</main>
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  )
}
