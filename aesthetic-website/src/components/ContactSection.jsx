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
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Botanical decoration - subtle green plant */}
      <div className="absolute bottom-0 left-[15%] w-[200px] h-[350px] pointer-events-none opacity-10">
        <svg viewBox="0 0 200 400" fill="none" stroke="#7a8b6f" strokeWidth="0.8" className="w-full h-full">
          <path d="M100 400 C100 300, 60 250, 40 200 C20 150, 50 100, 80 60 C100 30, 90 10, 100 0" />
          <path d="M100 400 C100 300, 140 250, 160 200 C180 150, 150 100, 120 60" />
          <ellipse cx="60" cy="180" rx="25" ry="12" transform="rotate(-40 60 180)" />
          <ellipse cx="140" cy="180" rx="25" ry="12" transform="rotate(40 140 180)" />
          <ellipse cx="50" cy="120" rx="20" ry="10" transform="rotate(-30 50 120)" />
          <ellipse cx="150" cy="120" rx="20" ry="10" transform="rotate(30 150 120)" />
          <ellipse cx="70" cy="250" rx="22" ry="11" transform="rotate(-35 70 250)" />
          <ellipse cx="130" cy="250" rx="22" ry="11" transform="rotate(35 130 250)" />
        </svg>
      </div>

      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Header matching reference */}
            <p className="font-script text-[36px] md:text-[42px] leading-none mb-1" style={{ color: 'var(--color-gold)' }}>
              perfect shades
            </p>
            <h2 className="text-[20px] md:text-[24px] font-bold text-primary uppercase tracking-[0.1em] mb-3">
              Ask Us Anything
            </h2>
            <p className="text-primary/50 text-[13px] italic mb-10 leading-[1.7]" style={{ fontFamily: 'var(--font-heading)' }}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
            </p>

            <form onSubmit={handleSubmit} className="space-y-0">
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-0 py-4 bg-transparent text-primary text-[13px] placeholder-primary/30 focus:outline-none transition-colors duration-300"
                style={{ borderBottom: '1px solid #ddd', borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}
              />
              <textarea
                name="comment"
                placeholder="Your comment"
                value={formData.comment}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-0 py-4 bg-transparent text-primary text-[13px] placeholder-primary/30 focus:outline-none transition-colors duration-300 resize-none"
                style={{ borderBottom: '1px solid #ddd', borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}
              />
              <div className="pt-6">
                <button
                  type="submit"
                  className="inline-block border border-primary text-primary px-10 py-3.5 text-[10px] font-medium tracking-[0.2em] uppercase hover:bg-primary hover:text-white transition-all duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col justify-end"
          >
            <h3 className="text-[15px] font-bold text-primary uppercase tracking-[0.12em] mb-6">
              Contact
            </h3>
            <div className="space-y-4">
              <p className="text-primary/50 text-[13px] italic" style={{ fontFamily: 'var(--font-heading)' }}>
                Address: <a href="#" className="hover:text-gold transition-colors underline-offset-2">Seestrasse 21, Zurich</a>
              </p>
              <p className="text-primary/50 text-[13px] italic" style={{ fontFamily: 'var(--font-heading)' }}>
                E-mail: <a href="mailto:info@aesthetiqpro.com" className="hover:text-gold transition-colors underline-offset-2">info@aesthetiqpro.com</a>
              </p>
              <p className="text-primary/50 text-[13px] italic" style={{ fontFamily: 'var(--font-heading)' }}>
                Phone : <a href="tel:+99411725312" className="hover:text-gold transition-colors underline-offset-2">+ 99 411 725 39 12</a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
