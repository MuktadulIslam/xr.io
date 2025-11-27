'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const evaluationFeatures = [
  {
    title: 'Realistic Interactions',
    description:
      'Experience workplace-specific situations that replicate natural interactions that matter most in clinical or workplace settings: communication under pressure, conflict de-escalation, cultural sensitivity, and team coordination.',
    image: '/realistic_interactions.png',
    gradient: 'from-emerald-500 to-teal-600',
    borderColor: 'border-emerald-500/30',
  },
  {
    title: 'AI-powered Evaluation',
    description:
      'Get an objective evaluation of your non-technical skills based on your concrete observable behavior, consisting of verbal and non-verbal language.',
    image: '/ai_powered_evaluation.png',
    gradient: 'from-cyan-500 to-blue-600',
    borderColor: 'border-cyan-500/30',
  },
  {
    title: 'Actionable Feedback',
    description:
      'Focus on what to improve, not just what went wrong. Get unbiased evaluation with specific, actionable insights on performance.',
    image: '/actionable_feedback.png',
    gradient: 'from-purple-500 to-pink-600',
    borderColor: 'border-purple-500/30',
  },
];

function FeatureCard({ feature, index }: { feature: typeof evaluationFeatures[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative group w-full"
    >
      {/* Glow effect on hover */}
      <div className={`absolute inset-0 bg-linear-to-r ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl blur-xl -z-10`} />
      
      <div className={`relative bg-linear-to-br from-[#073030]/80 to-[#0a4444]/80 backdrop-blur-sm rounded-2xl border ${feature.borderColor} hover:border-opacity-60 transition-all duration-300 overflow-hidden h-full flex flex-col`}>
        {/* Step Number Badge */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
          className="absolute top-4 left-4 z-10"
        >
          <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-linear-to-br ${feature.gradient} flex items-center justify-center shadow-lg border-2 border-white/20`}>
            <span className="text-white font-bold text-xl sm:text-2xl">
              {index + 1}
            </span>
          </div>
        </motion.div>

        {/* Image Section */}
        <div className="relative w-full aspect-video overflow-hidden">
          <Image
            src={feature.image}
            alt={feature.title}
            fill
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-[#073030] via-transparent to-transparent" />
        </div>

        {/* Content Section */}
        <div className="p-2 sm:p-4 flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-gray-400 font-semibold text-sm sm:text-base">STEP {index + 1}</span>
            <div className={`flex-1 h-px bg-linear-to-r ${feature.gradient} opacity-50`} />
          </div>
          
          <h3 className={`text-2xl sm:text-3xl font-bold mb-2 bg-linear-to-r ${feature.gradient} bg-clip-text text-transparent`}>
            {feature.title}
          </h3>

          <p className="text-gray-200 leading-relaxed text-base sm:text-lg flex-1">
            {feature.description}
          </p>
        </div>

        {/* Bottom accent line */}
        <motion.div
          className={`absolute bottom-0 left-0 h-1 bg-linear-to-r ${feature.gradient}`}
          initial={{ width: 0 }}
          animate={isInView ? { width: '100%' } : { width: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
        />
      </div>
    </motion.div>
  );
}

export default function NTSEvaluation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="nts-evaluation" className="relative py-20 px-6 overflow-hidden">
      <div className="max-container">
        {/* Header Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-linear-to-r from-emerald-300 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
            Flagship Product: NTS Evaluation
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            An AI-evaluator for your non-technical skills.{' '}
            <Link 
              href="#learn-more" 
              className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 underline decoration-cyan-400/50 hover:decoration-cyan-300 underline-offset-4"
            >
              Learn more...
            </Link>
          </p>
        </motion.div>

        {/* Features Grid with Step Connectors */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 lg:gap-12 mb-8 relative">
          {evaluationFeatures.map((feature, index) => (
            <div key={index} className="relative flex">
              <FeatureCard feature={feature} index={index} />
              
              {/* Desktop: Horizontal Arrow Connector */}
              {index < evaluationFeatures.length - 1 && (
                <>
                  {/* Desktop Arrow */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                    className="hidden md:block absolute top-1/2 -right-2 lg:-right-5.5 translate-x-1/2 -translate-y-1/2 z-20"
                  >
                    <div className="relative">
                      <motion.svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        className="drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        <defs>
                          <linearGradient id={`arrow-gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#10b981" />
                            <stop offset="50%" stopColor="#14b8a6" />
                            <stop offset="100%" stopColor="#06b6d4" />
                          </linearGradient>
                        </defs>
                        <circle cx="20" cy="20" r="18" fill="rgba(7, 48, 48, 0.8)" stroke={`url(#arrow-gradient-${index})`} strokeWidth="2" />
                        <path
                          d="M14 20H26M26 20L22 16M26 20L22 24"
                          stroke={`url(#arrow-gradient-${index})`}
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </motion.svg>
                    </div>
                  </motion.div>

                  {/* Mobile: Vertical Arrow Connector */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                    className="md:hidden absolute -bottom-6 left-1/2 -translate-x-1/2 translate-y-1/2 z-20"
                  >
                    <div className="relative">
                      <motion.svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        className="drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]"
                        animate={{ y: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        <defs>
                          <linearGradient id={`arrow-gradient-mobile-${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#10b981" />
                            <stop offset="50%" stopColor="#14b8a6" />
                            <stop offset="100%" stopColor="#06b6d4" />
                          </linearGradient>
                        </defs>
                        <circle cx="20" cy="20" r="18" fill="rgba(7, 48, 48, 0.8)" stroke={`url(#arrow-gradient-mobile-${index})`} strokeWidth="2" />
                        <path
                          d="M20 14V26M20 26L16 22M20 26L24 22"
                          stroke={`url(#arrow-gradient-mobile-${index})`}
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </motion.svg>
                    </div>
                  </motion.div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <Link 
            href="#how-it-works"
            className="inline-flex items-center gap-2 text-lg font-semibold text-emerald-400 hover:text-emerald-300 transition-all duration-300 group"
          >
            <span className="relative text-xl">
              Find out how it works?
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-emerald-400 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </span>
            <motion.span
              className="text-4xl"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

