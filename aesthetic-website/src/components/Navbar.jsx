import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Search, ChevronDown } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  {
    name: 'Devices',
    href: '#products',
    submenu: [
      { name: 'Laser Systems', href: '#products' },
      { name: 'RF Devices', href: '#products' },
      { name: 'IPL Systems', href: '#products' },
      { name: 'HIFU Machines', href: '#products' },
      { name: 'Body Contouring', href: '#products' },
    ],
  },
  { name: 'About', href: '#about' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
      style={{ top: isScrolled ? 0 : undefined }}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <span
            className={`text-2xl md:text-3xl font-bold tracking-wider transition-colors duration-300 ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Aestheti<span className="text-gold">Q</span> Pro
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative group"
              onMouseEnter={() => link.submenu && setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href={link.href}
                className={`flex items-center gap-1 text-sm font-medium tracking-widest uppercase transition-colors duration-300 hover:text-gold ${
                  isScrolled ? 'text-primary' : 'text-white'
                }`}
              >
                {link.name}
                {link.submenu && <ChevronDown size={14} />}
              </a>
              {link.submenu && activeDropdown === link.name && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-xl rounded-md py-3 min-w-[200px] animate-fadeInUp">
                  {link.submenu.map((sub) => (
                    <a
                      key={sub.name}
                      href={sub.href}
                      className="block px-5 py-2.5 text-sm text-primary hover:text-gold hover:bg-cream transition-all duration-200"
                    >
                      {sub.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <button
            className={`hidden md:block transition-colors duration-300 hover:text-gold ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}
          >
            <Search size={20} />
          </button>
          <button
            className={`hidden md:block transition-colors duration-300 hover:text-gold ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}
          >
            <ShoppingBag size={20} />
          </button>
          <button
            className={`lg:hidden transition-colors duration-300 ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white shadow-xl absolute top-full left-0 w-full py-6 animate-fadeInUp">
          {navLinks.map((link) => (
            <div key={link.name}>
              <a
                href={link.href}
                className="block px-6 py-3 text-sm font-medium tracking-widest uppercase text-primary hover:text-gold hover:bg-cream transition-all duration-200"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </a>
              {link.submenu &&
                link.submenu.map((sub) => (
                  <a
                    key={sub.name}
                    href={sub.href}
                    className="block px-10 py-2 text-sm text-muted hover:text-gold transition-colors duration-200"
                    onClick={() => setMobileOpen(false)}
                  >
                    {sub.name}
                  </a>
                ))}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
