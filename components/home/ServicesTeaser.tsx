'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { services } from '@/lib/data';

export default function ServicesTeaser() {
  const featured = services.slice(0, 4);
  return (
    <section className="section bg-mist relative">
      <div className="container-luxe">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div className="max-w-xl">
            <p className="eyebrow mb-4">Our Services</p>
            <h2 className="font-display text-4xl md:text-6xl text-primary leading-[1.05]">
              How we can <span className="italic text-accent">help you</span>.
            </h2>
          </div>
          <p className="text-ink/70 max-w-md leading-relaxed">
            From individual therapy to immersive retreats and corporate wellness — every offering is designed
            with depth, dignity and discernment.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-white border border-primary/5 rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-luxe transition-all duration-500"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(min-width:1024px) 25vw, 50vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-tr ${s.accent} mix-blend-multiply opacity-90`} />
                  <span className="absolute top-4 left-4 inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white/95 text-primary shadow-luxe">
                    <Icon className="w-5 h-5" />
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl text-primary leading-tight">{s.title}</h3>
                  <p className="text-ink/70 text-sm mt-3 leading-relaxed">{s.short}</p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-secondary mt-5 group-hover:gap-2 transition-all"
                  >
                    Learn more <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link href="/services" className="btn-ghost-dark">View All Services →</Link>
        </div>
      </div>
    </section>
  );
}
