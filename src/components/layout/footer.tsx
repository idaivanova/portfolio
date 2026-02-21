// ============================================
// Footer Component
// Contains contact info, social links, navigation
// ============================================

import * as React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { LinkedInIcon, GithubIcon } from '../ui/icon';
import { useLanguage } from '../../lib/LanguageContext';

// Contact information
const contactInfo = {
  email: 'ivanova.contact@gmail.com',
  phone: '+43 678 79 169',
  website: 'https://p5aholic.me/',
  experiments: 'https://experiments.p5aholic.me/',
};

// Social links
const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: LinkedInIcon,
  },
  {
    name: 'GitHub',
    href: 'https://github.com',
    icon: GithubIcon,
  },
];

// Quick navigation links
const quickLinksData = [
  { labelKey: 'home', href: '/' },
  { labelKey: 'about', href: '/about' },
  { labelKey: 'projects', href: '/#projects' },
];

// Projects list
const projectLinksData = [
  { labelKey: 'pimcore', href: '/case-studies/pimcore' },
  { labelKey: 'ergowork', href: '/case-studies/ergowork' },
  { labelKey: 'dermatik', href: '/case-studies/dermatik' },
];

// ============================================
// Footer Section Component
// ============================================

interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
  delay?: number;
}

function FooterSection({ title, children, delay = 0 }: FooterSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      <h3 className="text-sm font-semibold tracking-wider uppercase text-foreground mb-4">
        {title}
      </h3>
      {children}
    </motion.div>
  );
}

// ============================================
// Footer Link Component
// ============================================

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}

function FooterLink({ href, children, external }: FooterLinkProps) {
  const className =
    'text-muted-foreground hover:text-accent transition-colors duration-200';

  // External links (http, mailto, tel)
  if (external || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  // Internal links - use React Router Link
  return (
    <Link to={href} className={className}>
      {children}
    </Link>
  );
}

// ============================================
// Main Footer Component
// ============================================

interface FooterProps {
  className?: string;
  showCTA?: boolean;
}

export function Footer({ className, showCTA = true }: FooterProps) {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const quickLinks = quickLinksData.map((link) => ({
    ...link,
    label: t.nav[link.labelKey as keyof typeof t.nav],
  }));

  const projectLinks = projectLinksData.map((link) => ({
    ...link,
    label: t.features.caseStudies[link.labelKey as keyof typeof t.features.caseStudies].title,
  }));

  return (
    <footer className={cn('w-full bg-muted/50', className)}>
      {/* CTA Section */}
      {showCTA && (
        <div className="border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t.footer.ctaHeading}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                {t.footer.ctaSubheading}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-foreground bg-accent rounded-lg hover:bg-accent/90 transition-colors shadow-sm hover:shadow-md"
                >
                  {t.footer.ctaGetInTouch}
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-accent border-2 border-accent rounded-lg hover:bg-accent/10 transition-colors"
                >
                  {t.footer.ctaViewProjects}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      )}

      {/* Main Footer Content */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand & Contact */}
            <FooterSection title={t.footer.contactHeading} delay={0}>
              <ul className="space-y-3">
                <li>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </li>
                <li className="pt-2">
                  <div className="flex items-center gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors"
                        aria-label={social.name}
                      >
                        <social.icon size="md" />
                      </a>
                    ))}
                  </div>
                </li>
              </ul>
            </FooterSection>

            {/* Quick Links */}
            <FooterSection title={t.footer.navigationHeading} delay={0.1}>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <FooterLink href={link.href}>{link.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </FooterSection>

            {/* Projects */}
            <FooterSection title={t.footer.projectsHeading} delay={0.2}>
              <ul className="space-y-3">
                {projectLinks.map((link) => (
                  <li key={link.href}>
                    <FooterLink href={link.href}>{link.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </FooterSection>

            {/* Personal Links */}
            <FooterSection title={t.footer.linksHeading} delay={0.3}>
              <ul className="space-y-3">
                <li>
                  <FooterLink href={contactInfo.website} external>
                    {t.footer.personalWebsite}
                  </FooterLink>
                </li>
                <li>
                  <FooterLink href={contactInfo.experiments} external>
                    {t.footer.experiments}
                  </FooterLink>
                </li>
              </ul>
            </FooterSection>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Ida&apos;s Portfolio. {t.footer.allRightsReserved}.
            </p>
            <p className="text-sm text-muted-foreground">
              {t.footer.uxDesignerBasedIn}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
