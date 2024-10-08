import FeaturedSection from "@/components/FeaturedSection";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
  <>
  <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
  
    <HeroSection/>
    <FeaturedSection/>
    <WhyChooseUs/>
    <TestimonialCards/>
    <UpcomingWebinar/>
    <Instructors/>
  </main>
   
  </>
  );
}
