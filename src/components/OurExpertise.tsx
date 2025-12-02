'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaBrain, FaUsers, FaChartLine } from 'react-icons/fa';
import { BsHeadsetVr } from "react-icons/bs";
import { LuBrainCircuit } from "react-icons/lu";
import { HiSparkles } from 'react-icons/hi';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import { FaRobot } from 'react-icons/fa';

const expertiseItems = [
	{
		icon: LuBrainCircuit,
		title: 'Domain-Specific AI Models',
		description: 'Tailored for objectively evaluating non-technical skills',
		color: 'from-purple-500 to-pink-500',
		iconBg: 'bg-purple-500/20',
		borderColor: 'border-purple-500/30',
		textColor: 'text-purple-300',
	},
	{
		icon: BsHeadsetVr,
		title: '3D Virtual Reality Environments',
		description: 'Immersive three-dimensional learning spaces',
		color: 'from-blue-500 to-cyan-500',
		iconBg: 'bg-blue-500/20',
		borderColor: 'border-blue-500/30',
		textColor: 'text-blue-300',
	},
	{
		icon: FaRobot,
		title: 'AI-Powered Avatars',
		description: 'Realistic and interactive communicating avatars',
		color: 'from-teal-500 to-emerald-500',
		iconBg: 'bg-teal-500/20',
		borderColor: 'border-teal-500/30',
		textColor: 'text-teal-300',
	},
];

const skills = [
	{ icon: FaUsers, text: 'Situational Awareness' },
	{ icon: FaBrain, text: 'Self-Regulation' },
	{ icon: IoMdCheckmarkCircle, text: 'Problem Solving' },
	{ icon: FaChartLine, text: 'Decision Making' },
	{ icon: HiSparkles, text: 'Critical Thinking' },
];

export default function OurExpertise() {
	return (
		<section id="expertise" className="relative py-5 px-3 lg:px-6 overflow-hidden mb-12 lg:mb-20">
			<div className="max-container">
				<div className="grid md:grid-cols-2 gap-7 md:gap-12 lg:gap-16 items-center">
					{/* Left side - Content */}
					<div className='lg:ml-5'>
						<div>
							<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-linear-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent mb-3 lg:mb-6">
								Our Expertise
							</h2>
						</div>

						<p className="text-sm md:text-base lg:text-lg text-gray-300 mb-4 lg:mb-8 leading-relaxed max-lg:text-justify">
							We specialize in developing{' '}
							<span className="text-purple-400 font-semibold">domain-specific AI models</span> that objectively
							evaluate non-technical skills. Combined with{' '}
							<span className="text-cyan-400 font-semibold">immersive VR environments</span> and{' '}
							<span className="text-blue-400 font-semibold">intelligent avatars</span>, we create realistic
							scenarios for comprehensive skill assessment.
						</p>

						{/* Expertise Items - Vertical List */}
						<div className="space-y-3 lg:space-y-4">
							{expertiseItems.map((item, index) => (
								<div
									key={index}
									className="group relative hover:translate-x-5 transition-all duration-300"
								>
									{/* Glow effect */}
									<div className={`absolute inset-0 bg-linear-to-r ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl rounded-xl lg:rounded-2xl`} />

									<div className={`relative bg-[#0a0a0a]/40 backdrop-blur-sm p-2 lg:p-3 rounded-xl lg:rounded-2xl border ${item.borderColor} hover:border-opacity-60 transition-all duration-300 flex items-start gap-3 lg:gap-4`}>
										{/* Icon */}
										<div className={`${item.iconBg} p-2 lg:p-4 rounded-xl border ${item.borderColor} shrink-0`}>
											<item.icon className={`text-xl lg:text-3xl ${item.textColor}`} />
										</div>

										{/* Text content */}
										<div className="flex-1">
											<h3 className={`text-base md:text-lg lg:text-xl font-bold ${item.textColor} lg:mb-1`}>
												{item.title}
											</h3>
											<p className="text-xs lg:text-sm text-gray-400">
												{item.description}
											</p>
										</div>
									</div>
								</div>
							))}
						</div>

						{/* Skills Pills */}
						<div className="mt-8">
							<h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-4">
								Skills We Evaluate
							</h3>
							<div className="flex flex-wrap gap-2 lg:gap-3">
								{skills.map((skill, index) => (
									<div
										key={index}
										className="group relative hover:scale-110 hover:-translate-y-1 transition-all duration-300"
									>
										{/* Glow */}
										<div className="absolute inset-0 bg-linear-to-r from-cyan-500/30 to-blue-500/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />

										<div className="relative bg-linear-to-br from-cyan-500/10 to-blue-500/10 px-3 py-1 lg:px-4 lg:py-2 rounded-full border border-cyan-500/30 group-hover:border-cyan-400/60 transition-all duration-300 flex items-center gap-1.5 lg:gap-2">
											<skill.icon className="text-cyan-400 text-sm" />
											<span className="text-xs lg:text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
												{skill.text}
											</span>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Right side - Image */}
					<div className="relative w-full h-auto">
						<div className="relative rounded-3xl overflow-hidden border border-cyan-500/20 shadow-2xl shadow-cyan-500/10">
							<Image
								src="/our_expertise.png"
								alt="Our Expertise"
								width={600}
								height={600}
								className="w-full h-auto object-cover"
								priority
							/>

							{/* Overlay gradient */}
							<div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a]/60 via-transparent to-transparent pointer-events-none" />
						</div>

						{/* Floating elements */}
						<motion.div
							className="absolute -top-2 -right-2 lg:top-6 lg:right-6 bg-linear-to-br from-cyan-300/20 to-blue-300/20 backdrop-blur-md px-4 py-2 lg:px-6 lg:py-3 rounded-2xl border border-cyan-400/30"
							animate={{ y: [0, 10, 0] }}
							transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
						>
							<BsHeadsetVr className="text-2xl lg:text-4xl text-cyan-500" />
						</motion.div>

						<motion.div
							className="absolute -bottom-2 -left-2 lg:bottom-6 lg:left-6 bg-linear-to-br from-purple-300/20 to-pink-300/20 backdrop-blur-md px-4 py-2 lg:px-6 lg:py-3 rounded-2xl border border-purple-400/30"
							animate={{ y: [0, -10, 0] }}
							transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
						>
							<LuBrainCircuit className="text-2xl lg:text-4xl text-purple-500" />
						</motion.div>
					</div>
				</div>
			</div>

			{/* Background decorations */}
			<motion.div
				className="absolute top-1/4 left-0 w-96 h-96 bg-linear-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl -z-10"
				animate={{
					scale: [1, 1.3, 1],
					opacity: [0.2, 0.4, 0.2],
				}}
				transition={{
					duration: 8,
					repeat: Infinity,
					ease: 'easeInOut',
				}}
			/>
			<motion.div
				className="absolute bottom-1/4 right-0 w-96 h-96 bg-linear-to-l from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl -z-10"
				animate={{
					scale: [1, 1.2, 1],
					opacity: [0.3, 0.5, 0.3],
				}}
				transition={{
					duration: 6,
					repeat: Infinity,
					ease: 'easeInOut',
					delay: 2,
				}}
			/>
		</section>
	);
}