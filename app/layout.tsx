import './globals.css'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/Navbar'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mohit Yadav - Photographer & Cinematographer',
  description: 'Capturing moments. Telling stories. Framing reality. Professional photographer and cinematographer based in Gurugram, India.',
  keywords: 'photographer, cinematographer, photography, videography, Gurugram, India, Mohit Yadav',
  author: 'Mohit Yadav',
  openGraph: {
    title: 'Mohit Yadav - Photographer & Cinematographer',
    description: 'Capturing moments. Telling stories. Framing reality.',
    url: 'https://mohityadav.com',
    siteName: 'Mohit Yadav Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
