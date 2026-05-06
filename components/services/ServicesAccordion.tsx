'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check } from 'lucide-react';
import { services } from '@/lib/data';
import { WHATSAPP_LINK } from '@/lib/utils';

export default function ServicesAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-4 max-w-5xl mx-auto">
      {services.map((s, i) => {
        const Icon = s.icon;
        const isOpen = open === i;
        return (
          <motion.div
            key={s.slug}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: i * 0.04 }}
            className={`border rounded-2xl overflow-hidden transition-colors ${
              isOpen ? 'border-secondary/60 bg-mist/60 shadow-luxe' : 'border-primary/10 bg-white'
            }`}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center gap-5 p-6 md:p-7 text-left"
              aria-expanded={isOpen}
            >
              <span
                className={`shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-full transition-colors ${
                  isOpen ? 'bg-secondary text-primary-dark' : 'bg-primary/10 text-primary'
                }`}
              >
                <Icon className="w-5 h-5" />
              </span>
              <span className="flex-1">
                <span className="block font-display text-2xl md:text-3xl text-primary leading-tight">
                  {s.title}
                </span>
                <span className="block text-sm text-ink/65 mt-1">{s.short}</span>
              </span>
              <ChevronDown
                className={`w-5 h-5 text-primary transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-6 md:px-7 pb-7 grid md:grid-cols-2 gap-6 md:gap-10">
                    <p className="text-ink/80 leading-relaxed">{s.description}</p>
                    <ul className="space-y-2.5">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-ink/85">
                          <Check className="w-4 h-4 text-secondary mt-1 shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="px-6 md:px-7 pb-7">
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold py-3 px-6 text-sm"
                    >
                      Enquire Now
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
