import React from 'react';
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon } from 'lucide-react';
export const Contact = () => {
  return <section id="contact" className="py-20 bg-[#343a40] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg font-extralight max-w-2xl mx-auto">
            Ready to test your strategic assumptions before committing
            significant capital? Our team is ready to assist you.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Full Name
                </label>
                <input type="text" id="name" className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#a98c5a]" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="company" className="block mb-2 font-medium">
                  Company
                </label>
                <input type="text" id="company" className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#a98c5a]" placeholder="Your company name" />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email Address
                </label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#a98c5a]" placeholder="your.email@company.com" />
              </div>
              <div>
                <label htmlFor="service" className="block mb-2 font-medium">
                  Service of Interest
                </label>
                <select id="service" className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#a98c5a]">
                  <option value="" className="bg-[#343a40]">
                    Select a service
                  </option>
                  <option value="risk-simulation" className="bg-[#343a40]">
                    Risk Simulation Lab
                  </option>
                  <option value="red-team" className="bg-[#343a40]">
                    Red Team Review
                  </option>
                  <option value="retainer" className="bg-[#343a40]">
                    Strategic Retainer
                  </option>
                  <option value="other" className="bg-[#343a40]">
                    Other Inquiry
                  </option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#a98c5a]" placeholder="Tell us about your strategic challenges..."></textarea>
              </div>
              <button type="submit" className="w-full bg-[#a98c5a] text-white px-6 py-3 rounded hover:bg-opacity-90 transition-colors font-medium">
                Request a Confidential Discussion
              </button>
            </form>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-6 text-[#a98c5a]">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPinIcon size={24} className="mr-4 text-[#a98c5a] flex-shrink-0" />
                  <div>
                    <p className="font-medium">Headquarters</p>
                    <p className="text-white/80">London, United Kingdom</p>
                    <p className="text-white/80">(Remote-first company)</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <PhoneIcon size={24} className="mr-4 text-[#a98c5a] flex-shrink-0" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-white/80">By appointment</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MailIcon size={24} className="mr-4 text-[#a98c5a] flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-white/80">inquiries@marentislabs.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ClockIcon size={24} className="mr-4 text-[#a98c5a] flex-shrink-0" />
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p className="text-white/80">
                      Monday - Friday: 9:00 AM - 6:00 PM GMT
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#a98c5a]">
                Confidentiality Assurance
              </h3>
              <p className="text-white/80 mb-2">
                All inquiries and engagements are covered by our comprehensive
                confidentiality framework, including mutual NDAs and secure
                information handling protocols.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};