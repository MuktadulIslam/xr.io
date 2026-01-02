'use client';
import { motion } from "framer-motion";

export function LeftToRightEaseInOut({ className = "text-4xl" }: { className?: string }) {
    return (
        <motion.span
            className={className}
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
            →
        </motion.span>
    );
}

export function VerticalArrowConnector({ index }: { index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
            className="md:hidden absolute -bottom-6 left-1/2 -translate-x-1/2 translate-y-1/2 z-20"
        >
            <div className="relative">
                <motion.svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    className="drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]"
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <defs>
                        <linearGradient id={`arrow-gradient-mobile-${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#10b981" />
                            <stop offset="50%" stopColor="#14b8a6" />
                            <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>
                    </defs>
                    <circle cx="20" cy="20" r="18" fill="rgba(7, 48, 48, 0.8)" stroke={`url(#arrow-gradient-mobile-${index})`} strokeWidth="2" />
                    <path
                        d="M20 14V26M20 26L16 22M20 26L24 22"
                        stroke={`url(#arrow-gradient-mobile-${index})`}
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </motion.svg>
            </div>
        </motion.div>
    )
}

export function HorizontalArrowConnector({ index }: { index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
            className="hidden md:block absolute top-1/2 -right-2 lg:-right-5.5 translate-x-1/2 -translate-y-1/2 z-20"
        >
            <div className="relative">
                <motion.svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    className="drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <defs>
                        <linearGradient id={`arrow-gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#10b981" />
                            <stop offset="50%" stopColor="#14b8a6" />
                            <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>
                    </defs>
                    <circle cx="20" cy="20" r="18" fill="rgba(7, 48, 48, 0.8)" stroke={`url(#arrow-gradient-${index})`} strokeWidth="2" />
                    <path
                        d="M14 20H26M26 20L22 16M26 20L22 24"
                        stroke={`url(#arrow-gradient-${index})`}
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </motion.svg>
            </div>
        </motion.div>
    )
}