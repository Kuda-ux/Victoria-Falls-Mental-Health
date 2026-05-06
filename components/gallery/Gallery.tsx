'use client';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { galleryImages } from '@/lib/data';
import { ImagePlus } from 'lucide-react';

const tabs = ['All', 'Retreats', 'Sessions', 'Events'] as const;
type Tab = (typeof tabs)[number];

export default function Gallery() {
  const [tab, setTab] = useState<Tab>('All');
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const filtered = useMemo(
    () => (tab === 'All' ? galleryImages : galleryImages.filter((g) => g.category === tab)),
    [tab]
  );

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-5 py-2 rounded-full text-sm tracking-wide transition-all ${
              tab === t
                ? 'bg-primary text-white shadow-luxe'
                : 'bg-mist text-primary hover:bg-primary/10'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
        {filtered.map((img, i) => (
          <motion.button
            key={img.src + i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
            className="relative mb-5 block w-full break-inside-avoid rounded-2xl overflow-hidden group"
          >
            <Image
              src={img.src}
              alt={img.category}
              width={800}
              height={1000}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="absolute bottom-3 left-4 text-white text-xs tracking-[0.3em] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
              {img.category}
            </span>
          </motion.button>
        ))}
        <div className="mb-5 break-inside-avoid rounded-2xl border-2 border-dashed border-primary/20 p-10 text-center text-primary/70 bg-mist/40">
          <ImagePlus className="w-8 h-8 mx-auto mb-3 text-secondary" />
          <p className="font-display text-xl text-primary">More coming soon…</p>
          <p className="text-sm mt-1">New moments are added after each retreat.</p>
        </div>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={filtered.map((g) => ({ src: g.src }))}
      />
    </>
  );
}
