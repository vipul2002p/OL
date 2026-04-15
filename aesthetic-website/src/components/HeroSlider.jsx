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
      'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1920&q=80',
  },
  {
    tag: 'TOP PRODUCTS',
    description:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque',
    cta: 'Find beauty',
    href: '#products',
    image:
      'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1920&q=80',
  },
];

export default function HeroSlider() {
  return (
    <section id="home" className="relative">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        speed={1000}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="h-screen"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-screen w-full">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ease-out"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              >
                <div className="absolute inset-0 bg-black/40" />
              </div>

              {/* Content - Centered like reference */}
              <div className="relative z-10 h-full flex items-center justify-center text-center">
                <div className="max-w-xl px-6">
                  <h2
                    className="text-white text-[11px] md:text-[13px] font-semibold tracking-[0.35em] uppercase mb-8"
                    style={{ letterSpacing: '0.35em' }}
                  >
                    {slide.tag}
                  </h2>
                  <p
                    className="text-white/75 text-[15px] md:text-[17px] leading-[1.8] mb-12 italic"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {slide.description}
                  </p>
                  <a
                    href={slide.href}
                    className="inline-block border border-white/80 text-white px-12 py-4 text-[10px] font-medium tracking-[0.25em] uppercase hover:bg-white hover:text-primary transition-all duration-400"
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
