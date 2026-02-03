import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import AboutSection from '@/components/home/AboutSection';
import FeaturedProperties from '@/components/home/FeaturedProperties';
import CountryGrid from '@/components/home/CountryGrid';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ContactCTA from '@/components/home/ContactCTA';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <WhyChooseUs />
      <AboutSection />
      <FeaturedProperties />
      <CountryGrid />
      <TestimonialsSection />
      <ContactCTA />
    </>
  );
}
