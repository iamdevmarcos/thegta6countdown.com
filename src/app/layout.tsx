import type { Metadata } from 'next'
import './globals.css'
// import { Poppins } from '@next/font/google'

// const poppins = Poppins({
//   subsets: ['latin'],
//   weight: ['400', '500', '700'],
//   style: ['normal', 'italic'],
//   variable: '--font-poppins',
// })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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