'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, PlayCircle } from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';

const words = ['Mind.', 'Body.', 'Soul.'];

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-primary-dark">
      {/* Cinematic Victoria Falls video backdrop with poster fallback */}
      <VideoBackground src="/footage.mp4" poster="/images/hero-1.jpeg" posterAlt="Victoria Falls" />
      {/* Layered overlays for depth & legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 via-primary-dark/70 to-primary-dark/95" />
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-secondary/15 mix-blend-overlay" />
      <div className="absolute inset-0 mist-layer animate-mist" />
      {/* Vibrant blob accents */}
      <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-secondary/25 blur-3xl" />
      <div className="absolute top-1/3 -right-40 w-[26rem] h-[26rem] rounded-full bg-accent/25 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 w-[24rem] h-[24rem] rounded-full bg-violet/20 blur-3xl" />

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

      <div className="container-luxe relative pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28 min-h-[100svh] flex flex-col justify-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex self-start items-center gap-2 rounded-full border border-secondary/50 bg-white/10 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 mb-6 sm:mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-secondary" />
          <span className="text-[9px] sm:text-[11px] md:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase text-secondary font-semibold">
            Zimbabwe&apos;s Premier Mental Health Initiative
          </span>
        </motion.div>

        <h1 className="font-display font-medium text-[2.5rem] xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.5rem] leading-[0.95] tracking-tight max-w-4xl drop-shadow-[0_4px_24px_rgba(0,0,0,0.45)]">
          {words.map((w, i) => (
            <motion.span
              key={w}
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: 0.45 + i * 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              {i === 1 ? (
                <span className="italic font-light gradient-text-sunset">{w}</span>
              ) : (
                <span>{w}</span>
              )}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.7 }}
          className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg text-white/90 max-w-xl leading-relaxed"
        >
          Premium mental health and wellness experiences — psychotherapy, retreats and corporate wellness — inspired by the restorative power of Victoria Falls.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.85, duration: 0.6 }}
          className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4"
        >
          <Link href="/reviews" className="btn-gold text-sm sm:text-base px-6 py-3 sm:px-7 sm:py-3.5">
            Book a Session <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/retreats"
            className="inline-flex items-center gap-2 text-white hover:text-secondary transition-colors group"
          >
            <span className="inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 group-hover:bg-secondary group-hover:text-primary-dark transition-all">
              <PlayCircle className="w-5 h-5" />
            </span>
            <span className="text-xs sm:text-sm tracking-wide">Explore our Retreats</span>
          </Link>
        </motion.div>

        {/* Stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 0.6 }}
          className="mt-10 sm:mt-14 lg:mt-16 grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 max-w-2xl border-t border-white/15 pt-5 sm:pt-6"
        >
          {[
            { k: '500+', v: 'Lives Touched' },
            { k: '9', v: 'Wellness Services' },
            { k: '100%', v: 'Confidential Care' }
          ].map((s) => (
            <div key={s.v}>
              <div className="font-display text-2xl sm:text-3xl md:text-4xl text-secondary">{s.k}</div>
              <div className="text-[9px] sm:text-[10px] md:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase text-white/70 mt-1 leading-tight">
                {s.v}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-[10px] tracking-[0.4em] uppercase"
      >
        Scroll to discover
      </motion.div>
    </section>
  );
}
