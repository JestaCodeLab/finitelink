export interface University {
  abbr: string;
  name: string;
  place: string;
  text?: string;
}

export interface Reason {
  icon: 'home' | 'star' | 'coin';
  title: string;
  text: string;
}

export interface Destination {
  slug: string;
  name: string;
  /** One-line pitch, shown on cards and in the page hero. */
  line: string;
  image: string;
  alt: string;
  /** Short facts shown as pills in the hero. */
  facts: string[];
  why?: { heading: string; body: string; reasons: Reason[] };
  universities: University[];
  costs?: {
    body: string;
    /** TODO(content): add real figures from IRCC / the university before filling these. */
    figures?: { label: string; value: string; note: string }[];
  };
}

export const destinations: Destination[] = [
  {
    slug: 'canada',
    name: 'Canada',
    line: 'Top-ranked universities and a path to permanent residence',
    image: '/images/canada.jpg',
    alt: 'Bridge at night in Canada',
    facts: ['4 partner universities', 'Path to permanent residence'],
    why: {
      heading: 'A booming hub for international students.',
      body: 'Canada is no longer an overlooked destination. It offers degrees as prestigious as those in the US — often at a lower cost — and a direct route to permanent citizenship, an option many international students want. Canada has ranked among the top ten places to live in the world for over twenty years.',
      reasons: [
        { icon: 'home', title: 'Stay after you graduate', text: 'A direct path to permanent residence.' },
        { icon: 'star', title: 'Top-10 place to live', text: 'Consistently, for more than 20 years.' },
        { icon: 'coin', title: 'Better value than the US', text: 'Equally respected degrees, lower fees.' },
      ],
    },
    universities: [
      { abbr: 'UM', name: 'University of Manitoba', place: 'Winnipeg, Manitoba', text: 'A university for people who embrace challenges and take action — its students and alumni shape conversations on everything from human rights to global health and climate change.' },
      { abbr: 'TKU', name: 'The King’s University', place: 'Edmonton, Alberta', text: 'Values learning that is open and explores every dimension of our world, with a strong commitment to academic freedom, debate and critique.' },
      { abbr: 'UNBC', name: 'University of Northern British Columbia', place: 'Prince George, BC', text: 'Recognised for financial awards, student support and student satisfaction. Programmes include Arts, Commerce, Health Sciences and Nursing.' },
      // TODO(content): add a short description for KPU.
      { abbr: 'KPU', name: 'Kwantlen Polytechnic University', place: 'Metro Vancouver, BC' },
    ],
    costs: {
      body: 'Immigration, Refugees and Citizenship Canada (IRCC) asks for proof that you have enough money for your studies and living costs. Your college may give a cost-of-living estimate; if not, the government’s minimum applies. It covers accommodation, food, medical insurance, transport, books and clothing — tuition is extra.',
    },
  },
  { slug: 'united-kingdom', name: 'United Kingdom', line: '160+ universities, shorter degrees', image: '/images/uk.jpg', alt: 'Historic university buildings in the UK', facts: ['Partner: University of Bolton'], universities: [{ abbr: 'UoB', name: 'University of Bolton', place: 'Bolton, England' }] },
  { slug: 'ireland', name: 'Ireland', line: 'English-speaking, in the heart of Europe', image: '/images/ireland.jpg', alt: 'Castle and lawn in Ireland', facts: ['English-speaking'], universities: [{ abbr: 'LIT', name: 'Limerick Institute of Technology', place: 'Limerick, Ireland' }] },
  { slug: 'dubai', name: 'Dubai (UAE)', line: 'UK-accredited qualifications in a global city', image: '/images/dubai.jpg', alt: 'Dubai skyline reflected in water', facts: ['UK-accredited qualifications'], universities: [{ abbr: 'NAME', name: 'NAME — Nest Academy of Management Education', place: 'Dubai, UAE' }] },
  { slug: 'south-korea', name: 'South Korea', line: 'Modern campuses, world-class technology', image: '/images/south-korea.jpg', alt: 'Modern university campus in South Korea', facts: ['Technology-led campuses'], universities: [{ abbr: 'NSU', name: 'Namseoul University', place: 'South Korea' }] },
  { slug: 'china', name: 'China', line: 'Respected universities at an affordable cost', image: '/images/china.jpg', alt: 'University entrance in China', facts: ['Affordable tuition'], universities: [{ abbr: 'HEBUT', name: 'Hebei University of Technology', place: 'Tianjin, China' }] },
  { slug: 'malaysia', name: 'Malaysia', line: 'Affordable study in a multicultural hub', image: '/images/malaysia.jpg', alt: 'Kuala Lumpur skyline and park', facts: ['Multicultural hub'], universities: [] },
  { slug: 'ukraine', name: 'Ukraine', line: 'English-taught medicine and health sciences', image: '/images/ukraine.jpg', alt: 'City view in Ukraine at sunset', facts: ['English-taught medicine'], universities: [{ abbr: 'KhNMU', name: 'Kharkiv National Medical University', place: 'Kharkiv, Ukraine' }, { abbr: 'SumDU', name: 'Sumy State University', place: 'Sumy, Ukraine' }] },
  { slug: 'russia', name: 'Russia', line: 'Established universities, low tuition', image: '/images/russia.jpg', alt: 'University building in Russia', facts: ['Low tuition'], universities: [] },
];

export const getDestination = (slug: string | null) => destinations.find((d) => d.slug === slug) ?? destinations[0];

export const requiredDocuments = [
  'Passport photograph',
  'Copy of a valid passport',
  'Copy of a valid visa (if applicable)',
  'Health records (medicals)',
  'School certificate (WASSCE)',
  'Transcript from your last school',
  'Proof of funds for your studies',
];

export const applySteps = [
  { title: 'Book a counselling session', text: 'We review your results and goals and shortlist courses.' },
  { title: 'Submit your application', text: 'We prepare your documents and apply to your chosen universities.' },
  { title: 'Receive your offer', text: 'Accept your letter of acceptance and pay your deposit.' },
  { title: 'Visa & departure', text: 'We guide your visa application and pre-departure briefing.' },
];

export const partners = [
  { name: 'University of Manitoba', country: 'Canada' },
  { name: 'The King’s University', country: 'Canada' },
  { name: 'Kwantlen Polytechnic University', country: 'Canada' },
  { name: 'University of Northern British Columbia', country: 'Canada' },
  { name: 'University of Bolton', country: 'United Kingdom' },
  { name: 'Limerick Institute of Technology', country: 'Ireland' },
  { name: 'NAME — Nest Academy of Management Education', country: 'Dubai (UAE)' },
  { name: 'Namseoul University', country: 'South Korea' },
  { name: 'Hebei University of Technology', country: 'China' },
  { name: 'Kharkiv National Medical University', country: 'Ukraine' },
  { name: 'Sumy State University', country: 'Ukraine' },
];

export const faqs = [
  { q: 'Why study abroad?', a: 'Learning in another culture, inside a cosmopolitan community, is a powerful experience. You gain a globally recognised qualification, modern facilities and a network that lasts your whole career.' },
  { q: 'How do I get started?', a: 'Book a consultation with one of our advisors — at our Kaneshie office or by phone. We review your results, interests and budget, then shortlist courses and universities that fit.' },
  { q: 'What happens after I get my acceptance letter?', a: 'We move straight to your student visa: document checks, the application itself and interview preparation. Then we help with travel and give you a pre-departure briefing.' },
  { q: 'Can I work while studying abroad?', a: 'It depends on the country and your visa conditions. We explain the rules for your chosen destination before you apply, so you can plan your finances properly.' },
  { q: 'Are there scholarships available?', a: 'Some partner universities offer scholarships and tuition discounts for international students. We tell you which ones you may qualify for when we shortlist your options.' },
];

export const team = [
  { name: 'Alexander S.', role: 'Founder & CEO', initials: 'AS', bg: '#1B2A7A' },
  { name: 'Rosemary A.', role: 'Manager', initials: 'RA', bg: '#C8261C' },
  { name: 'Berlinda', role: 'Marketing', initials: 'B', bg: '#0E1B4D' },
  { name: 'Raphael Q.', role: 'Operations', initials: 'RQ', bg: '#2E3F9E' },
];
