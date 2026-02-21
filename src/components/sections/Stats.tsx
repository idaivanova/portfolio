import { useLanguage } from '../../lib/LanguageContext';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../animations/ScrollReveal';

const statsData = [
  { value: '5+', key: 'yearsExperience' },
  { value: '50+', key: 'projectsCompleted' },
  { value: '4', key: 'industriesServed' },
  { value: '100%', key: 'clientSatisfaction' },
];

export function Stats() {
  const { t } = useLanguage();

  return (
    <section className="py-20 lg:py-28 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
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
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-br from-accent to-accent-light bg-clip-text text-transparent mb-2">
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
