'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '@/lib/data';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 inset-x-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-white/85 backdrop-blur-xl shadow-[0_8px_30px_-12px_rgba(13,31,22,0.18)]'
            : 'bg-transparent'
        )}
      >
        <div className="container-luxe flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <span
              className={cn(
                'inline-flex items-center justify-center w-12 h-12 rounded-full overflow-hidden ring-2 transition-all',
                scrolled ? 'ring-secondary/40 bg-white' : 'ring-white/30 bg-white/10 backdrop-blur-md'
              )}
            >
              <Image
                src="/images/logo.jpeg"
                alt="Victoria Falls Mental Health logo"
                width={48}
                height={48}
                className="w-full h-full object-cover"
                priority
              />
            </span>
            <span className="font-display text-xl md:text-[1.35rem] leading-tight">
              <span className={cn('font-semibold block', scrolled ? 'text-primary' : 'text-white')}>
                Victoria Falls
              </span>
              <span
                className={cn(
                  'block text-[10px] tracking-[0.35em] uppercase mt-0.5',
                  scrolled ? 'text-secondary' : 'text-secondary'
                )}
              >
                Mental Health & Wellness
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    'relative text-sm tracking-wide transition-colors',
                    scrolled ? 'text-ink hover:text-primary' : 'text-white/90 hover:text-white',
                    active && 'text-secondary'
                  )}
                >
                  {l.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-secondary"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Link href="/reviews" className="btn-gold py-2.5 px-5 text-sm">Book Now</Link>
          </div>

          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className={cn('lg:hidden p-2 rounded-full', scrolled ? 'text-primary' : 'text-white')}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-primary-dark text-white"
          >
            <div className="container-luxe flex items-center justify-between h-20">
              <Link href="/" className="flex items-center gap-3">
                <Image src="/images/logo.jpeg" alt="" width={40} height={40} className="rounded-full ring-2 ring-secondary/40" />
                <span className="font-display text-xl">Victoria Falls MH</span>
              </Link>
              <button aria-label="Close menu" onClick={() => setOpen(false)} className="p-2">
                <X className="w-7 h-7" />
              </button>
            </div>
            <motion.nav
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
              className="container-luxe flex flex-col gap-2 mt-12"
            >
              {navLinks.map((l) => (
                <motion.div
                  key={l.href}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  <Link
                    href={l.href}
                    className="block font-display text-4xl md:text-5xl py-3 border-b border-white/10 hover:text-secondary transition-colors"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-8">
                <Link href="/reviews" className="btn-gold w-full">Book Now</Link>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
