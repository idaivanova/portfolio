// ============================================
// Case Study Layout Component
// Wrapper for all case study pages with sidebar
// ============================================

import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Sidebar, Logo } from './Sidebar';
import { ArrowLeft } from 'lucide-react';

export interface CaseStudyLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const defaultNavItems = [
  { label: 'Intro', href: '#intro' },
  { label: 'Selected work', href: '#work', isIndented: false, isSection: true },
  // Real Case Studies
  { label: 'Pimcore Platform', href: '/case-studies/pimcore', isIndented: true, category: 'real' },
  { label: 'ErgoWork', href: '/case-studies/ergowork', isIndented: true, category: 'real' },
  { label: 'Dermatik', href: '/case-studies/dermatik', isIndented: true, category: 'real' },
  { label: 'SDZRN', href: '/case-studies/sdzrn', isIndented: true, category: 'real' },
  // Playground Section
  { label: 'Playground', href: '#playground', isIndented: false, isSection: true, category: 'playground' },
  { label: 'Buzz', href: '/case-studies/buzz', isIndented: true, category: 'playground' },
  { label: 'Flutter', href: '/case-studies/flutter', isIndented: true, category: 'playground' },
  { label: 'Buzz HQ', href: '/case-studies/buzz-hq', isIndented: true, category: 'playground' },
  { label: 'Flutter Fields', href: '/case-studies/flutter-fields', isIndented: true, category: 'playground' },
  { label: 'About', href: '/about' },
];

const defaultContactInfo = {
  email: 'ivanova.contact@gmail.com',
  phone: '+43 678 79 169',
  linkedin: 'https://linkedin.com',
};

export function CaseStudyLayout({
  children,
  className,
}: CaseStudyLayoutProps) {
  const location = useLocation();
  
  const getActiveProject = () => {
    const path = location.pathname;
    if (path.includes('/case-studies/pimcore')) return 'Pimcore Platform';
    if (path.includes('/case-studies/ergowork')) return 'ErgoWork';
    if (path.includes('/case-studies/dermatik')) return 'Dermatik';
    if (path.includes('/case-studies/sdzrn')) return 'SDZRN';
    if (path.includes('/case-studies/buzz') && !path.includes('hq')) return 'Buzz';
    if (path.includes('/case-studies/buzz-hq')) return 'Buzz HQ';
    if (path.includes('/case-studies/flutter') && !path.includes('fields')) return 'Flutter';
    if (path.includes('/case-studies/flutter-fields')) return 'Flutter Fields';
    return null;
  };

  const activeProject = getActiveProject();

  const navItems = defaultNavItems.map((item) => ({
    ...item,
    isActive: item.label === activeProject,
  }));

  return (
    <div
      className={cn(
        'min-h-screen flex gap-10 px-[50px] bg-navy-darkest',
        className
      )}
    >
      {/* Sidebar */}
      <div className="flex flex-row items-center self-stretch">
        <Sidebar
          logo={<Logo name="Ida" />}
          navItems={navItems}
          contactInfo={defaultContactInfo}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-[#081827] min-h-screen">
        <div className="p-[50px]">
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-cream/60 hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="flex flex-col gap-[30px] max-w-[1000px]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
