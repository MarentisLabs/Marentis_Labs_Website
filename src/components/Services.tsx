import React from 'react';
import { BeakerIcon, ShieldIcon, ClockIcon, TrendingUpIcon, LockIcon, ServerIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
export const Services = () => {
  const services = [{
    title: 'Risk Simulation Lab',
    description: "A 90-day engagement to test your leadership team's decision-making and governance against a bespoke high-stakes strategic shock.",
    icon: <BeakerIcon size={32} className="text-[#a98c5a]" />,
    features: ['Diagnostic & Scoping', 'Simulation Design', 'Live Facilitated Session', 'Analysis & Reporting', 'Executive Debrief']
  }, {
    title: 'Red Team Review',
    description: 'A rapid (4-week) confidential critique of a single strategic plan, such as M&A case or transformation roadmap.',
    icon: <ShieldIcon size={32} className="text-[#a98c5a]" />,
    features: ['Scoping & Confidential Briefing', 'Analysis & Stress-Testing', 'Critique Memorandum', 'Executive Debrief']
  }, {
    title: 'Strategic Retainer',
    description: 'Ongoing strategic counsel following initial engagements, providing continuous risk assessment and performance insights.',
    icon: <ClockIcon size={32} className="text-[#a98c5a]" />,
    features: ['Regular Strategic Reviews', 'On-demand Advisory Support', 'Continuous Risk Monitoring', 'Priority Access to Services']
  }, {
    title: 'Risk Conscious Organisational Design & Implementation',
    description: 'Using our world class risk management and organisational design expertise, we help you build the right team and structure to deliver your strategy.',
    icon: <TrendingUpIcon size={32} className="text-[#a98c5a]" />,
    features: ['insightful and comprehensive business needs analysis', 'Efficient and risk conscious organisational design', 'Stress testing of organisational structures and resources', 'Zero Data Sharing with Third Parties']
  }];
  return <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#343a40]">
            Our Services
          </h2>
          <p className="text-lg text-[#4a6572] max-w-2xl mx-auto">
            Test assumptions before reality does. Our specialized services are
            designed for senior leaders making consequential decisions.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => <div key={index} className="p-8 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-[#343a40]">
                {service.title}
              </h3>
              <p className="text-[#4a6572] mb-4">{service.description}</p>
              <ul className="mb-6 space-y-2">
                {service.features.map((feature, idx) => <li key={idx} className="flex items-center text-sm text-[#4a6572]">
                    <span className="mr-2 text-[#a98c5a]">•</span>
                    {feature}
                  </li>)}
              </ul>
            </div>)}
        </div>
        {/* AI Security Note */}
        {services.some(s => s.title === 'AI-Enhanced Delivery') && <div className="mt-12 bg-[#f8f9fa] p-6 rounded-lg border border-gray-200">
            <div className="flex items-start">
              <div className="mr-4">
                <div className="p-3 bg-[#a98c5a]/10 rounded-full">
                  <LockIcon size={24} className="text-[#a98c5a]" />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2 text-[#343a40]">
                  Our Confidentiality Commitment
                </h4>
                <p className="text-[#4a6572] mb-3">
                  Unlike standard AI solutions that send data to external
                  servers, our bespoke AI models run entirely on our secure
                  local infrastructure. Your confidential data never leaves our
                  protected environment, ensuring complete privacy and security.
                </p>
                <div className="flex items-center text-sm text-[#4a6572]">
                  <ServerIcon size={16} className="mr-2 text-[#a98c5a]" />
                  <span>
                    All AI processing happens on our secure systems
                  </span>
                </div>
              </div>
            </div>
          </div>}
        <div className="text-center mt-12">
          <Link to="/contact" className="bg-[#a98c5a] text-white px-6 py-3 rounded hover:bg-opacity-90 transition-colors font-medium inline-block">
            Request a Consultation
          </Link>
        </div>
      </div>
    </section>;
};