import { motion } from 'framer-motion';

interface FooterLinksProps {
  secondary?: boolean;
}

export default function FooterLinks({ secondary = false }: FooterLinksProps) {
  const links = secondary ? [
    { title: 'Resources', items: ['Blog', 'Case Studies', 'Webinars', 'Documentation'] },
  ] : [
    { title: 'Company', items: ['About', 'Careers', 'Contact', 'Press'] },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {links.map((section) => (
        <div key={section.title}>
          <h3 className="text-xl font-bold mb-4">{section.title}</h3>
          <ul className="space-y-2">
            {section.items.map((item) => (
              <li key={item}>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </motion.div>
  );
}