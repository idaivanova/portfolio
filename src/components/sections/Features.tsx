import { ScrollReveal } from '../animations/ScrollReveal';
import { Card, CardContent } from '../ui/card';
import { ArrowRight, Sparkles, Heart, Palette, Users, Code2, FlaskConical } from 'lucide-react';

// Real case studies
const caseStudies = [
  {
    icon: Code2,
    title: 'Pimcore Platform',
    description: 'Enterprise PIM platform redesign for a global tech company. Streamlined complex workflows and improved user efficiency by 40%.',
    cta: 'View Case Study',
    href: '/case-studies/pimcore',
    category: 'B2B SaaS',
  },
  {
    icon: Users,
    title: 'ErgoWork',
    description: 'Ergonomics platform for workplace wellness. Designed an intuitive B2B platform helping businesses create healthier workspaces.',
    cta: 'View Case Study',
    href: '/case-studies/ergowork',
    category: 'B2B Platform',
  },
  {
    icon: Heart,
    title: 'Dermatik',
    description: 'Healthcare app for dermatology patients. Created accessible, patient-centered experiences focused on clarity and compliance.',
    cta: 'View Case Study',
    href: '/case-studies/dermatik',
    category: 'Healthcare',
  },
  {
    icon: Sparkles,
    title: 'Buzz: Bumblebee Conservation',
    description: 'A playful UX experiment making environmental conservation adorable through gamification and character-driven design.',
    cta: 'Meet Buzz',
    href: '/case-studies/buzz',
    category: 'Mobile App',
  },
  {
    icon: Palette,
    title: 'Flutter: Motion Design',
    description: 'Whimsical UX experiment showcasing playful motion design. Every interaction flutters with nature-inspired animations.',
    cta: 'Explore Flutter',
    href: '/case-studies/flutter',
    category: 'Motion Design',
  },
];

// UX Playground - Experimental projects
const playgroundProjects = [
  {
    icon: FlaskConical,
    title: 'Buzz HQ',
    description: 'Experimental playground! A cursor-following bumblebee that investigates, pollinates, and lands on UI elements. UX research meets playful interaction.',
    cta: 'Meet Bella',
    href: '/case-studies/buzz-hq',
    category: 'UX Lab',
    isNew: true,
  },
  {
    icon: FlaskConical,
    title: 'Flutter Fields',
    description: 'Motion design experiments exploring butterfly-inspired animations, physics-based interactions, and delightful micro-movements.',
    cta: 'Explore Motion',
    href: '/case-studies/flutter-fields',
    category: 'UX Lab',
    isNew: true,
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

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {caseStudies.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* UX Playground Section */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cream/20 to-transparent" />
            <h3 className="text-xl font-bold text-cream/60 px-4">
              ✨ UX Playground
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cream/20 to-transparent" />
          </div>
          <p className="text-center text-cream/50 mb-8 -mt-4">
            Experimental projects exploring innovative interaction patterns
          </p>
        </ScrollReveal>

        {/* Playground Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {playgroundProjects.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
