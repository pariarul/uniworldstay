import { Inter } from 'next/font/google';
import './globals.css';
import ClientLayout from '@/components/layout/ClientLayout';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'Uniworldstay | Co-Living Simplified',
    template: '%s | Uniworldstay',
  },
  description:
    'Uniworldstay provides global co-living and verified housing solutions for international students and travelers across Canada, UK, Ireland, Australia, Germany, and New Zealand.',
  keywords: [
    'co-living',
    'student housing',
    'international students accommodation',
    'shared living',
    'verified rentals',
    'global housing',
    'student rooms',
    'travel accommodation',
  ],
  authors: [{ name: 'Shabeer Khalid' }],
  creator: 'Uniworldstay',
  publisher: 'Uniworldstay',
  applicationName: 'Uniworldstay',

  metadataBase: new URL('https://www.uniworldstay.com'),

  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },

  openGraph: {
    title: 'Uniworldstay | Co-Living Simplified',
    description:
      'Find affordable, verified co-living spaces and student housing worldwide with Uniworldstay.',
    url: 'https://www.uniworldstay.com',
    siteName: 'Uniworldstay',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Uniworldstay – Global Co-Living Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Uniworldstay | Co-Living Simplified',
    description:
      'Global co-living and housing platform for students and travelers.',
    images: ['/logo.png'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
