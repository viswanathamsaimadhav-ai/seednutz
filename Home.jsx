import React from "react";
import HeroSection from "../components/home/HeroSection";
import BrandStory from "../components/home/BrandStory";
import FeaturedCategories from "../components/home/FeaturedCategories";
import ProductHighlights from "../components/home/ProductHighlights";
import TrustIndicators from "../components/home/TrustIndicators";
import CTASection from "../components/home/CTASection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <BrandStory />
      <FeaturedCategories />
      <ProductHighlights />
      <TrustIndicators />
      <CTASection />
    </div>
  );
}