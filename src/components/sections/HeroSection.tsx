import React from 'react';
import { ChevronDown, Mail } from 'lucide-react';

const HeroSection: React.FC = () => (
  <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-[#153243] via-[#1a3a4a] to-[#0f2832]"></div>
    
    <div className="absolute top-20 left-10 w-2 h-2 bg-[#E4B363] rounded-full animate-pulse"></div>
    <div className="absolute top-40 right-20 w-3 h-3 bg-white/30 rounded-full animate-bounce"></div>
    <div className="absolute bottom-40 left-20 w-1 h-1 bg-[#E4B363] rounded-full animate-ping"></div>

    <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
      <div className="mb-8">
        <span className="inline-block bg-[#E4B363]/20 backdrop-blur-sm border border-[#E4B363]/30 rounded-full px-6 py-2 text-[#E4B363] font-medium mb-6">
          March 3–9, 2026
        </span>
      </div>
      
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 leading-tight">
        <span className="block">MUN in the</span>
        <span className="block bg-gradient-to-r from-[#E4B363] to-[#F5D982] bg-clip-text text-transparent">
          Pyrenees
        </span>
      </h1>
      
      <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-gray-200">
        Une expérience diplomatique unique au cœur des Pyrénées. 
        Rejoignez les futurs leaders européens pour une semaine inoubliable de débats, culture et aventure.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <a
          href="#apply"
          className="group bg-gradient-to-r from-[#E4B363] to-[#F5D982] text-[#1E1E1E] px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2"
        >
          <span>Candidater Maintenant</span>
          <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </a>
        
        <a
          href="mailto:pyrenmun@gmail.com"
          className="border-2 border-white/30 text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-white/10 backdrop-blur-sm transition-all duration-300 flex items-center space-x-2"
        >
          <Mail className="w-5 h-5" />
          <span>Contact</span>
        </a>
      </div>
    </div>

    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
      <ChevronDown className="w-6 h-6" />
    </div>
  </section>
);

export default HeroSection; 