export type Language = 'en' | 'de' | 'bg' | 'da';

export const defaultLanguage: Language = 'en';

export const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'bg', name: 'Български', flag: '🇧🇬' },
  { code: 'da', name: 'Dansk', flag: '🇩🇰' },
];

export interface Translations {
  nav: {
    home: string;
    about: string;
    projects: string;
    contact: string;
  };
  hero: {
    heading: string;
    subheading: string;
    skills: string[];
    viewProjects: string;
    getInTouch: string;
  };
  stats: {
    heading: string;
    subheading: string;
    yearsExperience: string;
    projectsCompleted: string;
    industriesServed: string;
    clientSatisfaction: string;
  };
  features: {
    heading: string;
    subheading: string;
    caseStudies: {
      pimcore: { title: string; description: string; cta: string; category: string };
      ergowork: { title: string; description: string; cta: string; category: string };
      dermatik: { title: string; description: string; cta: string; category: string };
      buzz: { title: string; description: string; cta: string; category: string };
      flutter: { title: string; description: string; cta: string; category: string };
    };
    playground: {
      heading: string;
      subheading: string;
      buzzHQ: { title: string; description: string; cta: string; category: string };
      flutterFields: { title: string; description: string; cta: string; category: string };
    };
  };
  cta: {
    heading: string;
    subheading: string;
    getInTouch: string;
    viewResume: string;
  };
  common: {
    viewProject: string;
    learnMore: string;
    backToHome: string;
    getInTouch: string;
    letsWorkTogether: string;
    linkedIn: string;
  };
  caseStudy: {
    role: string;
    tools: string;
    team: string;
    duration: string;
    overview: string;
    challenge: string;
    solution: string;
    results: string;
    nextProject: string;
    previousProject: string;
  };
  footer: {
    contactHeading: string;
    navigationHeading: string;
    projectsHeading: string;
    linksHeading: string;
    getInTouch: string;
    letsWorkTogether: string;
    email: string;
    phone: string;
    website: string;
    experiments: string;
    allRightsReserved: string;
    ctaHeading: string;
    ctaSubheading: string;
    ctaGetInTouch: string;
    ctaViewProjects: string;
    personalWebsite: string;
    uxDesignerBasedIn: string;
  };
}

const en: Translations = {
  nav: {
    home: 'HOME',
    about: 'ABOUT',
    projects: 'PROJECTS',
    contact: 'CONTACT',
  },
  hero: {
    heading: "Hey there! I'm Ida, a designer with experience across diverse industries",
    subheading: 'Senior UX/UI Designer',
    skills: ['User Interface Design', 'User Experience Design', 'Design Systems'],
    viewProjects: 'View My Projects',
    getInTouch: 'Get in Touch',
  },
  stats: {
    heading: 'Trusted by teams worldwide',
    subheading: 'Delivering exceptional design solutions across diverse industries',
    yearsExperience: 'Years Experience',
    projectsCompleted: 'Projects Completed',
    industriesServed: 'Industries Served',
    clientSatisfaction: 'Client Satisfaction',
  },
  features: {
    heading: 'Featured work',
    subheading: 'A selection of projects across different industries and design challenges',
    caseStudies: {
      pimcore: {
        title: 'Pimcore Platform',
        description: 'Enterprise PIM platform redesign for a global tech company. Streamlined complex workflows and improved user efficiency by 40%.',
        cta: 'View Case Study',
        category: 'B2B SaaS',
      },
      ergowork: {
        title: 'ErgoWork',
        description: 'Ergonomics platform for workplace wellness. Designed an intuitive B2B platform helping businesses create healthier workspaces.',
        cta: 'View Case Study',
        category: 'B2B Platform',
      },
      dermatik: {
        title: 'Dermatik',
        description: 'Healthcare app for dermatology patients. Created accessible, patient-centered experiences focused on clarity and compliance.',
        cta: 'View Case Study',
        category: 'Healthcare',
      },
      buzz: {
        title: 'Buzz: Bumblebee Conservation',
        description: 'A playful UX experiment making environmental conservation adorable through gamification and character-driven design.',
        cta: 'Meet Buzz',
        category: 'Mobile App',
      },
      flutter: {
        title: 'Flutter: Motion Design',
        description: 'Whimsical UX experiment showcasing playful motion design. Every interaction flutters with nature-inspired animations.',
        cta: 'Explore Flutter',
        category: 'Motion Design',
      },
    },
    playground: {
      heading: 'UX Playground',
      subheading: 'Experimental projects exploring innovative interaction patterns',
      buzzHQ: {
        title: 'Buzz HQ',
        description: "Experimental playground! A cursor-following bumblebee that investigates, pollinates, and lands on UI elements. UX research meets playful interaction.",
        cta: 'Meet Bella',
        category: 'UX Lab',
      },
      flutterFields: {
        title: 'Flutter Fields',
        description: 'Motion design experiments exploring butterfly-inspired animations, physics-based interactions, and delightful micro-movements.',
        cta: 'Explore Motion',
        category: 'UX Lab',
      },
    },
  },
  cta: {
    heading: "Let's work together",
    subheading: "Have a project in mind? I'm always excited to discuss new opportunities and challenges in UX/UI design.",
    getInTouch: 'Get in touch',
    viewResume: 'View resume',
  },
  common: {
    viewProject: 'View Project',
    learnMore: 'Learn More',
    backToHome: 'Back to Home',
    getInTouch: 'Get in touch',
    letsWorkTogether: "Let's work together",
    linkedIn: 'LinkedIn',
  },
  caseStudy: {
    role: 'Role',
    tools: 'Tools',
    team: 'Team',
    duration: 'Duration',
    overview: 'Overview',
    challenge: 'Challenge',
    solution: 'Solution',
    results: 'Results',
    nextProject: 'Next Project',
    previousProject: 'Previous Project',
  },
  footer: {
    contactHeading: 'Contact',
    navigationHeading: 'Navigation',
    projectsHeading: 'Projects',
    linksHeading: 'Links',
    getInTouch: 'Get in touch',
    letsWorkTogether: "Let's work together",
    email: 'Email',
    phone: 'Phone',
    website: 'Website',
    experiments: 'Experiments',
    allRightsReserved: 'All rights reserved',
    ctaHeading: "Let's work together",
    ctaSubheading: 'Have a project in mind? Let\'s discuss how I can help bring your ideas to life.',
    ctaGetInTouch: 'Get in Touch',
    ctaViewProjects: 'View Projects',
    personalWebsite: 'Personal Website',
    uxDesignerBasedIn: 'UX/UI Designer based in Austria',
  },
};

const de: Translations = {
  nav: {
    home: 'STARTSEITE',
    about: 'ÜBER MICH',
    projects: 'PROJEKTE',
    contact: 'KONTAKT',
  },
  hero: {
    heading: 'Hallo! Ich bin Ida, eine Designerin mit Erfahrung in verschiedenen Branchen',
    subheading: 'Senior UX/UI Designerin',
    skills: ['UI-Design', 'UX-Design', 'Design-Systeme'],
    viewProjects: 'Meine Projekte',
    getInTouch: 'Kontakt',
  },
  stats: {
    heading: 'Vertraut von Teams weltweit',
    subheading: 'Außergewöhnliche Designlösungen für verschiedene Branchen',
    yearsExperience: 'Jahre Erfahrung',
    projectsCompleted: 'Abgeschlossene Projekte',
    industriesServed: 'Bediente Branchen',
    clientSatisfaction: 'Kundenzufriedenheit',
  },
  features: {
    heading: 'Ausgewählte Arbeiten',
    subheading: 'Eine Auswahl von Projekten aus verschiedenen Branchen und Designherausforderungen',
    caseStudies: {
      pimcore: {
        title: 'Pimcore Platform',
        description: 'Neugestaltung einer Enterprise-PIM-Plattform für ein globales Tech-Unternehmen. Optimierte komplexe Workflows und verbesserte Benutzereffizienz um 40%.',
        cta: 'Case Study ansehen',
        category: 'B2B SaaS',
      },
      ergowork: {
        title: 'ErgoWork',
        description: 'Ergonomie-Plattform für Arbeitsplatzwohlbefinden. Entwarf eine intuitive B2B-Plattform, die Unternehmen hilft, gesündere Arbeitsplätze zu gestalten.',
        cta: 'Case Study ansehen',
        category: 'B2B Platform',
      },
      dermatik: {
        title: 'Dermatik',
        description: 'Gesundheits-App für Dermatologie-Patienten. Erschuf zugängliche, patientenorientierte Erlebnisse mit Fokus auf Klarheit und Compliance.',
        cta: 'Case Study ansehen',
        category: 'Healthcare',
      },
      buzz: {
        title: 'Buzz: Bumblebee Conservation',
        description: 'Ein verspieltes UX-Experiment, das Umweltschutz durch Gamification und charaktergetriebenes Design niedlich macht.',
        cta: 'Buzz kennenlernen',
        category: 'Mobile App',
      },
      flutter: {
        title: 'Flutter: Motion Design',
        description: 'Verspieltes UX-Experiment, das verspieltes Motion-Design präsentiert. Jede Interaktion flattert mit naturinspirierten Animationen.',
        cta: 'Flutter erkunden',
        category: 'Motion Design',
      },
    },
    playground: {
      heading: 'UX Playground',
      subheading: 'Experimentelle Projekte, die innovative Interaktionsmuster erkunden',
      buzzHQ: {
        title: 'Buzz HQ',
        description: 'Experimenteller Spielplatz! Eine cursor-folgende Hummel, die untersucht, bestäubt und auf UI-Elementen landet. UX-Forschung trifft verspielte Interaktion.',
        cta: 'Bella kennenlernen',
        category: 'UX Lab',
      },
      flutterFields: {
        title: 'Flutter Fields',
        description: 'Motion-Design-Experimente, die schmetterlingsinspirierte Animationen, physikbasierte Interaktionen und entzückende Mikrobewegungen erkunden.',
        cta: 'Motion erkunden',
        category: 'UX Lab',
      },
    },
  },
  cta: {
    heading: 'Gemeinsam arbeiten',
    subheading: 'Haben Sie ein Projekt im Sinn? Ich freue mich immer über neue Möglichkeiten und Herausforderungen im UX/UI-Design.',
    getInTouch: 'Kontakt',
    viewResume: 'Lebenslauf ansehen',
  },
  common: {
    viewProject: 'Projekt ansehen',
    learnMore: 'Mehr erfahren',
    backToHome: 'Zurück zur Startseite',
    getInTouch: 'Kontakt',
    letsWorkTogether: 'Gemeinsam arbeiten',
    linkedIn: 'LinkedIn',
  },
  caseStudy: {
    role: 'Rolle',
    tools: 'Werkzeuge',
    team: 'Team',
    duration: 'Dauer',
    overview: 'Übersicht',
    challenge: 'Herausforderung',
    solution: 'Lösung',
    results: 'Ergebnisse',
    nextProject: 'Nächstes Projekt',
    previousProject: 'Vorheriges Projekt',
  },
  footer: {
    contactHeading: 'Kontakt',
    navigationHeading: 'Navigation',
    projectsHeading: 'Projekte',
    linksHeading: 'Links',
    getInTouch: 'Kontakt',
    letsWorkTogether: 'Gemeinsam arbeiten',
    email: 'E-Mail',
    phone: 'Telefon',
    website: 'Website',
    experiments: 'Experimente',
    allRightsReserved: 'Alle Rechte vorbehalten',
    ctaHeading: 'Gemeinsam arbeiten',
    ctaSubheading: 'Haben Sie ein Projekt im Sinn? Lassen Sie uns besprechen, wie ich Ihnen helfen kann, Ihre Ideen zu verwirklichen.',
    ctaGetInTouch: 'Kontakt',
    ctaViewProjects: 'Projekte ansehen',
    personalWebsite: 'Persönliche Website',
    uxDesignerBasedIn: 'UX/UI Designerin aus Österreich',
  },
};

const bg: Translations = {
  nav: {
    home: 'НАЧАЛО',
    about: 'ЗА МЕН',
    projects: 'ПРОЕКТИ',
    contact: 'КОНТАКТ',
  },
  hero: {
    heading: 'Здравейте! Аз съм Ида, дизайнер с опит в различни индустрии',
    subheading: 'Senior UX/UI Дизайнер',
    skills: ['Дизайн на потребителски интерфейс', 'Дизайн на потребителско изживяване', 'Дизайн системи'],
    viewProjects: 'Моите проекти',
    getInTouch: 'Свържи се с мен',
  },
  stats: {
    heading: 'Доверие от екипи по целия свят',
    subheading: 'Доставяне на изключителни дизайнерски решения в различни индустрии',
    yearsExperience: 'Години опит',
    projectsCompleted: 'Завършени проекти',
    industriesServed: 'Отрасъла',
    clientSatisfaction: 'Удовлетвореност на клиентите',
  },
  features: {
    heading: 'Избрани проекти',
    subheading: 'Подбор от проекти в различни индустрии и дизайнерски предизвикателства',
    caseStudies: {
      pimcore: {
        title: 'Pimcore Platform',
        description: 'Пълна промяна на корпоративна PIM платформа за глобална технологична компания. Оптимизира сложни работни процеси и подобри потребителската ефективност с 40%.',
        cta: 'Виж case study',
        category: 'B2B SaaS',
      },
      ergowork: {
        title: 'ErgoWork',
        description: 'Ергономична платформа за благополучие на работното място. Проектира интуитивна B2B платформа, помагаща на бизнеса да създава по-здрави работни пространства.',
        cta: 'Виж case study',
        category: 'B2B Platform',
      },
      dermatik: {
        title: 'Dermatik',
        description: 'Здравно приложение за дерматологични пациенти. Създадох достъпни, ориентирани към пациента преживявания, фокусирани върху яснотата и съответствието.',
        cta: 'Виж case study',
        category: 'Healthcare',
      },
      buzz: {
        title: 'Buzz: Опазване на пчелите',
        description: 'Забавно UX експеримент, който прави опазването на околната среда очарователно чрез геймификация и дизайн, воден от герои.',
        cta: 'Запознай се с Buzz',
        category: 'Mobile App',
      },
      flutter: {
        title: 'Flutter: Motion Design',
        description: 'Фантастично UX експеримент, показващ игрив motion дизайн. Всяка взаимодействие трепти с анимации, вдъхновени от природата.',
        cta: 'Разгледай Flutter',
        category: 'Motion Design',
      },
    },
    playground: {
      heading: 'UX Playground',
      subheading: 'Експериментални проекти, изследващи иновационни модели на взаимодействие',
      buzzHQ: {
        title: 'Buzz HQ',
        description: 'Експериментална площадка! Пчела, следваща курсора, която изследва, опрашва и каца върху UI елементи. UX изследванията се срещат с игриво взаимодействие.',
        cta: 'Запознай се с Bella',
        category: 'UX Lab',
      },
      flutterFields: {
        title: 'Flutter Fields',
        description: 'Експерименти с motion дизайн, изследващи анимации, вдъхновени от пеперудите, взаимодействия, базирани на физика, и прекрасни микро движения.',
        cta: 'Разгледай Motion',
        category: 'UX Lab',
      },
    },
  },
  cta: {
    heading: 'Нека работим заедно',
    subheading: 'Имате проект предвид? Винаги съм развълнувана да обсъждам нови възможности и предизвикателства в UX/UI дизайна.',
    getInTouch: 'Свържи се с мен',
    viewResume: 'Виж автобиография',
  },
  common: {
    viewProject: 'Виж проекта',
    learnMore: 'Научи повече',
    backToHome: 'Обратно към началото',
    getInTouch: 'Свържи се с мен',
    letsWorkTogether: 'Нека работим заедно',
    linkedIn: 'LinkedIn',
  },
  caseStudy: {
    role: 'Роля',
    tools: 'Инструменти',
    team: 'Екип',
    duration: 'Продължителност',
    overview: 'Обзор',
    challenge: 'Предизвикателство',
    solution: 'Решение',
    results: 'Резултати',
    nextProject: 'Следващ проект',
    previousProject: 'Предишен проект',
  },
  footer: {
    contactHeading: 'Контакт',
    navigationHeading: 'Навигация',
    projectsHeading: 'Проекти',
    linksHeading: 'Връзки',
    getInTouch: 'Свържи се с мен',
    letsWorkTogether: 'Нека работим заедно',
    email: 'Имейл',
    phone: 'Телефон',
    website: 'Уебсайт',
    experiments: 'Експерименти',
    allRightsReserved: 'Всички права запазени',
    ctaHeading: 'Нека работим заедно',
    ctaSubheading: 'Имате проект предвид? Нека обсъдим как мога да помогна да осъществите вашите идеи.',
    ctaGetInTouch: 'Свържи се',
    ctaViewProjects: 'Виж проекти',
    personalWebsite: 'Личен уебсайт',
    uxDesignerBasedIn: 'UX/UI Дизайнер базиран в Австрия',
  },
};

const da: Translations = {
  nav: {
    home: 'HJEM',
    about: 'OM MIG',
    projects: 'PROJEKTER',
    contact: 'KONTAKT',
  },
  hero: {
    heading: 'Hej! Jeg er Ida, en designer med erfaring fra forskellige brancher',
    subheading: 'Senior UX/UI Designer',
    skills: ['Brugergrænsefladedesign', 'Brugeroplevelsesdesign', 'Designsystemer'],
    viewProjects: 'Se mine projekter',
    getInTouch: 'Kontakt',
  },
  stats: {
    heading: 'Betroet af teams verden over',
    subheading: 'Leverer exceptionelle designløsninger på tværs af forskellige brancher',
    yearsExperience: 'Års erfaring',
    projectsCompleted: 'Afsluttede projekter',
    industriesServed: 'Brancher',
    clientSatisfaction: 'Kundetilfredshed',
  },
  features: {
    heading: 'Udvalgte projekter',
    subheading: 'Et udvalg af projekter på tværs af forskellige brancher og designudfordringer',
    caseStudies: {
      pimcore: {
        title: 'Pimcore Platform',
        description: 'Enterprise PIM platform redesign for en global teknologivirksomhed. Strømlinede komplekse arbejdsgange og forbedrede brugeffektiviteten med 40%.',
        cta: 'Se case study',
        category: 'B2B SaaS',
      },
      ergowork: {
        title: 'ErgoWork',
        description: 'Ergonomi platform for arbejdspladsvelværd. Designet en intuitiv B2B-platform, der hjælper virksomheder med at skabe sundere arbejdspladser.',
        cta: 'Se case study',
        category: 'B2B Platform',
      },
      dermatik: {
        title: 'Dermatik',
        description: 'Sundhedsapp for dermatologi patienter. Skabte tilgængelige, patientcentrerede oplevelser med fokus på klarhed og overholdelse.',
        cta: 'Se case study',
        category: 'Healthcare',
      },
      buzz: {
        title: 'Buzz: Biernes Bevarelse',
        description: 'Et legesygt UX eksperiment, der gør miljøbevarelse bedårende gennem gamification og karaterdrevet design.',
        cta: 'Mød Buzz',
        category: 'Mobile App',
      },
      flutter: {
        title: 'Flutter: Motion Design',
        description: 'Fantastisk UX eksperiment, der viser legesygt motion design. Hver interaktion flakker med naturinspirerede animationer.',
        cta: 'Udforsk Flutter',
        category: 'Motion Design',
      },
    },
    playground: {
      heading: 'UX Playground',
      subheading: 'Eksperimentelle projekter, der udforsker innovative interaktionsmønstre',
      buzzHQ: {
        title: 'Buzz HQ',
        description: 'Eksperimentelt legeplads! En cursor-følgende bi, der undersøger, bestøver og lander på UI-elementer. UX forskning møder legesygt interaktion.',
        cta: 'Mød Bella',
        category: 'UX Lab',
      },
      flutterFields: {
        title: 'Flutter Fields',
        description: 'Motion design eksperimenter, der udforsker sommerfugl-inspirerede animationer, fysikbaserede interaktioner og dejlige mikro-bevægelser.',
        cta: 'Udforsk Motion',
        category: 'UX Lab',
      },
    },
  },
  cta: {
    heading: 'Lad os arbejde sammen',
    subheading: 'Har du et projekt i tankerne? Jeg er altid begejstret for at diskutere nye muligheder og udfordringer inden for UX/UI design.',
    getInTouch: 'Kontakt',
    viewResume: 'Se CV',
  },
  common: {
    viewProject: 'Se projekt',
    learnMore: 'Læs mere',
    backToHome: 'Tilbage til start',
    getInTouch: 'Kontakt',
    letsWorkTogether: 'Lad os arbejde sammen',
    linkedIn: 'LinkedIn',
  },
  caseStudy: {
    role: 'Rolle',
    tools: 'Værktøjer',
    team: 'Team',
    duration: 'Varighed',
    overview: 'Overblik',
    challenge: 'Udfordring',
    solution: 'Løsning',
    results: 'Resultater',
    nextProject: 'Næste projekt',
    previousProject: 'Forrige projekt',
  },
  footer: {
    contactHeading: 'Kontakt',
    navigationHeading: 'Navigation',
    projectsHeading: 'Projekter',
    linksHeading: 'Links',
    getInTouch: 'Kontakt',
    letsWorkTogether: 'Lad os arbejde sammen',
    email: 'E-mail',
    phone: 'Telefon',
    website: 'Hjemmeside',
    experiments: 'Eksperimenter',
    allRightsReserved: 'Alle rettigheder forbeholdes',
    ctaHeading: 'Lad os arbejde sammen',
    ctaSubheading: 'Har du et projekt i tankerne? Lad os diskutere, hvordan jeg kan hjælpe med at realisere dine idéer.',
    ctaGetInTouch: 'Kontakt',
    ctaViewProjects: 'Se projekter',
    personalWebsite: 'Personlig hjemmeside',
    uxDesignerBasedIn: 'UX/UI Designer baseret i Østrig',
  },
};

export const translations: Record<Language, Translations> = {
  en,
  de,
  bg,
  da,
};

export function getTranslation(lang: Language): Translations {
  return translations[lang] || translations.en;
}
