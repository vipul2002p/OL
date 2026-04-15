import { motion } from 'framer-motion';

const stats = [
  { number: '500+', label: 'Clinics Worldwide' },
  { number: '50+', label: 'Countries Served' },
  { number: '15+', label: 'Years of Innovation' },
  { number: '99%', label: 'Client Satisfaction' },
];

export default function StatsBar() {
  return (
    <section className="bg-gold py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
              </h3>
              <p className="text-white/80 text-sm tracking-widest uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
