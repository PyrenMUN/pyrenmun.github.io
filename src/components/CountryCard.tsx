import React from 'react';
import { CountryCardProps } from '@/types';

const CountryCard: React.FC<CountryCardProps> = ({ country, flag }) => (
  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
    <div className="text-4xl mb-3 text-center">{flag}</div>
    <h3 className="text-lg font-semibold text-center text-[#153243]">{country}</h3>
  </div>
);

export default CountryCard; 