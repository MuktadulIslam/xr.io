import ParticlesBackground from '@/components/ParticlesBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import OurStory from '@/components/OurStory';
import OurExpertise from '@/components/OurExpertise';
import OurSolutions from '@/components/OurSolutions';
import OurAdditionalServices from '@/components/OurAdditionalServices';
import Testimonials from '@/components/Testimonials';
import NTSEvaluation from '@/components/NTSEvaluation';
import IndustriesWeServe from '@/components/IndustriesWeServe';
import Footer from '@/components/Footer';
import StickyTalkingModel from '@/components/StickyTalkingModel';
import GetInTouch from '@/components/GetInTouch';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a] overflow-x-hidden">
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <OurStory />
      <OurExpertise />
      <OurSolutions />
      <NTSEvaluation />
      <IndustriesWeServe />
      <OurAdditionalServices />
      <Testimonials />
      <GetInTouch />
      <Footer />
      {/* <StickyTalkingModel /> */}
    </main>
  );
}
