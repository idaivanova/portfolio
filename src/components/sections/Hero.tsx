import { ScrollReveal, StaggerContainer, StaggerItem } from '../animations/ScrollReveal';
import { ArrowRight, Palette, Layout, Code, Sparkles, Users } from 'lucide-react';

const expertise = [
  { icon: Palette, label: 'UI Design' },
  { icon: Layout, label: 'UX Research' },
  { icon: Code, label: 'Prototyping' },
  { icon: Sparkles, label: 'Design Systems' },
  { icon: Users, label: 'User Testing' },
];

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Animated gradient blob backgrounds - from Figma design */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] animate-blob" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-navy-mid/40 rounded-full blur-[80px] animate-blob-delayed" />
        <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-accent-light/10 rounded-full blur-[60px] animate-blob-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          {/* Welcome message - Figma style */}
          <ScrollReveal>
            <p className="text-sm sm:text-base text-cream/60 font-medium mb-4 tracking-wide uppercase">
              Senior UX/UI Designer
            </p>
          </ScrollReveal>

          {/* Main headline - Figma inspired with warm orange accent */}
          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6">
              <span className="text-cream">Hey there! </span>
              <span className="text-cream">I'm </span>
              <span className="text-accent">Ida</span>
              <span className="text-cream">, a </span>
              <span className="text-accent">designer</span>
              <span className="text-cream"> with experience across diverse industries</span>
            </h1>
          </ScrollReveal>

          {/* Tag buttons - Figma style */}
          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap gap-3 mb-10">
              <span className="px-4 py-2 rounded-full bg-navy-mid/60 text-cream/80 text-sm border border-cream/10">
                User Interface Design
              </span>
              <span className="px-4 py-2 rounded-full bg-navy-mid/60 text-cream/80 text-sm border border-cream/10">
                User Experience Design
              </span>
              <span className="px-4 py-2 rounded-full bg-navy-mid/60 text-cream/80 text-sm border border-cream/10">
                Design Systems
              </span>
            </div>
          </ScrollReveal>

          {/* CTA Buttons - merged style */}
          <ScrollReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-16">
              <a
                href="/#projects"
                className="inline-flex items-center justify-center gap-2 h-12 px-8 py-3 bg-accent hover:bg-accent-dark text-cream font-medium rounded-md transition-colors group"
                onClick={(e) => {
                  // Smooth scroll to projects section
                  const projectsSection = document.getElementById('projects');
                  if (projectsSection) {
                    e.preventDefault();
                    projectsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                View My Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="mailto:ivanova.contact@gmail.com"
                className="inline-flex items-center justify-center gap-2 h-12 px-8 py-3 border border-cream/20 text-cream hover:bg-cream/10 font-medium rounded-md transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </ScrollReveal>

          {/* Expertise row - keeping from existing design */}
          <ScrollReveal delay={0.4}>
            <div className="border-t border-cream/10 pt-8">
              <p className="text-sm text-cream/40 mb-6">
                Areas of expertise
              </p>
              <StaggerContainer
                className="flex flex-wrap items-center gap-8 sm:gap-12"
                staggerDelay={0.1}
              >
                {expertise.map((item) => (
                  <StaggerItem key={item.label}>
                    <div className="flex flex-col items-center gap-2 group cursor-default">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <item.icon className="w-6 h-6 text-accent" />
                      </div>
                      <span className="text-sm font-medium text-cream/60 group-hover:text-cream/80 transition-colors">
                        {item.label}
                      </span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
