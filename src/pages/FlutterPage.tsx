// ============================================
// Flutter Page - Butterfly Garden Explorer
// Playful motion design showcase
// ============================================

import { CaseStudyLayout } from '@/components/case-studies/CaseStudyLayout';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export default function FlutterPage() {
  return (
    <CaseStudyLayout activeProject="Flutter">
      {/* Hero Section */}
      <ScrollReveal>
        <section id="intro" className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Project preview image placeholder */}
            <div 
              className="w-full md:w-[350px] h-[212px] rounded-lg flex items-center justify-center border border-cream/10"
              style={{
                background: 'linear-gradient(135deg, #FFB80020 0%, #81C78420 100%)',
              }}
            >
              <span className="text-6xl">🦋</span>
            </div>
            
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-4">
                Flutter: <span className="font-normal">Butterfly Garden Explorer</span>
              </h1>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 text-sm bg-accent/10 text-accent rounded-full">Motion Design</span>
                <span className="px-3 py-1 text-sm bg-accent/10 text-accent rounded-full">Playful UX</span>
                <span className="px-3 py-1 text-sm bg-accent/10 text-accent rounded-full">Nature-Inspired</span>
                <span className="px-3 py-1 text-sm bg-accent/10 text-accent rounded-full">Micro-interactions</span>
              </div>
              
              <p className="text-cream/80">
                A whimsical UX experiment bringing butterfly gardens to life through playful animations, 
                delightful micro-interactions, and immersive storytelling. Every interaction flutters 
                with nature-inspired animations.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Project Scope */}
      <ScrollReveal>
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-cream mb-6">Project Overview</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 bg-navy-mid/50 rounded-lg">
              <p className="text-cream/50 text-xs uppercase mb-1">My Role</p>
              <p className="text-cream">UX Designer, Motion Designer</p>
            </div>
            <div className="p-4 bg-navy-mid/50 rounded-lg">
              <p className="text-cream/50 text-xs uppercase mb-1">Tools</p>
              <p className="text-cream">Framer Motion, React Bits, Figma</p>
            </div>
            <div className="p-4 bg-navy-mid/50 rounded-lg">
              <p className="text-cream/50 text-xs uppercase mb-1">Timeline</p>
              <p className="text-cream">2 weeks</p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Key Features */}
      <ScrollReveal>
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-cream mb-6">Playful Interactions</h2>
          <div className="space-y-4">
            <div className="p-6 bg-navy-mid/50 rounded-lg border border-cream/10">
              <h3 className="text-lg font-semibold text-cream mb-2">🦋 Butterfly Hover Effects</h3>
              <p className="text-cream/60">Hover over cards and watch butterflies flutter around, revealing additional information with sparkle trails.</p>
            </div>
            <div className="p-6 bg-navy-mid/50 rounded-lg border border-cream/10">
              <h3 className="text-lg font-semibold text-cream mb-2">🌸 Flower Bloom Loading</h3>
              <p className="text-cream/60">Loading states show flowers blooming instead of boring spinners - petal-by-petal animation with custom easing.</p>
            </div>
            <div className="p-6 bg-navy-mid/50 rounded-lg border border-cream/10">
              <h3 className="text-lg font-semibold text-cream mb-2">🍃 Leaf Page Transitions</h3>
              <p className="text-cream/60">Page changes feel like gently falling leaves with natural physics - gravity + wind simulation.</p>
            </div>
            <div className="p-6 bg-navy-mid/50 rounded-lg border border-cream/10">
              <h3 className="text-lg font-semibold text-cream mb-2">🐛 Caterpillar Progress</h3>
              <p className="text-cream/60">Progress bars show a caterpillar transforming as it moves along a leaf - complete metamorphosis!</p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Motion Patterns */}
      <ScrollReveal>
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-cream mb-6">Motion Design Patterns</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-navy-mid/50 rounded-lg">
              <h4 className="text-cream font-medium">The Flutter</h4>
              <p className="text-cream/50 text-sm">Button hovers, card reveals | Spring: stiffness 400, damping 12 | 400ms</p>
            </div>
            <div className="p-4 bg-navy-mid/50 rounded-lg">
              <h4 className="text-cream font-medium">The Float</h4>
              <p className="text-cream/50 text-sm">Modal entrances, dropdowns | Smooth easing with drift | 600ms</p>
            </div>
            <div className="p-4 bg-navy-mid/50 rounded-lg">
              <h4 className="text-cream font-medium">The Bloom</h4>
              <p className="text-cream/50 text-sm">Expanding cards, detail views | Scale 0.8→1 with overshoot | 500ms</p>
            </div>
            <div className="p-4 bg-navy-mid/50 rounded-lg">
              <h4 className="text-cream font-medium">The Dance</h4>
              <p className="text-cream/50 text-sm">Success states, celebrations | Gentle oscillation | 800ms loop</p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Color Palette */}
      <ScrollReveal>
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-cream mb-6">Nature-Inspired Palette</h2>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-lg" style={{ backgroundColor: '#E0F2FE' }} />
              <div>
                <p className="text-xs text-cream">Morning Sky</p>
                <p className="text-[10px] text-cream/50">#E0F2FE</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-lg" style={{ backgroundColor: '#FDE047' }} />
              <div>
                <p className="text-xs text-cream">Nectar Gold</p>
                <p className="text-[10px] text-cream/50">#FDE047</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-lg" style={{ backgroundColor: '#FCE7F3' }} />
              <div>
                <p className="text-xs text-cream">Petal Pink</p>
                <p className="text-[10px] text-cream/50">#FCE7F3</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-lg" style={{ backgroundColor: '#86EFAC' }} />
              <div>
                <p className="text-xs text-cream">Leaf Green</p>
                <p className="text-[10px] text-cream/50">#86EFAC</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-lg" style={{ backgroundColor: '#FB923C' }} />
              <div>
                <p className="text-xs text-cream">Monarch Orange</p>
                <p className="text-[10px] text-cream/50">#FB923C</p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Skills */}
      <ScrollReveal>
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-cream mb-6">Skills Demonstrated</h2>
          <div className="flex flex-wrap gap-2">
            {['Motion Design', 'Playful UX', 'Framer Motion', 'Spring Physics', 'Micro-interactions', 'Gesture Design', 'Nature-Inspired Design', '60fps Animations'].map((skill) => (
              <span key={skill} className="px-3 py-1 text-sm bg-accent/10 text-accent rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </section>
      </ScrollReveal>
    </CaseStudyLayout>
  );
}
