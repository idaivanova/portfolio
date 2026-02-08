import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Hero } from './components/sections/Hero';
import { Stats } from './components/sections/Stats';
import { Features } from './components/sections/Features';
import { CTASection } from './components/sections/CTASection';
import { Header } from './components/layout/header';
import { Footer } from './components/layout/footer';
import ErgoWorkPage from './pages/ErgoWorkPage';
import DermatikPage from './pages/DermatikPage';
import AboutMePage from './pages/AboutMePage';
import PimcorePage from './pages/PimcorePage';

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

// App content with routing
function AppContent() {
  const location = useLocation();

  // Check if we're on a case study page (no header/footer for case studies)
  const isCaseStudy = location.pathname.startsWith('/case-studies');

  if (isCaseStudy) {
    return (
      <Routes>
        <Route path="/case-studies/pimcore" element={<PimcorePage />} />
        <Route path="/case-studies/ergowork" element={<ErgoWorkPage />} />
        <Route path="/case-studies/dermatik" element={<DermatikPage />} />
        <Route path="/case-studies/about" element={<AboutMePage />} />
        {/* Redirect old singular routes to plural */}
        <Route path="/case-study/:project" element={<Navigate replace to={location.pathname.replace('/case-study/', '/case-studies/')} />} />
      </Routes>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-navy-darkest text-cream font-sans">
      <Header />
      <main className="flex-1 pt-16 md:pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutMePage />} />
        </Routes>
      </main>
      <Footer showCTA={false} />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
