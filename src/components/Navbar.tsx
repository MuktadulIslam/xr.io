'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
	HiSparkles,
	HiCube,
	HiDevicePhoneMobile,
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
	},
	{
		title: 'No-Code VR',
		description: 'Build VR experiences without coding',
		icon: HiCube,
		href: '#',
	},
	{
		title: 'Realistic VR Simulations',
		description: 'Immersive training environments',
		icon: PiVirtualRealityFill,
		href: '#',
	},
];

const industriesItems = [
	{ title: 'Healthcare', icon: FaHospital, href: '#' },
	{ title: 'Education', icon: HiAcademicCap, href: '#' },
	{ title: 'Corporate Leadership', icon: HiBriefcase, href: '#' },
	{ title: 'Public Safety', icon: HiShieldCheck, href: '#' },
	{ title: 'Sales and Customer Support', icon: HiChatBubbleLeftRight, href: '#' },
	{ title: 'Adolescence Development', icon: HiUserGroup, href: '#' },
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

			<div className="max-container px-6 py-4 relative z-10">
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
							src="/craftxr.png"
							alt="CraftXR Logo"
							width={140}
							height={45}
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
							<button className="flex items-center gap-2 text-gray-200 hover:text-white transition-all duration-300 group px-4 py-2 relative overflow-hidden">
								<span className="relative z-10 font-medium">Our Solutions</span>
								<motion.div
									animate={{ rotate: solutionsOpen ? 180 : 0 }}
									transition={{ duration: 0.3 }}
									className="relative z-10"
								>
									<HiChevronDown className="w-4 h-4" />
								</motion.div>
								<div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
								<div className="absolute inset-0 bg-linear-to-r from-emerald-500/0 via-emerald-500/10 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
							</button>

							<AnimatePresence>
								{solutionsOpen && (
									<motion.div
										initial={{ opacity: 0, y: 10, scale: 0.95 }}
										animate={{ opacity: 1, y: 0, scale: 1 }}
										exit={{ opacity: 0, y: 10, scale: 0.95 }}
										transition={{ duration: 0.3, ease: "easeOut" }}
										className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-96 bg-[#073030]/30 backdrop-blur-2xl border border-emerald-500/30 rounded-3xl shadow-2xl shadow-emerald-500/20 overflow-hidden"
										style={{
											boxShadow: '0 25px 50px -12px rgba(16, 185, 129, 0.25), 0 0 0 1px rgba(16, 185, 129, 0.1)',
										}}
									>
										{/* Glossy overlay */}
										<div className="absolute inset-0 bg-linear-to-b from-white/10 via-white/5 to-transparent pointer-events-none" />
										<div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />

										<div className="p-2 space-y-2 relative z-10">
											{solutionsItems.map((item, index) => {
												const IconComponent = item.icon;
												return (
													<a
														key={index}
														href={item.href}
														className="flex items-start gap-4 p-2 rounded-2xl hover:bg-white/5 transition-all duration-300 group relative overflow-hidden border border-transparent hover:border-emerald-500/30"
													>
														{/* Glossy hover effect */}
														<div className="absolute inset-0 bg-linear-to-br from-emerald-500/0 via-emerald-500/5 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
														<div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/0 group-hover:via-white/20 to-transparent transition-all duration-500" />

														<div className="text-emerald-400 group-hover:text-emerald-300 group-hover:scale-110 transition-all duration-300 relative z-10">
															<IconComponent className="w-9 h-9 drop-shadow-lg" />
														</div>
														<div className="flex-1 relative z-10">
															<h4 className="font-semibold text-white group-hover:text-emerald-300 transition-colors duration-300 text-base">
																{item.title}
															</h4>
															<p className="text-sm text-gray-400 group-hover:text-gray-300 mt-1.5 leading-relaxed">
																{item.description}
															</p>
														</div>
													</a>
												);
											})}
										</div>
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
							<button className="flex items-center gap-2 text-gray-200 hover:text-white transition-all duration-300 group px-4 py-2 relative overflow-hidden">
								<span className="relative z-10 font-medium">Industries We Serve</span>
								<motion.div
									animate={{ rotate: industriesOpen ? 180 : 0 }}
									transition={{ duration: 0.3 }}
									className="relative z-10"
								>
									<HiChevronDown className="w-4 h-4" />
								</motion.div>
								<div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
								<div className="absolute inset-0 bg-linear-to-r from-teal-500/0 via-teal-500/10 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
							</button>

							<AnimatePresence>
								{industriesOpen && (
									<motion.div
										initial={{ opacity: 0, y: 10, scale: 0.95 }}
										animate={{ opacity: 1, y: 0, scale: 1 }}
										exit={{ opacity: 0, y: 10, scale: 0.95 }}
										transition={{ duration: 0.3, ease: "easeOut" }}
										className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[500px] bg-[#073030]/30 backdrop-blur-2xl border border-emerald-500/30 rounded-3xl shadow-2xl shadow-emerald-500/20 overflow-hidden"
										style={{
											boxShadow: '0 25px 50px -12px rgba(16, 185, 129, 0.25), 0 0 0 1px rgba(16, 185, 129, 0.1)',
										}}
									>
										{/* Glossy overlay */}
										<div className="absolute inset-0 bg-linear-to-b from-white/10 via-white/5 to-transparent pointer-events-none" />
										<div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />

										<div className="p-2 grid grid-cols-3 gap-2 relative z-10">
											{industriesItems.map((item, index) => {
												const IconComponent = item.icon;
												return (
													<a
														key={index}
														href={item.href}
														className="w-full aspect-3/2 flex flex-col items-center justify-center gap-2 p-3 rounded-2xl hover:bg-white/5 border border-transparent hover:border-emerald-500/30 transition-all duration-300 group text-center relative overflow-hidden"
													>
														{/* Glossy hover effect */}
														<div className="absolute inset-0 bg-linear-to-br from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/10 group-hover:to-teal-500/10 transition-all duration-500" />
														<div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/0 group-hover:via-white/20 to-transparent transition-all duration-500" />

														<div className="text-emerald-400 group-hover:text-emerald-300 group-hover:scale-110 transition-all duration-300 relative z-10">
															<IconComponent className="w-9 h-9 drop-shadow-lg" />
														</div>
														<span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300 relative z-10">
															{item.title}
														</span>
													</a>
												);
											})}
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</div>

						{/* Regular Links */}
						<a
							href="#about"
							className="text-gray-200 hover:text-white transition-all duration-300 px-4 py-2 relative group overflow-hidden font-medium"
						>
							<span className="relative z-10">About Us</span>
							<div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
							<div className="absolute inset-0 bg-linear-to-r from-emerald-500/0 via-emerald-500/10 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
						</a>
						<a
							href="#blog"
							className="text-gray-200 hover:text-white transition-all duration-300 px-4 py-2 relative group overflow-hidden font-medium"
						>
							<span className="relative z-10">Blogs</span>
							<div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
							<div className="absolute inset-0 bg-linear-to-r from-teal-500/0 via-teal-500/10 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
								{/* Glossy overlay effects */}
								<div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent pointer-events-none" />
								<div className="absolute inset-0 bg-linear-to-br from-emerald-500/10 via-transparent to-teal-500/10 pointer-events-none" />

								<div className="relative z-10 p-6 space-y-6">
									{/* Close button */}
									<div className="flex justify-between items-center mb-8">
										<Image
											src="/craftxr.png"
											alt="CraftXR Logo"
											width={120}
											height={40}
											className="h-10 w-auto drop-shadow-2xl"
										/>
										<button
											onClick={() => setMobileMenuOpen(false)}
											className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300"
										>
											<FaTimes className="w-6 h-6 text-white" />
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
															<motion.a
																key={index}
																href={item.href}
																initial={{ opacity: 0, x: -20 }}
																animate={{ opacity: 1, x: 0 }}
																transition={{ delay: index * 0.1 }}
																className="flex items-start gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 group"
																onClick={() => setMobileMenuOpen(false)}
															>
																<div className="text-emerald-400 group-hover:text-emerald-300 group-hover:scale-110 transition-all duration-300">
																	<IconComponent className="w-6 h-6" />
																</div>
																<div>
																	<h4 className="font-semibold text-white text-sm mb-1">
																		{item.title}
																	</h4>
																	<p className="text-xs text-gray-400 leading-relaxed">
																		{item.description}
																	</p>
																</div>
															</motion.a>
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
													className="grid grid-cols-2 gap-2 overflow-hidden"
												>
													{industriesItems.map((item, index) => {
														const IconComponent = item.icon;
														return (
															<motion.a
																key={index}
																href={item.href}
																initial={{ opacity: 0, scale: 0.9 }}
																animate={{ opacity: 1, scale: 1 }}
																transition={{ delay: index * 0.05 }}
																className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-teal-500/20 hover:border-teal-500/40 transition-all duration-300 group text-center"
																onClick={() => setMobileMenuOpen(false)}
															>
																<div className="text-teal-400 group-hover:text-teal-300 group-hover:scale-110 transition-all duration-300">
																	<IconComponent className="w-7 h-7" />
																</div>
																<span className="text-xs font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
																	{item.title}
																</span>
															</motion.a>
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
										<motion.a
											href="#about"
											whileTap={{ scale: 0.98 }}
											className="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-emerald-500/20 hover:border-emerald-500/40 text-white font-medium transition-all duration-300 group"
											onClick={() => setMobileMenuOpen(false)}
										>
											<HiUserGroup className="w-5 h-5 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300" />
											About Us
											<HiArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
										</motion.a>

										<motion.a
											href="#blog"
											whileTap={{ scale: 0.98 }}
											className="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-emerald-500/20 hover:border-emerald-500/40 text-white font-medium transition-all duration-300 group"
											onClick={() => setMobileMenuOpen(false)}
										>
											<HiChatBubbleLeftRight className="w-5 h-5 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300" />
											Blogs
											<HiArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
										</motion.a>
									</div>

									{/* CTA Button */}
									<motion.button
										whileTap={{ scale: 0.95 }}
										className="w-full px-8 py-3 bg-linear-to-r from-emerald-500 to-teal-500 rounded-xl text-white font-semibold transition-all duration-300 relative overflow-hidden group flex items-center justify-center gap-1"
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
									</motion.button>

									{/* Footer text */}
									<p className="text-center text-xs text-gray-500 mt-8">
										© 2025 CraftXR. All rights reserved.
									</p>
								</div>
							</motion.div>
						</>
					)}
				</AnimatePresence>
			</div>
		</motion.nav>
	);
}