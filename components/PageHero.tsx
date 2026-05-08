'use client';
import { motion } from 'framer-motion';
import VideoBackground from '@/components/VideoBackground';

export default function PageHero({
  title,
  subtitle,
  image,
  video = '/footage.mp4',
  overlay = 'forest'
}: {
  title: string;
  subtitle?: string;
  image: string;
  video?: string;
  overlay?: 'forest' | 'gold';
}) {
  return (
    <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
      <VideoBackground src={video} poster={image} />
      <div
        className={`absolute inset-0 ${
          overlay === 'gold'
            ? 'bg-gradient-to-b from-[#0D1F16]/40 via-[#C0784A]/35 to-[#0D1F16]/80'
            : 'bg-gradient-to-b from-[#0D1F16]/70 via-[#1B4332]/55 to-[#0D1F16]/85'
        }`}
      />
      <div className="absolute inset-0 mist-layer animate-mist" />
      <div className="container-luxe relative h-full flex flex-col justify-end pb-16 md:pb-20">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="eyebrow text-secondary mb-4"
        >
          Victoria Falls Mental Health
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="font-display text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05]"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="text-white/85 mt-6 max-w-2xl text-lg leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
