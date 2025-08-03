import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

type NavbarProps = {
  baseUrl?: string;
};

export const Navbar: React.FC<NavbarProps> = ({
  baseUrl = '/'
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-28">
          <div className="flex items-center">
            <div className="flex-shrink-0">
                <Link to="/" className="flex items-center">
                  <img src={/Marentis_Labs_Full_Logo.svg} alt="Marentis Labs Logo" className="h-24 md:h-28 w-auto" />
                </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/services" className="text-[#343a40] hover:text-[#a98c5a] transition-colors text-lg">
              Services
            </Link>
            <Link to="/about" className="text-[#343a40] hover:text-[#a98c5a] transition-colors text-lg">
              About
            </Link>
            <Link to="/why-it-matters" className="text-[#343a40] hover:text-[#a98c5a] transition-colors text-lg">
              Why It Matters
            </Link>
            <Link to="/blog" className="text-[#343a40] hover:text-[#a98c5a] transition-colors text-lg">
              Blog
            </Link>
            <Link to="/contact" className="bg-[#343a40] text-white px-5 py-3 rounded hover:bg-[#4a6572] transition-colors text-lg">
              Contact Us
            </Link>
          </div>
          <div className="flex items-center md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-[#343a40]">
              {isMenuOpen ? <XIcon size={28} /> : <MenuIcon size={28} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/services" className="block px-3 py-2 text-[#343a40] hover:text-[#a98c5a] text-lg" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
            <Link to="/about" className="block px-3 py-2 text-[#343a40] hover:text-[#a98c5a] text-lg" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link to="/why-it-matters" className="block px-3 py-2 text-[#343a40] hover:text-[#a98c5a] text-lg" onClick={() => setIsMenuOpen(false)}>
              Why It Matters
            </Link>
            <Link to="/blog" className="block px-3 py-2 text-[#343a40] hover:text-[#a98c5a] text-lg" onClick={() => setIsMenuOpen(false)}>
              Blog
            </Link>
            <Link to="/contact" className="block px-3 py-2 bg-[#343a40] text-white rounded text-lg" onClick={() => setIsMenuOpen(false)}>
              Contact Us
            </Link>
          </div>
        </div>}
    </nav>;
};