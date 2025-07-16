// src/components/cv/CVCard.jsx
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const CVCard = ({ className, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ type: 'spring', stiffness: 100, damping: 20, duration: 0.8 }}
    className={cn("rounded-2xl border border-white/5 bg-slate-900/50 p-6 backdrop-blur-xl shadow-lg", className)}
  >
    {children}
  </motion.div>
);