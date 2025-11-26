'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden pt-32 2xl:pt-52 pb-20">
      <div className="max-container px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl 2xl:text-8xl font-bold mb-6 bg-linear-to-r from-white via-emerald-200 to-teal-300 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            We Craft Your Imaginations
          </motion.h1>

          <motion.p
            className="text-xl md:text-3xl  text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Immersive learning experiences - from your imagination to reality
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            AI-powered evaluation and actionable feedback on{' '}
            <span className="text-emerald-400 font-semibold">Non-technical Skills (NTS)</span>
          </motion.p>

          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-20 py-1 bg-transparent border-2 border-emerald-500/50 hover:border-emerald-400 rounded-full text-emerald-300 hover:text-emerald-200 text-lg font-semibold hover:bg-emerald-500/10 backdrop-blur-sm transition-all duration-300 flex items-center gap-2 relative group overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore More
                <motion.span
                  className="text-3xl"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  →
                </motion.span>
              </span>
              {/* Subtle hover gradient effect */}
              <div className="absolute inset-0 bg-linear-to-r from-emerald-500/0 via-emerald-500/10 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#073030]/50 to-[#0a0a0a] pointer-events-none" />
    </section>
  );
}

