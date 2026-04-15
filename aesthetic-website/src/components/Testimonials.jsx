import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    quote:
      'AesthetiQ is definitely the place to be when it comes to beauty devices: You go into the store, and touch it, and try it, and love it. I\'ve never bought anything on the Internet. I like experience',
    name: 'Marc Jacobs',
  },
  {
    quote:
      'I would go to cosmetics counters and buy two or three foundations and powders, and then go home and mix them before I came up with something suitable for my undertones.',
    name: 'Iman',
  },
  {
    quote:
      'I don\'t work with a glam squad to get me together for the red carpet, I really enjoy the time it takes to do it myself, to choose my clothes and do my own makeup and my own hair.',
    name: 'Dita Von Teese',
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-28 bg-light relative overflow-hidden"
    >
      {/* Decorative botanical elements */}
      <svg className="absolute top-8 left-8 w-24 h-24 botanical-decoration" viewBox="0 0 100 100" fill="none" stroke="#c9a96e" strokeWidth="0.5">
        <path d="M50 90 C50 50, 20 30, 10 10" />
        <path d="M50 90 C50 50, 80 30, 90 10" />
        <ellipse cx="30" cy="40" rx="15" ry="8" transform="rotate(-30 30 40)" />
        <ellipse cx="70" cy="40" rx="15" ry="8" transform="rotate(30 70 40)" />
      </svg>
      <svg className="absolute bottom-8 right-8 w-24 h-24 botanical-decoration" viewBox="0 0 100 100" fill="none" stroke="#c9a96e" strokeWidth="0.5">
        <path d="M50 10 C50 50, 20 70, 10 90" />
        <path d="M50 10 C50 50, 80 70, 90 90" />
        <ellipse cx="30" cy="60" rx="15" ry="8" transform="rotate(30 30 60)" />
        <ellipse cx="70" cy="60" rx="15" ry="8" transform="rotate(-30 70 60)" />
      </svg>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-gold/60 text-xs tracking-[0.2em] uppercase">
            You said about us
          </span>
          <p className="font-script text-gold text-4xl md:text-5xl mt-2">
            perfect shades
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mt-2 uppercase tracking-[0.15em]">
            Testimonials
          </h2>
        </div>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
          slidesPerView={1}
          loop
          className="testimonial-swiper"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="text-center px-8 md:px-16 pb-12">
                <p className="text-primary/70 text-base md:text-lg leading-relaxed italic mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
                  {t.quote}
                </p>
                <span className="text-primary text-sm tracking-wider">
                  - {t.name} -
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
