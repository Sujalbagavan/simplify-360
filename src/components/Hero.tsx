import { motion } from 'framer-motion';
import { ArrowRight, Bot, Shield, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-6xl font-bold text-gray-900 mb-8 leading-tight">
            The Most Complete{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Social Media Management
            </span>{' '}
            Platform
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Simplify360 helps brands deliver exceptional customer experience across social media, 
            messaging and community platforms
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all flex items-center gap-2"
            >
              Get Started Free <ArrowRight className="w-5 h-5" />
            </motion.button>
            <button className="text-gray-700 px-8 py-4 rounded-full font-semibold text-lg border-2 border-gray-200 hover:border-gray-300 transition-colors">
              Watch Demo
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Bot className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered</h3>
              <p className="text-gray-600">Smart automation for faster responses</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Globe className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Omnichannel</h3>
              <p className="text-gray-600">Manage all platforms in one place</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
              <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Shield className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Enterprise-Ready</h3>
              <p className="text-gray-600">Secure and scalable solution</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                alt="Dashboard Preview"
                className="w-full rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}