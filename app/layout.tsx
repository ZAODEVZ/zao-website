import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The ZAO - Web3 Music Community & Incubator',
  description: 'A web3 music community and incubator for artists, creators, and builders.',
  keywords: ['web3', 'music', 'community', 'incubator', 'artists', 'creators'],
  openGraph: {
    title: 'The ZAO',
    description: 'Web3 music community and incubator',
    url: 'https://thezao.com',
    siteName: 'The ZAO',
    images: [
      {
        url: 'https://thezao.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'The ZAO',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The ZAO',
    description: 'Web3 music community and incubator',
    images: ['https://thezao.com/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#141e27" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'The ZAO',
              url: 'https://thezao.com',
              description: 'A web3 music community and incubator for artists, creators, and builders.',
              sameAs: [
                'https://farcaster.xyz/~/channel/zao',
                'https://paragraph.com/@thezao',
              ],
              foundingDate: '2023',
              knowsAbout: ['Web3', 'Music', 'Community', 'Incubator'],
              brand: {
                '@type': 'Brand',
                name: 'The ZAO',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://thezao.com/logo.png',
                },
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
