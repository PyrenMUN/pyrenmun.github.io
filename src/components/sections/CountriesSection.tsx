import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const CountriesSection: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const topScrollRef = useRef<HTMLDivElement>(null);
  const bottomScrollRef = useRef<HTMLDivElement>(null);

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
    { name: "Czech Republic", flag: "/images/flags/czech.png" }
  ];

  // Fonction pour gérer le défilement automatique
  const autoScroll = (element: HTMLDivElement, direction: 'left' | 'right') => {
    if (direction === 'right') {
      element.scrollLeft += 1;
      if (element.scrollLeft >= element.scrollWidth - element.clientWidth) {
        element.scrollLeft = 0;
      }
    } else {
      element.scrollLeft -= 1;
      if (element.scrollLeft <= 0) {
        element.scrollLeft = element.scrollWidth - element.clientWidth;
      }
    }
  };

  useEffect(() => {
    const topScroll = topScrollRef.current;
    const bottomScroll = bottomScrollRef.current;
    if (!topScroll || !bottomScroll) return;

    let animationFrameId: number;
    let lastTimestamp = 0;
    const scrollSpeed = 1; // pixels per frame

    const animate = (timestamp: number) => {
      if (timestamp - lastTimestamp > 16) { // ~60fps
        if (!isDragging) {
          autoScroll(topScroll, 'right');
          autoScroll(bottomScroll, 'left');
        }
        lastTimestamp = timestamp;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent, ref: React.RefObject<HTMLDivElement | null>) => {
    const element = ref.current;
    if (!element) return;
    setIsDragging(true);
    setStartX(e.pageX - element.offsetLeft);
    setScrollLeft(element.scrollLeft);
    element.style.cursor = 'grabbing';
  };

  const handleMouseUp = (ref: React.RefObject<HTMLDivElement | null>) => {
    setIsDragging(false);
    if (ref.current) {
      ref.current.style.cursor = 'grab';
    }
  };

  const handleMouseMove = (e: React.MouseEvent, ref: React.RefObject<HTMLDivElement | null>) => {
    if (!isDragging) return;
    const element = ref.current;
    if (!element) return;
    e.preventDefault();
    const x = e.pageX - element.offsetLeft;
    const walk = (x - startX) * 2;
    element.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e: React.TouchEvent, ref: React.RefObject<HTMLDivElement | null>) => {
    const element = ref.current;
    if (!element) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - element.offsetLeft);
    setScrollLeft(element.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent, ref: React.RefObject<HTMLDivElement | null>) => {
    if (!isDragging) return;
    const element = ref.current;
    if (!element) return;
    const x = e.touches[0].pageX - element.offsetLeft;
    const walk = (x - startX) * 2;
    element.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = (ref: React.RefObject<HTMLDivElement | null>) => {
    setIsDragging(false);
  };

  const renderCountryCard = (country: typeof countries[0], index: number, isDuplicate = false) => (
    <div 
      key={`${isDuplicate ? 'duplicate-' : ''}${index}`}
      className="flex flex-col items-center min-w-[200px] transform hover:scale-105 transition-transform duration-300"
    >
      <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden shadow-lg border-4 border-[#E4B363]">
        <Image
          src={country.flag}
          alt={`Drapeau ${country.name}`}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-lg font-semibold text-[#153243]">{country.name}</h3>
    </div>
  );

  return (
    <section id="countries" className="py-24 px-6 md:px-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#E4B363]/10 text-[#E4B363] px-4 py-2 rounded-full text-sm font-medium mb-4">
            PARTICIPANTS INTERNATIONAUX
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[#153243]">
            Pays Invités
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#E4B363] to-[#F5D982] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rejoignez des délégués passionnés venus de toute l&apos;Europe pour cette aventure diplomatique unique
          </p>
        </div>

        {/* Ligne supérieure (défilement vers la droite) */}
        <div 
          ref={topScrollRef}
          className="flex space-x-8 overflow-x-hidden whitespace-nowrap py-8 cursor-grab select-none"
          onMouseDown={(e) => handleMouseDown(e, topScrollRef)}
          onMouseUp={() => handleMouseUp(topScrollRef)}
          onMouseMove={(e) => handleMouseMove(e, topScrollRef)}
          onMouseLeave={() => handleMouseUp(topScrollRef)}
          onTouchStart={(e) => handleTouchStart(e, topScrollRef)}
          onTouchMove={(e) => handleTouchMove(e, topScrollRef)}
          onTouchEnd={() => handleTouchEnd(topScrollRef)}
          style={{ scrollBehavior: 'smooth' }}
        >
          <div className="flex space-x-8">
            {countries.map((country, index) => renderCountryCard(country, index))}
          </div>
          <div className="flex space-x-8">
            {countries.map((country, index) => renderCountryCard(country, index, true))}
          </div>
        </div>

        {/* Ligne inférieure (défilement vers la gauche) */}
        <div 
          ref={bottomScrollRef}
          className="flex space-x-8 overflow-x-hidden whitespace-nowrap py-8 cursor-grab select-none"
          onMouseDown={(e) => handleMouseDown(e, bottomScrollRef)}
          onMouseUp={() => handleMouseUp(bottomScrollRef)}
          onMouseMove={(e) => handleMouseMove(e, bottomScrollRef)}
          onMouseLeave={() => handleMouseUp(bottomScrollRef)}
          onTouchStart={(e) => handleTouchStart(e, bottomScrollRef)}
          onTouchMove={(e) => handleTouchMove(e, bottomScrollRef)}
          onTouchEnd={() => handleTouchEnd(bottomScrollRef)}
          style={{ scrollBehavior: 'smooth' }}
        >
          <div className="flex space-x-8">
            {countries.map((country, index) => renderCountryCard(country, index))}
          </div>
          <div className="flex space-x-8">
            {countries.map((country, index) => renderCountryCard(country, index, true))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountriesSection; 