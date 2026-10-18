// ============================================
// Theme Builder Page
// Playground for growing design system themes
// from a single seed color.
// ============================================

import { CaseStudyLayout } from '@/components/case-studies';
import { ScrollReveal } from '@/components/animations';
import { ThemeBuilder } from '@/components/sections/ThemeBuilder';
import { useLanguage } from '@/lib/LanguageContext';

export default function ThemeBuilderPage() {
  const { t } = useLanguage();
  const copy = t.themeBuilder;

  return (
    <CaseStudyLayout>
      <ScrollReveal>
        <section id="intro" className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-accent/10 px-3 py-1 text-sm text-accent">
              {copy.badge}
            </span>
          </div>

          <h1 className="font-display text-4xl text-foreground md:text-5xl lg:text-6xl">
            {copy.heading}
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-foreground/75">
            {copy.subheading}
          </p>

          <ul className="flex flex-wrap gap-2">
            {copy.steps.map((step) => (
              <li
                key={step}
                className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-foreground/70"
              >
                {step}
              </li>
            ))}
          </ul>
        </section>
      </ScrollReveal>

      <ThemeBuilder />
    </CaseStudyLayout>
  );
}
