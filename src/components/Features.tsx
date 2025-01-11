import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageSquare, BarChart2, Users2, Bot, Zap, Shield } from 'lucide-react';

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Social Inbox",
      description: "Manage all social media messages, comments and reviews from a single dashboard",
    },
    {
      icon: <BarChart2 className="w-8 h-8" />,
      title: "Analytics & Reports",
      description: "Get detailed insights and analytics about your social media performance",
      link: "/charts/index.html", 
    },
    {
      icon: <Users2 className="w-8 h-8" />,
      title: "Team Collaboration",
      description: "Work together seamlessly with role-based access and workflows",
      link: "/msg/msg.html", 
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI Chatbot",
      description: "Automate responses with intelligent chatbots powered by advanced AI",
      link: "/langflow/index.html",  // Link for the AI Chatbot button
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Quick Actions",
      description: "Respond faster with templated responses and automated workflows",
       link: "/charts/quick.html"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-grade security with advanced encryption and compliance",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Features that Set Us Apart
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to deliver exceptional social media management and customer experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>

              {feature.link ? (
                <a href={feature.link}>
                  <button className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
                    Learn More
                  </button>
                </a>
              ) : (
                <button className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
                  Learn More
                </button>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80"
              alt="Platform Overview"
              className="w-full rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
