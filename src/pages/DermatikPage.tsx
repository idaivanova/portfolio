// ============================================
// Dermatik Case Study Page
// Complete case study page using all reusable components
// ============================================

import * as React from 'react';
import {
  CaseStudyLayout,
  CaseStudyHeader,
  SectionHeader,
  InfoCards,
  FeatureCardsGrid,
  Divider,
  PatientFlow,
  Timeline,
  PageFlow,
} from '@/components/case-studies';
import {
  heroData,
  projectScopeData,
  designProcessData,
  keyFeaturesData,
  patientFlowData,
  reflectionData,
  profileData,
} from '@/data/dermatik';

export default function DermatikPage() {
  return (
    <CaseStudyLayout activeProject="Dermatik">
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

      <Divider />

      {/* Design Process Section */}
      <section id="design-process">
        <SectionHeader
          label={designProcessData.label}
          title={designProcessData.title}
          description={designProcessData.description}
        />
        <Timeline items={designProcessData.timeline} image={designProcessData.image} />
      </section>

      <Divider />

      {/* Key Features Section */}
      <section id="features">
        <div className="flex flex-col gap-5">
          <SectionHeader
            label={keyFeaturesData.label}
            title={keyFeaturesData.title}
            description={keyFeaturesData.description}
          />
          <FeatureCardsGrid features={keyFeaturesData.features} columns={3} />
        </div>
      </section>

      <Divider />

      {/* Patient Flow Section */}
      <section id="patient-flow">
        <div className="flex flex-col gap-10">
          <SectionHeader
            label={patientFlowData.label}
            title={patientFlowData.title}
            description={patientFlowData.description}
          />
          <PatientFlow steps={patientFlowData.steps} />
        </div>
      </section>

      <Divider />

      {/* Profile Screen Section */}
      <section id="profile">
        <PageFlow
          direction="right"
          image={profileData.image}
          imageWidth={profileData.image.width}
          imageHeight={profileData.image.height}
        >
          <div className="flex flex-col gap-2.5">
            <h3 className="font-body text-2xl font-extrabold text-cream">
              {profileData.content.title}
            </h3>
            <div className="font-body text-sm leading-normal text-cream/90">
              {profileData.content.description}
            </div>
          </div>
        </PageFlow>
      </section>

      <Divider />

      {/* Results/Reflection Section */}
      <section id="results">
        <SectionHeader
          label={reflectionData.label}
          title={reflectionData.title}
          description={reflectionData.description}
        />
      </section>
    </CaseStudyLayout>
  );
}
