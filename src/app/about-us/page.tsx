import Image from 'next/image';
import { HiSparkles, HiHeart, HiAcademicCap, HiUsers, HiShieldCheck } from 'react-icons/hi2';
import { FaLinkedin } from 'react-icons/fa';

const values = [
    {
        icon: HiShieldCheck,
        title: 'Integrity in Innovation',
        description: 'Ensuring our technology serves people first',
        gradient: 'from-emerald-500 to-teal-500',
        iconBg: 'bg-emerald-500/20',
        borderColor: 'border-emerald-500/30',
        iconColor: 'text-emerald-400',
    },
    {
        icon: HiAcademicCap,
        title: 'Scientific Rigor',
        description: 'Grounding every feature in research and evidence',
        gradient: 'from-blue-500 to-cyan-500',
        iconBg: 'bg-blue-500/20',
        borderColor: 'border-blue-500/30',
        iconColor: 'text-blue-400',
    },
    {
        icon: HiUsers,
        title: 'Accessibility',
        description: 'Making transformative learning available to all',
        gradient: 'from-purple-500 to-pink-500',
        iconBg: 'bg-purple-500/20',
        borderColor: 'border-purple-500/30',
        iconColor: 'text-purple-400',
    },
    {
        icon: HiHeart,
        title: 'Humanity',
        description: 'Always keeping the human experience at the heart of our work',
        gradient: 'from-pink-500 to-rose-500',
        iconBg: 'bg-pink-500/20',
        borderColor: 'border-pink-500/30',
        iconColor: 'text-pink-400',
    },
];

const teamMembers = [
    {
        name: 'Farzana Aktar',
        role: 'Chief Executive Officer',
        title: 'Co-founder',
        bio: 'Computer science scholar and entrepreneur. Her expertise spans VR training system design, integration of learning theories, participatory design methods, psychometric evaluation in VR, authoring tools, VR user experience and interaction design, and speech recognition using machine learning models.',
        image: '/images/about-us/farzana_aktar.jpeg',
        linkedin: 'https://www.linkedin.com/in/farzana-aktar-b17976173/',
        gradient: 'from-cyan-500 to-blue-500',
    },
    {
        name: 'Hamza Afzaal',
        role: 'Chief Technology Officer',
        title: 'Co-founder',
        bio: 'Computer science scholar and entrepreneur with a focus on scientific visualization, virtual reality, haptics, and AI. Specializing in surface generation, immersive haptics, and novel approaches for interactive surface visualizations with force-based haptic feedback, with applications in extended-reality-based healthcare simulations.',
        image: '/images/about-us/hamza_afzaal.jpeg',
        linkedin: 'https://www.linkedin.com/in/ammerhamza/',
        gradient: 'from-purple-500 to-pink-500',
    },
];

function ValueCard({ value, index }: { value: typeof values[0]; index: number }) {
    const IconComponent = value.icon;

    return (
        <div className="relative group">
            {/* Glow effect */}
            <div className={`absolute inset-0 bg-linear-to-br ${value.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl rounded-2xl`} />

            <div className={`relative bg-[#0a0a0a]/60 backdrop-blur-sm p-6 rounded-2xl border ${value.borderColor} hover:border-opacity-60 transition-all duration-300 h-full flex flex-col`}>
                {/* Icon */}
                <div className={`${value.iconBg} p-4 rounded-xl border ${value.borderColor} w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`${value.iconColor} text-3xl`} />
                </div>

                {/* Content */}
                <h3 className={`text-xl font-bold text-white mb-2 group-hover:bg-linear-to-r group-hover:${value.gradient} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                    {value.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                    {value.description}
                </p>

                {/* Bottom accent */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-linear-to-r ${value.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </div>
        </div>
    );
}

function TeamMemberCard({ member, index }: { member: typeof teamMembers[0]; index: number }) {
    return (
        <div className="z-10 relative group">
            {/* Outer glow */}
            <div className={`absolute inset-0 bg-linear-to-br ${member.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-2xl rounded-3xl`} />

            <div className="relative bg-[#0a0a0a]/80 backdrop-blur-sm rounded-3xl border border-cyan-500/20 overflow-hidden transition-all duration-300 h-full flex flex-col">
                {/* Image Container */}
                <div className="relative w-full aspect-square overflow-hidden">
                    <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />

                    {/* LinkedIn Button - Floating on image */}
                    <a
                        className="absolute top-4 right-4 hover:scale-110 hover:-translate-y-1.5 bg-[#0a0a0a]/90 backdrop-blur-sm p-1.5 lg:p-2 rounded-lg border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 group/linkedin"
                    >
                        <FaLinkedin className="w-6 h-6 lg:w-8, lg:h-8 text-cyan-400 group-hover/linkedin:text-cyan-300 transition-colors" />
                    </a>

                    {/* Title Badge */}
                    <div className="absolute bottom-4 left-4">
                        <span className={`inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full bg-linear-to-r ${member.gradient} text-white shadow-lg`}>
                            {member.title}
                        </span>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-4 flex flex-col grow">
                    <h3 className={`text-2xl font-bold bg-linear-to-r ${member.gradient} bg-clip-text text-transparent`}>
                        {member.name}
                    </h3>

                    <p className="text-cyan-400 font-semibold mb-4 text-sm">
                        {member.role}
                    </p>

                    <p className="text-gray-300 text-sm leading-relaxed grow">
                        {member.bio}
                    </p>
                </div>

                {/* Bottom accent line */}
                <div className={`w-full h-1 bg-linear-to-r ${member.gradient}`} />
            </div>
        </div>
    );
}

export default function AboutUs() {
    return (
        <div className="relative min-h-screen bg-[#0a0a0a] max-container">
            {/* Hero Image Section */}
            <section className="z-10 relative w-full max-lg:aspect-3/2 lg:h-svh max-h-[800px] overflow-hidden">
                <Image
                    src="/images/about-us/1747086090109.jpeg"
                    alt="About CraftXR"
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#0a0a0a]/30 to-[#0a0a0a]" />
                <div className="absolute top-0 h-16 lg:h-40 w-full bg-linear-to-t from-transparent via-[#0a0a0a]/50 to-[#0a0a0a]" />
            </section>

            {/* Vision & Values Section */}
            <section className="relative overflow-hidden">
                <div className="max-container px-3 lg:px-6">
                    {/* Section Header */}
                    <div className="text-center mb-12 lg:mb-16">
                        <div className="inline-flex items-center gap-1.5 lg:gap-2 px-3 py-1 lg:px-4 lg:py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
                            <HiSparkles className="w-4 h-4 text-cyan-400" />
                            <span className="text-xs lg:text-sm font-semibold text-cyan-300 uppercase tracking-wider">Vision & Values</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Our Vision & <span className="bg-linear-to-r from-cyan-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent">Values</span>
                        </h2>

                        <div className="max-w-4xl mx-auto space-y-4 text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed">
                            <p>
                                We envision a world where human-centered skills are recognized, measured, and nurtured with the same rigor as technical ability. At CraftXR, we believe that{' '}
                                <span className="text-emerald-400 font-semibold">empathy, clarity, and thoughtful decision-making</span> are the foundations of high-trust, high-impact teams.
                            </p>
                            <p>
                                Our values guide everything we build: Together, these principles shape our mission to{' '}
                                <span className="text-cyan-400 font-semibold">elevate the way people learn, grow, and connect</span> in a rapidly evolving world.
                            </p>
                        </div>
                    </div>

                    {/* Values Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {values.map((value, index) => (
                            <ValueCard key={index} value={value} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Meet the Team Section */}
            <section className="relative py-12 lg:py-20 px-4 overflow-hidden">
                <div className="max-container">
                    {/* Section Header */}
                    <div className="text-center mb-12 lg:mb-16">
                        <div className="inline-flex items-center gap-1.5 lg:gap-2 px-3 py-1 lg:px-4 lg:py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
                            <HiUsers className="w-4 h-4 text-purple-400" />
                            <span className="text-xs lg:text-sm font-semibold text-purple-300 uppercase tracking-wider">Our Team</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                            Meet the <span className="bg-linear-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">Team</span>
                        </h2>

                        <p className="text-gray-300 text-sm md:text-base lg:text-lg max-w-3xl mx-auto">
                            The passionate minds behind CraftXR, dedicated to transforming learning through innovation and technology.
                        </p>
                    </div>

                    {/* Team Grid - Responsive: 1 col on mobile, 2 cols on md+, adapts to more members */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
                        {teamMembers.map((member, index) => (
                            <TeamMemberCard key={index} member={member} index={index} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}