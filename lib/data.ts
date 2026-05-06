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
    icon: Brain
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
    icon: Heart
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
    icon: Users
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
    icon: Building2
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
    icon: Mountain
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
    icon: Globe
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
    icon: BookOpen
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
    icon: GraduationCap
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
    icon: Handshake
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
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200'
  },
  {
    title: 'Couples Retreat',
    description:
      'Reconnect, repair and renew with guided couples therapy framed by the restorative beauty of Victoria Falls.',
    duration: '4–5 days',
    image: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=1200'
  },
  {
    title: 'Corporate Retreat',
    description:
      'Strategic wellness experiences for executive teams seeking clarity, cohesion and sustainable performance.',
    duration: '3–5 days',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200'
  },
  {
    title: 'Group Retreat',
    description:
      'Curated cohorts of 6–12 participants moving through transformation together in a held, intentional space.',
    duration: '5–7 days',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200'
  }
];

export const galleryImages: { src: string; category: 'Retreats' | 'Sessions' | 'Events' }[] = [
  { src: '/images/hero-1.jpeg', category: 'Retreats' },
  { src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200', category: 'Retreats' },
  { src: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200', category: 'Sessions' },
  { src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200', category: 'Retreats' },
  { src: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200', category: 'Sessions' },
  { src: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=1200', category: 'Retreats' },
  { src: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1200', category: 'Events' },
  { src: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=1200', category: 'Retreats' },
  { src: 'https://images.unsplash.com/photo-1504457047772-27faf1c00561?w=1200', category: 'Sessions' },
  { src: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=1200', category: 'Events' },
  { src: 'https://images.unsplash.com/photo-1483794344563-d27a8d18014e?w=1200', category: 'Retreats' },
  { src: 'https://images.unsplash.com/photo-1500964757637-c85e8a162699?w=1200', category: 'Retreats' },
  { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200', category: 'Events' }
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
