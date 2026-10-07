import './globals.css'
import { Toaster } from '@/components/ui/sonner'
import PointerBubble from '@/components/PointerBubble'

export const metadata = {
  title: 'FinWise - Smart Personal Finance',
  description: 'Track expenses, set budgets, and get intelligent financial insights instantly.',
  applicationName: 'FinWise',
  manifest: '/manifest.json',
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  appleWebApp: {
    capable: true,
    title: 'FinWise',
    statusBarStyle: 'black-translucent',
  },
  formatDetection: {
    telephone: false,
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#090D16',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <PointerBubble />
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  )
}
