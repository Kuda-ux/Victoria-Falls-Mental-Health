import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import PageTransition from '@/components/PageTransition';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap'
});
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans', display: 'swap' });
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
    images: [{ url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200' }],
    locale: 'en_ZW',
    type: 'website'
  },
  twitter: { card: 'summary_large_image' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} ${playfair.variable}`}>
      <body className="font-body antialiased">
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
