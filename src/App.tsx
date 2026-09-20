import React, { useState, useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ExplorationGateway } from './components/ExplorationGateway';
import { MembershipSection } from './components/MembershipSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Footer } from './components/Footer';
import { MobileActionBar } from './components/MobileActionBar';
import { EnquiryModal } from './components/EnquiryModal';
import { Preloader } from './components/Preloader';
import { AnimatedBodyBackground } from './components/AnimatedBodyBackground';
import { FacilitiesPage } from './components/FacilitiesPage';
import { TrainersPage } from './components/TrainersPage';
import { LocationPage } from './components/LocationPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'facilities' | 'trainers' | 'location'>('home');
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);

  // Sync with browser hash on load and hash changes for instant bookmarking & back button support
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('facilities')) {
        setCurrentPage('facilities');
      } else if (hash.includes('trainers')) {
        setCurrentPage('trainers');
      } else if (hash.includes('location')) {
        setCurrentPage('location');
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: string, hash?: string) => {
    if (page === 'facilities' || page === 'trainers' || page === 'location') {
      setCurrentPage(page);
      window.location.hash = `#/${page}`;
      window.scrollTo(0, 0);
    } else {
      setCurrentPage('home');
      window.location.hash = hash || '#/';
      if (hash && hash !== '#/' && hash !== '#') {
        setTimeout(() => {
          const el = document.getElementById(hash.replace('#', ''));
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 60);
      } else {
        window.scrollTo(0, 0);
      }
    }
  };

  const handleOpenEnquiry = () => {
    setEnquiryModalOpen(true);
  };

  const handleSelectService = (_serviceTitle: string) => {
    setEnquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#050507] text-[#fafafa] relative selection:bg-[#ffd000] selection:text-[#050507] overflow-x-hidden">
      {/* 0. Animated Site Preloader */}
      <Preloader />

      {/* Persistent Viewport Atmospheric Background Engine */}
      <AnimatedBodyBackground />

      {/* RENDER DEDICATED WEBPAGES OR STREAMLINED HOME PAGE */}
      {currentPage === 'facilities' ? (
        <div className="relative z-10 flex flex-col min-h-screen justify-between">
          <FacilitiesPage
            onBackToHome={() => handleNavigate('home')}
            onOpenEnquiry={handleOpenEnquiry}
            onNavigate={handleNavigate}
          />
          <Footer onNavigate={handleNavigate} />
        </div>
      ) : currentPage === 'trainers' ? (
        <div className="relative z-10 flex flex-col min-h-screen justify-between">
          <TrainersPage
            onBackToHome={() => handleNavigate('home')}
            onOpenEnquiry={handleOpenEnquiry}
            onNavigate={handleNavigate}
          />
          <Footer onNavigate={handleNavigate} />
        </div>
      ) : currentPage === 'location' ? (
        <div className="relative z-10 flex flex-col min-h-screen justify-between">
          <LocationPage
            onBackToHome={() => handleNavigate('home')}
            onOpenEnquiry={handleOpenEnquiry}
            onNavigate={handleNavigate}
          />
          <Footer onNavigate={handleNavigate} />
        </div>
      ) : (
        <div className="relative z-10">
          {/* 1. Cinematic Hero Section with smooth ambient background and dark lucid console */}
          <HeroSection
            onOpenEnquiry={handleOpenEnquiry}
            currentPage={currentPage}
            onNavigate={handleNavigate}
          />

          {/* Streamlined middle content sections */}
          <main className="relative overflow-hidden">
            {/* 2. Heritage & About Section with Lucidity Glassmorphism */}
            <AboutSection />

            {/* 3. Training Services & Disciplines */}
            <ServicesSection onSelectService={handleSelectService} />

            {/* 4. Dedicated Exploration Pages Gateway (Clean, modular navigation cards) */}
            <ExplorationGateway onNavigate={handleNavigate} />

            {/* 5. Membership Plans & Tiers */}
            <MembershipSection onOpenEnquiry={handleOpenEnquiry} />

            {/* 6. Member Proof & Verified Google Reviews */}
            <TestimonialsSection />
          </main>

          {/* 7. Lucidity Glass Footer */}
          <Footer onNavigate={handleNavigate} />
        </div>
      )}

      {/* Sticky Mobile Action Bar (Call / WhatsApp / Directions) */}
      <MobileActionBar />

      {/* Interactive WhatsApp Enquiry Modal */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
      />
    </div>
  );
}
