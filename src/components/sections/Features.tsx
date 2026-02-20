import { useLanguage } from '../../lib/LanguageContext';
import { ScrollReveal } from '../animations/ScrollReveal';
import { Card, CardContent } from '../ui/card';
import { ArrowRight, Heart, Users, Code2 } from 'lucide-react';

const caseStudiesData = [
  {
    key: 'pimcore',
    icon: Code2,
    href: '/case-studies/pimcore',
  },
  {
    key: 'ergowork',
    icon: Users,
    href: '/case-studies/ergowork',
  },
  {
    key: 'dermatik',
    icon: Heart,
    href: '/case-studies/dermatik',
  },
];

type Feature = {
  icon: React.ElementType;
  title: string;
  description: string;
  cta: string;
  href: string;
  category: string;
  isNew?: boolean;
};

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <Card className="h-full group bg-navy-dark/50 border-cream/10 hover:border-accent/30 transition-all duration-300">
        <CardContent className="p-6 lg:p-8 flex flex-col h-full">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
              <feature.icon className="w-6 h-6 text-accent" />
            </div>
            <div className="flex gap-2">
              {'isNew' in feature && feature.isNew && (
                <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-accent to-orange-400 text-white rounded-full">
                  NEW
                </span>
              )}
              {feature.category && (
                <span className="px-3 py-1 text-xs font-medium text-cream/50 bg-navy-mid/50 rounded-full">
                  {feature.category}
                </span>
              )}
            </div>
          </div>
          <h3 className="text-xl lg:text-2xl font-bold text-cream mb-3">
            {feature.title}
          </h3>
          <p className="text-cream/60 leading-relaxed mb-6 flex-1">
            {feature.description}
          </p>
          <a
            href={feature.href}
            className="group/btn inline-flex items-center p-0 h-auto font-semibold text-accent hover:text-accent-light"
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
    };
  });

  return (
    <section className="py-20 lg:py-28" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mb-4">
              {t.features.heading}
            </h2>
            <p className="text-lg text-cream/60 max-w-2xl mx-auto">
              {t.features.subheading}
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
