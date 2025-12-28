'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { HiBriefcase, HiAcademicCap, HiShieldCheck, HiUserGroup } from 'react-icons/hi2';
import { FaHospital } from 'react-icons/fa';
import LottieComponent from '@/components/LottieComponent';
import publicSafetyAnimation from '../../../public/animations/training-context/public-safety.json';
import healthcareAnimation from '../../../public/animations/training-context/healthcare.json';
import corporateAnimation from '../../../public/animations/training-context/corporate.json';
import familyAnimation from '../../../public/animations/training-context/family.json';
import educationAnimation from '../../../public/animations/training-context/education.json';

// Context types with their scenarios
const contexts = [
    {
        id: 'corporate',
        name: 'Corporate',
        icon: HiBriefcase,
        gradient: 'from-cyan-500 to-cyan-500',
        iconBg: 'bg-cyan-500/20',
        borderColor: 'border-cyan-500/30',
        iconColor: 'text-cyan-400',
        animation: corporateAnimation,
        scale: 1.1,
        scenarios: [
            {
                id: 'sales',
                title: 'Sales',
                description: 'Master the art of persuasive communication, client relationship building, and closing deals through realistic sales scenarios.',
            },
            {
                id: 'customer-support',
                title: 'Customer Support',
                description: 'Develop empathy, problem-solving skills, and effective communication to handle customer inquiries and complaints professionally.',
            },
            {
                id: 'leadership',
                title: 'Leadership',
                description: 'Enhance your leadership capabilities through scenarios focused on team management, decision-making, and strategic thinking.',
            },
            {
                id: 'culture',
                title: 'Culture',
                description: 'Navigate workplace dynamics, foster inclusive environments, and build strong organizational culture through interactive experiences.',
            },
        ],
    },
    {
        id: 'healthcare',
        name: 'Healthcare',
        icon: FaHospital,
        gradient: 'from-emerald-500 to-teal-500',
        iconBg: 'bg-emerald-500/20',
        borderColor: 'border-emerald-500/30',
        iconColor: 'text-emerald-400',
        animation: healthcareAnimation,
        scale: 1.2,
        scenarios: [
            {
                id: 'nursing',
                title: 'Nursing',
                description: 'Practice patient care, bedside manner, and critical thinking in realistic nursing scenarios with complex patient interactions.',
            },
            {
                id: 'medicine',
                title: 'Medicine',
                description: 'Develop diagnostic communication, patient consultation skills, and medical decision-making in challenging clinical situations.',
            },
            {
                id: 'allied-health',
                title: 'Allied Health',
                description: 'Enhance multidisciplinary collaboration, patient education, and therapeutic communication across various healthcare settings.',
            },
            {
                id: 'surgery',
                title: 'Surgery',
                description: 'Master surgical team coordination, crisis management, and effective communication in high-pressure operating room scenarios.',
            },
        ],
    },
    {
        id: 'public-safety',
        name: 'Public Safety',
        icon: HiShieldCheck,
        gradient: 'from-red-500 to-orange-500',
        iconBg: 'bg-red-500/20',
        borderColor: 'border-red-500/30',
        iconColor: 'text-red-400',
        animation: publicSafetyAnimation,
        scale: 1.3,
        scenarios: [],
    },
    {
        id: 'education',
        name: 'Education',
        icon: HiAcademicCap,
        gradient: 'from-blue-500 to-cyan-500',
        iconBg: 'bg-blue-500/20',
        borderColor: 'border-blue-500/30',
        iconColor: 'text-blue-400',
        animation: educationAnimation,
        scale: 1.1,
        scenarios: [
            {
                id: 'classroom-management',
                title: 'Classroom Management',
                description: 'Develop effective teaching strategies, student engagement techniques, and conflict resolution in diverse classroom settings.',
            },
            {
                id: 'student-counseling',
                title: 'Student Counseling',
                description: 'Practice empathetic listening, guidance skills, and supportive communication with students facing various challenges.',
            },
            {
                id: 'parent-teacher',
                title: 'Parent-Teacher Communication',
                description: 'Master effective communication with parents, address concerns professionally, and build collaborative relationships.',
            },
        ],
    },
    {
        id: 'family',
        name: 'Family',
        icon: HiUserGroup,
        gradient: 'from-yellow-500 to-amber-500',
        iconBg: 'bg-yellow-500/20',
        borderColor: 'border-yellow-500/30',
        iconColor: 'text-yellow-400',
        animation: familyAnimation,
        scale: 0.9,
        scenarios: [
            {
                id: 'parenting',
                title: 'Parenting',
                description: 'Practice positive parenting techniques, effective discipline, and nurturing communication with children of all ages.',
            },
            {
                id: 'conflict-resolution',
                title: 'Conflict Resolution',
                description: 'Develop skills to mediate family disputes, facilitate healthy conversations, and strengthen family relationships.',
            },
        ],
    },
];

// Context Card Component
function ContextCard({ context, index, onClick, isActive }: { context: typeof contexts[0]; index: number; onClick: () => void; isActive: boolean }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const IconComponent = context.icon;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            onClick={onClick}
            className="relative group cursor-pointer"
        >
            {/* Outer glow effect */}
            <div className={`absolute inset-0 bg-linear-to-br ${context.gradient} ${isActive ? 'opacity-40' : 'opacity-0 group-hover:opacity-30'} transition-opacity duration-300 blur-xl rounded-2xl -z-10`} />

            {/* Card */}
            <div className={`relative bg-[#0a0a0a]/60 backdrop-blur-sm rounded-2xl border-2 ${isActive ? context.borderColor.replace('/30', '/60') : context.borderColor} hover:border-opacity-60 transition-all duration-300 overflow-hidden h-full flex flex-col ${isActive ? 'scale-105' : ''}`}>
                {/* Animation Container */}
                <div className="relative h-28 md:h-32 xl:h-40 flex items-center justify-center p-3">
                    <div className={`${context.iconBg} rounded-xl border ${context.borderColor} p-2 w-full h-full flex items-center justify-center overflow-hidden`}>
                        <LottieComponent animationData={context.animation} className="w-full h-full" scale={context.scale} />
                    </div>
                </div>

                {/* Content */}
                <div className="p-3 flex flex-col items-center text-center">
                    {/* Icon */}
                    <div className={`${context.iconBg} p-2 md:p-3 rounded-xl border ${context.borderColor} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className={`text-xl md:text-2xl ${context.iconColor}`} />
                    </div>

                    {/* Title */}
                    <h3 className={`text-sm md:text-base font-bold bg-linear-to-r ${context.gradient} bg-clip-text text-transparent`}>
                        {context.name}
                    </h3>
                </div>

                {/* Animated bottom accent */}
                <motion.div
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-linear-to-r ${context.gradient} rounded-full`}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: isActive ? '100%' : '60%' } : { width: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.08 + 0.2 }}
                />
            </div>
        </motion.div>
    );
}

// Scenario Card Component
function ScenarioCard({ scenario, index, contextGradient }: { scenario: any; index: number; contextGradient: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative group cursor-pointer"
        >
            {/* Outer glow effect on hover */}
            <div className={`absolute inset-0 bg-linear-to-br ${contextGradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-3xl rounded-3xl -z-10`} />

            {/* Card */}
            <div className="relative bg-[#0a0a0a]/70 backdrop-blur-sm rounded-3xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden h-full flex flex-col shadow-xl">
                {/* Image Container - 5:3 aspect ratio */}
                <div className="relative w-full aspect-[5/3] overflow-hidden">
                    <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900">
                        {/* Placeholder gradient */}
                        <div className={`absolute inset-0 bg-linear-to-br ${contextGradient} opacity-30`} />

                        {/* Icon overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-amber-600">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0.3 }}
                                animate={{ scale: 1, opacity: 0.4 }}
                                transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                                className="text-8xl lg:text-9xl"
                            >
                                🎯
                            </motion.div>
                        </div>

                        {/* Animated overlay pattern */}
                        <motion.div
                            className={`absolute inset-0 bg-linear-to-tr ${contextGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                        />
                    </div>

                    {/* Strong gradient overlay for text visibility */}
                    <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />

                    {/* Hover overlay */}
                    <motion.div
                        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8 flex flex-col flex-1">
                    {/* Title */}
                    <h3 className={`text-2xl lg:text-3xl font-bold bg-linear-to-r ${contextGradient} bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform duration-300 origin-left`}>
                        {scenario.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed text-sm lg:text-base flex-1 mb-6">
                        {scenario.description}
                    </p>

                    {/* CTA Button */}
                    <motion.button
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        className={`w-full py-3.5 lg:py-4 bg-linear-to-r ${contextGradient} rounded-xl text-white font-bold text-base lg:text-lg transition-all duration-300 relative overflow-hidden group/btn shadow-lg hover:shadow-2xl`}
                    >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            Start Scenario
                            <motion.span
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                →
                            </motion.span>
                        </span>

                        {/* Shine effect */}
                        <motion.div
                            className="absolute inset-0 bg-linear-to-r from-white/0 via-white/30 to-white/0"
                            animate={{
                                x: ['-200%', '200%'],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatDelay: 1,
                                ease: 'easeInOut',
                            }}
                        />

                        {/* Hover glow */}
                        <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                    </motion.button>
                </div>

                {/* Animated corner accent */}
                <motion.div
                    className={`absolute top-0 right-0 w-20 h-20 bg-linear-to-bl ${contextGradient} opacity-0 group-hover:opacity-30 rounded-bl-3xl transition-opacity duration-500`}
                />

                {/* Animated bottom accent */}
                <motion.div
                    className={`absolute bottom-0 left-0 h-1.5 bg-linear-to-r ${contextGradient}`}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '100%' } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.15 + 0.3 }}
                />
            </div>
        </motion.div>
    );
}

export default function SelectionPage() {
    const [selectedContext, setSelectedContext] = useState<typeof contexts[0]>(contexts[0]);
    const contextsRef = useRef(null);
    const scenariosRef = useRef(null);

    return (
        <main className="relative">
            {/* Hero Section */}
            <section className="relative flex items-center justify-center overflow-hidden pt-28">
                <div className="max-container px-4 text-center relative z-10">
                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-linear-to-r from-white via-emerald-200 to-teal-300 bg-clip-text text-transparent leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        Select Your Training Context
                    </motion.h1>
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#073030]/50 to-[#0a0a0a] pointer-events-none" />
            </section>

            {/* Contexts Section - Always Visible */}
            <section className="relative py-8 px-6 overflow-hidden">
                <div className="max-container relative z-10">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6" ref={contextsRef}>
                        {contexts.map((context, index) => (
                            <ContextCard
                                key={context.id}
                                context={context}
                                index={index}
                                onClick={() => setSelectedContext(context)}
                                isActive={selectedContext.id === context.id}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Scenarios Section */}
            <section className="relative py-12 px-6 overflow-hidden">
                <div className="max-container relative z-10">
                    {/* Section Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-linear-to-r ${selectedContext.gradient} bg-clip-text text-transparent`}>
                            {selectedContext.name} Scenarios
                        </h2>
                        <p className="text-gray-400 text-lg">
                            {selectedContext.scenarios.length > 0 
                                ? `Choose from ${selectedContext.scenarios.length} specialized scenarios`
                                : 'Exciting new scenarios coming soon'
                            }
                        </p>
                    </motion.div>

                    {/* Scenarios Grid or Coming Soon Message */}
                    {selectedContext.scenarios.length > 0 ? (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10" ref={scenariosRef}>
                            {selectedContext.scenarios.map((scenario, index) => (
                                <ScenarioCard
                                    key={scenario.id}
                                    scenario={scenario}
                                    index={index}
                                    contextGradient={selectedContext.gradient}
                                />
                            ))}
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col items-center justify-center py-20 px-6"
                        >
                            {/* Coming Soon Card */}
                            <div className={`relative bg-[#0a0a0a]/70 backdrop-blur-sm rounded-3xl border-2 border-dashed ${selectedContext.borderColor} p-12 max-w-2xl w-full text-center`}>
                                {/* Outer glow effect */}
                                <div className={`absolute inset-0 bg-linear-to-br ${selectedContext.gradient} opacity-20 blur-2xl rounded-3xl -z-10`} />
                                
                                {/* Icon */}
                                <motion.div
                                    animate={{ 
                                        scale: [1, 1.1, 1],
                                        rotate: [0, 5, -5, 0]
                                    }}
                                    transition={{ 
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: 'easeInOut'
                                    }}
                                    className="mb-6"
                                >
                                    <div className={`inline-flex items-center justify-center w-24 h-24 rounded-2xl ${selectedContext.iconBg} border-2 ${selectedContext.borderColor}`}>
                                        <span className="text-5xl">🚀</span>
                                    </div>
                                </motion.div>

                                {/* Title */}
                                <h3 className={`text-3xl md:text-4xl font-bold mb-4 bg-linear-to-r ${selectedContext.gradient} bg-clip-text text-transparent`}>
                                    Coming Soon
                                </h3>

                                {/* Description */}
                                <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
                                    We're crafting immersive scenarios for <span className={`font-semibold bg-linear-to-r ${selectedContext.gradient} bg-clip-text text-transparent`}>{selectedContext.name}</span>. 
                                    New training experiences will be available soon!
                                </p>

                                {/* Animated dots */}
                                <div className="flex items-center justify-center gap-2">
                                    {[0, 1, 2].map((i) => (
                                        <motion.div
                                            key={i}
                                            className={`w-3 h-3 rounded-full bg-linear-to-r ${selectedContext.gradient}`}
                                            animate={{
                                                scale: [1, 1.5, 1],
                                                opacity: [0.5, 1, 0.5]
                                            }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                                delay: i * 0.2
                                            }}
                                        />
                                    ))}
                                </div>

                                {/* Bottom accent */}
                                <motion.div
                                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1.5 bg-linear-to-r ${selectedContext.gradient} rounded-full`}
                                    animate={{
                                        width: ['0%', '80%', '0%']
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: 'easeInOut'
                                    }}
                                />
                            </div>
                        </motion.div>
                    )}
                </div>

                {/* Background decorations */}
                <motion.div
                    className="absolute top-1/4 left-0 w-96 h-96 bg-linear-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl -z-10"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-0 w-96 h-96 bg-linear-to-l from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl -z-10"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 2,
                    }}
                />
            </section>
        </main>
    );
}