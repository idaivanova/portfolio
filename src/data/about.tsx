// ============================================
// About Me Page Data
// All content data for the About Me page
// ============================================

// Hero Section - Image Collage
export const heroData = {
  images: [
    {
      src: 'http://localhost:3845/assets/b5fb895bc3b36a7d6fbd203eeaf342128a36d0ec.png',
      alt: 'Personal Photo 1',
      position: { left: 2.09, top: 104.57, width: 365.83, height: 365.83, rotate: -14.57 },
    },
    {
      src: 'http://localhost:3845/assets/95c167700bacf3c3faa15342e21fd4a852203978.png',
      alt: 'Personal Photo 2',
      position: { left: 192.5, top: 40, width: 229, height: 229, rotate: 0 },
    },
    {
      src: 'http://localhost:3845/assets/f9aaf9cd25a3bedee8c1bfeb0fa4f55440a35d1e.png',
      alt: 'Personal Photo 3',
      position: { left: 367.5, top: 15, width: 313.76, height: 313.76, rotate: 17.56 },
    },
    {
      src: 'http://localhost:3845/assets/28f25f53c953a2990f911108fafca73a55a2cb9a.png',
      alt: 'Personal Photo 4',
      position: { left: 477.5, top: 133.3, width: 466.45, height: 466.45, rotate: -6.44 },
    },
    {
      src: 'http://localhost:3845/assets/865e8b0dc5a7ca19a341ee5b707c8cfa3c4fd285.png',
      alt: 'CV Photo',
      position: { left: 299.5, top: 249, width: 278, height: 278, rotate: 4.17 },
    },
  ],
  floatingTags: [
    { label: 'Plants lover', position: { left: 663.5, top: 127 }, variant: 'default' },
    { label: 'Team Player', position: { left: 574.5, top: 458 }, variant: 'default' },
    { label: 'II', position: { left: 555.5, top: 251 }, variant: 'bordered' },
    { label: 'EU Volunteer', position: { left: 59.5, top: 96 }, variant: 'default' },
    { label: 'Creative thinker', position: { left: 162.5, top: 419 }, variant: 'accent' },
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
        { src: 'http://localhost:3845/assets/32b21d75fbf6b4138e4a415282cc7bc750de7e07.png', alt: 'Company 1', width: 169, height: 58 },
        { src: 'http://localhost:3845/assets/c128bc5487aa62ba1e89b40546e29c02bddadfe3.png', alt: 'Trifork', width: 191, height: 20 },
        { src: 'http://localhost:3845/assets/752d1b313efd9f317b5774b4ac37e29ff8d644c1.png', alt: 'SIA Connect', width: 86, height: 86 },
        { src: 'http://localhost:3845/assets/bb18348aed4b5323f895ce76148db3cb5bdd76cb.png', alt: 'Company 4', width: 63, height: 63 },
        { src: 'http://localhost:3845/assets/9ea1cde7eac361cb6ae3ba07a831d4600a3a4219.png', alt: 'Company 5', width: 142, height: 48 },
      ],
    },
    {
      title: 'Freelance Clients',
      logos: [
        { src: 'http://localhost:3845/assets/91f1b0e618b19d825fb07d102eace8557ffe9e3d.svg', alt: 'Client 1', width: 206.5, height: 39, isSvg: true },
        { src: 'http://localhost:3845/assets/c1df29583d15415a14116c23d755f6ddc3198028.svg', alt: 'Client 2', width: 216, height: 26, isSvg: true },
        { src: 'http://localhost:3845/assets/279db3390b167d9527af295d6bbd83352736d089.png', alt: 'Client 3', width: 72, height: 72 },
        { src: 'http://localhost:3845/assets/b485b0fc8784a1d61fa76662c3a69baf32127de6.png', alt: 'Client 4', width: 65, height: 62 },
        { src: 'http://localhost:3845/assets/a996f55fa1b8ccf32eb110313e5a442adcdc5fa3.png', alt: 'Client 5', width: 147, height: 45 },
        { src: 'http://localhost:3845/assets/bb18348aed4b5323f895ce76148db3cb5bdd76cb.png', alt: 'Client 6', width: 63, height: 63 },
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
