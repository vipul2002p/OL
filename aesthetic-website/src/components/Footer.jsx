export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] mb-6">
              Contact
            </h4>
            <div className="space-y-3">
              <p className="text-white/60 text-sm italic" style={{ fontFamily: 'var(--font-heading)' }}>
                Address: <a href="#" className="hover:text-gold transition-colors">Seestrasse 21, Zurich</a>
              </p>
              <p className="text-white/60 text-sm italic" style={{ fontFamily: 'var(--font-heading)' }}>
                E-mail: <a href="mailto:info@aesthetiqpro.com" className="hover:text-gold transition-colors">info@aesthetiqpro.com</a>
              </p>
              <p className="text-white/60 text-sm italic" style={{ fontFamily: 'var(--font-heading)' }}>
                Phone: <a href="tel:+99411725312" className="hover:text-gold transition-colors">+ 99 411 725 39 12</a>
              </p>
            </div>
          </div>

          {/* Brand - Center */}
          <div className="text-center">
            <a href="#home" className="inline-block mb-6">
              <span className="text-4xl md:text-5xl font-script text-white">
                aesthetiq
              </span>
            </a>
            <p className="text-white/50 text-sm italic leading-relaxed max-w-sm mx-auto" style={{ fontFamily: 'var(--font-heading)' }}>
              An oasis of online beauty built specifically so your new cosmetics site can take everyone&apos;s breaths away.
            </p>
            <div className="flex gap-3 justify-center mt-6">
              {[
                { letter: 'f', label: 'Facebook' },
                { letter: 't', label: 'Twitter' },
                { letter: 'g', label: 'Google' },
                { letter: 'p', label: 'Pinterest' },
              ].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 border border-white/20 flex items-center justify-center text-xs text-white/50 hover:text-gold hover:border-gold transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.letter}
                </a>
              ))}
            </div>
          </div>

          {/* Collections */}
          <div className="text-right">
            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] mb-6">
              Collections
            </h4>
            <ul className="space-y-3">
              {[
                'Glowing skin is a result',
                'ABCDEH Beauty – Forever Young',
                'Pure Skin Solutions',
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#products"
                    className="text-white/50 text-sm italic hover:text-gold transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom links row */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap justify-center gap-6">
          {['Privacy Policy', 'Terms and Conditions', 'About', 'Shipping Info', 'Returns/Exchanges', 'Contact'].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="text-white/40 text-xs hover:text-gold transition-colors tracking-wider"
              >
                {item}
              </a>
            )
          )}
        </div>
      </div>
    </footer>
  );
}
