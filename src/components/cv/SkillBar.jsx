// src/components/cv/SkillBar.jsx
import { motion } from 'framer-motion';

export const SkillBar = ({ skill, delay = 0 }) => (
  <div>
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium text-slate-200">{skill.name}</span>
      <span className="text-sm font-medium text-cyan-400">{skill.level}%</span>
    </div>
    <div className="w-full bg-slate-700/50 rounded-full h-2">
      <motion.div
        className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay, ease: "easeOut" }}
      />
    </div>
  </div>
);