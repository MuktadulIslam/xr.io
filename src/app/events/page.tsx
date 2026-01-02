'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { HiCheckCircle, HiClock, HiSparkles } from 'react-icons/hi2';
import { getActiveEvents } from '@/config/events';
import { getReadEventIds, markEventAsRead } from '@/utils/eventStorage';

export default function EventsPage() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [readEvents, setReadEvents] = useState<string[]>([]);

    useEffect(() => {
        setReadEvents(getReadEventIds());
    }, []);

    const events = getActiveEvents();

    const handleEventClick = (eventId: string, link: string) => {
        // Mark event as read
        markEventAsRead(eventId);
        setReadEvents(prev => [...prev, eventId]);

        // Open link in new tab
        window.open(link, '_blank', 'noopener,noreferrer');
    };

    const formatDate = (date: Date) => {
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }).format(new Date(date));
    };

    return (
        <main className="relative bg-[#0a0a0a] pt-6 md:pt-24 px-4 lg:px-6 mb-14 sm:mb-16 md:mb-20">
            <div className="max-container relative z-10">
                {/* Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-4 md:mb-6"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 sm:py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                        <HiSparkles className="w-4 h-4 text-cyan-400" />
                        <span className="text-xs sm:text-sm font-semibold text-cyan-300 uppercase tracking-wider">
                            Our Upcoming Events
                        </span>
                    </div>
                </motion.div>

                {/* Events Grid */}
                {events.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center py-20"
                    >
                        <HiClock className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                        <p className="text-gray-400 text-lg">No events available at the moment.</p>
                    </motion.div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {events.map((event, index) => {
                            const isRead = readEvents.includes(event.id);

                            return (
                                <motion.div
                                    key={event.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="relative group"
                                >
                                    {/* Card */}
                                    <motion.div
                                        whileHover={{ y: -8 }}
                                        transition={{ duration: 0.3 }}
                                        onClick={() => handleEventClick(event.id, event.link)}
                                        className="relative bg-linear-to-br from-[#05090b]/80 via-[#0a0a0a]/60 to-[#05090b]/80 backdrop-blur-sm rounded-xl sm:rounded-3xl border border-cyan-500/20 hover:border-cyan-500/40 overflow-hidden cursor-pointer h-full flex flex-col shadow-xl"
                                    >
                                        {/* Read badge */}
                                        {isRead && (
                                            <div className="absolute top-4 right-4 z-10">
                                                <div className="bg-emerald-500/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1.5 border border-emerald-400/30">
                                                    <HiCheckCircle className="w-4 h-4 text-white" />
                                                    <span className="text-xs font-semibold text-white">Read</span>
                                                </div>
                                            </div>
                                        )}

                                        {/* Image */}
                                        <div className="relative w-full aspect-video overflow-hidden">
                                            <Image
                                                src={event.bannerImage}
                                                alt={event.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent" />
                                        </div>

                                        {/* Content */}
                                        <div className="px-3 py-2 sm:px-4 sm:py-3 flex-1 flex flex-col">
                                            <div className="">
                                                <p className="text-xs text-cyan-400 font-semibold uppercase tracking-wider sm:mb-1">
                                                    {formatDate(event.createdAt)}
                                                </p>
                                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                                                    {event.title}
                                                </h3>
                                            </div>

                                            <p className="text-gray-400 text-sm leading-relaxed flex-1">
                                                {event.description}
                                            </p>

                                            {/* CTA */}
                                            <div className="mt-4 flex items-center gap-2 text-cyan-400 font-semibold text-sm group-hover:text-cyan-300 transition-colors">
                                                <span>Learn More</span>
                                                <motion.span
                                                    animate={{ x: [0, 5, 0] }}
                                                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                                                >
                                                    →
                                                </motion.span>
                                            </div>
                                        </div>

                                        {/* Bottom accent */}
                                        <div className="h-1 bg-linear-to-r from-cyan-400 via-emerald-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </div>
                )}
            </div>
        </main>
    );
}