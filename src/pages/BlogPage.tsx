import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
export const BlogPage = () => {
  const blogPosts = [{
    id: 1,
    title: 'The Hidden Risks in Strategic Transformations',
    excerpt: 'Why 70% of transformation initiatives fail and how to be in the successful minority.',
    date: 'June 15, 2023',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'Strategy',
    readTime: '8 min read'
  }, {
    id: 2,
    title: 'AI in Risk Management: Beyond the Hype',
    excerpt: 'Practical applications of AI that are creating real value in risk functions today.',
    date: 'May 22, 2023',
    image: 'https://images.unsplash.com/photo-1488229297570-58520851e868?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'Technology',
    readTime: '6 min read'
  }, {
    id: 3,
    title: 'Board-Level Decision Making Under Uncertainty',
    excerpt: 'Techniques from high-reliability organizations that boards can apply immediately.',
    date: 'April 10, 2023',
    image: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'Governance',
    readTime: '10 min read'
  }, {
    id: 4,
    title: 'The Evolving Role of the Chief Risk Officer',
    excerpt: 'How top CROs are transitioning from compliance guardians to strategic partners.',
    date: 'March 5, 2023',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'Leadership',
    readTime: '7 min read'
  }, {
    id: 5,
    title: 'Private Equity and the Risk Premium',
    excerpt: 'How leading PE firms are incorporating advanced risk analysis into their valuation models.',
    date: 'February 18, 2023',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'Finance',
    readTime: '9 min read'
  }, {
    id: 6,
    title: 'Climate Risk: Beyond Compliance to Competitive Advantage',
    excerpt: 'Strategies for turning climate-related risks into sources of innovation and market differentiation.',
    date: 'January 29, 2023',
    image: 'https://images.unsplash.com/photo-1440342359743-84fcb8c21f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'Sustainability',
    readTime: '8 min read'
  }];
  const categories = ['All', 'Strategy', 'Technology', 'Governance', 'Leadership', 'Finance', 'Sustainability'];
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredPosts = useMemo(() => {
    if (activeCategory === 'All') {
      return blogPosts;
    }
    return blogPosts.filter(post => post.category === activeCategory);
  }, [activeCategory]);
  return <>
      <div className="bg-[#343a40] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Blog & Insights
          </h1>
          <p className="text-xl max-w-2xl">
            News, insights, and commentary on risk management, strategic
            decision-making, and current affairs from the Marentis Labs team.
          </p>
        </div>
      </div>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between mb-12">
            <h2 className="text-2xl font-bold text-[#343a40] mb-4 md:mb-0">
              Latest Articles
            </h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => <button key={index} className={`px-4 py-2 rounded-full text-sm transition-colors ${category === activeCategory ? 'bg-[#343a40] text-white' : 'bg-gray-100 text-[#343a40] hover:bg-gray-200'}`} onClick={() => setActiveCategory(category)}>
                  {category}
                </button>)}
            </div>
          </div>
          {filteredPosts.length === 0 ? <div className="text-center py-12">
              <p className="text-lg text-[#4a6572]">
                No articles found in this category.
              </p>
              <button onClick={() => setActiveCategory('All')} className="mt-4 text-[#a98c5a] font-medium hover:underline">
                View all articles
              </button>
            </div> : <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="h-48 bg-cover bg-center" style={{
              backgroundImage: `url(${post.image})`
            }}></div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-[#a98c5a] font-medium">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="font-bold text-xl mb-2 text-[#343a40]">
                      {post.title}
                    </h3>
                    <p className="text-[#4a6572] mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{post.date}</span>
                      <Link to="#" className="text-[#a98c5a] font-medium hover:underline">
                        Read more →
                      </Link>
                    </div>
                  </div>
                </div>)}
            </div>}
          {activeCategory === 'All' && filteredPosts.length >= 6 && <div className="mt-12 flex justify-center">
              <button className="bg-[#343a40] text-white px-6 py-3 rounded hover:bg-[#4a6572] transition-colors">
                Load More Articles
              </button>
            </div>}
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-[#343a40]">
                  Subscribe to Our Newsletter
                </h2>
                <p className="text-[#4a6572] mb-6">
                  Stay updated with our latest insights on risk management,
                  strategic decision-making, and more. We send thoughtful
                  content twice a month.
                </p>
                <form className="flex flex-col sm:flex-row gap-3">
                  <input type="email" placeholder="Your email address" className="px-4 py-3 border border-gray-300 rounded flex-grow focus:outline-none focus:ring-2 focus:ring-[#a98c5a]" />
                  <button type="submit" className="bg-[#a98c5a] text-white px-6 py-3 rounded hover:bg-opacity-90 transition-colors font-medium">
                    Subscribe
                  </button>
                </form>
              </div>
              <div className="hidden md:block">
                <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Newsletter" className="rounded-lg w-full h-64 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>;
};