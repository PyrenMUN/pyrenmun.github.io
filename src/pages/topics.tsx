import React from 'react';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { allTopics } from '@/data/constants';

export default function Topics() {
  return (
    <div className="bg-[#F5F5F4] text-[#1E1E1E] min-h-screen font-sans">
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <Link 
            href="/#topics"
            className="inline-flex items-center text-[#B8860B] hover:text-[#8B6914] mb-8"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = '/#topics';
            }}
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Retour à l&apos;accueil
          </Link>

          <div className="text-center mb-16">
            <span className="inline-block bg-[#153243]/10 text-[#153243] px-4 py-2 rounded-full text-sm font-medium mb-4">
              SUJETS DE DISCUSSION
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[#153243]">
              Défis Mondiaux
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#E4B363] to-[#F5D982] mx-auto mb-8"></div>
          </div>

          {allTopics.map((category, index) => (
            <div key={index} className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#153243]/10 rounded-lg flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-[#153243]" />
                </div>
                <h2 className="text-2xl font-bold text-[#153243]">{category.category}</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {category.topics.map((topic, topicIndex) => (
                  <div 
                    key={topicIndex}
                    className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold">{topic.title}</h3>
                      <span className="text-sm font-semibold px-3 py-1 bg-[#F5F5F4] rounded-full">
                        {topic.difficulty}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{topic.description}</p>
                    <div className="text-sm text-[#B8860B]">
                      Comité : {topic.committee}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
} 