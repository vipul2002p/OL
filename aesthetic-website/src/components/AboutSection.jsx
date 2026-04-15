import { motion } from 'framer-motion';

const sections = [
  {
    title: 'Tradition of Quality',
    subtitle:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis sentium voluptatum deleniti atque corrupt quos dolores et',
    description:
      'At vero eos et accusamus et iusto odio dignissimos ducimus blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate provident, similique sunt in culpa qui officia deser animi. At vero eos et accusamus et iusto odio ducimus qui blanditiis',
    cta: 'Discover',
    href: '#products',
    image:
      'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80',
    reverse: false,
  },
  {
    title: 'Nature is our friend',
    subtitle:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis sentium voluptatum deleniti atque corrupt quos dolores et',
    description:
      'At vero eos et accusamus et iusto odio dignissimos ducimus blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate provident, similique sunt in culpa qui officia deser animi. At vero eos et accusamus et iusto odio ducimus qui blanditiis',
    cta: 'Discover',
    href: '#gallery',
    image:
      'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&q=80',
    reverse: true,
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-28 bg-white">
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
            <img
              src={section.image}
              alt={section.title}
              className="w-full h-[500px] object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: section.reverse ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl text-gold font-bold leading-tight uppercase tracking-wide">
              {section.title}
            </h2>
            <h5 className="text-base md:text-lg text-primary/80 italic leading-relaxed mt-6 mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              {section.subtitle}
            </h5>
            <p className="text-muted leading-relaxed mb-8 text-sm">
              {section.description}
            </p>
            <a
              href={section.href}
              className="inline-block border border-primary text-primary px-10 py-3.5 text-xs font-medium tracking-[0.2em] uppercase hover:bg-primary hover:text-white transition-all duration-300"
            >
              {section.cta}
            </a>
          </motion.div>
        </div>
      ))}
    </section>
  );
}
