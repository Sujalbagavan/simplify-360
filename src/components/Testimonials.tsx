import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Head of Customer Experience",
      company: "Global Retail Co.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
      quote: "Simplify360 has transformed how we handle social media. Our response time has improved by 60% and customer satisfaction is at an all-time high."
    },
    {
      name: "Michael Chen",
      role: "Digital Marketing Director",
      company: "Tech Innovations Inc.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      quote: "The AI-powered features have revolutionized our social media management. We're handling 3x more inquiries with the same team size."
    },
    {
      name: "Emma Williams",
      role: "Social Media Manager",
      company: "E-commerce Leaders",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
      quote: "The analytics and reporting features give us invaluable insights. We've increased our engagement rates by 45% since switching."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600">
            See how leading brands are transforming their social media presence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              <Quote className="w-10 h-10 text-blue-600 mb-4" />
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">{testimonial.quote}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}