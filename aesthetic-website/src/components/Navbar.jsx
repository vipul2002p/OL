import { useState, useEffect, useRef } from 'react';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';

const navLinks = [
  {
    name: 'Home',
    href: '#home',
    submenu: ['Main Home', 'Skincare Home', 'Landing'],
  },
  {
    name: 'About Us',
    href: '#about',
    submenu: ['About Us', 'Our Team', 'FAQ Page'],
  },
  {
    name: 'Blog',
    href: '#testimonials',
    submenu: ['Standard', 'Centered', 'No Sidebar'],
  },
  {
    name: 'Shop',
    href: '#products',
    submenu: ['All Products', 'New Arrivals', 'Best Sellers', 'On Sale'],
  },
  {
    name: 'Portfolio',
    href: '#gallery',
    submenu: ['Gallery', 'Standard', 'Two Columns', 'Three Columns'],
  },
  {
    name: 'Contact',
    href: '#contact',
    submenu: ['Contact Us', 'Get in Touch'],
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (index) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <nav
      className={`fixed left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
      style={{ top: 0 }}
    >
      <div className="max-w-[1300px] mx-auto px-6 flex justify-between items-center">
        {/* Logo - Script style like Biagiotti */}
        <a href="#home" className="flex items-center">
          <span
            className={`text-3xl md:text-[38px] transition-colors duration-300 font-script leading-none ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}
          >
            aesthetiq
          </span>
        </a>

        {/* Desktop Nav - Centered with dropdowns */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href={link.href}
                className={`text-[11px] font-medium tracking-[0.2em] uppercase transition-colors duration-300 hover:text-gold py-4 inline-block ${
                  isScrolled ? 'text-primary' : 'text-white'
                }`}
              >
                {link.name}
              </a>
              {/* Dropdown */}
              {link.submenu && activeDropdown === index && (
                <div
                  className="absolute top-full left-0 bg-white shadow-lg min-w-[200px] py-3 z-50"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    animation: 'fadeInDown 0.25s ease-out',
                  }}
                >
                  {link.submenu.map((item) => (
                    <a
                      key={item}
                      href={link.href}
                      className="block px-5 py-2 text-[12px] text-primary/70 hover:text-gold hover:bg-gray-50 transition-all duration-200 tracking-wide"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-5">
          <button
            className={`hidden md:block transition-colors duration-300 hover:text-gold ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}
          >
            <Search size={16} strokeWidth={1.5} />
          </button>
          <button
            className={`hidden md:block relative transition-colors duration-300 hover:text-gold ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}
          >
            <ShoppingBag size={16} strokeWidth={1.5} />
          </button>
          <button
            className={`transition-colors duration-300 hover:text-gold ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile / Slide-out Menu */}
      {mobileOpen && (
        <div className="bg-white shadow-xl absolute top-full left-0 w-full py-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-8 py-3 text-[12px] font-medium tracking-[0.2em] uppercase text-primary hover:text-gold transition-all duration-200"
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
