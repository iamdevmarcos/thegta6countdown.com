import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'theGTA6countdown.com!',
  description:
    'Count down the days to the most anticipated release in gaming history with thegta6countdown.com! 🎮⏳',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
