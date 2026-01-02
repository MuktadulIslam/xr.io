import Image from 'next/image';
import { HiSparkles, HiArrowRight } from 'react-icons/hi2';

const emotionalIntelligenceCompetencies = [
    {
        heading: 'Self-Perception',
        items: ['Self-Regard', 'Self-Actualization', 'Emotional Self-awareness'],
        image: '/images/intelligence-framework/self-perception.jpg',
        gradient: 'from-emerald-500 to-teal-600',
        iconBg: 'bg-emerald-500/20',
        borderColor: 'border-emerald-500/30',
    },
    {
        heading: 'Self-Expression',
        items: ['Emotional Expression', 'Assertiveness', 'Independence'],
        image: '/images/intelligence-framework/self-expression.png',
        gradient: 'from-cyan-500 to-blue-600',
        iconBg: 'bg-cyan-500/20',
        borderColor: 'border-cyan-500/30',
    },
    {
        heading: 'Interpersonal',
        items: ['Interpersonal Relationships', 'Empathy', 'Social Responsibility'],
        image: '/images/intelligence-framework/interpersonal.png',
        gradient: 'from-purple-500 to-pink-600',
        iconBg: 'bg-purple-500/20',
        borderColor: 'border-purple-500/30',
    },
    {
        heading: 'Decision-making',
        items: ['Problem Solving', 'Reality Testing', 'Impulse Control'],
        image: '/images/intelligence-framework/decision-making.avif',
        gradient: 'from-blue-500 to-indigo-600',
        iconBg: 'bg-blue-500/20',
        borderColor: 'border-blue-500/30',
    },
    {
        heading: 'Stress-management',
        items: ['Flexibility', 'Stress Tolerance', 'Optimism'],
        image: '/images/intelligence-framework/stress-management.avif',
        gradient: 'from-pink-500 to-rose-600',
        iconBg: 'bg-pink-500/20',
        borderColor: 'border-pink-500/30',
    },
];

function CompetencyCard({ competency }: { competency: typeof emotionalIntelligenceCompetencies[0] }) {
    return (
        <div className="relative group h-full z-10">
            {/* Glow effect on hover */}
            <div className={`absolute inset-0 bg-linear-to-r ${competency.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl blur-xl`} />

            <div className={`relative bg-[#0a0a0a]/80 backdrop-blur-sm rounded-2xl border ${competency.borderColor} group-hover:border-opacity-60 transition-all duration-300 overflow-hidden h-full flex flex-col`}>
                {/* Image Section */}
                <div className="relative w-full aspect-square overflow-hidden">
                    <Image
                        src={competency.image}
                        alt={competency.heading}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    />
                    {/* Gradient overlay - darkens more on hover */}
                    <div className="w-full h-24 absolute bottom-0 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent"/>

                    {/* Read More Button - Slides up from bottom on hover */}
                    {/* <div className="absolute h-10 bottom-0 left-0 right-0 flex items-center justify-center pb-6">
                        <button className={`px-4 py-2 bg-linear-to-r ${competency.gradient} rounded-lg text-white font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0`}>
                            <span>Read More</span>
                            <HiArrowRight className="w-4 h-4" />
                        </button>
                    </div> */}
                </div>

                {/* Content Section */}
                <div className="p-3 lg:p-4 flex flex-col flex-1">
                    <h3 className={`text-lg lg:text-xl font-bold mb-2 bg-linear-to-r ${competency.gradient} bg-clip-text text-transparent`}>
                        {competency.heading}
                    </h3>

                    <ul className="space-y-1 flex-1">
                        {competency.items.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-1.5 text-gray-400 text-xs lg:text-sm">
                                <span className={`mt-1 w-1 h-1 rounded-full bg-linear-to-r ${competency.gradient} shrink-0`} />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Bottom accent line */}
                <div className={`w-full h-1 bg-linear-to-r ${competency.gradient}`} />
            </div>
        </div>
    );
}

export default function EmotionalIntelligenceFramework() {
    return (
        <section className="relative py-8 lg:py-12 px-3 lg:px-6 overflow-hidden mb-12 lg:mb-20">
            <div className="max-container">
                <div className="text-center mb-8 lg:mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
                        <HiSparkles className="w-4 h-4 text-cyan-400" />
                        <span className="text-xs lg:text-sm font-semibold text-cyan-300 uppercase tracking-wider">
                            Emotional Intelligence Framework
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Core EI <span className="bg-linear-to-r from-cyan-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent">Competencies</span>
                    </h2>

                    <p className="text-gray-300 text-sm md:text-base lg:text-lg max-w-3xl mx-auto">
                        Our comprehensive framework evaluates five essential dimensions of emotional intelligence, each critical to professional success and personal growth.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
                    {emotionalIntelligenceCompetencies.map((competency, index) => (
                        <CompetencyCard key={index} competency={competency}/>
                    ))}
                </div>
            </div>
        </section>
    )
}