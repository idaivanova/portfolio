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
    expertiseLabel: string;
    expertise: {
      uiDesign: string;
      uxResearch: string;
      prototyping: string;
      designSystems: string;
      userTesting: string;
    };
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
    };
    playground: {
      heading: string;
      subheading: string;
    };
  };
  cta: {
    heading: string;
    subheading: string;
    getInTouch: string;
    viewResume: string;
    cvAvailableNote: string;
  };
  common: {
    viewProject: string;
    learnMore: string;
    backToHome: string;
    getInTouch: string;
    letsWorkTogether: string;
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
  themeBuilder: {
    badge: string;
    heading: string;
    subheading: string;
    steps: string[];
    seedColorLabel: string;
    seedHint: string;
    palettesLabel: string;
    palettesHint: string;
    gardenPalettesLabel: string;
    gardenPalettesHint: string;
    previewLabel: string;
    previewHint: string;
    exportLabel: string;
    exportHint: string;
    exportButton: string;
    exportedToast: string;
  };
  footer: {
    contactHeading: string;
    navigationHeading: string;
    projectsHeading: string;
    email: string;
    allRightsReserved: string;
    ctaHeading: string;
    ctaSubheading: string;
    ctaGetInTouch: string;
    ctaViewProjects: string;
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
    heading: "Hi, I'm Ida. I design things people enjoy using",
    subheading: 'UX/UI Designer',
    expertiseLabel: 'Areas of expertise',
    expertise: {
      uiDesign: 'UI Design',
      uxResearch: 'UX Research',
      prototyping: 'Prototyping',
      designSystems: 'Design Systems',
      userTesting: 'User Testing',
    },
    viewProjects: 'See my projects',
    getInTouch: 'Get in touch',
  },
  stats: {
    heading: 'A few numbers, kept honest',
    subheading: 'Small portfolio, real numbers. Nothing here that I made up after lunch.',
    yearsExperience: 'Years in design',
    projectsCompleted: 'Projects & experiments',
    industriesServed: 'Industries explored',
    clientSatisfaction: 'Clients who wrote back',
  },
  features: {
    heading: 'Featured work',
    subheading: 'Real client projects — plus a few experiments I made just because I wanted to.',
    caseStudies: {
      pimcore: {
        title: 'Pimcore Platform',
        description:
          '3+ years on an enterprise PIM platform that 118,000+ companies use. Started in research, ended up living inside the design system.',
        cta: 'View Case Study',
        category: 'B2B SaaS',
      },
      ergowork: {
        title: 'ErgoWork',
        description:
          'One-week UX sprint for an Austrian ergonomics brand. I mapped the site, wrote the personas, then drew out the page flows.',
        cta: 'View Case Study',
        category: 'B2B Platform',
      },
      dermatik: {
        title: 'Dermatik',
        description:
          'Two-week healthcare UX concept. Patient journey from booking to AI-assisted consultation.',
        cta: 'View Case Study',
        category: 'Healthcare',
      },
    },
    playground: {
      heading: 'UX Playground',
      subheading: 'Side quests. No client, no deadline — just curiosity doing overtime.',
    },
  },
  cta: {
    heading: "Let's work together",
    subheading: "Got a project brewing? I'd love to hear about it over a lemonade.",
    getInTouch: 'Say hi',
    viewResume: 'View resume',
    cvAvailableNote: 'CV available on request',
  },
  common: {
    viewProject: 'View Project',
    learnMore: 'Have a closer look',
    backToHome: 'Back to Home',
    getInTouch: 'Say hi',
    letsWorkTogether: "Let's work together",
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
  themeBuilder: {
    badge: 'UX Playground',
    heading: 'Theme Builder',
    subheading: 'Grow your own design system — pick a seed color and watch it bloom.',
    steps: ['Pick a seed', 'Watch four harmonies grow', 'Borrow a garden palette', 'Take the tokens home'],
    seedColorLabel: 'Pick your seed color',
    seedHint: 'One color is enough. Everything else grows out of it.',
    palettesLabel: 'Generated palettes',
    palettesHint: 'Four harmonies straight off the color wheel. Tap one to try it on.',
    gardenPalettesLabel: 'Garden palettes',
    gardenPalettesHint: 'Hand-picked from plants and flowers. Borrow one and keep it.',
    previewLabel: 'Typography preview',
    previewHint: 'Same words, new outfit. See if the colors hold up in a real layout.',
    exportLabel: 'Take it home',
    exportHint: 'Grab the whole set as CSS custom properties. Paste them anywhere.',
    exportButton: 'Copy CSS variables',
    exportedToast: 'Copied to clipboard!',
  },
  footer: {
    contactHeading: 'Contact',
    navigationHeading: 'Navigation',
    projectsHeading: 'Projects',
    email: 'Email',
    allRightsReserved: 'All rights reserved',
    ctaHeading: "Let's work together",
    ctaSubheading: "Got something brewing? Tell me about it. The lemonade's on me.",
    ctaGetInTouch: 'Say hi',
    ctaViewProjects: 'See projects',
    uxDesignerBasedIn: 'UX/UI Designer rooted in Austria',
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
    heading: "Hi, ich bin Ida. Ich gestalte Dinge, die Menschen gerne benutzen",
    subheading: 'UX/UI-Designerin',
    expertiseLabel: 'Expertise-Bereiche',
    expertise: {
      uiDesign: 'UI-Design',
      uxResearch: 'UX-Research',
      prototyping: 'Prototyping',
      designSystems: 'Design-Systeme',
      userTesting: 'User Testing',
    },
    viewProjects: 'Meine Projekte',
    getInTouch: 'Sag Hallo',
  },
  stats: {
    heading: 'Ein paar Zahlen, ehrlich bleiben',
    subheading:
      'Ein kleines Portfolio, echte Zahlen. Nichts davon habe ich nach dem Mittagessen erfunden.',
    yearsExperience: 'Jahre im Design',
    projectsCompleted: 'Projekte & Experimente',
    industriesServed: 'Erkundete Branchen',
    clientSatisfaction: 'Kunden, die geantwortet haben',
  },
  features: {
    heading: 'Ausgewählte Arbeiten',
    subheading: 'Echte Kundenprojekte — und ein paar Experimente, die es nur aus Spaß gibt.',
    caseStudies: {
      pimcore: {
        title: 'Pimcore Platform',
        description:
          '3+ Jahre Design für eine Enterprise-PIM-Plattform, die von über 118.000 Unternehmen genutzt wird. Angefangen bei Research, gelandet bei Design-Systemen.',
        cta: 'Case Study ansehen',
        category: 'B2B SaaS',
      },
      ergowork: {
        title: 'ErgoWork',
        description:
          'Einwöchiger UX-Sprint für eine österreichische Ergonomie-Marke. Sitemap und Personas standen fest, danach habe ich die Seitenflüsse gezeichnet.',
        cta: 'Case Study ansehen',
        category: 'B2B Platform',
      },
      dermatik: {
        title: 'Dermatik',
        description:
          'Zwei Wochen UX-Konzept fürs Gesundheitswesen. Die Patient Journey von der Terminbuchung bis zur KI-begleiteten Beratung.',
        cta: 'Case Study ansehen',
        category: 'Healthcare',
      },
    },
    playground: {
      heading: 'UX Playground',
      subheading: 'Nebenquests. Kein Kunde, keine Deadline — nur Neugier im Überstundeneinsatz.',
    },
  },
  cta: {
    heading: 'Lass uns was zusammen machen',
    subheading:
      'Ein Projekt in der Mache? Ich würde gerne bei einer Limonade davon hören.',
    getInTouch: 'Sag Hallo',
    viewResume: 'Lebenslauf ansehen',
    cvAvailableNote: 'CV auf Anfrage',
  },
  common: {
    viewProject: 'Projekt ansehen',
    learnMore: 'Genauer hinschauen',
    backToHome: 'Zurück zur Startseite',
    getInTouch: 'Sag Hallo',
    letsWorkTogether: 'Lass uns was zusammen machen',
  },
  caseStudy: {
    role: 'Rolle',
    tools: 'Werkzeuge',
    team: 'Team',
    duration: 'Dauer',
    overview: 'Überblick',
    challenge: 'Herausforderung',
    solution: 'Lösung',
    results: 'Ergebnisse',
    nextProject: 'Nächstes Projekt',
    previousProject: 'Vorheriges Projekt',
  },
  themeBuilder: {
    badge: 'UX Playground',
    heading: 'Theme Builder',
    subheading: 'Züchte dein eigenes Design-System — such dir eine Samenfarbe aus und sieh sie erblühen.',
    steps: ['Samenfarbe wählen', 'Vier Harmonien wachsen zu', 'Gartenpalette ausleihen', 'Tokens mit nach Hause nehmen'],
    seedColorLabel: 'Wähle deine Samenfarbe',
    seedHint: 'Eine Farbe reicht. Alles andere wächst daraus.',
    palettesLabel: 'Erzeugte Paletten',
    palettesHint: 'Vier Harmonien direkt vom Farbkreis. Tippe eine an und probier sie aus.',
    gardenPalettesLabel: 'Gartenpaletten',
    gardenPalettesHint: 'Handgepflückt aus Pflanzen und Blüten. Ausleihen und behalten.',
    previewLabel: 'Typografie-Vorschau',
    previewHint: 'Gleiche Worte, neues Kleid. Halten die Farben in einem echten Layout durch?',
    exportLabel: 'Mit nach Hause nehmen',
    exportHint: 'Hol dir den ganzen Satz als CSS-Custom-Properties. Einfach irgendwo einfügen.',
    exportButton: 'CSS-Variablen kopieren',
    exportedToast: 'In die Zwischenablage kopiert!',
  },
  footer: {
    contactHeading: 'Kontakt',
    navigationHeading: 'Navigation',
    projectsHeading: 'Projekte',
    email: 'E-Mail',
    allRightsReserved: 'Alle Rechte vorbehalten',
    ctaHeading: 'Lass uns was zusammen machen',
    ctaSubheading:
      'Etwas in Arbeit? Erzähl mir davon — die Limonade geht auf mich.',
    ctaGetInTouch: 'Sag Hallo',
    ctaViewProjects: 'Projekte ansehen',
    uxDesignerBasedIn: 'UX/UI-Designerin, in Österreich verwurzelt',
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
    heading: 'Здравейте, аз съм Ида. Правя неща, които хората обичат да ползват',
    subheading: 'UX/UI дизайнер',
    expertiseLabel: 'Области на експертиза',
    expertise: {
      uiDesign: 'UI дизайн',
      uxResearch: 'UX изследвания',
      prototyping: 'Прототипиране',
      designSystems: 'Дизайн системи',
      userTesting: 'Тестване с потребители',
    },
    viewProjects: 'Моите проекти',
    getInTouch: 'Здравей',
  },
  stats: {
    heading: 'Няколко числа, без измамка',
    subheading:
      'Малко портфолио, истински числа. Нищо тук не е измислено след обяда.',
    yearsExperience: 'Години в дизайна',
    projectsCompleted: 'Проекти и експерименти',
    industriesServed: 'Разпознати индустрии',
    clientSatisfaction: 'Клиенти, които отговориха',
  },
  features: {
    heading: 'Избрани работи',
    subheading:
      'Реални клиентски проекти — плюс няколко експеримента, които направих просто защото ми се искаше.',
    caseStudies: {
      pimcore: {
        title: 'Pimcore Platform',
        description:
          '3+ години дизайн на корпоративна PIM платформа, която използват над 118 000 компании. Започнах с изследвания и така се оказах в дизайн системата.',
        cta: 'Виж case study',
        category: 'B2B SaaS',
      },
      ergowork: {
        title: 'ErgoWork',
        description:
          'UX спринт за една седмица за австрийска ергономична марка. Първо sitemap и персони, после потокът на страниците.',
        cta: 'Виж case study',
        category: 'B2B Platform',
      },
      dermatik: {
        title: 'Dermatik',
        description:
          'Двуседмичен UX концепт за здравеопазване. Пътят на пациента от записване до консултация с AI асистент.',
        cta: 'Виж case study',
        category: 'Healthcare',
      },
    },
    playground: {
      heading: 'UX Playground',
      subheading:
        'Странични мисии. Без клиент, без срок — просто любопитство в извънработно време.',
    },
  },
  cta: {
    heading: 'Нека направим нещо заедно',
    subheading: 'Имаш проект наум? Много бих искала да го чуя с една лимонада.',
    getInTouch: 'Здравей',
    viewResume: 'Виж CV',
    cvAvailableNote: 'CV на заявка',
  },
  common: {
    viewProject: 'Виж проекта',
    learnMore: 'Разгледай отблизо',
    backToHome: 'Обратно към началото',
    getInTouch: 'Здравей',
    letsWorkTogether: 'Нека направим нещо заедно',
  },
  caseStudy: {
    role: 'Роля',
    tools: 'Инструменти',
    team: 'Екип',
    duration: 'Продължителност',
    overview: 'Преглед',
    challenge: 'Предизвикателство',
    solution: 'Решение',
    results: 'Резултати',
    nextProject: 'Следващ проект',
    previousProject: 'Предишен проект',
  },
  themeBuilder: {
    badge: 'UX Playground',
    heading: 'Theme Builder',
    subheading: 'Отгледай собствен дизайн система — усети се с един цвят и го виж да разцъфне.',
    steps: ['Избери си цвят', 'Четирите хармонии растат', 'Вземи назаем градинска палитра', 'Вземи си токените у дома'],
    seedColorLabel: 'Избери си цвят',
    seedHint: 'Един цвят е достатъчен. Всичко останало израства от него.',
    palettesLabel: 'Генерирани палитри',
    palettesHint: 'Четири хармонии направо от цветния кръг. Докосни една и я пробвай.',
    gardenPalettesLabel: 'Градински палитри',
    gardenPalettesHint: 'Ръчно набрани от растения и цветя. Вземи една назаем и я задръж.',
    previewLabel: 'Проба на типографията',
    previewHint: 'Същите думи, нова дреха. Виж дали цветовете издържат в истинска композиция.',
    exportLabel: 'Вземи си у дома',
    exportHint: 'Вземи целия набор като CSS custom properties. Постави го където искаш.',
    exportButton: 'Копирай CSS променливите',
    exportedToast: 'Копирано в клипборда!',
  },
  footer: {
    contactHeading: 'Контакт',
    navigationHeading: 'Навигация',
    projectsHeading: 'Проекти',
    email: 'Имейл',
    allRightsReserved: 'Всички права запазени',
    ctaHeading: 'Нека направим нещо заедно',
    ctaSubheading:
      'Нещо се зрее в главата ти? Разкажи ми — лимонадата е за моя сметка.',
    ctaGetInTouch: 'Здравей',
    ctaViewProjects: 'Виж проекти',
    uxDesignerBasedIn: 'UX/UI дизайнер, вкоренена в Австрия',
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
    heading: 'Hi, jeg er Ida. Jeg designer ting, folk gerne bruger',
    subheading: 'UX/UI Designer',
    expertiseLabel: 'Områder for ekspertise',
    expertise: {
      uiDesign: 'UI-design',
      uxResearch: 'UX-research',
      prototyping: 'Prototyping',
      designSystems: 'Designsystemer',
      userTesting: 'Brugertest',
    },
    viewProjects: 'Se mine projekter',
    getInTouch: 'Hej med dig',
  },
  stats: {
    heading: 'Nogle få tal, helt ærlige',
    subheading:
      'En lille portefølje, rigtige tal. Intet her har jeg fundet på efter frokosten.',
    yearsExperience: 'År i design',
    projectsCompleted: 'Projekter og eksperimenter',
    industriesServed: 'Udforskede brancher',
    clientSatisfaction: 'Kunder der svarede',
  },
  features: {
    heading: 'Udvalgte projekter',
    subheading:
      'Rigtige kundeprojekter — plus nogle eksperiments, jeg lavede, fordi jeg havde lyst.',
    caseStudies: {
      pimcore: {
        title: 'Pimcore Platform',
        description:
          '3+ års design på en enterprise PIM-platform, som over 118.000 virksomheder bruger. Startede i research, endte i designsystemet.',
        cta: 'Se case study',
        category: 'B2B SaaS',
      },
      ergowork: {
        title: 'ErgoWork',
        description:
          'En uges UX-sprint for et østrigsk ergonomimærke. Sitemap og personas lå fast, så tegnede jeg sideflows.',
        cta: 'Se case study',
        category: 'B2B Platform',
      },
      dermatik: {
        title: 'Dermatik',
        description:
          'To ugers UX-koncept for sundhedssektoren. Patientens rejse fra booking til AI-assisteret konsultation.',
        cta: 'Se case study',
        category: 'Healthcare',
      },
    },
    playground: {
      heading: 'UX Playground',
      subheading: 'Side quests. Ingen kunde, ingen deadline — kun nysgerrighed i overtid.',
    },
  },
  cta: {
    heading: 'Lad os arbejde sammen',
    subheading: 'Har du et projekt i gang? Jeg vil vildt gerne høre om det over en limonade.',
    getInTouch: 'Hej med dig',
    viewResume: 'Se CV',
    cvAvailableNote: 'CV på forespørgsel',
  },
  common: {
    viewProject: 'Se projekt',
    learnMore: 'Kig nærmere',
    backToHome: 'Tilbage til start',
    getInTouch: 'Hej med dig',
    letsWorkTogether: 'Lad os arbejde sammen',
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
  themeBuilder: {
    badge: 'UX Playground',
    heading: 'Theme Builder',
    subheading: 'Dyrk dit eget designsystem — vælg en frøfarve og se den blomstre op.',
    steps: ['Vælg en frøfarve', 'Fire harmonier vokser op', 'Lån en havepalet', 'Tag tokensene med hjem'],
    seedColorLabel: 'Vælg din frøfarve',
    seedHint: 'Én farve er nok. Resten vokser ud af den.',
    palettesLabel: 'Genererede paletter',
    palettesHint: 'Fire harmonier direkte fra farvehjulet. Tryk på en og se den i aktion.',
    gardenPalettesLabel: 'Havepaletter',
    gardenPalettesHint: 'Håndplukket af planter og blomster. Lån en, og behold den.',
    previewLabel: 'Typografi-preview',
    previewHint: 'Samme ord, ny kjole. Kan farverne holde i et rigtigt layout?',
    exportLabel: 'Tag den med hjem',
    exportHint: 'Hent hele sættet som CSS custom properties. Sæt det, hvor du vil.',
    exportButton: 'Kopiér CSS-variabler',
    exportedToast: 'Kopieret til udklipsholder!',
  },
  footer: {
    contactHeading: 'Kontakt',
    navigationHeading: 'Navigation',
    projectsHeading: 'Projekter',
    email: 'E-mail',
    allRightsReserved: 'Alle rettigheder forbeholdes',
    ctaHeading: 'Lad os arbejde sammen',
    ctaSubheading:
      'Der er noget på vej i din hoved? Fortæl mig om det — limonaaden er på mig.',
    ctaGetInTouch: 'Hej med dig',
    ctaViewProjects: 'Se projekter',
    uxDesignerBasedIn: 'UX/UI Designer med rødder i Østrig',
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