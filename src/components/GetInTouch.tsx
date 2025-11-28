'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaPaperPlane, FaInstagram, FaYoutube, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { HiUser, HiMail, HiPhone, HiLocationMarker, HiSparkles } from 'react-icons/hi';
import Image from 'next/image';

export default function GetInTouch() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset form after success
    setTimeout(() => {
      setFormData({ firstName: '', lastName: '', phone: '', email: '', message: '' });
      setSubmitSuccess(false);
    }, 3000);
  };

  return (
    <section id="get-in-touch" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-[1500px] mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4"
          >
            <HiSparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-semibold text-cyan-300 uppercase tracking-wider">Contact Us</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            Get In <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent">Touch</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
           We're happy to connect with you. Share your contact information today to learn more about our business and how you can benefit from working with us.
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start"
        >
          {/* Left side - Image and Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 w-full lg:w-[50%] lg:max-w-[500px] xl:max-w-[580px] shrink-0"
          >
            {/* Image Container - No Hover Effects */}
            <div className="relative">
              {/* Image wrapper */}
              <div className="relative overflow-hidden rounded-2xl border-2 border-cyan-500/20 shadow-2xl">
                {/* Image */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-900 to-gray-800">
                  <Image
                    src="/images/get_in_touch.jpg"
                    alt="Get in touch with us"
                    fill
                    className="object-cover"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05090b] via-transparent to-transparent opacity-60" />
                  
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-400/20 to-transparent rounded-bl-full" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-emerald-400/20 to-transparent rounded-tr-full" />
                </div>
              </div>
            </div>

            {/* Contact Information Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="space-y-4"
            >
              {/* Email Card */}
              <motion.a
                href="mailto:contact@craftxr.io"
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 rounded-xl bg-[#05090b]/60 backdrop-blur-sm"
              >
                <div className="shrink-0 w-12 h-12 rounded-lg bg-linear-to-br from-cyan-500/20 to-cyan-500/5 flex items-center justify-center border border-cyan-500/20 group-hover/card:border-cyan-400/40 transition-colors">
                  <HiMail className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">Email</p>
                  <p className="text-white font-medium group-hover/card:text-cyan-400 transition-colors truncate">contact@craftxr.io</p>
                </div>
              </motion.a>

              {/* Location Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="flex items-center gap-4 bg-[#05090b]/60 backdrop-blur-sm"
              >
                <div className="shrink-0 w-12 h-12 rounded-lg bg-linear-to-br from-emerald-500/20 to-emerald-500/5 flex items-center justify-center border border-emerald-500/20">
                  <HiLocationMarker className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">Location</p>
                  <p className="text-white font-medium">Calgary, Alberta, Canada</p>
                </div>
              </motion.div>

              {/* Social Media */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.7, duration: 0.7 }}
                className="p-2 lg:p-4 rounded-xl bg-[#05090b]/60 backdrop-blur-sm border border-cyan-500/20"
              >
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-3">Connect With Us</p>
                <div className="flex items-center gap-3">
                  {[
                    { icon: FaInstagram, href: '#', label: 'Instagram', color: 'from-pink-500 to-purple-500' },
                    { icon: FaYoutube, href: '#', label: 'Youtube', color: 'from-red-500 to-red-600' },
                    { icon: FaFacebook, href: '#', label: 'Facebook', color: 'from-blue-500 to-blue-600' },
                    { icon: FaLinkedin, href: '#', label: 'LinkedIn', color: 'from-blue-600 to-blue-700' },
                  ].map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                        whileHover={{ scale: 1.15, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 hover:from-cyan-500/20 hover:to-blue-500/20 flex items-center justify-center text-cyan-400 hover:text-white transition-all duration-300 border border-cyan-500/20 hover:border-cyan-400/50 group/social overflow-hidden"
                      >
                        {/* Hover gradient background */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover/social:opacity-100 transition-opacity duration-300`} />
                        <IconComponent className="w-5 h-5 relative z-10" />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full lg:flex-1 lg:min-w-0"
          >
            {/* Form Container */}
            <div className="relative group/form">
              {/* Outer glow */}
              <motion.div 
                className="absolute -inset-1 bg-linear-to-br from-cyan-500/20 via-emerald-500/10 to-blue-500/20 opacity-50 group-hover/form:opacity-100 transition-opacity duration-500 blur-2xl rounded-3xl"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              
              <div className="relative rounded-3xl overflow-hidden border-2 border-cyan-500/20 bg-[#05090b]/90 backdrop-blur-xl p-5 xl:p-10 shadow-2xl">
                {/* Decorative corner accents */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-cyan-500/10 to-transparent rounded-bl-[100px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-linear-to-tr from-emerald-500/10 to-transparent rounded-tr-[100px] pointer-events-none" />

                <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                  {/* First Name */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="relative"
                  >
                    <label htmlFor="firstName" className="text-xs font-bold text-cyan-300 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                      <span className="w-1 h-4 bg-linear-to-b from-cyan-400 to-cyan-600 rounded-full" />
                      First Name
                    </label>
                    <div className="relative group/input">
                      {/* Icon */}
                      <motion.div 
                        className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 transition-all duration-300 ${
                          focusedField === 'firstName' ? 'text-cyan-400 scale-110' : 'text-cyan-400/50'
                        }`}
                        animate={focusedField === 'firstName' ? { rotate: [0, -10, 10, 0] } : {}}
                        transition={{ duration: 0.5 }}
                      >
                        <HiUser className="w-5 h-5" />
                      </motion.div>
                      
                      {/* Input */}
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('firstName')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full pl-14 pr-4 py-3.5 bg-[#0a0a0a]/60 backdrop-blur-sm border-2 border-cyan-500/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-sm font-medium"
                        placeholder="Hamza"
                      />
                      
                      {/* Animated bottom line */}
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-400 rounded-full"
                        initial={{ width: 0, opacity: 0 }}
                        animate={focusedField === 'firstName' ? { width: '100%', opacity: 1 } : { width: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 rounded-xl opacity-0 group-hover/input:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                  </motion.div>

                  {/* Last Name */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="relative"
                  >
                    <label htmlFor="lastName" className="block text-xs font-bold text-cyan-300 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                      <span className="w-1 h-4 bg-gradient-to-b from-cyan-400 to-cyan-600 rounded-full" />
                      Last Name
                    </label>
                    <div className="relative group/input">
                      <motion.div 
                        className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 transition-all duration-300 ${
                          focusedField === 'lastName' ? 'text-cyan-400 scale-110' : 'text-cyan-400/50'
                        }`}
                        animate={focusedField === 'lastName' ? { rotate: [0, -10, 10, 0] } : {}}
                        transition={{ duration: 0.5 }}
                      >
                        <HiUser className="w-5 h-5" />
                      </motion.div>
                      
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('lastName')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full pl-14 pr-4 py-3.5 bg-[#0a0a0a]/60 backdrop-blur-sm border-2 border-cyan-500/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-sm font-medium"
                        placeholder="Afzaal"
                      />
                      
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-400 rounded-full"
                        initial={{ width: 0, opacity: 0 }}
                        animate={focusedField === 'lastName' ? { width: '100%', opacity: 1 } : { width: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 rounded-xl opacity-0 group-hover/input:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                  </motion.div>

                  {/* Phone Number */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="relative"
                  >
                    <label htmlFor="phone" className="block text-xs font-bold text-cyan-300 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                      <span className="w-1 h-4 bg-gradient-to-b from-cyan-400 to-cyan-600 rounded-full" />
                      Phone Number
                    </label>
                    <div className="relative group/input">
                      <motion.div 
                        className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 transition-all duration-300 ${
                          focusedField === 'phone' ? 'text-cyan-400 scale-110' : 'text-cyan-400/50'
                        }`}
                        animate={focusedField === 'phone' ? { rotate: [0, 15, -15, 0] } : {}}
                        transition={{ duration: 0.5 }}
                      >
                        <HiPhone className="w-5 h-5" />
                      </motion.div>
                      
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full pl-14 pr-4 py-3.5 bg-[#0a0a0a]/60 backdrop-blur-sm border-2 border-cyan-500/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-sm font-medium"
                        placeholder="+1 (555) 123-4567"
                      />
                      
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-400 rounded-full"
                        initial={{ width: 0, opacity: 0 }}
                        animate={focusedField === 'phone' ? { width: '100%', opacity: 1 } : { width: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 rounded-xl opacity-0 group-hover/input:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                  </motion.div>

                  {/* Email */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="relative"
                  >
                    <label htmlFor="email" className="text-xs font-bold text-cyan-300 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                      <span className="w-1 h-4 bg-linear-to-b from-cyan-400 to-cyan-600 rounded-full" />
                      Email
                    </label>
                    <div className="relative group/input">
                      <motion.div 
                        className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 transition-all duration-300 ${
                          focusedField === 'email' ? 'text-cyan-400 scale-110' : 'text-cyan-400/50'
                        }`}
                        animate={focusedField === 'email' ? { y: [-2, 2, -2] } : {}}
                        transition={{ duration: 0.5 }}
                      >
                        <HiMail className="w-5 h-5" />
                      </motion.div>
                      
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full pl-14 pr-4 py-3.5 bg-[#0a0a0a]/60 backdrop-blur-sm border-2 border-cyan-500/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-sm font-medium"
                        placeholder="hamza.afzaal@example.com"
                      />
                      
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-cyan-400 via-emerald-400 to-blue-400 rounded-full"
                        initial={{ width: 0, opacity: 0 }}
                        animate={focusedField === 'email' ? { width: '100%', opacity: 1 } : { width: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      <div className="absolute inset-0 bg-linear-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 rounded-xl opacity-0 group-hover/input:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                  </motion.div>

                  {/* Message */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                    className="relative"
                  >
                    <label htmlFor="message" className="block text-xs font-bold text-cyan-300 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                      <span className="w-1 h-4 bg-gradient-to-b from-cyan-400 to-cyan-600 rounded-full" />
                      Message
                    </label>
                    <div className="relative group/input">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        rows={4}
                        className="w-full px-4 py-3.5 bg-[#0a0a0a]/60 backdrop-blur-sm border-2 border-cyan-500/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-sm font-medium resize-none"
                        placeholder="Tell us about your project or inquiry..."
                      />
                      
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-400 rounded-full"
                        initial={{ width: 0, opacity: 0 }}
                        animate={focusedField === 'message' ? { width: '100%', opacity: 1 } : { width: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 rounded-xl opacity-0 group-hover/input:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 1.0, duration: 0.5 }}
                    className=""
                  >
                    <motion.button
                      type="submit"
                      disabled={isSubmitting || submitSuccess}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      className="w-full py-4 bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-400 rounded-xl text-white font-bold text-base shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-3 group/button relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {/* Animated background */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-cyan-300 via-emerald-300 to-blue-300"
                        animate={{
                          x: ['-100%', '100%'],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      />
                      
                      {/* Button content */}
                      <span className="relative z-10">
                        {isSubmitting ? 'Sending...' : submitSuccess ? 'Sent Successfully!' : 'Send Message'}
                      </span>
                      
                      <motion.div
                        className="relative z-10"
                        animate={
                          isSubmitting
                            ? { rotate: 360 }
                            : submitSuccess
                            ? { scale: [1, 1.3, 1] }
                            : { x: [0, 4, 0] }
                        }
                        transition={
                          isSubmitting
                            ? { duration: 1, repeat: Infinity, ease: 'linear' }
                            : submitSuccess
                            ? { duration: 0.5 }
                            : { duration: 2, repeat: Infinity, ease: 'easeInOut' }
                        }
                      >
                        <FaPaperPlane className="w-5 h-5" />
                      </motion.div>
                      
                      {/* Success indicator */}
                      {submitSuccess && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: [0, 1.5, 1] }}
                          className="absolute inset-0 bg-emerald-500/20 rounded-xl"
                        />
                      )}
                    </motion.button>
                  </motion.div>
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}