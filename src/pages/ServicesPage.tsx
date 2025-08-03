import React from 'react';
import { Services } from '../components/Services';
import { Link } from 'react-router-dom';
import { ShieldIcon, LockIcon, ServerIcon } from 'lucide-react';
export const ServicesPage = () => {
  return <>
      <div className="bg-[#343a40] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-2xl">
            Test assumptions before reality does. Our specialized services are
            designed for senior leaders making consequential decisions.
          </p>
        </div>
      </div>
      <Services />
      {/* Confidentiality Section */}
      <section className="py-16 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#343a40]">
              Our Confidentiality Commitment
            </h2>
            <p className="text-lg text-[#4a6572] max-w-3xl mx-auto">
              We understand the sensitive nature of the strategic decisions we
              help you evaluate. Your confidential information is protected by
              our comprehensive security measures.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="mb-4 flex justify-center">
                <div className="p-3 bg-[#a98c5a]/10 rounded-full">
                  <LockIcon size={32} className="text-[#a98c5a]" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-[#343a40]">
                End-to-End Encrypted Communication
              </h3>
              <p className="text-[#4a6572] text-center">
                All client communications are secured with end-to-end
                encryption, ensuring that sensitive discussions remain private
                and protected from unauthorized access.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="mb-4 flex justify-center">
                <div className="p-3 bg-[#a98c5a]/10 rounded-full">
                  <ServerIcon size={32} className="text-[#a98c5a]" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-[#343a40]">
                Swiss-Hosted Encrypted Data Rooms
              </h3>
              <p className="text-[#4a6572] text-center">
                All client documents and data are stored in fully encrypted data
                rooms hosted in Switzerland, benefiting from Swiss privacy laws,
                among the strongest in the world.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="mb-4 flex justify-center">
                <div className="p-3 bg-[#a98c5a]/10 rounded-full">
                  <ShieldIcon size={32} className="text-[#a98c5a]" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-[#343a40]">
                Comprehensive Confidentiality Agreements
              </h3>
              <p className="text-[#4a6572] text-center">
                Our engagements begin with robust confidentiality agreements
                that provide legal protection and clearly define our obligations
                to safeguard your information.
              </p>
            </div>
          </div>
          <div className="mt-12 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-4 text-[#343a40]">
              Our Security Standards
            </h3>
            <p className="text-[#4a6572] mb-6">
              Marentis Labs implements security standards that meet or exceed
              those found in regulated financial institutions:
            </p>
            <ul className="grid md:grid-cols-2 gap-4">
              <li className="flex items-start">
                <span className="text-[#a98c5a] font-bold mr-2 mt-1">•</span>
                <p className="text-[#4a6572]">
                  Regular security audits and penetration testing
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-[#a98c5a] font-bold mr-2 mt-1">•</span>
                <p className="text-[#4a6572]">
                  Multi-factor authentication for all client data access
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-[#a98c5a] font-bold mr-2 mt-1">•</span>
                <p className="text-[#4a6572]">
                  Strict access controls and need-to-know principles
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-[#a98c5a] font-bold mr-2 mt-1">•</span>
                <p className="text-[#4a6572]">Secure data disposal protocols</p>
              </li>
              <li className="flex items-start">
                <span className="text-[#a98c5a] font-bold mr-2 mt-1">•</span>
                <p className="text-[#4a6572]">
                  Continuous monitoring for unauthorized access attempts
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-[#a98c5a] font-bold mr-2 mt-1">•</span>
                <p className="text-[#4a6572]">
                  Employee security training and background checks
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#343a40] p-8 rounded-lg shadow-sm text-white">
            <h2 className="text-2xl font-bold mb-4">Custom Engagements</h2>
            <p className="mb-6">
              We understand that each organization faces unique challenges.
              Contact us to discuss a bespoke engagement tailored to your
              specific needs and strategic context.
            </p>
            <Link to="/contact" className="bg-[#a98c5a] text-white px-6 py-3 rounded hover:bg-opacity-90 transition-colors font-medium inline-block">
              Request a Consultation
            </Link>
          </div>
        </div>
      </div>
    </>;
};