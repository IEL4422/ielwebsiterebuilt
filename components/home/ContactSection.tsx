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
    script.type = 'text/javascript';
    script.innerHTML = `
      (function(L,U,N){let p=(a,ar)=>a.q.push(ar),d=L.document;L.Lunacal=L.Lunacal||function(){let lun=L.Lunacal,ar=arguments;if(!lun.loaded){lun.ns={};lun.q=lun.q||[];d.head.appendChild(d.createElement("script")).src=U;lun.loaded=!0}if(ar[0]===N){const api=function(){p(api,arguments)};const ns=ar[1];api.q=api.q||[];if(typeof ns==="string"){lun.ns[ns]=lun.ns[ns]||api;p(lun.ns[ns],ar);p(lun,["initNamespace",ns])}else p(lun,ar);return}p(lun,ar)};if(!L.Cal)L.Cal=L.Lunacal})(window,"https://app.lunacal.ai/embed/embed.js","init");Lunacal("init","initial-consultation",{origin:"https://app.lunacal.ai"});
      Lunacal.config = Lunacal.config || {};
      Lunacal.config.forwardQueryParams = true;

      Lunacal.ns["initial-consultation"]("inline", {
        elementOrSelector:"#my-lunacal-inline-initial-consultation",
        config: {"layout":""},
        calLink: "team/illinois-estate-law/initial-consultation",
      });
      Lunacal.ns["initial-consultation"]("preload", { calLink: "team/illinois-estate-law/initial-consultation", type: "inline", options: { prerenderIframe: true } });
      Lunacal.ns["initial-consultation"]("ui", {"theme":"light","styles":{"branding":{}},"hideEventTypeDetails":false,"layout":"","cssVarsPerTheme":{"light":{"theme-border":"#E7E7EE","theme-background-primary":"#7033FF","theme-background-secondary":"#E2EBFF","theme-background-card":"#FFFFFF","theme-background-base":"#FFFFFF","theme-text-primary":"#FFFFFF","theme-text-secondary":"#1E69DC","theme-text-card":"#000000","theme-text-base":"#0B0D0E","theme-rounded-base":"20px","theme-rounded-calendar":" 24px","theme-rounded-timeslot":"100px","theme-rounded-day":"100px","theme-rounded-button":"100px","theme-shadow-calendar":"2px 2px 4px 0px #0000001A","theme-shadow-button":"1px 2px 2px 0px #0000001A","theme-shadow-timeslot":"0px 0px 0px 0px #000000","theme-font-family":"Inter"},"dark":{"theme-border":"#33353A","theme-background-primary":"#7033FF","theme-background-secondary":"#1E293B","theme-background-card":"#222327","theme-background-base":"#1A1B1E","theme-text-primary":"#FFFFFF","theme-text-secondary":"#1E69DC","theme-text-card":"#FFFFFF","theme-text-base":"#FFFFFF","theme-rounded-base":"20px","theme-rounded-calendar":" 24px","theme-rounded-timeslot":"100px","theme-rounded-day":"100px","theme-rounded-button":"100px","theme-shadow-calendar":"2px 2px 4px 0px #0000001A","theme-shadow-button":"1px 2px 2px 0px #0000001A","theme-shadow-timeslot":"0px 0px 0px 0px #000000","theme-font-family":"Inter"}},"displayedContent":{"image":true,"name":true,"designation":true,"description":true,"eventName":true,"highlightBar":false},"background":null,"stylePreset":null});
    `;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
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

          <div className="w-full overflow-hidden rounded-lg">
            <div
              id="my-lunacal-inline-initial-consultation"
              style={{ width: '100%', height: '660px', overflow: 'hidden' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
