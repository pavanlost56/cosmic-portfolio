'use client';

import { motion } from 'framer-motion';
import { Building, Calendar, ArrowUpRight } from 'lucide-react';
import { experience } from '@/lib/data';

export default function Experience() {
  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Experience</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">Crafting solutions and building expertise</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div 
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-neutral-200"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            style={{ transformOrigin: 'top' }}
          />

          <div className="space-y-16">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  ease: "easeOut"
                }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline node */}
                <motion.div 
                  className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-2 border-neutral-900 rounded-full z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.2 }}
                />

                {/* Content card */}
                <motion.div 
                  className={`ml-16 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'
                  }`}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white p-6 rounded-lg border border-neutral-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
                    {/* Company & Duration */}
                    <div className="flex flex-col space-y-2 mb-4">
                      <motion.div 
                        className="flex items-center gap-2 text-neutral-600"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <Building className="w-4 h-4" />
                        <span className="font-medium">{exp.company}</span>
                      </motion.div>
                      
                      <motion.div 
                        className="flex items-center gap-2 text-neutral-500 text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </motion.div>
                    </div>

                    {/* Role & Description */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-neutral-700 flex items-center gap-2">
                        {exp.title}
                        <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                      
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-neutral-600 text-sm leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
