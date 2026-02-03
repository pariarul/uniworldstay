import { Inter } from 'next/font/google';
import './globals.css';
import ClientLayout from '@/components/layout/ClientLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Uniworldstay | Co-Living Simplified',
  description: 'Global housing & support services for students and travelers. Find affordable, verified properties in Canada, UK, Ireland, Australia, Germany, and New Zealand.',
  keywords: 'co-living, student housing, travel accommodation, student rooms, verified rentals, global housing',
  authors: [{ name: 'Shabeer Khalid' }],
  company: 'RV Properties',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
