import { motion } from 'framer-motion';
import { Heart, Star } from 'lucide-react';

const products = [
  {
    name: 'Instant Detox',
    category: 'Face Masks',
    price: '$64.00',
    image:
      'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=500&q=80',
    badge: 'New',
    badgeColor: '#4caf50',
    rating: 5,
  },
  {
    name: 'Charcoal Mask',
    category: 'Face Masks',
    price: '$83.00',
    image:
      'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=500&q=80',
    badge: null,
    badgeColor: null,
    rating: 5,
  },
  {
    name: 'Lip Mask',
    category: 'Face Masks',
    price: '$45.00',
    originalPrice: '$66.00',
    image:
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500&q=80',
    badge: 'Sale',
    badgeColor: '#e53935',
    rating: 4,
  },
  {
    name: 'Smooting Mask',
    category: 'Face Masks',
    price: '$76.00',
    image:
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&q=80',
    badge: null,
    badgeColor: null,
    rating: 5,
  },
  {
    name: 'Total Radiant',
    category: 'Face Masks',
    price: '$54.00',
    image:
      'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=500&q=80',
    badge: null,
    badgeColor: null,
    rating: 5,
  },
];

export default function FeaturedProducts() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header matching reference */}
        <div className="text-center mb-14">
          <p className="font-script text-[42px] md:text-[50px] leading-none mb-1" style={{ color: 'var(--color-gold)' }}>
            perfect shades
          </p>
          <h2 className="text-[22px] md:text-[26px] font-bold text-primary uppercase tracking-[0.12em] mb-3">
            Find Your Beauty Match
          </h2>
          <p className="text-primary/50 text-[14px] italic max-w-md mx-auto" style={{ fontFamily: 'var(--font-heading)' }}>
            At vero eos et accusamus et iusto
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden mb-4" style={{ backgroundColor: '#f5f3ef' }}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {product.badge && (
                  <span
                    className="absolute top-3 left-3 text-white text-[9px] font-bold tracking-[0.15em] uppercase px-2.5 py-1"
                    style={{ backgroundColor: product.badgeColor }}
                  >
                    {product.badge}
                  </span>
                )}
                {/* Wishlist heart */}
                <button className="absolute top-3 right-3 w-8 h-8 bg-white/0 group-hover:bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:text-red-500">
                  <Heart size={14} strokeWidth={1.5} />
                </button>
                {/* Hover overlay with Add to cart + Quick View */}
                <div
                  className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                >
                  <button className="w-full bg-white/95 text-primary py-2.5 text-[10px] font-medium tracking-[0.15em] uppercase hover:bg-gold hover:text-white transition-all duration-200 border-t border-gray-100">
                    Add to cart
                  </button>
                  <button className="w-full bg-white/95 text-primary/60 py-2 text-[10px] tracking-[0.1em] uppercase hover:text-gold transition-all duration-200 border-t border-gray-100">
                    Quick View
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="text-center">
                <h4 className="text-[13px] font-semibold text-primary uppercase tracking-[0.08em] group-hover:text-gold transition-colors duration-300">
                  {product.name}
                </h4>
                <p className="text-primary/40 text-[12px] mt-1 italic" style={{ fontFamily: 'var(--font-heading)' }}>
                  {product.category}
                </p>
                <div className="mt-1.5 flex items-center justify-center gap-2">
                  {product.originalPrice && (
                    <span className="text-primary/40 line-through text-[13px]">
                      {product.originalPrice}
                    </span>
                  )}
                  <span className="text-primary text-[13px]">
                    {product.price}
                  </span>
                </div>
                <div className="flex items-center justify-center gap-0.5 mt-1.5">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={10}
                      className={
                        j < product.rating
                          ? 'fill-gold text-gold'
                          : 'text-gray-300'
                      }
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
