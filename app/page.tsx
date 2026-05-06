import Hero from '@/components/home/Hero';
import AboutIntro from '@/components/home/AboutIntro';
import MissionVisionValues from '@/components/home/MissionVisionValues';
import ServicesTeaser from '@/components/home/ServicesTeaser';
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel';
import CTABanner from '@/components/home/CTABanner';

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutIntro />
      <MissionVisionValues />
      <ServicesTeaser />
      <TestimonialsCarousel />
      <CTABanner />
    </>
  );
}
