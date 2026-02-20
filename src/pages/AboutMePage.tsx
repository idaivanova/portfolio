// ============================================
// About Me Page
// Personal portfolio page with image collage and experience
// ============================================

import * as React from 'react';
import {
  CaseStudyLayout,
  ImageCollage,
  LogoGrid,
  EducationList,
  KeywordTags,
  Divider,
} from '@/components/case-studies';
import { heroData, experienceData, keywordsData } from '@/data/about';

export default function AboutMePage() {
  return (
    <CaseStudyLayout>
      {/* Hero Section with Image Collage */}
      <section id="hero" className="flex flex-col gap-10 items-center">
        <ImageCollage
          images={heroData.images}
          tags={heroData.floatingTags}
          containerHeight={567}
          containerWidth={926}
        />

        {/* Introduction */}
        <div className="flex flex-col gap-5 items-center px-20 py-2.5 w-full">
          <p className="font-body text-xl text-cream text-center">
            {heroData.intro.title}
          </p>
          <p className="font-body text-xl text-cream text-center">
            {heroData.intro.subtitle}
          </p>

          {/* Vertical Divider */}
          <div className="h-[30px] w-px bg-[#173748] rotate-90 my-2" />

          {/* Download CV Button */}
          <a
            href={heroData.cvButton.href}
            className="inline-flex items-center justify-center h-[34px] px-[15px] bg-white/10 rounded-sm font-body text-sm font-bold text-accent hover:bg-white/20 transition-colors"
          >
            {heroData.cvButton.label}
          </a>
        </div>
      </section>

      <Divider />

      {/* Experience Section */}
      <section id="experience" className="flex flex-col gap-10">
        <h2 className="font-body text-[32px] font-extrabold text-cream">
          {experienceData.title}
        </h2>

        {/* Companies */}
        <div className="flex flex-col gap-2.5">
          <h3 className="font-body text-2xl font-extrabold text-accent">
            {experienceData.sections[0].title}
          </h3>
          <LogoGrid logos={experienceData.sections[0].logos} />
        </div>

        {/* Freelance Clients */}
        <div className="flex flex-col gap-2.5">
          <h3 className="font-body text-2xl font-extrabold text-accent">
            {experienceData.sections[1].title}
          </h3>
          <LogoGrid logos={experienceData.sections[1].logos} />
        </div>

        {/* Education */}
        <div className="flex flex-col gap-5">
          <h3 className="font-body text-2xl font-extrabold text-accent">
            {experienceData.sections[2].title}
          </h3>
          <EducationList entries={experienceData.sections[2].entries} />
        </div>
      </section>

      <Divider />

      {/* Keywords Section */}
      <section id="keywords" className="flex flex-col gap-10 py-10">
        <h2 className="font-body text-[32px] font-extrabold text-cream">
          {keywordsData.title}
        </h2>
        <KeywordTags categories={keywordsData.categories} />
      </section>
    </CaseStudyLayout>
  );
}
