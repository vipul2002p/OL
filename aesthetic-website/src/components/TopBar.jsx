import { User } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-white text-primary py-2.5 border-b border-gray-100 hidden md:block">
      <div className="max-w-[1300px] mx-auto px-6 flex justify-between items-center">
        <a
          href="mailto:info@aesthetiqpro.com"
          className="text-primary/50 hover:text-gold transition-colors duration-300 italic text-[11px] tracking-wide"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          info@aesthetiqpro.com
        </a>
        <span
          className="text-primary/50 italic text-[11px] tracking-wide"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Free shipping on international orders of $150+
        </span>
        <a
          href="#"
          className="flex items-center gap-2 text-primary/50 hover:text-gold transition-colors duration-300 text-[11px] tracking-wide"
        >
          Log In
          <User size={12} strokeWidth={1.5} />
        </a>
      </div>
    </div>
  );
}
