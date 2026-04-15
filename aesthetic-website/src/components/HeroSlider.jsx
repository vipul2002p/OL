import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { ArrowRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    tag: 'AESTHETIC SOLUTIONS',
    title: 'Next-Generation Aesthetic Devices for Modern Clinics',
    description:
      'Empowering practitioners with cutting-edge technology to deliver exceptional results and transform patient confidence.',
    cta: 'Explore Devices',
    href: '#products',
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&q=80',
  },
  {
    tag: 'PROFESSIONAL GRADE',
    title: 'FDA-Cleared Technology Trusted by Leading Clinics',
    description:
      'Precision-engineered systems delivering consistent, safe, and remarkable outcomes across all skin types.',
    cta: 'View Collection',
    href: '#products',
    image:
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1920&q=80',
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
                <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex items-center">
                <div className="max-w-7xl mx-auto px-6 w-full">
                  <div className="max-w-2xl">
                    <span className="inline-block text-gold text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-6 border border-gold/30 px-4 py-2">
                      {slide.tag}
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
                      {slide.title}
                    </h1>
                    <p className="text-white/80 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
                      {slide.description}
                    </p>
                    <a
                      href={slide.href}
                      className="inline-flex items-center gap-3 bg-gold text-white px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-accent transition-all duration-300 group"
                    >
                      {slide.cta}
                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-white/60 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}
