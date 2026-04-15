import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

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
      className="py-28 relative overflow-hidden"
      style={{ backgroundColor: '#f5f3ef' }}
    >
      <div className="max-w-[800px] mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <span
            className="text-[10px] tracking-[0.25em] uppercase block mb-2"
            style={{ color: 'var(--color-gold)', opacity: 0.6 }}
          >
            You said about us
          </span>
          <p className="font-script text-[42px] md:text-[52px] leading-none mb-1" style={{ color: 'var(--color-gold)' }}>
            perfect shades
          </p>
          <h2 className="text-[22px] md:text-[26px] font-bold text-primary uppercase tracking-[0.12em]">
            Testimonials
          </h2>
        </div>

        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          navigation
          slidesPerView={1}
          loop
          className="testimonial-swiper"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="text-center px-12 md:px-20 pb-8">
                <p
                  className="text-primary/60 text-[15px] md:text-[17px] leading-[1.9] italic mb-8"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {t.quote}
                </p>
                <h4 className="text-primary text-[14px] font-semibold tracking-[0.1em] uppercase">
                  {t.name}
                </h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
