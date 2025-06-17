import React from 'react';
import { Calendar, Users, Award } from 'lucide-react';

const ScheduleSection: React.FC = () => (
  <section id="schedule" className="py-24 px-6 md:px-20 bg-gradient-to-br from-[#153243] to-[#1a3a4a] text-white">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="inline-block bg-[#E4B363]/20 text-[#E4B363] px-4 py-2 rounded-full text-sm font-medium mb-4">
          PROGRAMME
        </span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
          7 Jours Inoubliables
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#E4B363] to-[#F5D982] mx-auto mb-8"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <Calendar className="w-12 h-12 text-[#E4B363] mb-6" />
          <h3 className="text-2xl font-semibold mb-4">Jours 1-2</h3>
          <p className="text-gray-200">Arrivée, formation aux procédures, et cérémonies d&apos;ouverture dans un cadre montagnard exceptionnel.</p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <Users className="w-12 h-12 text-[#E4B363] mb-6" />
          <h3 className="text-2xl font-semibold mb-4">Jours 3-5</h3>
          <p className="text-gray-200">Sessions de comités intensives, négociations diplomatiques, et ateliers de développement personnel.</p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <Award className="w-12 h-12 text-[#E4B363] mb-6" />
          <h3 className="text-2xl font-semibold mb-4">Jours 6-7</h3>
          <p className="text-gray-200">Assemblée générale, cérémonies de clôture, et activités culturelles dans les Pyrénées.</p>
        </div>
      </div>
    </div>
  </section>
);

export default ScheduleSection; 