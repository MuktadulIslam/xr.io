'use client';

import { HiSparkles, HiLightBulb } from 'react-icons/hi2';

import EnhancedWavePattern from './Enhancedwavepattern';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';


export default function ApplyFeedback() {
    const step3Ref = useRef(null);
    const isStep3InView = useInView(step3Ref, { once: true, margin: '-100px' });

    return (
        <motion.div
            ref={step3Ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isStep3InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
            className="relative bg-linear-to-br from-cyan-500/5 via-transparent to-blue-500/5 border border-cyan-500/20 rounded-3xl p-6 lg:p-10"
        >
            <div className="absolute left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl -z-10" />
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
                {/* Left - Image (2:1 ratio) */}
                <div className="order-2 lg:order-1 space-y-6 lg:col-span-3">
                    <EnhancedWavePattern />
                </div>

                {/* Right - Content */}
                <div className="order-1 lg:order-2 space-y-6 lg:col-span-2">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-2">
                        <span className="text-2xl font-bold text-cyan-400">03</span>
                        <div className="w-px h-6 bg-cyan-500/30" />
                        <span className="text-sm font-semibold text-cyan-300 uppercase tracking-wider">
                            Step Three
                        </span>
                    </div>

                    <div>
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                            Apply <span className="bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Tailored Feedback</span>
                        </h3>

                        <p className="text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed max-lg:text-justify mb-6">
                            Receive feedback that's uniquely crafted for your performance. Our AI doesn't offer generic advice—it delivers precise insights into specific behaviors, highlighting what you excelled at, what you missed, and how to improve.
                        </p>

                        <div className="space-y-4">
                            <div className="p-4 bg-cyan-500/5 border-l-4 border-cyan-500/50 rounded-r-lg">
                                <h4 className="text-sm font-bold text-cyan-300 mb-2 flex items-center gap-2">
                                    <HiSparkles className="w-4 h-4" />
                                    Behavior-Specific Analysis
                                </h4>
                                <p className="text-xs md:text-sm text-gray-400">
                                    Instead of vague comments, get detailed breakdowns of your communication patterns, emotional responses, and decision-making processes.
                                </p>
                            </div>

                            <div className="p-4 bg-blue-500/5 border-l-4 border-blue-500/50 rounded-r-lg">
                                <h4 className="text-sm font-bold text-blue-300 mb-2 flex items-center gap-2">
                                    <HiLightBulb className="w-4 h-4" />
                                    Immediate Application
                                </h4>
                                <p className="text-xs md:text-sm text-gray-400">
                                    Learn through factual reasoning and practical guidance that you can implement right away in real-world situations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}