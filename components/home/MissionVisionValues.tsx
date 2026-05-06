'use client';
import { motion } from 'framer-motion';
import { Compass, Eye, Sparkles } from 'lucide-react';

const values = [
  'Compassion in every interaction',
  'Cultural relevance and respect',
  'Clinical excellence and ethics',
  'Holistic, nature-informed healing',
  'Confidentiality and trust'
];

const cards = [
  {
    icon: Compass,
    title: 'Mission',
    body: 'To provide accessible, world-class mental health and wellness experiences that empower individuals and communities to heal, grow and thrive.'
  },
  {
    icon: Eye,
    title: 'Vision',
    body: 'A Zimbabwe — and an Africa — where mental wellbeing is celebrated, prioritised and woven into the fabric of everyday life.'
  },
  {
    icon: Sparkles,
    title: 'Values',
    body: '',
    list: values
  }
] as const;

export default function MissionVisionValues() {
  return (
    <section className="section bg-forest-gradient text-white relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, #D4AF37 0, transparent 40%), radial-gradient(circle at 80% 70%, #C0784A 0, transparent 40%)'
        }}
      />
      <div className="container-luxe relative">
        <div className="max-w-2xl mb-16">
          <p className="eyebrow mb-4">Our Foundation</p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
            Rooted in purpose. <span className="italic text-secondary">Guided by values.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="glass-card p-8 md:p-10 hover:-translate-y-1 transition-transform duration-500"
              >
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/15 text-secondary mb-6">
                  <Icon className="w-6 h-6" />
                </span>
                <h3 className="font-display text-3xl mb-4">{c.title}</h3>
                {c.body && <p className="text-white/80 leading-relaxed">{c.body}</p>}
                {'list' in c && c.list && (
                  <ul className="space-y-3 mt-2">
                    {c.list.map((v, idx) => (
                      <li key={v} className="flex gap-4 text-white/85">
                        <span className="font-display text-secondary text-2xl leading-none w-7 shrink-0">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span>{v}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
