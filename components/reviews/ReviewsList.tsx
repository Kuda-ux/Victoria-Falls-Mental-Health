'use client';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { testimonials } from '@/lib/data';

export default function ReviewsList() {
  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
      {testimonials.map((t, i) => (
        <motion.figure
          key={i}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, delay: (i % 3) * 0.1 }}
          className="mb-6 break-inside-avoid bg-white rounded-2xl p-7 border border-primary/10 hover:shadow-luxe transition-shadow"
        >
          <Quote className="w-8 h-8 text-secondary mb-3" />
          <blockquote className="font-accent italic text-lg leading-relaxed text-primary-dark">
            “{t.quote}”
          </blockquote>
          <div className="flex items-center gap-1 mt-5">
            {[...Array(5)].map((_, s) => (
              <Star key={s} className="w-4 h-4 fill-secondary text-secondary" />
            ))}
          </div>
          <figcaption className="mt-3 text-xs tracking-[0.3em] uppercase text-accent">
            — {t.author}
          </figcaption>
        </motion.figure>
      ))}
    </div>
  );
}
