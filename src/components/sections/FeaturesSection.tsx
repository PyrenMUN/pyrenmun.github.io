import React from 'react';
import FeatureCard from '@/components/FeatureCard';
import { features } from '@/data/constants';

const FeaturesSection: React.FC = () => (
  <section className="py-24 px-6 md:px-20 bg-gradient-to-br from-[#F5F5F4] to-[#E8E8E7]">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="inline-block bg-[#153243]/10 text-[#153243] px-4 py-2 rounded-full text-sm font-medium mb-4">
          POURQUOI NOUS REJOINDRE
        </span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[#153243]">
          Une Expérience Transformatrice
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#E4B363] to-[#F5D982] mx-auto mb-8"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection; 