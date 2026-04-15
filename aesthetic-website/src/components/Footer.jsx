import { ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="inline-block mb-6">
              <span
                className="text-2xl font-bold tracking-wider"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Aestheti<span className="text-gold">Q</span> Pro
              </span>
            </a>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              An industry leader in professional aesthetic devices, built
              specifically so your clinic can deliver transformative results
              with confidence.
            </p>
            <div className="flex gap-4">
              {['F', 'I', 'L', 'X'].map((letter, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 border border-white/20 flex items-center justify-center text-xs text-white/60 hover:text-gold hover:border-gold transition-all duration-300"
                >
                  {letter}
                </a>
              ))}
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Collections</h4>
            <ul className="space-y-3">
              {[
                'Laser Systems',
                'RF & Radiofrequency',
                'IPL Technology',
                'HIFU Devices',
                'Body Contouring',
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#products"
                    className="text-white/60 text-sm hover:text-gold transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                'Privacy Policy',
                'Terms & Conditions',
                'About Us',
                'Shipping Info',
                'Returns & Exchanges',
                'Contact',
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/60 text-sm hover:text-gold transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Stay In Touch</h4>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Subscribe to receive the latest product updates, industry
              insights, and exclusive offers.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for subscribing!');
              }}
              className="flex"
            >
              <input
                type="email"
                placeholder="Your email"
                required
                className="flex-1 px-4 py-3 bg-white/5 border border-white/20 text-white text-sm placeholder-white/40 focus:border-gold focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="bg-gold text-white px-5 py-3 text-sm font-semibold hover:bg-accent transition-colors duration-300"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} AesthetiQ Pro. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-white/40 text-sm hover:text-gold transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-white/40 text-sm hover:text-gold transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-white/40 text-sm hover:text-gold transition-colors"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
