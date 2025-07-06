'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { personalInfo } from '@/lib/data';
import Image from 'next/image';

export default function ContactForm() {
  return (
    <section className="py-20 bg-[#0a0a0f]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Profile Photo */}
          <motion.div
            className="mb-8 inline-block"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-[2px]">
              <div className="w-full h-full bg-[#0a0a0f] rounded-full overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt={personalInfo.name}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Let&apos;s Build Something Amazing</h2>
          <p className="text-gray-400 text-lg mb-8">
            Looking for a full-stack developer who can architect and implement complete solutions? Let&apos;s discuss your project.
          </p>

          {/* Location */}
          <motion.p
            className="text-gray-500 mb-10 flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            Hyderabad, India
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="mailto:pavankumar22119@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} />
              Get in Touch
            </motion.a>
            <motion.a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Twitter size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
