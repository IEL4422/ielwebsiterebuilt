'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    setSubmitMessage('');

    const submitForm = async () => {
      try {
      const nameParts = data.name.split(' ');
      const firstName = nameParts[0];
      const lastName = nameParts.slice(1).join(' ');

      // Send to edge function which proxies to Zapier
      const edgeFunctionUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/send-contact-form`;
      const webhookResponse = await fetch(edgeFunctionUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          phone_number: data.phone,
          email: data.email,
          message: data.message
        })
      });

      if (!webhookResponse.ok) {
        const responseText = await webhookResponse.text();
        console.error('Edge function failed:', webhookResponse.status, responseText);
        throw new Error(`Form submission failed: ${webhookResponse.status}`);
      }

      // Send confirmation email
      const emailApiUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/send-inquiry-confirmation`;
      const emailResponse = await fetch(emailApiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          name: data.name
        })
      });

      if (!emailResponse.ok) {
        const emailError = await emailResponse.text();
        console.error('Email confirmation failed:', emailError);
        throw new Error('Failed to send confirmation email');
      }

        setSubmitMessage('Thank you for your message. We will get back to you soon!');
        reset();
      } catch (error) {
        console.error('Contact form error:', error);
        setSubmitMessage('There was an error submitting your form. Please try again or call us at (312) 373-0731.');
      } finally {
        setIsSubmitting(false);
      }
    };

    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'ads_conversion_Sign_up_1', {
        'event_callback': submitForm,
        'event_timeout': 2000,
      });
    } else {
      await submitForm();
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-[180px] bg-gradient-to-r from-[#2D3E50] to-[#4a708b] flex items-center justify-center py-6 lg:min-h-[160px] sm:min-h-[140px]"
      >
        <div className="mx-auto max-w-[1140px] px-5 lg:px-8">
          <div className="flex justify-center lg:justify-start">
            <h1 className="font-['Lobster_Two'] text-[50px] md:text-[60px] lg:text-[75px] font-normal text-[#fefefe] leading-[50px] md:leading-[65px] lg:leading-[75px] text-center lg:text-left capitalize">
              Contact
            </h1>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 border-l-4 border-[#77B1D4] rounded-lg p-6 lg:p-8 mb-12 shadow-sm text-center">
            <p className="text-xl lg:text-2xl font-bold text-slate-800 mb-2">
              Free Initial Consultation Available
            </p>
            <p className="text-lg text-slate-600">
              Contact us today to schedule your complimentary consultation and discuss your estate planning needs.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="bg-[#4a708b] backdrop-blur-sm rounded-[14px] p-8 lg:p-10">
              <h2 className="font-['Plus_Jakarta_Sans'] text-[32px] lg:text-[40px] font-bold leading-[37px] lg:leading-[44px] text-white mb-6">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'Name is required' })}
                    placeholder="First and Last Name"
                    className="w-full bg-transparent border-b border-white text-white placeholder-[#9cb4c4] px-0 py-3 focus:outline-none focus:border-white/80"
                  />
                  {errors.name && (
                    <p className="text-red-300 text-sm mt-1">{errors.name.message as string}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    placeholder="Email"
                    className="w-full bg-transparent border-b border-white text-white placeholder-[#9cb4c4] px-0 py-3 focus:outline-none focus:border-white/80"
                  />
                  {errors.email && (
                    <p className="text-red-300 text-sm mt-1">{errors.email.message as string}</p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="sr-only">Phone number</label>
                  <input
                    type="tel"
                    id="phone"
                    {...register('phone', {
                      required: 'Phone number is required',
                      pattern: {
                        value: /^[0-9()#&+*\-=.]+$/,
                        message: 'Invalid phone number'
                      }
                    })}
                    placeholder="Phone number"
                    className="w-full bg-transparent border-b border-white text-white placeholder-[#9cb4c4] px-0 py-3 focus:outline-none focus:border-white/80"
                  />
                  {errors.phone && (
                    <p className="text-red-300 text-sm mt-1">{errors.phone.message as string}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea
                    id="message"
                    {...register('message', { required: 'Message is required' })}
                    rows={4}
                    placeholder="Message"
                    className="w-full bg-transparent border-b border-white text-white placeholder-[#9cb4c4] px-0 py-3 focus:outline-none focus:border-white/80 resize-vertical"
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-300 text-sm mt-1">{errors.message.message as string}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-[#2d3e50] font-['Plus_Jakarta_Sans'] font-bold text-base uppercase py-4 px-6 rounded-[32px] hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>

                {/* Submit Message */}
                {submitMessage && (
                  <p className={`text-center ${submitMessage.includes('error') ? 'text-red-300' : 'text-green-300'}`}>
                    {submitMessage}
                  </p>
                )}
              </form>
            </div>

            {/* Calendly Widget */}
            <div className="border border-[#2d3e50] rounded-[14px] p-1.5">
              <div
                className="calendly-inline-widget rounded-[14px] overflow-hidden"
                data-url="https://calendly.com/illinoisestatelaw/initial-consultation-waived-consultation-fee-clone?hide_gdpr_banner=1&primary_color=5e89be"
                style={{ minWidth: '320px', height: '700px' }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="font-['Plus_Jakarta_Sans'] text-[32px] lg:text-[40px] font-bold text-[#2d3e50] mb-4">
                Contact Info
              </h2>

              <div className="w-full h-px bg-[#4a708b] mb-8"></div>

              <div className="space-y-8">
                {/* Office */}
                <div className="space-y-4">
                  <h3 className="font-['Plus_Jakarta_Sans'] text-[24px] lg:text-[28px] font-bold text-[#2d3e50]">
                    Our office
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans'] text-[#2d3e50]">
                    ILLINOIS ESTATE LAW
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-4">
                  <a
                    href="https://maps.app.goo.gl/EvyUmQa3QaEx4dzm9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-[#2d3e50] hover:text-[#4a708b] transition-colors"
                  >
                    <svg className="w-6 h-6 flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" clipRule="evenodd" d="M14.5556 2H11.8889V3.81818H13.6667V10.1818H12.3333V5.63636H6.55556C5.61256 5.63636 4.70819 6.01948 4.0414 6.70143C3.3746 7.38338 3 8.3083 3 9.27273V15.6364H10.1111V22H11.8889V15.6364H19V5.63636H15.4444V2H14.5556Z"/>
                    </svg>
                    <span className="font-['Plus_Jakarta_Sans'] font-medium">
                      4422 N. Ravenswood Ave, Ste 212 Chicago, Illinois 60640
                    </span>
                  </a>

                  <a
                    href="tel:3123730731"
                    className="flex items-center gap-3 text-[#2d3e50] hover:text-[#4a708b] transition-colors"
                  >
                    <svg className="w-6 h-6 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.5303 14.9109L16.4094 14.6526C16.16 14.6214 15.9072 14.6508 15.67 14.7388C15.4328 14.8267 15.2174 14.9708 15.0399 15.1603L13.5035 16.7992C11.1331 15.5132 9.20634 13.458 8.00077 10.9295L9.54554 9.28177C9.9046 8.89878 10.08 8.36436 10.0215 7.82105L9.77935 5.57652C9.73201 5.14202 9.53652 4.74126 9.23011 4.45055C8.92369 4.15984 8.52775 3.99948 8.11767 4H6.6731C5.72953 4 4.94462 4.83725 5.00307 5.84372C5.44562 13.4502 11.1488 19.5247 18.2714 19.9967C19.215 20.0591 19.9999 19.2218 19.9999 18.2154V16.6745C20.0083 15.7749 19.3737 15.0178 18.5303 14.9109Z"/>
                    </svg>
                    <span className="font-['Plus_Jakarta_Sans'] font-medium">(312) 373 - 0731</span>
                  </a>

                  <a
                    href="fax:8156051321"
                    className="flex items-center gap-3 text-[#2d3e50] hover:text-[#4a708b] transition-colors"
                  >
                    <svg className="w-6 h-6 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 9H18V6C18 4.9 17.1 4 16 4H10C8.9 4 8 4.9 8 6V20H20C21.1 20 22 19.1 22 18V12C22 10.34 20.66 9 19 9ZM10 6H16V9H10V6ZM14 17H10V12H14V17ZM16 17C15.45 17 15 16.55 15 16C15 15.45 15.45 15 16 15C16.55 15 17 15.45 17 16C17 16.55 16.55 17 16 17ZM16 14C15.45 14 15 13.55 15 13C15 12.45 15.45 12 16 12C16.55 12 17 12.45 17 13C17 13.55 16.55 14 16 14ZM19 17C18.45 17 18 16.55 18 16C18 15.45 18.45 15 19 15C19.55 15 20 15.45 20 16C20 16.55 19.55 17 19 17ZM19 14C18.45 14 18 13.55 18 13C18 12.45 18.45 12 19 12C19.55 12 20 12.45 20 13C20 13.55 19.55 14 19 14ZM4.5 8C3.83696 8 3.20107 8.26339 2.73223 8.73223C2.26339 9.20107 2 9.83696 2 10.5V18.5C2 19.163 2.26339 19.7989 2.73223 20.2678C3.20107 20.7366 3.83696 21 4.5 21C5.16304 21 5.79893 20.7366 6.26777 20.2678C6.73661 19.7989 7 19.163 7 18.5V10.5C7 10.1717 6.93534 9.84661 6.8097 9.54329C6.68406 9.23998 6.49991 8.96438 6.26777 8.73223C6.03562 8.50009 5.76002 8.31594 5.45671 8.1903C5.15339 8.06466 4.8283 8 4.5 8Z"/>
                    </svg>
                    <span className="font-['Plus_Jakarta_Sans'] font-medium">(815) 605-1321</span>
                  </a>

                  <a
                    href="mailto:contact@illinoisestatelaw.com"
                    className="flex items-center gap-3 text-[#2d3e50] hover:text-[#4a708b] transition-colors"
                  >
                    <svg className="w-6 h-6 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.5 7.91602V15.7246C20.5 16.3559 20.2588 16.9634 19.8257 17.4227C19.3926 17.882 18.8004 18.1585 18.1702 18.1955L18.025 18.1996H6.475C5.8437 18.1997 5.23625 17.9585 4.77693 17.5254C4.31762 17.0923 4.04116 16.5001 4.00413 15.8698L4 15.7246V7.91602L11.7921 13.111L11.8878 13.1655C12.0006 13.2206 12.1245 13.2492 12.25 13.2492C12.3755 13.2492 12.4994 13.2206 12.6122 13.1655L12.7079 13.111L20.5 7.91602Z"/>
                      <path d="M18.0251 5C18.9161 5 19.6973 5.47025 20.1329 6.17728L12.2501 11.4325L4.36719 6.17728C4.57409 5.84135 4.8583 5.55976 5.19612 5.35598C5.53395 5.15219 5.91559 5.03212 6.30924 5.00577L6.47506 5H18.0251Z"/>
                    </svg>
                    <span className="font-['Plus_Jakarta_Sans'] font-medium">contact@illinoisestatelaw.com</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d379578.8484450864!2d-88.31008434516006!3d41.9904076929541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3027f65a6d7%3A0x7e35457ee841537b!2sIllinois%20Estate%20Law!5e0!3m2!1sen!2s!4v1756821317537!5m2!1sen!2s"
                width="600"
                height="450"
                style={{ border: 0, borderRadius: '14px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[450px]"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Script */}
      <script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      ></script>
    </div>
  );
}
