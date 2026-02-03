import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Illinois Estate Law',
  description: 'Privacy Policy for Illinois Estate Law. Learn how we collect, use, and protect your personal information.',
  robots: 'noindex, nofollow',
  alternates: {
    canonical: 'https://www.illinoisestatelaw.com/privacy-policy/',
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'January 30, 2026';

  return (
    <main>
      <section className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] min-h-[180px] flex items-center py-6">
        <div className="container mx-auto px-5 max-w-[1240px]">
          <h1 className="font-['Lobster_Two'] font-normal text-[#fefefe] capitalize text-[50px] md:text-[60px] lg:text-[100px] leading-[50px] md:leading-[65px] lg:leading-[100px] text-center">
            Privacy Policy
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
              <h2 className="text-2xl font-bold text-[#2d3e50] mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Illinois Estate Law (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at illinoisestatelaw.com (the &quot;Site&quot;) or use our legal services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Please read this Privacy Policy carefully. By accessing or using our Site or services, you acknowledge that you have read, understood, and agree to be bound by the terms of this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not access the Site or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2d3e50] mb-4">2. Information We Collect</h2>

              <h3 className="text-xl font-semibold text-[#2d3e50] mb-3">2.1 Personal Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>Contact us through our website, email, or phone</li>
                <li>Schedule a consultation</li>
                <li>Purchase our services</li>
                <li>Subscribe to our newsletter or blog</li>
                <li>Submit forms or inquiries</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                This information may include:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Mailing address</li>
                <li>Payment information</li>
                <li>Information relevant to your legal matter</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#2d3e50] mb-3">2.2 Automatically Collected Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you visit our Site, we may automatically collect certain information about your device, including:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages viewed and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Date and time of visit</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#2d3e50] mb-3">2.3 Cookies and Tracking Technologies</h3>
              <p className="text-gray-700 leading-relaxed">
                We use cookies, web beacons, and similar tracking technologies to collect information about your browsing activities and enhance your experience on our Site. You can control cookies through your browser settings, but disabling cookies may limit your ability to use certain features of our Site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2d3e50] mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>Providing legal services and representation</li>
                <li>Responding to inquiries and scheduling consultations</li>
                <li>Processing payments and transactions</li>
                <li>Communicating with you about your legal matters</li>
                <li>Sending newsletters, updates, and marketing materials (with your consent)</li>
                <li>Improving our website and services</li>
                <li>Complying with legal obligations</li>
                <li>Preventing fraud and ensuring security</li>
                <li>Analyzing website usage and trends</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2d3e50] mb-4">4. Attorney-Client Privilege and Confidentiality</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                As a law firm, we are bound by professional ethical rules and legal obligations to maintain the confidentiality of information related to our representation of clients. Information protected by attorney-client privilege is subject to strict confidentiality protections and will not be disclosed except as required or permitted by law or professional conduct rules.
              </p>
              <p className="text-gray-700 leading-relaxed">
                However, please note that merely contacting us or visiting our website does not create an attorney-client relationship. Attorney-client privilege only applies once we have formally agreed to represent you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2d3e50] mb-4">5. How We Share Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell, rent, or trade your personal information. We may share your information in the following circumstances:
              </p>

              <h3 className="text-xl font-semibold text-[#2d3e50] mb-3">5.1 Service Providers</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may share your information with third-party service providers who perform services on our behalf, such as:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>Payment processing (Stripe, Partial.ly)</li>
                <li>Email and communication services</li>
                <li>Website hosting and analytics</li>
                <li>Document storage and management</li>
                <li>Marketing and advertising platforms</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                These service providers are contractually obligated to protect your information and use it only for the purposes for which it was disclosed.
              </p>

              <h3 className="text-xl font-semibold text-[#2d3e50] mb-3">5.2 Legal Requirements</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may disclose your information if required to do so by law or in response to valid requests by public authorities, such as:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>Court orders or subpoenas</li>
                <li>Legal proceedings</li>
                <li>Government or regulatory investigations</li>
                <li>Protection of our rights, property, or safety</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#2d3e50] mb-3">5.3 Business Transfers</h3>
              <p className="text-gray-700 leading-relaxed">
                In the event of a merger, acquisition, reorganization, or sale of assets, your information may be transferred as part of that transaction. We will notify you of any such change in ownership or control of your personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2d3e50] mb-4">6. Data Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>Encryption of sensitive data</li>
                <li>Secure server infrastructure</li>
                <li>Access controls and authentication</li>
                <li>Regular security assessments</li>
                <li>Employee training on data protection</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2d3e50] mb-4">7. Your Rights and Choices</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have certain rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Access:</strong> You may request access to the personal information we hold about you</li>
                <li><strong>Correction:</strong> You may request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> You may request deletion of your personal information, subject to legal obligations</li>
                <li><strong>Opt-Out:</strong> You may opt out of marketing communications by following the unsubscribe instructions in our emails or contacting us directly</li>
                <li><strong>Do Not Track:</strong> Our Site does not currently respond to Do Not Track signals</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                To exercise these rights, please contact us at contact@illinoisestatelaw.com or (312) 373-0731.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2d3e50] mb-4">8. Third-Party Links</h2>
              <p className="text-gray-700 leading-relaxed">
                Our Site may contain links to third-party websites and services. We are not responsible for the privacy practices or content of these third parties. We encourage you to read the privacy policies of any third-party sites you visit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2d3e50] mb-4">9. Children&apos;s Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Our Site and services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child without parental consent, we will take steps to delete that information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2d3e50] mb-4">10. SMS and Text Messaging</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By providing your phone number and consenting to receive text messages from Illinois Estate Law, you agree to receive SMS messages regarding:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>Appointment reminders and confirmations</li>
                <li>Updates about your legal matter</li>
                <li>Important notifications and alerts</li>
                <li>Marketing and promotional messages (if you opt in)</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                Message and data rates may apply. Message frequency will vary. You can opt out at any time by replying &quot;STOP&quot; to any text message. For help, reply &quot;HELP&quot; or contact us at (312) 373-0731.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2d3e50] mb-4">11. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date. Your continued use of our Site or services after any changes constitutes your acceptance of the updated Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2d3e50] mb-4">12. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="bg-gray-50 border-l-4 border-[#4a708b] p-6 rounded">
                <p className="font-semibold text-[#2d3e50] mb-2">Illinois Estate Law</p>
                <p className="text-gray-700">4422 N. Ravenswood Ave, Ste 212</p>
                <p className="text-gray-700">Chicago, Illinois 60640</p>
                <p className="text-gray-700 mt-2">Phone: (312) 373-0731</p>
                <p className="text-gray-700">Email: contact@illinoisestatelaw.com</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
