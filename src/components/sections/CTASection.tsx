import { Button } from '../ui/button';
import { ScrollReveal } from '../animations/ScrollReveal';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent to-accent-dark p-8 sm:p-12 lg:p-16 text-center">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-cream/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-cream/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mb-4">
                Let&apos;s work together
              </h2>
              <p className="text-lg text-cream/80 max-w-2xl mx-auto mb-8">
                Have a project in mind? I&apos;m always excited to discuss new opportunities
                and challenges in UX/UI design.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-cream text-accent hover:bg-cream/90 group"
                >
                  Get in touch
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-cream/30 text-cream hover:bg-cream/10 hover:text-cream"
                >
                  View resume
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
