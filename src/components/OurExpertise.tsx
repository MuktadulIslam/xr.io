'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBrain, FaVrCardboard, FaRobot, FaLightbulb, FaUsers, FaChartLine } from 'react-icons/fa';
import { BsHeadsetVr } from "react-icons/bs";
import { LuBrainCircuit } from "react-icons/lu";
import { HiSparkles } from 'react-icons/hi';
import { IoMdCheckmarkCircle } from 'react-icons/io';

const expertiseItems = [
  {
    icon: LuBrainCircuit,
    title: 'Domain-Specific AI Models',
    color: 'from-purple-500 to-pink-500',
    iconBg: 'bg-purple-500/20',
    borderColor: 'border-purple-500/30',
    textColor: 'text-purple-300',
  },
  {
    icon: BsHeadsetVr,
    title: '3D Virtual Reality Environments',
    color: 'from-blue-500 to-cyan-500',
    iconBg: 'bg-blue-500/20',
    borderColor: 'border-blue-500/30',
    textColor: 'text-blue-300',
  },
  {
    icon: FaRobot,
    title: 'AI-Powered Communicating Avatars',
    color: 'from-teal-500 to-emerald-500',
    iconBg: 'bg-teal-500/20',
    borderColor: 'border-teal-500/30',
    textColor: 'text-teal-300',
  },
];

const skills = [
  { icon: FaLightbulb, text: 'Empathy' },
  { icon: FaUsers, text: 'Situational Awareness' },
  { icon: FaBrain, text: 'Self-Regulation' },
  { icon: IoMdCheckmarkCircle, text: 'Problem Solving' },
  { icon: FaChartLine, text: 'Decision Making' },
  { icon: HiSparkles, text: 'Critical Thinking' },
];

export default function OurExpertise() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="expertise" className="relative py-20 px-6 overflow-hidden">
      <div className="max-container">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-linear-to-r from-white via-teal-300 to-cyan-400 bg-clip-text text-transparent">
            Our Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We specialize in developing{' '}
            <span className="text-teal-400 font-semibold">domain-specific AI models</span> that are particularly 
            tailored for objectively evaluating non-technical skills. In addition to that, we also hold expertise 
            in developing{' '}
            <span className="text-cyan-400 font-semibold">three-dimensional virtual reality environments</span> and{' '}
            <span className="text-blue-400 font-semibold">AI-powered communicating avatars</span> generating 
            realistic and interactive scenarios.
          </p>
        </motion.div>

        {/* Expertise Cards in a row - All cards now have consistent animations */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {expertiseItems.map((item, index) => (
            <motion.div
              key={index}
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
              <div className={`absolute inset-0 bg-linear-to-br ${item.color} opacity-0 group-hover:opacity-40 transition-opacity duration-100 blur-2xl rounded-3xl -z-10`} />
              
              {/* Card - consistent styling for all */}
              <div className={`relative bg-[#0a0a0a]/60 backdrop-blur-sm p-8 rounded-3xl border ${item.borderColor} transition-all duration-300 h-full flex flex-col items-center text-center`}>
                {/* Icon container */}
                <div className={`${item.iconBg} p-6 rounded-2xl mb-6 border ${item.borderColor}`}>
                    <item.icon className={`text-6xl ${item.textColor}`} />
                </div>

                {/* Title */}
                <h3 className={`text-xl font-bold ${item.textColor} leading-tight`}>
                  {item.title}
                </h3>

                {/* Animated bottom accent - consistent timing for all */}
                <motion.div
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-linear-to-r ${item.color} rounded-full`}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: '60%' } : { width: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="relative"
        >
          <div className="bg-linear-to-br from-[#073030]/40 to-[#0a4444]/40 backdrop-blur-sm p-8 rounded-3xl border border-teal-500/20">
            <div className="text-center mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Evaluating Non-Technical Skills
              </h3>
              <p className="text-gray-400">
                Our AI models objectively assess essential human competencies
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex flex-col items-center gap-2 p-4 bg-linear-to-br from-teal-500/10 to-cyan-500/10 rounded-xl border border-teal-500/20 hover:border-teal-500/40 transition-all duration-300"
                >
                  <skill.icon className="text-3xl text-teal-400" />
                  <span className="text-xs text-gray-300 text-center leading-tight">
                    {skill.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background decorations - different from OurStory */}
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