import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header/Header'
import { Footer } from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fabblog | All about technology',
  description:
    'A simple blog app to share news and updates about the world of technology'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <header>
          <Header />
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
