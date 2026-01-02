'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { HiSparkles, HiLightBulb, HiChatBubbleLeftRight} from 'react-icons/hi2';

const evaluationFeatures = [
    {
        icon: HiSparkles,
        title: 'Speech Analysis',
        description: 'Tone, pace, and word choice evaluation'
    },
    {
        icon: HiLightBulb,
        title: 'Body Language',
        description: 'Non-verbal communication assessment'
    },
    {
        icon: HiChatBubbleLeftRight,
        title: 'Domain-Specific',
        description: 'Healthcare & corporate scenarios'
    },
];



export default function EvaluateConduct() {
    const step2Ref = useRef(null);
    const isStep2InView = useInView(step2Ref, { once: true, margin: '-100px' });
    return (
        <motion.div
            ref={step2Ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isStep2InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
            className=""
        >
            {/* Decorative background glow */}
            <div className="absolute right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10" />

            <div className="relative bg-linear-to-bl from-cyan-500/5 via-transparent to-transparent border border-cyan-500/20 rounded-3xl p-6 lg:p-10">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isStep2InView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="relative"
                    >
                        <div className="relative aspect-7/4 rounded-2xl overflow-hidden border-2 border-cyan-500/40 group">
                            <Image
                                src="/images/get_in_touch.jpg"
                                alt="Evaluate Conduct"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-linear-to-tr from-[#0a0a0a]/70 via-[#0a0a0a]/30 to-transparent" />

                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/5 transition-colors duration-300" />
                        </div>

                        {/* Feature cards below image */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isStep2InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="grid grid-cols-3 gap-3 mt-4"
                        >
                            {evaluationFeatures.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isStep2InView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                    transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                                    className="group p-3 bg-cyan-500/5 border border-cyan-500/20 rounded-lg hover:bg-cyan-500/10 hover:border-cyan-500/40 transition-all duration-300"
                                >
                                    <feature.icon className="w-6 h-6 lg:w-8 lg:h-8 text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300" />
                                    <p className="text-xs lg:text-sm font-semibold text-white mb-1">{feature.title}</p>
                                    <p className="text-[10px] lg:text-xs text-gray-400">{feature.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isStep2InView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-2">
                            <span className="text-2xl font-bold text-cyan-400">02</span>
                            <div className="w-px h-6 bg-cyan-500/30" />
                            <span className="text-sm font-semibold text-cyan-300 uppercase tracking-wider">
                                Step Two
                            </span>
                        </div>

                        <div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                                Evaluate <span className="bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Your Conduct</span>
                            </h3>

                            <p className="text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed max-lg:text-justify mb-6">
                                Our advanced AI evaluation engine analyzes your emotional intelligence-based skills with precision. Unlike generic feedback systems, we provide domain-specific assessments tailored to healthcare and corporate environments.
                            </p>

                            <div className="space-y-4">
                                <div className="p-4 bg-cyan-500/5 border-l-4 border-cyan-500/50 rounded-r-lg">
                                    <h4 className="text-sm font-bold text-cyan-300 mb-2">Multi-Modal Analysis</h4>
                                    <p className="text-xs md:text-sm text-gray-400">
                                        We evaluate both speech patterns (tone, pace, word choice) and body language (posture, gestures, facial expressions) to provide comprehensive feedback on your non-technical skills.
                                    </p>
                                </div>

                                <div className="p-4 bg-cyan-500/5 border-l-4 border-cyan-500/50 rounded-r-lg">
                                    <h4 className="text-sm font-bold text-cyan-300 mb-2">Industry-Specific Focus</h4>
                                    <p className="text-xs md:text-sm text-gray-400">
                                        Our evaluation criteria are specifically designed for healthcare professionals and corporate leaders, ensuring relevance to your real-world challenges.
                                    </p>
                                </div>

                                <div className="p-4 bg-cyan-500/5 border-l-4 border-cyan-500/50 rounded-r-lg">
                                    <h4 className="text-sm font-bold text-cyan-300 mb-2">Objective Assessment</h4>
                                    <p className="text-xs md:text-sm text-gray-400">
                                        Remove bias from evaluation. Our AI provides consistent, objective feedback based on proven emotional intelligence frameworks and industry best practices.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Additional info badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={isStep2InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-xl"
                        >
                            <HiLightBulb className="w-5 h-5 text-cyan-400" />
                            <span className="text-sm text-cyan-300 font-medium">
                                Instant, actionable insights
                            </span>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}