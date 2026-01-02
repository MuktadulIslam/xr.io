'use client';
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import ExperienceSituations from './ExperienceSituations';
import EvaluateConduct from './EvaluateConduct';
import ApplyFeedback from './ApplyFeedback';
import Link from "next/link";
import { HiSparkles } from 'react-icons/hi';

export default function TrainingProcess() {
    const sectionRef = useRef(null);
    const isSectionInView = useInView(sectionRef, { once: true, margin: '-100px' });

    return (
        <div className="relative min-h-screen py-12 lg:py-20 px-3 lg:px-6 overflow-hidden z-10">
            <div className="max-container">
                {/* Section Header */}
                <motion.div
                    ref={sectionRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 lg:mb-24"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 lg:mb-6">
                        How do we train{' '}
                        <span className="bg-linear-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            EMOTIONAL INTELLIGENCE?
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto">
                        without waiting for uncertain life experiences to train us...
                    </p>
                </motion.div>

                {/* Step 1: Experience Situations - Enhanced Design */}
                <ExperienceSituations />
                <div className="w-full h-auto flex justify-center py-5">
                    <motion.div
                        animate={{
                            y: [10, -10, 10]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <MdOutlineKeyboardDoubleArrowDown className="text-cyan-400 size-11 sm:size-12 lg:size-20" />
                    </motion.div>
                </div>

                {/* Step 2: Evaluate Conduct - Enhanced Design */}
                <EvaluateConduct />
                <div className="w-full h-auto flex justify-center py-5">
                    <motion.div
                        animate={{
                            y: [10, -10, 10]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <MdOutlineKeyboardDoubleArrowDown className="text-cyan-400 size-11 sm:size-12 lg:size-20" />
                    </motion.div>
                </div>

                {/* Step 3: Apply Feedback - Enhanced with orbital animation */}
                <ApplyFeedback />

                {/* Try EvalNTS NOW Button */}
                <div className="relative group w-full pt-16 lg:pt-20 flex justify-center">

                    <Link
                        href="/selection-page"
                        className="relative flex items-center gap-3 px-8 py-4 bg-linear-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-2xl text-white font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden"
                    >
                        {/* Animated background shine */}
                        <motion.div
                            animate={{
                                x: ['-200%', '200%'],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatDelay: 1,
                                ease: "easeInOut"
                            }}
                            className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent skew-x-12"
                        />

                        {/* Icon with rotation animation */}
                        <motion.div
                            animate={{
                                rotate: [0, 360],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="relative z-10"
                        >
                            <HiSparkles className="w-6 h-6" />
                        </motion.div>

                        <span className="relative z-10">TRY EvalNTS NOW</span>

                        {/* Arrow with bounce animation */}
                        <motion.span
                            className="relative z-10 text-2xl"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            →
                        </motion.span>

                        {/* Glossy overlay */}
                        <div className="absolute inset-0 bg-linear-to-b from-white/20 to-transparent rounded-2xl" />
                    </Link>
                </div>

            </div>
        </div>
    );
}