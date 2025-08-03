import React from 'react';
import { TrendingUpIcon, ShieldIcon, BarChartIcon, BriefcaseIcon, UsersIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
export const WhyItMattersPage = () => {
  const benefits = [{
    title: 'Independent Assessment',
    description: 'An external perspective free from organizational biases and politics, providing honest and objective evaluation of strategic decisions.',
    icon: <ShieldIcon size={32} className="text-[#a98c5a]" />
  }, {
    title: 'Financial Services Expertise',
    description: 'Access to risk management techniques developed over decades and refined through billions in investment within the financial services industry.',
    icon: <BriefcaseIcon size={32} className="text-[#a98c5a]" />
  }, {
    title: 'Enhanced Decision Quality',
    description: 'Rigorous stress testing and scenario analysis that improves the robustness of strategic decisions and business plans.',
    icon: <BarChartIcon size={32} className="text-[#a98c5a]" />
  }, {
    title: 'Beyond Compliance',
    description: 'Transforming risk management from a box-ticking exercise into a source of competitive advantage and strategic insight.',
    icon: <TrendingUpIcon size={32} className="text-[#a98c5a]" />
  }, {
    title: 'Extended Risk Function',
    description: 'Support for resource-constrained Chief Risk Officers, providing validation, guidance, and specialized expertise when needed.',
    icon: <UsersIcon size={32} className="text-[#a98c5a]" />
  }];
  return <>
      <div className="bg-[#343a40] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Why It Matters
          </h1>
          <p className="text-xl max-w-3xl">
            Understanding why independent strategic risk assessment is crucial
            for today's organizations and how our approach delivers exceptional
            value.
          </p>
        </div>
      </div>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#343a40]">
                The Value of Independent Assessment
              </h2>
              <p className="text-lg mb-6 text-[#4a6572]">
                In today's complex business environment, organizations face
                unprecedented levels of uncertainty and volatility. Strategic
                decisions carry significant consequences, yet many businesses
                lack the specialized capabilities to rigorously test their
                assumptions before committing substantial resources.
              </p>
              <p className="text-lg mb-6 text-[#4a6572]">
                Our independent assessment provides a crucial external
                perspective, free from organizational biases and internal
                politics. We challenge assumptions, identify blind spots, and
                stress test plans before they meet the unforgiving reality of
                the market.
              </p>
              <p className="text-lg mb-6 text-[#4a6572]">
                This approach doesn't just mitigate risk—it improves decision
                quality and increases the likelihood of strategic success.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#343a40] to-transparent opacity-50"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <blockquote className="italic text-white text-lg">
                  "The greatest risk is not taking any risk... In a world that
                  is changing quickly, the only strategy that is guaranteed to
                  fail is not taking risks."
                </blockquote>
                <p className="text-white font-medium mt-4">— Mark Zuckerberg</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#343a40]">
              Key Benefits
            </h2>
            <p className="text-lg text-[#4a6572] max-w-3xl mx-auto">
              Our approach delivers significant advantages that transform how
              organizations understand and manage strategic risk.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.slice(0, 3).map((benefit, index) => <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-[#343a40]">
                  {benefit.title}
                </h3>
                <p className="text-[#4a6572]">{benefit.description}</p>
              </div>)}
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {benefits.slice(3).map((benefit, index) => <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-[#343a40]">
                  {benefit.title}
                </h3>
                <p className="text-[#4a6572]">{benefit.description}</p>
              </div>)}
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#343a40]">
                From Compliance to Competitive Advantage
              </h2>
              <p className="text-lg mb-6 text-[#4a6572]">
                Many organizations view risk management as a compliance
                function—a necessary cost of doing business rather than a source
                of value. This perspective misses the strategic opportunity that
                sophisticated risk management can provide.
              </p>
              <p className="text-lg mb-6 text-[#4a6572]">
                The financial services industry has invested billions in
                developing advanced risk management capabilities, driven by
                regulatory requirements and the inherent complexity of financial
                markets. These capabilities—scenario analysis, stress testing,
                and rigorous challenge—have proven their worth in identifying
                threats and opportunities before they materialize.
              </p>
              <p className="text-lg mb-6 text-[#4a6572]">
                Marentis Labs brings these sophisticated approaches to
                organizations beyond financial services, helping them transform
                risk management from a compliance burden into a source of
                competitive advantage.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#343a40]">
                Supporting Chief Risk Officers
              </h2>
              <p className="text-lg mb-6 text-[#4a6572]">
                Today's Chief Risk Officers face increasing pressure to do more
                with less. They're expected to provide strategic insight while
                managing an expanding universe of risks with limited resources.
              </p>
              <p className="text-lg mb-6 text-[#4a6572]">
                Our retained services provide CROs with on-demand access to
                specialized expertise, validation of internal assessments, and
                an independent challenge function that strengthens their
                influence within the organization.
              </p>
              <p className="text-lg mb-6 text-[#4a6572]">
                This support allows CROs to focus on their most strategic
                priorities while ensuring comprehensive risk coverage and
                maintaining the highest standards of risk governance.
              </p>
              <div className="mt-8">
                <Link to="/services" className="bg-[#343a40] text-white px-6 py-3 rounded hover:bg-[#4a6572] transition-colors inline-block">
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-[#343a40] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Approach to Risk?
            </h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Discover how our strategic risk and performance insights can help
              your organization make better decisions and achieve superior
              results.
            </p>
            <Link to="/contact" className="bg-[#a98c5a] text-white px-8 py-4 rounded-md hover:bg-opacity-90 transition-colors font-medium inline-block">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>;
};