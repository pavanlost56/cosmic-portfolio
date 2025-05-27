'use client';

import { motion } from 'framer-motion';
import { skills } from '@/lib/data';
import { 
  Code2, 
  Database, 
  Server, 
  Wrench,
  Globe,
  Layout,
  FileJson,
  Blocks,
  Box,
  Cpu,
  PenTool,
  Wind,
  Terminal,
  PackageOpen,
  Zap,
  Webhook
} from 'lucide-react';

const skillIcons: { [key: string]: any } = {
  // Frontend
  'HTML': Layout,
  'CSS': PenTool,
  'JavaScript': FileJson,
  'React.js': Blocks,
  'Next.js': Box,
  'Tailwind CSS': Wind,
  
  // Backend
  'Node.js': Server,
  'Python': Terminal,
  'Spring Boot': Cpu,
  'REST APIs': Webhook,
  
  // Databases
  'SQL': Database,
  'MongoDB': Database,
  'ChromaDB': Database,
  'SQLite': Database,
  
  // Tools
  'VS Code': Code2,
  'GoLand IDE': Code2,
  'Docker': Box,
  'Git/GitHub': Code2,
  'npm': PackageOpen,
  'Vite': Zap
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      delay: i * 0.05,
      duration: 0.8
    }
  })
};

export default function Skills() {
  const categories = ['Frontend', 'Backend', 'Databases', 'Tools'] as const;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Skills & Technologies</h2>
          <p className="text-xl text-gray-600">Technical expertise across the full stack</p>
        </motion.div>

        <div className="space-y-16">
          {categories.map((category, categoryIndex) => (
            <div key={category} className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-black">
                  {category === 'Frontend' && <Layout className="w-5 h-5 text-white" />}
                  {category === 'Backend' && <Server className="w-5 h-5 text-white" />}
                  {category === 'Databases' && <Database className="w-5 h-5 text-white" />}
                  {category === 'Tools' && <Wrench className="w-5 h-5 text-white" />}
                </div>
                <h3 className="text-2xl font-bold text-black">{category}</h3>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
              >
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => {
                    const IconComponent = skillIcons[skill.name] || Code2;
                    return (
                      <motion.div
                        key={skill.name}
                        variants={itemVariants}
                        custom={index}
                        whileHover={{
                          scale: 1.05,
                          transition: { duration: 0.2 }
                        }}
                        className="bg-white p-6 rounded-lg border border-gray-200 hover:border-gray-400 hover:shadow-lg transition-all duration-300"
                      >
                        <div className="space-y-4">
                          <div className="flex flex-col items-center gap-2">
                            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300">
                              <IconComponent className="w-6 h-6 text-black" />
                            </div>
                            <h4 className="font-bold text-black text-center">{skill.name}</h4>
                            <div className="text-sm text-gray-600">{skill.level}%</div>
                          </div>
                          
                          <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{
                                duration: 1,
                                delay: index * 0.1,
                                ease: "easeOut"
                              }}
                              viewport={{ once: true }}
                              className="h-full bg-black rounded-full"
                            />
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
