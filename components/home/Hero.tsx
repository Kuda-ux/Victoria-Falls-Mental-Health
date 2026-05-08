'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, PlayCircle, Heart, Users, Award, Quote } from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';

const words = ['Mind.', 'Body.', 'Soul.'];

const trustItems = [
  { icon: Award, label: 'Licensed Clinicians' },
  { icon: Heart, label: 'Trauma-Informed' },
  { icon: Users, label: 'Confidential Care' }
];

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-primary-dark">
      {/* Cinematic Victoria Falls video backdrop */}
      <VideoBackground src="/footage.mp4" poster="/images/hero-1.jpeg" posterAlt="Victoria Falls" />

      {/* Lightened, cinematic overlay stack — lets the falls breathe */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/55 via-primary-dark/35 to-primary-dark/85" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_0%_0%,rgba(15,118,110,0.45),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_100%_100%,rgba(245,158,11,0.18),transparent_60%)]" />

      {/* Vibrant aurora blobs */}
      <div className="absolute -top-40 -left-32 w-[30rem] h-[30rem] rounded-full bg-secondary/25 blur-3xl animate-mist" />
      <div className="absolute top-1/3 -right-40 w-[28rem] h-[28rem] rounded-full bg-accent/25 blur-3xl animate-mist" />
      <div className="absolute -bottom-32 left-1/3 w-[26rem] h-[26rem] rounded-full bg-violet/25 blur-3xl animate-mist" />

      {/* Subtle grain for cinematic texture */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.6'/></svg>\")"
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/40"
            style={{ left: `${(i * 53) % 100}%`, top: `${(i * 37) % 100}%` }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: 6 + (i % 5), repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>

      {/* Content grid */}
      <div className="container-luxe relative pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28 min-h-[100svh] flex items-center">
        <div className="w-full grid lg:grid-cols-12 gap-10 lg:gap-12 items-center text-white">
          {/* Left — copy block */}
          <div className="lg:col-span-7 xl:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full border border-secondary/50 bg-white/10 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 mb-6 sm:mb-8 shadow-glow"
            >
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-secondary" />
              <span className="text-[9px] sm:text-[11px] md:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase text-secondary font-semibold">
                Zimbabwe&apos;s Premier Mental Health Initiative
              </span>
            </motion.div>

            <h1 className="font-display font-medium text-[2.75rem] xs:text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.75rem] leading-[0.95] tracking-tight drop-shadow-[0_4px_28px_rgba(0,0,0,0.55)]">
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
              className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-white/90 max-w-xl leading-relaxed"
            >
              Premium psychotherapy, wellness retreats and corporate care &mdash; reimagined where the
              mighty Falls meet inner stillness.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.85, duration: 0.6 }}
              className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-5"
            >
              <Link href="/reviews" className="btn-gold text-sm sm:text-base px-6 py-3 sm:px-7 sm:py-3.5">
                Book a Session <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/retreats"
                className="inline-flex items-center gap-3 text-white hover:text-secondary transition-colors group"
              >
                <span className="inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/25 group-hover:bg-secondary group-hover:text-primary-dark transition-all">
                  <PlayCircle className="w-5 h-5" />
                </span>
                <span className="text-xs sm:text-sm font-medium tracking-wide">Explore our Retreats</span>
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.05, duration: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-white/80"
            >
              {trustItems.map(({ icon: Icon, label }) => (
                <div key={label} className="inline-flex items-center gap-2 text-xs sm:text-sm">
                  <Icon className="w-4 h-4 text-secondary" />
                  <span>{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — featured glass card */}
          <motion.aside
            initial={{ opacity: 0, x: 30, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block lg:col-span-5 xl:col-span-5"
          >
            <div className="relative ml-auto max-w-md">
              {/* Decorative gradient border */}
              <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-secondary/70 via-accent/40 to-violet/60 opacity-80 blur-[2px]" />
              <div className="relative rounded-3xl bg-white/8 backdrop-blur-2xl border border-white/15 p-7 shadow-luxe">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-br from-secondary to-accent text-primary-dark shadow-glow">
                    <Quote className="w-5 h-5" />
                  </span>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-secondary font-semibold">
                      Client Voice
                    </div>
                    <div className="text-xs text-white/70">A retreat participant</div>
                  </div>
                </div>

                <p className="mt-5 text-white/90 leading-relaxed text-[15px]">
                  &ldquo;I arrived carrying a weight I had grown too used to. By the time I left, I felt
                  lighter, clearer and reconnected with parts of myself I had long forgotten.&rdquo;
                </p>

                <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                  {[
                    { k: '500+', v: 'Lives Touched' },
                    { k: '9', v: 'Services' },
                    { k: '4.9★', v: 'Avg. Rating' }
                  ].map((s) => (
                    <div
                      key={s.v}
                      className="rounded-xl bg-white/5 border border-white/10 py-3 px-2"
                    >
                      <div className="font-display text-xl text-secondary leading-none">{s.k}</div>
                      <div className="text-[9px] tracking-[0.18em] uppercase text-white/65 mt-1 leading-tight">
                        {s.v}
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/services"
                  className="mt-6 flex items-center justify-between rounded-xl bg-white/95 hover:bg-white text-primary-dark px-4 py-3 transition-colors font-semibold text-sm"
                >
                  <span>See all wellness services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>

      {/* Mobile stats strip (since right card is desktop-only) */}
      <div className="lg:hidden absolute left-0 right-0 bottom-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.6 }}
          className="grid grid-cols-3 gap-3 text-white border-t border-white/15 pt-4"
        >
          {[
            { k: '500+', v: 'Lives Touched' },
            { k: '9', v: 'Services' },
            { k: '4.9★', v: 'Rating' }
          ].map((s) => (
            <div key={s.v}>
              <div className="font-display text-2xl text-secondary">{s.k}</div>
              <div className="text-[9px] tracking-[0.2em] uppercase text-white/70 mt-1">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Elegant scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/60"
      >
        <span className="text-[10px] tracking-[0.4em] uppercase">Scroll</span>
        <span className="block w-px h-10 bg-gradient-to-b from-white/60 to-transparent" />
      </motion.div>
    </section>
  );
}
