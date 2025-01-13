import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TravelSnaps - My Photography Journey',
  description: 'A collection of my travel photography from around the world.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </head>
      <body>{children}</body>
    </html>
  )
}

