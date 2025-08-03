import React from 'react';
import { Contact } from '../components/Contact';
export const ContactPage = () => {
  return <>
      <div className="bg-[#343a40] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-2xl">
            Ready to test your strategic assumptions before committing
            significant capital? Our team is ready to assist you.
          </p>
        </div>
      </div>
      <Contact />
    </>;
};