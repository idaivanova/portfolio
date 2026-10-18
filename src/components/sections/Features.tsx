import { useLanguage } from '../../lib/LanguageContext';
import { cn } from '../../lib/utils';
import { ScrollReveal } from '../animations/ScrollReveal';
import { Card, CardContent } from '../ui/card';
import { ArrowRight, Heart, Users, Code2 } from 'lucide-react';

const caseStudiesData = [
  {
    key: 'pimcore',
    icon: Code2,
    href: '/case-studies/pimcore',
    annotation: '3+ years of research → one design system',
  },
  {
    key: 'ergowork',
    icon: Users,
    href: '/case-studies/ergowork',
    annotation: 'one week — sitemap, personas, flows',
  },
  {
    key: 'dermatik',
    icon: Heart,
    href: '/case-studies/dermatik',
    annotation: 'a two-week concept. nobody tested it. still learned plenty',
  },
];

// Subtle alternating tilt so the row reads as pinned to a board rather than a grid.
// Written out as full class strings so the Tailwind scanner picks them up.
const CARD_TILT = ['rotate-[-1deg]', 'rotate-[0.6deg]'] as const;

type Feature = {
  icon: React.ElementType;
  title: string;
  description: string;
  cta: string;
  href: string;
  category: string;
  annotation: string;
  isNew?: boolean;
};

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <Card
        className={cn(
          'relative h-full group bg-card border-border',
          CARD_TILT[index % CARD_TILT.length],
          'shadow-[18px_26px_48px_-22px_rgba(0,0,0,.7)]',
          'transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(.2,.8,.2,1)]',
          'hover:border-[var(--color-accent)]',
          'hover:shadow-[26px_36px_66px_-22px_rgba(0,0,0,.82)]',
          'motion-safe:hover:-translate-y-1.5 motion-safe:hover:rotate-0 motion-safe:hover:scale-[1.015]',
        )}
      >
        <span
          className="absolute -top-2 left-1/2 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-[var(--color-accent)] shadow-[0_4px_10px_rgba(0,0,0,.5),inset_0_-3px_4px_rgba(0,0,0,.25)]"
          aria-hidden="true"
        />
        <CardContent className="p-6 lg:p-8 flex flex-col h-full">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center group-hover:bg-[var(--color-accent)]/20 transition-colors">
              <feature.icon className="w-6 h-6 text-[var(--color-accent)]" />
            </div>
            <div className="flex gap-2">
              {'isNew' in feature && feature.isNew && (
                <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] text-white rounded-full">
                  NEW
                </span>
              )}
              {feature.category && (
                <span className="px-3 py-1 text-xs font-medium text-muted-foreground bg-muted rounded-full">
                  {feature.category}
                </span>
              )}
            </div>
          </div>
          <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-1">
            {feature.title}
          </h3>
          <span className="font-hand text-lg text-[var(--color-accent)] -mt-1 mb-2 block rotate-[-1.5deg]">
            {feature.annotation}
          </span>
          <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
            {feature.description}
          </p>
          <a
            href={feature.href}
            className="group/btn inline-flex items-center p-0 h-auto font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-light)]"
          >
            {feature.cta}
            <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </a>
        </CardContent>
      </Card>
    </ScrollReveal>
  );
}

export function Features() {
  const { t } = useLanguage();

  const caseStudies: Feature[] = caseStudiesData.map((item) => {
    const data = t.features.caseStudies[item.key as keyof typeof t.features.caseStudies] as { title: string; description: string; cta: string; category: string };
    return {
      icon: item.icon,
      title: data.title,
      description: data.description,
      cta: data.cta,
      href: item.href,
      category: data.category,
      annotation: item.annotation,
    };
  });

  return (
    <section className="py-20 lg:py-28" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t.features.heading}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.features.subheading}
            </p>
            <p className="font-hand text-xl text-[var(--color-accent)] -rotate-1 inline-block mt-4">
              psst — they straighten up when you point
            </p>
          </div>
        </ScrollReveal>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}