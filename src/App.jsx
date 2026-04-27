import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Portfolio from '@/pages/Portfolio';
import Contact from '@/pages/Contact';
import AURAClinicCaseStudy from '@/pages/AURAClinicCaseStudy';
import LINIAStudioPage from '@/pages/LINIAStudioPage';
import MaisonAtelierPage from '@/pages/MaisonAtelierPage';
import CalmaStudioPage from '@/pages/CalmaStudioPage';
import NoirElanPage from '@/pages/NoirElanPage';
import AurelineDistrictPage from '@/pages/AurelineDistrictPage';
import { Toaster } from '@/components/ui/toaster';
import ScrollToTop from '@/components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-foreground selection:bg-accent/30 selection:text-foreground transition-colors duration-500">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/aura-clinic" element={<AURAClinicCaseStudy />} />
          <Route path="/portfolio/linia-studio-wnetrz" element={<LINIAStudioPage />} />
          <Route path="/maison-atelier" element={<MaisonAtelierPage />} />
          <Route path="/calma-studio" element={<CalmaStudioPage />} />
          <Route path="/noir-elan" element={<NoirElanPage />} />
          <Route path="/aureline-district" element={<AurelineDistrictPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;