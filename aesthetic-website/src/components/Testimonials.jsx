import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    quote:
      'AesthetiQ Pro devices have completely transformed our clinic. The precision and consistency of results we achieve now is unmatched. Our patient satisfaction rates have increased by over 40% since we integrated their laser systems.',
    name: 'Dr. Sarah Mitchell',
    role: 'Medical Director, Radiance Aesthetics',
  },
  {
    quote:
      'As a dermatologist with 20 years of experience, I can confidently say these are the most intuitive and effective devices I have ever used. The AI-powered skin analysis takes the guesswork out of treatment planning entirely.',
    name: 'Dr. James Chen',
    role: 'Board-Certified Dermatologist',
  },
  {
    quote:
      'The ROI on our AesthetiQ Pro investment was realized within the first quarter. The training and support team is exceptional, and the device reliability means zero downtime for our busy practice.',
    name: 'Dr. Elena Rodriguez',
    role: 'Founder, Elite Skin Clinic',
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-primary relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">
            What Professionals Say
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4">
            Testimonials
          </h2>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={40}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
          loop
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 md:p-12 relative group hover:bg-white/10 transition-all duration-500"
              >
                <Quote
                  size={48}
                  className="text-gold/20 absolute top-6 right-6"
                />
                <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                    <span className="text-gold font-bold text-lg">
                      {t.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">
                      {t.name}
                    </h4>
                    <p className="text-gold text-sm">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
