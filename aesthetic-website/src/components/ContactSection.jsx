import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    email: '',
    comment: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will get back to you within 24 hours.');
    setFormData({ email: '', comment: '' });
  };

  return (
    <section id="contact" className="py-28 bg-white relative overflow-hidden">
      {/* Botanical decoration SVG */}
      <svg className="absolute bottom-0 left-1/4 w-64 h-96 botanical-decoration" viewBox="0 0 200 400" fill="none" stroke="#8B9D77" strokeWidth="0.8">
        <path d="M100 400 C100 300, 60 250, 40 200 C20 150, 50 100, 80 60 C100 30, 90 10, 100 0" />
        <path d="M100 400 C100 300, 140 250, 160 200 C180 150, 150 100, 120 60" />
        <ellipse cx="60" cy="180" rx="25" ry="12" transform="rotate(-40 60 180)" />
        <ellipse cx="140" cy="180" rx="25" ry="12" transform="rotate(40 140 180)" />
        <ellipse cx="50" cy="120" rx="20" ry="10" transform="rotate(-30 50 120)" />
        <ellipse cx="150" cy="120" rx="20" ry="10" transform="rotate(30 150 120)" />
        <ellipse cx="70" cy="250" rx="22" ry="11" transform="rotate(-35 70 250)" />
        <ellipse cx="130" cy="250" rx="22" ry="11" transform="rotate(35 130 250)" />
        <path d="M80 320 C60 300, 40 310, 20 320" />
        <path d="M120 320 C140 300, 160 310, 180 320" />
      </svg>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Header matching reference */}
            <span className="text-gold/60 text-xs tracking-[0.2em] uppercase">
              perfect shades
            </span>
            <p className="font-script text-gold text-3xl md:text-4xl mt-1">
              perfect shades
            </p>
            <h2 className="text-xl md:text-2xl font-bold text-primary mt-1 mb-2 uppercase tracking-[0.1em]">
              Ask Us Anything
            </h2>
            <p className="text-muted text-sm italic mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-0 py-4 bg-transparent border-0 border-b border-gray-300 text-primary text-sm placeholder-muted/60 focus:border-gold focus:outline-none transition-colors duration-300"
              />
              <textarea
                name="comment"
                placeholder="Your comment"
                value={formData.comment}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-0 py-4 bg-transparent border-0 border-b border-gray-300 text-primary text-sm placeholder-muted/60 focus:border-gold focus:outline-none transition-colors duration-300 resize-none"
              />
              <button
                type="submit"
                className="inline-block border border-primary text-primary px-10 py-3 text-xs font-medium tracking-[0.2em] uppercase hover:bg-primary hover:text-white transition-all duration-300"
              >
                Submit
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-end"
          >
            <h3 className="text-lg font-bold text-primary uppercase tracking-wider mb-6">
              Contact
            </h3>
            <div className="space-y-4">
              <p className="text-muted text-sm italic" style={{ fontFamily: 'var(--font-heading)' }}>
                Address: <a href="#" className="hover:text-gold transition-colors">Seestrasse 21, Zurich</a>
              </p>
              <p className="text-muted text-sm italic" style={{ fontFamily: 'var(--font-heading)' }}>
                E-mail: <a href="mailto:info@aesthetiqpro.com" className="hover:text-gold transition-colors">info@aesthetiqpro.com</a>
              </p>
              <p className="text-muted text-sm italic" style={{ fontFamily: 'var(--font-heading)' }}>
                Phone : <a href="tel:+99411725312" className="hover:text-gold transition-colors">+ 99 411 725 39 12</a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
