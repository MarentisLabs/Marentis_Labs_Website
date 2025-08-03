import React from 'react';
export const Testimonials = () => {
  const testimonials = [{
    quote: "Marentis Labs' Risk Simulation Lab uncovered critical vulnerabilities in our expansion strategy that we had completely overlooked. Their rigorous approach saved us from a potentially costly misstep.",
    author: 'Chief Strategy Officer',
    company: 'FTSE 100 Industrial Company'
  }, {
    quote: 'The Red Team Review provided exactly the constructive challenge we needed before finalizing our acquisition. Their unique blend of human expertise and AI-powered analysis delivered insights no traditional advisor had identified.',
    author: 'Operating Partner',
    company: 'Mid-Market Private Equity Firm'
  }, {
    quote: 'Having Marentis Labs on retainer gives our board confidence that our strategic initiatives have been properly stress-tested. Their external perspective is invaluable.',
    author: 'Board Chair',
    company: 'FTSE 250 Financial Services Company'
  }];
  return <section id="testimonials" className="py-20 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#343a40]">
            What Our Clients Say
          </h2>
          <p className="text-lg text-[#4a6572] max-w-2xl mx-auto">
            We work with senior leaders at some of the world's most
            sophisticated organizations. Here's what they say about our impact.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="mb-6 text-[#a98c5a]">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                </svg>
              </div>
              <blockquote className="text-[#4a6572] mb-6 italic">
                {testimonial.quote}
              </blockquote>
              <div>
                <p className="font-bold text-[#343a40]">{testimonial.author}</p>
                <p className="text-sm text-[#6c757d]">{testimonial.company}</p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};