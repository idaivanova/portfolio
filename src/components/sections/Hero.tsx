import { ScrollReveal, StaggerContainer, StaggerItem } from '../animations/ScrollReveal';
import { HeroWordReveal } from '../animations/HeroWordReveal';
import { AmbientBlobs } from '../animations/AmbientBlobs';
import { ArrowRight, Palette, Layout, Code, Sparkles, Users } from 'lucide-react';
import { useLanguage } from '../../lib/LanguageContext';
import type { Language } from '../../lib/i18n';

/** Word that receives the coral marker highlight, per language. */
const MARK_WORD: Record<Language, string> = {
  en: 'enjoy',
  de: 'gerne',
  bg: 'обичат',
  da: 'bruger',
};

const expertise = [
  { icon: Palette, key: 'uiDesign' },
  { icon: Layout, key: 'uxResearch' },
  { icon: Code, key: 'prototyping' },
  { icon: Sparkles, key: 'designSystems' },
  { icon: Users, key: 'userTesting' },
] as const;

export function Hero() {
  const { t, language } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Ambient depth blobs: structural blue bottom-left, coral spark top-right */}
      <AmbientBlobs />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          {/* Hand-scrawled intro — the concept's workshop voice, sits above the H1 */}
          <p className="font-note text-lg text-[var(--color-accent-text)] -rotate-2 inline-block mb-3">
            Hi, I&apos;m Ida — come see how the work gets made ✎
          </p>

          {/* Welcome message - Figma style */}
          <ScrollReveal>
            <p className="text-sm sm:text-base text-muted-foreground font-medium mb-4 tracking-wide uppercase">
              {t.hero.subheading}
            </p>
          </ScrollReveal>

          {/* Main headline — words stagger in, key word lands on a coral marker */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6">
            <HeroWordReveal
              text={t.hero.heading}
              delay={0.1}
              markWord={MARK_WORD[language]}
            />
          </h1>

          {/* CTA Buttons - merged style */}
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-16">
              <a
                href="/#projects"
                className="inline-flex items-center justify-center gap-2 h-12 px-8 py-3 bg-[var(--color-accent)] text-[var(--color-navy-darkest)] shadow-[var(--glow)] hover:bg-[var(--color-accent-light)] font-medium rounded-md transition-colors group"
                onClick={(e) => {
                  // Smooth scroll to projects section
                  const projectsSection = document.getElementById('projects');
                  if (projectsSection) {
                    e.preventDefault();
                    projectsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {t.hero.viewProjects}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="mailto:ivanova.contact@gmail.com"
                className="inline-flex items-center justify-center gap-2 h-12 px-8 py-3 border-[1.5px] border-[var(--color-accent)] text-foreground hover:bg-[var(--color-accent)]/10 hover:text-[var(--color-accent-text)] font-medium rounded-md transition-colors"
              >
                {t.hero.getInTouch}
              </a>
            </div>
          </ScrollReveal>

          {/* Expertise row - keeping from existing design */}
          <ScrollReveal delay={0.3}>
            <div className="border-t border-border pt-8">
              <p className="text-sm text-muted-foreground/60 mb-6">
                {t.hero.expertiseLabel}
              </p>
              <StaggerContainer
                className="flex flex-wrap items-center gap-8 sm:gap-12"
                staggerDelay={0.1}
              >
                {expertise.map((item) => (
                  <StaggerItem key={item.key}>
                    <div className="flex flex-col items-center gap-2 group cursor-default">
                      <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center group-hover:bg-[var(--color-accent)]/20 transition-colors">
                        <item.icon className="w-6 h-6 text-[var(--color-accent-text)]" />
                      </div>
                      <span className="text-sm font-medium text-muted-foreground/60 group-hover:text-muted-foreground/80 transition-colors">
                        {t.hero.expertise[item.key]}
                      </span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Scroll cue — md+ only so it never sits under the CTA row on small screens */}
      <div className="pointer-events-none absolute inset-x-0 bottom-7 hidden text-center md:block">
        <p className="font-note text-base text-muted-foreground">
          roll up your sleeves
          <span
            aria-hidden="true"
            className="mt-2 mx-auto block h-8 w-0.5 bg-gradient-to-b from-[var(--color-accent)] to-transparent motion-safe:animate-[drop_1.8s_infinite]"
          />
        </p>
      </div>
    </section>
  );
}
