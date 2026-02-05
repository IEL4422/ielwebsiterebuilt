'use client';

import { useState, useEffect } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const nameParts = formData.name.split(' ');
      const firstName = nameParts[0];
      const lastName = nameParts.slice(1).join(' ');

      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
      const edgeFunctionUrl = `${supabaseUrl}/functions/v1/send-contact-form`;

      const response = await fetch(edgeFunctionUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${supabaseKey}`,
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          phone_number: formData.phone,
          email: formData.email,
          message: formData.message
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('Edge function response not OK:', response.status, errorData);
        throw new Error('Failed to send message');
      }

      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
              Send Us a Message
            </h2>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                <p className="text-green-800 text-lg font-medium">Thank you for your message. We will be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" aria-label="Virtual Appointments Form" name="Virtual Appointments Form">
                <div>
                  <label htmlFor="form-field-name" className="sr-only">Name</label>
                  <input
                    type="text"
                    id="form-field-name"
                    name="name"
                    placeholder="First and Last Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#77B1D4] focus:border-[#77B1D4] outline-none transition-colors bg-white text-slate-800 placeholder-slate-400"
                  />
                </div>

                <div>
                  <label htmlFor="form-field-email" className="sr-only">Email</label>
                  <input
                    type="email"
                    id="form-field-email"
                    name="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#77B1D4] focus:border-[#77B1D4] outline-none transition-colors bg-white text-slate-800 placeholder-slate-400"
                  />
                </div>

                <div>
                  <label htmlFor="form-field-phone" className="sr-only">Phone number</label>
                  <input
                    type="tel"
                    id="form-field-phone"
                    name="phone"
                    placeholder="Phone number"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    title="Only numbers and phone characters (#, -, *, etc) are accepted."
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#77B1D4] focus:border-[#77B1D4] outline-none transition-colors bg-white text-slate-800 placeholder-slate-400"
                  />
                </div>

                <div>
                  <label htmlFor="form-field-message" className="sr-only">Message</label>
                  <textarea
                    id="form-field-message"
                    name="message"
                    placeholder="Message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#77B1D4] focus:border-[#77B1D4] outline-none transition-colors bg-white text-slate-800 placeholder-slate-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-[#77B1D4] text-white font-semibold rounded-lg hover:bg-[#5A9BC4] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </form>
            )}
          </div>

          <div>
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/illinoisestatelaw/initial-consultation-waived-consultation-fee-clone?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=7c9bcc"
              style={{ minWidth: '320px', height: '700px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
