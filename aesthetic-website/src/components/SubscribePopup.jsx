import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function SubscribePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after 2 seconds like the reference site
    const timer = setTimeout(() => {
      const dismissed = sessionStorage.getItem('popup_dismissed');
      if (!dismissed) {
        setIsOpen(true);
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('popup_dismissed', 'true');
  };

  const handlePrevent = () => {
    setIsOpen(false);
    sessionStorage.setItem('popup_dismissed', 'true');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(false);
    sessionStorage.setItem('popup_dismissed', 'true');
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
    >
      <div
        className="relative bg-white w-[90%] max-w-[480px] px-10 py-12 text-center"
        style={{ animation: 'fadeInUp 0.4s ease-out' }}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-primary/40 hover:text-primary transition-colors"
        >
          <X size={18} strokeWidth={1.5} />
        </button>

        <p className="font-script text-[36px] leading-none mb-1" style={{ color: 'var(--color-gold)' }}>
          subscribe
        </p>
        <h2 className="text-[20px] font-bold text-primary uppercase tracking-[0.1em] mb-5">
          Stay in touch
        </h2>

        <form onSubmit={handleSubmit} className="mb-6">
          <input
            type="email"
            placeholder="Your email address"
            required
            className="w-full px-0 py-3 bg-transparent text-primary text-[13px] placeholder-primary/30 focus:outline-none mb-5"
            style={{ borderBottom: '1px solid #ddd', borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}
          />
          <button
            type="submit"
            className="inline-block border border-primary text-primary px-10 py-3 text-[10px] font-medium tracking-[0.2em] uppercase hover:bg-primary hover:text-white transition-all duration-300"
          >
            Send
          </button>
        </form>

        <p
          className="text-primary/40 text-[12px] italic leading-[1.7] mb-4 max-w-[320px] mx-auto"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          At vero eos et accusamus et iusto odio dignissimos
        </p>

        <button
          onClick={handlePrevent}
          className="text-primary/30 text-[11px] tracking-wider hover:text-primary transition-colors"
        >
          Prevent This Pop-up
        </button>
      </div>
    </div>
  );
}
