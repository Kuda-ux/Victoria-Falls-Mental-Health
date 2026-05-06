'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const words = ['Healing.', 'Growth.', 'Transformation.'];

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920"
        alt="Victoria Falls"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1F16]/55 via-[#1B4332]/45 to-[#0D1F16]/85" />
      <div className="absolute inset-0 mist-layer animate-mist" />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(18)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/40"
            style={{ left: `${(i * 53) % 100}%`, top: `${(i * 37) % 100}%` }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: 6 + (i % 5), repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>

      <div className="container-luxe relative h-full flex flex-col justify-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex self-start items-center gap-2 rounded-full border border-secondary/40 bg-white/5 backdrop-blur-md px-4 py-2 mb-8"
        >
          <Sparkles className="w-4 h-4 text-secondary" />
          <span className="text-xs tracking-[0.3em] uppercase text-secondary">
            Zimbabwe&apos;s Premier Mental Health Initiative
          </span>
        </motion.div>

        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.95] tracking-tight">
          {words.map((w, i) => (
            <motion.span
              key={w}
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: 0.5 + i * 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              {i === 1 ? <span className="italic text-secondary">{w}</span> : w}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.7 }}
          className="mt-8 text-lg md:text-xl text-white/85 max-w-xl leading-relaxed"
        >
          Mental health and wellness experiences inspired by the power of Victoria Falls.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.6 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link href="/reviews" className="btn-gold">Book a Session</Link>
          <Link href="/retreats" className="btn-ghost-gold">Explore Retreats</Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-[0.4em] uppercase"
      >
        Scroll to discover
      </motion.div>
    </section>
  );
}
