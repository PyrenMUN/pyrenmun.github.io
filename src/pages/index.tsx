import React from 'react';
import Navbar from '@/components/navbar';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import CountriesSection from '@/components/sections/CountriesSection';
import TopicsSection from '@/components/sections/TopicsSection';
import ScheduleSection from '@/components/sections/ScheduleSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/Footer';

export default function PyrenMUN() {
  return (
      <div className="bg-[#F5F5F4] text-[#1E1E1E] min-h-screen font-sans">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TopicsSection />
      <CountriesSection />
      <FeaturesSection />
      <ScheduleSection />
      <ContactSection />
      <Footer />
      </div>
  );
}