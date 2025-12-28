'use client'
import { useRef } from "react";
import { motion, useInView } from 'framer-motion';
import Image from "next/image";
import { HiSparkles } from 'react-icons/hi2';
import { FaVrCardboard, FaDesktop, FaUsers } from 'react-icons/fa';

const platformImages = [
    { name: 'In-person', image: '/images/experience-situations/in-person-learning.png', icon: FaUsers },
    { name: 'Web', image: '/images/experience-situations/from-web-learning.avif', icon: FaDesktop },
    { name: 'Virtual Reality', image: '/images/experience-situations/from-vr-learning.png', icon: FaVrCardboard },
];

export default function ExperienceSituations() {
    const step1Ref = useRef(null);
    const isStep1InView = useInView(step1Ref, { once: true, margin: '-100px' });
    return (
        <motion.div
            ref={step1Ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isStep1InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
            className=""
        >
            {/* Decorative background glow */}
            <div className="absolute left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10" />

            <div className="relative bg-linear-to-br from-cyan-500/5 via-transparent to-transparent border border-cyan-500/20 rounded-3xl p-6 lg:p-10">
                <div className="grid lg:grid-cols-8 gap-8 lg:gap-12 items-center">
                    {/* Left - Content (3 columns) */}
                    <div className="lg:col-span-3 space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-2">
                            <span className="text-2xl font-bold text-cyan-400">01</span>
                            <div className="w-px h-6 bg-cyan-500/30" />
                            <span className="text-sm font-semibold text-cyan-300 uppercase tracking-wider">
                                Step One
                            </span>
                        </div>

                        <div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                                Experience <span className="bg-linear-to-r from-cyan-400 to-cyan-400 bg-clip-text text-transparent">Real-Life</span> Situations
                            </h3>

                            <p className="text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed max-lg:text-justify mb-6">
                                Immerse yourself in lifelike scenarios that mirror the complexities of human interaction. Practice conversations under pressure, navigate delicate cultural topics, and master the art of delivering difficult messages.
                            </p>
                        </div>

                        {/* Additional info badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={isStep1InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-xl"
                        >
                            <HiSparkles className="w-5 h-5 text-cyan-400" />
                            <span className="text-sm text-cyan-300 font-medium">
                                Available across multiple platforms
                            </span>
                        </motion.div>
                    </div>

                    {/* Right - Platform Images in a row (5 columns) */}
                    <div className="lg:col-span-5">
                        <div className="grid grid-cols-3 gap-3 lg:gap-4">
                            {platformImages.map((platform, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isStep1InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                    transition={{ delay: index * 0.15, duration: 0.5 }}
                                    className="group relative aspect-3/2 rounded-xl overflow-hidden border-2 border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20"
                                >
                                    <Image
                                        src={platform.image}
                                        alt={platform.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        sizes="(max-width: 768px) 33vw, 300px"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a]/60 via-[#0a0a0a]/30 to-transparent group-hover:from-[#0a0a0a]/80 group-hover:via-[#0a0a0a]/50 transition-all duration-300" />

                                    {/* Icon overlay */}
                                    <div className="absolute top-3 right-3 w-8 h-8 lg:w-10 lg:h-10 rounded-lg bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <platform.icon className="w-4 h-4 lg:w-5 lg:h-5 text-cyan-300" />
                                    </div>

                                    <div className="absolute inset-0 flex items-end justify-center p-4">
                                        <span className="text-sm lg:text-base font-bold text-white text-center">
                                            {platform.name}
                                        </span>
                                    </div>

                                    {/* Glow effect */}
                                    <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 transition-colors duration-300" />
                                </motion.div>
                            ))}
                        </div>

                        {/* Bottom stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isStep1InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className="mt-6 grid grid-cols-3 gap-3"
                        >
                            <div className="text-center p-3 bg-cyan-500/5 border border-cyan-500/20 rounded-lg">
                                <p className="text-xl lg:text-2xl font-bold text-cyan-400">10+</p>
                                <p className="text-xs text-gray-400">Scenarios</p>
                            </div>
                            <div className="text-center p-3 bg-cyan-500/5 border border-cyan-500/20 rounded-lg">
                                <p className="text-xl lg:text-2xl font-bold text-cyan-400">24/7</p>
                                <p className="text-xs text-gray-400">Access</p>
                            </div>
                            <div className="text-center p-3 bg-cyan-500/5 border border-cyan-500/20 rounded-lg">
                                <p className="text-xl lg:text-2xl font-bold text-cyan-400">AI</p>
                                <p className="text-xs text-gray-400">Powered</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}