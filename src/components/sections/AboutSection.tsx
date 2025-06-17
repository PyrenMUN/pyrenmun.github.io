import React from 'react';
import { Globe } from 'lucide-react';

const AboutSection: React.FC = () => (
  <section id="about" className="py-24 px-6 md:px-20 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="inline-block bg-[#E4B363]/10 text-[#E4B363] px-4 py-2 rounded-full text-sm font-medium mb-4">
          À PROPOS
        </span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[#153243]">
          Qu&apos;est-ce que le MUN ?
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#E4B363] to-[#F5D982] mx-auto mb-8"></div>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xl leading-relaxed text-gray-700 mb-8">
            Le Model United Nations (MUN) est une simulation académique des Nations Unies où les étudiants 
            endossent le rôle de délégués et s&apos;engagent dans des débats diplomatiques authentiques.
          </p>
          <p className="text-lg leading-relaxed text-gray-600 mb-8">
            C&apos;est un espace privilégié pour développer l&apos;art oratoire, la recherche approfondie, 
            et la collaboration dans un cadre réaliste qui prépare aux défis de demain.
          </p>
          
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-[#E4B363] rounded-full flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-[#153243]">Impact Global</h4>
              <p className="text-gray-600">Abordez les enjeux mondiaux contemporains</p>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="bg-gradient-to-br from-[#153243] to-[#1a3a4a] rounded-3xl p-8 text-white shadow-2xl">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#E4B363]">7</div>
                <div className="text-sm">Jours Intenses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#E4B363]">12</div>
                <div className="text-sm">Pays Invités</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#E4B363]">100+</div>
                <div className="text-sm">Participants</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#E4B363]">5</div>
                <div className="text-sm">Comités</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection; 