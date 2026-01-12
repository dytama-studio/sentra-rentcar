import React from "react";
import Hero from "@/modules/landing/hero";
import ProductList from "@/modules/landing/product";
import FeatureContent from "@/modules/landing/feature";
import PortofolioContent from "@/modules/landing/portofolio";
import HowWeWorkContent from "@/modules/landing/howwework";
import TechnologyContent from "@/modules/landing/technology";
import FqaContent from "@/modules/landing/fqa";
import WhyChooseUs from "@/modules/landing/whychooseus";
// import PricingPage from "@/modules/landing/pricing";
import PricingPage2 from "@/modules/landing/pricingv2";

export default async function LandingPage() {
  return (
    <>
      <Hero />
      <FeatureContent />
      <ProductList />
      {/* <AboutContent /> */}
      <PortofolioContent />
      <WhyChooseUs />
      <HowWeWorkContent />
      {/* <PricingPage /> */}
      <PricingPage2 />
      <FqaContent />
      {/* <WorkingTogetherContent /> */}
      <TechnologyContent />
    </>
  );
}
