import consultingAnimation from '../../public/animations/consulting.json';
import developmentAnimation from '../../public/animations/development.json';
import integrationAnimation from '../../public/animations/integration.json';
import maintenanceAnimation from '../../public/animations/maintenance.json';
import { HiLightBulb, HiCube, HiLink, HiCog } from 'react-icons/hi2';
import LottieComponent from './LottieComponent';

const services = [
  {
    name: 'Consulting',
    type: 'Expert Advice',
    description: 'We provide strategic guidance on integrating domain-specific AI and behavioral analytics to objectively evaluate and elevate your team\'s non-technical skills.',
    animation: consultingAnimation,
    gradient: 'from-amber-500 to-orange-500',
    iconBg: 'bg-amber-500/20',
    borderColor: 'border-amber-500/30',
    icon: HiLightBulb,
    iconColor: 'text-amber-400',
    scale: 1.25,
  },
  {
    name: 'Development',
    type: 'Custom Solutions',
    description: 'We design immersive 3D VR environments and AI-powered interactive avatars that simulate realistic scenarios for advanced non-technical skills training and assessment.',
    animation: developmentAnimation,
    gradient: 'from-violet-500 to-purple-500',
    iconBg: 'bg-violet-500/20',
    borderColor: 'border-violet-500/30',
    icon: HiCube,
    iconColor: 'text-violet-400',
    scale: 1.1,
  },
  {
    name: 'Integration',
    type: 'Seamless Connectivity',
    description: 'We seamlessly integrate AI-driven assessment systems and immersive training technologies into your existing workflows for unified, data-driven performance development.',
    animation: integrationAnimation,
    gradient: 'from-cyan-500 to-blue-500',
    iconBg: 'bg-cyan-500/20',
    borderColor: 'border-cyan-500/30',
    icon: HiLink,
    iconColor: 'text-cyan-400',
    scale: 1,
  },
  {
    name: 'Maintenance',
    type: 'Reliable Support',
    description: 'We provide continuous monitoring, updates, and optimization to ensure your AI and VR training ecosystems run reliably and deliver consistent, high-quality insights.',
    animation: maintenanceAnimation,
    gradient: 'from-blue-300 to-indigo-500',
    iconBg: 'bg-blue-500/20',
    borderColor: 'border-blue-300/30',
    icon: HiCog,
    iconColor: 'text-blue-300',
    scale: 1.35,
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const IconComponent = service.icon;

  return (
    <div className="relative group">
      {/* Outer glow effect */}
      <div className={`absolute -inset-1 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-2xl rounded-3xl -z-10`} />

      <div className={`relative bg-linear-to-br from-[#0a0a0a]/80 via-[#0f0f0f]/60 to-[#0a0a0a]/80 backdrop-blur-xl p-5 md:p-6 lg:p-8 rounded-3xl border ${service.borderColor} transition-all duration-500 h-full flex flex-col xl:flex-row xl:items-center gap-4 md:gap-6 xl:gap-8 overflow-hidden`}>
        {/* Animated background gradient */}
        <div className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

        {/* Animation Container - Side by side on xl */}
        <div className="relative xl:w-2/5 xl:shrink-0 h-72 xl:h-full xl:min-h-[300px] -mx-2 -mt-2 xl:mx-0 rounded-2xl overflow-hidden">
          <div className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-10 rounded-2xl`} />
          <div className={`relative ${service.iconBg} rounded-2xl border ${service.borderColor} w-full h-full flex items-center justify-center overflow-hidden`}>
            <div className="w-full h-full hover:scale-110 duration-500">
              <LottieComponent
                animationData={service.animation}
                loop={true}
                className="w-full h-full"
                scale={service.scale}
              />
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="flex-1 flex flex-col relative z-10">
          {/* Top section with icon and type */}
          <div className="flex items-start justify-between mb-3 lg:mb-6">
            <div className="flex items-center gap-4">
              {/* Icon with glow */}
              <div className={`relative ${service.iconBg} p-2 lg:p-4 rounded-lg lg:rounded-2xl border ${service.borderColor} group-hover:border-opacity-60 transition-all duration-300 hover:scale-110 hover:rotate-5 `}>
                <div className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-md transition-opacity duration-300`} />
                <IconComponent className={`relative ${service.iconColor} text-2xl lg:text-3xl`} />
              </div>

              <div>
                <h3 className={`text-xl lg:text-3xl font-bold bg-linear-to-r ${service.gradient} bg-clip-text text-transparent`}>
                  {service.name}
                </h3>
                <div className="lg:mt-2">
                  <span className={`inline-block px-2 lg:px-3 py-0.5 lg:py-1 text-[9px] lg:text-xs font-bold uppercase tracking-wider rounded-full bg-linear-to-r ${service.gradient} text-white shadow-lg`}>
                    {service.type}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed text-sm md:text-base lg:text-lg grow">
            {service.description}
          </p>
        </div>

        <div className={`absolute w-full bottom-0 left-0 h-1 bg-linear-to-r ${service.gradient} rounded-full`} />

        {/* Corner accent */}
        <div className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-500`} />
      </div>
    </div>
  );
}

export default function OurAdditionalServices() {
  return (
    <section id="additional-services" className="relative py-5 px-3 lg:px-6 overflow-hidden mb-12 lg:mb-20">
      <div className="max-container relative z-10">
        {/* Header */}
        <div className="text-center mb-6 md:mb-10 lg:mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold h-12 md:h-14 lg:h-18 bg-linear-to-r from-white via-amber-100 to-cyan-500 bg-clip-text text-transparent leading-tight">
            Our Additional Services
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-300 max-w-5xl mx-auto leading-relaxed">
            Discover our range of services designed to meet your needs for  <span className="text-blue-600 font-semibold">Skill Development</span> . From <span className="text-cyan-400 font-semibold">concept to implementation</span> , we develop training scenarios tailored to elevate your workforce.
          </p>
        </div>

        {/* Services Grid - 2x2 layout */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}