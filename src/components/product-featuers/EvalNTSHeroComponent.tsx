'use client'
import { useRef } from "react";
import { motion, useInView } from 'framer-motion';
import brain_animation from '../../../public/animations/brain.json';
import LottieComponent from "../LottieComponent";

export default function EvalNTSHeroComponent() {
    const sectionRef = useRef(null);
    const isSectionInView = useInView(sectionRef, { once: true, margin: '-100px' });
    return (
        <section ref={sectionRef} className="relative py-8 lg:py-12 px-3 lg:px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-3 gap-6 lg:gap-12 items-center">
                    {/* Left side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isSectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.6 }}
                        className="z-10 md:col-span-2"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-linear-to-r from-emerald-300 via-teal-300 to-cyan-400 bg-clip-text text-transparent mb-4">
                            EvalNTS: Redefining Learning and Evaluation
                        </h2>

                        <p className="text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed max-lg:text-justify">
                            EVALNTS revolutionizes the evaluation of emotional-intelligence (EI) based non-technical skills through an AI-driven Competency-based Framework. Our focus is on providing unbiased, actionable feedback to promote learner-specific growth and maximize team efficiency on specific EI competencies.
                        </p>
                    </motion.div>

                    {/* Right side - 3D Animation */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isSectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.8 }}
                        className="z-10 w-full h-[300px] lg:h-[400px] flex items-center justify-center"
                    >
                        <div className="relative w-full h-full">
                             <LottieComponent animationData={brain_animation} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}