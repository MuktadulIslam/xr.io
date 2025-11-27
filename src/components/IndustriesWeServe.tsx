'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const industries = [
  {
    name: 'Healthcare',
    description: 'Enhance clinical performance through real-time evaluation of teamwork, communication, and decision-making.',
    image: '/images/healthcare_industry.avif',
    gradient: 'from-emerald-500 to-teal-500',
    borderColor: 'border-emerald-500/30',
  },
  {
    name: 'Education',
    description: 'Develop emotionally intelligent learners with insights into communication, collaboration, and social behavior.',
    image: '/images/education_industry.avif',
    gradient: 'from-blue-500 to-cyan-500',
    borderColor: 'border-blue-500/30',
  },
  {
    name: 'Public Safety',
    description: 'Strengthen frontline readiness with assessments that measure judgment, situational awareness, and stress response.',
    image: '/images/public_safety_edited.avif',
    gradient: 'from-red-500 to-orange-500',
    borderColor: 'border-red-500/30',
  },
  {
    name: 'Corporate Leadership',
    description: 'Elevate workplace excellence by evaluating leadership, communication, and team dynamics.',
    image: '/images/corporate_culture.avif',
    gradient: 'from-purple-500 to-pink-500',
    borderColor: 'border-purple-500/30',
  },
  {
    name: 'Sales and Customer Support',
    description: 'Strengthen customer interactions by evaluating empathy, problem-solving, and service communication skills.',
    image: '/images/sales_and_customer_support.avif',
    gradient: 'from-indigo-500 to-purple-500',
    borderColor: 'border-indigo-500/30',
  },
  {
    name: 'Adolescence Development',
    description: 'Support youth growth with insights into social behavior, emotional skills, and decision-making patterns.',
    image: '/images/adolescence_development.avif',
    gradient: 'from-yellow-500 to-amber-500',
    borderColor: 'border-yellow-500/30',
  },
];

function IndustryCard({ industry, index }: { industry: typeof industries[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group cursor-pointer"
    >
      {/* Outer glow effect on hover */}
      <div className={`absolute inset-0 bg-linear-to-br ${industry.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-2xl rounded-2xl -z-10`} />

      {/* Card */}
      <div className={`relative bg-[#0a0a0a]/60 backdrop-blur-sm rounded-2xl border ${industry.borderColor} overflow-hidden transition-all duration-300 h-full flex flex-col`}>
        {/* Image Container with reduced height */}
        <div className="relative w-full h-80 overflow-hidden">
          <Image
            src={industry.image}
            alt={industry.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col grow">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
            {industry.name}
          </h3>
          <p className="text-gray-300 leading-relaxed text-sm grow">
            {industry.description}
          </p>

          {/* Read More Button */}
          {/* <div className="mt-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r ${industry.gradient} text-white text-sm font-semibold shadow-lg`}>
              <span>Read More</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div> */}
        </div>

        {/* Animated bottom accent */}
        <motion.div
          className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-linear-to-r ${industry.gradient} rounded-full`}
          initial={{ width: 0 }}
          animate={isInView ? { width: '80%' } : { width: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
        />
      </div>
    </motion.div>
  );
}

export default function IndustriesWeServe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="industries" className="relative py-20 px-6 overflow-hidden">
      <div className="max-container">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-linear-to-r from-white via-emerald-300 to-teal-400 bg-clip-text text-transparent">
            Industries We Serve
          </h2>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-8">
          {industries.map((industry, index) => (
            <IndustryCard key={index} industry={industry} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

