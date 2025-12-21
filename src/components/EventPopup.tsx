'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { HiXMark } from 'react-icons/hi2';
import { Event, EVENT_CONFIG, getNextPopupEvent } from '@/config/events';
import {
    getReadEventIds,
    markEventAsRead,
    dismissEvent,
    canShowEvent
} from '@/utils/eventStorage';

export default function EventPopup() {
    const [showPopup, setShowPopup] = useState(false);
    const [currentEvent, setCurrentEvent] = useState<Event | null>(null);
    const [isClosing, setIsClosing] = useState(false);
    const [navbarEventsPosition, setNavbarEventsPosition] = useState({ x: 0, y: 0 });

    // Function to load and show next available event
    const loadNextEvent = () => {
        // Get next unread and non-dismissed event
        const readEvents = getReadEventIds();
        const nextEvent = getNextPopupEvent(
            readEvents,
            (eventId) => canShowEvent(eventId, EVENT_CONFIG.POPUP_INTERVAL)
        );

        if (nextEvent) {
            setCurrentEvent(nextEvent);
            setShowPopup(true);
        } else {
            setCurrentEvent(null);
            setShowPopup(false);
        }
    };

    useEffect(() => {
        // Show first popup after configured delay
        const timer = setTimeout(() => {
            loadNextEvent();
        }, EVENT_CONFIG.POPUP_DELAY);

        return () => clearTimeout(timer);
    }, []);

    const handleBannerClick = () => {
        if (currentEvent) {
            // Mark as read
            markEventAsRead(currentEvent.id);

            // Open link in new tab
            window.open(currentEvent.link, '_blank', 'noopener,noreferrer');

            // Close popup (don't load next event)
            setShowPopup(false);
            setCurrentEvent(null);
        }
    };

    const handleClose = () => {
        if (currentEvent) {
            // Mark event as dismissed with timestamp
            dismissEvent(currentEvent.id);
        }

        // Get Events button position in navbar
        const eventsButton = document.getElementById('navbar-events-button');
        if (eventsButton) {
            const rect = eventsButton.getBoundingClientRect();
            setNavbarEventsPosition({
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2,
            });
        }

        setIsClosing(true);

        // After animation completes, close popup (don't load next event)
        setTimeout(() => {
            setShowPopup(false);
            setIsClosing(false);
            setCurrentEvent(null);
        }, EVENT_CONFIG.SHRINK_ANIMATION_DURATION);
    };

    if (!currentEvent) return null;

    return (
        <AnimatePresence>
            {showPopup && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
                        onClick={handleClose}
                    />

                    {/* Popup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={
                            isClosing
                                ? {
                                    opacity: 0,
                                    scale: 0,
                                    x: navbarEventsPosition.x - window.innerWidth / 2,
                                    y: navbarEventsPosition.y - window.innerHeight / 2,
                                }
                                : { opacity: 1, scale: 1, y: 0 }
                        }
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{
                            duration: isClosing
                                ? EVENT_CONFIG.SHRINK_ANIMATION_DURATION / 1000
                                : 0.4,
                            ease: isClosing ? [0.4, 0, 0.2, 1] : [0.4, 0, 0.2, 1],
                        }}
                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90vw] max-w-2xl"
                    >
                        <div className="relative group">
                            {/* Glow effect */}
                            <div className="absolute -inset-1 bg-linear-to-r from-cyan-500 via-emerald-500 to-blue-500 opacity-75 blur-xl rounded-2xl" />

                            {/* Main popup container */}
                            <div className="relative bg-linear-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a] rounded-2xl border-2 border-cyan-500/30 overflow-hidden shadow-2xl">
                                {/* Close button */}
                                <motion.button
                                    whileHover={{ scale: 1.1, rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={handleClose}
                                    className="absolute top-2 right-2 z-10 w-10 h-10 bg-red-500/90 hover:bg-red-600 rounded-full flex items-center justify-center border-2 border-white/20 shadow-lg transition-colors duration-200 group"
                                    aria-label="Close popup"
                                >
                                    <HiXMark className="w-6 h-6 text-white" />
                                </motion.button>

                                {/* Banner Image - Clickable */}
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                    onClick={handleBannerClick}
                                    className="relative cursor-pointer"
                                >
                                    <div className="relative w-full aspect-3/2 overflow-hidden">
                                        <Image
                                            src={currentEvent.bannerImage}
                                            alt={currentEvent.title}
                                            fill
                                            className="object-cover"
                                            priority
                                        />

                                        {/* Gradient overlay */}
                                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

                                        {/* Click hint */}
                                        <div className="absolute inset-0 bg-cyan-500/0 hover:bg-cyan-500/10 transition-colors duration-300 flex items-center justify-center">
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                whileHover={{ opacity: 1 }}
                                                className="bg-black/80 backdrop-blur-sm px-6 py-3 rounded-full border border-cyan-500/50"
                                            >
                                                <p className="text-white font-semibold text-sm">
                                                    Click to learn more →
                                                </p>
                                            </motion.div>
                                        </div>
                                        {/* Overlay gradient */}
                                        <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#0a0a0a]/30 to-[#0a0a0a]" />
                                    </div>

                                    {/* Event info overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 py-3 px-5">
                                        <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                                            {currentEvent.title}
                                        </h3>
                                        <p className="text-gray-200 text-sm md:text-base drop-shadow-md">
                                            {currentEvent.description}
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Bottom accent */}
                                <div className="h-1 bg-linear-to-r from-cyan-400 via-emerald-400 to-blue-400" />
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}