// ============================================
// Buzz Page - Bumblebee Conservation App
// Gamification & character-driven UX showcase
// Uses data from bumblebee-app.tsx
// ============================================

import { CaseStudyLayout, InfoCards, Divider } from '@/components/case-studies';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import {
  heroData,
  projectScopeData,
  featuresData,
  charactersData,
  microInteractionsData,
  visualData,
  lessonsData,
} from '@/data/bumblebee-app';

export default function BuzzPage() {
  return (
    <CaseStudyLayout activeProject="Buzz">
      {/* Hero Section */}
      <ScrollReveal>
        <section id="intro" className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Project preview image placeholder */}
            <div 
              className="w-full md:w-[350px] h-[212px] rounded-lg flex items-center justify-center border border-cream/10 shrink-0"
              style={{
                background: 'linear-gradient(135deg, #FFB80020 0%, #FB923C20 100%)',
              }}
            >
              <span className="text-6xl">🐝</span>
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

      {/* Key Features */}
      <ScrollReveal>
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-cream mb-6">{featuresData.title}</h2>
          <div className="space-y-4">
            {featuresData.items.map((feature, index) => (
              <div key={index} className="p-6 bg-navy-mid/50 rounded-lg border border-cream/10">
                <h3 className="text-lg font-semibold text-cream mb-2">
                  🐝 {feature.title}
                </h3>
                <p className="text-cream/60 mb-3">{feature.description}</p>
                <ul className="space-y-1">
                  {feature.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="text-cream/50 text-sm flex items-start gap-2">
                      <span className="text-accent">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Bee Characters */}
      <ScrollReveal>
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-cream mb-2">{charactersData.title}</h2>
          <p className="text-cream/60 mb-6">{charactersData.subtitle}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {charactersData.characters.map((character, index) => (
              <div key={index} className="p-4 bg-navy-mid/50 rounded-lg">
                <h4 className="text-cream font-medium flex items-center gap-2">
                  <span className="text-2xl">🐝</span>
                  {character.name}
                </h4>
                <p className="text-accent text-sm mt-1">{character.role}</p>
                <p className="text-cream/50 text-sm">{character.personality}</p>
                <p className="text-cream/40 text-xs mt-2 italic">{character.animation}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <Divider />

      {/* Micro-interactions */}
      <ScrollReveal>
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-cream mb-6">{microInteractionsData.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {microInteractionsData.interactions.slice(0, 8).map((interaction, index) => (
              <div key={index} className="flex gap-3 p-3 bg-navy-mid/30 rounded-lg">
                <span className="text-xl">✨</span>
                <div>
                  <p className="text-cream font-medium">{interaction.trigger}</p>
                  <p className="text-cream/50 text-sm">{interaction.animation}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Visual Design */}
      <ScrollReveal>
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-cream mb-6">{visualData.title}</h2>
          <div className="flex flex-wrap gap-4 mb-6">
            {visualData.palette.map((color, index) => (
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
          <div className="p-4 bg-navy-mid/30 rounded-lg">
            <p className="text-cream/60 text-sm">
              <span className="font-medium">Typography:</span> {visualData.typography.headings} / {visualData.typography.body}
            </p>
          </div>
        </section>
      </ScrollReveal>

      <Divider />

      {/* Design Insights */}
      <ScrollReveal>
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-cream mb-6">{lessonsData.title}</h2>
          <div className="space-y-4">
            {lessonsData.insights.map((insight, index) => (
              <div key={index} className="p-4 bg-navy-mid/50 rounded-lg border-l-2 border-accent">
                <p className="text-cream font-medium">{insight.lesson}</p>
                <p className="text-cream/60 text-sm mt-1">{insight.detail}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>
    </CaseStudyLayout>
  );
}
