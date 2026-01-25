import { MarqueeCards } from "@/components/testomonials/MarqueeCard";
import React from "react";
import Container from "@/components/container";

const cardsData = [
  {
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    name: "Briar Martin",
    handle: "@neilstellar",
    date: "April 20, 2025",
    platform: "facebook",
  },
  {
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    name: "Avery Johnson",
    handle: "@averywrites",
    date: "May 10, 2025",
    platform: "instagram",
  },
  {
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200",
    name: "Jordan Lee",
    handle: "@jordantalks",
    date: "June 5, 2025",
    platform: "facebook",
  },
  {
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    name: "Briar Martin",
    handle: "@neilstellar",
    date: "April 20, 2025",
    platform: "facebook",
  },
  {
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    name: "Avery Johnson",
    handle: "@averywrites",
    date: "May 10, 2025",
    platform: "instagram",
  },
  {
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200",
    name: "Jordan Lee",
    handle: "@jordantalks",
    date: "June 5, 2025",
    platform: "facebook",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 space-y-10" id="testimonials">
      <Container>
        <div className="flex w-full justify-center">
          <div className="space-y-5 text-center max-w-xl mb-5 lg:mb-8">
            <div>
              <span className="px-4 py-2.5 bg-white border border-gray-200 rounded-full text-primary font-normal text-sm lg:text-md">
                testimonials
              </span>
            </div>

            <h3 className="text-black font-semibold text-2xl lg:text-4xl leading-tight md:leading-snug lg:leading-normal">
              <span className="text-primary me-2">Testimonial</span>
              Dari Pelanggan Kami
            </h3>

            <div className="max-w-2xl text-center">
              <p className="text-black font-normal text-sm lg:text-md">
                Kami memahami bahwa kenyamanan dan kepercayaan adalah hal utama
                dalam perjalanan Anda.
              </p>
            </div>
          </div>
        </div>
        <MarqueeCards data={cardsData} />
        <MarqueeCards data={cardsData} reverse />
      </Container>
    </section>
  );
};

export default TestimonialsSection;
