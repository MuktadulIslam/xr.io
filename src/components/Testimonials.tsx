'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Dr. Ananya Rao',
    role: 'Chief Medical Officer',
    company: 'NovaCare Health Network',
    quote:
      'CraftXR transformed how we train our clinicians. Their IoT-enabled VR simulations helped us reduce critical incident response times by over 30%.',
    image: '/images/profiles/profile1.png',
  },
  {
    name: 'Michael Tan',
    role: 'VP, Talent Development',
    company: 'NextEdge Technologies',
    quote:
      'The level of behavioral insight we get from their non-technical skills evaluation is unmatched. It has completely changed our leadership development programs.',
    image: '/images/profiles/profile2.png',
  },
  {
    name: 'Sara Ahmed',
    role: 'Head of Learning & Development',
    company: 'BrightPath Education Group',
    quote:
      'Our learners love the realism of the scenarios. The combination of IoT data and immersive VR gives us a 360° view of performance.',
    image: '/images/profiles/profile3.png',
  },
  {
    name: 'James O’Connor',
    role: 'Operations Director',
    company: 'UrbanSafe Public Services',
    quote:
      'We can now rehearse rare, high‑risk events in a safe environment. The platform has become a core part of our readiness strategy.',
    image: '/images/profiles/profile4.png',
  },
  {
    name: 'Dr. Ananya Rao',
    role: 'Chief Medical Officer',
    company: 'NovaCare Health Network',
    quote:
      'CraftXR transformed how we train our clinicians. Their IoT-enabled VR simulations helped us reduce critical incident response times by over 30%.',
    image: '/images/profiles/profile1.png',
  },
  {
    name: 'Michael Tan',
    role: 'VP, Talent Development',
    company: 'NextEdge Technologies',
    quote:
      'The level of behavioral insight we get from their non-technical skills evaluation is unmatched. It has completely changed our leadership development programs.',
    image: '/images/profiles/profile2.png',
  },
  {
    name: 'Sara Ahmed',
    role: 'Head of Learning & Development',
    company: 'BrightPath Education Group',
    quote:
      'Our learners love the realism of the scenarios. The combination of IoT data and immersive VR gives us a 360° view of performance.',
    image: '/images/profiles/profile3.png',
  },
  {
    name: 'James O’Connor',
    role: 'Operations Director',
    company: 'UrbanSafe Public Services',
    quote:
      'We can now rehearse rare, high‑risk events in a safe environment. The platform has become a core part of our readiness strategy.',
    image: '/images/profiles/profile4.png',
  },
];

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.25 },
      }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-linear-to-br from-cyan-500/20 via-emerald-500/10 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl rounded-3xl -z-10" />

      <div className="relative h-full rounded-3xl border border-cyan-500/20 bg-[#05090b]/80 backdrop-blur-sm px-6 pt-6 pb-6 flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="relative h-14 w-14 rounded-full overflow-hidden border border-cyan-400/40">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              fill
              sizes="56px"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-cyan-300 uppercase tracking-wide">
              {testimonial.company}
            </p>
            <p className="text-base font-medium text-white">
              {testimonial.name}
            </p>
            <p className="text-sm text-gray-400">{testimonial.role}</p>
          </div>
        </div>

        <div className="relative mt-2">
          <span className="absolute -top-3 -left-1 text-4xl text-cyan-500/40 select-none">
            “
          </span>
          <p className="relative text-xs md:text-sm text-gray-200 leading-relaxed pl-5">
            {testimonial.quote}
          </p>
        </div>

        <div className="mt-auto">
          <motion.div
            className="h-0.5 w-full bg-linear-to-r from-cyan-400 via-emerald-400 to-blue-400 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: '100%' } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="testimonials" className="relative py-20 px-6 overflow-hidden">
      <div className="max-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <p className="text-xs font-semibold tracking-[0.25em] text-cyan-400 uppercase mb-3">
            Testimonials
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-white">
            What our clients are saying
          </h2>
          <p className="text-sm md:text-base text-gray-400 leading-relaxed">
            Our clients share their experiences of working with us and the
            impact our IoT solutions have had on their businesses.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>

      <motion.div
        className="pointer-events-none absolute top-0 right-0 h-72 w-72 rounded-full bg-linear-to-l from-cyan-500/20 to-emerald-500/10 blur-3xl -z-10"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.55, 0.3],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-linear-to-r from-blue-500/15 to-emerald-500/15 blur-3xl -z-10"
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.5,
        }}
      />
    </section>
  );
}

