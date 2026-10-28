import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import FacilitiesSection from "@/components/home/FacilitiesSection";
import ProgrammesSection from "@/components/home/ProgrammesSection";
import MembershipPreview from "@/components/home/MembershipPreview";
import TrainersPreview from "@/components/home/TrainersPreview";
import GallerySection from "@/components/home/GallerySection";
import PhilosophySection from "@/components/home/PhilosophySection";
import FAQSection from "@/components/home/FAQSection";
import ConversionCTA from "@/components/home/ConversionCTA";

export const metadata: Metadata = {
  title: "Iron District Fitness | Premium Gym in Bengaluru",
  description:
    "Iron District Fitness — premium strength training, personal training, and group fitness gym in Bengaluru. Built by discipline. Defined by progress.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <FacilitiesSection />
      <ProgrammesSection />
      <MembershipPreview />
      <TrainersPreview />
      <GallerySection />
      <PhilosophySection />
      <FAQSection />
      <ConversionCTA />
    </>
  );
}
