import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import { Hero } from './components/sections/Hero';
import { Stats } from './components/sections/Stats';
import { Features } from './components/sections/Features';
import { CTASection } from './components/sections/CTASection';
import { Header } from './components/layout/header';
import { LeftRailNav } from './components/layout/left-rail-nav';
import { Footer } from './components/layout/footer';
import { SkipLink } from './components/ui/SkipLink';
import { LanguageProvider } from './lib/LanguageContext';
import { ThemeProvider } from './lib/ThemeContext';
import ErgoWorkPage from './pages/ErgoWorkPage';
import DermatikPage from './pages/DermatikPage';
import AboutMePage from './pages/AboutMePage';
import PimcorePage from './pages/PimcorePage';
import PimcoreFrontendTransitionPage from './pages/PimcoreFrontendTransitionPage';
import PimcoreStudioExtensionsPage from './pages/PimcoreStudioExtensionsPage';
import SDZRNPage from './pages/SDZRNPage';
import ThemeBuilderPage from './pages/ThemeBuilderPage';

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
      {/* Pimcore is a multi-part series: the hub stays at /case-studies/pimcore
          because the left rail links there, each part gets its own route. */}
      <Route path="/case-studies/pimcore" element={<PimcorePage />} />
      <Route
        path="/case-studies/pimcore/frontend-transition"
        element={<PimcoreFrontendTransitionPage />}
      />
      <Route
        path="/case-studies/pimcore/studio-extensions"
        element={<PimcoreStudioExtensionsPage />}
      />
      <Route path="/case-studies/ergowork" element={<ErgoWorkPage />} />
      <Route path="/case-studies/dermatik" element={<DermatikPage />} />
      <Route path="/case-studies/sdzrn" element={<SDZRNPage />} />

      {/* Playgrounds */}
      <Route path="/playground/theme-builder" element={<ThemeBuilderPage />} />
      
      {/* Legacy route redirects */}
      <Route path="/case-studies/about" element={<Navigate replace to="/about" />} />
      
      {/* Catch all - redirect to home */}
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
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
            <Header />
            <LeftRailNav />

            <div className="pb-20 md:pb-0 md:pl-[220px] lg:pl-[238px] xl:pl-[252px] 2xl:pl-[264px]">
              <AppContent />
            </div>
          </div>
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
