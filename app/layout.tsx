import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Discover Our Products | Appscrip Store',
  description: 'Shop the latest collection at Appscrip Store. Discover fashion, electronics, jewelry and more.',
  openGraph: {
    title: 'Discover Our Products | Appscrip Store',
    description: 'Shop the latest collection at Appscrip Store.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discover Our Products | Appscrip Store',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}