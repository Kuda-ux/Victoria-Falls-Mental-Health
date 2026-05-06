import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ServicesAccordion from '@/components/services/ServicesAccordion';
import CTABanner from '@/components/home/CTABanner';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Comprehensive mental health services — psychotherapy, retreats, corporate wellness, virtual therapy and community programmes.'
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive, compassionate mental health support — thoughtfully designed for individuals, couples, families and organisations."
        image="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1920"
      />
      <section className="section bg-white">
        <div className="container-luxe max-w-3xl text-center mb-14">
          <p className="eyebrow mb-4">A Full Continuum of Care</p>
          <h2 className="font-display text-4xl md:text-5xl text-primary leading-tight">
            Nine integrated pathways to <span className="italic text-accent">wellbeing</span>.
          </h2>
          <p className="mt-6 text-ink/75 leading-relaxed">
            Whether you are seeking personal therapy, a transformative retreat, or organisational wellness
            partnership — our services are crafted with clinical excellence and human warmth.
          </p>
        </div>
        <div className="container-luxe">
          <ServicesAccordion />
        </div>
      </section>
      <CTABanner />
    </>
  );
}
