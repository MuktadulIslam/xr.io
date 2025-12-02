'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { IoMdClose } from "react-icons/io";
import Image from 'next/image';
import {
	HiSparkles,
	HiCube,
	HiAcademicCap,
	HiBriefcase,
	HiShieldCheck,
	HiChatBubbleLeftRight,
	HiUserGroup,
	HiChevronDown,
	HiArrowRight
} from 'react-icons/hi2';
import {
	FaHospital,
	FaBars,
	FaTimes
} from 'react-icons/fa';
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { PiVirtualRealityFill } from 'react-icons/pi';

const solutionsItems = [
	{
		title: 'EvalNTS',
		description: 'AI-Evaluator for Non-technical Skills',
		icon: HiSparkles,
		href: '#',
		gradient: 'from-purple-500 to-pink-500',
		iconColor: 'text-purple-400',
		iconBg: 'bg-purple-500/10',
	},
	{
		title: 'No-Code VR',
		description: 'Build VR experiences without coding',
		icon: HiCube,
		href: '#',
		gradient: 'from-blue-500 to-cyan-500',
		iconColor: 'text-blue-400',
		iconBg: 'bg-blue-500/10',
	},
	{
		title: 'Realistic VR Simulations',
		description: 'Immersive training environments',
		icon: PiVirtualRealityFill,
		href: '#',
		gradient: 'from-teal-500 to-emerald-500',
		iconColor: 'text-teal-400',
		iconBg: 'bg-teal-500/10',
	},
];

const industriesItems = [
	{
		title: 'Healthcare',
		icon: FaHospital,
		href: '#',
		gradient: 'from-cyan-500 to-blue-500',
		iconColor: 'text-cyan-400',
		iconBg: 'bg-cyan-500/10',
	},
	{
		title: 'Education',
		icon: HiAcademicCap,
		href: '#',
		gradient: 'from-blue-500 to-indigo-500',
		iconColor: 'text-blue-400',
		iconBg: 'bg-blue-500/10',
	},
	{
		title: 'Corporate Leadership',
		icon: HiBriefcase,
		href: '#',
		gradient: 'from-emerald-500 to-teal-500',
		iconColor: 'text-emerald-400',
		iconBg: 'bg-emerald-500/10',
	},
	{
		title: 'Public Safety',
		icon: HiShieldCheck,
		href: '#',
		gradient: 'from-teal-500 to-cyan-500',
		iconColor: 'text-teal-400',
		iconBg: 'bg-teal-500/10',
	},
	{
		title: 'Sales & Customer Support',
		icon: HiChatBubbleLeftRight,
		href: '#',
		gradient: 'from-purple-500 to-violet-500',
		iconColor: 'text-purple-400',
		iconBg: 'bg-purple-500/10',
	},
	{
		title: 'Adolescence Development',
		icon: HiUserGroup,
		href: '#',
		gradient: 'from-indigo-500 to-purple-500',
		iconColor: 'text-indigo-400',
		iconBg: 'bg-indigo-500/10',
	},
];

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [solutionsOpen, setSolutionsOpen] = useState(false);
	const [industriesOpen, setIndustriesOpen] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Close dropdowns when clicking outside
	useEffect(() => {
		const handleClick = () => {
			setSolutionsOpen(false);
			setIndustriesOpen(false);
		};
		if (solutionsOpen || industriesOpen) {
			document.addEventListener('click', handleClick);
			return () => document.removeEventListener('click', handleClick);
		}
	}, [solutionsOpen, industriesOpen]);

	// Prevent body scroll when mobile menu is open
	useEffect(() => {
		if (mobileMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [mobileMenuOpen]);

	return (
		<motion.nav
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5 }}
			className={`relative lg:fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
				? 'bg-[#073030]/40 backdrop-blur-xl shadow-2xl shadow-emerald-500/10'
				: 'bg-transparent'
				}`}
		>
			{/* Glossy overlay effect - only visible when scrolled */}
			{scrolled && (
				<>
					<div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent pointer-events-none" />
					<div className="absolute inset-0 bg-linear-to-r from-emerald-500/5 via-transparent to-teal-500/5 pointer-events-none" />
				</>
			)}

			<div className="max-container px-6 py-2 relative z-10">
				<div className="flex items-center justify-between">
					{/* Logo */}
					<motion.a
						href="/"
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.2 }}
						className="flex items-center relative group"
					>
						<div className="absolute -inset-3 bg-linear-to-r from-emerald-500/20 to-teal-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
						<Image
							src="/images/logo/craftxr-ryan-white.png"
							alt="CraftXR Logo"
							width={140}
							height={50}
							className="h-10 lg:h-12 w-auto relative z-10 drop-shadow-2xl"
						/>
					</motion.a>

					{/* Desktop Menu */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.2 }}
						className="hidden lg:flex items-center gap-5"
					>
						{/* Solutions Dropdown */}
						<div
							className="relative"
							onMouseEnter={() => setSolutionsOpen(true)}
							onMouseLeave={() => setSolutionsOpen(false)}
							onClick={(e) => e.stopPropagation()}
						>
							<button className={`flex items-center gap-2 hover:bg-white/10 ${solutionsOpen ? 'bg-white/10' : ''} rounded-lg text-gray-200 hover:text-white transition-all duration-300 group px-4 py-2 relative overflow-hidden`}>
								<span className="relative z-10 font-medium">Our Solutions</span>
								<motion.div
									animate={{ rotate: solutionsOpen ? 180 : 0 }}
									transition={{ duration: 0.3 }}
									className="relative z-10"
								>
									<HiChevronDown className="w-4 h-4" />
								</motion.div>
							</button>

							<AnimatePresence>
								{solutionsOpen && (
									<motion.div
										initial={{ opacity: 0, y: -20, scale: 0.7 }}
										animate={{ opacity: 1, y: 0, scale: 1 }}
										exit={{ opacity: 0, y: -20, scale: 0.7 }}
										transition={{ duration: 0.3, ease: "easeOut" }}
										className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[380px] bg-[#0a0a0a]/95 backdrop-blur-2xl border border-emerald-500/40 rounded-3xl shadow-2xl overflow-hidden"
										style={{
											boxShadow: '0 25px 50px -12px rgba(16, 185, 129, 0.3), 0 0 0 1px rgba(16, 185, 129, 0.1)',
										}}
									>
										<div className="space-y-2 p-2 relative z-10">
											{solutionsItems.map((item, index) => {
												const IconComponent = item.icon;
												return (
													<a
														key={index}
														href={item.href}
														className="group/item flex items-start gap-4 p-2 rounded-2xl hover:bg-white/5 transition-all duration-300 relative overflow-hidden border border-transparent hover:border-emerald-500/20"
													>
														{/* Hover gradient background */}
														<div className={`absolute inset-0 bg-linear-to-br ${item.gradient} opacity-0 group-hover/item:opacity-5 transition-opacity duration-300`} />

														{/* Icon container with glow effect */}
														<div className={`relative ${item.iconBg} p-3 rounded-xl border border-transparent group-hover/item:border-emerald-400/30 transition-all duration-300`}>
															<div className={`absolute inset-0 ${item.iconBg} opacity-0 group-hover/item:opacity-100 blur-xl transition-opacity duration-300`} />
															<IconComponent className={`relative w-7 h-7 ${item.iconColor} group-hover/item:scale-110 transition-transform duration-300`} />
														</div>

														<div className="flex-1 relative z-10">
															<h4 className={`font-bold text-white text-lg`}>
																{item.title}
															</h4>
															<p className="text-sm text-gray-400 group-hover/item:text-gray-300 leading-relaxed">
																{item.description}
															</p>
														</div>

														{/* Arrow indicator */}
														<motion.div
															className="self-center opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"
															whileHover={{ x: 3 }}
														>
															<HiArrowRight className={`w-5 h-5 ${item.iconColor}`} />
														</motion.div>

														{/* Bottom shine effect on hover */}
														<div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-emerald-400/0 group-hover/item:via-emerald-400/30 to-transparent transition-all duration-300" />
													</a>
												);
											})}
										</div>

										{/* Bottom accent */}
										<div className="h-1 bg-linear-to-r from-purple-500 via-emerald-500 to-cyan-500" />
									</motion.div>
								)}
							</AnimatePresence>
						</div>

						{/* Industries Dropdown */}
						<div
							className="relative"
							onMouseEnter={() => setIndustriesOpen(true)}
							onMouseLeave={() => setIndustriesOpen(false)}
							onClick={(e) => e.stopPropagation()}
						>
							<button className={`flex items-center gap-2 hover:bg-white/10 ${industriesOpen ? 'bg-white/10' : ''} rounded-lg text-gray-200 hover:text-white transition-all duration-300 group px-4 py-2 relative overflow-hidden`}>
								<span className="relative z-10 font-medium">Industries We Serve</span>
								<motion.div
									animate={{ rotate: industriesOpen ? 180 : 0 }}
									transition={{ duration: 0.3 }}
									className="relative z-10"
								>
									<HiChevronDown className="w-4 h-4" />
								</motion.div>
							</button>

							<AnimatePresence>
								{industriesOpen && (
									<motion.div
										initial={{ opacity: 0, y: -20, scale: 0.7 }}
										animate={{ opacity: 1, y: 0, scale: 1 }}
										exit={{ opacity: 0, y: -20, scale: 0.7 }}
										transition={{ duration: 0.3, ease: "easeOut" }}
										className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[450px] bg-[#0a0a0a]/95 backdrop-blur-2xl border border-emerald-500/20 rounded-3xl shadow-2xl overflow-hidden"
										style={{
											boxShadow: '0 25px 50px -12px rgba(16, 185, 129, 0.3), 0 0 0 1px rgba(16, 185, 129, 0.1)',
										}}
									>
										<div className="p-2 grid grid-cols-3 gap-2 relative z-10">
											{industriesItems.map((item, index) => {
												const IconComponent = item.icon;
												return (
													<a
														key={index}
														href={item.href}
														className="group/item flex flex-col items-center justify-start gap-2 p-2 rounded-2xl hover:bg-white/5 border border-transparent hover:border-teal-500/20 transition-all duration-300 text-center relative overflow-hidden"
													>
														<div className={`relative ${item.iconBg} p-3 rounded-xl border border-transparent group-hover/item:border-teal-400/30 transition-all duration-300`}>
															<IconComponent className={`relative w-8 h-8 ${item.iconColor} group-hover/item:scale-110 transition-transform duration-300`} />
														</div>

														<span className={`text-sm font-semibold text-gray-300 relative z-10`}>
															{item.title}
														</span>
													</a>
												);
											})}
										</div>

										{/* Bottom accent */}
										<div className="h-1 bg-linear-to-r from-cyan-500 via-emerald-500 to-purple-500" />
									</motion.div>
								)}
							</AnimatePresence>
						</div>

						{/* Regular Links */}
						<a
							href="#about"
							className="hover:bg-white/10 rounded-lg text-gray-200 hover:text-white transition-all duration-300 px-4 py-2 relative group overflow-hidden font-medium"
						>
							<span className="relative z-10">About Us</span>
						</a>
						<a
							href="#blog"
							className="hover:bg-white/10 rounded-lg text-gray-200 hover:text-white transition-all duration-300 px-4 py-2 relative group overflow-hidden font-medium"
						>
							<span className="relative z-10">Blogs</span>
						</a>

						{/* CTA Button */}
						<motion.button
							whileHover={{ scale: 1.05, y: -2 }}
							whileTap={{ scale: 0.95 }}
							className="ml-10 px-5 py-3 bg-linear-to-r from-emerald-500 to-teal-500 rounded-xl text-white font-semibold transition-all duration-300 relative overflow-hidden group flex items-center gap-1"
						>
							<motion.div
								animate={{
									rotate: [0, 10, -10, 0],
								}}
								transition={{
									duration: 0.5,
									repeat: Infinity,
									repeatDelay: 2,
								}}
								className="relative z-10"
							>
								<MdOutlineBookmarkAdd className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
							</motion.div>
							<span className="relative z-10">Book a Demo!</span>

							{/* Continuous shine effect */}
							<motion.div
								animate={{
									x: ['-200%', '200%'],
								}}
								transition={{
									duration: 2,
									repeat: Infinity,
									repeatDelay: 1,
									ease: "easeInOut"
								}}
								className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent skew-x-12"
							/>

							{/* Glossy hover shine effect */}
							<div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
							<div className="absolute inset-0 bg-linear-to-b from-white/20 to-transparent" />
						</motion.button>
					</motion.div>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						className="lg:hidden text-white p-2"
					>
						{mobileMenuOpen ? (
							<FaTimes className="w-6 h-6" />
						) : (
							<FaBars className="w-6 h-6" />
						)}
					</button>
				</div>

				{/* Mobile Menu - Full Screen Overlay */}
				<AnimatePresence>
					{mobileMenuOpen && (
						<>
							{/* Menu Content */}
							<motion.div
								initial={{ x: '100%' }}
								animate={{ x: 0 }}
								exit={{ x: '100%' }}
								transition={{ type: 'spring', damping: 25, stiffness: 200 }}
								className="fixed top-0 right-0 bottom-0 w-full sm:w-96 bg-[#073030]/95 backdrop-blur-2xl border-l border-emerald-500/30 shadow-2xl shadow-emerald-500/20 z-50 lg:hidden overflow-y-auto"
							>

								<div className="relative z-10 px-6 pb-6 pt-2 space-y-6">
									{/* Close button */}
									<div className="flex justify-between items-center mb-8">
										<Image
											src="/images/logo/craftxr-ryan-white.png"
											alt="CraftXR Logo"
											width={120}
											height={40}
											className="h-10 w-auto drop-shadow-2xl"
										/>
										<button
											onClick={() => setMobileMenuOpen(false)}
											className="p-1 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300"
										>
											<IoMdClose className="w-7 h-7 font-light text-white" />
										</button>
									</div>

									{/* Solutions Section */}
									<div className="space-y-3">
										<button
											onClick={() => setSolutionsOpen(!solutionsOpen)}
											className="flex items-center justify-between w-full text-white font-semibold text-lg group"
										>
											<span className="flex items-center gap-2">
												<HiSparkles className="w-5 h-5 text-emerald-400" />
												Our Solutions
											</span>
											<motion.div
												animate={{ rotate: solutionsOpen ? 180 : 0 }}
												transition={{ duration: 0.3 }}
												className="text-emerald-400"
											>
												<HiChevronDown className="w-5 h-5" />
											</motion.div>
										</button>

										<AnimatePresence>
											{solutionsOpen && (
												<motion.div
													initial={{ opacity: 0, height: 0 }}
													animate={{ opacity: 1, height: 'auto' }}
													exit={{ opacity: 0, height: 0 }}
													transition={{ duration: 0.3 }}
													className="space-y-2 overflow-hidden"
												>
													{solutionsItems.map((item, index) => {
														const IconComponent = item.icon;
														return (
															<a
																key={index}
																href={item.href}
																className="flex items-start gap-4 p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 group/item relative overflow-hidden"
																onClick={() => setMobileMenuOpen(false)}
															>

																{/* Icon with glow */}
																<div className="relative">
																	<div className={`relative ${item.iconBg} p-2 rounded-xl border border-transparent`}>
																		<IconComponent className={`w-6 h-6 ${item.iconColor}`} />
																	</div>
																</div>

																<div className="flex-1 relative z-10">
																	<h4 className='font-bold text-white'>
																		{item.title}
																	</h4>
																	<p className="text-xs text-gray-400 leading-relaxed">
																		{item.description}
																	</p>
																</div>
															</a>
														);
													})}
												</motion.div>
											)}
										</AnimatePresence>
									</div>

									{/* Divider */}
									<div className="h-px bg-linear-to-r from-transparent via-emerald-500/30 to-transparent" />

									{/* Industries Section */}
									<div className="space-y-3">
										<button
											onClick={() => setIndustriesOpen(!industriesOpen)}
											className="flex items-center justify-between w-full text-white font-semibold text-lg group"
										>
											<span className="flex items-center gap-2">
												<HiBriefcase className="w-5 h-5 text-teal-400" />
												Industries We Serve
											</span>
											<motion.div
												animate={{ rotate: industriesOpen ? 180 : 0 }}
												transition={{ duration: 0.3 }}
												className="text-teal-400"
											>
												<HiChevronDown className="w-5 h-5" />
											</motion.div>
										</button>

										<AnimatePresence>
											{industriesOpen && (
												<motion.div
													initial={{ opacity: 0, height: 0 }}
													animate={{ opacity: 1, height: 'auto' }}
													exit={{ opacity: 0, height: 0 }}
													transition={{ duration: 0.3 }}
													className="grid grid-cols-2 gap-3 overflow-hidden"
												>
													{industriesItems.map((item, index) => {
														const IconComponent = item.icon;
														return (
															<a
																key={index}
																href={item.href}
																className="flex flex-col items-center justify-center gap-3 p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-teal-500/20 hover:border-teal-500/40 transition-all duration-300 group/item text-center relative overflow-hidden"
																onClick={() => setMobileMenuOpen(false)}
															>
																<div className={`relative ${item.iconBg} p-3 rounded-xl`}>
																	<IconComponent className={`w-7 h-7 ${item.iconColor}`} />
																</div>

																<span className={`text-xs font-semibold text-gray-100 relative z-10`}>
																	{item.title}
																</span>
															</a>
														);
													})}
												</motion.div>
											)}
										</AnimatePresence>
									</div>

									{/* Divider */}
									<div className="h-px bg-linear-to-r from-transparent via-emerald-500/30 to-transparent" />

									{/* Regular Links */}
									<div className="space-y-2">
										<a
											href="#about"
											className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-emerald-500/20 hover:border-emerald-500/40 text-white font-medium"
											onClick={() => setMobileMenuOpen(false)}
										>
											<HiUserGroup className="w-5 h-5 text-emerald-400" />
											About Us
										</a>

										<a
											href="#blog"
											className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-emerald-500/20 hover:border-emerald-500/40 text-white font-medium"
											onClick={() => setMobileMenuOpen(false)}
										>
											<HiChatBubbleLeftRight className="w-5 h-5 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300" />
											Blogs
										</a>
									</div>

									{/* CTA Button */}
									<button
										className="w-full px-8 py-3 bg-linear-to-r from-emerald-500 to-teal-500 rounded-lg text-white font-semibold transition-all duration-300 relative overflow-hidden group flex items-center justify-center gap-1"
										onClick={() => setMobileMenuOpen(false)}
									>
										<motion.div
											animate={{
												rotate: [0, 10, -10, 0],
											}}
											transition={{
												duration: 0.5,
												repeat: Infinity,
												repeatDelay: 2,
											}}
											className="relative z-10"
										>
											<MdOutlineBookmarkAdd className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
										</motion.div>
										<span className="relative z-10">Book a Demo!</span>

										{/* Continuous shine effect */}
										<motion.div
											animate={{
												x: ['-200%', '200%'],
											}}
											transition={{
												duration: 2,
												repeat: Infinity,
												repeatDelay: 1,
												ease: "easeInOut"
											}}
											className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent skew-x-12"
										/>

										{/* Glossy hover shine effect */}
										<div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
										<div className="absolute inset-0 bg-linear-to-b from-white/20 to-transparent" />
									</button>
								</div>
							</motion.div>
						</>
					)}
				</AnimatePresence>
			</div>
		</motion.nav>
	);
}