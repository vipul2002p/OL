import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Blog', href: '#testimonials' },
  { name: 'Shop', href: '#products' },
  { name: 'Portfolio', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
      style={{ top: isScrolled ? 0 : undefined }}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo - Script style like Biagiotti */}
        <a href="#home" className="flex items-center">
          <span
            className={`text-3xl md:text-4xl transition-colors duration-300 font-script ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}
          >
            aesthetiq
          </span>
        </a>

        {/* Desktop Nav - Centered */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-xs font-medium tracking-[0.2em] uppercase transition-colors duration-300 hover:text-gold ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-5">
          <button
            className={`hidden md:block transition-colors duration-300 hover:text-gold ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}
          >
            <Search size={18} />
          </button>
          <button
            className={`hidden md:block transition-colors duration-300 hover:text-gold ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}
          >
            <ShoppingBag size={18} />
          </button>
          <button
            className={`transition-colors duration-300 ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile / Slide-out Menu */}
      {mobileOpen && (
        <div className="bg-white shadow-xl absolute top-full left-0 w-full py-8 animate-fadeInUp">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-8 py-3.5 text-sm font-medium tracking-[0.2em] uppercase text-primary hover:text-gold transition-all duration-200"
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
