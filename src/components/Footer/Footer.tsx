import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import FooterLinks from './FooterLinks';
import FooterNewsletter from './FooterNewsletter';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-bold mb-4">About Simplify360</h3>
            <p className="text-gray-400 mb-6">
              Empowering businesses with AI-driven customer experience solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram />
              </a>
            </div>
          </motion.div>

          <FooterLinks />
          <FooterLinks secondary />
          <FooterNewsletter />
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Simplify360. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}