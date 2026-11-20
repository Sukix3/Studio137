// All the words on the site live here. Edit freely.
// Colours: orange, lilac, green, blush, magenta (defined in styles.css).

export const site = {
  name: 'Studio 137',
  headlineStart: 'Good ideas,',
  headlineEnd: 'brought to life',
  intro:
    'Studio 137 helps founders and teams find the idea worth backing, design the moments that bring it to life, and get it in front of the right people.',
  email: 'nataliepeire@gmail.com',
}

export const about = {
  name: 'Natalie Peire',
  paragraphs: [
    'Hi, I’m Natalie. I’ve spent over a decade across data analytics, start-ups and leadership, and my path has been anything but traditional: from growing a health tech start-up to building an international self-development retreat centre in Brazil.',
    'By day I’m a Senior Account Manager at Datatonic, Google Cloud’s premier partner in Data & AI, helping enterprise clients in insurance, financial services and retail turn AI and data into measurable results. Studio 137 is where I bring the whole mix together: strategy, experiences that move people, and launches that land.',
  ],
  strengths: [
    { title: 'People first', text: 'Trusted relationships, from the team on the ground to the C-suite.', color: 'orange' },
    { title: 'Clear business value', text: 'Turning complexity into plans and outcomes everyone can get behind.', color: 'lilac' },
    { title: 'Start-up mindset', text: 'Energised by pace, ambiguity and the challenge of growth.', color: 'green' },
    { title: 'Listen first', text: 'Find the real problem before designing the answer. If we’re not a fit, I’ll tell you.', color: 'blush' },
  ],
  outside:
    'Away from work you’ll find me hiking, swimming or at the piano. I’ve recently taken up sculpting, though Michelangelo has nothing to worry about just yet.',
}

export const services = [
  {
    id: 'creative-strategy',
    title: 'Creative Strategy',
    color: 'orange',
    summary:
      'Finding the idea your brand can own, and turning it into a plan your team can act on.',
    includes: ['Brand positioning', 'Campaign and content concepts', 'Narrative and messaging'],
  },
  {
    id: 'experience-design',
    title: 'Experience & Workshop Design',
    color: 'lilac',
    summary:
      'Sessions, events and customer journeys designed so people leave thinking and acting differently.',
    includes: ['Facilitated strategy workshops', 'Retreats and offsites', 'Customer experience mapping'],
  },
  {
    id: 'gtm-partnerships',
    title: 'GTM and Partnership Strategy',
    color: 'green',
    summary:
      'Getting the right offer in front of the right audience, with partners who extend your reach.',
    includes: ['Launch and go-to-market plans', 'Audience and channel strategy', 'Partner sourcing and deal shaping'],
  },
]

// NOTE: the "approach" and "result" details below are EXAMPLE PLACEHOLDERS.
// Replace them with your real work and real figures before sharing the site.
export const cases = [
  {
    client: 'Wellness Centre, Brazil',
    sector: 'Hospitality and wellness',
    color: 'green',
    challenge:
      'A newly opened retreat centre was full at weekends but empty midweek. Guests saw it as a day spa rather than a destination.',
    approach:
      'Repositioned the centre around immersive multi-day programmes, designed a signature three-day retreat format, and built partnerships with local practitioners to deliver it.',
    result:
      'Midweek occupancy rose by 40% in six months, and the signature retreat became the best-selling package.',
  },
  {
    client: 'Relationship E-Learning App',
    sector: 'Consumer EdTech',
    color: 'blush',
    challenge: 'Strong expert content, but most users dropped off after the first lesson.',
    approach:
      'Ran co-design workshops with couples using the app, reshaped the learning path into short shared challenges, and rewrote onboarding around what couples wanted to work on.',
    result: 'Four-week retention doubled and the app store rating climbed from 3.9 to 4.6.',
  },
  {
    client: 'GTM for an Independent Film',
    sector: 'Film and entertainment',
    color: 'magenta',
    challenge:
      'A feature film with a strong festival response but no distributor and a small marketing budget.',
    approach:
      'Mapped the core audiences, planned a community screening tour alongside festival dates, and secured brand partners for co-marketing.',
    result: 'Sold-out screenings in 12 cities created the momentum that led to a distribution deal.',
  },
  {
    client: 'Health Start-up Advisory',
    sector: 'Digital health',
    color: 'orange',
    challenge:
      'An early-stage team with a promising product and too many possible markets to chase at once.',
    approach:
      'Led positioning workshops with the founders, chose a first market to win, and built a pipeline of clinic partners.',
    result: 'A sharper proposition for the seed round and three clinic pilots signed.',
  },
]
