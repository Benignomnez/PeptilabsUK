import { Suspense } from 'react'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import GoogleAnalytics from '../components/GoogleAnalytics'
import Providers from './providers'
import './globals.css'

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '900'], variable: '--font-inter' })

export const metadata = {
  metadataBase: new URL('https://peptilabsuk.com'),
  title: {
    default: 'PeptiLabs UK® | Péptidos Farmacéuticos en República Dominicana',
    template: '%s',
  },
  description: 'Compra péptidos de grado farmacéutico en República Dominicana. Tirzepatide, Semaglutide, BPC-157, TB-500 y más. Pureza >99%, certificado GMP. Envío discreto desde UK 🇬🇧 con tracking.',
  keywords: ['péptidos República Dominicana', 'péptidos Santo Domingo', 'Tirzepatide República Dominicana', 'Semaglutide Santo Domingo', 'Retatrutide RD', 'BPC-157 República Dominicana', 'TB-500 Santo Domingo', 'GLP-1 República Dominicana', 'péptidos para bajar de peso RD', 'comprar péptidos RD', 'péptidos farmacéuticos', 'peptilabs', 'péptidos UK', 'CJC-1295 RD', 'ipamorelin RD'],
  robots: { index: true, follow: true },
  alternates: {
    canonical: '/',
    languages: { 'es-DO': '/', es: '/' },
  },
  openGraph: {
    type: 'website',
    url: 'https://peptilabsuk.com',
    title: 'PeptiLabs UK® | Péptidos en República Dominicana',
    description: 'Tirzepatide, Semaglutide, BPC-157 y +40 péptidos farmacéuticos con entrega en RD. Pureza >99%, certificado GMP, envío discreto desde UK 🇬🇧.',
    siteName: 'PeptiLabs UK',
    locale: 'es_DO',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PeptiLabs UK® | Péptidos en República Dominicana',
    description: 'Tirzepatide, Semaglutide, BPC-157 y más. Pureza >99%. Envío discreto a RD 🇩🇴 desde UK 🇬🇧.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  other: {
    'geo.region': 'DO',
    'geo.placename': 'República Dominicana',
    'geo.position': '18.7357;-70.1627',
    ICBM: '18.7357, -70.1627',
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'PeptiLabs UK',
  url: 'https://peptilabsuk.com',
  logo: 'https://peptilabsuk.com/og-image.png',
  description: 'Proveedor de péptidos de grado farmacéutico con entrega en República Dominicana. Tirzepatide, Semaglutide, BPC-157 y más. Pureza >99% certificada HPLC.',
  areaServed: { '@type': 'Country', name: 'Dominican Republic' },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+18299098362',
    contactType: 'customer service',
    availableLanguage: ['Spanish'],
  },
  sameAs: ['https://instagram.com/peptilabsuk', 'https://t.me/peptilabsuk'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="es-DO" className={inter.variable}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      </head>
      <body>
        <Script id="gtag-src" src="https://www.googletagmanager.com/gtag/js?id=G-S127KBL8P4" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-S127KBL8P4');
          `}
        </Script>
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>

        <Providers>{children}</Providers>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
