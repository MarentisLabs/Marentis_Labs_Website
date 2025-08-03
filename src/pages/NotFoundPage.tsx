import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, ArrowLeftIcon } from 'lucide-react';
export const NotFoundPage = () => {
  return <div className="min-h-[70vh] flex flex-col items-center justify-center bg-white py-16 px-4">
      <div className="text-center max-w-lg">
        <img src="/Marentis_Labs_Full_Logo.svg" alt="Marentis Labs Logo" className="h-20 mx-auto mb-6" />
        <h1 className="text-6xl font-bold text-[#343a40] mb-4">404</h1>
        <h2 className="text-2xl font-bold text-[#343a40] mb-4">
          Page Not Found
        </h2>
        <p className="text-[#4a6572] mb-8">
          The page you're looking for doesn't exist or has been moved. Perhaps
          we can help you find what you're looking for.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/" className="flex items-center justify-center gap-2 bg-[#343a40] text-white px-6 py-3 rounded hover:bg-[#4a6572] transition-colors">
            <HomeIcon size={18} />
            Back to Home
          </Link>
          <button onClick={() => window.history.back()} className="flex items-center justify-center gap-2 border border-[#343a40] text-[#343a40] px-6 py-3 rounded hover:bg-gray-50 transition-colors">
            <ArrowLeftIcon size={18} />
            Go Back
          </button>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-[#4a6572] mb-4">
            Looking for something specific? Here are some helpful links:
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link to="/services" className="text-[#a98c5a] hover:underline">
              Services
            </Link>
            <Link to="/about" className="text-[#a98c5a] hover:underline">
              About Us
            </Link>
            <Link to="/why-it-matters" className="text-[#a98c5a] hover:underline">
              Why It Matters
            </Link>
            <Link to="/contact" className="text-[#a98c5a] hover:underline">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>;
};