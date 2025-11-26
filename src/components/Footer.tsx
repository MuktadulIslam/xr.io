'use client';

import { motion } from 'framer-motion';

const footerLinks = {
  Product: ['Features', 'Pricing', 'Demo', 'Updates'],
  Company: ['About Us', 'Careers', 'Blog', 'Press'],
  Resources: ['Documentation', 'Tutorials', 'Support', 'Community'],
  Legal: ['Privacy', 'Terms', 'Security', 'Cookies'],
};

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-gradient-to-b from-transparent to-[#041818] border-t border-emerald-500/20 pt-20 pb-10">
      <div className="max-container px-6">
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          {/* Brand section */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-emerald-300 bg-clip-text text-transparent mb-4">
                CraftXR
              </h3>
              <p className="text-gray-400 mb-6 max-w-sm">
                Empowering educators to create immersive VR training experiences with AI-powered evaluation tools.
              </p>
              <div className="flex gap-4">
                {['twitter', 'linkedin', 'github', 'youtube'].map((social, index) => (
                  <motion.a
                    key={social}
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
                    className="w-10 h-10 bg-emerald-500/10 hover:bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
                  >
                    <span className="text-xl">
                      {social === 'twitter' && '𝕏'}
                      {social === 'linkedin' && 'in'}
                      {social === 'github' && '⚡'}
                      {social === 'youtube' && '▶'}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links sections */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
            >
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-emerald-500/20 pt-12 mb-12"
        >
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-xl font-semibold text-white mb-3">
              Stay Updated
            </h4>
            <p className="text-gray-400 mb-6 text-sm">
              Get the latest updates on new features and VR education trends
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/5 border border-emerald-500/30 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 transition-colors duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-white font-semibold shadow-lg hover:shadow-emerald-500/50 transition-shadow duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500"
        >
          <p>© 2025 CraftXR. All rights reserved.</p>
          <p>
            Built with <span className="text-emerald-400">♥</span> for educators worldwide
          </p>
        </motion.div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500" />
    </footer>
  );
}

