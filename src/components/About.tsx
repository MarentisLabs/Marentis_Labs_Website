import React from 'react';
import { CheckIcon, TargetIcon, BriefcaseIcon } from 'lucide-react';
export const About = () => {
  const strengths = ['Selectively adapts financial services risk tools for non-financial firms', 'AI agents for enhanced research, synthesis, and scenario generation', 'Focused, evidence-based challenge function', 'Remote-first UK Private Limited Company'];
  const targetClients = [{
    title: 'FTSE 350 Companies',
    description: 'Group-level executives (CFO, COO, CSO, GC) and divisional leadership responsible for major strategic initiatives.',
    icon: <TargetIcon size={24} className="text-[#a98c5a] mr-3 flex-shrink-0" />
  }, {
    title: 'Private Equity',
    description: 'Operating Partners seeking to de-risk portfolio company strategies and Investment Committees requiring rigorous due diligence.',
    icon: <BriefcaseIcon size={24} className="text-[#a98c5a] mr-3 flex-shrink-0" />
  }];
  return <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#343a40]">
              About Marentis Labs
            </h2>
            <p className="text-lg mb-6 text-[#4a6572]">
              Marentis Labs is a boutique advisory firm providing Strategic Risk
              and Performance Insights. We serve as a sophisticated challenge
              function, testing assumptions before reality does.
            </p>
            <p className="text-lg mb-8 text-[#4a6572]">
              Founded by Owen Vallis, a risk executive with 20 years of
              experience advising boards and leadership teams in complex
              environments. Our operating model combines deep domain expertise
              with significant leverage from bespoke AI agents.
            </p>
            <div className="space-y-3 mb-8">
              {strengths.map((strength, index) => <div key={index} className="flex items-start">
                  <CheckIcon size={20} className="text-[#a98c5a] mr-2 mt-1 flex-shrink-0" />
                  <span className="text-[#4a6572]">{strength}</span>
                </div>)}
            </div>
            <h3 className="text-xl font-bold mb-4 text-[#343a40]">
              Who We Serve
            </h3>
            <div className="space-y-4">
              {targetClients.map((client, index) => <div key={index} className="flex items-start">
                  {client.icon}
                  <div>
                    <h4 className="font-bold text-[#343a40]">{client.title}</h4>
                    <p className="text-[#4a6572]">{client.description}</p>
                  </div>
                </div>)}
            </div>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#343a40] to-transparent opacity-70"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <blockquote className="italic text-white text-lg">
                "Our mission is to transform how organizations perceive and
                manage risk, turning potential threats into strategic
                advantages."
              </blockquote>
              <p className="text-white font-medium mt-4">
                — Owen Vallis, Founder
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};