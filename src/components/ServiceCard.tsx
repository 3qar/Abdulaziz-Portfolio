import React from 'react';
import * as Icons from 'lucide-react';
import { motion } from 'motion/react';

interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    description: string;
    icon: string;
  };
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  // @ts-ignore
  const Icon = Icons[service.icon] || Icons.HelpCircle;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="p-8 bg-white border border-brand-100 rounded-2xl hover:border-brand-900 transition-all duration-300 group"
    >
      <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-900 transition-colors duration-300">
        <Icon className="w-6 h-6 text-brand-900 group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-bold text-brand-900 mb-3">{service.title}</h3>
      <p className="text-brand-600 text-sm leading-relaxed">
        {service.description}
      </p>
    </motion.div>
  );
};

export default ServiceCard;
