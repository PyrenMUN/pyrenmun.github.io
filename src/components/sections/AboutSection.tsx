import React from 'react';
import { Globe } from 'lucide-react';

const AboutSection: React.FC = () => (
  <section id="about" className="py-24 px-6 md:px-20 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="inline-block bg-[#153243]/10 text-[#153243] px-4 py-2 rounded-full text-sm font-medium mb-4">
          ABOUT US
        </span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[#153243]">
          What is MUN?
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#E4B363] to-[#F5D982] mx-auto mb-8"></div>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xl leading-relaxed text-gray-700 mb-8">
            Model United Nations (MUN) is an academic simulation of the United Nations where students 
            take on the role of delegates and engage in authentic diplomatic debates.
          </p>
          <p className="text-lg leading-relaxed text-gray-600 mb-8">
            It is a privileged space to develop public speaking, in-depth research, 
            and collaboration in a realistic framework that prepares for tomorrow's challenges.
          </p>
          
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-[#E4B363] rounded-full flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-[#153243]">Global Impact</h4>
              <p className="text-gray-600">Address contemporary global issues</p>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="bg-gradient-to-br from-[#153243] to-[#1a3a4a] rounded-3xl p-8 text-white shadow-2xl">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#E4B363]">7</div>
                <div className="text-sm">Intense Days</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#E4B363]">12</div>
                <div className="text-sm">Invited Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#E4B363]">100+</div>
                <div className="text-sm">Participants</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#E4B363]">5</div>
                <div className="text-sm">Committees</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;