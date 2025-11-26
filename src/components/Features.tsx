'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    title: 'EvalNTS',
    subtitle: 'AI-Evaluator for Non-technical Skills',
    description:
      'Advanced AI system that evaluates soft skills, communication, teamwork, and decision-making in real-time VR scenarios.',
    icon: '🤖',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'No-Code Development',
    subtitle: 'Create Without Limits',
    description:
      'Intuitive drag-and-drop interface lets educators build complex VR simulations without writing a single line of code.',
    icon: '🎨',
    gradient: 'from-teal-500 to-cyan-600',
  },
  {
    title: 'Realistic VR Simulations',
    subtitle: 'Immersive Learning Experience',
    description:
      'High-fidelity 3D environments that replicate real-world scenarios, providing students with hands-on practice in a safe space.',
    icon: '🥽',
    gradient: 'from-cyan-500 to-emerald-600',
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl -z-10 from-emerald-500/50 to-teal-500/50" />
      
      <div className="relative bg-gradient-to-br from-[#073030]/80 to-[#0a4444]/80 backdrop-blur-sm p-8 rounded-2xl border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 h-full">
        <motion.div
          className={`text-6xl mb-6 inline-block`}
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {feature.icon}
        </motion.div>

        <h3 className="text-2xl font-bold mb-2 text-white">
          {feature.title}
        </h3>
        
        <h4 className={`text-lg font-semibold mb-4 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
          {feature.subtitle}
        </h4>

        <p className="text-gray-300 leading-relaxed">
          {feature.description}
        </p>

        <motion.div
          className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.gradient}`}
          initial={{ width: 0 }}
          animate={isInView ? { width: '100%' } : { width: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
        />
      </div>
    </motion.div>
  );
}

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="features" className="relative py-20 px-6">
      <div className="max-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-300 to-teal-400 bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to create, deploy, and evaluate immersive VR training experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />
    </section>
  );
}

