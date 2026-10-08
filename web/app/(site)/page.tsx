import { FaqPreview } from "@/components/FaqPreview";
import { FeatureGrid } from "@/components/FeatureGrid";
import { Help } from "@/components/Help";
import { Hero } from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import { Reviews } from "@/components/Reviews";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureGrid />
      <Pricing />
      <Reviews />
      <FaqPreview />
      <Help />
    </>
  );
}
