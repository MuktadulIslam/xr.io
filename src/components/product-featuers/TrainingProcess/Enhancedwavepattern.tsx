'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { HiSparkles } from 'react-icons/hi2';

interface CompetencyItem {
    title: string;
    tag: string;
    image: string;
    color: {
        primary: string;
        secondary: string;
        glow: string;
        border: string;
        text: string;
    };
}

const competencyItems: CompetencyItem[] = [
    {
        title: 'Problem Solving',
        tag: 'Assertiveness',
        image: '/images/feedback/problem-solving.png',
        color: {
            primary: 'from-cyan-500/50 to-blue-500/50',
            secondary: 'bg-cyan-500/20',
            glow: 'shadow-cyan-500/40',
            border: 'border-cyan-400/60',
            text: 'text-cyan-100'
        }
    },
    {
        title: 'Interpersonal Relationship',
        tag: 'Social Responsibility',
        image: '/images/feedback/interpersonal-relationship.png',
        color: {
            primary: 'from-purple-500/50 to-pink-500/50',
            secondary: 'bg-purple-500/20',
            glow: 'shadow-purple-500/40',
            border: 'border-purple-400/60',
            text: 'text-purple-100'
        }
    },
    {
        title: 'Stress Management',
        tag: 'Impulse Control',
        image: '/images/feedback/stress-management.png',
        color: {
            primary: 'from-emerald-500/50 to-teal-500/50',
            secondary: 'bg-emerald-500/20',
            glow: 'shadow-emerald-500/40',
            border: 'border-emerald-400/60',
            text: 'text-emerald-100'
        }
    },
    {
        title: 'Flexibility',
        tag: 'Self-regard',
        image: '/images/feedback/flexibility.png',
        color: {
            primary: 'from-orange-500/50 to-amber-500/50',
            secondary: 'bg-orange-500/20',
            glow: 'shadow-orange-500/40',
            border: 'border-orange-400/60',
            text: 'text-orange-100'
        }
    },
    {
        title: 'Emotional Self-awareness',
        tag: 'Reality-testing',
        image: '/images/feedback/emotional-self-awareness.png',
        color: {
            primary: 'from-rose-500/50 to-red-500/50',
            secondary: 'bg-rose-500/20',
            glow: 'shadow-rose-500/40',
            border: 'border-rose-400/60',
            text: 'text-rose-100'
        }
    },
    {
        title: 'Empathy',
        tag: 'Emotional Expression',
        image: '/images/feedback/empathy.png',
        color: {
            primary: 'from-indigo-500/50 to-violet-500/50',
            secondary: 'bg-indigo-500/20',
            glow: 'shadow-indigo-500/40',
            border: 'border-indigo-400/60',
            text: 'text-indigo-100'
        }
    },
];

export default function WavePattern() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    return (
        <div ref={sectionRef} className="relative w-full h-auto">

            {/* Wave grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {competencyItems.map((item, index) => {
                    const col = index % 3;
                    const isMiddle = col === 1;

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.3 }
                            }}
                            className={`group relative w-full h-60 mx-auto ${isMiddle ? 'lg:-translate-y-10' : ''}`}
                            style={{
                                animation: `float${index} ${4 + index * 0.3}s ease-in-out infinite`,
                                animationDelay: `${index * 0.4}s`,
                            }}
                        >
                            {/* Card */}
                            <div className={`relative w-full h-full rounded-2xl overflow-hidden border-2 ${item.color.border} hover:${item.color.glow} group-hover:shadow-2xl transition-all duration-300 bg-[#0a0a0a]/95 backdrop-blur-sm`}>
                                {/* Background Image */}
                                <div className="absolute inset-0 overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500"
                                    />
                                </div>

                                {/* Gradient Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />

                                {/* Content at Bottom */}
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    {/* Title */}
                                    <h4 className="text-xl font-bold text-white leading-tight transition-transform duration-300">
                                        {item.title}
                                    </h4>

                                    {/* Tag */}
                                    <div className="mt-1 mb-3">
                                        <p className={`text-xs ${item.color.text} inline font-semibold px-2 py-0.5 bg-linear-to-r ${item.color.primary} backdrop-blur-sm border ${item.color.border} rounded-full`}>
                                            {item.tag}
                                        </p>
                                    </div>

                                    {/* Decorative line */}
                                    <div className={`mt-2 h-1 w-20 bg-linear-to-r ${item.color.primary} rounded-full group-hover:w-full transition-all duration-300`} />
                                </div>
                            </div>

                            <style jsx>{`
                                @keyframes float${index} {
                                    0%, 100% {
                                        transform: translateY(0);
                                    }
                                    50% {
                                        transform: translateY(1rem);
                                    }
                                }
                            `}</style>
                        </motion.div>
                    );
                })}
            </div>

            {/* CTA Button */}
            <motion.div
                initial={{ opacity: 0, scale: 0, y: 20 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0, y: 20 }}
                transition={{ delay: 0.8, duration: 0.7, type: "spring" }}
                className="flex justify-center mt-2 lg:mt-4"
            >
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="group/cta relative cursor-pointer"
                >

                    <div className="relative inline-flex items-center gap-4 px-8 py-1.5 bg-linear-to-r from-cyan-600/50 via-blue-600/50 to-cyan-600/50 backdrop-blur-md border-2 border-cyan-500/70 rounded-full shadow-2xl shadow-cyan-500/40 group-hover/cta:shadow-cyan-500/60 transition-all duration-500">
                        {/* Left icon */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-cyan-300/30 blur-md rounded-full" />
                            <HiSparkles className="relative w-7 h-7 text-cyan-300 animate-pulse drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                        </div>

                        {/* Text */}
                        <div className="text-center">
                            <p className="text-white font-bold text-lg lg:text-xl drop-shadow-lg leading-tight">
                                Apply In{' '}
                                <span className="bg-linear-to-r from-cyan-200 via-blue-200 to-cyan-200 bg-clip-text text-transparent">
                                    Real Life
                                </span>
                            </p>
                            <p className="text-cyan-200/80 text-xs font-medium mt-1">
                                Transform theory into practice
                            </p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}