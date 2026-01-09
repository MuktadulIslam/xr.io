import Hero from '@/components/Hero';
import OurStory from '@/components/OurStory';
import OurExpertise from '@/components/OurExpertise';
import OurSolutions from '@/components/OurSolutions';
import OurAdditionalServices from '@/components/OurAdditionalServices';
import Testimonials from '@/components/Testimonials';
import NTSEvaluation from '@/components/NTSEvaluation';
import IndustriesWeServe from '@/components/IndustriesWeServe';
import StickyTalkingModel from '@/components/StickyTalkingModel';

export default function Home() {
  return (
    <>
      <Hero />
      {/* <OurStory /> */}
      <OurSolutions />
      <NTSEvaluation />
      <IndustriesWeServe />
      <OurExpertise />
      <OurAdditionalServices />
      {/* <Testimonials /> */}
      {/* <StickyTalkingModel /> */}
    </>
  );
}
