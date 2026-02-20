// ============================================
// Buzz HQ Page - Experimental Bumblebee Playground
// UX playground showcasing cursor interactions
// ============================================

import { CaseStudyLayout, Divider } from '@/components/case-studies';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations';
import { BumblebeeWrapper } from '@/components/animations/Bumblebee';
import { BumblebeeCursorWrapper } from '@/components/animations/BumblebeeCursor';
import { SpotlightCard, CountUp, GradientText } from '@/components/ui';
import {
  heroData,
  behaviorsData,
  statsData,
  featuresData,
  insightsData,
} from '@/data/buzz-hq';

export default function BuzzHQPage() {
  return (
    <BumblebeeWrapper>
      <BumblebeeCursorWrapper>
        <CaseStudyLayout>
        {/* Hero Section */}
        <ScrollReveal>
          <section id="intro" className="mb-16">
            <div className="flex flex-col gap-8">
              {/* Gradient Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream">
                <GradientText colors={['#FF6647', '#FFB800', '#FF8A70']}>
                  {heroData.title}
                </GradientText>
              </h1>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {heroData.tags.map((tag) => (
                  <span 
                    key={tag.label} 
                    className="px-3 py-1 text-sm bg-accent/10 text-accent rounded-full"
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
              
              {/* Description */}
              <div className="text-cream/80 text-lg leading-relaxed max-w-2xl">
                {heroData.description}
              </div>
              
              {/* Interactive hint */}
              <div className="p-4 bg-navy-mid/30 rounded-lg border border-cream/10 max-w-md">
                <p className="text-cream/60 text-sm">
                  🎯 <strong className="text-accent">Try it!</strong> Stop moving your cursor for 3 seconds and watch Bella investigate!
                </p>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <Divider />

        {/* Bee Behaviors */}
        <ScrollReveal>
          <section id="behaviors" className="mb-16">
            <h2 className="text-3xl font-bold text-cream mb-2">{behaviorsData.title}</h2>
            <p className="text-cream/60 mb-8">{behaviorsData.subtitle}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {behaviorsData.behaviors.map((behavior, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-navy-mid/50 rounded-lg border border-cream/10"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{behavior.icon}</span>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-cream mb-2">{behavior.name}</h3>
                      <p className="text-cream/60 text-sm mb-3">{behavior.description}</p>
                      <p className="text-accent text-xs font-medium">
                        → {behavior.interaction}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <Divider />

        {/* Stats Section with CountUp */}
        <ScrollReveal>
          <section id="stats" className="mb-16">
            <h2 className="text-3xl font-bold text-cream mb-2">{statsData.title}</h2>
            <p className="text-cream/60 mb-8">{statsData.subtitle}</p>
            
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6" staggerDelay={0.1}>
              {statsData.metrics.map((metric, index) => (
                <StaggerItem key={index}>
                  <div className="text-center p-6 bg-navy-mid/30 rounded-xl">
                    <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                      <CountUp 
                        to={metric.value} 
                        suffix={metric.suffix}
                        trigger={true}
                        duration={2}
                      />
                    </div>
                    <div className="text-cream/60 text-sm">{metric.label}</div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </section>
        </ScrollReveal>

        <Divider />

        {/* Features with SpotlightCards */}
        <ScrollReveal>
          <section id="features" className="mb-16">
            <h2 className="text-3xl font-bold text-cream mb-2">{featuresData.title}</h2>
            <p className="text-cream/60 mb-8">{featuresData.subtitle}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuresData.features.map((feature, index) => (
                <SpotlightCard
                  key={index}
                  spotlightColor="rgba(255, 102, 71, 0.15)"
                  className="p-6 bg-navy-dark/50"
                >
                  <h3 className="text-xl font-semibold text-cream mb-3">{feature.title}</h3>
                  <p className="text-cream/60 mb-4">{feature.description}</p>
                  <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs rounded-full">
                    {feature.highlight}
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <Divider />

        {/* Design Insights */}
        <ScrollReveal>
          <section id="insights" className="mb-16">
            <h2 className="text-3xl font-bold text-cream mb-8">{insightsData.title}</h2>
            
            <div className="space-y-4">
              {insightsData.insights.map((insight, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-navy-mid/50 rounded-lg border-l-4 border-accent"
                >
                  <h3 className="text-lg font-semibold text-cream mb-2">{insight.title}</h3>
                  <p className="text-cream/60">{insight.detail}</p>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>
      </CaseStudyLayout>
      </BumblebeeCursorWrapper>
    </BumblebeeWrapper>
  );
}
