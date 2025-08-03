import React from 'react';
import { Link } from 'react-router-dom';
export const Footer = () => {
  return <footer className="bg-[#212529] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/">
              <img src="/Marentis_Labs_Full_Logo.svg" alt="Marentis Labs Logo" className="h-12 w-auto mb-4 filter brightness-0 invert" />
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              Transforming risk from a compliance burden into a source of
              competitive advantage through rigorous, simulation-based
              challenge.
            </p>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Marentis Labs Ltd. All rights
              reserved.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-[#a98c5a] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#a98c5a] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-[#a98c5a] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-[#a98c5a] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-[#a98c5a] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-400 hover:text-[#a98c5a] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-gray-400 hover:text-[#a98c5a] transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>;
};