import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import NavLinks from './NavLinks';
import NavLogo from './NavLogo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <NavLogo />
          
          <div className="hidden md:block">
            <NavLinks />
          </div>

          <div className="hidden md:block">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Request Demo
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLinks mobile />
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}