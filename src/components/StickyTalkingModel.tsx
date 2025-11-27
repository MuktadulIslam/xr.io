'use client';

import { Canvas } from '@react-three/fiber';
import { useGLTF, useAnimations, OrbitControls } from '@react-three/drei';
import { Suspense, useEffect, useState } from 'react';

function ChatBubble({ message }: { message: string }) {
    return (
        <div className="absolute max-h-[200px] lg:max-h-[200px] w-[250px] lg:w-[300px] -translate-x-[87%] -translate-y-[82%] pointer-events-none flex justify-end">
            <div className="relative animate-in fade-in slide-in-from-left duration-700">
                {/* Chat bubble with modern design */}
                <div className="relative max-w-full">
                    {/* Main bubble */}
                    <div className="relative bg-linear-to-br from-purple-500 via-violet-500 to-indigo-600 rounded-sm sm:rounded-xl px-2 py-1 lg:px-3 lg:py-2 shadow-2xl">
                        {/* Animated glow effect */}
                        <div className="absolute inset-0 bg-linear-to-br from-purple-400 to-indigo-500 rounded-2xl blur-lg opacity-50 animate-pulse"></div>

                        {/* Text content */}
                        <p className="relative text-white text-xs sm:text-sm font-medium leading-relaxed drop-shadow-md">
                            {message}
                        </p>

                        {/* Subtle shine effect */}
                        <div className="absolute top-2 left-3 right-3 h-6 bg-linear-to-b from-white/20 to-transparent rounded-full blur-sm"></div>
                    </div>

                    {/* Tail/Arrow pointing to the model */}
                    <div className=" absolute -bottom-1 -right-2.5  lg:-right-6 w-0 h-0 -z-20 border-r-15 lg:border-r-40 border-r-transparent border-b-10 lg:border-b-17 border-b-indigo-600 rotate-20"></div>

                </div>
            </div>
        </div>
    )
}

function TalkingModel() {
    const { scene, animations } = useGLTF('/Talking.glb');
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

    return (
        <div className="absolute h-full right-0 top-0 pt-[500px]">
            <div className="h-screen sticky top-0">

                <div className="absolute bottom-0 -translate-x-full pointer-events-none h-[250px] sm:h-[300px] lg:h-[340px] xl:h-[400px] w-[125px] sm:w-[150px] lg:w-[170px] xl:w-[200px] overflow-visible">
                    <ChatBubble message={message} />
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
                </div>
            </div>
        </div>
    );
}

// Preload the model
useGLTF.preload('/Talking.glb');


