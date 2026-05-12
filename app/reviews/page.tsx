import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ReviewsList from '@/components/reviews/ReviewsList';
import BookingForm from '@/components/reviews/BookingForm';

export const metadata: Metadata = {
  title: 'Reviews & Booking',
  description: 'Read what participants share about their experience and book your consultation.'
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        title="Reviews & Booking"
        subtitle="Hear from those who have walked this path — and take your first step."
        image="/images/about-1.jpg"
      />

      <section className="section bg-mist">
        <div className="container-luxe">
          <div className="max-w-2xl mb-14 text-center mx-auto">
            <p className="eyebrow mb-4">In Their Own Words</p>
            <h2 className="font-display text-4xl md:text-5xl text-primary leading-tight">
              Stories of <span className="italic text-accent">return and renewal</span>.
            </h2>
          </div>
          <ReviewsList />
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-luxe">
          <div className="max-w-2xl mb-12 text-center mx-auto">
            <p className="eyebrow mb-4">Get In Touch</p>
            <h2 className="font-display text-4xl md:text-5xl text-primary leading-tight">
              Begin your <span className="italic text-accent">healing journey</span>.
            </h2>
          </div>
          <BookingForm />
        </div>
      </section>
    </>
  );
}
