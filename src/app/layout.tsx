import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

const siteUrl = 'https://quito-lirica.web.app'; // Reemplaza con tu dominio cuando lo tengas

export const metadata: Metadata = {
  title: {
    default: 'Quito Lírica Ópera Show | Cantantes para Eventos en Ecuador',
    template: '%s | Quito Lírica Ópera Show',
  },
  description: 'Quito Lírica Ópera Show ofrece cantantes y espectáculos de ópera de alto nivel para eventos, bodas y ceremonias en Quito y todo Ecuador. ¡Haz de tu evento algo inolvidable!',
  keywords: ['ópera', 'cantantes líricos', 'Quito', 'Ecuador', 'eventos corporativos', 'bodas', 'música para ceremonias', 'flashmob', 'entretenimiento', 'gala lírica', 'Quito Lírica'],
  authors: [{ name: 'Quito Lírica Ópera Show' }],
  creator: 'Quito Lírica Ópera Show',
  publisher: 'Quito Lírica Ópera Show',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Quito Lírica Ópera Show | Espectáculos para Eventos',
    description: 'Shows interactivos de ópera y música lírica para eventos, bodas y galas. Calidad artística y profesionalismo en Ecuador.',
    siteName: 'Quito Lírica Ópera Show',
    images: [
      {
        url: '/og-image.jpg', // Es importante crear esta imagen
        width: 1200,
        height: 630,
        alt: 'Quito Lírica Ópera Show en una presentación',
      },
    ],
    locale: 'es_EC',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quito Lírica Ópera Show | Eventos Inolvidables con Música Lírica',
    description: 'Transforma tu evento con la emoción de la ópera. Ofrecemos shows, flashmobs, música para ceremonias y más.',
    creator: '@quitolirica', // Asumiendo que este es el usuario de Twitter
    images: ['/twitter-image.jpg'], // Es importante crear esta imagen
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

// Datos Estructurados para SEO Local y de Organización
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'PerformingArtsOrganization',
  name: 'Quito Lírica Ópera Show',
  url: siteUrl,
  logo: `${siteUrl}/logo.png`, // Es importante crear este logo
  description: 'Compañía lírica independiente que ofrece espectáculos de ópera y música lírica para eventos, ceremonias y galas en Ecuador.',
  email: 'quitolirica.info@gmail.com',
  telephone: '+593999864113',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Quito',
    addressCountry: 'EC',
  },
  sameAs: [
    'https://www.facebook.com/share/1CgfVAJSZQ/?mibextid=wwXIfr',
    'https://www.instagram.com/quitolirica?igsh=MW0xZ215bWdwYm55OQ==',
    'https://www.youtube.com/@quitolirica?si=n8Z6qTbaFoQRTIZM',
    'https://soundcloud.com/quito-lirica',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+593999864113',
    contactType: 'Reservas',
    areaServed: 'EC',
    availableLanguage: ['es'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Literata:opsz,wght@7..72,400;7..72,700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
