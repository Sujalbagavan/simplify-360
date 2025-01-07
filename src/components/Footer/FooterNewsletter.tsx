import { motion } from 'framer-motion';

export default function FooterNewsletter() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
      <p className="text-gray-400 mb-4">
        Subscribe to our newsletter for the latest updates and insights.
      </p>
      <form className="space-y-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Subscribe
        </button>
      </form>
    </motion.div>
  );
}