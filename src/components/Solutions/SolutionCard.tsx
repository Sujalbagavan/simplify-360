import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SolutionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  index: number;
  inView: boolean;
}

export default function SolutionCard({ 
  icon: Icon, 
  title, 
  description, 
  image, 
  index, 
  inView 
}: SolutionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <Icon className="w-6 h-6 text-blue-600 mr-2" />
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}