import { FoodCarousel } from "@/app/components/FoodCarousel";
import { EventsGallerySection } from "@/app/components/EventsGallerySection";
import { FooterSection } from "@/app/components/FooterSection";
import { HeroSection } from "@/app/components/HeroSection";
import { ContactCtaSection } from "@/app/components/ContactCtaSection";
import { ContactSection } from "@/app/components/ContactSection";
import { ServicesEventsSection } from "@/app/components/ServicesEventsSection";
import { StorySection } from "@/app/components/StorySection";
import { TestimonialsSection } from "@/app/components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FoodCarousel />
      <ServicesEventsSection />
      <StorySection />
      <EventsGallerySection />
      <ContactCtaSection />
      <TestimonialsSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
