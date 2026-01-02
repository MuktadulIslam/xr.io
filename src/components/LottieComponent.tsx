'use client'
import Lottie from 'lottie-react';

interface LottieProps {
    animationData: any;
    loop?: boolean;
    className?: string;
    scale?: number;
}

export default function LottieComponent({ animationData, loop = true, className = 'w-full h-full', scale = 1 }: LottieProps) {
    return (
        <Lottie
            animationData={animationData}
            loop={loop}
            className={className}
            style={{ transform: `scale(${scale})` }}
        />
    );
}