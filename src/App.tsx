import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { WhyItMattersPage } from './pages/WhyItMattersPage';
import { CookiesConsent } from './components/CookiesConsent';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsOfServicePage } from './pages/TermsOfServicePage';
import { CookiePolicyPage } from './pages/CookiePolicyPage';
import { NotFoundPage } from './pages/NotFoundPage';
export function App({
  baseUrl = '/'
}) {
  return <BrowserRouter basename={baseUrl}>
      <div className="w-full min-h-screen font-[Inter] bg-white text-[#343a40]">
        <Navbar baseUrl={baseUrl} />
        <main>
          <Routes>
            <Route path="/" element={<Home baseUrl={baseUrl} />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/why-it-matters" element={<WhyItMattersPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
            <Route path="/cookie-policy" element={<CookiePolicyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer baseUrl={baseUrl} />
        <CookiesConsent />
      </div>
    </BrowserRouter>;
}