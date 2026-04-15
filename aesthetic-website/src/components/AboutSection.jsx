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
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80',
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
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
    reverse: true,
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-white">
      {sections.map((section, i) => (
        <div
          key={i}
          className={`max-w-[1200px] mx-auto px-6 py-24 flex flex-col ${
            section.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
          } items-center gap-14`}
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: section.reverse ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:w-1/2"
          >
            <img
              src={section.image}
              alt={section.title}
              className="w-full h-[480px] object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: section.reverse ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            className="lg:w-1/2 lg:px-6"
          >
            <h2
              className="text-[26px] md:text-[32px] font-bold leading-tight uppercase tracking-[0.06em]"
              style={{ color: 'var(--color-gold)' }}
            >
              {section.title}
            </h2>
            <h5
              className="text-[14px] md:text-[16px] text-primary/70 italic leading-[1.7] mt-5 mb-5"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {section.subtitle}
            </h5>
            <p className="text-muted leading-[1.8] mb-9 text-[13px]">
              {section.description}
            </p>
            <a
              href={section.href}
              className="inline-block border border-primary text-primary px-10 py-3.5 text-[10px] font-medium tracking-[0.2em] uppercase hover:bg-primary hover:text-white transition-all duration-300"
            >
              {section.cta}
            </a>
          </motion.div>
        </div>
      ))}
    </section>
  );
}
