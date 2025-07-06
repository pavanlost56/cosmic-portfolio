'use client';

import { motion } from 'framer-motion';
import { ProcessedProject } from '@/lib/getGithubRepos';
import { Code2, Github, ExternalLink, Star } from 'lucide-react';

interface ProjectsClientProps {
  githubProjects?: ProcessedProject[];
}

export default function ProjectsClient({ githubProjects = [] }: ProjectsClientProps) {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="py-20 bg-[#0a0a0f] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 -left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", duration: 0.8 }}
              className="inline-block mb-4"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
                <Code2 className="w-8 h-8 text-white" />
              </div>
            </motion.div>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">Projects</h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explore my GitHub repositories and open source contributions
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {githubProjects.length > 0 ? (
              githubProjects.map((project, index) => (
              <motion.div
                key={project.githubUrl}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="relative group h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/10 group-hover:to-blue-600/10 rounded-xl blur-xl transition-all duration-500" />
                
                <div className="relative h-full bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-800 group-hover:border-purple-500/50 p-6 transition-all duration-300 flex flex-col">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h4>
                    <div className="flex items-center gap-2">
                      {project.stars > 0 && (
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                          className="flex items-center gap-1 text-yellow-400"
                        >
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-sm">{project.stars}</span>
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4 flex-grow line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 4).map((tech, i) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + i * 0.05 }}
                        className="px-2 py-1 text-xs font-medium bg-gray-800/50 text-gray-300 rounded-full border border-gray-700"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-800">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                    </motion.a>
                    {project.liveUrl && (
                      <>
                        <span className="text-gray-700">|</span>
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-gray-400 hover:text-purple-400 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </motion.a>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
              ))
            ) : (
              <motion.div
                className="col-span-full text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full mb-4">
                  <Github className="w-8 h-8 text-gray-600" />
                </div>
                <p className="text-gray-400 mb-4">Loading GitHub projects...</p>
                <p className="text-sm text-gray-500">If projects don&apos;t appear, they will be fetched on the next build.</p>
              </motion.div>
            )}
          </motion.div>

          {/* View More Button */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://github.com/pavanlost56"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
              View All Projects on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
