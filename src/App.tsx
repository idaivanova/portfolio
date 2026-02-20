import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Hero } from './components/sections/Hero';
import { Stats } from './components/sections/Stats';
import { Features } from './components/sections/Features';
import { CTASection } from './components/sections/CTASection';
import { Header } from './components/layout/header';
import { Footer } from './components/layout/footer';
import { RaccoonWrapper, InteractiveBumblebeeWrapper } from './components/animations';
import { LanguageProvider } from './lib/LanguageContext';
import { ThemeProvider } from './lib/ThemeContext';
import ErgoWorkPage from './pages/ErgoWorkPage';
import DermatikPage from './pages/DermatikPage';
import AboutMePage from './pages/AboutMePage';
import PimcorePage from './pages/PimcorePage';
import FlutterPage from './pages/FlutterPage';
import BuzzPage from './pages/BuzzPage';
import BuzzHQPage from './pages/BuzzHQPage';
import FlutterFieldsPage from './pages/FlutterFieldsPage';
import SDZRNPage from './pages/SDZRNPage';

// About page with header/footer (not case study layout)
function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-navy-darkest text-cream font-sans">
      <Header />
      <main className="flex-1 pt-16 md:pt-20">
        <AboutMePage />
      </main>
      <Footer showCTA={false} />
    </div>
  );
}

// Homepage component
function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-navy-darkest text-cream font-sans">
      <Header />
      <main className="flex-1 pt-16 md:pt-20">
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
      <Route path="/case-studies/flutter" element={<FlutterPage />} />
      <Route path="/case-studies/buzz" element={<BuzzPage />} />
      {/* Experimental project pages */}
      <Route path="/case-studies/buzz-hq" element={<BuzzHQPage />} />
      <Route path="/case-studies/flutter-fields" element={<FlutterFieldsPage />} />
      <Route path="/case-studies/sdzrn" element={<SDZRNPage />} />
      
      {/* Legacy route redirects */}
      <Route path="/case-studies/about" element={<Navigate replace to="/about" />} />
      <Route path="/case-study/:project" element={<Navigate replace to="/case-studies" />} />
      
      {/* Catch all - redirect to home */}
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <LanguageProvider>
          <InteractiveBumblebeeWrapper>
            <RaccoonWrapper>
              <AppContent />
            </RaccoonWrapper>
          </InteractiveBumblebeeWrapper>
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
