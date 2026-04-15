import { User } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-white text-primary text-sm py-2.5 border-b border-gray-100 hidden md:block">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="mailto:info@aesthetiqpro.com" className="text-primary/70 hover:text-gold transition-colors duration-300 italic text-xs tracking-wide">
          info@aesthetiqpro.com
        </a>
        <span className="text-primary/70 italic text-xs tracking-wide">
          Free shipping on international orders of $150+
        </span>
        <a href="#" className="flex items-center gap-2 text-primary/70 hover:text-gold transition-colors duration-300 text-xs tracking-wide">
          Log In
          <User size={14} />
        </a>
      </div>
    </div>
  );
}
