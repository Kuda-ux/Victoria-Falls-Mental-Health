import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';
import { navLinks } from '@/lib/data';
import { ADDRESS_LINES, PHONE, EMAIL, SOCIAL } from '@/lib/utils';

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white/80 mt-20">
      <div className="container-luxe py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full overflow-hidden ring-2 ring-secondary/40 bg-white">
              <Image src="/images/logo.jpeg" alt="" width={48} height={48} className="w-full h-full object-cover" />
            </span>
            <div>
              <h3 className="font-display text-2xl text-white">VF Mental Health & Wellness</h3>
              <p className="text-secondary text-xs tracking-[0.3em] uppercase">Healing · Growth · Transformation</p>
            </div>
          </div>
          <p className="max-w-md leading-relaxed text-white/70">
            Zimbabwe&apos;s premier mental health initiative — therapeutic care and wellness retreats inspired by
            the natural power of Victoria Falls.
          </p>
        </div>

        <div>
          <h4 className="font-display text-xl text-white mb-4">Explore</h4>
          <ul className="space-y-2.5">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-secondary transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-xl text-white mb-4">Visit & Connect</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin className="w-4 h-4 text-secondary mt-1 shrink-0" />
              <span className="not-italic">
                {ADDRESS_LINES.map((line, i) => (
                  <span key={line} className="block leading-snug">{line}</span>
                ))}
              </span>
            </li>
            <li className="flex gap-3"><Phone className="w-4 h-4 text-secondary mt-1 shrink-0" /><a href={`tel:${PHONE}`} className="hover:text-secondary">{PHONE}</a></li>
            <li className="flex gap-3"><Mail className="w-4 h-4 text-secondary mt-1 shrink-0" /><a href={`mailto:${EMAIL}`} className="hover:text-secondary break-all">{EMAIL}</a></li>
            <li className="flex gap-3"><Instagram className="w-4 h-4 text-secondary mt-1 shrink-0" /><span>{SOCIAL}</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-luxe py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>© 2025 Victoria Falls Mental Health and Wellness Services</p>
          <p>Website by <span className="text-secondary">Kuwex Studios</span></p>
        </div>
      </div>
    </footer>
  );
}
