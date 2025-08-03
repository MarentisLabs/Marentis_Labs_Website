import React, { useEffect, useState } from 'react';
import { XIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
export const CookiesConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  useEffect(() => {
    // Check if user has already accepted cookies
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      // Show the consent banner after a short delay
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);
  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowConsent(false);
  };
  const declineCookies = () => {
    localStorage.setItem('cookiesDeclined', 'true');
    setShowConsent(false);
  };
  if (!showConsent) return null;
  return <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-[#343a40] mb-2">
            Cookie Consent
          </h3>
          <p className="text-[#4a6572]">
            We use cookies to enhance your browsing experience, analyze site
            traffic, and personalize content. By clicking "Accept All", you
            consent to our use of cookies as described in our{' '}
            <Link to="/cookie-policy" className="text-[#a98c5a] underline">
              Cookie Policy
            </Link>
            .
          </p>
        </div>
        <div className="flex flex-wrap gap-3 mt-2 md:mt-0">
          <button onClick={declineCookies} className="px-4 py-2 border border-[#343a40] text-[#343a40] rounded hover:bg-gray-50 transition-colors">
            Decline
          </button>
          <button onClick={acceptCookies} className="px-4 py-2 bg-[#a98c5a] text-white rounded hover:bg-opacity-90 transition-colors">
            Accept All
          </button>
          <button onClick={() => setShowConsent(false)} className="md:hidden p-2 text-gray-500 hover:text-gray-700" aria-label="Close cookie consent">
            <XIcon size={20} />
          </button>
        </div>
      </div>
    </div>;
};