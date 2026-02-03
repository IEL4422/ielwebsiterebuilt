import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - Illinois Estate Law',
  description: 'Terms of Service for Illinois Estate Law. Review the terms and conditions for using our website and services.',
  robots: 'noindex, nofollow',
  alternates: {
    canonical: 'https://www.illinoisestatelaw.com/terms-of-service/',
  },
};

export default function TermsOfServicePage() {
  const lastUpdated = 'January 30, 2026';

  return (
    <main>
      <section className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] min-h-[180px] flex items-center py-6">
        <div className="container mx-auto px-5 max-w-[1240px]">
          <h1 className="font-['Lobster_Two'] font-normal text-[#fefefe] capitalize text-[50px] md:text-[60px] lg:text-[100px] leading-[50px] md:leading-[65px] lg:leading-[100px] text-center">
            Terms of Service
          </h1>
        </div>
      </section>

      <div className="container mx-auto px-5 max-w-[1140px] py-16">
        <div className="prose prose-slate max-w-none">
          <p className="text-sm text-gray-600 mb-8">
            <strong>Last Updated:</strong> {lastUpdated}
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-[#2d3e50] mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Welcome to Illinois Estate Law. These Terms of Service (&quot;Terms&quot;) govern your use of our website at illinoisestatelaw.com (the &quot;Site&quot;) and the legal services we provide (&quot;Services&quot;). By accessing or using our Site or Services, you agree to be bound by these Terms.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If you do not agree with any part of these Terms, you must not use our Site or Services. Your continued use of the Site or Services constitutes your acceptance of these Terms and any future modifications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2d3e50] mb-4">2. No Attorney-Client Relationship</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Important:</strong> Your use of this Site or communication with Illinois Estate Law through the Site, email, or phone does not create an attorney-client relationship. An attorney-client relationship is only established when:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>We have conducted a conflicts check</li>
                <li>We have agreed in writing to represent you</li>
                <li>You have signed a written Client Service Agreement</li>
                <li>Any required retainer or fee has been paid</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Until an attorney-client relationship is established, any information you provide is not protected by attorney-client privilege or confidentiality rules.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2d3e50] mb-4">3. Information Provided is Not Legal Advice</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The content on this Site, including blog posts, articles, guides, and other informational materials, is provided for general informational and educational purposes only. This content:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>Does not constitute legal advice</li>
                <li>Should not be relied upon as a substitute for legal counsel</li>
                <li>May not reflect the most current legal developments</li>
                <li>May not apply to your specific situation</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Legal advice can only be provided after we have established an attorney-client relationship and have a full understanding of your individual facts and circumstances. You should not act or refrain from acting based on any content on this Site without seeking appropriate legal counsel.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2d3e50] mb-4">4. Illinois Practice Only</h2>
              <p className="text-gray-700 leading-relaxed">
                Illinois Estate Law is licensed to practice law only in the State of Illinois. We do not provide legal services or advice regarding the laws of any other jurisdiction. If your legal matter involves another state or country, you should consult with an attorney licensed in that jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2d3e50] mb-4">5. Use of the Site</h2>

              <h3 className="text-xl font-semibold text-[#2d3e50] mb-3">5.1 Permitted Use</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may use the Site for lawful purposes only. You agree not to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Transmit any harmful, threatening, or offensive content</li>
                <li>Interfere with or disrupt the Site or servers</li>
                <li>Attempt to gain unauthorized access to any part of the Site</li>
                <li>Use automated systems or software to extract data from the Site</li>
                <li>Impersonate any person or entity</li>
                <li>Engage in any fraudulent activity</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#2d3e50] mb-3">5.2 Account Security</h3>
              <p className="text-gray-700 leading-relaxed">
                If you create an account on our Site or client portal, you are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2d3e50] mb-4">6. Intellectual Property</h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                All content on this Site, including text, graphics, logos, images, videos, software, and other materials, is the property of Illinois Estate Law or its licensors and is protected by copyright and other intellectual property laws.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You may not copy, reproduce, distribute, modify, create derivative works, publicly display, or otherwise use any content from this Site without our prior written permission, except for personal, non-commercial use.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2d3e50] mb-4">7. Payment Terms</h2>

              <h3 className="text-xl font-semibold text-[#2d3e50] mb-3">7.1 Service Fees</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our legal services are provided on a flat-fee basis. All fees and payment terms will be clearly outlined in your Client Service Agreement before you engage our services.
              </p>

              <h3 className="text-xl font-semibold text-[#2d3e50] mb-3">7.2 Payment Methods</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We accept payment via credit card, debit card, and electronic funds transfer through our secure payment processor (Stripe). We also offer payment plans through Partial.ly, which may include a setup fee as disclosed at the time of purchase.
              </p>

              <h3 className="text-xl font-semibold text-[#2d3e50] mb-3">7.3 Refunds</h3>
              <p className="text-gray-700 leading-relaxed">
                Refund policies will be specified in your Client Service Agreement. Generally, fees are considered earned upon receipt, but unearned portions may be refunded if the engagement ends before completion, in accordance with the work completed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2d3e50] mb-4">8. Third-Party Services</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our Site may integrate with or link to third-party services, including:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>Payment processors (Stripe, Partial.ly)</li>
                <li>Scheduling tools</li>
                <li>Communication platforms</li>
                <li>Document storage services</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                These third-party services have their own terms of service and privacy policies. We are not responsible for the practices or content of these third parties. Your use of third-party services is at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2d3e50] mb-4">9. Disclaimers</h2>

              <h3 className="text-xl font-semibold text-[#2d3e50] mb-3">9.1 No Warranty</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                THE SITE AND ALL CONTENT ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not warrant that:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>The Site will be uninterrupted, timely, secure, or error-free</li>
                <li>The results obtained from using the Site will be accurate or reliable</li>
                <li>Any errors in the Site will be corrected</li>
                <li>The Site or servers are free of viruses or other harmful components</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#2d3e50] mb-3">9.2 No Guarantee of Results</h3>
              <p className="text-gray-700 leading-relaxed">
                While we strive to provide high-quality legal services, we make no guarantees about the outcome of any legal matter. Legal outcomes depend on many factors beyond our control, including the specific facts of your case, applicable law, and court decisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2d3e50] mb-4">10. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, ILLINOIS ESTATE LAW, ITS ATTORNEYS, EMPLOYEES, AGENTS, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>Your use of or inability to use the Site</li>
                <li>Any unauthorized access to or use of our servers</li>
                <li>Any interruption or cessation of transmission to or from the Site</li>
                <li>Any bugs, viruses, or similar items transmitted through the Site</li>
                <li>Any errors or omissions in any content</li>
                <li>Any loss or damage incurred as a result of your use of any content posted or transmitted through the Site</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL DAMAGES EXCEED THE AMOUNT PAID BY YOU TO US IN THE SIX (6) MONTHS PRECEDING THE CLAIM, OR ONE HUNDRED DOLLARS ($100), WHICHEVER IS GREATER.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2d3e50] mb-4">11. Indemnification</h2>
              <p className="text-gray-700 leading-relaxed">
                You agree to indemnify, defend, and hold harmless Illinois Estate Law, its attorneys, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys&apos; fees, arising out of or in any way connected with:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>Your use of the Site or Services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any third-party rights</li>
                <li>Any content you submit or transmit through the Site</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2d3e50] mb-4">12. Dispute Resolution</h2>

              <h3 className="text-xl font-semibold text-[#2d3e50] mb-3">12.1 Governing Law</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the State of Illinois, without regard to its conflict of law provisions.
              </p>

              <h3 className="text-xl font-semibold text-[#2d3e50] mb-3">12.2 Arbitration</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Any dispute, controversy, or claim arising out of or relating to these Terms or your use of the Site (excluding disputes covered by a Client Service Agreement) shall be settled by binding arbitration in accordance with the laws of the State of Illinois. The arbitration shall take place in Cook County, Illinois.
              </p>

              <h3 className="text-xl font-semibold text-[#2d3e50] mb-3">12.3 Class Action Waiver</h3>
              <p className="text-gray-700 leading-relaxed">
                You agree that any arbitration or proceeding shall be limited to the dispute between you and Illinois Estate Law individually. To the full extent permitted by law, no arbitration or proceeding shall be joined with any other, no dispute shall be arbitrated on a class-action basis, and you waive any right to participate in a class-action lawsuit or class-wide arbitration.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2d3e50] mb-4">13. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on this page with a new &quot;Last Updated&quot; date. Your continued use of the Site after any changes constitutes your acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2d3e50] mb-4">14. Termination</h2>
              <p className="text-gray-700 leading-relaxed">
                We may terminate or suspend your access to the Site at any time, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the Site will immediately cease.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2d3e50] mb-4">15. Severability</h2>
              <p className="text-gray-700 leading-relaxed">
                If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2d3e50] mb-4">16. Entire Agreement</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms, together with our Privacy Policy and any Client Service Agreement you may enter into with us, constitute the entire agreement between you and Illinois Estate Law regarding your use of the Site and Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2d3e50] mb-4">17. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-gray-50 border-l-4 border-[#4a708b] p-6 rounded">
                <p className="font-semibold text-[#2d3e50] mb-2">Illinois Estate Law</p>
                <p className="text-gray-700">4422 N. Ravenswood Ave, Ste 212</p>
                <p className="text-gray-700">Chicago, Illinois 60640</p>
                <p className="text-gray-700 mt-2">Phone: (312) 373-0731</p>
                <p className="text-gray-700">Email: contact@illinoisestatelaw.com</p>
              </div>
            </section>

            <section className="bg-amber-50 border-2 border-amber-200 rounded-lg p-6 mt-8">
              <h2 className="text-2xl font-bold text-[#2d3e50] mb-4">Important Notice</h2>
              <p className="text-gray-700 leading-relaxed">
                By using this Site, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these Terms, you must immediately discontinue your use of this Site.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
