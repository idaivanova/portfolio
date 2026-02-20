// ============================================
// Pimcore Platform Case Study Page
// Enterprise PIM platform UX redesign case study
// ============================================

import * as React from 'react';
import {
  CaseStudyLayout,
  CaseStudyHeader,
  SectionHeader,
  InfoCards,
  Divider,
  FeatureCardsGrid,
} from '@/components/case-studies';
import {
  heroData,
  projectScopeData,
  contributionData,
  keyFeaturesData,
  reflectionData,
} from '@/data/pimcore';

export default function PimcorePage() {
  return (
    <CaseStudyLayout>
      {/* Hero Section */}
      <section id="hero">
        <CaseStudyHeader
          image={heroData.image}
          title={heroData.title}
          description={heroData.description}
          tags={heroData.tags}
        />
      </section>

      <Divider />

      {/* Project Scope & Results */}
      <section id="scope">
        <InfoCards scope={projectScopeData.scope} results={projectScopeData.results} />
      </section>

      {/* Contribution Section */}
      <section id="contribution">
        <SectionHeader
          label={contributionData.label}
          title={contributionData.title}
          description={contributionData.description}
        />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {contributionData.directionPoints.map((point, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 bg-navy-dark/50 rounded-sm border border-cream/10"
            >
              <span className="text-accent font-bold">{index + 1}</span>
              <span className="text-cream/80">{point}</span>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* Key Features Section */}
      <section id="features">
        <SectionHeader
          label={keyFeaturesData.label}
          title={keyFeaturesData.title}
          description={keyFeaturesData.description}
        />
        <div className="mt-8">
          <FeatureCardsGrid features={keyFeaturesData.features} />
        </div>
      </section>

      <Divider />

      {/* Reflection Section */}
      <section id="reflection">
        <SectionHeader
          label={reflectionData.label}
          title={reflectionData.title}
        />
        <div className="mt-6 text-cream/80 leading-relaxed">
          {reflectionData.content}
        </div>
      </section>
    </CaseStudyLayout>
  );
}
