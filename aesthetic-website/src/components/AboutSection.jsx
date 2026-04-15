import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const sections = [
  {
    tag: 'Our Philosophy',
    title: 'Precision Engineering',
    subtitle:
      'Delivering unparalleled performance through meticulous design and advanced technology that sets new industry standards.',
    description:
      'Every AesthetiQ Pro device is engineered with surgical precision, combining decades of research with cutting-edge innovation. Our commitment to excellence ensures that practitioners can deliver transformative results with confidence, safety, and consistency across every treatment.',
    cta: 'Discover',
    href: '#products',
    image:
      'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=800&q=80',
    reverse: false,
  },
  {
    tag: 'Innovation',
    title: 'Science Meets Aesthetics',
    subtitle:
      'Pioneering the future of non-invasive treatments with intelligent systems that adapt to every patient\'s unique needs.',
    description:
      'Our research-driven approach combines AI-powered diagnostics with proven clinical methodologies. Each device features real-time skin analysis, customizable treatment protocols, and intuitive interfaces that empower practitioners to achieve optimal outcomes for every patient.',
    cta: 'Discover',
    href: '#gallery',
    image:
      'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80',
    reverse: true,
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      {sections.map((section, i) => (
        <div
          key={i}
          className={`max-w-7xl mx-auto px-6 flex flex-col ${
            section.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
          } items-center gap-16 ${i > 0 ? 'mt-32' : ''}`}
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: section.reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-[500px] object-cover"
              />
              <div
                className={`absolute -bottom-6 ${
                  section.reverse ? '-right-6' : '-left-6'
                } w-32 h-32 border-2 border-gold -z-10`}
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: section.reverse ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="lg:w-1/2"
          >
            <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">
              {section.tag}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-4 mb-6 leading-tight">
              {section.title}
            </h2>
            <h5 className="text-lg md:text-xl text-primary/80 font-medium leading-relaxed mb-6">
              {section.subtitle}
            </h5>
            <p className="text-muted leading-relaxed mb-8">{section.description}</p>
            <a
              href={section.href}
              className="inline-flex items-center gap-3 border-2 border-primary text-primary px-8 py-3.5 text-sm font-semibold tracking-widest uppercase hover:bg-primary hover:text-white transition-all duration-300 group"
            >
              {section.cta}
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </motion.div>
        </div>
      ))}
    </section>
  );
}
