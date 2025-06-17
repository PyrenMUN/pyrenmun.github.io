import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-[#153243] text-white py-12 px-6">
    <div className="max-w-7xl mx-auto text-center">
      <div className="font-serif text-3xl font-bold mb-4">PyrenMUN</div>
      <p className="text-gray-300 mb-6">March 3–9, 2026 • Pyrénées, France</p>
      <div className="flex justify-center space-x-8 text-sm text-gray-400">
        <a href="mailto:pyrenmun@gmail.com" className="hover:text-[#E4B363] transition-colors">
          Contact
        </a>
        <span>•</span>
        <a href="#apply" className="hover:text-[#E4B363] transition-colors">
          Apply
        </a>
        <span>•</span>
        <span>© 2025 PyrenMUN</span>
      </div>
    </div>
  </footer>
);

export default Footer; 