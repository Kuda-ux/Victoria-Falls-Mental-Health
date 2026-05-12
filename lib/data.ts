import {
  Brain, Users, Heart, Building2, Mountain, Globe, BookOpen, GraduationCap, Handshake,
  type LucideIcon
} from 'lucide-react';

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  bullets: string[];
  icon: LucideIcon;
  image: string;
  accent: string;
};

export const services: Service[] = [
  {
    slug: 'psychotherapy',
    title: 'Psychotherapy & Counselling',
    short: 'One-on-one therapeutic support for personal healing.',
    description:
      'Confidential, evidence-based individual therapy guided by experienced clinicians to navigate life’s most pressing challenges.',
    bullets: [
      'Anxiety, depression and stress management',
      'Trauma-informed and grief counselling',
      'Self-esteem and identity work',
      'Cognitive Behavioural Therapy (CBT)'
    ],
    icon: Brain,
    image: '/images/service-psychotherapy.jpg',
    accent: 'from-teal-500/80 to-emerald-600/80'
  },
  {
    slug: 'relationships',
    title: 'Relationship & Personal Development Support',
    short: 'Strengthen relationships and the relationship with yourself.',
    description:
      'Therapeutic support for couples, families and individuals seeking to build healthier connections and personal growth.',
    bullets: [
      'Couples and pre-marital counselling',
      'Family systems therapy',
      'Communication and conflict resolution',
      'Personal development coaching'
    ],
    icon: Heart,
    image: '/images/service-relationships.jpg',
    accent: 'from-rose-500/80 to-pink-600/80'
  },
  {
    slug: 'group-therapy',
    title: 'Group Therapy & Community Programmes',
    short: 'Healing in the company of others walking similar paths.',
    description:
      'Facilitated group spaces where shared experience becomes a powerful catalyst for transformation.',
    bullets: [
      'Support groups (grief, addiction, anxiety)',
      'Women’s and men’s circles',
      'Youth empowerment programmes',
      'Community wellness outreach'
    ],
    icon: Users,
    image: '/images/service-group.jpg',
    accent: 'from-amber-500/80 to-orange-600/80'
  },
  {
    slug: 'corporate',
    title: 'Corporate & Workplace Wellness',
    short: 'Cultivating mentally healthy, high-performing teams.',
    description:
      'Tailored mental health programmes for organisations committed to the wellbeing of their people.',
    bullets: [
      'Employee Assistance Programmes (EAP)',
      'Burnout prevention and resilience training',
      'Leadership wellness coaching',
      'Mental health policy advisory'
    ],
    icon: Building2,
    image: '/images/service-corporate.webp',
    accent: 'from-sky-500/80 to-indigo-600/80'
  },
  {
    slug: 'retreats',
    title: 'Wellness Retreats (In-Person)',
    short: 'Immersive healing in the heart of Victoria Falls.',
    description:
      'Carefully curated multi-day retreats blending therapy, nature immersion and restorative practices.',
    bullets: [
      'Individual, couples and group retreats',
      'Corporate executive retreats',
      'Nature therapy and mindful movement',
      'Holistic wellness rituals'
    ],
    icon: Mountain,
    image: '/images/service-retreats.jpg',
    accent: 'from-emerald-500/80 to-teal-700/80'
  },
  {
    slug: 'virtual',
    title: 'Virtual Therapy & Online Support',
    short: 'World-class care, accessible wherever you are.',
    description:
      'Secure, confidential online sessions for clients across Zimbabwe and the diaspora.',
    bullets: [
      'Video and voice therapy sessions',
      'Text-based therapy options',
      'Online support groups',
      'Crisis check-ins'
    ],
    icon: Globe,
    image: '/images/about-2.jpg',
    accent: 'from-violet-500/80 to-fuchsia-600/80'
  },
  {
    slug: 'psychoeducation',
    title: 'Psychoeducation & Mental Health Literacy',
    short: 'Knowledge that empowers wellbeing.',
    description:
      'Programmes that demystify mental health and equip individuals and communities with practical tools.',
    bullets: [
      'School-based mental health education',
      'Parenting and caregiver education',
      'Public awareness campaigns',
      'Resource development'
    ],
    icon: BookOpen,
    image: '/images/gallery-team-2.jpg',
    accent: 'from-amber-400/80 to-yellow-600/80'
  },
  {
    slug: 'workshops',
    title: 'Workshops & Seminars',
    short: 'Transformative experiences for groups and institutions.',
    description:
      'Interactive sessions designed for organisations, schools and faith communities.',
    bullets: [
      'Stress, anxiety and resilience workshops',
      'Mindfulness and emotional intelligence',
      'Mental health first aid training',
      'Bespoke seminar design'
    ],
    icon: GraduationCap,
    image: '/images/service-workshops.jpg',
    accent: 'from-cyan-500/80 to-blue-600/80'
  },
  {
    slug: 'partnerships',
    title: 'Partnerships & Community Engagement',
    short: 'Collaborating to build a mentally well Zimbabwe.',
    description:
      'Strategic partnerships with NGOs, government, schools and faith-based organisations to expand access to mental health care.',
    bullets: [
      'NGO and INGO collaborations',
      'Faith-based community programmes',
      'Schools and university partnerships',
      'Research and advocacy'
    ],
    icon: Handshake,
    image: '/images/service-partnerships.webp',
    accent: 'from-orange-500/80 to-red-600/80'
  }
];

export const testimonials: { quote: string; author: string }[] = [
  {
    quote:
      'I arrived carrying a weight I had grown too used to. By the time I left, I felt lighter, clearer and reconnected with parts of myself I had long forgotten.',
    author: 'Retreat Participant'
  },
  {
    quote:
      'The retreat gave me the courage to face truths I had been avoiding for years. The setting and the facilitators held me with such care.',
    author: 'Retreat Participant'
  },
  {
    quote:
      'There is something about the sound of the falls and the stillness of the bush that opens you up. The therapy work simply met me there.',
    author: 'Retreat Participant'
  },
  {
    quote:
      'My partner and I came in fragile. We left with new tools, new language and a renewed sense of love. This experience saved our marriage.',
    author: 'Retreat Participant'
  },
  {
    quote:
      'I have been in therapy for years, but the integration of nature, community and skilled clinicians here is unlike anything I have experienced.',
    author: 'Retreat Participant'
  },
  {
    quote:
      'As a leader I was running on empty. The corporate retreat reminded me that my wellbeing is the foundation of everything I build.',
    author: 'Retreat Participant'
  },
  {
    quote:
      'I cried, I laughed, I rested. I came home to myself. I will be recommending this experience for the rest of my life.',
    author: 'Retreat Participant'
  },
  {
    quote:
      'Healing felt sacred here. The team is gifted, the place is breathtaking, and the work is the real thing.',
    author: 'Retreat Participant'
  }
];

export type Retreat = {
  title: string;
  description: string;
  duration: string;
  image: string;
};

export const retreats: Retreat[] = [
  {
    title: 'Individual Retreat',
    description:
      'A deeply personal, one-on-one healing journey curated entirely around you, your story and your goals.',
    duration: '3–7 days',
    image: '/images/service-retreats.jpg'
  },
  {
    title: 'Couples Retreat',
    description:
      'Reconnect, repair and renew with guided couples therapy framed by the restorative beauty of Victoria Falls.',
    duration: '4–5 days',
    image: '/images/service-relationships.jpg'
  },
  {
    title: 'Corporate Retreat',
    description:
      'Strategic wellness experiences for executive teams seeking clarity, cohesion and sustainable performance.',
    duration: '3–5 days',
    image: '/images/service-corporate.webp'
  },
  {
    title: 'Group Retreat',
    description:
      'Curated cohorts of 6–12 participants moving through transformation together in a held, intentional space.',
    duration: '5–7 days',
    image: '/images/service-group.jpg'
  }
];

export type GalleryItem = {
  src: string;
  type?: 'image' | 'video';
  category: 'Retreats' | 'Sessions' | 'Events' | 'Moments';
  caption?: string;
  span?: 'wide' | 'tall' | 'large';
};

export const galleryImages: GalleryItem[] = [
  { src: '/images/gallery-clip.mp4', type: 'video', category: 'Moments', caption: 'Behind the scenes', span: 'large' },
  { src: '/images/service-retreats.jpg', category: 'Retreats', caption: 'Wellness Retreat', span: 'tall' },
  { src: '/images/service-psychotherapy.jpg', category: 'Sessions', caption: 'Psychotherapy & Counselling' },
  { src: '/images/service-group.jpg', category: 'Sessions', caption: 'Group Therapy', span: 'wide' },
  { src: '/images/service-relationships.jpg', category: 'Sessions', caption: 'Relationship Support' },
  { src: '/images/service-corporate.webp', category: 'Events', caption: 'Corporate Wellness' },
  { src: '/images/service-workshops.jpg', category: 'Events', caption: 'Workshops & Seminars', span: 'wide' },
  { src: '/images/service-partnerships.webp', category: 'Events', caption: 'Community Engagement' },
  { src: '/images/about-1.jpg', category: 'Moments', caption: 'Reflection' },
  { src: '/images/about-2.jpg', category: 'Moments', caption: 'Stillness', span: 'tall' },
  { src: '/images/gallery-team-1.jpg', category: 'Moments', caption: 'Our Team' },
  { src: '/images/gallery-team-2.jpg', category: 'Moments', caption: 'Outreach' },
  { src: '/images/hero-1.jpeg', category: 'Retreats', caption: 'Victoria Falls', span: 'wide' }
];

export const faqs: { q: string; a: string }[] = [
  {
    q: 'Who are the retreats designed for?',
    a: 'Our retreats welcome adults seeking personal growth, healing or reset — from individuals navigating life transitions to couples and corporate teams.'
  },
  {
    q: 'Do I need a referral or diagnosis to attend?',
    a: 'No. A short pre-retreat consultation helps us understand your goals and ensure the experience is the right fit for you.'
  },
  {
    q: 'What is included in the retreat fee?',
    a: 'Accommodation, all therapeutic sessions, curated meals, nature-based activities and most ground transfers within Victoria Falls.'
  },
  {
    q: 'Is confidentiality guaranteed?',
    a: 'Absolutely. All clinical work adheres to strict professional confidentiality and ethical standards.'
  },
  {
    q: 'Can I attend virtually instead?',
    a: 'Yes — we offer secure virtual therapy and online support for clients who cannot travel.'
  }
];

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/retreats', label: 'Retreats' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/reviews', label: 'Reviews & Booking' }
];
