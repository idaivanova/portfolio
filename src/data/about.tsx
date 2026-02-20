// ============================================
// About Me Page Data
// All content data for the About Me page
// ============================================

// Hero Section - Image Collage
export const heroData = {
  images: [
    {
      src: '/assets/about/placeholder.svg',
      alt: 'Personal Photo 1',
      position: { left: 2.09, top: 104.57, width: 365.83, height: 365.83, rotate: -14.57 },
    },
    {
      src: '/assets/about/placeholder.svg',
      alt: 'Personal Photo 2',
      position: { left: 192.5, top: 40, width: 229, height: 229, rotate: 0 },
    },
    {
      src: '/assets/about/placeholder.svg',
      alt: 'Personal Photo 3',
      position: { left: 367.5, top: 15, width: 313.76, height: 313.76, rotate: 17.56 },
    },
    {
      src: '/assets/about/placeholder.svg',
      alt: 'Personal Photo 4',
      position: { left: 477.5, top: 133.3, width: 466.45, height: 466.45, rotate: -6.44 },
    },
    {
      src: '/assets/about/placeholder.svg',
      alt: 'CV Photo',
      position: { left: 299.5, top: 249, width: 278, height: 278, rotate: 4.17 },
    },
  ],
  floatingTags: [
    { label: 'Plants lover', position: { left: 663.5, top: 127 }, variant: 'default' as const },
    { label: 'Team Player', position: { left: 574.5, top: 458 }, variant: 'default' as const },
    { label: 'II', position: { left: 555.5, top: 251 }, variant: 'bordered' as const },
    { label: 'EU Volunteer', position: { left: 59.5, top: 96 }, variant: 'default' as const },
    { label: 'Creative thinker', position: { left: 162.5, top: 419 }, variant: 'accent' as const },
  ],
  intro: {
    title: "Hi, I'm Ida. I like smart design, plants, art and other funny and silly stuff.",
    subtitle: "Your favourite Teams pause button has arrived!",
  },
  cvButton: {
    label: 'Download my CV',
    href: '#cv',
  },
};

// Experience Section
export const experienceData = {
  title: 'Experience',
  sections: [
    {
      title: 'Companies',
      logos: [
        { src: '/assets/logos/placeholder.svg', alt: 'Company 1', width: 169, height: 58 },
        { src: '/assets/logos/placeholder.svg', alt: 'Trifork', width: 191, height: 20 },
        { src: '/assets/logos/placeholder.svg', alt: 'SIA Connect', width: 86, height: 86 },
        { src: '/assets/logos/placeholder.svg', alt: 'Company 4', width: 63, height: 63 },
        { src: '/assets/logos/placeholder.svg', alt: 'Company 5', width: 142, height: 48 },
      ],
    },
    {
      title: 'Freelance Clients',
      logos: [
        { src: '/assets/logos/placeholder.svg', alt: 'Client 1', width: 206.5, height: 39, isSvg: true },
        { src: '/assets/logos/placeholder.svg', alt: 'Client 2', width: 216, height: 26, isSvg: true },
        { src: '/assets/logos/placeholder.svg', alt: 'Client 3', width: 72, height: 72 },
        { src: '/assets/logos/placeholder.svg', alt: 'Client 4', width: 65, height: 62 },
        { src: '/assets/logos/placeholder.svg', alt: 'Client 5', width: 147, height: 45 },
        { src: '/assets/logos/placeholder.svg', alt: 'Client 6', width: 63, height: 63 },
      ],
    },
    {
      title: 'Education',
      entries: [
        {
          degree: 'MSc in IT - Web Communication Design',
          school: 'Southern University of Denmark, 2023',
        },
        {
          degree: 'BA in Digital Concept Development',
          school: 'Business Academy Aarhus, 2021',
        },
      ],
    },
  ],
};

// Keywords Section
export const keywordsData = {
  title: 'Keywords',
  categories: [
    {
      title: 'Industries',
      icon: 'I',
      tags: [
        'Enterprise Software',
        'IIoT',
        'Business Process Optimization',
        'Sports Data',
        'Education',
        'Advertising',
      ],
    },
    {
      title: 'Domains / Solutions',
      icon: null,
      tags: [
        'B2B SaaS Product Design',
        'Complex Enterprise Application',
        'Developer-Facing API Dashboards',
        'Project Management & Quality Management Systems',
        'B2B website',
        'B2B webshop',
        'B2B & B2C website',
      ],
    },
    {
      title: 'Core UX Areas',
      icon: null,
      tags: [
        'Iterative Design Process',
        'Design Systems',
        'User Flows',
        'Information Architecture',
        'UX Research',
        'Persona Development',
        'Accessibility',
        'Interdisciplinary Insight Mapping',
      ],
    },
  ],
};

// CTA Section (Sidebar)
export const ctaData = {
  text: 'Want to discuss future projects over a lemonade?',
  link: {
    label: "Let's talk",
    href: 'mailto:ivanova.contact@gmail.com',
  },
};
