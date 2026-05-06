'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Leaf, Waves } from 'lucide-react';

export default function AboutIntro() {
  return (
    <section className="section bg-white relative overflow-hidden">
      <div className="container-luxe grid md:grid-cols-2 gap-14 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="gold-frame relative aspect-[4/5] rounded-sm overflow-hidden">
            <Image
              src="/images/hero-1.jpeg"
              alt="Victoria Falls Mental Health"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full bg-secondary/15 backdrop-blur-sm flex items-center justify-center">
            <Leaf className="w-10 h-10 text-secondary" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="eyebrow mb-5">About Us</p>
          <h2 className="font-display text-4xl md:text-6xl text-primary leading-[1.05]">
            Where the falls meet <span className="italic text-accent">inner stillness</span>.
          </h2>

          <div className="mt-8 space-y-5 text-ink/80 leading-relaxed text-[1.05rem]">
            <p>
              Victoria Falls Mental Health and Wellness Services is Zimbabwe&apos;s premier mental health
              initiative — a sanctuary where therapeutic excellence meets the restorative beauty of one of
              the world&apos;s greatest natural wonders.
            </p>
            <p className="flex gap-3">
              <Waves className="w-5 h-5 text-secondary shrink-0 mt-1" />
              <span>
                Inspired by the natural power of Victoria Falls, we offer psychotherapy, immersive retreats,
                corporate wellness and community programmes that honour both the science of healing and the
                wisdom of the land.
              </span>
            </p>
            <p>
              Our work is grounded in compassion, cultural relevance and clinical rigour — guiding individuals,
              couples, families and organisations toward sustained wellbeing.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/services" className="btn-ghost-dark">Our Services</Link>
            <Link href="/retreats" className="btn-gold">Discover Retreats</Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
