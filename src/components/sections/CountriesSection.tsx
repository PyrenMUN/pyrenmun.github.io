import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { countries, carousel_flags_settings } from '@/data/constants';

const CountriesSection: React.FC = () => {
  const renderCountryCard = (country: typeof countries[0]) => (
    <div className="px-2">
      <div className="flex flex-col items-center">
        <div className="relative w-24 h-16 rounded-lg overflow-hidden shadow-lg border-3 border-[#E4B363] bg-white">
          <Image
            src={country.flag}
            alt={`Flag of ${country.name}`}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );

  return (
    <section id="countries" className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block bg-[#E4B363]/10 text-[#E4B363] px-4 py-2 rounded-full text-sm font-medium mb-3">
            INTERNATIONAL PARTICIPANTS
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-[#153243]">
            Invited Countries
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#E4B363] to-[#F5D982] mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join passionate delegates from across Europe for this unique diplomatic adventure
          </p>
        </div>

        {/* Top row (scrolling right) */}
        <div className="mb-4">
          <Slider {...carousel_flags_settings}>
            {countries.map((country, index) => (
              <div key={index}>
                {renderCountryCard(country)}
              </div>
            ))}
          </Slider>
        </div>

        {/* Bottom row (scrolling left) */}
        <div>
          <Slider {...{...carousel_flags_settings, rtl: true}}>
            {countries.map((country, index) => (
              <div key={index}>
                {renderCountryCard(country)}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default CountriesSection;