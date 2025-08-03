import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
export const LogoCarousel = () => {
  const logos = [{
    name: 'Kleinwort Hambros',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Kleinwort_Hambros_logo.svg/1200px-Kleinwort_Hambros_logo.svg.png'
  }, {
    name: 'JP Morgan',
    url: 'https://logos-world.net/wp-content/uploads/2021/02/JP-Morgan-Chase-Logo.png'
  }, {
    name: 'Morgan Stanley',
    url: 'https://logos-world.net/wp-content/uploads/2021/02/Morgan-Stanley-Logo.png'
  }, {
    name: 'SICO Bank',
    url: 'https://www.sicobank.com/sites/default/files/sico-logo.png'
  }, {
    name: 'Credit Suisse',
    url: 'https://logos-world.net/wp-content/uploads/2021/02/Credit-Suisse-Logo-2006-2022.png'
  }];
  const scrollRef = useRef(null);
  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;
    const animateScroll = () => {
      if (scrollElement.scrollLeft >= scrollElement.scrollWidth / 2) {
        scrollElement.scrollLeft = 0;
      } else {
        scrollElement.scrollLeft += 1;
      }
    };
    const animationId = setInterval(animateScroll, 30);
    return () => clearInterval(animationId);
  }, []);
  return <section id="partners" className="py-20 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Link to="/why-it-matters" className="inline-block group">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#343a40] group-hover:text-[#a98c5a] transition-colors">
              Trusted by Industry Leaders
            </h2>
          </Link>
          <p className="text-lg text-[#4a6572] max-w-2xl mx-auto">
            Our founder has extensive experience working with leading financial
            institutions around the world.
          </p>
        </div>
        <div className="relative overflow-hidden">
          <div ref={scrollRef} className="flex items-center space-x-12 overflow-x-auto scrollbar-hide py-8" style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}>
            {/* Double the logos for seamless loop */}
            {[...logos, ...logos].map((logo, index) => <div key={index} className="flex-shrink-0 h-16 md:h-20 w-auto grayscale hover:grayscale-0 transition-all duration-300">
                <img src={logo.url} alt={`${logo.name} logo`} className="h-full object-contain" />
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};