'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin,
  Send,
  MessageSquare,
  Clock,
  CheckCircle,
  AlertCircle,
  ExternalLink,
  Copy,
  Calendar
} from 'lucide-react';

export default function ContactEnhanced() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const contactInfo = {
    email: 'pavankumar22119@gmail.com',
    phone: '+91-9440926408',
    location: 'Hyderabad, India',
    availability: 'Available for opportunities'
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/pavan-kumar-ajmeera-8b3ba3318/',
      username: 'Pavan Kumar Ajmeera',
      color: 'hover:text-blue-400 hover:border-blue-400',
      bgColor: 'hover:bg-blue-400/10'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/pavanlost56',
      username: '@pavanlost56',
      color: 'hover:text-gray-400 hover:border-gray-400',
      bgColor: 'hover:bg-gray-400/10'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:pavankumar22119@gmail.com',
      username: 'pavankumar22119@gmail.com',
      color: 'hover:text-red-400 hover:border-red-400',
      bgColor: 'hover:bg-red-400/10'
    },
    {
      name: 'WhatsApp',
      icon: MessageSquare, // Placeholder for WhatsApp
      url: 'https://wa.me/919440926408',
      username: '+91-9440926408',
      color: 'hover:text-green-400 hover:border-green-400',
      bgColor: 'hover:bg-green-400/10'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const copyToClipboard = (text: string, item: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(item);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <MessageSquare className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 text-sm font-medium">Let&apos;s Connect</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Quick Contact Info */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                {/* Email */}
                <motion.div 
                  className="flex items-center gap-4 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500">Email</p>
                    <div className="flex items-center gap-2">
                      <a href={`mailto:${contactInfo.email}`} className="text-gray-300 hover:text-white transition-colors">
                        {contactInfo.email}
                      </a>
                      <button
                        onClick={() => copyToClipboard(contactInfo.email, 'email')}
                        className="text-gray-500 hover:text-gray-300 transition-colors"
                      >
                        {copiedItem === 'email' ? (
                          <CheckCircle className="w-4 h-4 text-green-400" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div 
                  className="flex items-center gap-4 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500">Phone</p>
                    <div className="flex items-center gap-2">
                      <a href={`tel:${contactInfo.phone}`} className="text-gray-300 hover:text-white transition-colors">
                        {contactInfo.phone}
                      </a>
                      <button
                        onClick={() => copyToClipboard(contactInfo.phone, 'phone')}
                        className="text-gray-500 hover:text-gray-300 transition-colors"
                      >
                        {copiedItem === 'phone' ? (
                          <CheckCircle className="w-4 h-4 text-green-400" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>

                {/* Location */}
                <motion.div 
                  className="flex items-center gap-4 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-gray-300">{contactInfo.location}</p>
                  </div>
                </motion.div>

                {/* Availability */}
                <motion.div 
                  className="flex items-center gap-4 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Clock className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Status</p>
                    <p className="text-green-400 font-medium">{contactInfo.availability}</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
              
              <div className="grid grid-cols-1 gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-4 p-4 bg-gray-800/30 border border-gray-700/50 rounded-xl transition-all ${social.color} ${social.bgColor}`}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Icon className="w-5 h-5" />
                      <div className="flex-1">
                        <p className="font-medium">{social.name}</p>
                        <p className="text-sm text-gray-500">{social.username}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-500" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>

              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="Project Collaboration"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-purple-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-green-400"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span>Message sent successfully!</span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-red-400"
                  >
                    <AlertCircle className="w-5 h-5" />
                    <span>Failed to send message. Please try again.</span>
                  </motion.div>
                )}
              </div>
            </form>

            {/* Quick Actions */}
            <motion.div
              className="mt-6 p-6 bg-gradient-to-r from-purple-600/10 to-blue-600/10 border border-purple-500/20 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-purple-400" />
                <p className="text-gray-300">
                  Prefer to schedule a call? 
                  <a href="#" className="text-purple-400 hover:text-purple-300 ml-2 font-medium">
                    Book a meeting
                  </a>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
