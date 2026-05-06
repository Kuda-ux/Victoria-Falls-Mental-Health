import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import RetreatCards from '@/components/retreats/RetreatCards';
import FAQ from '@/components/retreats/FAQ';
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel';
import { Plane, Sparkles, Trees, Heart } from 'lucide-react';
import { WHATSAPP_LINK } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Wellness Retreats',
  description:
    'Immersive healing experiences in the peaceful, restorative environment of Victoria Falls.'
};

const journey = [
  { icon: Plane, title: 'Arrival', text: 'Warm welcome, orientation and gentle settling-in.' },
  { icon: Heart, title: 'Sessions', text: 'Personalised therapeutic and group experiences.' },
  { icon: Trees, title: 'Nature Healing', text: 'Guided immersion in the power of the falls.' },
  { icon: Sparkles, title: 'Departure', text: 'Integration, intention-setting and aftercare.' }
];

export default function RetreatsPage() {
  return (
    <>
      <PageHero
        title="Wellness Retreats"
        subtitle="Immersive healing experiences in the peaceful, restorative environment of Victoria Falls."
        image="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1920"
        overlay="gold"
      />

      <section className="section bg-white">
        <div className="container-luxe">
          <div className="max-w-3xl mb-14 text-center mx-auto">
            <p className="eyebrow mb-4">Curated Experiences</p>
            <h2 className="font-display text-4xl md:text-5xl text-primary leading-tight">
              Choose the journey that <span className="italic text-accent">meets you</span>.
            </h2>
          </div>
          <RetreatCards />
        </div>
      </section>

      <section className="section bg-mist">
        <div className="container-luxe">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow mb-4">What to Expect</p>
            <h2 className="font-display text-4xl md:text-5xl text-primary leading-tight">
              A four-step journey of <span className="italic text-accent">return.</span>
            </h2>
          </div>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {journey.map((j, i) => {
              const Icon = j.icon;
              return (
                <li
                  key={j.title}
                  className="relative bg-white rounded-2xl p-7 border border-primary/10 hover:-translate-y-1 hover:shadow-luxe transition-all duration-500"
                >
                  <span className="absolute -top-4 left-7 inline-flex items-center justify-center w-9 h-9 rounded-full bg-secondary text-primary-dark font-display text-lg">
                    {i + 1}
                  </span>
                  <Icon className="w-7 h-7 text-primary mt-4" />
                  <h3 className="font-display text-2xl text-primary mt-4">{j.title}</h3>
                  <p className="text-ink/70 mt-2 text-sm leading-relaxed">{j.text}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <TestimonialsCarousel />

      <section className="section bg-white">
        <div className="container-luxe">
          <div className="max-w-2xl mb-12 text-center mx-auto">
            <p className="eyebrow mb-4">FAQ</p>
            <h2 className="font-display text-4xl md:text-5xl text-primary leading-tight">
              Questions, <span className="italic text-accent">gently answered</span>.
            </h2>
          </div>
          <FAQ />
        </div>
      </section>

      <section className="relative bg-forest-gradient text-white py-20 md:py-28 text-center">
        <div className="container-luxe">
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] max-w-3xl mx-auto">
            Book your <span className="italic text-secondary">retreat experience</span>.
          </h2>
          <p className="text-white/75 mt-6 max-w-xl mx-auto">
            Spaces are intentionally limited. Reach out to design your retreat.
          </p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-gold mt-10">
            Enquire on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
