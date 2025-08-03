import React from 'react';
import { About } from '../components/About';
import { LogoCarousel } from '../components/LogoCarousel';
import { Link } from 'react-router-dom';
export const AboutPage = () => {
  return <>
      <div className="bg-[#343a40] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl max-w-2xl">
            Marentis Labs is a boutique advisory firm providing Strategic Risk
            and Performance Insights.
          </p>
        </div>
      </div>
      <About />
      <LogoCarousel />
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#343a40]">
                Our Approach
              </h2>
              <p className="text-lg mb-4 text-[#4a6572]">
                At Marentis Labs, we believe that rigorous challenge is
                essential to sound decision-making. Our approach combines deep
                domain expertise with cutting-edge methodologies to deliver
                insights that traditional advisors miss.
              </p>
              <p className="text-lg mb-6 text-[#4a6572]">
                We don't just identify risks – we help you understand their
                implications and develop strategies to mitigate them or even
                transform them into competitive advantages.
              </p>
              <Link to="/services" className="bg-[#343a40] text-white px-6 py-3 rounded hover:bg-[#4a6572] transition-colors inline-block">
                Explore Our Services
              </Link>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-[#343a40]">
                Our Values
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#a98c5a] font-bold mr-2">•</span>
                  <div>
                    <p className="font-bold text-[#343a40]">
                      Intellectual Rigor
                    </p>
                    <p className="text-[#4a6572]">
                      We apply the highest standards of critical thinking to
                      every engagement.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#a98c5a] font-bold mr-2">•</span>
                  <div>
                    <p className="font-bold text-[#343a40]">
                      Constructive Challenge
                    </p>
                    <p className="text-[#4a6572]">
                      We ask the difficult questions that lead to better
                      decisions.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#a98c5a] font-bold mr-2">•</span>
                  <div>
                    <p className="font-bold text-[#343a40]">Practical Wisdom</p>
                    <p className="text-[#4a6572]">
                      We deliver insights that can be translated into concrete
                      actions.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#a98c5a] font-bold mr-2">•</span>
                  <div>
                    <p className="font-bold text-[#343a40]">
                      Absolute Confidentiality
                    </p>
                    <p className="text-[#4a6572]">
                      We maintain the highest standards of discretion with all
                      client information.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>;
};