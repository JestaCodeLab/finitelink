/**
 * Insights (blog) content.
 *
 * To add a post: append an object to `posts` (newest first). It gets its own page at
 * /insights/<slug>, a card on /insights, and a sitemap entry automatically. Put images in
 * public/images/insights/ and reference them as "/images/insights/<file>".
 */
export type ListItem = string | { label: string; text: string };

export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: ListItem[] }
  | { type: 'ol'; items: ListItem[] }
  | { type: 'img'; src: string; alt: string }
  | { type: 'note'; text: string };

export interface Post {
  slug: string;
  title: string;
  category: string;
  /** ISO date (YYYY-MM-DD). TODO(content): confirm real publish dates. */
  date: string;
  readMinutes: number;
  /** Used on cards and as the article intro. */
  excerpt: string;
  /** Search-result title (≤ ~60 chars; the brand is appended if it fits) and meta description (≤ 160). */
  seoTitle: string;
  seoDescription: string;
  cover: { src: string; alt: string };
  body: Block[];
}

export const posts: Post[] = [
  {
    slug: 'career-counseling-first-step-to-studying-abroad',
    title: 'Your First Step Abroad: Why Career Counseling Is the Key to a Successful Study Journey',
    category: 'Career counseling',
    date: '2026-11-10',
    readMinutes: 3,
    excerpt:
      'Studying abroad doesn’t start with an application — it starts with a conversation about your future. Here’s how career counseling turns your aspirations into a clear roadmap.',
    seoTitle: 'Why Career Counseling Is the First Step Abroad',
    seoDescription: 'Studying abroad starts with a conversation, not an application. See how career counseling turns your goals into a clear roadmap.',
    cover: { src: '/images/insights/career-counselling-cover.jpg', alt: 'Three students looking at a tablet and books together outside a university building' },
    body: [
      { type: 'p', text: 'Many students dream of studying abroad but feel overwhelmed by the first step: choosing the right programme and destination. At Finite Link Consult, we believe the journey doesn’t start with an application — it starts with a conversation about your future. Our foundational career counseling service is designed to transform your aspirations into a clear, actionable roadmap for international success.' },
      { type: 'p', text: 'Just as we say, “The process actually begins with career counseling.” This is our core philosophy. Studying abroad is a significant investment in your lifetime, not just an academic expense. Choosing a course simply because it’s popular, or a country on a whim, can lead to mismatched expectations. Our expert counselors work with you to:' },
      {
        type: 'ul',
        items: [
          'Align your academic interests with global career opportunities.',
          'Evaluate your profile (academic background, skills, goals) against suitable countries and universities.',
          'Decode complex choices between destinations like the UK, Canada, Malaysia or South Korea, focusing on which offers the best pathway for your specific field.',
        ],
      },
      { type: 'img', src: '/images/insights/career-counselling-advisers.jpg', alt: 'A student and an adviser reviewing notes together while other students chat behind them' },
      { type: 'h2', text: 'Why it matters for Ghanaian students' },
      { type: 'p', text: 'For students in Ghana, an international education is a gateway to a modern, cosmopolitan worldview and advanced facilities. A strategic choice ensures you gain not just a degree, but a competitive edge in the global job market. We help you see beyond the brochure to find a programme that truly fits your ambition.' },
      { type: 'p', text: 'Ready to move from dream to plan? Don’t just pick a destination — build a future. Contact us today for a personalized career counseling session, and let’s lay the first, most important brick in your study abroad journey.' },
    ],
  },
  {
    slug: 'beyond-the-visa-preparing-for-life-as-an-international-student',
    title: 'Beyond the Visa: How to Truly Prepare for Life as an International Student',
    category: 'Student life',
    date: '2026-11-06',
    readMinutes: 3,
    excerpt:
      'Securing a study visa is a monumental achievement, but it’s just the ticket to your adventure. Real preparation means getting ready for a new academic and cultural environment.',
    seoTitle: 'How to Prepare for Life as an International Student',
    seoDescription: 'A study visa is only the ticket. Learn how to prepare for academic life, culture and practical logistics as an international student.',
    cover: { src: '/images/insights/beyond-the-visa-cover.jpg', alt: 'Two passports on a desk next to a map and a pair of glasses' },
    body: [
      { type: 'p', text: 'Securing a study visa is a monumental achievement, but it’s just the ticket to your adventure. Real preparation involves getting ready for life in a new academic and cultural environment. At Finite Link Consult, our support extends far beyond visa processing. We equip you with the vital tools to thrive, not just arrive.' },
      { type: 'h2', text: 'The Finite Link advantage' },
      { type: 'p', text: 'As your comprehensive consultant in Ghana, our role is holistic. While we expertly guide you through the essential documents required by embassies, our true value lies in preparing you for success. We help you understand:' },
      {
        type: 'ul',
        items: [
          { label: 'Academic expectations', text: 'The teaching style, assessment methods and independent study culture in your chosen country (for example, the UK vs. South Korea).' },
          { label: 'Cultural integration', text: 'Tips on adapting to a new social environment, from weather and food to local customs and making connections.' },
          { label: 'Practical logistics', text: 'Insights on accommodation, budgeting and accessing student support services abroad.' },
        ],
      },
      { type: 'img', src: '/images/insights/beyond-the-visa-library.jpg', alt: 'Three students working together on a laptop in a university library' },
      { type: 'h2', text: 'Leveraging our network' },
      { type: 'p', text: 'With over 10 years of experience, 500+ successful admissions, and direct representation of overseas universities, we offer insider knowledge. We connect you with a community of past students and provide honest insights about your destinations — from the vibrant cities of Canada and Ireland to the emerging hubs in Dubai and Malaysia.' },
      { type: 'p', text: 'Your education is an investment where the “return comes over a lifetime.” Maximize that return by being fully prepared. Schedule a consultation with Finite Link Consult to get your visa and the confidence to excel in your new international life.' },
    ],
  },
  {
    slug: 'scholarships-and-affordable-study-destinations',
    title: 'Unlocking Opportunities: A Guide to Scholarships and Affordable Study Destinations',
    category: 'Scholarships & funding',
    date: '2026-11-03',
    readMinutes: 3,
    excerpt:
      '“Is studying abroad affordable?” It’s the question we hear most. With strategic planning, scholarships and cost-effective destinations, a global degree is within reach.',
    seoTitle: 'Scholarships and Affordable Study Destinations',
    seoDescription: 'Is studying abroad affordable? Explore scholarships, lower-cost destinations like Malaysia and Ukraine, and countries where students can work part-time.',
    cover: { src: '/images/insights/scholarships-cover.jpg', alt: 'A smiling student holding notebooks while classmates study at a table behind her' },
    body: [
      { type: 'p', text: '“Is studying abroad affordable?” This is one of the most common questions we hear. The answer is a resounding yes, especially with strategic planning. Finite Link Consult is committed to making world-class education accessible. With various scholarships and a range of cost-effective destinations, your global degree is within reach.' },
      { type: 'h2', text: 'Demystifying scholarships' },
      { type: 'p', text: 'The landscape of international scholarships can seem complex, but opportunities are abundant. We specialize in navigating this terrain for Ghanaian students. Whether it’s merit-based awards, country-specific funding, or university grants for programmes in destinations like China, Russia or Ukraine, we help you identify and apply for financial aid that matches your profile.' },
      { type: 'h2', text: 'Exploring value-centric destinations' },
      { type: 'p', text: 'Affordability isn’t just about scholarships; it’s also about choosing a destination with a favorable cost of living and tuition. We provide detailed comparisons to help you consider:' },
      {
        type: 'ul',
        items: [
          { label: 'High-quality, lower-cost education', text: 'Countries like Malaysia and Ukraine offer excellent, internationally recognized degrees at a fraction of the cost.' },
          { label: 'Countries with work opportunities', text: 'Destinations like Canada and Ireland allow students to work part-time, helping to manage living expenses.' },
          { label: 'Emerging educational hubs', text: 'Dubai and South Korea blend modern innovation with unique scholarship programmes for international students.' },
        ],
      },
      { type: 'img', src: '/images/insights/scholarships-globe.jpg', alt: 'A world globe with a pin marking a location in Europe' },
      { type: 'h2', text: 'Your next step' },
      { type: 'p', text: 'Don’t let budget concerns stall your ambition. As comprehensive consultants, we turn “maybe” into “how.” Reach out to Finite Link Consult with your academic details and preferred country. Let us analyze your options for scholarships and affordable pathways, turning your dream of studying abroad into a viable, exciting plan.' },
    ],
  },
  {
    slug: 'safest-study-abroad-destinations',
    title: 'Safety First: Choosing the Most Secure Destinations for Your Study Abroad Journey',
    category: 'Choosing a destination',
    date: '2026-10-30',
    readMinutes: 4,
    excerpt:
      'Safety is a top concern for students and their families. Here are countries that consistently rank high for safety and welcome international students — and what “safe” really means.',
    seoTitle: 'Safest Countries for International Students',
    seoDescription: 'Which countries are safest for international students? Compare Canada, Ireland, Malaysia and South Korea, and learn what “safe” really means.',
    cover: { src: '/images/insights/safe-destinations-cover.jpg', alt: 'A group of six international students walking together along a tree-lined path' },
    body: [
      { type: 'p', text: 'When you decide to study abroad, safety becomes a top concern for both students and their families. It’s natural to ask: “Which countries are the safest for international students?” At Finite Link Consult, we prioritize your peace of mind. Based on global peace indexes, student testimonials and our decade of experience, we guide you toward some of the world’s most secure and welcoming study destinations.' },
      { type: 'h2', text: 'Our top picks for safe and welcoming countries' },
      { type: 'p', text: 'Some countries consistently rank high for safety, quality of life and inclusive environments for international students. These include:' },
      {
        type: 'ul',
        items: [
          { label: 'Canada', text: 'Renowned for its multiculturalism, political stability and high quality of life. Canadian cities are regularly ranked among the world’s safest and most livable.' },
          { label: 'Ireland', text: 'Known for its friendly community and low crime rates. Ireland offers a tranquil, English-speaking environment that is highly welcoming to international students.' },
          { label: 'Malaysia', text: 'A popular choice in Asia, Malaysia is known for its political stability, affordable living, and campuses with excellent safety protocols and student support systems.' },
          { label: 'South Korea', text: 'Offers incredibly safe cities with efficient public systems. Universities provide robust on-campus security and support services specifically for international students.' },
        ],
      },
      { type: 'img', src: '/images/insights/safe-destinations-students.jpg', alt: 'Three students standing together with their arms around each other in a university corridor' },
      { type: 'h2', text: 'Beyond crime rates: what makes a country “safe” for students?' },
      { type: 'p', text: 'True safety encompasses more than just low crime statistics. We help you evaluate:' },
      {
        type: 'ul',
        items: [
          { label: 'Political and social stability', text: 'A stable environment is crucial for focusing on your studies.' },
          { label: 'Quality of student support services', text: 'Access to international student offices, health services and legal assistance.' },
          { label: 'Community attitudes', text: 'A welcoming, non-discriminatory society helps you feel at home.' },
          { label: 'Our on-the-ground network', text: 'As representatives of overseas universities, we have direct insights into campus life and local conditions, providing you with honest, up-to-date advice.' },
        ],
      },
      { type: 'p', text: 'Your safety is non-negotiable. Let us match you with a destination where you can thrive with confidence. Contact Finite Link Consult today to discuss the safest study options that align perfectly with your academic and personal goals.' },
    ],
  },
  {
    slug: 'high-demand-courses-we-secure-admissions-for',
    title: 'From Vision to Career: High-Demand Courses We Secure Admissions For',
    category: 'Courses & admissions',
    date: '2026-10-27',
    readMinutes: 3,
    excerpt:
      'Choosing the right course is as critical as choosing the right country. Here is how we turn your eligibility into an offer for a programme that launches your career.',
    seoTitle: 'High-Demand Courses We Secure Admissions For',
    seoDescription: 'Choosing the right course matters as much as the country. See how we match your profile, strengthen your application and manage deadlines.',
    cover: { src: '/images/insights/high-demand-courses-cover.jpg', alt: 'Graduates in gowns holding rolled diplomas tied with red ribbons' },
    body: [
      { type: 'p', text: 'Choosing the right course is as critical as choosing the right country. It’s the bridge between your study abroad investment and a successful global career. At Finite Link Consult, with over 500 successful admissions, we have a proven track record of securing placements in programmes that are not only prestigious but also aligned with future job markets. Here’s a look at some of the high-demand fields we specialize in.' },
      { type: 'h2', text: 'How we turn your eligibility into an offer' },
      { type: 'p', text: 'Our process is tailored and strategic. After initial career counseling, we:' },
      {
        type: 'ol',
        items: [
          { label: 'Match your profile', text: 'We analyze your academic background and align it with university entry requirements across our network.' },
          { label: 'Strengthen your application', text: 'We help you prepare a compelling application — from statement of purpose to recommendation letters — that highlights your potential.' },
          { label: 'Navigate deadlines and requirements', text: 'We manage the complex timelines and specific documentation needed for different courses and countries, maximizing your chance of acceptance.' },
        ],
      },
      { type: 'p', text: 'Don’t just get admission — get admission into a course that launches your career. Share your academic background and aspirations with Finite Link Consult. Let’s work together to secure your place in a programme that turns your study abroad vision into a thriving professional reality.' },
    ],
  },
];

export const getPost = (slug: string | undefined) => posts.find((p) => p.slug === slug);

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
