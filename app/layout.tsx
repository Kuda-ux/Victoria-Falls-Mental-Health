import type { Metadata } from 'next';
import { Fraunces, Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import PageTransition from '@/components/PageTransition';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap'
});
const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap'
});
const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['italic', 'normal'],
  variable: '--font-playfair',
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vicfallsmentalhealth.co.zw'),
  title: {
    default: 'Victoria Falls Mental Health & Wellness Services',
    template: '%s | Victoria Falls Mental Health'
  },
  description:
    "Zimbabwe's premier mental health initiative — psychotherapy, wellness retreats and corporate wellness inspired by the power of Victoria Falls.",
  openGraph: {
    title: 'Victoria Falls Mental Health & Wellness Services',
    description:
      'Healing. Growth. Transformation. Mental health and wellness experiences inspired by Victoria Falls.',
    url: 'https://vicfallsmentalhealth.co.zw',
    siteName: 'Victoria Falls Mental Health',
    images: [{ url: '/images/hero-1.jpeg' }],
    locale: 'en_ZW',
    type: 'website'
  },
  twitter: { card: 'summary_large_image' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${playfair.variable}`}>
      <body className="font-body antialiased">
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
