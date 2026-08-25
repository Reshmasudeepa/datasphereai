import { useState } from 'react';
import { MapPin, Mail, Phone, Check } from 'lucide-react';

import { formatClientFetchError } from '../api/marketing';
import { API_BASE_URL } from '../api/base';

function joinUrl(base: string, path: string): string {
  const b = base.endsWith('/') ? base.slice(0, -1) : base;
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${b}${p}`;
}

export function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | { type: 'success' | 'error'; msg: string }>(
    null,
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus(null);

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      setSubmitStatus({ type: 'error', msg: 'Please fill in all required fields.' });
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch(joinUrl(API_BASE_URL, '/contact'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });

      const json = (await res.json().catch(() => null)) as
        | { success?: boolean; error?: { message?: string }; message?: string }
        | null;

      if (!res.ok || !json || json.success === false) {
        const msg =
          (json && typeof json === 'object' && json.error && typeof json.error.message === 'string'
            ? json.error.message
            : null) ||
          (json && typeof json === 'object' && typeof json.message === 'string' ? json.message : null) ||
          `Request failed (${res.status})`;
        throw new Error(msg);
      }

      setSubmitStatus({ type: 'success', msg: 'Message sent. We’ll get back to you shortly.' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setSubmitStatus({
        type: 'error',
        msg: formatClientFetchError(err),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-brand-bg overflow-x-hidden">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 w-full min-w-0">
        {/* Page title section */}
        <div className="text-center mb-6">
          <p className="inline-block px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-4">
            We&apos;re here to help
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Get in touch</h1>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
<<<<<<< HEAD
            Questions about your application, a partnership, or just want to talk? Send us a message
            — we usually reply within one business day.
=======
            Contact Codaptics for candidate support, employer partnerships, and career guidance.
            Reach out and we&apos;ll respond quickly.
>>>>>>> 4f05fc1 (09-07)
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          <div className="bg-brand-surface rounded-lg border border-brand-secondary-100 p-4 shadow-sm shadow-brand-primary/5 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            <div className="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center mb-2">
              <MapPin className="w-4 h-4 text-emerald-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-0.5 text-sm">Office Address</h3>
            <a
              href="https://maps.google.com/?q=535+Denoyer+Trl,+Wheeling,+IL+60090"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-primary hover:text-brand-primary-600 font-medium text-sm"
            >
<<<<<<< HEAD
              535 Denoyer Trl, Wheeling, IL 60090, USA
=======
              535 Denoyer Trl, Wheeling, IL 60090
>>>>>>> 4f05fc1 (09-07)
            </a>
            <p className="text-sm text-gray-500 mt-0.5">Codaptics headquarters</p>
          </div>
          <div className="bg-brand-surface rounded-lg border border-brand-secondary-100 p-4 shadow-sm shadow-brand-primary/5 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            <div className="w-9 h-9 rounded-lg bg-red-100 flex items-center justify-center mb-2">
              <Mail className="w-4 h-4 text-red-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-0.5 text-sm">Email</h3>
            <a
              href="mailto:info@codaptics.com"
              className="text-brand-primary hover:text-brand-primary-600 font-medium text-sm"
            >
              info@codaptics.com
            </a>
            <p className="text-sm text-gray-500 mt-0.5">Drop us a line anytime</p>
          </div>
          <div className="bg-brand-surface rounded-lg border border-brand-secondary-100 p-4 shadow-sm shadow-brand-primary/5 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            <div className="w-9 h-9 rounded-lg bg-brand-secondary-100 flex items-center justify-center mb-2">
              <Phone className="w-4 h-4 text-brand-primary" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-0.5 text-sm">Phone</h3>
<<<<<<< HEAD
            <a
              href="tel:+17084649019"
              className="text-brand-primary hover:text-brand-primary-600 font-medium text-sm"
            >
              +1 (708) 464-9019
            </a>
            <p className="text-sm text-gray-500 mt-0.5">Call us anytime</p>
=======
            <p className="text-sm text-gray-500 mt-0.5">To be added</p>
>>>>>>> 4f05fc1 (09-07)
          </div>
        </div>

        {/* Form + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full min-w-0">
          {/* Send us a message */}
          <div className="lg:col-span-2 w-full max-w-2xl rounded-3xl border border-slate-200/80 bg-white p-5 sm:p-6 lg:p-8 shadow-[0_18px_60px_rgba(15,23,42,0.08)] min-w-0">
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">Send us a message</h2>
              <p className="mt-1 text-sm sm:text-base text-slate-500">
              Fill out the form below and we&apos;ll get back to you shortly.
              </p>
            </div>

            {submitStatus && (
              <div
                className={`mb-5 rounded-2xl border px-4 py-3 text-sm shadow-sm ${
                  submitStatus.type === 'success'
                    ? 'border-emerald-200 bg-emerald-50 text-emerald-800'
                    : 'border-red-200 bg-red-50 text-red-800'
                }`}
                role="status"
              >
                {submitStatus.msg}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-800">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 hover:border-slate-300"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-800">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 hover:border-slate-300"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-slate-800">
                    Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="How can we help?"
                  value={formData.subject}
                  onChange={handleChange}
                    required
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 hover:border-slate-300"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-800">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={2}
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 hover:border-slate-300 resize-y min-h-[88px]"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center rounded-2xl bg-brand-primary px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(27,58,107,0.24)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-primary-700 hover:shadow-[0_16px_34px_rgba(27,58,107,0.3)] active:translate-y-0 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-[0_12px_28px_rgba(27,58,107,0.24)]"
              >
                {isSubmitting ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Why choose Codaptics */}
          <div className="w-full min-w-0 bg-gradient-to-br from-brand-primary to-brand-primary-800 rounded-lg p-4 sm:p-5 text-white h-fit">
<<<<<<< HEAD
            <h2 className="text-lg font-bold mb-3">Why reach out?</h2>
            <div className="mb-4 text-sm text-white/90 space-y-1">
              <p>Email: info@codaptics.com</p>
              <p>Phone: +1 (708) 464-9019</p>
            </div>
            <ul className="space-y-2">
             {[
                'A real recruiter applies to jobs on your behalf',
                'Matches across IT, engineering, healthcare, and finance',
                'Full-time and contract roles',
                'Most candidates hear back within 2 weeks',
                'You always know where your application stands',
=======
            <h2 className="text-lg font-bold mb-3">Contact Codaptics</h2>
            <div className="mb-4 text-sm text-white/90 space-y-1">
              <p>Phone: To be added</p>
            </div>
            <ul className="space-y-2">
             {[
                'AI-powered matching with human recruiter support',
                'Multi-domain placement across IT, Engineering, Healthcare, and Finance',
                'Full-time and contract opportunities',
                'Transparent process from profile to offer letter',
>>>>>>> 4f05fc1 (09-07)
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <Check className="w-3.5 h-3.5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
