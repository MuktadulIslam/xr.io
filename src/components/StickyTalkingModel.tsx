'use client';

import { Canvas } from '@react-three/fiber';
import { useGLTF, useAnimations, OrbitControls } from '@react-three/drei';
import { Suspense, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiSpeakerWave, HiEyeSlash, HiEye } from 'react-icons/hi2';
import { PiSpeakerSlashFill } from "react-icons/pi";

function ChatBubble({ message }: { message: string }) {
    return (
        <div className="absolute max-h-[120px] lg:max-h-[150px] w-[188px] lg:w-[225px] -translate-x-[87%] -translate-y-[82%] pointer-events-none flex justify-end">
            <div className="relative animate-in fade-in slide-in-from-left duration-700">
                {/* Chat bubble with modern design */}
                <div className="relative max-w-full">
                    {/* Main bubble */}
                    <div className="relative bg-linear-to-br from-purple-500 via-violet-500 to-indigo-600 rounded-sm sm:rounded-xl px-2 py-1 lg:px-3 lg:py-2 shadow-2xl">
                        {/* Animated glow effect */}
                        <div className="absolute inset-0 bg-linear-to-br from-purple-400 to-indigo-500 rounded-2xl blur-lg opacity-50 animate-pulse"></div>

                        {/* Text content */}
                        <p className="relative text-white text-[9px] sm:text-xs font-medium leading-relaxed drop-shadow-md">
                            {message}
                        </p>

                        {/* Subtle shine effect */}
                        <div className="absolute top-2 left-3 right-3 h-6 bg-linear-to-b from-white/20 to-transparent rounded-full blur-sm"></div>
                    </div>

                    {/* Tail/Arrow pointing to the model */}
                    <div className=" absolute -bottom-1 -right-2.5  lg:-right-5 w-0 h-0 -z-20 border-r-15 lg:border-r-30 border-r-transparent border-b-10 lg:border-b-14 border-b-indigo-600 rotate-20"></div>

                </div>
            </div>
        </div>
    )
}

function TalkingModel() {
    const { scene, animations } = useGLTF('/TalkingWithLogo.glb');
    const { actions, mixer } = useAnimations(animations, scene);

    useEffect(() => {
        // Play all animations
        if (actions) {
            Object.values(actions).forEach((action) => {
                if (action) {
                    action.reset();
                    action.play();
                }
            });
        }

        // Log available animations for debugging
        if (animations.length > 0) {
            console.log('Available animations:', animations.map(a => a.name));
        }
    }, [actions, animations]);

    return (
        <primitive
            object={scene}
            scale={2}
            position={[0, -1.8, 0]}
        />
    );
}

export default function StickyTalkingModel() {
    // const [message, setMessage] = useState("Hey there! I'm an AI assistant. How can I help you today?");
    const [message, setMessage] = useState("Hey there! I'm an AI assistant. How can I help you today? Hey there! I'm an AI assistant. How can I help you today?");
    // const [message, setMessage] = useState("Hey there!");

    const [isMuted, setIsMuted] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [showChatBubble, setShowChatBubble] = useState(true);

    // Placeholder function for mute/unmute - to be implemented later
    const handleMuteToggle = () => {
        setIsMuted(!isMuted);
        // Future implementation: Add actual audio mute/unmute logic here
        console.log(`Avatar ${!isMuted ? 'muted' : 'unmuted'}`);
    };

    // Function to show chat bubble with delay
    const showChatBubbleWithDelay = () => {
        setTimeout(() => {
            setShowChatBubble(true);
        }, 1000);
    };

    const handleHideToggle = () => {
        if (!isHidden) {
            // Hiding: First hide chat bubble, then avatar
            setShowChatBubble(false);
            setTimeout(() => {
                setIsHidden(true);
            }, 200);
        } else {
            // Showing: First show avatar, then trigger chat bubble function
            setIsHidden(false);
            showChatBubbleWithDelay();
        }
    };

    return (
        <div className="absolute h-full right-0 top-0 pt-[500px] z-1000">
            <div className="h-screen sticky top-0">
                <div className="absolute bottom-0 -translate-x-full pointer-events-none h-[187px] sm:h-[225px] lg:h-[255px] xl:h-[300px] w-[94px] sm:w-[113px] lg:w-[127px] xl:w-[150px] overflow-visible">
                    <AnimatePresence mode="wait">
                        {!isHidden ? (
                            <motion.div
                                key="avatar"
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                exit={{ y: "100%" }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="absolute inset-0"
                            >
                                {/* Chat Bubble with fade animation */}
                                <AnimatePresence>
                                    {showChatBubble && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <ChatBubble message={message} />
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Control Buttons */}
                                <div className="absolute -translate-y-full top-2 right-3 lg:translate-y-0  lg:right-2 flex flex-col gap-3 lg:gap-2 pointer-events-auto z-50">
                                    {/* Mute/Unmute Button */}
                                    <button
                                        onClick={handleMuteToggle}
                                        aria-label={isMuted ? "Unmute avatar" : "Mute avatar"}
                                        className="w-7 h-7 flex justify-center items-center bg-[#016868]/90 backdrop-blur-sm p-1 rounded-full border border-cyan-500/30 hover:border-cyan-400/60 hover:scale-110 transition-all duration-300">
                                        {isMuted ? (
                                            <PiSpeakerSlashFill className="w-4 h-4 text-red-400" />
                                        ) : (
                                            <HiSpeakerWave className="w-4 h-4 text-cyan-400" />
                                        )}
                                    </button>

                                    {/* Hide Button */}
                                    <button
                                        onClick={handleHideToggle}
                                        aria-label="Hide avatar"
                                        className="w-7 h-7 flex justify-center items-center bg-[#016868]/90 backdrop-blur-sm rounded-full border border-purple-500/30 hover:border-purple-400/60 hover:scale-110 transition-all duration-300">
                                        <HiEyeSlash className="w-4 h-4 text-purple-400" />
                                    </button>
                                </div>

                                {/* 3D Model Canvas */}
                                <Canvas
                                    camera={{ position: [0, 0, 5], fov: 45 }}
                                    className="pointer-events-auto"
                                >
                                    <Suspense fallback={null}>
                                        <ambientLight intensity={1} />
                                        <directionalLight position={[5, 5, 5]} intensity={1} />
                                        <directionalLight position={[-5, -5, -5]} intensity={0.5} />
                                        <TalkingModel />
                                        <OrbitControls
                                            enableZoom={false}
                                            enablePan={false}
                                            minPolarAngle={Math.PI / 3}
                                            maxPolarAngle={Math.PI / 2}
                                        />
                                    </Suspense>
                                </Canvas>
                            </motion.div>
                        ) : (
                            // Show Avatar Button (when hidden) - Minimal Trapezium Design
                            <motion.button
                                key="show-button"
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                exit={{ y: "100%" }}
                                whileHover={{ y: -4 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleHideToggle}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="absolute inset-x-0 bottom-0 h-6 lg:h-7 group pointer-events-auto"
                                aria-label="Show avatar"
                            >
                                {/* Trapezium Shape - Using clip-path */}
                                <div
                                    className="relative w-full h-full bg-linear-to-br from-cyan-500/90 via-emerald-500/90 to-blue-500/90 backdrop-blur-sm border-t-2 border-x-2 border-cyan-400/50 group-hover:border-cyan-300 shadow-lg shadow-cyan-500/20 transition-all duration-300"
                                    style={{
                                        clipPath: 'polygon(8% 0%, 92% 0%, 100% 100%, 0% 100%)'
                                    }}
                                >
                                    {/* Content */}
                                    <div className="relative h-full flex items-center justify-center">
                                        {/* Icon and Text */}
                                        <div className="flex items-center gap-1 lg:gap-2">
                                            <HiEye className="w-3 h-3 lg:w-4 lg:h-4 text-white drop-shadow-lg" />
                                            <span className="text-white font-bold text-[9px] lg:text-xs drop-shadow-md">AI Assistant</span>
                                        </div>
                                    </div>

                                    {/* Subtle top shine */}
                                    <div className="absolute top-0 left-[10%] right-[10%] h-px bg-white/30" />
                                </div>
                            </motion.button>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

// Preload the model
useGLTF.preload('/TalkingWithLogo.glb');