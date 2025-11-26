import ParticlesBackground from '@/components/ParticlesBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import OurStory from '@/components/OurStory';
import OurExpertise from '@/components/OurExpertise';
import OurSolutions from '@/components/OurSolutions';
import Features from '@/components/Features';
import About from '@/components/About';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a]">
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <OurStory />
      <OurExpertise />
      <OurSolutions />
      {/* <Features />
      <About /> */}
      {/* <CTA /> */}
      {/* <Footer /> */}
    </main>
  );
}
