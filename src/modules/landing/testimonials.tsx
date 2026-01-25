import { MarqueeCards } from "@/components/testimonials/MarqueeCard";
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
    rate: 5,
    message:
      "Pelayanannya cepat dan mobilnya bersih banget. Proses booking simpel, admin responsif, dan mobil diantar tepat waktu. Sangat recommended buat perjalanan keluarga.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    name: "Avery Johnson",
    handle: "@averywrites",
    date: "May 10, 2025",
    platform: "instagram",
    rate: 5,
    message:
      "Sewa mobil di sini benar-benar bikin tenang. Kondisi mobil prima, AC dingin, dan harga sesuai dengan yang ditawarkan. Next trip pasti pakai jasa ini lagi.",
  },
  {
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200",
    name: "Jordan Lee",
    handle: "@jordantalks",
    date: "June 5, 2025",
    platform: "facebook",
    rate: 4,
    message:
      "Pengalaman sewa mobil yang memuaskan. Driver ramah dan profesional, perjalanan jadi nyaman dan aman. Cocok buat perjalanan dinas maupun liburan.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    name: "Briar Martin",
    handle: "@neilstellar",
    date: "July 2, 2025",
    platform: "facebook",
    rate: 5,
    message:
      "Mobil datang tepat waktu dan sesuai pesanan. Tidak ribet sama sekali dari booking sampai pengembalian. Pelayanan seperti ini yang dicari.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    name: "Avery Johnson",
    handle: "@averywrites",
    date: "July 18, 2025",
    platform: "instagram",
    rate: 5,
    message:
      "Pilihan mobilnya lengkap dan kondisinya terawat. Cocok buat city trip maupun perjalanan jauh. Adminnya juga enak diajak komunikasi.",
  },
  {
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200",
    name: "Jordan Lee",
    handle: "@jordantalks",
    date: "August 1, 2025",
    platform: "facebook",
    rate: 4,
    message:
      "Harga bersaing dengan kualitas yang bagus. Mobil nyaman dipakai seharian dan prosesnya transparan tanpa biaya tambahan aneh-aneh.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 space-y-10" id="Testimonials">
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
