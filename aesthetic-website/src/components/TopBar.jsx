import { Mail, Phone, User } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-primary text-white text-sm py-2.5 hidden md:block">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <a href="mailto:info@aesthetiqpro.com" className="flex items-center gap-2 hover:text-gold transition-colors duration-300">
            <Mail size={14} />
            <span>info@aesthetiqpro.com</span>
          </a>
          <a href="tel:+12345678900" className="flex items-center gap-2 hover:text-gold transition-colors duration-300">
            <Phone size={14} />
            <span>+1 (234) 567-8900</span>
          </a>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-gold-light tracking-wider">Free consultation on orders above $5,000</span>
          <a href="#" className="flex items-center gap-2 hover:text-gold transition-colors duration-300">
            <User size={14} />
            <span>Log In</span>
          </a>
        </div>
      </div>
    </div>
  );
}
