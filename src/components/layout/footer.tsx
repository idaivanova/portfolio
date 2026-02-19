// ============================================
// Footer Component
// Contains contact info, social links, navigation
// ============================================

import * as React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { LinkedInIcon, GithubIcon } from '../ui/icon';

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
const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/#projects' },
];

// Projects list
const projectLinks = [
  { label: 'Pimcore Platform', href: '/case-studies/pimcore' },
  { label: 'ErgoWork', href: '/case-studies/ergowork' },
  { label: 'Dermatik', href: '/case-studies/dermatik' },
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
      <h3 className="text-sm font-semibold tracking-wider uppercase text-cream mb-4">
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
    'text-cream/60 hover:text-accent transition-colors duration-200';

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
  const currentYear = new Date().getFullYear();

  return (
    <footer className={cn('w-full bg-navy-dark/50', className)}>
      {/* CTA Section */}
      {showCTA && (
        <div className="border-t border-cream/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-cream mb-4">
                Let&apos;s work together
              </h2>
              <p className="text-lg text-cream/60 mb-8 max-w-2xl mx-auto">
                Have a project in mind? Let&apos;s discuss how I can help bring your ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-cream bg-accent rounded-lg hover:bg-accent-dark transition-colors shadow-sm hover:shadow-md"
                >
                  Get in Touch
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-accent border-2 border-accent rounded-lg hover:bg-accent/10 transition-colors"
                >
                  View Projects
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      )}

      {/* Main Footer Content */}
      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand & Contact */}
            <FooterSection title="Contact" delay={0}>
              <ul className="space-y-3">
                <li>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-cream/60 hover:text-accent transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                    className="text-cream/60 hover:text-accent transition-colors"
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
                        className="text-cream/50 hover:text-accent transition-colors"
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
            <FooterSection title="Navigation" delay={0.1}>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <FooterLink href={link.href}>{link.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </FooterSection>

            {/* Projects */}
            <FooterSection title="Projects" delay={0.2}>
              <ul className="space-y-3">
                {projectLinks.map((link) => (
                  <li key={link.href}>
                    <FooterLink href={link.href}>{link.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </FooterSection>

            {/* Personal Links */}
            <FooterSection title="Links" delay={0.3}>
              <ul className="space-y-3">
                <li>
                  <FooterLink href={contactInfo.website} external>
                    Personal Website
                  </FooterLink>
                </li>
                <li>
                  <FooterLink href={contactInfo.experiments} external>
                    Experiments
                  </FooterLink>
                </li>
              </ul>
            </FooterSection>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-cream/50">
              © {currentYear} Idas Portfolio. All rights reserved.
            </p>
            <p className="text-sm text-cream/50">
              UX/UI Designer based in Austria
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
