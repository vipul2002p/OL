import { motion } from 'framer-motion';
import { ShoppingBag, Eye, Star } from 'lucide-react';

const products = [
  {
    name: 'ProLase X1',
    category: 'Laser Systems',
    price: '$12,500',
    image:
      'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=500&q=80',
    badge: 'New',
    badgeColor: 'bg-green-500',
    rating: 5,
  },
  {
    name: 'DermaRF Ultra',
    category: 'RF Devices',
    price: '$8,900',
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&q=80',
    badge: null,
    badgeColor: null,
    rating: 5,
  },
  {
    name: 'IPL Spectrum Pro',
    category: 'IPL Systems',
    price: '$15,200',
    originalPrice: '$18,000',
    image:
      'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=500&q=80',
    badge: 'Sale',
    badgeColor: 'bg-red-500',
    rating: 4,
  },
  {
    name: 'HIFU Precision 360',
    category: 'HIFU Machines',
    price: '$22,000',
    image:
      'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=500&q=80',
    badge: null,
    badgeColor: null,
    rating: 5,
  },
  {
    name: 'CryoSculpt Elite',
    category: 'Body Contouring',
    price: '$18,500',
    image:
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&q=80',
    badge: 'New',
    badgeColor: 'bg-green-500',
    rating: 4,
  },
];

export default function FeaturedProducts() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">
            Premium Selection
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-4 mb-4">
            Find Your Perfect Device
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Explore our curated collection of professional-grade aesthetic
            devices designed for modern clinics and practitioners.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden bg-light mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {product.badge && (
                  <span
                    className={`absolute top-4 left-4 ${product.badgeColor} text-white text-xs font-bold tracking-wider uppercase px-3 py-1`}
                  >
                    {product.badge}
                  </span>
                )}
                {/* Hover overlay */}
                <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex gap-2 justify-center pb-6 pt-12 bg-gradient-to-t from-primary/70 to-transparent">
                  <button className="bg-white text-primary p-3 hover:bg-gold hover:text-white transition-all duration-200">
                    <ShoppingBag size={16} />
                  </button>
                  <button className="bg-white text-primary p-3 hover:bg-gold hover:text-white transition-all duration-200">
                    <Eye size={16} />
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="text-center">
                <h4 className="text-lg font-semibold text-primary group-hover:text-gold transition-colors duration-300">
                  {product.name}
                </h4>
                <p className="text-muted text-sm mt-1">{product.category}</p>
                <div className="flex items-center justify-center gap-1 mt-2">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={12}
                      className={
                        j < product.rating
                          ? 'fill-gold text-gold'
                          : 'text-gray-300'
                      }
                    />
                  ))}
                </div>
                <div className="mt-2 flex items-center justify-center gap-2">
                  {product.originalPrice && (
                    <span className="text-muted line-through text-sm">
                      {product.originalPrice}
                    </span>
                  )}
                  <span className="text-primary font-semibold text-lg">
                    {product.price}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
