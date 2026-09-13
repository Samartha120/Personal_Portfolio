import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { profileData } from '../../data/profile';
import { Button } from '../ui/Button';
import { Mail, Send, CheckCircle2, Copy, Check } from 'lucide-react';
import { SocialLinks } from '../ui/SocialLinks';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');

    // Launch mailto client with prefilled body
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);

    setTimeout(() => {
      window.location.href = `mailto:${profileData.email}?subject=${subject}&body=${body}`;
      setStatus('submitted');
    }, 600);
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Contact & Outreach"
          subtitle="Have an engineering role, project, or technical opportunity in mind? Feel free to reach out directly."
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Direct Info Card */}
          <div className="md:col-span-2 space-y-6">
            <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-6 shadow-2xs">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-4">
                Direct Contact
              </h3>

              <div className="space-y-4">
                <div>
                  <div className="text-xs font-mono text-zinc-400 dark:text-zinc-500 mb-1">Email Address</div>
                  <div className="flex items-center justify-between gap-2 p-2.5 rounded bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-700/60">
                    <span className="text-xs font-mono font-medium text-zinc-900 dark:text-zinc-100 truncate">
                      {profileData.email}
                    </span>
                    <button
                      onClick={handleCopyEmail}
                      type="button"
                      className="p-1 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 rounded hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors shrink-0 cursor-pointer"
                      title="Copy email to clipboard"
                      aria-label="Copy email to clipboard"
                    >
                      {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div>
                  <div className="text-xs font-mono text-zinc-400 dark:text-zinc-500 mb-1">Location</div>
                  <div className="text-xs font-mono font-medium text-zinc-800 dark:text-zinc-200">
                    {profileData.location}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-mono text-zinc-400 dark:text-zinc-500 mb-2">Social Profiles</div>
                  <SocialLinks showLabels={false} iconSize={18} />
                </div>
              </div>
            </div>

            {/* Seeking Note */}
            <div className="p-4 rounded-lg bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200/80 dark:border-blue-900/60 text-xs text-blue-900 dark:text-blue-200 leading-relaxed">
              <span className="font-semibold block mb-1">Current Availability</span>
              {profileData.seeking}
            </div>
          </div>

          {/* Functional Contact Form */}
          <div className="md:col-span-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-6 shadow-2xs">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-4">
              Send a Direct Message
            </h3>

            {status === 'submitted' ? (
              <div className="p-6 rounded-md bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-center space-y-3">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mx-auto" />
                <h4 className="text-sm font-bold text-emerald-900 dark:text-emerald-200">
                  Email Client Opened Successfully
                </h4>
                <p className="text-xs text-emerald-700 dark:text-emerald-300">
                  Your mail client has been launched with prefilled message details. You can also write directly to{' '}
                  <span className="font-mono font-semibold">{profileData.email}</span>.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setStatus('idle')}
                  className="mt-2 text-xs"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-zinc-700 dark:text-zinc-300 mb-1">
                    Your Name <span className="text-blue-600 dark:text-blue-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-3 py-2 text-xs md:text-sm rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800/80 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-zinc-700 dark:text-zinc-300 mb-1">
                    Your Email <span className="text-blue-600 dark:text-blue-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@company.com"
                    className="w-full px-3 py-2 text-xs md:text-sm rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800/80 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-zinc-700 dark:text-zinc-300 mb-1">
                    Message / Inquiry Details <span className="text-blue-600 dark:text-blue-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe the role, project, or inquiry..."
                    className="w-full px-3 py-2 text-xs md:text-sm rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800/80 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={status === 'submitting'}
                  className="w-full justify-center"
                  icon={status === 'submitting' ? <Mail className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                >
                  {status === 'submitting' ? 'Preparing Email...' : 'Send Message'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
