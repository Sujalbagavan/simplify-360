import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SolutionCard from './SolutionCard';
import { solutions } from './solutionsData';

export default function Solutions() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Solutions for Every Industry
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored solutions to meet the unique challenges of your industry
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard key={index} {...solution} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}