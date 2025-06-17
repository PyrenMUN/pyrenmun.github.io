import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CountriesSection: React.FC = () => {
  const countries = [
    { name: "France", flag: "/images/flags/france.png" },
    { name: "Spain", flag: "/images/flags/spain.png" },
    { name: "Germany", flag: "/images/flags/germany.png" },
    { name: "Italy", flag: "/images/flags/italy.png" },
    { name: "United Kingdom", flag: "/images/flags/united kingdom.png" },
    { name: "Netherlands", flag: "/images/flags/netherlands.png" },
    { name: "Belgium", flag: "/images/flags/belgium.png" },
    { name: "Switzerland", flag: "/images/flags/switzerland.png" },
    { name: "Portugal", flag: "/images/flags/portugal.png" },
    { name: "Austria", flag: "/images/flags/austria.png" },
    { name: "Poland", flag: "/images/flags/poland.png" },
    { name: "Czech Republic", flag: "/images/flags/czech republic.png" }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    swipe: false,
    touchMove: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        }
      }
    ]
  };

  const renderCountryCard = (country: typeof countries[0]) => (
    <div className="px-2">
      <div className="flex flex-col items-center">
        <div className="relative w-24 h-16 rounded-lg overflow-hidden shadow-lg border-4 border-[#E4B363] bg-white">
          <Image
            src={country.flag}
            alt={`Drapeau ${country.name}`}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );

  return (
    <section id="countries" className="py-12 px-6 md:px-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block bg-[#E4B363]/10 text-[#E4B363] px-4 py-2 rounded-full text-sm font-medium mb-3">
            PARTICIPANTS INTERNATIONAUX
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-[#153243]">
            Pays Invités
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#E4B363] to-[#F5D982] mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rejoignez des délégués passionnés venus de toute l&apos;Europe pour cette aventure diplomatique unique
          </p>
        </div>

        {/* Ligne supérieure (défilement vers la droite) */}
        <div className="mb-4">
          <Slider {...settings}>
            {countries.map((country, index) => (
              <div key={index}>
                {renderCountryCard(country)}
              </div>
            ))}
          </Slider>
        </div>

        {/* Ligne inférieure (défilement vers la gauche) */}
        <div>
          <Slider {...{...settings, rtl: true}}>
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