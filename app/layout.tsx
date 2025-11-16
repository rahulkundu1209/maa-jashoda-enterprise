// Updated metadata and imported custom fonts for rustic agricultural theme
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Lora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' })

export const metadata: Metadata = {
  title: 'Maa Jashoda Enterprise | Authentic Rural Bengal Products',
  description: 'Taste the Purity of Rural Bengal. Authentic puffed rice, spices, and garden fresh produce from West Bengal.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/logo-r-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/logo-r.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/logo-r.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#2D5016',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${lora.variable}`}>
      <body className={`font-lora antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
