import { motion } from 'framer-motion';
import { ShoppingBag, Eye, Star } from 'lucide-react';

const products = [
  {
    name: 'Instant Detox',
    category: 'Face Masks',
    price: '$64.00',
    image:
      'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&q=80',
    badge: 'New',
    badgeColor: 'bg-green-600',
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
    badgeColor: 'bg-red-500',
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
    <section id="products" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header matching reference */}
        <div className="text-center mb-16">
          <span className="text-gold/60 text-xs tracking-[0.2em] uppercase">
            perfect shades
          </span>
          <p className="font-script text-gold text-4xl md:text-5xl mt-2">
            perfect shades
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mt-2 uppercase tracking-[0.15em]">
            Find Your Beauty Match
          </h2>
          <p className="text-muted mt-4 italic text-sm max-w-md mx-auto" style={{ fontFamily: 'var(--font-heading)' }}>
            At vero eos et accusamus et iusto
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden bg-light mb-5">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {product.badge && (
                  <span
                    className={`absolute top-3 left-3 ${product.badgeColor} text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1`}
                  >
                    {product.badge}
                  </span>
                )}
                {/* Hover overlay */}
                <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex gap-2 justify-center pb-6 pt-12 bg-gradient-to-t from-black/50 to-transparent">
                  <button className="bg-white text-primary p-2.5 hover:bg-gold hover:text-white transition-all duration-200 text-xs tracking-wider uppercase">
                    Add to cart
                  </button>
                  <button className="bg-white text-primary p-2.5 hover:bg-gold hover:text-white transition-all duration-200">
                    <Eye size={14} />
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="text-center">
                <h4 className="text-sm font-semibold text-primary uppercase tracking-wider group-hover:text-gold transition-colors duration-300">
                  {product.name}
                </h4>
                <p className="text-muted text-xs mt-1 italic" style={{ fontFamily: 'var(--font-heading)' }}>
                  {product.category}
                </p>
                <div className="mt-2 flex items-center justify-center gap-2">
                  {product.originalPrice && (
                    <span className="text-muted line-through text-sm">
                      {product.originalPrice}
                    </span>
                  )}
                  <span className="text-primary font-medium text-sm">
                    {product.price}
                  </span>
                </div>
                <div className="flex items-center justify-center gap-0.5 mt-2">
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
