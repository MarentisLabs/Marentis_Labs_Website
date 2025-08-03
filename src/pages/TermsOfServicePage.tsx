import React from 'react';
import { Link } from 'react-router-dom';
export const TermsOfServicePage = () => {
  return <>
      <div className="bg-[#343a40] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Terms of Service
          </h1>
          <p className="text-xl max-w-2xl">
            The rules, guidelines, and agreements for using our services.
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
              1. Agreement to Terms
            </h2>
            <p className="mb-6 text-[#4a6572]">
              These Terms of Service ("Terms") constitute a legally binding
              agreement made between you, whether personally or on behalf of an
              entity ("you") and Marentis Labs Ltd ("we," "us," or "our"),
              concerning your access to and use of our website as well as any
              other media form, media channel, mobile website, or mobile
              application related, linked, or otherwise connected thereto
              (collectively, the "Site").
            </p>
            <p className="mb-6 text-[#4a6572]">
              You agree that by accessing the Site, you have read, understood,
              and agree to be bound by all of these Terms. If you do not agree
              with all of these Terms, then you are expressly prohibited from
              using the Site and you must discontinue use immediately.
            </p>
            <h2 className="text-2xl font-bold mb-4 mt-8 text-[#343a40]">
              2. Intellectual Property Rights
            </h2>
            <p className="mb-4 text-[#4a6572]">
              Unless otherwise indicated, the Site is our proprietary property
              and all source code, databases, functionality, software, website
              designs, audio, video, text, photographs, and graphics on the Site
              (collectively, the "Content") and the trademarks, service marks,
              and logos contained therein (the "Marks") are owned or controlled
              by us or licensed to us, and are protected by copyright and
              trademark laws and various other intellectual property rights.
            </p>
            <p className="mb-6 text-[#4a6572]">
              The Content and Marks are provided on the Site "AS IS" for your
              information and personal use only. Except as expressly provided in
              these Terms, no part of the Site and no Content or Marks may be
              copied, reproduced, aggregated, republished, uploaded, posted,
              publicly displayed, encoded, translated, transmitted, distributed,
              sold, licensed, or otherwise exploited for any commercial purpose
              whatsoever, without our express prior written permission.
            </p>
            <h2 className="text-2xl font-bold mb-4 mt-8 text-[#343a40]">
              3. User Representations
            </h2>
            <p className="mb-4 text-[#4a6572]">
              By using the Site, you represent and warrant that:
            </p>
            <ul className="list-disc pl-6 mb-6 text-[#4a6572]">
              <li>
                All registration information you submit will be true, accurate,
                current, and complete.
              </li>
              <li>
                You will maintain the accuracy of such information and promptly
                update such registration information as necessary.
              </li>
              <li>
                You have the legal capacity and you agree to comply with these
                Terms.
              </li>
              <li>
                You are not a minor in the jurisdiction in which you reside.
              </li>
              <li>
                You will not access the Site through automated or non-human
                means, whether through a bot, script, or otherwise.
              </li>
              <li>
                You will not use the Site for any illegal or unauthorized
                purpose.
              </li>
              <li>
                Your use of the Site will not violate any applicable law or
                regulation.
              </li>
            </ul>
            <h2 className="text-2xl font-bold mb-4 mt-8 text-[#343a40]">
              4. Prohibited Activities
            </h2>
            <p className="mb-4 text-[#4a6572]">
              You may not access or use the Site for any purpose other than that
              for which we make the Site available. The Site may not be used in
              connection with any commercial endeavors except those that are
              specifically endorsed or approved by us.
            </p>
            <p className="mb-4 text-[#4a6572]">
              As a user of the Site, you agree not to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-[#4a6572]">
              <li>
                Systematically retrieve data or other content from the Site to
                create or compile, directly or indirectly, a collection,
                compilation, database, or directory without written permission
                from us.
              </li>
              <li>
                Make any unauthorized use of the Site, including collecting
                usernames and/or email addresses of users by electronic or other
                means for the purpose of sending unsolicited email, or creating
                user accounts by automated means or under false pretenses.
              </li>
              <li>
                Use the Site to advertise or offer to sell goods and services.
              </li>
              <li>
                Circumvent, disable, or otherwise interfere with
                security-related features of the Site.
              </li>
              <li>Engage in unauthorized framing of or linking to the Site.</li>
              <li>
                Trick, defraud, or mislead us and other users, especially in any
                attempt to learn sensitive account information such as user
                passwords.
              </li>
              <li>
                Interfere with, disrupt, or create an undue burden on the Site
                or the networks or services connected to the Site.
              </li>
            </ul>
            <h2 className="text-2xl font-bold mb-4 mt-8 text-[#343a40]">
              5. User Generated Contributions
            </h2>
            <p className="mb-6 text-[#4a6572]">
              The Site may invite you to chat, contribute to, or participate in
              blogs, message boards, online forums, and other functionality, and
              may provide you with the opportunity to create, submit, post,
              display, transmit, perform, publish, distribute, or broadcast
              content and materials to us or on the Site, including but not
              limited to text, writings, video, audio, photographs, graphics,
              comments, suggestions, or personal information or other material
              (collectively, "Contributions").
            </p>
            <p className="mb-6 text-[#4a6572]">
              Any Contributions you transmit to the Site will be treated as
              non-confidential and non-proprietary. By providing any
              Contribution to the Site, you grant us an unrestricted, unlimited,
              irrevocable, perpetual, non-exclusive, transferable, royalty-free,
              fully-paid, worldwide right, and license to host, use, copy,
              reproduce, disclose, sell, resell, publish, broadcast, retitle,
              archive, store, cache, publicly perform, publicly display,
              reformat, translate, transmit, excerpt (in whole or in part), and
              distribute such Contributions for any purpose, commercial,
              advertising, or otherwise, and to prepare derivative works of, or
              incorporate into other works, such Contributions, and grant and
              authorize sublicenses of the foregoing.
            </p>
            <h2 className="text-2xl font-bold mb-4 mt-8 text-[#343a40]">
              6. Submissions
            </h2>
            <p className="mb-6 text-[#4a6572]">
              You acknowledge and agree that any questions, comments,
              suggestions, ideas, feedback, or other information regarding the
              Site ("Submissions") provided by you to us are non-confidential
              and shall become our sole property. We shall own exclusive rights,
              including all intellectual property rights, and shall be entitled
              to the unrestricted use and dissemination of these Submissions for
              any lawful purpose, commercial or otherwise, without
              acknowledgment or compensation to you.
            </p>
            <h2 className="text-2xl font-bold mb-4 mt-8 text-[#343a40]">
              7. Site Management
            </h2>
            <p className="mb-6 text-[#4a6572]">
              We reserve the right, but not the obligation, to: (1) monitor the
              Site for violations of these Terms; (2) take appropriate legal
              action against anyone who, in our sole discretion, violates the
              law or these Terms, including without limitation, reporting such
              user to law enforcement authorities; (3) in our sole discretion
              and without limitation, refuse, restrict access to, limit the
              availability of, or disable (to the extent technologically
              feasible) any of your Contributions or any portion thereof; (4) in
              our sole discretion and without limitation, notice, or liability,
              to remove from the Site or otherwise disable all files and content
              that are excessive in size or are in any way burdensome to our
              systems; and (5) otherwise manage the Site in a manner designed to
              protect our rights and property and to facilitate the proper
              functioning of the Site.
            </p>
            <h2 className="text-2xl font-bold mb-4 mt-8 text-[#343a40]">
              8. Privacy Policy
            </h2>
            <p className="mb-6 text-[#4a6572]">
              We care about data privacy and security. Please review our{' '}
              <Link to="/privacy-policy" className="text-[#a98c5a] hover:underline">
                Privacy Policy
              </Link>
              . By using the Site, you agree to be bound by our Privacy Policy,
              which is incorporated into these Terms. Please be advised the Site
              is hosted in the United Kingdom. If you access the Site from any
              other region of the world with laws or other requirements
              governing personal data collection, use, or disclosure that differ
              from applicable laws in the United Kingdom, then through your
              continued use of the Site, you are transferring your data to the
              United Kingdom, and you agree to have your data transferred to and
              processed in the United Kingdom.
            </p>
            <h2 className="text-2xl font-bold mb-4 mt-8 text-[#343a40]">
              9. Term and Termination
            </h2>
            <p className="mb-6 text-[#4a6572]">
              These Terms shall remain in full force and effect while you use
              the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS, WE
              RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR
              LIABILITY, DENY ACCESS TO AND USE OF THE SITE (INCLUDING BLOCKING
              CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO
              REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY
              REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS OR
              OF ANY APPLICABLE LAW OR REGULATION.
            </p>
            <h2 className="text-2xl font-bold mb-4 mt-8 text-[#343a40]">
              10. Modifications and Interruptions
            </h2>
            <p className="mb-6 text-[#4a6572]">
              We reserve the right to change, modify, or remove the contents of
              the Site at any time or for any reason at our sole discretion
              without notice. However, we have no obligation to update any
              information on our Site. We also reserve the right to modify or
              discontinue all or part of the Site without notice at any time.
            </p>
            <p className="mb-6 text-[#4a6572]">
              We will not be liable to you or any third party for any
              modification, price change, suspension, or discontinuance of the
              Site.
            </p>
            <h2 className="text-2xl font-bold mb-4 mt-8 text-[#343a40]">
              11. Governing Law
            </h2>
            <p className="mb-6 text-[#4a6572]">
              These Terms shall be governed by and defined following the laws of
              the United Kingdom. Marentis Labs Ltd and yourself irrevocably
              consent that the courts of the United Kingdom shall have exclusive
              jurisdiction to resolve any dispute which may arise in connection
              with these terms.
            </p>
            <h2 className="text-2xl font-bold mb-4 mt-8 text-[#343a40]">
              12. Contact Us
            </h2>
            <p className="mb-6 text-[#4a6572]">
              In order to resolve a complaint regarding the Site or to receive
              further information regarding use of the Site, please contact us
              at:
            </p>
            <div className="mb-8 text-[#4a6572]">
              <p>Marentis Labs Ltd</p>
              <p>Email: legal@marentislabs.com</p>
              <p>Address: 123 Business Avenue, London, UK</p>
            </div>
            <div className="border-t border-gray-200 pt-6 mt-8">
              <Link to="/privacy-policy" className="text-[#a98c5a] hover:underline mr-6">
                Privacy Policy
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