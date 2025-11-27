'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Lottie from 'lottie-react';
import consultingAnimation from '../../public/animations/consulting.json';
import developmentAnimation from '../../public/animations/development.json';
import integrationAnimation from '../../public/animations/integration.json';
import maintenanceAnimation from '../../public/animations/maintenance.json';
import { HiLightBulb, HiCube, HiLink, HiCog } from 'react-icons/hi2';

const services = [
  {
    name: 'Consulting',
    type: 'Expert Advice',
    description: 'We provide strategic guidance on integrating domain-specific AI and behavioral analytics to objectively evaluate and elevate your team\'s non-technical skills.',
    animation: consultingAnimation,
    gradient: 'from-amber-500 to-orange-500',
    iconBg: 'bg-amber-500/20',
    borderColor: 'border-amber-500/30',
    icon: HiLightBulb,
    iconColor: 'text-amber-400',
    scale: 1.25,
  },
  {
    name: 'Development',
    type: 'Custom Solutions',
    description: 'We design immersive 3D VR environments and AI-powered interactive avatars that simulate realistic scenarios for advanced non-technical skills training and assessment.',
    animation: developmentAnimation,
    gradient: 'from-violet-500 to-purple-500',
    iconBg: 'bg-violet-500/20',
    borderColor: 'border-violet-500/30',
    icon: HiCube,
    iconColor: 'text-violet-400',
    scale: 1.1,
  },
  {
    name: 'Integration',
    type: 'Seamless Connectivity',
    description: 'We seamlessly integrate AI-driven assessment systems and immersive training technologies into your existing workflows for unified, data-driven performance development.',
    animation: integrationAnimation,
    gradient: 'from-cyan-500 to-blue-500',
    iconBg: 'bg-cyan-500/20',
    borderColor: 'border-cyan-500/30',
    icon: HiLink,
    iconColor: 'text-cyan-400',
    scale: 1,
  },
  {
    name: 'Maintenance',
    type: 'Reliable Support',
    description: 'We provide continuous monitoring, updates, and optimization to ensure your AI and VR training ecosystems run reliably and deliver consistent, high-quality insights.',
    animation: maintenanceAnimation,
    gradient: 'from-blue-300 to-indigo-500',
    iconBg: 'bg-blue-500/20',
    borderColor: 'border-blue-300/30',
    icon: HiCog,
    iconColor: 'text-blue-300',
    scale: 1.35,
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const IconComponent = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="relative group"
    >
      {/* Outer glow effect */}
      <div className={`absolute -inset-1 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-2xl rounded-3xl -z-10`} />

      <div className={`relative bg-linear-to-br from-[#0a0a0a]/80 via-[#0f0f0f]/60 to-[#0a0a0a]/80 backdrop-blur-xl p-8 rounded-3xl border ${service.borderColor} transition-all duration-500 h-full flex flex-col xl:flex-row xl:items-center gap-6 xl:gap-8 overflow-hidden`}>
        {/* Animated background gradient */}
        <motion.div
          className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
          initial={false}
        />

        {/* Animation Container - Side by side on xl */}
        <div className="relative xl:w-2/5 xl:shrink-0 h-72 xl:h-full xl:min-h-[300px] -mx-2 xl:mx-0 rounded-2xl overflow-hidden">
          <div className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-10 rounded-2xl`} />
          <div className={`relative ${service.iconBg} p-6 rounded-2xl border ${service.borderColor} w-full h-full flex items-center justify-center overflow-hidden`}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full"
              >
              <Lottie
                animationData={service.animation}
                loop={true}
                className="w-full h-full"
                style={{ transform: `scale(${service.scale})` }}
              />
            </motion.div>
          </div>
        </div>

        {/* Content section */}
        <div className="flex-1 flex flex-col relative z-10">
          {/* Top section with icon and type */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              {/* Icon with glow */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className={`relative ${service.iconBg} p-4 rounded-2xl border ${service.borderColor} group-hover:border-opacity-60 transition-all duration-300`}
              >
                <div className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-md transition-opacity duration-300`} />
                <IconComponent className={`relative ${service.iconColor} text-3xl`} />
              </motion.div>
              
              <div>
                <h3 className={`text-2xl sm:text-3xl font-bold bg-linear-to-r ${service.gradient} bg-clip-text text-transparent`}>
                  {service.name}
                </h3>
                <div className="mt-2">
                  <span className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-linear-to-r ${service.gradient} text-white shadow-lg`}>
                    {service.type}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed text-base grow">
            {service.description}
          </p>
        </div>

        {/* Bottom accent line with animation */}
        <motion.div
          className={`absolute bottom-0 left-0 h-1 bg-linear-to-r ${service.gradient} rounded-full`}
          initial={{ width: 0 }}
          animate={isInView ? { width: '100%' } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.15 + 0.3 }}
        />

        {/* Corner accent */}
        <div className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-500`} />
      </div>
    </motion.div>
  );
}

export default function OurAdditionalServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="additional-services" className="relative py-24 px-6 overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-linear-to-br from-amber-500/10 via-orange-500/5 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-linear-to-br from-violet-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      <div className="max-container relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-3 bg-linear-to-r from-white via-amber-100 to-cyan-500 bg-clip-text text-transparent leading-tight">
            Our Additional Services
          </h2>
          <p className="text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
            Discover our range of services designed to meet your needs for  <span className="text-blue-600 font-semibold">Skill Development</span> . From <span className="text-cyan-400 font-semibold">concept to implementation</span> , we develop training scenarios tailored to elevate your workforce.
          </p>
        </motion.div>

        {/* Services Grid - 2x2 layout */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
