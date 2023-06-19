import './globals.css'
import { Inter } from 'next/font/google'
import { themeEffect } from '@/lib/theme-effect'
import Container from '@/components/ui/container'
import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Flavor Fusionator',
  description: 'Discover delightful recipes using ingredients you already have at home and elevate your cooking game effortlessly.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.className} antialiased`}
      suppressHydrationWarning={true}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(${themeEffect.toString()})();`,
          }}
        />
      </head>
      <Container className="flex min-h-screen flex-col py-6" size='large' as="main">
        <Header />
        <main className="mt-10 grow sm:mt-10">{children}</main>
        <Footer />
      </Container>
    </html>
  )
}
