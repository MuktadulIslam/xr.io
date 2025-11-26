'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function OurStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="story" className="relative py-20 px-6 overflow-hidden">
      <div className="max-container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left side - Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="w-full h-auto"
          >
            <Image
              src="/out_story2.png"
              alt="Our Story"
              width={600}
              height={600}
              className="w-full h-auto object-cover"
              priority
            />
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h2 className="text-5xl h-20 md:text-6xl font-bold bg-linear-to-r from-white to-emerald-300 bg-clip-text text-transparent">
                Our Story
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg text-gray-300 mb-6 leading-relaxed"
            >
              Our technical backgrounds taught us, sometimes the hard way, that{' '}
              <span className="text-emerald-400 font-semibold">non-technical skills matter just as much</span>, 
              and sometimes even more. That insight inspired CraftXR, built to help professionals grow beyond 
              technical mastery and develop essential human competencies such as{' '}
              <span className="text-teal-400 font-semibold">empathy, critical thinking, situational awareness, and decision-making</span>.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-gray-300 leading-relaxed"
            >
              As researchers, we didn't want our work to sit on a shelf. We wanted it to shape real lives, 
              create meaningful change, and contribute to a better world.{' '}
              <span className="text-emerald-400 font-semibold">CraftXR is our way of transforming research into impact</span>, 
              where innovation serves humanity.
            </motion.p>

            {/* Decorative elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-4 flex gap-4 flex-wrap"
            >
              {['Empathy', 'Critical Thinking', 'Awareness', 'Decision Making'].map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-1.5 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full text-emerald-300 text-sm border border-emerald-500/30"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background decorations */}
      <motion.div
        className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-l from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </section>
  );
}

