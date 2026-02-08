import { Link } from 'react-router-dom';
import { ScrollReveal } from '../animations/ScrollReveal';
import { Card, CardContent } from '../ui/card';
import { ArrowRight, Layers, Lightbulb, Box, Monitor } from 'lucide-react';

const features = [
  {
    icon: Layers,
    title: 'B2B SaaS Product Design',
    description: 'Designed enterprise platforms that streamline complex workflows. From dashboards to data visualization, I create interfaces that power business decisions.',
    cta: 'View case study',
    href: '/case-studies/pimcore',
  },
  {
    icon: Lightbulb,
    title: 'Complex Enterprise Applications',
    description: 'Solved intricate UX challenges for large-scale applications. My designs balance powerful functionality with intuitive usability.',
    cta: 'View case study',
    href: '/case-studies/ergowork',
  },
  {
    icon: Box,
    title: 'Healthcare & Medical Apps',
    description: 'Created patient-centered healthcare experiences. Focused on accessibility, clarity, and compliance with medical industry standards.',
    cta: 'View case study',
    href: '/case-studies/dermatik',
  },
  {
    icon: Monitor,
    title: 'Developer-Facing Dashboards',
    description: 'Built interfaces for technical users including API dashboards and IoT management platforms. Designed for power users who demand efficiency.',
    cta: 'View case study',
    href: '/case-studies/pimcore',
  },
];

export function Features() {
  return (
    <section className="py-20 lg:py-28">
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
                  <Link
                    to={feature.href}
                    className="group/btn inline-flex items-center p-0 h-auto font-semibold text-accent hover:text-accent-light"
                  >
                    {feature.cta}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
