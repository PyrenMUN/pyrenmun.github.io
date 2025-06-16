"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/about-mun", label: "About MUN" },
    { href: "/organizers", label: "Organizers" },
    { href: "/apply", label: "Apply" },
    { href: "/news", label: "News" },
  ];

  // Bloque le scroll du body quand le menu est ouvert
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.body.style.overflow = menuOpen ? "hidden" : "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <header>
      <nav className="bg-transparent shadow-sm sticky top-0 z-50 w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-20 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-serif font-semibold text-[#153243]">
            MUN Pyrenees
          </Link>
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
          <ul className="hidden md:flex gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-[#E4B363] transition">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu Overlay with animation */}
      <div
        className={clsx(
          "fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 text-2xl font-medium text-[#153243] bg-white/95 backdrop-blur-sm transform transition-all duration-500 ease-in-out",
          menuOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-full opacity-0 pointer-events-none"
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#E4B363] transition"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
