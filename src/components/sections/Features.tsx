import { ScrollReveal } from '../animations/ScrollReveal';
import { Card, CardContent } from '../ui/card';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Flutter: Butterfly Garden Explorer',
    description: 'A whimsical UX experiment showcasing playful motion design. Every interaction flutters with nature-inspired animations and delightful micro-interactions.',
    cta: 'Explore Flutter',
    href: '/case-studies/flutter',
  },
  {
    icon: Heart,
    title: 'Buzz: Bumblebee Conservation App',
    description: 'Making environmental conservation adorable through gamification and character-driven UX design. Conservation meets delight.',
    cta: 'Meet Buzz',
    href: '/case-studies/buzz',
  },
  {
    icon: Sparkles,
    title: 'B2B SaaS Product Design',
    description: 'Designed enterprise platforms that streamline complex workflows. From dashboards to data visualization, I create interfaces that power business decisions.',
    cta: 'View case study',
    href: '/case-studies/pimcore',
  },
  {
    icon: Heart,
    title: 'Healthcare & Medical Apps',
    description: 'Created patient-centered healthcare experiences. Focused on accessibility, clarity, and compliance with medical industry standards.',
    cta: 'View case study',
    href: '/case-studies/dermatik',
  },
];

export function Features() {
  return (
    <section className="py-20 lg:py-28" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mb-4">
              Featured work
            </h2>
            <p className="text-lg text-cream/60 max-w-2xl mx-auto">
              A selection of projects across different industries and design challenges
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 0.1}>
              <Card className="h-full group bg-navy-dark/50 border-cream/10 hover:border-accent/30 transition-all duration-300">
                <CardContent className="p-6 lg:p-8 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-accent" />
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
          ))}
        </div>
      </div>
    </section>
  );
}
