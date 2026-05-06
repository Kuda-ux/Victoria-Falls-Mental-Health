'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CTABanner() {
  return (
    <section className="relative bg-primary-dark text-white overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(800px 300px at 30% 50%, #D4AF37, transparent), radial-gradient(800px 300px at 80% 50%, #C0784A, transparent)'
        }}
      />
      <div className="container-luxe relative py-20 md:py-28 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl md:text-6xl leading-[1.05] max-w-3xl mx-auto"
        >
          Ready to begin your <span className="italic text-secondary">healing journey?</span>
        </motion.h2>
        <p className="text-white/75 mt-6 max-w-xl mx-auto leading-relaxed">
          Take the first step. A confidential consultation is the gateway to clarity, calm and considered care.
        </p>
        <div className="mt-10">
          <Link href="/reviews" className="btn-gold">Book a Consultation</Link>
        </div>
      </div>
    </section>
  );
}
