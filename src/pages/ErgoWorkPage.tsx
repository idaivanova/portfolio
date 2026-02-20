// ============================================
// ErgoWork Case Study Page
// Complete case study page using all reusable components
// ============================================

import * as React from 'react';
import {
  CaseStudyLayout,
  CaseStudyHeader,
  SectionHeader,
  InfoCards,
  FeatureCardsGrid,
  PersonaGrid,
  Divider,
  FourColumnGrid,
  ImageMosaic,
  ImagePair,
  SitemapSection,
  PageFlowSection,
  PageFlowSplit,
} from '@/components/case-studies';
import {
  heroData,
  projectScopeData,
  contributionData,
  researchData,
  brandIdentityData,
  sitemapData,
  personasData,
  pageFlowsData,
  reflectionData,
  fullWidthImages,
} from '@/data/ergowork';

export default function ErgoWorkPage() {
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
        <FourColumnGrid items={contributionData.directionItems} />
      </section>

      <Divider />

      {/* Research/Key Insights Section */}
      <section id="research">
        <SectionHeader
          label={researchData.label}
          title={researchData.title}
          description={researchData.description}
        />
        <FeatureCardsGrid features={researchData.features} columns={3} />
      </section>

      <Divider />

      {/* Brand Identity Section */}
      <section id="brand">
        <SectionHeader
          label={brandIdentityData.label}
          title={brandIdentityData.title}
          description={brandIdentityData.description}
        />
        <ImageMosaic
          images={brandIdentityData.mosaicImages}
          containerHeight={brandIdentityData.containerHeight}
          backgroundColor="#081827"
        />
      </section>

      {/* Sitemap Section */}
      <section id="sitemap">
        <SitemapSection
          label={sitemapData.label}
          title={sitemapData.title}
          description={sitemapData.description}
          mainImage={sitemapData.mainImage}
          overlayImages={sitemapData.overlayImages}
          footerText={sitemapData.footerText}
          containerHeight={sitemapData.containerHeight}
        />
      </section>

      {/* Personas Section */}
      <section id="personas">
        <div className="flex flex-col gap-5">
          <SectionHeader
            label={personasData.label}
            title={personasData.title}
            description={personasData.description}
          />
          <PersonaGrid personas={personasData.personas} />
        </div>
      </section>

      <Divider />

      {/* Page Flows Section */}
      <section id="flows">
        <div className="flex flex-col gap-5">
          <SectionHeader
            label={pageFlowsData.label}
            title={pageFlowsData.title}
            description={pageFlowsData.description}
          />

          {/* Note about prototype videos could go here */}
        </div>
      </section>

      {/* Page Flow: Homepage */}
      <section id="homepage-flow">
        <PageFlowSection
          direction="right"
          image={pageFlowsData.flows[0].image}
          title={pageFlowsData.flows[0].title}
          intent={pageFlowsData.flows[0].intent}
          objective={pageFlowsData.flows[0].objective}
          keyActions={pageFlowsData.flows[0].keyActions}
        />
        <div className="mt-5">
          <ImagePair images={fullWidthImages.homepagePair as [any, any]} aspectRatio="auto" />
        </div>
      </section>

      <Divider />

      {/* Page Flow: Business Customers */}
      <section id="business-flow">
        <PageFlowSection
          direction="left"
          image={pageFlowsData.flows[1].image}
          title={pageFlowsData.flows[1].title}
          intent={pageFlowsData.flows[1].intent}
          objective={pageFlowsData.flows[1].objective}
          keyActions={pageFlowsData.flows[1].keyActions}
          additionalContent={pageFlowsData.flows[1].additionalContent}
        />
        <div className="mt-5 flex items-center justify-between">
          <div className="h-[128px] w-[443px] overflow-hidden">
            <img
              src={fullWidthImages.businessPair[0].src}
              alt={fullWidthImages.businessPair[0].alt}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-[276px] w-[518px] overflow-hidden">
            <img
              src={fullWidthImages.businessPair[1].src}
              alt={fullWidthImages.businessPair[1].alt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <Divider />

      {/* Page Flow: Adjustable Tables (Split Layout) */}
      <section id="adjustable-tables-flow">
        <PageFlowSplit
          image={{
            src: pageFlowsData.flows[2].image.src,
            alt: pageFlowsData.flows[2].image.alt,
            width: '100%',
            height: 'auto',
          }}
          leftContent={pageFlowsData.flows[2].leftContent}
          rightContent={pageFlowsData.flows[2].rightContent}
        />
      </section>

      <Divider />

      {/* Page Flow: Product Detail */}
      <section id="product-detail-flow">
        <PageFlowSection
          direction="left"
          image={pageFlowsData.flows[3].image}
          title={pageFlowsData.flows[3].title}
          intent={pageFlowsData.flows[3].intent}
          objective={pageFlowsData.flows[3].objective}
          keyActions={pageFlowsData.flows[3].keyActions}
          additionalContent={pageFlowsData.flows[3].additionalContent}
        />
        <div className="mt-5">
          <img
            src={fullWidthImages.productDetail.src}
            alt={fullWidthImages.productDetail.alt}
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      <Divider />

      {/* Page Flow: Request Offer */}
      <section id="request-offer-flow">
        <PageFlowSection
          direction="right"
          image={pageFlowsData.flows[4].image}
          title={pageFlowsData.flows[4].title}
          intent={pageFlowsData.flows[4].intent}
          objective={pageFlowsData.flows[4].objective}
          keyActions={pageFlowsData.flows[4].keyActions}
        />
      </section>

      <Divider />

      {/* Reflection & Outlook Section */}
      <section id="reflection">
        <SectionHeader
          label={reflectionData.label}
          title={reflectionData.title}
          description={reflectionData.description}
        />
      </section>
    </CaseStudyLayout>
  );
}
