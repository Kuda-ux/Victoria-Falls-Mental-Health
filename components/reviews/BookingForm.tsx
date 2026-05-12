'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Send, MessageCircle, Mail } from 'lucide-react';
import { services } from '@/lib/data';
import { WHATSAPP_NUMBER, EMAIL } from '@/lib/utils';

const schema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Enter a valid email'),
  phone: z.string().min(7, 'Enter a valid phone number'),
  service: z.string().min(1, 'Please select a service'),
  date: z.string().optional(),
  message: z.string().optional()
});
type FormValues = z.infer<typeof schema>;

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: FormValues) => {
    setError(null);
    try {
      // 1. Email the booking to the gmail account via FormSubmit (no backend required)
      const res = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `New Booking Enquiry — ${data.fullName}`,
          _template: 'table',
          _captcha: 'false',
          Name: data.fullName,
          Email: data.email,
          Phone: data.phone,
          Service: data.service,
          PreferredDate: data.date || '—',
          Message: data.message || '—'
        })
      });
      if (!res.ok) throw new Error('Email send failed');

      // 2. Also offer WhatsApp continuation in a new tab
      const text =
        `Hello, I'd like to book a consultation.%0A%0A` +
        `*Name:* ${data.fullName}%0A` +
        `*Email:* ${data.email}%0A` +
        `*Phone:* ${data.phone}%0A` +
        `*Service:* ${data.service}%0A` +
        (data.date ? `*Preferred date:* ${data.date}%0A` : '') +
        (data.message ? `*Message:* ${data.message}` : '');
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');

      setSubmitted(true);
    } catch (e) {
      setError(
        'We could not send your enquiry by email. Please try the WhatsApp option below or email us directly.'
      );
    }
  };

  const inputCls =
    'w-full bg-white border border-primary/15 rounded-xl px-4 py-3 text-ink focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition';

  return (
    <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10">
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white border border-primary/10 rounded-3xl p-8 md:p-10 shadow-luxe"
      >
        <h3 className="font-display text-3xl text-primary">Book a Consultation</h3>
        <p className="text-ink/65 mt-2 text-sm">
          Submit your details and we will respond within one working day.
        </p>

        {submitted ? (
          <div className="mt-8 flex items-center gap-3 rounded-xl bg-mist p-5 text-primary">
            <CheckCircle2 className="w-6 h-6 text-secondary" />
            <p>Your enquiry has been emailed to our team. We&apos;ll be in touch within one working day.</p>
          </div>
        ) : (
          <>
          {error && (
            <div className="mt-6 rounded-xl bg-red-50 border border-red-200 p-4 text-sm text-red-700">
              {error}
            </div>
          )}
          <div className="mt-7 grid sm:grid-cols-2 gap-5">
            <div className="sm:col-span-2">
              <label className="text-xs uppercase tracking-[0.2em] text-primary/70">Full Name</label>
              <input className={inputCls} {...register('fullName')} />
              {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName.message}</p>}
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-primary/70">Email</label>
              <input type="email" className={inputCls} {...register('email')} />
              {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-primary/70">Phone (WhatsApp)</label>
              <input className={inputCls} {...register('phone')} />
              {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone.message}</p>}
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-primary/70">Service of Interest</label>
              <select className={inputCls} defaultValue="" {...register('service')}>
                <option value="" disabled>Select a service</option>
                {services.map((s) => (
                  <option key={s.slug} value={s.title}>{s.title}</option>
                ))}
              </select>
              {errors.service && <p className="text-xs text-red-600 mt-1">{errors.service.message}</p>}
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-primary/70">Preferred Date</label>
              <input type="date" className={inputCls} {...register('date')} />
            </div>
            <div className="sm:col-span-2">
              <label className="text-xs uppercase tracking-[0.2em] text-primary/70">Message</label>
              <textarea rows={4} className={inputCls} {...register('message')} />
            </div>
            <div className="sm:col-span-2 mt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-gold w-full sm:w-auto"
              >
                <Send className="w-4 h-4" /> {isSubmitting ? 'Sending…' : 'Send Enquiry'}
              </button>
            </div>
          </div>
          </>
        )}
      </motion.form>

      <motion.aside
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-forest-gradient text-white rounded-3xl p-8 md:p-10 flex flex-col"
      >
        <h3 className="font-display text-3xl">Prefer to talk now?</h3>
        <p className="text-white/75 mt-3 leading-relaxed">
          Reach us directly on WhatsApp or email — whichever feels easiest.
        </p>
        <div className="space-y-3 mt-8">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%27d%20like%20to%20enquire%20about%20your%20services.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 w-full rounded-xl bg-[#25D366]/95 hover:bg-[#25D366] text-white px-5 py-4 transition"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="font-medium">Chat on WhatsApp</span>
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-3 w-full rounded-xl bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/15 px-5 py-4 transition"
          >
            <Mail className="w-5 h-5 text-secondary" />
            <span className="font-medium">{EMAIL}</span>
          </a>
        </div>
        <div className="mt-auto pt-10 text-white/60 text-xs leading-relaxed">
          All enquiries are confidential. A team member will respond within one working day.
        </div>
      </motion.aside>
    </div>
  );
}
