// ============================================
// SDZRN (Soda Zitrone) Case Study Page
// Austrian sparkling water brand concept
// ============================================

import { motion } from 'framer-motion';
import { CaseStudyLayout, Divider, SectionHeader } from '@/components/case-studies';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations';
import { GradientText } from '@/components/ui';
import {
  heroData,
  scopeData,
  conceptData,
  colorData,
  typographyData,
  logoData,
  messagingData,
  comparisonData,
  packagingData,
  insightsData,
  statsData,
} from '@/data/sdzrn';

function ColorSwatch({ name, hex, usage }: { name: string; hex: string; usage: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="w-full h-20 rounded-lg shadow-md"
        style={{ backgroundColor: hex }}
      />
      <div>
        <p className="font-semibold text-cream text-sm">{name}</p>
        <p className="text-mono text-xs text-cream/60">{hex}</p>
        <p className="text-cream/50 text-xs mt-1">{usage}</p>
      </div>
    </div>
  );
}

function ColorSection({ title, colors }: { title: string; colors: { name: string; hex: string; usage: string }[] }) {
  return (
    <div className="mb-6">
      <h4 className="text-lg font-semibold text-cream mb-4">{title}</h4>
      <div className="grid grid-cols-2 gap-4">
        {colors.map((color, idx) => (
          <ColorSwatch key={idx} {...color} />
        ))}
      </div>
    </div>
  );
}

function ComparisonBar({ 
  label, 
  value, 
  maxLength = 3,
  highlight = false 
}: { 
  label: string; 
  value: string; 
  maxLength?: number;
  highlight?: boolean;
}) {
  const filled = value.length;
  
  return (
    <div className="flex items-center gap-3">
      <span className="w-20 text-sm text-cream/70">{label}</span>
      <div className="flex-1 flex gap-1">
        {Array.from({ length: maxLength }).map((_, i) => (
          <div
            key={i}
            className={`h-2 flex-1 rounded-sm ${
              i < filled 
                ? (highlight ? 'bg-yellow-400' : 'bg-cyan-400') 
                : 'bg-cream/10'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function SDZRNPage() {
  return (
    <CaseStudyLayout>
      {/* Hero Section */}
      <ScrollReveal>
        <section id="intro" className="mb-16">
          <div className="flex flex-col gap-6">
            {/* Brand Title with Gradient */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
              <GradientText colors={['#87CEEB', '#B4E4FF', '#FFF44F']}>
                {heroData.title}
              </GradientText>
            </h1>
            
            {/* Tagline */}
            <p className="text-2xl md:text-3xl text-cream font-light">
              {heroData.tagline}
            </p>
            
            {/* Subtitle */}
            <p className="text-xl text-cyan-300 font-medium">
              {heroData.subtitle}
            </p>
            
            {/* Description */}
            <div className="text-cream/70 text-lg leading-relaxed max-w-2xl">
              {heroData.description}
            </div>
            
            {/* Meta tags */}
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="px-3 py-1 text-sm bg-cyan-500/20 text-cyan-300 rounded-full">
                {heroData.category}
              </span>
              <span className="px-3 py-1 text-sm bg-cream/10 text-cream/70 rounded-full">
                {heroData.year}
              </span>
              <span className="px-3 py-1 text-sm bg-yellow-500/20 text-yellow-300 rounded-full">
                Branding
              </span>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <Divider />

      {/* Project Scope */}
      <ScrollReveal>
        <section id="scope" className="mb-16">
          <SectionHeader 
            label="PROJECT SCOPE"
            title="Project Scope" 
            description="What I worked on"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-navy-mid/50 rounded-xl border border-cream/10">
              <p className="text-cream/50 text-sm mb-1">Role</p>
              <p className="text-cream font-medium">{scopeData.role}</p>
            </div>
            <div className="p-6 bg-navy-mid/50 rounded-xl border border-cream/10">
              <p className="text-cream/50 text-sm mb-1">Team</p>
              <p className="text-cream font-medium">{scopeData.team}</p>
            </div>
            <div className="p-6 bg-navy-mid/50 rounded-xl border border-cream/10">
              <p className="text-cream/50 text-sm mb-1">Timeframe</p>
              <p className="text-cream font-medium">{scopeData.timeframe}</p>
            </div>
          </div>
          
          {/* Skills */}
          <div className="mt-6 p-6 bg-navy-mid/30 rounded-xl border border-cream/10">
            <p className="text-cream/50 text-sm mb-3">Skills Applied</p>
            <div className="flex flex-wrap gap-2">
              {scopeData.skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1.5 text-sm bg-cyan-500/10 text-cyan-300 rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <Divider />

      {/* Brand Concept */}
      <ScrollReveal>
        <section id="concept" className="mb-16">
          <SectionHeader 
            label="BRAND CONCEPT"
            title="Brand Concept" 
            description="The philosophy behind SDZRN"
          />
          
          <div className="mb-8">
            <p className="text-cream/80 text-lg leading-relaxed">
              {conceptData.philosophy}
            </p>
          </div>
          
          {/* Key Messages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {conceptData.keyMessages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-5 bg-navy-mid/50 rounded-lg border border-cream/10 flex items-start gap-4"
              >
                <div className="p-2 bg-cyan-500/20 rounded-lg">
                  <message.icon className="w-5 h-5 text-cyan-300" />
                </div>
                <div>
                  <h4 className="text-cream font-semibold mb-1">{message.title}</h4>
                  <p className="text-cream/60 text-sm">{message.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <Divider />

      {/* Color Palette */}
      <ScrollReveal>
        <section id="colors" className="mb-16">
          <SectionHeader 
            label="COLOR PALETTE"
            title="Color Palette" 
            description="Alpine freshness meets citrus vibrancy"
          />
          
          {/* Primary Colors */}
          <ColorSection title={colorData.primary.name} colors={colorData.primary.colors} />
          
          {/* Secondary Colors */}
          <ColorSection title={colorData.secondary.name} colors={colorData.secondary.colors} />
          
          {/* Accent Colors */}
          <ColorSection title={colorData.accent.name} colors={colorData.accent.colors} />
          
          {/* Neutrals */}
          <ColorSection title={colorData.neutrals.name} colors={colorData.neutrals.colors} />
          
          {/* Color Psychology Note */}
          <div className="mt-8 p-5 bg-gradient-to-r from-cyan-500/10 to-yellow-500/10 rounded-lg border border-cream/10">
            <p className="text-cream/80 text-sm">
              <strong className="text-cyan-300">Blue</strong> communicates purity, water, and the Alpine heritage. 
              <strong className="text-yellow-300 ml-2">Yellow</strong> represents freshness, energy, and the natural lemon flavor. 
              Together, they create an instantly recognizable brand presence that stands out in the beverage aisle.
            </p>
          </div>
        </section>
      </ScrollReveal>

      <Divider />

      {/* Typography */}
      <ScrollReveal>
        <section id="typography" className="mb-16">
          <SectionHeader 
            label="TYPOGRAPHY"
            title="Typography" 
            description="Type recommendations for the brand"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {typographyData.recommendations.map((font, index) => (
              <div 
                key={index}
                className="p-6 bg-navy-mid/50 rounded-xl border border-cream/10"
              >
                <p 
                  className="text-3xl mb-2" 
                  style={{ fontFamily: font.font.includes('Krona') ? 'Krona One, sans-serif' : 'Montserrat, sans-serif' }}
                >
                  {font.font}
                </p>
                <p className="text-cyan-300 text-sm mb-2">{font.usage}</p>
                <p className="text-cream/60 text-sm">{font.reason}</p>
              </div>
            ))}
          </div>
          
          {/* Type Hierarchy */}
          <div className="p-6 bg-navy-mid/30 rounded-xl border border-cream/10">
            <h4 className="text-cream font-semibold mb-4">Type Scale</h4>
            <div className="space-y-3">
              {typographyData.hierarchy.map((item, index) => (
                <div key={index} className="flex items-baseline gap-4">
                  <span className="w-32 text-cream/50 text-sm">{item.element}</span>
                  <span 
                    className="text-cream"
                    style={{ 
                      fontSize: item.size,
                      fontWeight: item.weight === 'Bold' ? 700 : item.weight === 'SemiBold' ? 600 : item.weight === 'Medium' ? 500 : 400,
                      fontFamily: item.element.includes('Brand') || item.element.includes('Headline') ? 'Krona One, sans-serif' : 'Montserrat, sans-serif'
                    }}
                  >
                    {item.element}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <Divider />

      {/* Logo Concepts */}
      <ScrollReveal>
        <section id="logos" className="mb-16">
          <SectionHeader 
            label="LOGO CONCEPTS"
            title="Logo Concepts" 
            description="Three directions explored"
          />
          
          <p className="text-cream/70 mb-8">{logoData.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {logoData.concepts.map((concept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl border ${
                  concept.name.includes(logoData.primary)
                    ? 'bg-yellow-500/10 border-yellow-400/30'
                    : 'bg-navy-mid/50 border-cream/10'
                }`}
              >
                {/* Logo Preview Box */}
                <div className="h-32 mb-4 rounded-lg bg-gradient-to-br from-cyan-500/20 to-yellow-500/20 flex items-center justify-center">
                  <GradientText colors={['#87CEEB', '#FFF44F']} className="text-4xl font-bold">
                    {index === 0 ? 'SDZRN' : index === 1 ? 'S' : 'A'}
                  </GradientText>
                </div>
                
                <h4 className={`font-semibold mb-2 ${
                  concept.name.includes(logoData.primary) ? 'text-yellow-300' : 'text-cream'
                }`}>
                  {concept.name}
                  {concept.name.includes(logoData.primary) && (
                    <span className="ml-2 text-xs bg-yellow-500/20 px-2 py-0.5 rounded">Selected</span>
                  )}
                </h4>
                <p className="text-cream/60 text-sm mb-3">{concept.description}</p>
                <p className="text-cyan-300/70 text-xs">{concept.style}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-6 p-5 bg-navy-mid/30 rounded-lg border border-cream/10">
            <p className="text-cream/80 text-sm">
              <strong className="text-yellow-300">Rationale:</strong> {logoData.rationale}
            </p>
          </div>
        </section>
      </ScrollReveal>

      <Divider />

      {/* Messaging Framework */}
      <ScrollReveal>
        <section id="messaging" className="mb-16">
          <SectionHeader 
            label="MESSAGING"
            title="Messaging Framework" 
            description="How we speak to the audience"
          />
          
          {/* Main Tagline */}
          <div className="mb-8 p-6 bg-gradient-to-r from-cyan-500/10 to-yellow-500/10 rounded-xl border border-cyan-500/20">
            <p className="text-cream/50 text-sm mb-2">Brand Tagline</p>
            <p className="text-3xl md:text-4xl font-bold text-cream">
              {messagingData.tagline}
            </p>
          </div>
          
          {/* Brand Pillars */}
          <div className="mb-8">
            <h4 className="text-cream font-semibold mb-4">Brand Pillars</h4>
            <div className="space-y-4">
              {messagingData.pillars.map((pillar, index) => (
                <div key={index} className="p-4 bg-navy-mid/50 rounded-lg border border-cream/10">
                  <p className="text-cyan-300 text-sm font-medium mb-1">{pillar.pillar}</p>
                  <p className="text-cream text-lg mb-2">"{pillar.statement}"</p>
                  <p className="text-cream/50 text-sm">{pillar.proof}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Key Claims */}
          <div className="p-6 bg-navy-mid/30 rounded-xl border border-cream/10">
            <h4 className="text-cream font-semibold mb-4">Key Claims</h4>
            <div className="flex flex-wrap gap-2">
              {messagingData.keyClaims.map((claim, index) => (
                <span 
                  key={index}
                  className="px-3 py-1.5 text-sm bg-yellow-500/10 text-yellow-300 rounded-md border border-yellow-500/20"
                >
                  {claim}
                </span>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <Divider />

      {/* Comparison Infographic */}
      <ScrollReveal>
        <section id="comparison" className="mb-16">
          <SectionHeader 
            label="COMPARISON"
            title={comparisonData.title} 
            description={comparisonData.subtitle}
          />
          
          {/* Comparison Table */}
          <div className="space-y-4 mb-8">
            {comparisonData.categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-5 rounded-xl border ${
                  category.isTarget 
                    ? 'bg-gradient-to-r from-cyan-500/10 to-yellow-500/10 border-yellow-400/30'
                    : 'bg-navy-mid/50 border-cream/10'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className={`font-semibold ${category.isTarget ? 'text-yellow-300' : 'text-cream'}`}>
                      {category.name}
                    </h4>
                    <p className="text-cream/50 text-sm">{category.examples}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-cream font-mono">{category.sugar} sugar</p>
                    <p className="text-cream/50 text-sm">{category.calories} cal</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <ComparisonBar 
                    label="Natural" 
                    value={category.natural} 
                    highlight={category.isTarget}
                  />
                  <ComparisonBar 
                    label="Refresh" 
                    value={category.refreshment} 
                    highlight={category.isTarget}
                  />
                </div>
                
                {category.isTarget && (
                  <div className="mt-3 pt-3 border-t border-yellow-400/20">
                    <p className="text-yellow-300 text-sm font-medium">
                      ✓ Optimal balance: refreshment without the sugar
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          
          {/* Benefits List */}
          <div className="p-6 bg-navy-mid/30 rounded-xl border border-cream/10">
            <h4 className="text-cream font-semibold mb-4">Why Choose SDZRN?</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {comparisonData.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <span className="text-cyan-300 text-xs">✓</span>
                  </div>
                  <span className="text-cream/70 text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <Divider />

      {/* Packaging Concepts */}
      <ScrollReveal>
        <section id="packaging" className="mb-16">
          <SectionHeader 
            label="PACKAGING"
            title={packagingData.title} 
            description={packagingData.description}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {packagingData.concepts.map((concept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-navy-mid/50 rounded-xl border border-cream/10"
              >
                {/* Package Preview */}
                <div className="h-40 mb-4 rounded-lg bg-gradient-to-b from-cyan-500/10 to-yellow-500/10 flex items-end justify-center pb-4">
                  <div className="w-16 h-28 bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-t-lg rounded-b-sm flex items-center justify-center">
                    <span className="text-white font-bold text-xs">SDZRN</span>
                  </div>
                </div>
                
                <h4 className="text-cream font-semibold mb-2">{concept.name}</h4>
                <p className="text-cream/60 text-sm mb-4">{concept.description}</p>
                
                <div className="space-y-2 text-sm">
                  <p className="text-cyan-300">
                    <span className="text-cream/50">Materials:</span> {concept.materials}
                  </p>
                  <p className="text-yellow-300">
                    <span className="text-cream/50">Sizes:</span> {concept.sizes}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Sustainability */}
          <div className="p-6 bg-green-500/10 rounded-xl border border-green-500/20">
            <h4 className="text-green-300 font-semibold mb-4">Sustainability Commitment</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {packagingData.sustainability.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-green-400">🌱</span>
                  <span className="text-cream/70 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <Divider />

      {/* Design Insights */}
      <ScrollReveal>
        <section id="insights" className="mb-16">
          <SectionHeader 
            label="INSIGHTS"
            title={insightsData.title} 
            description="Key learnings from this project"
          />
          
          <div className="space-y-4 mb-8">
            {insightsData.learnings.map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-navy-mid/50 rounded-lg border-l-4 border-cyan-400"
              >
                <h4 className="text-cream font-semibold mb-2">{insight.title}</h4>
                <p className="text-cream/60">{insight.detail}</p>
              </motion.div>
            ))}
          </div>
          
          {/* Results */}
          <div className="p-6 bg-gradient-to-r from-cyan-500/10 to-yellow-500/10 rounded-xl border border-cyan-500/20">
            <h4 className="text-cream font-semibold mb-4">Project Outcomes</h4>
            <ul className="space-y-2">
              {insightsData.results.map((result, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-yellow-400">★</span>
                  <span className="text-cream/80">{result}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </ScrollReveal>

      {/* Stats Section */}
      <Divider />
      
      <ScrollReveal>
        <section id="stats" className="mb-8">
          <SectionHeader 
          label="IMPACT"
            title={statsData.title}
          />
          
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {statsData.metrics.map((metric, index) => (
              <StaggerItem key={index}>
                <div className="text-center p-6 bg-navy-mid/30 rounded-xl">
                  <div className="text-4xl md:text-5xl font-bold text-cyan-300 mb-2">
                    {metric.value}{metric.suffix}
                  </div>
                  <div className="text-cream/60 text-sm">{metric.label}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      </ScrollReveal>

    </CaseStudyLayout>
  );
}
