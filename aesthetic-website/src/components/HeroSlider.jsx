import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    tag: 'SKIN SOLUTION',
    description:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque',
    cta: 'Find beauty',
    href: '#products',
    image:
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&q=80',
  },
  {
    tag: 'TOP PRODUCTS',
    description:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque',
    cta: 'Find beauty',
    href: '#products',
    image:
      'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1920&q=80',
  },
];

export default function HeroSlider() {
  return (
    <section id="home" className="relative">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="h-screen"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-screen w-full">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/30" />
              </div>

              {/* Content - Centered */}
              <div className="relative z-10 h-full flex items-center justify-center text-center">
                <div className="max-w-2xl px-6">
                  <span className="inline-block text-white text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-6">
                    {slide.tag}
                  </span>
                  <p className="text-white/80 text-base md:text-lg leading-relaxed mb-10 italic max-w-lg mx-auto" style={{ fontFamily: 'var(--font-heading)' }}>
                    {slide.description}
                  </p>
                  <a
                    href={slide.href}
                    className="inline-block border border-white text-white px-10 py-3.5 text-xs font-medium tracking-[0.2em] uppercase hover:bg-white hover:text-primary transition-all duration-300"
                  >
                    {slide.cta}
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
