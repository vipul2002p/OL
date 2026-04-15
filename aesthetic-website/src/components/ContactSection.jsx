import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-4 mb-4">
            Ask Us Anything
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Whether you need a consultation, a product demo, or technical
            support, our expert team is ready to assist you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-white border border-gray-200 text-primary placeholder-muted focus:border-gold focus:outline-none transition-colors duration-300"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-white border border-gray-200 text-primary placeholder-muted focus:border-gold focus:outline-none transition-colors duration-300"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-white border border-gray-200 text-primary placeholder-muted focus:border-gold focus:outline-none transition-colors duration-300"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-6 py-4 bg-white border border-gray-200 text-primary placeholder-muted focus:border-gold focus:outline-none transition-colors duration-300 resize-none"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-3 bg-primary text-white px-10 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-gold transition-all duration-300 group"
              >
                Submit
                <Send
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-primary mb-6">Contact</h3>
            <div className="flex items-start gap-4">
              <MapPin size={20} className="text-gold flex-shrink-0 mt-1" />
              <div>
                <p className="text-primary font-medium">Address</p>
                <p className="text-muted">
                  742 Aesthetic Boulevard
                  <br />
                  Beverly Hills, CA 90210
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail size={20} className="text-gold flex-shrink-0 mt-1" />
              <div>
                <p className="text-primary font-medium">Email</p>
                <a
                  href="mailto:info@aesthetiqpro.com"
                  className="text-muted hover:text-gold transition-colors"
                >
                  info@aesthetiqpro.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone size={20} className="text-gold flex-shrink-0 mt-1" />
              <div>
                <p className="text-primary font-medium">Phone</p>
                <a
                  href="tel:+12345678900"
                  className="text-muted hover:text-gold transition-colors"
                >
                  +1 (234) 567-8900
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="pt-6 border-t border-gray-200">
              <p className="text-primary font-medium mb-4">Follow Us</p>
              <div className="flex gap-4">
                {['Facebook', 'Instagram', 'LinkedIn', 'Twitter'].map(
                  (social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-10 h-10 bg-primary text-white flex items-center justify-center text-xs font-bold hover:bg-gold transition-colors duration-300"
                    >
                      {social.charAt(0)}
                    </a>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
