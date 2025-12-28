'use client';
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import ExperienceSituations from './ExperienceSituations';
import EvaluateConduct from './EvaluateConduct';
import ApplyFeedback from './ApplyFeedback';

export default function TrainingProcess() {
    const sectionRef = useRef(null);
    const isSectionInView = useInView(sectionRef, { once: true, margin: '-100px' });

    return (
        <div className="relative min-h-screen bg-[#0a0a0a] py-12 lg:py-20 px-3 lg:px-6 overflow-hidden">
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
                        <MdOutlineKeyboardDoubleArrowDown className="text-cyan-400 size-11 sm:size-12 lg:size-20"/>
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
                        <MdOutlineKeyboardDoubleArrowDown className="text-cyan-400 size-11 sm:size-12 lg:size-20"/>
                    </motion.div>
                </div>

                {/* Step 3: Apply Feedback - Enhanced with orbital animation */}                
                <ApplyFeedback />
            </div>
        </div>
    );
}