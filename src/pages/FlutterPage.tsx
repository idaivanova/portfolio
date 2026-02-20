// ============================================
// Flutter Page - Butterfly Garden Explorer
// Playful motion design showcase
// Uses data from butterfly-garden.tsx
// ============================================

import { CaseStudyLayout, InfoCards, Divider } from '@/components/case-studies';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import {
  heroData,
  projectScopeData,
  conceptData,
  featuresData,
  motionData,
  colorData,
  lessonsData,
} from '@/data/butterfly-garden';

export default function FlutterPage() {
  return (
    <CaseStudyLayout activeProject="Flutter">
      {/* Hero Section */}
      <ScrollReveal>
        <section id="intro" className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Project preview image placeholder */}
            <div 
              className="w-full md:w-[350px] h-[212px] rounded-lg flex items-center justify-center border border-cream/10 shrink-0"
              style={{
                background: 'linear-gradient(135deg, #FFB80020 0%, #81C78420 100%)',
              }}
            >
              <span className="text-6xl">🦋</span>
            </div>
            
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-4">
                {heroData.title}
              </h1>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {heroData.tags.map((tag) => (
                  <span 
                    key={tag.label} 
                    className="px-3 py-1 text-sm bg-accent/10 text-accent rounded-full"
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
              
              <div className="text-cream/80">
                {heroData.description}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Project Scope & Results using InfoCards */}
      <ScrollReveal>
        <section className="mb-16">
          <InfoCards 
            scope={{
              items: projectScopeData.scope.items.map(item => ({
                label: item.label,
                value: item.value,
              })),
            }}
            results={{
              content: projectScopeData.results.content,
            }}
          />
        </section>
      </ScrollReveal>

      <Divider />

      {/* Design Philosophy */}
      <ScrollReveal>
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-cream mb-2">{conceptData.title}</h2>
          <p className="text-cream/60 mb-6">{conceptData.subtitle}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {conceptData.principles.map((principle, index) => (
              <div key={index} className="p-4 bg-navy-mid/50 rounded-lg border border-cream/10">
                <h3 className="text-lg font-semibold text-cream mb-2">{principle.title}</h3>
                <p className="text-cream/60 text-sm">{principle.description}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Playful Features */}
      <ScrollReveal>
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-cream mb-6">{featuresData.title}</h2>
          <div className="space-y-4">
            {featuresData.items.map((feature, index) => (
              <div key={index} className="p-6 bg-navy-mid/50 rounded-lg border border-cream/10">
                <h3 className="text-lg font-semibold text-cream mb-2">
                  🦋 {feature.title}
                </h3>
                <p className="text-cream/60 mb-2">{feature.description}</p>
                <p className="text-accent/80 text-sm italic">
                  Motion: {feature.motion}
                </p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Motion Patterns */}
      <ScrollReveal>
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-cream mb-6">{motionData.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {motionData.patterns.map((pattern, index) => (
              <div key={index} className="p-4 bg-navy-mid/50 rounded-lg">
                <h4 className="text-cream font-medium">{pattern.name}</h4>
                <p className="text-cream/50 text-sm">{pattern.usage}</p>
                <p className="text-cream/40 text-xs mt-2">
                  {pattern.physics} • {pattern.duration}
                </p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <Divider />

      {/* Color Palette */}
      <ScrollReveal>
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-cream mb-6">{colorData.title}</h2>
          <div className="flex flex-wrap gap-4">
            {colorData.colors.map((color: { name: string; hex: string }, index: number) => (
              <div key={index} className="flex items-center gap-2">
                <div 
                  className="w-12 h-12 rounded-lg border border-cream/10" 
                  style={{ backgroundColor: color.hex }} 
                />
                <div>
                  <p className="text-xs text-cream">{color.name}</p>
                  <p className="text-[10px] text-cream/50">{color.hex}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Design Insights */}
      <ScrollReveal>
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-cream mb-6">{lessonsData.title}</h2>
          <div className="space-y-4">
            {lessonsData.insights.map((insight, index) => (
              <div key={index} className="p-4 bg-navy-mid/50 rounded-lg border-l-2 border-accent">
                <p className="text-cream font-medium">{insight.insight}</p>
                <p className="text-cream/60 text-sm mt-1">{insight.detail}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>
    </CaseStudyLayout>
  );
}
