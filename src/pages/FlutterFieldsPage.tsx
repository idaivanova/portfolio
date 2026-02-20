// ============================================
// Flutter Fields Page - Experimental Butterfly Motion Playground
// UX playground showcasing motion design patterns
// ============================================

import { CaseStudyLayout, Divider } from '@/components/case-studies';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations';
import { SpotlightCard, GradientText } from '@/components/ui';
import {
  heroData,
  motionPatternsData,
  butterfliesData,
  microInteractionsData,
} from '@/data/flutter-fields';

export default function FlutterFieldsPage() {
  return (
    <CaseStudyLayout activeProject="Flutter Fields">
      {/* Hero Section */}
      <ScrollReveal>
        <section id="intro" className="mb-16">
          <div className="flex flex-col gap-8">
            {/* Gradient Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream">
              <GradientText colors={['#00B4D8', '#90E0EF', '#0077B6']}>
                {heroData.title}
              </GradientText>
            </h1>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {heroData.tags.map((tag) => (
                <span 
                  key={tag.label} 
                  className="px-3 py-1 text-sm bg-blue-500/10 text-blue-400 rounded-full"
                >
                  {tag.label}
                </span>
              ))}
            </div>
            
            {/* Description */}
            <div className="text-cream/80 text-lg leading-relaxed max-w-2xl">
              {heroData.description}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <Divider />

      {/* Motion Patterns */}
      <ScrollReveal>
        <section id="motion" className="mb-16">
          <h2 className="text-3xl font-bold text-cream mb-2">{motionPatternsData.title}</h2>
          <p className="text-cream/60 mb-8">{motionPatternsData.subtitle}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {motionPatternsData.patterns.map((pattern, index) => (
              <div 
                key={index} 
                className="p-5 bg-navy-mid/50 rounded-lg border border-cream/10 hover:border-blue-400/30 transition-colors"
              >
                <h3 className="text-lg font-semibold text-cream mb-2">{pattern.name}</h3>
                <p className="text-cream/60 text-sm mb-3">{pattern.description}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="px-2 py-0.5 text-xs bg-blue-500/10 text-blue-400 rounded">
                    {pattern.physics}
                  </span>
                  <span className="px-2 py-0.5 text-xs bg-blue-500/10 text-blue-400 rounded">
                    {pattern.duration}
                  </span>
                </div>
                <p className="text-cream/40 text-xs italic">→ {pattern.example}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <Divider />

      {/* Butterfly Species - Colorful Cards */}
      <ScrollReveal>
        <section id="butterflies" className="mb-16">
          <h2 className="text-3xl font-bold text-cream mb-2">{butterfliesData.title}</h2>
          <p className="text-cream/60 mb-8">{butterfliesData.subtitle}</p>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.1}>
            {butterfliesData.butterflies.map((butterfly, index) => (
              <StaggerItem key={index}>
                <SpotlightCard
                  spotlightColor={`${butterfly.colors[0]}20`}
                  className="p-5 bg-navy-dark/50"
                >
                  {/* Color swatches */}
                  <div className="flex gap-1 mb-3">
                    {butterfly.colors.map((color, i) => (
                      <div 
                        key={i}
                        className="w-6 h-6 rounded-full border border-cream/10"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-cream mb-1">{butterfly.name}</h3>
                  <p className="text-cream/60 text-sm mb-2">{butterfly.pattern}</p>
                  <p className="text-blue-400 text-xs font-medium">
                    ✨ {butterfly.personality}
                  </p>
                </SpotlightCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      </ScrollReveal>

      <Divider />

      {/* Micro-interactions */}
      <ScrollReveal>
        <section id="interactions" className="mb-16">
          <h2 className="text-3xl font-bold text-cream mb-2">{microInteractionsData.title}</h2>
          <p className="text-cream/60 mb-8">{microInteractionsData.subtitle}</p>
          
          <div className="space-y-3">
            {microInteractionsData.interactions.map((interaction, index) => (
              <div 
                key={index} 
                className="flex items-center gap-4 p-4 bg-navy-mid/30 rounded-lg"
              >
                <div className="w-32 text-cream/40 text-sm font-medium truncate">
                  {interaction.trigger}
                </div>
                <div className="flex-1 text-cream/80 text-sm">
                  {interaction.animation}
                </div>
                <div className="text-blue-400 text-xs font-medium px-2 py-1 bg-blue-500/10 rounded">
                  {interaction.feel}
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <Divider />

      {/* Design Principles */}
      <ScrollReveal>
        <section id="principles" className="mb-16">
          <h2 className="text-3xl font-bold text-cream mb-6">Motion Design Principles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-navy-mid/50 rounded-lg border-l-4 border-blue-400">
              <h3 className="text-lg font-semibold text-cream mb-2">Purpose Over Flair</h3>
              <p className="text-cream/60">
                Every animation should serve a purpose - guiding attention, providing feedback, 
                or creating spatial awareness. Never animate just for decoration.
              </p>
            </div>
            
            <div className="p-6 bg-navy-mid/50 rounded-lg border-l-4 border-green-400">
              <h3 className="text-lg font-semibold text-cream mb-2">Physics-Based Movement</h3>
              <p className="text-cream/60">
                Real objects follow physics. Use spring animations that mimic natural movement 
                rather than linear transitions.
              </p>
            </div>
            
            <div className="p-6 bg-navy-mid/50 rounded-lg border-l-4 border-yellow-400">
              <h3 className="text-lg font-semibold text-cream mb-2">Respect the User</h3>
              <p className="text-cream/60">
                Always provide reduced motion options. Some users prefer no animations. 
                Make motion optional, not mandatory.
              </p>
            </div>
            
            <div className="p-6 bg-navy-mid/50 rounded-lg border-l-4 border-purple-400">
              <h3 className="text-lg font-semibold text-cream mb-2">Performance First</h3>
              <p className="text-cream/60">
                60fps is the goal. Use transforms and opacity for animations. 
                Avoid layout-triggering properties like width or height.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </CaseStudyLayout>
  );
}
