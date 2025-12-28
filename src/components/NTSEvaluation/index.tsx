import Image from 'next/image';
import Link from 'next/link';
import { HorizontalArrowConnector, LeftToRightEaseInOut, VerticalArrowConnector } from './Arrows';

const evaluationFeatures = [
    {
        title: 'Realistic Interactions',
        description:
            'Experience workplace-specific situations that replicate natural interactions that matter most in clinical or workplace settings: communication under pressure, conflict de-escalation, cultural sensitivity, and team coordination.',
        image: '/realistic_interactions.png',
        gradient: 'from-emerald-500 to-teal-600',
        borderColor: 'border-emerald-500/30',
    },
    {
        title: 'AI-powered Evaluation',
        description:
            'Get an objective evaluation of your non-technical skills based on your concrete observable behavior, consisting of verbal and non-verbal language.',
        image: '/ai_powered_evaluation.png',
        gradient: 'from-cyan-500 to-blue-600',
        borderColor: 'border-cyan-500/30',
    },
    {
        title: 'Actionable Feedback',
        description:
            'Focus on what to improve, not just what went wrong. Get unbiased evaluation with specific, actionable insights on performance.',
        image: '/actionable_feedback.png',
        gradient: 'from-purple-500 to-pink-600',
        borderColor: 'border-purple-500/30',
    },
];

function FeatureCard({ feature, index }: { feature: typeof evaluationFeatures[0]; index: number }) {
    return (
        <div className="relative group w-full">
            {/* Glow effect on hover */}
            <div className={`absolute inset-0 bg-linear-to-r ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl blur-xl -z-10`} />

            <div className={`relative bg-linear-to-br from-[#073030]/80 to-[#0a4444]/80 backdrop-blur-sm rounded-2xl border ${feature.borderColor} hover:border-opacity-60 transition-all duration-300 overflow-hidden h-full flex flex-col`}>
                {/* Image Section */}
                <div className="relative w-full aspect-video overflow-hidden">
                    <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-[#073030] via-transparent to-transparent" />
                </div>

                {/* Content Section */}
                <div className="p-3 sm:p-5 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-gray-400 font-semibold text-sm sm:text-base">STEP {index + 1}</span>
                        <div className={`flex-1 h-px bg-linear-to-r ${feature.gradient} opacity-50`} />
                    </div>

                    <h3 className={`text-2xl sm:text-3xl font-bold md:mb-2 bg-linear-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                        {feature.title}
                    </h3>

                    <p className="text-gray-200 leading-relaxed text-sm md:text-base lg:text-lg flex-1">
                        {feature.description}
                    </p>
                </div>

                {/* Bottom accent line */}
                <div className={`w-full absolute bottom-0 left-0 h-1 bg-linear-to-r ${feature.gradient}`} />
            </div>
        </div>
    );
}

export default function NTSEvaluation() {
    return (
        <section id="nts-evaluation" className="relative py-5 px-6 overflow-hidden mb-12 lg:mb-20">
            <div className="max-container">
                {/* Header Section */}
                <div className="text-center mb-6 md:mb-10 lg:mb-12">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold h-12 md:h-14 lg:h-18 bg-linear-to-r from-emerald-300 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                        Flagship Product: EvalNTS
                    </h2>
                    <p className="text-sm md:text-base lg:text-lg text-gray-300 max-w-3xl mx-auto">
                        An AI-evaluator for your non-technical skills.{' '}
                        <Link
                            href="/product-features"
                            className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 underline decoration-cyan-400/50 hover:decoration-cyan-300 underline-offset-4"
                        >
                            Learn more...
                        </Link>
                    </p>
                </div>

                {/* Features Grid with Step Connectors */}
                <div className="grid md:grid-cols-3 gap-12 md:gap-8 lg:gap-12 mb-4 lg:mb-8 relative">
                    {evaluationFeatures.map((feature, index) => (
                        <div key={index} className="z-10 relative flex">
                            <FeatureCard feature={feature} index={index} />

                            {/* Desktop: Horizontal Arrow Connector */}
                            {index < evaluationFeatures.length - 1 && (
                                <>
                                    <HorizontalArrowConnector index={index} />
                                    <VerticalArrowConnector index={index} />
                                </>
                            )}
                        </div>
                    ))}
                </div>

                {/* Bottom CTA Link */}
                <div className="text-center">
                    <Link
                        href="#how-it-works"
                        className="inline-flex items-center gap-2 text-lg font-semibold text-emerald-400 hover:text-emerald-300 transition-all duration-300 group"
                    >
                        <span className="relative text-sm md:text-base lg:text-lg">
                            Find out how it works?
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-emerald-400 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                        </span>
                        <LeftToRightEaseInOut className="text-4xl" />
                    </Link>
                </div>
            </div>
        </section>
    );
}