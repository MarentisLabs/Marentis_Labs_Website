import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
export const Hero = () => {
  return <section className="relative bg-[#343a40] text-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="md:w-2/3">
          <div className="mb-8">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Strategic Risk & Performance Insights
            </h1>
          </div>
          <p className="text-xl mb-6 max-w-xl leading-relaxed">
            We simulate failure so leaders don't have to experience it.
            Transforming risk from a compliance burden into a source of
            competitive advantage.
          </p>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 mb-12 max-w-xl">
            <p className="text-lg leading-relaxed">
              Serving FTSE 350 companies and private equity firms with rigorous,
              simulation-based challenge to their most critical strategic
              decisions.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="bg-[#a98c5a] text-white px-8 py-4 rounded-md hover:bg-opacity-90 transition-colors font-medium flex items-center gap-2 group">
              Schedule a Consultation
              <ArrowRightIcon size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/services" className="border-2 border-white text-white px-8 py-4 rounded-md hover:bg-white hover:text-[#343a40] transition-colors font-medium">
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#343a40] via-[#343a40]/80 to-transparent"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#343a40] to-transparent"></div>
    </section>;
};