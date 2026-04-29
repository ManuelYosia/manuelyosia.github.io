import React from 'react';
import { siteConfig } from '@/data/siteConfig';

const Contact = () => {
  return (
    <section id="contact" className="py-28 md:py-36 px-6 md:px-10 bg-surface-container-low">
      <div className="max-w-4xl mx-auto text-center space-y-10">
        <div>
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">Interaction</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-2 tracking-tight">Get in Touch.</h2>
        </div>

        <p className="text-xl text-on-surface-variant font-light leading-relaxed max-w-2xl mx-auto">
          Have a project in mind or just want to chat about Informatics? Drop me a message and let's build something extraordinary together.
        </p>

        {/* Email */}
        <a href={`mailto:${siteConfig.email}`} className="contact-email text-2xl md:text-4xl font-bold inline-block">
          {siteConfig.email}
        </a>

        {/* Contact form */}
        <div className="bg-surface-container rounded-2xl ghost-border p-8 text-left mt-8">
          <h3 className="text-xl font-bold mb-6 text-center">Or send a message directly</h3>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-outline mb-2 block">Name</label>
                <input type="text" placeholder="Your name"
                  className="w-full bg-surface-container-highest border border-outline-variant/25 rounded-xl px-4 py-3 text-sm text-on-surface placeholder-outline focus:outline-none focus:border-primary transition-colors duration-300"/>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-outline mb-2 block">Email</label>
                <input type="email" placeholder="your@email.com"
                  className="w-full bg-surface-container-highest border border-outline-variant/25 rounded-xl px-4 py-3 text-sm text-on-surface placeholder-outline focus:outline-none focus:border-primary transition-colors duration-300"/>
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-widest text-outline mb-2 block">Message</label>
              <textarea rows={5} placeholder="Tell me about your project..."
                className="w-full bg-surface-container-highest border border-outline-variant/25 rounded-xl px-4 py-3 text-sm text-on-surface placeholder-outline focus:outline-none focus:border-primary transition-colors duration-300 resize-none"></textarea>
            </div>
            <button type="submit" className="btn-primary w-full py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">send</span>
              Send Message
            </button>
          </form>
        </div>

        {/* Social icons */}
        <div className="flex justify-center gap-8 pt-4">
          <a href={siteConfig.socials.github} className="icon-btn text-on-surface-variant" aria-label="GitHub">
            <span className="material-symbols-outlined text-4xl">terminal</span>
          </a>
          <a href={siteConfig.socials.linkedin} className="icon-btn text-on-surface-variant" aria-label="LinkedIn">
            <span className="material-symbols-outlined text-4xl">share</span>
          </a>
          <a href={siteConfig.socials.email} className="icon-btn text-on-surface-variant" aria-label="Email">
            <span className="material-symbols-outlined text-4xl">alternate_email</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
