import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { useRouter } from "next/router";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const { locale } = router;

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#countries", label: "Countries" },
    { href: "/topics", label: "Topics" },
    { href: "#schedule", label: "Schedule" },
    { href: "#apply", label: "Apply" },
    { href: "#contact", label: "Contact" },
  ];

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.body.style.overflow = menuOpen ? "hidden" : "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={clsx(
          "fixed w-full z-50 transition-all duration-300",
          isScrolled ? "bg-white/95 backdrop-blur-md" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-20 py-4 flex justify-between items-center">
          <Link
            href="/"
            className={clsx(
              "font-serif text-2xl font-bold transition-colors",
              (isScrolled || menuOpen) ? "text-[#153243]" : "text-white"
            )}
          >
            PyrenMUN
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={clsx(
                  "transition-colors hover:text-[#E4B363]",
                  isScrolled ? "text-[#1E1E1E]" : "text-white"
                )}
              >
                {label}
              </a>
            ))}
            
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className={clsx(
                isScrolled || menuOpen ? "text-[#153243]" : "text-white"
              )}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={clsx(
          "fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 text-2xl font-medium text-[#153243] bg-white/95 backdrop-blur-sm transition-all duration-500 ease-in-out transform",
          menuOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-full opacity-0 pointer-events-none"
        )}
      >
        {navLinks.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#E4B363] transition"
          >
            {label}
          </a>
        ))}
        
      </div>
    </>
  );
};

export default Navbar;
