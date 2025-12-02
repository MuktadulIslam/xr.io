'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full h-svh max-h-[800px] flex items-center justify-center overflow-hidden">
      <div className="max-container px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold mb-6 bg-linear-to-r from-white via-emerald-200 to-teal-300 bg-clip-text text-transparent leading-tight">
            We Craft Your Imaginations
          </h1>

          <p className="text-lg md:text-2xl lg:text-3xl  text-gray-300 mb-8 max-w-3xl mx-auto">
            Immersive learning experiences - from your imagination to reality
          </p>

          <p className="text-base md:text-lg lg:text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            AI-powered evaluation and actionable feedback on{' '}
            <span className="text-emerald-400 font-semibold">Non-technical Skills (NTS)</span>
          </p>

          <div className="flex justify-center items-center">
            <button
              className="px-10 md:px-12 lg:px-16 xl:px-20 py-0.5 lg:py-1 bg-transparent border-2 border-emerald-500/50 hover:border-emerald-400 rounded-full text-emerald-300 hover:text-emerald-200 text-sm lg:text-base xl:text-lg font-semibold hover:bg-emerald-500/10 backdrop-blur-sm transition-all duration-300 flex items-center gap-2 relative group overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-1 lg:gap-2">
                Explore More
                <motion.span
                  className="text-xl lg:text-2xl xl:text-3xl"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  →
                </motion.span>
              </span>

              {/* Glossy hover shine effect */}
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <div className="absolute inset-0 bg-linear-to-b from-white/10 to-transparent" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#073030]/50 to-[#0a0a0a] pointer-events-none" />
    </section>
  );
}

