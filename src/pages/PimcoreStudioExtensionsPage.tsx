// ============================================
// Pimcore Studio — Part 2 of 2
// Bridging dev and UX for Pimcore Studio native extensions.
// ============================================

import {
  CaseStudyLayout,
  CaseStudyHeader,
  CaseStudySeriesNav,
  SectionHeader,
  InfoCards,
  Divider,
  FeatureCardsGrid,
} from '@/components/case-studies';
import { pimcoreSeries } from '@/data/pimcore';
import {
  heroData,
  scopeData,
  contextData,
  deliverablesData,
  principlesData,
  libraryData,
  microcopyData,
  aiDevData,
  outcomeData,
  videoData,
} from '@/data/pimcore-studio-extensions';

export default function PimcoreStudioExtensionsPage() {
  return (
    <CaseStudyLayout>
      {/* Series breadcrumb */}
      <CaseStudySeriesNav
        seriesTitle={pimcoreSeries.title}
        seriesHref={pimcoreSeries.hubHref}
        parts={pimcoreSeries.parts}
        activePartId="studio-extensions"
      />

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

      {/* Project Scope */}
      <section id="scope">
        <InfoCards scope={scopeData.scope} results={scopeData.results} />
      </section>

      <Divider />

      {/* Context — the problem */}
      <section id="context">
        <SectionHeader
          label={contextData.label}
          title={contextData.title}
          description={contextData.description}
        />
        <div className="mt-6 leading-relaxed">{contextData.content}</div>
      </section>

      <Divider />

      {/* The two deliverables */}
      <section id="deliverables">
        <SectionHeader
          label={deliverablesData.label}
          title={deliverablesData.title}
          description={deliverablesData.description}
        />
        <div className="mt-8">
          <FeatureCardsGrid features={deliverablesData.features} columns={2} />
        </div>
      </section>

      <Divider />

      {/* Design principles */}
      <section id="principles">
        <SectionHeader
          label={principlesData.label}
          title={principlesData.title}
          description={principlesData.description}
        />
        <div className="mt-8">
          <FeatureCardsGrid features={principlesData.features} columns={2} />
        </div>
      </section>

      <Divider />

      {/* Storybook & component system */}
      <section id="library">
        <SectionHeader
          label={libraryData.label}
          title={libraryData.title}
          description={libraryData.description}
        />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {libraryData.points.map((point, index) => (
            <div
              key={point.title}
              className="flex flex-col gap-2.5 min-w-0 p-5 rounded-lg bg-zinc-900 border border-zinc-800"
            >
              <span className="font-body text-sm font-bold text-[var(--color-accent-text)]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="font-body text-xl font-bold leading-normal text-white">
                {point.title}
              </h3>
              <p className="font-body text-sm leading-normal text-zinc-300">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* Microcopy rules */}
      <section id="microcopy">
        <SectionHeader
          label={microcopyData.label}
          title={microcopyData.title}
          description={microcopyData.description}
        />
        <ul className="mt-8 flex flex-col gap-3">
          {microcopyData.rules.map((rule) => (
            <li
              key={rule.title}
              className="flex flex-col gap-1.5 min-w-0 p-4 bg-navy-dark/50 rounded-sm border border-border"
            >
              <h3 className="font-body text-base font-bold leading-snug text-foreground">
                {rule.title}
              </h3>
              <p className="font-body text-sm leading-normal text-foreground/80">
                {rule.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <Divider />

      {/* AI-assisted development */}
      <section id="ai-development">
        <SectionHeader
          label={aiDevData.label}
          title={aiDevData.title}
          description={aiDevData.description}
        />
        <div className="mt-6 leading-relaxed">{aiDevData.content}</div>
      </section>

      <Divider />

      {/* Outcome */}
      <section id="outcome">
        <SectionHeader label={outcomeData.label} title={outcomeData.title} />
        <div className="mt-6 leading-relaxed">{outcomeData.content}</div>
      </section>

      <Divider />

      {/* Video Walkthrough */}
      <section id="video">
        <SectionHeader
          label={videoData.label}
          title={videoData.title}
          description={videoData.description}
        />
        <div className="mt-8 aspect-video rounded-xl overflow-hidden border border-border">
          <iframe
            src="https://www.youtube.com/embed/jC58hL2cR4w"
            title={videoData.title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>
    </CaseStudyLayout>
  );
}
