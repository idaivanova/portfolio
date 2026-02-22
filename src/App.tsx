import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Hero } from './components/sections/Hero';
import { Stats } from './components/sections/Stats';
import { Features } from './components/sections/Features';
import { CTASection } from './components/sections/CTASection';
import { LeftRailNav } from './components/layout/left-rail-nav';
import { Footer } from './components/layout/footer';
import { SkipLink } from './components/ui/SkipLink';
import { RaccoonWrapper, InteractiveBumblebeeWrapper } from './components/animations';
import { LanguageProvider } from './lib/LanguageContext';
import { ThemeProvider } from './lib/ThemeContext';
import ErgoWorkPage from './pages/ErgoWorkPage';
import DermatikPage from './pages/DermatikPage';
import AboutMePage from './pages/AboutMePage';
import PimcorePage from './pages/PimcorePage';
import BuzzHQPage from './pages/BuzzHQPage';
import SDZRNPage from './pages/SDZRNPage';

// About page with footer
function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main id="main-content" className="flex-1">
        <AboutMePage />
      </main>
      <Footer showCTA={false} />
    </div>
  );
}

// Homepage component
function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main id="main-content" className="flex-1">
        <Hero />
        <Stats />
        <Features />
        <CTASection />
      </main>
      <Footer showCTA={false} />
    </div>
  );
}

// App content with consolidated routing
function AppContent() {
  // All routes consolidated in one place
  return (
    <Routes>
      {/* Main pages with header/footer */}
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      
      {/* Case study pages - use CaseStudyLayout with sidebar */}
      <Route path="/case-studies/pimcore" element={<PimcorePage />} />
      <Route path="/case-studies/ergowork" element={<ErgoWorkPage />} />
      <Route path="/case-studies/dermatik" element={<DermatikPage />} />
      {/* Experimental project pages */}
      <Route path="/case-studies/buzz-hq" element={<BuzzHQPage />} />
      <Route path="/case-studies/sdzrn" element={<SDZRNPage />} />
      
      {/* Legacy route redirects */}
      <Route path="/case-studies/about" element={<Navigate replace to="/about" />} />
      <Route path="/case-study/:project" element={<Navigate replace to="/case-studies" />} />
      
      {/* Catch all - redirect to home */}
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <LanguageProvider>
          <div className="min-h-screen bg-background text-foreground font-sans">
            <SkipLink />
            <ScrollToTop />
            <LeftRailNav />

            <div className="pb-20 md:pb-0 md:pl-[220px] lg:pl-[238px] xl:pl-[252px] 2xl:pl-[264px]">
              <InteractiveBumblebeeWrapper>
                <RaccoonWrapper>
                  <AppContent />
                </RaccoonWrapper>
              </InteractiveBumblebeeWrapper>
            </div>
          </div>
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
