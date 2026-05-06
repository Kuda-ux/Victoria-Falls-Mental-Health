import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Gallery from '@/components/gallery/Gallery';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Images from our sessions, retreats and community events.'
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="Images from our sessions and retreat programmes."
        image="https://images.unsplash.com/photo-1483794344563-d27a8d18014e?w=1920"
      />
      <section className="section bg-white">
        <div className="container-luxe">
          <p className="text-center text-ink/65 max-w-xl mx-auto mb-10">
            A glimpse into the moments, places and people that shape our work.
          </p>
          <Gallery />
        </div>
      </section>
    </>
  );
}
