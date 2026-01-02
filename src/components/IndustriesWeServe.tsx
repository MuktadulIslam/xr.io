import Image from 'next/image';

const industries = [
  {
    name: 'Healthcare',
    description: 'Enhance clinical performance through real-time evaluation of teamwork, communication, and decision-making.',
    image: '/images/healthcare_industry.avif',
    gradient: 'from-emerald-500 to-teal-500',
    borderColor: 'border-emerald-500/30',
  },
  {
    name: 'Education',
    description: 'Develop emotionally intelligent learners with insights into communication, collaboration, and social behavior.',
    image: '/images/education_industry.avif',
    gradient: 'from-blue-500 to-cyan-500',
    borderColor: 'border-blue-500/30',
  },
  {
    name: 'Public Safety',
    description: 'Strengthen frontline readiness with assessments that measure judgment, situational awareness, and stress response.',
    image: '/images/public_safety_edited.avif',
    gradient: 'from-red-500 to-orange-500',
    borderColor: 'border-red-500/30',
  },
  {
    name: 'Corporate Leadership',
    description: 'Elevate workplace excellence by evaluating leadership, communication, and team dynamics.',
    image: '/images/corporate_culture.avif',
    gradient: 'from-purple-500 to-pink-500',
    borderColor: 'border-purple-500/30',
  },
  {
    name: 'Sales and Customer Support',
    description: 'Strengthen customer interactions by evaluating empathy, problem-solving, and service communication skills.',
    image: '/images/sales_and_customer_support.avif',
    gradient: 'from-indigo-500 to-purple-500',
    borderColor: 'border-indigo-500/30',
  },
  {
    name: 'Adolescence Development',
    description: 'Support youth growth with insights into social behavior, emotional skills, and decision-making patterns.',
    image: '/images/adolescence_development.avif',
    gradient: 'from-yellow-500 to-amber-500',
    borderColor: 'border-yellow-500/30',
  },
];

function IndustryCard({ industry, index }: { industry: typeof industries[0]; index: number }) {

  return (
    <div className="relative group cursor-pointer">
      {/* Outer glow effect on hover */}
      <div className={`absolute inset-0 bg-linear-to-br ${industry.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-2xl rounded-2xl -z-10`} />

      {/* Card */}
      <div className={`relative bg-[#0a0a0a]/60 backdrop-blur-sm rounded-2xl border ${industry.borderColor} overflow-hidden transition-all duration-300 h-full flex flex-col`}>
        {/* Image Container with reduced height */}
        <div className="relative w-full h-80 overflow-hidden">
          <Image
            src={industry.image}
            alt={industry.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col grow">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
            {industry.name}
          </h3>
          <p className="text-gray-300 leading-relaxed text-sm grow">
            {industry.description}
          </p>

          {/* <div className="mt-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r ${industry.gradient} text-white text-sm font-semibold shadow-lg`}>
              <span>Read More</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div> */}
        </div>

        {/* Animated bottom accent */}
        <div className={`absolute w-[80%] bottom-0 left-1/2 -translate-x-1/2 h-1 bg-linear-to-r ${industry.gradient} rounded-full`} />
      </div>
    </div>
  );
}

export default function IndustriesWeServe() {

  return (
    <section id="industries" className="z-10 relative py-5 px-3 lg:px-6 overflow-hidden mb-12 lg:mb-20">
      <div className="max-container">
        {/* Header */}
        <div className="text-center mb-6 md:mb-10 lg:mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold h-12 md:h-14 lg:h-18 bg-linear-to-r from-white via-emerald-300 to-teal-400 bg-clip-text text-transparent">
            Industries We Serve
          </h2>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6  gap-5 xl:gap-8">
          {industries.map((industry, index) => (
            <IndustryCard key={index} industry={industry} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}