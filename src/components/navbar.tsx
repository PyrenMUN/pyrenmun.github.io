"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className="bg-white shadow-sm sticky top-0 z-50 w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-20 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-serif font-semibold text-[#153243]">
            MUN Pyrenees
          </Link>
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(true)} aria-label="Open menu">
              <Menu size={28} />
            </button>
          </div>
          <ul className="hidden md:flex gap-6 text-sm font-medium">
            <li><Link href="/about-mun" className="hover:text-[#E4B363] transition">About MUN</Link></li>
            <li><Link href="/organizers" className="hover:text-[#E4B363] transition">Organizers</Link></li>
            <li><Link href="/apply" className="hover:text-[#E4B363] transition">Apply</Link></li>
            <li><Link href="/news" className="hover:text-[#E4B363] transition">News</Link></li>
          </ul>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white bg-opacity-95 flex flex-col justify-between px-6 py-6 md:hidden transition duration-300 ease-in-out">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-serif font-semibold text-[#153243]">
              MUN Pyrenees
            </Link>
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <X size={28} />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 gap-10 text-2xl font-medium text-[#153243]">
            <Link href="/about-mun" onClick={() => setMenuOpen(false)} className="hover:text-[#E4B363] transition">About MUN</Link>
            <Link href="/organizers" onClick={() => setMenuOpen(false)} className="hover:text-[#E4B363] transition">Organizers</Link>
            <Link href="/apply" onClick={() => setMenuOpen(false)} className="hover:text-[#E4B363] transition">Apply</Link>
            <Link href="/news" onClick={() => setMenuOpen(false)} className="hover:text-[#E4B363] transition">News</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
