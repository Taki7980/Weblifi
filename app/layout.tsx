import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const font = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Weblifi',
  description: 'Create Your online Presence',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(font.className)}>{children}</body>
    </html>
  )
}
