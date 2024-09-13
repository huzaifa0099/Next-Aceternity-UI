import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import UpComingWebinar from "@/components/UpComingWebinar";
import WhyChooceUs from "@/components/WhyChooceUs";

export default function Home() {
  return (
    <>
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    <HeroSection />
    <FeaturedCourses />
    <WhyChooceUs />
    <MusicSchoolTestimonials />
    <UpComingWebinar />
    <Instructors />
    </main>
    </>
  );
}
