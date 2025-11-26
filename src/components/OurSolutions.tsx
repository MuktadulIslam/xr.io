'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Lottie from 'lottie-react';
import technicalSkillsAnimation from '../../public/animations/technicalSkills.json';
import codingAnimation from '../../public/animations/coding.json';
import virtualRealityAnimation from '../../public/animations/virtualReality.json';
import { IoMdClose } from 'react-icons/io';

const solutions = [
  {
    name: 'EvalNTS: AI-Evaluator for Non-technical Skills',
    description: 'AI-evaluation for context-specific non-technical skills, providing valuable insights for personalized growth and team efficiency.',
    animation: technicalSkillsAnimation,
    hasCross: true,
    gradient: 'from-purple-500 to-pink-500',
    iconBg: 'bg-purple-500/20',
    borderColor: 'border-purple-500/30'
  },
  {
    name: 'No-Code VR Development',
    description: 'A web-platform to create VR-ready and scenario-based simulated learning environments without the need for extensive coding, ensuring a seamless and efficient development process.',
    animation: codingAnimation,
    hasCross: true,
    gradient: 'from-blue-500 to-cyan-500',
    iconBg: 'bg-blue-500/20',
    borderColor: 'border-blue-500/30',
    scale: 'scale-125',
  },
  {
    name: 'Realistic VR Simulations',
    description: 'Virtual Reality simulations replicating realistic healthcare-specific scenarios which are rare and difficult to deal with.',
    animation: virtualRealityAnimation,
    hasCross: false,
    gradient: 'from-teal-500 to-emerald-500',
    iconBg: 'bg-teal-500/20',
    borderColor: 'border-teal-500/30',
  },
];

function SolutionCard({ solution, index }: { solution: typeof solutions[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      className="relative group"
    >
      {/* Outer glow effect on hover */}
      <div className={`absolute inset-0 bg-linear-to-br ${solution.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-2xl rounded-3xl -z-10`} />

      {/* Card */}
      <div className={`relative bg-[#0a0a0a]/60 backdrop-blur-sm p-8 rounded-3xl border ${solution.borderColor} transition-all duration-300 h-full flex flex-col`}>
        {/* Animation Container */}
        <div className="relative mb-6 h-64 flex items-center justify-center">
          <div className={`${solution.iconBg} p-3 rounded-2xl border ${solution.borderColor} w-full h-full flex items-center justify-center`}>
            <Lottie
              animationData={solution.animation}
              loop={true}
              className={`w-full h-full ` + (solution.scale ? `scale-125` : '')}
            /> 
          </div>

          {/* Cross Sign Overlay */}
          {solution.hasCross && (
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
              className="absolute top-2 right-2"
            >
              <div className="bg-red-500/95 backdrop-blur-sm rounded-full p-2 border-3 border-red-400 shadow-lg shadow-red-500/50">
                <IoMdClose className="text-4xl text-white" />
              </div>
            </motion.div>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-4 leading-tight">
          {solution.name}
        </h3>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed grow">
          {solution.description}
        </p>

        {/* Animated bottom accent */}
        <motion.div
          className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r ${solution.gradient} rounded-full`}
          initial={{ width: 0 }}
          animate={isInView ? { width: '60%' } : { width: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
        />
      </div>
    </motion.div>
  );
}

export default function OurSolutions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="solutions" className="relative py-20 px-6 overflow-hidden">
      <div className="max-container">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-linear-to-r from-white via-teal-300 to-cyan-400 bg-clip-text text-transparent">
            Our Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We offer a variety of solutions. Our primary solution offering is our flagship product: an  <span className="text-cyan-400 font-semibold">AI-powered tool</span> for <span className="text-blue-400 font-semibold">Evaluating Non-echnical Skills</span>.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard key={index} solution={solution} index={index} />
          ))}
        </div>
      </div>

      {/* Background decorations */}
      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 bg-linear-to-l from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-0 w-96 h-96 bg-linear-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </section>
  );
}

