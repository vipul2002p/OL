import { motion } from 'framer-motion';
import { Link2, Search } from 'lucide-react';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=600&q=80',
    alt: 'Skin Care',
  },
  {
    src: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&q=80',
    alt: 'Cool Primer',
  },
  {
    src: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80',
    alt: 'Scratch Eyeliner',
  },
  {
    src: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80',
    alt: 'Pointy Ball',
  },
  {
    src: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80',
    alt: 'Baked Blush',
  },
  {
    src: 'https://images.unsplash.com/photo-1583209814683-c023dd293cc6?w=600&q=80',
    alt: 'Face Primer',
  },
  {
    src: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80',
    alt: 'Mineral Blush',
  },
  {
    src: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&q=80',
    alt: 'Beauty Set',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-white">
      {/* Grid gallery matching reference - 4 columns, no gaps */}
      <div className="grid grid-cols-2 md:grid-cols-4">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="relative group overflow-hidden cursor-pointer aspect-square"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Hover overlay matching reference - two small icons */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center gap-3">
              <span
                className="w-9 h-9 bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-3 group-hover:translate-y-0 hover:bg-gold hover:text-white"
              >
                <Link2 size={14} strokeWidth={1.5} />
              </span>
              <span
                className="w-9 h-9 bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-3 group-hover:translate-y-0 delay-75 hover:bg-gold hover:text-white"
              >
                <Search size={14} strokeWidth={1.5} />
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
