import technicalSkillsAnimation from '../../public/animations/technicalSkills.json';
import codingAnimation from '../../public/animations/coding.json';
import virtualRealityAnimation from '../../public/animations/virtualReality.json';
import LottieComponent from './LottieComponent';

const solutions = [
    {
        name: 'EvalNTS: AI-Evaluator for Non-technical Skills',
        description: 'AI-evaluation for context-specific non-technical skills, providing valuable insights for personalized growth and team efficiency.',
        animation: technicalSkillsAnimation,
        gradient: 'from-purple-500 to-pink-500',
        iconBg: 'bg-purple-500/20',
        borderColor: 'border-purple-500/30',
        scale: 1
    },
    {
        name: 'No-Code VR Development',
        description: 'A web-platform to create VR-ready and scenario-based simulated learning environments without the need for extensive coding, ensuring a seamless and efficient development process.',
        animation: codingAnimation,
        gradient: 'from-blue-500 to-cyan-500',
        iconBg: 'bg-blue-500/20',
        borderColor: 'border-blue-500/30',
        scale: 1.25
    },
    {
        name: 'Realistic VR Simulations',
        description: 'Virtual Reality simulations replicating realistic healthcare-specific scenarios which are rare and difficult to deal with.',
        animation: virtualRealityAnimation,
        gradient: 'from-teal-500 to-emerald-500',
        iconBg: 'bg-teal-500/20',
        borderColor: 'border-teal-500/30',
        scale: 1
    },
];

function SolutionCard({ solution, index }: { solution: typeof solutions[0]; index: number }) {

    return (
        <div className="z-10 relative group hover:scale-105 transition-all duration-300">
            {/* Outer glow effect on hover */}
            <div className={`absolute inset-0 bg-linear-to-br ${solution.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-2xl rounded-3xl -z-10`} />

            {/* Card */}
            <div className={`relative bg-[#0a0a0a]/60 backdrop-blur-sm p-3 lg:p-6 rounded-3xl border ${solution.borderColor} transition-all duration-300 h-full flex flex-col`}>
                {/* Animation Container */}
                <div className="relative mb-3 lg:mb-6 h-64 flex items-center justify-center">
                    <div className={`${solution.iconBg} p-3 rounded-2xl border ${solution.borderColor} w-full h-full flex items-center justify-center`}>
                        <LottieComponent animationData={solution.animation} loop={true} scale={solution.scale} />
                    </div>
                </div>

                {/* Title */}
                <h3 className="text-lg lg:text-xl font-bold text-white mb-2 lg:mb-4 leading-tight">
                    {solution.name}
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed grow text-sm lg:text-base">
                    {solution.description}
                </p>

                {/* Animated bottom accent */}
                <div className={`absolute w-3/5 bottom-0 left-1/2 -translate-x-1/2 h-1 bg-linear-to-r ${solution.gradient} rounded-full`} />
            </div>
        </div>
    );
}

export default function OurSolutions() {

    return (
        <section id="solutions" className="relative py-5 px-3 lg:px-6 overflow-hidden mb-12 lg:mb-20">
            <div className="max-container">
                {/* Header */}
                <div className="text-center mb-6 md:mb-10 lg:mb-12">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold h-12 md:h-14 lg:h-18 bg-linear-to-r from-white via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                        Our Solutions
                    </h2>
                    <p className="text-sm md:text-base lg:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        We offer a variety of solutions. Our primary solution offering is our flagship product: an  <span className="text-cyan-400 font-semibold">AI-powered tool</span> for <span className="text-blue-400 font-semibold">Evaluating Non-echnical Skills</span>.
                    </p>
                </div>

                {/* Solutions Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {solutions.map((solution, index) => (
                        <SolutionCard key={index} solution={solution} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}