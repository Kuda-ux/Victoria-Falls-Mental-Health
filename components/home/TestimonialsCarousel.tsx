'use client';
import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { testimonials } from '@/lib/data';

export default function TestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect();
    const id = setInterval(() => emblaApi.scrollNext(), 7000);
    return () => clearInterval(id);
  }, [emblaApi, onSelect]);

  return (
    <section className="section bg-mist relative overflow-hidden">
      <div className="container-luxe">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="eyebrow mb-4">Voices of Transformation</p>
          <h2 className="font-display text-4xl md:text-6xl text-primary leading-[1.05]">
            Stories from those <span className="italic text-accent">who have walked this path</span>.
          </h2>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t, i) => (
              <div key={i} className="flex-[0_0_100%] min-w-0 px-2 md:px-12">
                <motion.figure
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="max-w-3xl mx-auto text-center"
                >
                  <Quote className="w-14 h-14 text-secondary mx-auto mb-6" />
                  <blockquote className="font-accent italic text-2xl md:text-3xl leading-[1.45] text-primary-dark">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-8 text-sm tracking-[0.3em] uppercase text-accent">
                    — {t.author}
                  </figcaption>
                </motion.figure>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-2 rounded-full transition-all ${
                i === selected ? 'w-8 bg-secondary' : 'w-2 bg-primary/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
