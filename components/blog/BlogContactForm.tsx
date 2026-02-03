'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function BlogContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Send to edge function which proxies to Zapier
      const edgeFunctionUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/send-contact-form`;
      const webhookResponse = await fetch(edgeFunctionUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: data.firstName,
          last_name: data.lastName,
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
          name: `${data.firstName} ${data.lastName}`
        })
      });

      if (!emailResponse.ok) {
        const emailError = await emailResponse.text();
        console.error('Email confirmation failed:', emailError);
        // Don't throw error for confirmation email failure
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

  return (
    <div className="bg-[#4A708B] text-white rounded-lg p-8 my-12">
      <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
      <p className="mb-6">Your consultation is with the actual lawyer who will handle your case</p>

      {submitMessage && (
        <div className={`mb-4 p-4 rounded ${submitMessage.includes('error') ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
          {submitMessage}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            {...register('firstName', { required: 'First name is required' })}
            type="text"
            placeholder="First Name"
            className="px-4 py-3 rounded bg-white text-gray-900 placeholder-gray-500"
          />
          <input
            {...register('lastName', { required: 'Last name is required' })}
            type="text"
            placeholder="Last Name"
            className="px-4 py-3 rounded bg-white text-gray-900 placeholder-gray-500"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            {...register('phone', { required: 'Phone number is required' })}
            type="tel"
            placeholder="Phone number"
            className="px-4 py-3 rounded bg-white text-gray-900 placeholder-gray-500"
          />
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            type="email"
            placeholder="Email"
            className="px-4 py-3 rounded bg-white text-gray-900 placeholder-gray-500"
          />
        </div>
        <textarea
          {...register('message', { required: 'Message is required' })}
          placeholder="Message"
          rows={4}
          className="w-full px-4 py-3 rounded bg-white text-gray-900 placeholder-gray-500"
        ></textarea>
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-white text-[#4A708B] hover:bg-gray-100 px-8 py-3 rounded font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
        </button>
      </form>
    </div>
  );
}
