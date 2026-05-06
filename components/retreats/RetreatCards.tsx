'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { retreats } from '@/lib/data';
import { WHATSAPP_LINK } from '@/lib/utils';

export default function RetreatCards() {
  return (
    <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
      {retreats.map((r, i) => (
        <motion.article
          key={r.title}
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className="group relative bg-white rounded-3xl overflow-hidden shadow-luxe"
        >
          <div className="relative aspect-[5/4] overflow-hidden">
            <Image
              src={r.image}
              alt={r.title}
              fill
              sizes="(min-width:1024px) 40vw, 100vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-primary-dark/80 backdrop-blur text-white text-xs px-3 py-1.5">
              <Clock className="w-3.5 h-3.5 text-secondary" /> {r.duration}
            </span>
          </div>
          <div className="p-7">
            <h3 className="font-display text-3xl text-primary leading-tight">{r.title}</h3>
            <p className="text-ink/75 mt-3 leading-relaxed">{r.description}</p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-6 py-2.5 px-5 text-sm"
            >
              Enquire
            </a>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
