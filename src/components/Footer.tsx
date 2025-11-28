'use client';

import { motion } from 'framer-motion';
import { HiSparkles } from 'react-icons/hi';
import { RiCopyrightLine } from 'react-icons/ri';

export default function Footer() {
  return (
    <footer className="relative py-3 px-6 overflow-hidden border-t border-cyan-500/10">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none" />
      
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/2 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-[1500px] mx-auto relative z-10">
        {/* Copyright Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 text-gray-400"
        >
          {/* Copyright Icon with gradient */}
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="relative"
          >
            <RiCopyrightLine className="w-5 h-5 text-cyan-400" />
            {/* Glow effect */}
            <div className="absolute inset-0 blur-md">
              <RiCopyrightLine className="w-5 h-5 text-cyan-400/50" />
            </div>
          </motion.div>

          {/* Year */}
          <span className="text-sm font-medium">2025 by</span>

          {/* CraftXR with gradient */}
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="text-sm font-bold bg-linear-to-r from-cyan-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent cursor-default relative group"
          >
            CraftXR
            {/* Sparkle effect on hover */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileHover={{ opacity: 1, scale: 1 }}
              className="absolute -top-1 -right-1"
            >
              <HiSparkles className="w-3 h-3 text-cyan-400" />
            </motion.div>
          </motion.span>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 h-px w-full max-w-md mx-auto bg-linear-to-r from-transparent via-cyan-500/20 to-transparent"
        />
      </div>
    </footer>
  );
}