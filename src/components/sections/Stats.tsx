import { useLanguage } from '../../lib/LanguageContext';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../animations/ScrollReveal';

// Keep these honest — no invented percentages. Numbers reflect the real
// scope of the work: 3+ years designing (2023 — Present), 6+ shipped or
// conceptual projects, 5 industries touched, 2 paying clients so far.
const statsData = [
  { value: '3+', key: 'yearsExperience' },
  { value: '6+', key: 'projectsCompleted' },
  { value: '5', key: 'industriesServed' },
  { value: '2', key: 'clientSatisfaction' },
];

export function Stats() {
  const { t } = useLanguage();

  return (
    <section className="py-20 lg:py-28 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="flex items-center justify-center gap-3.5 mb-5 text-[10.5px] font-display uppercase tracking-[0.26em] text-[var(--color-blue)]">
              <span
                aria-hidden="true"
                className="inline-block h-[22px] w-[22px] rounded-full border-[1.5px] border-[var(--color-blue)] shadow-[var(--glow-blue)]"
              />
              the numbers
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {t.stats.heading}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.stats.subheading}
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          staggerDelay={0.1}
        >
          {statsData.map((stat) => (
            <StaggerItem key={stat.key}>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-blue)] bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-muted-foreground">
                  {t.stats[stat.key as keyof typeof t.stats]}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
