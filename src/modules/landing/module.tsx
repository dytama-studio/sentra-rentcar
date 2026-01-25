"use client";
import React from "react";
import HeroSection from "./hero";
import CarSection from "./car";
import WhyChooseUs from "./whychooseus";
import HowToUseSection from "./howtouse";
import FAQSection from "./fqa";
import TestimonialsSection from "./testimonials";
import CTASection from "./cta";

export default function LandingModule() {
  return (
    <>
      <HeroSection />
      <CarSection />
      <HowToUseSection />
      <WhyChooseUs />
      <FAQSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
