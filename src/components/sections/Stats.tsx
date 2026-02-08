import { ScrollReveal, StaggerContainer, StaggerItem } from '../animations/ScrollReveal';

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Completed' },
  { value: '4', label: 'Industries Served' },
  { value: '100%', label: 'Client Satisfaction' },
];

export function Stats() {
  return (
    <section className="py-20 lg:py-28 bg-navy-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-4">
              Trusted by teams worldwide
            </h2>
            <p className="text-lg text-cream/60 max-w-2xl mx-auto">
              Delivering exceptional design solutions across diverse industries
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          staggerDelay={0.1}
        >
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-br from-accent to-accent-light bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-cream/60">
                  {stat.label}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
