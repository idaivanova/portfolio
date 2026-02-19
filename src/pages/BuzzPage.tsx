// ============================================
// Buzz Page - Bumblebee Conservation App
// Gamification & character-driven UX showcase
// ============================================

import { CaseStudyLayout } from '@/components/case-studies/CaseStudyLayout';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export default function BuzzPage() {
  return (
    <CaseStudyLayout activeProject="Buzz">
      {/* Hero Section */}
      <ScrollReveal>
        <section id="intro" className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Project preview image placeholder */}
            <div 
              className="w-full md:w-[350px] h-[212px] rounded-lg flex items-center justify-center border border-cream/10"
              style={{
                background: 'linear-gradient(135deg, #FFB80020 0%, #FB923C20 100%)',
              }}
            >
              <span className="text-6xl">🐝</span>
            </div>
            
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-4">
                Buzz: <span className="font-normal">Bumblebee Conservation App</span>
              </h1>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 text-sm bg-accent/10 text-accent rounded-full">Gamification</span>
                <span className="px-3 py-1 text-sm bg-accent/10 text-accent rounded-full">Character Design</span>
                <span className="px-3 py-1 text-sm bg-accent/10 text-accent rounded-full">Environmental UX</span>
                <span className="px-3 py-1 text-sm bg-accent/10 text-accent rounded-full">Social Impact</span>
              </div>
              
              <p className="text-cream/80">
                Making environmental conservation adorable through gamification and character-driven UX design. 
                Every interaction buzzes with life. Every user becomes a guardian of gardens.
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
              <p className="text-cream">UX Designer, UI Designer</p>
            </div>
            <div className="p-4 bg-navy-mid/50 rounded-lg">
              <p className="text-cream/50 text-xs uppercase mb-1">Tools</p>
              <p className="text-cream">Figma, Framer Motion, Lottie</p>
            </div>
            <div className="p-4 bg-navy-mid/50 rounded-lg">
              <p className="text-cream/50 text-xs uppercase mb-1">Timeline</p>
              <p className="text-cream">10 days</p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Key Features */}
      <ScrollReveal>
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-cream mb-6">Buzz-Worthy Features</h2>
          <div className="space-y-4">
            <div className="p-6 bg-navy-mid/50 rounded-lg border border-cream/10">
              <h3 className="text-lg font-semibold text-cream mb-2">🐝 Your Hive Dashboard</h3>
              <p className="text-cream/60">Personal conservation hub showing your impact, collected bees, and garden progress with animated hive visualization.</p>
            </div>
            <div className="p-6 bg-navy-mid/50 rounded-lg border border-cream/10">
              <h3 className="text-lg font-semibold text-cream mb-2">🔍 Bee Discovery Mode</h3>
              <p className="text-cream/60">AR-enabled bumblebee identification using your phone camera. Point at real bees to identify species and unlock cute character representations.</p>
            </div>
            <div className="p-6 bg-navy-mid/50 rounded-lg border border-cream/10">
              <h3 className="text-lg font-semibold text-cream mb-2">🌱 Garden Planner</h3>
              <p className="text-cream/60">Drag-and-drop pollinator-friendly garden design with seasonal bloom calendars and bee-attractiveness ratings.</p>
            </div>
            <div className="p-6 bg-navy-mid/50 rounded-lg border border-cream/10">
              <h3 className="text-lg font-semibold text-cream mb-2">🗺️ Community Map</h3>
              <p className="text-cream/60">See nearby gardens and contribute to local conservation efforts. Certified Bee-Friendly Garden badges and neighborhood challenges.</p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Bee Characters */}
      <ScrollReveal>
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-cream mb-6">Meet the Bee Squad</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-navy-mid/50 rounded-lg">
              <h4 className="text-cream font-medium">🐝 Bella the Bumble</h4>
              <p className="text-cream/50 text-sm">Your Guide - Enthusiastic, encouraging, slightly clumsy. Bounces when talking!</p>
            </div>
            <div className="p-4 bg-navy-mid/50 rounded-lg">
              <h4 className="text-cream font-medium">🎓 Professor Buzzworth</h4>
              <p className="text-cream/50 text-sm">Education Expert - Wise, patient, wears tiny glasses. Flies in circles while thinking.</p>
            </div>
            <div className="p-4 bg-navy-mid/50 rounded-lg">
              <h4 className="text-cream font-medium">🌸 Daisy the Daredevil</h4>
              <p className="text-cream/50 text-sm">Challenge Host - Adventurous, competitive. Loop-de-loops and speed trails!</p>
            </div>
            <div className="p-4 bg-navy-mid/50 rounded-lg">
              <h4 className="text-cream font-medium">🍯 Honey the Helper</h4>
              <p className="text-cream/50 text-sm">Community Manager - Warm, nurturing. Gentle figure-8 dance, warm glow aura.</p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Micro-interactions */}
      <ScrollReveal>
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-cream mb-6">Playful Touches</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex gap-3 p-3 bg-navy-mid/30 rounded-lg">
              <span className="text-xl">✨</span>
              <div>
                <p className="text-cream font-medium">App Launch</p>
                <p className="text-cream/50 text-sm">Bella flies across screen, leaving dotted trail</p>
              </div>
            </div>
            <div className="flex gap-3 p-3 bg-navy-mid/30 rounded-lg">
              <span className="text-xl">🎯</span>
              <div>
                <p className="text-cream font-medium">Pull to Refresh</p>
                <p className="text-cream/50 text-sm">Bees carry the refresh indicator</p>
              </div>
            </div>
            <div className="flex gap-3 p-3 bg-navy-mid/30 rounded-lg">
              <span className="text-xl">🎉</span>
              <div>
                <p className="text-cream font-medium">Task Complete</p>
                <p className="text-cream/50 text-sm">Petal confetti with happy bee dance</p>
              </div>
            </div>
            <div className="flex gap-3 p-3 bg-navy-mid/30 rounded-lg">
              <span className="text-xl">👀</span>
              <div>
                <p className="text-cream font-medium">Inactivity</p>
                <p className="text-cream/50 text-sm">Bees peek from behind UI elements</p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Visual Design */}
      <ScrollReveal>
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-cream mb-6">Visual Language</h2>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-lg" style={{ backgroundColor: '#FFB800' }} />
              <div>
                <p className="text-xs text-cream">Honey Gold</p>
                <p className="text-[10px] text-cream/50">#FFB800</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-lg" style={{ backgroundColor: '#FFD54F' }} />
              <div>
                <p className="text-xs text-cream">Bumblebee Yellow</p>
                <p className="text-[10px] text-cream/50">#FFD54F</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-lg" style={{ backgroundColor: '#FFA726' }} />
              <div>
                <p className="text-xs text-cream">Pollen Orange</p>
                <p className="text-[10px] text-cream/50">#FFA726</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-lg" style={{ backgroundColor: '#81C784' }} />
              <div>
                <p className="text-xs text-cream">Meadow Green</p>
                <p className="text-[10px] text-cream/50">#81C784</p>
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
            {['Gamification', 'Character Animation', 'Environmental UX', 'Social Impact', 'Haptic Feedback', 'AR Integration', 'Community Design', 'Behavior Change'].map((skill) => (
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
