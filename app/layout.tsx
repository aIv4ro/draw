import type { Metadata } from 'next'
import { Onest } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'

const onest = Onest({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'twgiveaway',
  description: 'Web page for giveaways on Twitch',
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es'>
      <body className={`${onest.className} bg-zinc-950 text-white/95 max-w-4xl m-auto`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
