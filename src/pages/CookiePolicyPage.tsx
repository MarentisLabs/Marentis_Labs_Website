import React from 'react';
import { Link } from 'react-router-dom';
export const CookiePolicyPage = () => {
  return <>
      <div className="bg-[#343a40] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Cookie Policy</h1>
          <p className="text-xl max-w-2xl">
            How we use cookies and similar technologies on our website.
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
              What Are Cookies
            </h2>
            <p className="mb-6 text-[#4a6572]">
              Cookies are small pieces of text sent by your web browser by a
              website you visit. A cookie file is stored in your web browser and
              allows the Site or a third-party to recognize you and make your
              next visit easier and the Site more useful to you.
            </p>
            <p className="mb-6 text-[#4a6572]">
              Cookies can be "persistent" or "session" cookies. Persistent
              cookies remain on your personal computer or mobile device when you
              go offline, while session cookies are deleted as soon as you close
              your web browser.
            </p>
            <h2 className="text-2xl font-bold mb-4 mt-8 text-[#343a40]">
              How We Use Cookies
            </h2>
            <p className="mb-4 text-[#4a6572]">
              When you use and access the Site, we may place a number of cookie
              files in your web browser. We use cookies for the following
              purposes:
            </p>
            <ul className="list-disc pl-6 mb-6 text-[#4a6572]">
              <li>
                <strong>Essential cookies:</strong> These are cookies that are
                required for the operation of our website. They include, for
                example, cookies that enable you to log into secure areas of our
                website or make use of e-billing services.
              </li>
              <li>
                <strong>Analytical/performance cookies:</strong> They allow us
                to recognize and count the number of visitors and to see how
                visitors move around our website when they are using it. This
                helps us to improve the way our website works, for example, by
                ensuring that users are finding what they are looking for
                easily.
              </li>
              <li>
                <strong>Functionality cookies:</strong> These are used to
                recognize you when you return to our website. This enables us to
                personalize our content for you, greet you by name and remember
                your preferences (for example, your choice of language or
                region).
              </li>
              <li>
                <strong>Targeting cookies:</strong> These cookies record your
                visit to our website, the pages you have visited and the links
                you have followed. We will use this information to make our
                website and the advertising displayed on it more relevant to
                your interests.
              </li>
            </ul>
            <h2 className="text-2xl font-bold mb-4 mt-8 text-[#343a40]">
              Types of Cookies We Use
            </h2>
            <h3 className="text-xl font-bold mb-3 text-[#343a40]">
              Strictly Necessary Cookies
            </h3>
            <p className="mb-6 text-[#4a6572]">
              These cookies are essential to provide you with services available
              through our website and to enable you to use certain features of
              our website. Without these cookies, we cannot provide you certain
              services on our website.
            </p>
            <h3 className="text-xl font-bold mb-3 text-[#343a40]">
              Performance and Analytics Cookies
            </h3>
            <p className="mb-6 text-[#4a6572]">
              These cookies are used to collect information about traffic to our
              website and how users use our website. The information gathered
              does not identify any individual visitor. The information is
              aggregated and anonymous. It includes the number of visitors to
              our website, the websites that referred them to our website, the
              pages they visited on our website, what time of day they visited
              our website, whether they have visited our website before, and
              other similar information.
            </p>
            <p className="mb-6 text-[#4a6572]">
              We use this information to help operate our website more
              efficiently, to gather broad demographic information and to
              monitor the level of activity on our website. We use Google
              Analytics for this purpose. Google Analytics uses its own cookies.
              You can find out more information about Google Analytics cookies{' '}
              <a href="https://developers.google.com/analytics/resources/concepts/gaConceptsCookies" target="_blank" rel="noopener noreferrer" className="text-[#a98c5a] hover:underline">
                here
              </a>{' '}
              and about how Google protects your data{' '}
              <a href="https://marketingplatform.google.com/about/analytics/terms/us/" target="_blank" rel="noopener noreferrer" className="text-[#a98c5a] hover:underline">
                here
              </a>
              .
            </p>
            <h3 className="text-xl font-bold mb-3 text-[#343a40]">
              Functionality Cookies
            </h3>
            <p className="mb-6 text-[#4a6572]">
              These cookies allow our website to remember choices you make when
              you use our website, such as remembering your language
              preferences, remembering your login details, and remembering the
              changes you make to other parts of our website which you can
              customize. The purpose of these cookies is to provide you with a
              more personal experience and to avoid you having to re-enter your
              preferences every time you visit our website.
            </p>
            <h3 className="text-xl font-bold mb-3 text-[#343a40]">
              Social Media Cookies
            </h3>
            <p className="mb-6 text-[#4a6572]">
              These cookies are used when you share information using a social
              media sharing button or "like" button on our website or you link
              your account or engage with our content on or through a social
              networking website such as Facebook, Twitter, or LinkedIn. The
              social network will record that you have done this.
            </p>
            <h2 className="text-2xl font-bold mb-4 mt-8 text-[#343a40]">
              Third-Party Cookies
            </h2>
            <p className="mb-6 text-[#4a6572]">
              In addition to our own cookies, we may also use various
              third-party cookies to report usage statistics of the Site,
              deliver advertisements on and through the Site, and so on.
            </p>
            <h2 className="text-2xl font-bold mb-4 mt-8 text-[#343a40]">
              What Are Your Choices Regarding Cookies
            </h2>
            <p className="mb-6 text-[#4a6572]">
              If you'd like to delete cookies or instruct your web browser to
              delete or refuse cookies, please visit the help pages of your web
              browser.
            </p>
            <p className="mb-6 text-[#4a6572]">
              Please note, however, that if you delete cookies or refuse to
              accept them, you might not be able to use all of the features we
              offer, you may not be able to store your preferences, and some of
              our pages might not display properly.
            </p>
            <ul className="list-disc pl-6 mb-6 text-[#4a6572]">
              <li>
                For the Chrome web browser, please visit{' '}
                <a href="https://support.google.com/accounts/answer/32050" target="_blank" rel="noopener noreferrer" className="text-[#a98c5a] hover:underline">
                  this page
                </a>
              </li>
              <li>
                For the Firefox web browser, please visit{' '}
                <a href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored" target="_blank" rel="noopener noreferrer" className="text-[#a98c5a] hover:underline">
                  this page
                </a>
              </li>
              <li>
                For the Safari web browser, please visit{' '}
                <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#a98c5a] hover:underline">
                  this page
                </a>
              </li>
              <li>
                For the Internet Explorer web browser, please visit{' '}
                <a href="https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer" className="text-[#a98c5a] hover:underline">
                  this page
                </a>
              </li>
              <li>
                For the Edge web browser, please visit{' '}
                <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-[#a98c5a] hover:underline">
                  this page
                </a>
              </li>
            </ul>
            <h2 className="text-2xl font-bold mb-4 mt-8 text-[#343a40]">
              Changes to This Cookie Policy
            </h2>
            <p className="mb-6 text-[#4a6572]">
              We may update our Cookie Policy from time to time. We will notify
              you of any changes by posting the new Cookie Policy on this page.
              You are advised to review this Cookie Policy periodically for any
              changes.
            </p>
            <h2 className="text-2xl font-bold mb-4 mt-8 text-[#343a40]">
              Contact Us
            </h2>
            <p className="mb-6 text-[#4a6572]">
              If you have any questions about our Cookie Policy, please contact
              us:
            </p>
            <div className="mb-8 text-[#4a6572]">
              <p>Marentis Labs Ltd</p>
              <p>Email: privacy@marentislabs.com</p>
              <p>Address: 123 Business Avenue, London, UK</p>
            </div>
            <div className="border-t border-gray-200 pt-6 mt-8">
              <Link to="/privacy-policy" className="text-[#a98c5a] hover:underline mr-6">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-[#a98c5a] hover:underline">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>;
};