'use client';

import { motion } from 'framer-motion';
import { Award, Star, GitBranch, Zap, Users, Code2 } from 'lucide-react';
import Image from 'next/image';

const badges = [
  {
    name: 'Arctic Code Vault Contributor',
    description: 'Contributed code to the 2020 Arctic Code Vault',
    image: '/badges/arctic-code-vault.png',
    year: '2020',
    color: 'from-blue-400 to-cyan-400',
    animation: 'float',
  },
  {
    name: 'Pull Shark',
    description: 'Opened pull requests that have been merged',
    image: '/badges/pull-shark.png',
    color: 'from-purple-400 to-pink-400',
    animation: 'swim',
  },
  {
    name: 'Quickdraw',
    description: 'Gitty up! Closed an issue or pull request within 5 minutes',
    image: '/badges/quickdraw.png',
    color: 'from-yellow-400 to-orange-400',
    animation: 'pulse',
  },
  {
    name: 'YOLO',
    description: 'Merged a pull request without code review',
    image: '/badges/yolo.png',
    color: 'from-red-400 to-pink-400',
    animation: 'spin',
  },
  {
    name: 'Pair Extraordinaire',
    description: 'Coauthored commits on merged pull requests',
    image: '/badges/pair-extraordinaire.png',
    color: 'from-green-400 to-teal-400',
    animation: 'bounce',
  },
  {
    name: 'Starstruck',
    description: 'Created a repository that has 16 or more stars',
    image: '/badges/starstruck.png',
    color: 'from-amber-400 to-yellow-400',
    animation: 'sparkle',
  },
];

// Your actual GitHub stats
const achievements = [
  { label: 'Repositories', value: '10', icon: GitBranch },
  { label: 'Stars Earned', value: '25+', icon: Star },
  { label: 'Contributions', value: '150+', icon: Code2 },
  { label: 'Followers', value: '5', icon: Users },
];

// Badge Display Component
function BadgeDisplay({ badge }: { badge: typeof badges[0] }) {
  return (
    <div className="relative w-24 h-24">
      <Image
        src={badge.image}
        alt={badge.name}
        width={96}
        height={96}
        className="object-contain"
        priority
      />
    </div>
  );
}

export default function GitHubBadges() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="w-6 h-6 text-purple-400" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              GitHub Achievements
            </h2>
            <Award className="w-6 h-6 text-purple-400" />
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Badges and achievements earned through contributions to open source projects
          </p>
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center hover:border-purple-500/50 transition-all"
            >
              <achievement.icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">
                {achievement.value}
              </div>
              <div className="text-sm text-gray-400">{achievement.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Badges Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {badges.map((badge, index) => (
            <motion.div
              key={badge.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition-all overflow-hidden">
                {/* Badge Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${badge.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                
                {/* Badge Content */}
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    {/* Badge with Animation */}
                    <motion.div
                      animate={
                        badge.animation === 'float' ? {
                          y: [0, -10, 0],
                        } : badge.animation === 'swim' ? {
                          x: [-5, 5, -5],
                          rotate: [-5, 5, -5],
                        } : badge.animation === 'pulse' ? {
                          scale: [1, 1.1, 1],
                        } : badge.animation === 'spin' ? {
                          rotate: [0, 360],
                        } : badge.animation === 'bounce' ? {
                          y: [0, -5, 0],
                        } : badge.animation === 'sparkle' ? {
                          scale: [1, 1.05, 1],
                          rotate: [-2, 2, -2],
                        } : {}
                      }
                      transition={{
                        duration: badge.animation === 'spin' ? 3 : 2,
                        repeat: Infinity,
                        ease: badge.animation === 'bounce' ? "easeInOut" : "linear",
                      }}
                    >
                      <BadgeDisplay badge={badge} />
                    </motion.div>
                    {badge.year && (
                      <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded-full">
                        {badge.year}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {badge.name}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {badge.description}
                  </p>
                </div>

                {/* Hover Gradient */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${badge.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub Profile Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/pavanlost56"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all"
          >
            <Zap className="w-4 h-4" />
            View All Achievements on GitHub
          </a>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
