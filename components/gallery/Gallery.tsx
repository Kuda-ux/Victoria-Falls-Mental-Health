'use client';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { galleryImages, type GalleryItem } from '@/lib/data';
import { Play, X, Sparkles } from 'lucide-react';

const tabs = ['All', 'Retreats', 'Sessions', 'Events', 'Moments'] as const;
type Tab = (typeof tabs)[number];

const spanClass = (span?: GalleryItem['span']) => {
  switch (span) {
    case 'large':
      return 'sm:col-span-2 lg:col-span-2 lg:row-span-2 aspect-[4/3] lg:aspect-auto';
    case 'wide':
      return 'sm:col-span-2 aspect-[16/10]';
    case 'tall':
      return 'sm:row-span-2 aspect-[3/4] sm:aspect-auto';
    default:
      return 'aspect-[4/5]';
  }
};

const categoryColors: Record<string, string> = {
  Retreats: 'from-emerald-500 to-teal-600',
  Sessions: 'from-rose-500 to-orange-500',
  Events: 'from-sky-500 to-violet-600',
  Moments: 'from-amber-400 to-rose-500'
};

export default function Gallery() {
  const [tab, setTab] = useState<Tab>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [videoOpen, setVideoOpen] = useState<string | null>(null);

  const filtered = useMemo(
    () => (tab === 'All' ? galleryImages : galleryImages.filter((g) => g.category === tab)),
    [tab]
  );

  // Lightbox should only contain images (videos open in dedicated modal)
  const imageItems = useMemo(() => filtered.filter((i) => i.type !== 'video'), [filtered]);

  return (
    <>
      {/* Filter pills */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {tabs.map((t) => {
          const active = tab === t;
          return (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all ${
                active
                  ? 'text-white shadow-luxe'
                  : 'text-primary bg-mist hover:bg-primary/10'
              }`}
            >
              {active && (
                <motion.span
                  layoutId="gallery-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-primary-dark"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative">{t}</span>
            </button>
          );
        })}
      </div>

      {/* Bento grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[260px] gap-4 sm:gap-5">
        <AnimatePresence mode="popLayout">
          {filtered.map((item, i) => {
            const isVideo = item.type === 'video';
            const span = spanClass(item.span);
            return (
              <motion.button
                key={item.src}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, delay: (i % 8) * 0.04 }}
                onClick={() => {
                  if (isVideo) setVideoOpen(item.src);
                  else {
                    const idx = imageItems.findIndex((x) => x.src === item.src);
                    setLightboxIndex(idx >= 0 ? idx : 0);
                  }
                }}
                className={`relative block w-full h-full rounded-3xl overflow-hidden group bg-mist shadow-[0_8px_30px_-12px_rgba(13,31,22,0.15)] hover:shadow-luxe transition-shadow ${span}`}
              >
                {isVideo ? (
                  <video
                    src={item.src}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                ) : (
                  <Image
                    src={item.src}
                    alt={item.caption ?? item.category}
                    fill
                    sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-[900ms] ease-out"
                  />
                )}

                {/* Gradient veil on hover */}
                <span className="absolute inset-0 bg-gradient-to-t from-primary-dark/85 via-primary-dark/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Category chip */}
                <span
                  className={`absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold tracking-[0.18em] uppercase text-white bg-gradient-to-r ${
                    categoryColors[item.category] ?? 'from-primary to-primary-dark'
                  } shadow-glow opacity-0 group-hover:opacity-100 translate-y-[-4px] group-hover:translate-y-0 transition-all duration-500`}
                >
                  {item.category}
                </span>

                {/* Video play badge (always visible on video tiles) */}
                {isVideo && (
                  <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-semibold tracking-[0.18em] uppercase text-primary-dark bg-white/95 backdrop-blur-md shadow-luxe">
                    <Play className="w-3 h-3 fill-current" /> Live
                  </span>
                )}

                {/* Caption */}
                {item.caption && (
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-left opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
                    <div className="font-display text-white text-lg leading-tight drop-shadow">
                      {item.caption}
                    </div>
                  </div>
                )}
              </motion.button>
            );
          })}
        </AnimatePresence>

        {/* "More coming" placeholder tile */}
        <motion.div
          layout
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative rounded-3xl border-2 border-dashed border-primary/20 bg-mist/40 flex flex-col items-center justify-center text-center p-8 aspect-[4/5]"
        >
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-secondary to-accent text-primary-dark mb-3 shadow-glow">
            <Sparkles className="w-5 h-5" />
          </span>
          <p className="font-display text-xl text-primary">More moments soon</p>
          <p className="text-sm text-ink/60 mt-1">New stories after each retreat.</p>
        </motion.div>
      </div>

      {/* Image lightbox */}
      <Lightbox
        open={lightboxIndex !== null}
        close={() => setLightboxIndex(null)}
        index={lightboxIndex ?? 0}
        slides={imageItems.map((g) => ({ src: g.src, alt: g.caption }))}
      />

      {/* Video modal */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setVideoOpen(null)}
            className="fixed inset-0 z-[60] bg-primary-dark/95 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl cursor-default"
            >
              <video
                src={videoOpen}
                className="w-full h-auto"
                controls
                autoPlay
                playsInline
              />
              <button
                onClick={() => setVideoOpen(null)}
                className="absolute top-4 right-4 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/95 text-primary-dark hover:bg-white shadow-luxe"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
