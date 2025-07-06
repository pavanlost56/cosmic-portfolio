'use client';

import { motion } from 'framer-motion';
import { skills } from '@/lib/data';
import { 
  Brain, 
  Code2, 
  Database, 
  Layout, 
  Wrench,
  Sparkles,
  Cpu,
  Globe,
  Terminal,
  GitBranch,
  Box,
  Layers,
  Zap,
  Activity
} from 'lucide-react';

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

// Icon mapping for different skills
const skillIcons: { [key: string]: React.ElementType } = {
  // ML/AI
  'TensorFlow': Brain,
  'PyTorch': Cpu,
  'NumPy': Activity,
  'Pandas': Database,
  'Scikit-learn': Sparkles,
  'Matplotlib': Activity,
  // Backend
  'Python': Code2,
  'Java': Code2,
  'Go': Zap,
  'Spring Boot': Layers,
  'REST APIs': Globe,
  // Frontend
  'React.js': Layout,
  'Next.js': Layout,
  'TypeScript': Code2,
  'JavaScript': Code2,
  'HTML': Globe,
  'CSS': Layout,
  'Tailwind CSS': Layout,
  // Databases
  'MongoDB': Database,
  'PostgreSQL': Database,
  'SQL': Database,
  'SQLite': Database,
  // Tools
  'Git/GitHub': GitBranch,
  'Docker': Box,
  'VS Code': Terminal,
  'PyCharm': Terminal,
  'GoLand': Terminal,
  'IntelliJ IDEA': Terminal,
  'Postman': Globe,
  'GitHub CLI': GitBranch,
  'Codespaces': Globe,
  'Render': Globe
};

export default function Skills() {
  // Group skills by category
  const frontendSkills = skills.filter(s => s.category === 'Frontend');
  const backendSkills = skills.filter(s => s.category === 'Backend');
  const databaseSkills = skills.filter(s => s.category === 'Databases');
  const toolsSkills = skills.filter(s => s.category === 'Tools');
  const mlaiSkills = skills.filter(s => s.category === 'ML/AI');

  const skillGroups = [
    { 
      title: 'ML/AI & Data Science', 
      skills: mlaiSkills, 
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-500/10 to-pink-500/10',
      icon: Brain 
    },
    { 
      title: 'Backend Development', 
      skills: backendSkills, 
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-500/10 to-red-500/10',
      icon: Code2 
    },
    { 
      title: 'Frontend Development', 
      skills: frontendSkills, 
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-500/10 to-cyan-500/10',
      icon: Layout 
    },
    { 
      title: 'Databases', 
      skills: databaseSkills, 
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-500/10 to-emerald-500/10',
      icon: Database 
    },
    { 
      title: 'Tools & DevOps', 
      skills: toolsSkills, 
      color: 'from-yellow-500 to-amber-500',
      bgColor: 'from-yellow-500/10 to-amber-500/10',
      icon: Wrench 
    }
  ];

  return (
    <section className="py-20 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Skills & Expertise
          </motion.h2>
          <motion.p
            className="text-lg text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Mastering cutting-edge technologies across the full stack
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {skillGroups.map((group, groupIndex) => {
            const GroupIcon = group.icon;
            return (
              <motion.div
                key={group.title}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${group.bgColor} rounded-2xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-300`} />
                <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300 h-full">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${group.bgColor} backdrop-blur-sm`}>
                      <GroupIcon className={`w-7 h-7 text-white`} />
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold bg-gradient-to-r ${group.color} bg-clip-text text-transparent`}>
                        {group.title}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">{group.skills.length} technologies</p>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="space-y-3">
                    {group.skills.slice(0, 8).map((skill, index) => {
                      const SkillIcon = skillIcons[skill.name] || Code2;
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: groupIndex * 0.1 + index * 0.03 }}
                          viewport={{ once: true }}
                          whileHover={{ x: 8, scale: 1.02 }}
                          className="group/skill relative"
                        >
                          <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-800/30 hover:bg-gray-800/60 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300">
                            <div className="p-2 rounded-lg bg-gray-700/30 group-hover/skill:bg-gray-700/50 transition-colors">
                              <SkillIcon className="w-5 h-5 text-gray-400 group-hover/skill:text-white transition-colors" />
                            </div>
                            <span className="text-base font-medium text-gray-300 group-hover/skill:text-white transition-colors">
                              {skill.name}
                            </span>
                          </div>
                        </motion.div>
                      );
                    })}
                    {group.skills.length > 8 && (
                      <div className="text-center pt-2">
                        <span className="text-sm text-gray-500">+{group.skills.length - 8} more</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom decoration */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-gray-400">Continuously learning and evolving</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
