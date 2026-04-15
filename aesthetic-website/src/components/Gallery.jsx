import { motion } from 'framer-motion';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
    alt: 'Aesthetic Treatment Room',
  },
  {
    src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80',
    alt: 'Professional Device',
  },
  {
    src: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80',
    alt: 'Medical Equipment',
  },
  {
    src: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=600&q=80',
    alt: 'Clinic Technology',
  },
  {
    src: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80',
    alt: 'Skincare Innovation',
  },
  {
    src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
    alt: 'Treatment Process',
  },
  {
    src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80',
    alt: 'Clinical Environment',
  },
  {
    src: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&q=80',
    alt: 'Device Closeup',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">
            Our World
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-4">
            Inside the Clinic
          </h2>
        </motion.div>
      </div>

      {/* Full-width scrolling gallery */}
      <div className="overflow-hidden">
        <div className="flex gap-4 px-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex-shrink-0 w-64 md:w-72 lg:w-80 relative group overflow-hidden cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-72 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-500 flex items-center justify-center">
                <span className="text-white text-sm font-medium tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
