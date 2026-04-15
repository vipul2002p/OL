import { motion } from 'framer-motion';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&q=80',
    alt: 'Beauty Product 1',
  },
  {
    src: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&q=80',
    alt: 'Beauty Product 2',
  },
  {
    src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=80',
    alt: 'Beauty Product 3',
  },
  {
    src: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&q=80',
    alt: 'Beauty Product 4',
  },
  {
    src: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&q=80',
    alt: 'Beauty Product 5',
  },
  {
    src: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&q=80',
    alt: 'Beauty Product 6',
  },
  {
    src: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&q=80',
    alt: 'Beauty Product 7',
  },
  {
    src: 'https://images.unsplash.com/photo-1583209814683-c023dd293cc6?w=400&q=80',
    alt: 'Beauty Product 8',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-4 bg-white">
      {/* Grid gallery matching reference - 4 columns */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="relative group overflow-hidden cursor-pointer aspect-square"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center">
              <span className="text-white text-xs font-medium tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                View
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
