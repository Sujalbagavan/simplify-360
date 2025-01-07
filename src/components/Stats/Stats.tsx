import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from './CountUp';

export default function Stats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { value: 98, suffix: '%', label: 'Customer Satisfaction' },
    { value: 50, suffix: 'K+', label: 'Active Users' },
    { value: 24, suffix: '/7', label: 'Support' },
    { value: 120, suffix: '+', label: 'Countries' },
  ];

  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="text-4xl font-bold mb-2">
                <CountUp end={stat.value} inView={inView} />
                {stat.suffix}
              </div>
              <div className="text-blue-100">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}