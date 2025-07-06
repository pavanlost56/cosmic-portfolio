'use client';

import { motion } from 'framer-motion';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiJavascript, 
  SiPython, 
  SiDocker, 
  SiGit, 
  SiTailwindcss, 
  SiSpring,
  SiHtml5,
  SiCss3,
  SiGo,
  SiTensorflow,
  SiPytorch,
  SiNumpy,
  SiPandas,
  SiPostman,
  SiIntellijidea,
  SiPycharm,
  SiRender,
  SiGoland
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { BsGithub } from 'react-icons/bs';
import { FaJava } from 'react-icons/fa';

interface TechCategory {
  name: string;
  color: string;
  techs: Array<{
    name: string;
    icon: React.ElementType;
    years: string;
    proficiency: 'Expert' | 'Advanced' | 'Intermediate';
  }>;
}

const techCategories: TechCategory[] = [
  {
    name: 'Frontend',
    color: 'from-blue-400 to-cyan-400',
    techs: [
      { name: 'HTML', icon: SiHtml5, years: '2+ years', proficiency: 'Expert' },
      { name: 'CSS', icon: SiCss3, years: '2+ years', proficiency: 'Expert' },
      { name: 'JavaScript', icon: SiJavascript, years: '2+ years', proficiency: 'Expert' },
      { name: 'TypeScript', icon: SiTypescript, years: '1+ year', proficiency: 'Advanced' },
      { name: 'React.js', icon: SiReact, years: '1+ year', proficiency: 'Advanced' },
      { name: 'Next.js', icon: SiNextdotjs, years: '1+ year', proficiency: 'Advanced' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, years: '1+ year', proficiency: 'Expert' },
    ],
  },
  {
    name: 'Backend',
    color: 'from-purple-400 to-pink-400',
    techs: [
      { name: 'Go', icon: SiGo, years: '1+ year', proficiency: 'Intermediate' },
      { name: 'Python', icon: SiPython, years: '2+ years', proficiency: 'Expert' },
      { name: 'Java', icon: FaJava, years: '1+ year', proficiency: 'Advanced' },
      { name: 'Spring Boot', icon: SiSpring, years: '1+ year', proficiency: 'Intermediate' },
      { name: 'REST APIs', icon: SiPostman, years: '2+ years', proficiency: 'Advanced' },
    ],
  },
  {
    name: 'ML/DL',
    color: 'from-green-400 to-teal-400',
    techs: [
      { name: 'Python', icon: SiPython, years: '2+ years', proficiency: 'Expert' },
      { name: 'NumPy', icon: SiNumpy, years: '2+ years', proficiency: 'Expert' },
      { name: 'pandas', icon: SiPandas, years: '2+ years', proficiency: 'Expert' },
      { name: 'Matplotlib', icon: SiPython, years: '2+ years', proficiency: 'Advanced' },
      { name: 'TensorFlow', icon: SiTensorflow, years: '1+ year', proficiency: 'Advanced' },
      { name: 'PyTorch', icon: SiPytorch, years: '1+ year', proficiency: 'Intermediate' },
    ],
  },
  {
    name: 'Tools & DevOps',
    color: 'from-orange-400 to-yellow-400',
    techs: [
      { name: 'Git', icon: SiGit, years: '2+ years', proficiency: 'Expert' },
      { name: 'GitHub CLI', icon: BsGithub, years: '1+ year', proficiency: 'Advanced' },
      { name: 'Docker', icon: SiDocker, years: '1+ year', proficiency: 'Intermediate' },
      { name: 'Postman', icon: SiPostman, years: '2+ years', proficiency: 'Expert' },
      { name: 'VSCode', icon: VscVscode, years: '2+ years', proficiency: 'Expert' },
      { name: 'Render', icon: SiRender, years: '1+ year', proficiency: 'Advanced' },
      { name: 'IntelliJ', icon: SiIntellijidea, years: '1+ year', proficiency: 'Advanced' },
      { name: 'GoLand', icon: SiGoland, years: '1+ year', proficiency: 'Advanced' },
      { name: 'PyCharm', icon: SiPycharm, years: '2+ years', proficiency: 'Expert' },
    ],
  },
];

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function TechStack() {
  return (
    <section id="techstack" className="py-20 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Tech Stack Journey</h2>
          <p className="text-gray-400 text-lg">Technologies I&apos;ve worked with throughout my career</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {techCategories.map((category) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              className="bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-800 p-8"
            >
              <h3 className={`text-2xl font-bold mb-8 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.name}
              </h3>
              
              <div className="flex flex-wrap gap-4">
                {category.techs.map((tech, index) => {
                  const Icon = tech.icon;
                  return (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ 
                        delay: index * 0.05,
                        type: "spring",
                        stiffness: 100
                      }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.1, 
                        y: -5,
                        transition: { type: "spring", stiffness: 400 }
                      }}
                      className="group cursor-pointer"
                    >
                      <div className="relative">
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Card */}
                        <div className="relative bg-gray-900/30 backdrop-blur-xl p-5 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-purple-500/20">
                          <div className="flex items-center gap-4">
                            <div className="relative">
                              <Icon 
                                size={32} 
                                className="text-gray-400 group-hover:text-white transition-all duration-300"
                              />
                              {tech.proficiency === 'Expert' && (
                                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" />
                              )}
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">
                                {tech.name}
                              </p>
                              <p className="text-xs text-gray-500">{tech.years}</p>
                            </div>
                          </div>
                          
                          {/* Proficiency badge */}
                          <div className="mt-3">
                            <span className={`inline-block px-2 py-1 text-[10px] font-medium rounded-full ${
                              tech.proficiency === 'Expert' 
                                ? 'bg-green-400/20 text-green-400 border border-green-400/30' 
                                : tech.proficiency === 'Advanced' 
                                ? 'bg-blue-400/20 text-blue-400 border border-blue-400/30'
                                : 'bg-yellow-400/20 text-yellow-400 border border-yellow-400/30'
                            }`}>
                              {tech.proficiency}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
