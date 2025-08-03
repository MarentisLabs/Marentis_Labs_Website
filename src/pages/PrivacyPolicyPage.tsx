import React from 'react';
import { Link } from 'react-router-dom';
export const PrivacyPolicyPage = () => {
  return <>
      <div className="bg-[#343a40] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl max-w-2xl">
            How we collect, use, and protect your personal information.
          </p>
        </div>
      </div>
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <p className="text-lg mb-6 text-[#4a6572]">
              Last Updated:{' '}
              {new Date().toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })}
            </p>
            <h2 className="text-2xl font-bold mb-4 text-[#343a40]">
              Introduction
            </h2>
            <p className="mb-6 text-[#4a6572]">
              Marentis Labs Ltd ("we," "our," or "us") is committed to
              protecting your privacy. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              visit our website or engage with our services.
            </p>
            <p className="mb-6 text-[#4a6572]">
              Please read this Privacy Policy carefully. By accessing or using
              our services, you acknowledge that you have read, understood, and
              agree to be bound by all the terms outlined in this policy.
            </p>
            <h2 className="text-2xl font-bold mb-4 mt-8 text-[#343a40]">
              Information We Collect
            </h2>
            <p className="mb-4 text-[#4a6572]">
              We may collect information about you in a variety of ways. The
              information we collect may include:
            </p>
            <h3 className="text-xl font-bold mb-3 text-[#343a40]">
              Personal Data
            </h3>
            <p className="mb-4 text-[#4a6572]">
              When you engage with our services or fill out forms on our
              website, we may collect personally identifiable information, such
              as your:
            </p>
            <ul className="list-disc pl-6 mb-6 text-[#4a6572]">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Job title and company</li>
              <li>Content of messages sent through our contact forms</li>
            </ul>
            <h3 className="text-xl font-bold mb-3 text-[#343a40]">
              Usage Data
            </h3>
            <p className="mb-4 text-[#4a6572]">
              We may also collect information about how you access and use our
              website, including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-[#4a6572]">
              <li>Your IP address</li>
              <li>Browser type and version</li>
              <li>Pages you visit</li>
              <li>Time and date of your visit</li>
              <li>Time spent on pages</li>
              <li>Device information</li>
            </ul>
            <h2 className="text-2xl font-bold mb-4 mt-8 text-[#343a40]">
              How We Use Your Information
            </h2>
            <p className="mb-4 text-[#4a6572]">
              We may use the information we collect about you for various
              purposes, including to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-[#4a6572]">
              <li>Provide, operate, and maintain our services</li>
              <li>Improve, personalize, and expand our services</li>
              <li>Understand and analyze how you use our services</li>
              <li>
                Develop new products, services, features, and functionality
              </li>
              <li>
                Communicate with you about our services, updates, and other
                information
              </li>
              <li>Process transactions</li>
              <li>Find and prevent fraud</li>
              <li>For compliance with legal obligations</li>
            </ul>
            <h2 className="text-2xl font-bold mb-4 mt-8 text-[#343a40]">
              Disclosure of Your Information
            </h2>
            <p className="mb-4 text-[#4a6572]">
              We may share information we have collected about you in certain
              situations. Your information may be disclosed as follows:
            </p>
            <h3 className="text-xl font-bold mb-3 text-[#343a40]">
              By Law or to Protect Rights
            </h3>
            <p className="mb-6 text-[#4a6572]">
              If we believe the release of information about you is necessary to
              respond to legal process, to investigate or remedy potential
              violations of our policies, or to protect the rights, property,
              and safety of others, we may share your information as permitted
              or required by any applicable law, rule, or regulation.
            </p>
            <h3 className="text-xl font-bold mb-3 text-[#343a40]">
              Third-Party Service Providers
            </h3>
            <p className="mb-6 text-[#4a6572]">
              We may share your information with third parties that perform
              services for us or on our behalf, including payment processing,
              data analysis, email delivery, hosting services, customer service,
              and marketing assistance.
            </p>
            <h3 className="text-xl font-bold mb-3 text-[#343a40]">
              Business Transfers
            </h3>
            <p className="mb-6 text-[#4a6572]">
              If we are involved in a merger, acquisition, or sale of all or a
              portion of our assets, you will be notified via email and/or a
              prominent notice on our website of any change in ownership or uses
              of your personal information, as well as any choices you may have
              regarding your personal information.
            </p>
            <h2 className="text-2xl font-bold mb-4 mt-8 text-[#343a40]">
              Security of Your Information
            </h2>
            <p className="mb-6 text-[#4a6572]">
              We use administrative, technical, and physical security measures
              to help protect your personal information. While we have taken
              reasonable steps to secure the personal information you provide to
              us, please be aware that despite our efforts, no security measures
              are perfect or impenetrable, and no method of data transmission
              can be guaranteed against any interception or other type of
              misuse.
            </p>
            <h2 className="text-2xl font-bold mb-4 mt-8 text-[#343a40]">
              Your Rights Regarding Your Data
            </h2>
            <p className="mb-4 text-[#4a6572]">
              Depending on your location, you may have certain rights regarding
              your personal information, including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-[#4a6572]">
              <li>The right to access personal data we hold about you</li>
              <li>
                The right to request correction of inaccurate personal data
              </li>
              <li>The right to request deletion of your personal data</li>
              <li>The right to object to processing of your personal data</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
            <p className="mb-6 text-[#4a6572]">
              To exercise these rights, please contact us using the details
              provided below.
            </p>
            <h2 className="text-2xl font-bold mb-4 mt-8 text-[#343a40]">
              Cookies and Web Beacons
            </h2>
            <p className="mb-4 text-[#4a6572]">
              We may use cookies, web beacons, tracking pixels, and other
              tracking technologies on our website to help customize the site
              and improve your experience. For more information on how we use
              cookies, please refer to our{' '}
              <Link to="/cookie-policy" className="text-[#a98c5a] hover:underline">
                Cookie Policy
              </Link>
              .
            </p>
            <h2 className="text-2xl font-bold mb-4 mt-8 text-[#343a40]">
              Contact Us
            </h2>
            <p className="mb-6 text-[#4a6572]">
              If you have questions or comments about this Privacy Policy,
              please contact us at:
            </p>
            <div className="mb-8 text-[#4a6572]">
              <p>Marentis Labs Ltd</p>
              <p>Email: privacy@marentislabs.com</p>
              <p>Address: 123 Business Avenue, London, UK</p>
            </div>
            <div className="border-t border-gray-200 pt-6 mt-8">
              <Link to="/terms-of-service" className="text-[#a98c5a] hover:underline mr-6">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="text-[#a98c5a] hover:underline">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>;
};