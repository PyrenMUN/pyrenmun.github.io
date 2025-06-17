import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { allTopics } from '@/data/constants';


export default function TopicsSection() {
  return (
    <section id="topics" className="py-24 px-6 md:px-20 bg-gradient-to-br from-[#F5F5F4] to-[#E8E8E7]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#153243]/10 text-[#153243] px-4 py-2 rounded-full text-sm font-medium mb-4">
            SUJETS DE DISCUSSION
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[#153243]">
            Défis Mondiaux
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#E4B363] to-[#F5D982] mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {allTopics.slice(0, 3).map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-[#153243]/10 rounded-lg flex items-center justify-center mb-6">
                <category.icon className="w-6 h-6 text-[#153243]" />
              </div>
              <span className="text-sm font-semibold text-[#153243] mb-2 block">
                {category.category}
              </span>
              <h3 className="text-xl font-bold mb-3 text-[#153243]">{category.topics[0].title}</h3>
              <p className="text-gray-600 mb-4">{category.topics[0].description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="/topics"
            className="inline-flex items-center px-6 py-3 bg-[#153243] text-white rounded-lg hover:bg-[#1E3A8A] transition-colors duration-300 font-semibold"
          >
            Voir tous les sujets
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
} 