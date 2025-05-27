'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Star } from 'lucide-react';
import { projects } from '@/lib/data';
import { ProcessedProject } from '@/lib/getGithubRepos';

interface ProjectsClientProps {
  githubProjects?: ProcessedProject[];
}

export default function ProjectsClient({ githubProjects = [] }: ProjectsClientProps) {
  // Combine static projects with GitHub projects, prioritizing GitHub projects
  const allProjects = githubProjects.length > 0 ? [
    ...githubProjects.map(project => ({
      title: project.title,
      description: project.description,
      techStack: project.techStack,
      githubUrl: project.githubUrl,
      liveUrl: project.liveUrl,
      stars: project.stars,
      isGithubProject: true
    })),
    // Add some static projects if we have space
    ...projects.slice(0, Math.max(0, 6 - githubProjects.length)).map(project => ({
      ...project,
      isGithubProject: false,
      stars: 0
    }))
  ] : projects.map(project => ({
    ...project,
    isGithubProject: false,
    stars: 0
  }));  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600">
            {githubProjects.length > 0 
              ? "Latest projects from my GitHub repository" 
              : "A showcase of my development work"
            }
          </p>
        </motion.div>        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              className="group bg-white border-2 border-gray-200 hover:border-black transition-all duration-300 overflow-hidden rounded-lg shadow-sm hover:shadow-lg"
            >
              <div className="p-6 relative">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-black group-hover:text-gray-800 transition-colors duration-200">
                    {project.title}
                  </h3>
                  {project.isGithubProject && project.stars > 0 && (
                    <div className="flex items-center gap-1 text-gray-500">
                      <Star size={16} />
                      <span className="text-sm">{project.stars}</span>
                    </div>
                  )}
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-gray-100 text-gray-800 border border-gray-300 rounded hover:bg-gray-200 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-600 hover:text-black transition-colors duration-200"
                    >
                      <Github size={18} />
                      <span className="text-sm font-medium">GitHub</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-600 hover:text-black transition-colors duration-200"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm font-medium">Live</span>
                    </a>
                  )}                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {githubProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >            <a
              href="https://github.com/pavanlost56?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 font-medium rounded"
            >
              <Github size={20} />
              View All Repositories
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
