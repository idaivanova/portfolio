import * as React from 'react';
import { useLanguage } from '../../lib/LanguageContext';
import { Button, buttonVariants } from '../ui/button';
import { MagneticButton } from '../ui/MagneticButton';
import { ScrollReveal } from '../animations/ScrollReveal';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';

export function CTASection() {
  const { t } = useLanguage();
  const [isResumeNoticeVisible, setIsResumeNoticeVisible] = React.useState(false);

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-dark)] p-8 sm:p-12 lg:p-16 text-center">
            {/* Background decoration — soft neutral smudges over the coral panel */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                {t.cta.heading}
              </h2>
              <p className="text-lg text-white/85 max-w-2xl mx-auto mb-8">
                {t.cta.subheading}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <MagneticButton
                  href="mailto:ivanova.contact@gmail.com"
                  className={cn(
                    buttonVariants({ variant: 'master-white', size: 'lg' }),
                    'w-full sm:w-auto group bg-white text-[var(--color-accent-ink)] shadow-[var(--glow)] hover:bg-white/90 active:bg-white/80 hover:text-[var(--color-accent-ink)] focus-visible:outline-white focus-visible:ring-white'
                  )}
                >
                  {t.cta.getInTouch}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </MagneticButton>
                <Button
                  size="lg"
                  variant="secondary-white"
                  type="button"
                  onClick={() => setIsResumeNoticeVisible(true)}
                  className="w-full sm:w-auto border-white/40 text-white hover:bg-white/10 hover:text-white focus-visible:outline-white focus-visible:ring-white"
                >
                  {t.cta.viewResume}
                </Button>
              </div>
              {isResumeNoticeVisible && (
                <p
                  role="status"
                  className="mt-6 inline-block rounded-full bg-white/20 px-4 py-2 text-sm text-white"
                >
                  {t.cta.cvAvailableNote}
                </p>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}