import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { About } from '../components/About';
import { LogoCarousel } from '../components/LogoCarousel';
import { Contact } from '../components/Contact';
import { Link } from 'react-router-dom';
export const Home = ({
  baseUrl = '/'
}) => {
  const insightPosts = [{
    title: 'The Hidden Risks in Strategic Transformations',
    excerpt: 'Why 70% of transformation initiatives fail and how to be in the successful minority.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  }, {
    title: 'AI in Risk Management: Beyond the Hype',
    excerpt: 'Practical applications of AI that are creating real value in risk functions today.',
    image: 'https://images.unsplash.com/photo-1488229297570-58520851e868?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  }, {
    title: 'Board-Level Decision Making Under Uncertainty',
    excerpt: 'Techniques from high-reliability organizations that boards can apply immediately.',
    image: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  }];
  return <>
      <Hero baseUrl={baseUrl} />
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#343a40]">
              Welcome to Marentis Labs
            </h2>
            <p className="text-lg text-[#4a6572] max-w-2xl mx-auto mb-8">
              We simulate failure so leaders don't have to experience it.
              Explore our services, learn about our approach, or read our latest
              insights.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/services" className="bg-[#343a40] text-white px-6 py-3 rounded hover:bg-[#4a6572] transition-colors">
                Our Services
              </Link>
              <Link to="/blog" className="border border-[#343a40] text-[#343a40] px-6 py-3 rounded hover:bg-gray-50 transition-colors">
                Read Our Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
      <LogoCarousel />
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#343a40]">
              Latest Insights
            </h2>
            <p className="text-lg text-[#4a6572] max-w-2xl mx-auto">
              Stay updated with our latest thinking on risk management and
              strategic decision-making.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {insightPosts.map((post, index) => <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
                <div className="h-56 bg-cover bg-center" style={{
              backgroundImage: `url(${post.image})`
            }}></div>
                <div className="p-6">
                  <p className="text-sm text-[#a98c5a] mb-2">
                    {new Date().toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
                  </p>
                  <h3 className="font-bold text-xl mb-2 text-[#343a40]">
                    {post.title}
                  </h3>
                  <p className="text-[#4a6572] mb-4">{post.excerpt}</p>
                  <Link to="/blog" className="text-[#a98c5a] font-medium hover:underline flex items-center">
                    Read more <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>)}
          </div>
          <div className="text-center mt-10">
            <Link to="/blog" className="inline-block border border-[#a98c5a] text-[#a98c5a] px-6 py-3 rounded hover:bg-[#a98c5a] hover:text-white transition-colors">
              View All Posts
            </Link>
          </div>
        </div>
      </div>
    </>;
};